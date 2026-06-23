// News signal extraction — searches multiple sources for injury/lineup/tactical news
// Runs at refresh time, no single source dependency

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// ---- Multi-source search URLs ----
const SEARCH_SOURCES = [
  // Google News RSS (free, no key)
  (team) => `https://news.google.com/rss/search?q=${encodeURIComponent(team + " World Cup 2026")}&hl=en`,
  // ESPN search (via their RSS)
  (team) => `https://www.espn.com/espn/rss/soccer/news?search=${encodeURIComponent(team)}`,
];

// ---- Injury/suspension keywords ----
const INJURY_KEYWORDS = [
  "injury", "injured", "out of", "ruled out", "doubt", "doubtful",
  "fitness test", "returns from injury", "back from injury",
  "suspension", "suspended", "yellow card", "red card", "banned",
  "受伤", "伤病", "缺阵", "停赛", "伤停", "无缘",
];

const LINEUP_KEYWORDS = [
  "lineup", "starting XI", "expected lineup", "predicted lineup",
  "formation", "to start", "set to start", "fit to start",
  "首发", "预计首发", "阵容", "阵型", "先发",
];

const TACTICAL_KEYWORDS = [
  "tactics", "tactical", "formation", "strategy", "approach",
  "pressing", "counter", "possession", "defensive", "attacking",
  "战术", "阵型", "打法", "策略",
];

// ---- Team name mapping for search ----
const TEAM_SEARCH_NAMES = {
  ARG: ["Argentina"], FRA: ["France"], BRA: ["Brazil"], ENG: ["England"],
  ESP: ["Spain"], POR: ["Portugal"], NED: ["Netherlands"], GER: ["Germany"],
  BEL: ["Belgium"], CRO: ["Croatia"], URU: ["Uruguay"], JPN: ["Japan"],
  USA: ["United States", "USMNT"], MEX: ["Mexico"], SEN: ["Senegal"],
  IRN: ["Iran"], KOR: ["South Korea"], SUI: ["Switzerland"],
  ECU: ["Ecuador"], MAR: ["Morocco"], GHA: ["Ghana"], KSA: ["Saudi Arabia"],
  CAN: ["Canada"], AUS: ["Australia"], TUN: ["Tunisia"], CZE: ["Czech Republic", "Czechia"],
  BIH: ["Bosnia"], QAT: ["Qatar"], SCO: ["Scotland"], PAR: ["Paraguay"],
  TUR: ["Turkey", "Türkiye"], CIV: ["Ivory Coast"], EGY: ["Egypt"],
  NGA: ["Nigeria"], ALG: ["Algeria"], RSA: ["South Africa"],
  BFA: ["Burkina Faso"], MLI: ["Mali"], CPV: ["Cape Verde"],
  CUW: ["Curacao"], HAI: ["Haiti"], NOR: ["Norway"], AUT: ["Austria"],
  SWE: ["Sweden"], PAN: ["Panama"], JOR: ["Jordan"], IRQ: ["Iraq"],
  NZL: ["New Zealand"], UZB: ["Uzbekistan"], COL: ["Colombia"],
  COD: ["DR Congo"], CRO: ["Croatia"], WAL: ["Wales"], POL: ["Poland"],
  CRC: ["Costa Rica"], CMR: ["Cameroon"], SRB: ["Serbia"], CHI: ["Chile"],
  PER: ["Peru"], VEN: ["Venezuela"], BOL: ["Bolivia"], JAM: ["Jamaica"],
};

// ---- Cache ----
const CACHE_DIR = path.join(root, "scripts", "data", "news-cache");
const CACHE_TTL = 4 * 60 * 60 * 1000; // 4 hours
const NEWS_SIGNAL_FETCH_TIMEOUT_MS = Number(process.env.NEWS_SIGNAL_FETCH_TIMEOUT_MS || 5000);
const NEWS_SIGNAL_TOTAL_TIMEOUT_MS = Number(process.env.NEWS_SIGNAL_TOTAL_TIMEOUT_MS || 45000);
const NEWS_SIGNAL_CONCURRENCY = Number(process.env.NEWS_SIGNAL_CONCURRENCY || 6);

async function fetchRSS(url) {
  let timer = null;
  try {
    const controller = new AbortController();
    timer = setTimeout(() => controller.abort(), NEWS_SIGNAL_FETCH_TIMEOUT_MS);
    const res = await fetch(url, { signal: controller.signal, headers: { "User-Agent": "world-cup-app/1.0" } });
    if (!res.ok) return "";
    return await res.text();
  } catch {
    return "";
  } finally {
    if (timer) clearTimeout(timer);
  }
}

function extractArticles(xml) {
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  return items.map(item => {
    const title = (item.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "";
    const desc = (item.match(/<description[^>]*>([\s\S]*?)<\/description>/i) || [])[1] || "";
    const link = (item.match(/<link[^>]*>([\s\S]*?)<\/link>/i) || [])[1] || "";
    const pubDate = (item.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i) || [])[1] || "";
    return { title: decodeXml(title), description: decodeXml(desc), link, pubDate };
  }).filter(a => a.title.length > 0);
}

