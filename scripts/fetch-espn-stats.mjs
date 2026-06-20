import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ESPN_SCOREBOARD = "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard";

// ESPN team name → FIFA code
const TEAM_MAP = {
  "Argentina": "ARG", "France": "FRA", "Brazil": "BRA", "England": "ENG",
  "Spain": "ESP", "Portugal": "POR", "Netherlands": "NED", "Germany": "GER",
  "Belgium": "BEL", "Croatia": "CRO", "Uruguay": "URU", "Japan": "JPN",
  "United States": "USA", "Mexico": "MEX", "Senegal": "SEN", "Iran": "IRN",
  "South Korea": "KOR", "Switzerland": "SUI", "Ecuador": "ECU", "Qatar": "QAT",
  "Wales": "WAL", "Poland": "POL", "Australia": "AUS", "Denmark": "DEN",
  "Tunisia": "TUN", "Costa Rica": "CRC", "Canada": "CAN", "Cameroon": "CMR",
  "Serbia": "SRB", "Morocco": "MAR", "Ghana": "GHA", "Saudi Arabia": "KSA",
  "Ivory Coast": "CIV", "Egypt": "EGY", "Nigeria": "NGA", "Algeria": "ALG",
  "South Africa": "RSA", "Burkina Faso": "BFA", "Mali": "MLI",
  "Cape Verde": "CPV", "Curaçao": "CUW", "Haiti": "HAI",
  "Scotland": "SCO", "Paraguay": "PAR", "Türkiye": "TUR", "Turkey": "TUR",
  "Czechia": "CZE", "Czech Republic": "CZE", "Bosnia and Herzegovina": "BIH",
  "Bosnia & Herzegovina": "BIH", "Norway": "NOR", "Austria": "AUT",
  "Sweden": "SWE", "Hungary": "HUN", "Panama": "PAN", "Jordan": "JOR",
  "Iraq": "IRQ", "New Zealand": "NZL", "Uzbekistan": "UZB",
  "Colombia": "COL", "DR Congo": "COD", "Congo DR": "COD",
  "Chile": "CHI", "Peru": "PER", "Venezuela": "VEN",
  "Bolivia": "BOL", "Jamaica": "JAM", "United Arab Emirates": "UAE",
};

async function fetchScoreboard(dateStr) {
  const url = `${ESPN_SCOREBOARD}?dates=${dateStr}`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "world-cup-app/1.0" } });
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    console.warn(`ESPN fetch failed for ${dateStr}: ${e.message}`);
    return null;
  }
}

function extractTeamStats(data) {
  const teamStats = new Map();
  const events = data?.events || [];
  for (const ev of events) {
    const comps = ev.competitions || [];
    for (const comp of comps) {
      if (!comp.status?.type?.completed) continue;
      for (const competitor of comp.competitors || []) {
        const teamName = competitor.team?.name || competitor.team?.displayName;
        if (!teamName) continue;
        const code = TEAM_MAP[teamName];
        if (!code) continue;
        const stats = competitor.statistics || [];
        if (!stats.length) continue;

        if (!teamStats.has(code)) {
          teamStats.set(code, {
            code,
            name: teamName,
            matches: 0,
            totalShots: 0,
            shotsOnTarget: 0,
            totalPossession: 0,
            corners: 0,
            fouls: 0,
            goals: 0,
          });
        }
        const s = teamStats.get(code);
        s.matches += 1;

        const getStat = (name) => parseFloat(stats.find(s => s.name === name)?.displayValue) || 0;
        s.totalShots += getStat("totalShots");
        s.shotsOnTarget += getStat("shotsOnTarget");
        s.totalPossession += getStat("possessionPct");
        s.corners += getStat("wonCorners");
        s.fouls += getStat("foulsCommitted");
        s.goals += getStat("totalGoals");
      }
    }
  }

  // Compute averages
  for (const [, s] of teamStats) {
    s.avgShots = +(s.totalShots / s.matches).toFixed(1);
    s.avgShotsOnTarget = +(s.shotsOnTarget / s.matches).toFixed(1);
    s.avgPossession = +(s.totalPossession / s.matches).toFixed(1);
    s.avgCorners = +(s.corners / s.matches).toFixed(1);
    s.avgFouls = +(s.fouls / s.matches).toFixed(1);
    s.shotAccuracy = s.totalShots > 0 ? +(s.shotsOnTarget / s.totalShots * 100).toFixed(0) : 0;
  }

  return teamStats;
}

export async function loadESPNStats() {
  // Fetch last 10 days of World Cup matches
  const allStats = new Map();
  const now = new Date();
  for (let i = 0; i < 12; i++) {
    const d = new Date(now - i * 86400000);
    const dateStr = d.toISOString().slice(0, 10).replace(/-/g, "");
    const data = await fetchScoreboard(dateStr);
    if (!data) continue;
    const dayStats = extractTeamStats(data);
    // Merge
    for (const [code, s] of dayStats) {
      if (!allStats.has(code)) {
        allStats.set(code, s);
      } else {
        const existing = allStats.get(code);
        existing.matches += s.matches;
        existing.totalShots += s.totalShots;
        existing.shotsOnTarget += s.shotsOnTarget;
        existing.totalPossession += s.totalPossession;
        existing.corners += s.corners;
        existing.fouls += s.fouls;
        existing.goals += s.goals;
      }
    }
    console.log(`ESPN ${dateStr}: ${dayStats.size} teams`);
  }

  // Recompute averages
  for (const [, s] of allStats) {
    s.avgShots = +(s.totalShots / s.matches).toFixed(1);
    s.avgShotsOnTarget = +(s.shotsOnTarget / s.matches).toFixed(1);
    s.avgPossession = +(s.totalPossession / s.matches).toFixed(1);
    s.shotAccuracy = s.totalShots > 0 ? +(s.shotsOnTarget / s.totalShots * 100).toFixed(0) : 0;
  }

  console.log(`ESPN: loaded stats for ${allStats.size} WC2026 teams (${[...allStats.values()].reduce((a,s)=>a+s.matches,0)} total matches)`);
  return allStats;
}