function decodeXml(text) {
  return String(text || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function matchKeywords(text, keywords) {
  const lower = text.toLowerCase();
  return keywords.filter(kw => lower.includes(kw.toLowerCase()));
}

function extractPlayerNames(text, squadPlayers) {
  // Extract known player names mentioned in text
  const found = [];
  for (const p of (squadPlayers || [])) {
    if (text.toLowerCase().includes(p.toLowerCase())) found.push(p);
  }
  return found;
}

function analyzeTeamNews(code, articles, squadPlayers) {
  let injuryCount = 0, lineupCount = 0, tacticalCount = 0;
  const injuredPlayers = [];
  const lineupHints = [];
  const tacticalHints = [];

  for (const a of articles) {
    const text = `${a.title} ${a.description}`;
    const injuries = matchKeywords(text, INJURY_KEYWORDS);
    const lineups = matchKeywords(text, LINEUP_KEYWORDS);
    const tactics = matchKeywords(text, TACTICAL_KEYWORDS);

    if (injuries.length > 0) {
      injuryCount++;
      const players = extractPlayerNames(text, squadPlayers);
      injuredPlayers.push(...players);
    }
    if (lineups.length > 0) {
      lineupCount++;
      if (a.title.length < 200) lineupHints.push(a.title.slice(0, 150));
    }
    if (tactics.length > 0) {
      tacticalCount++;
      if (a.title.length < 200) tacticalHints.push(a.title.slice(0, 150));
    }
  }

  // Quantify impact
  let injuryPenalty = 0;
  const uniqueInjured = [...new Set(injuredPlayers)];
  if (uniqueInjured.length >= 3) injuryPenalty = -8;
  else if (uniqueInjured.length >= 1) injuryPenalty = -5;
  if (injuryCount >= 5) injuryPenalty = Math.min(injuryPenalty, -10);

  let lineupConfidence = 0;
  if (lineupCount >= 3) lineupConfidence = 3;
  else if (lineupCount >= 1) lineupConfidence = 1;

  let tacticalSignal = 0;
  if (tacticalCount >= 3) tacticalSignal = 2;

  return {
    code,
    articlesFound: articles.length,
    injuryCount,
    lineupCount,
    tacticalCount,
    injuredPlayers: uniqueInjured.slice(0, 8),
    lineupHints: lineupHints.slice(0, 3),
    tacticalHints: tacticalHints.slice(0, 3),
    injuryPenalty,
    lineupConfidence,
    tacticalSignal,
    status: articles.length > 0 ? "connected" : "no-articles",
  };
}

async function searchTeamNews(code, squadPlayers) {
  const names = TEAM_SEARCH_NAMES[code] || [code];
  const cacheFile = path.join(CACHE_DIR, `${code}.json`);

  // Check cache
  if (fs.existsSync(cacheFile)) {
    const age = Date.now() - fs.statSync(cacheFile).mtimeMs;
    if (age < CACHE_TTL) {
      return JSON.parse(fs.readFileSync(cacheFile, "utf8"));
    }
  }

  const allArticles = [];
  for (const name of names) {
    for (const sourceFn of SEARCH_SOURCES) {
      const url = sourceFn(name);
      const xml = await fetchRSS(url);
      if (xml) {
        const articles = extractArticles(xml);
        allArticles.push(...articles);
      }
    }
  }

  // Deduplicate
  const seen = new Set();
  const unique = allArticles.filter(a => {
    const key = a.title.slice(0, 80);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const result = analyzeTeamNews(code, unique.slice(0, 40), squadPlayers);

  // Cache
  if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(cacheFile, JSON.stringify(result, null, 2), "utf8");

  return result;
}

async function runLimited(items, limit, worker, deadline = Infinity) {
  const results = [];
  let cursor = 0;
  const workers = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, async () => {
    while (cursor < items.length && Date.now() < deadline) {
      const index = cursor++;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

export async function loadNewsSignals(teamCodes, playerData) {
  console.log(`Fetching news signals for ${teamCodes.length} teams...`);
  const signals = new Map();
  const deadline = Date.now() + NEWS_SIGNAL_TOTAL_TIMEOUT_MS;

  await runLimited(
    teamCodes,
    NEWS_SIGNAL_CONCURRENCY,
    async code => {
      if (Date.now() >= deadline) return;
      try {
        const players = playerData?.get(code)?.players?.map(p => p.player_name).filter(Boolean) || [];
        const signal = await searchTeamNews(code, players);
        signals.set(code, signal);
        if (signal.status === "connected") {
          console.log(`  ${code}: ${signal.articlesFound} articles, ${signal.injuryCount} injury, ${signal.lineupCount} lineup`);
        }
      } catch (error) {
        signals.set(code, {
          code,
          articlesFound: 0,
          injuryCount: 0,
          lineupCount: 0,
          tacticalCount: 0,
          injuredPlayers: [],
          lineupHints: [],
          tacticalHints: [],
          injuryPenalty: 0,
          lineupConfidence: 0,
          tacticalSignal: 0,
          status: "error",
          error: error.message
        });
      }
    },
    deadline
  );

  for (const code of teamCodes) {
    if (!signals.has(code)) {
      signals.set(code, {
        code,
        articlesFound: 0,
        injuryCount: 0,
        lineupCount: 0,
        tacticalCount: 0,
        injuredPlayers: [],
        lineupHints: [],
        tacticalHints: [],
        injuryPenalty: 0,
        lineupConfidence: 0,
        tacticalSignal: 0,
        status: "timeout"
      });
    }
  }

  const connected = [...signals.values()].filter(s => s.status === "connected").length;
  console.log(`News signals: ${connected}/${teamCodes.length} teams with articles`);
  return signals;
}
