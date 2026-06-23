// Fetch WC2026 player data from risingtransfers/world-cup-2026-data
// Computes team-level squad quality metrics

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SQUADS_URL = "https://raw.githubusercontent.com/risingtransfers/world-cup-2026-data/main/data/squads.csv";
const STATS_URL = "https://raw.githubusercontent.com/risingtransfers/world-cup-2026-data/main/data/per90_stats.csv";

const SQUADS_PATH = path.join(root, "scripts", "data", "wc2026_squads.csv");
const STATS_PATH = path.join(root, "scripts", "data", "wc2026_per90_stats.csv");

async function downloadIfNeeded(url, localPath) {
  if (fs.existsSync(localPath)) {
    const age = Date.now() - fs.statSync(localPath).mtimeMs;
    if (age < 86400000) return; // Use cache if < 24 hours old
  }
  try {
    const res = await fetch(url, { headers: { "User-Agent": "world-cup-app/1.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    fs.writeFileSync(localPath, text, "utf8");
    console.log(`Downloaded: ${path.basename(localPath)} (${text.length} bytes)`);
  } catch (e) {
    console.warn(`Failed to download ${url}: ${e.message}`);
  }
}

function parseCSV(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",").map(h => h.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(",");
    if (cols.length < headers.length) continue;
    const row = {};
    headers.forEach((h, idx) => { row[h] = (cols[idx] || "").trim(); });
    rows.push(row);
  }
  return rows;
}

// Country name → FIFA code
const COUNTRY_MAP = {
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
  "Scotland": "SCO", "Paraguay": "PAR", "Turkey": "TUR",
  "Czech Republic": "CZE", "Bosnia and Herzegovina": "BIH",
  "Norway": "NOR", "Austria": "AUT", "Sweden": "SWE", "Hungary": "HUN",
  "Panama": "PAN", "Jordan": "JOR", "Iraq": "IRQ",
  "New Zealand": "NZL", "Uzbekistan": "UZB", "Colombia": "COL",
  "DR Congo": "COD",
};

function codeForCountry(country) {
  return COUNTRY_MAP[country] || null;
}

export async function loadPlayerData() {
  await downloadIfNeeded(SQUADS_URL, SQUADS_PATH);
  await downloadIfNeeded(STATS_URL, STATS_PATH);

  const squads = parseCSV(SQUADS_PATH);
  const stats = parseCSV(STATS_PATH);

  if (!squads.length) {
    console.warn("No player squad data available.");
    return null;
  }

  // Index stats by player_id
  const statsById = new Map();
  for (const s of stats) {
    statsById.set(s.player_id, s);
  }

  // Aggregate per team
  const teams = new Map();
  for (const p of squads) {
    const code = codeForCountry(p.country);
    if (!code) continue;

    if (!teams.has(code)) {
      teams.set(code, {
        code,
        country: p.country,
        players: [],
        _statsById: statsById,
        totalValue: 0,
        avgAge: 0,
        positions: { GK: [], DEF: [], MID: [], FW: [] },
        ratings: [],
        avgRating: 0,
        starCount: 0,
      });
    }
    const t = teams.get(code);
    t.players.push(p);
    t.totalValue += parseInt(p.rt_value_estimate_eur) || 0;

    // Map position to category
    const pos = p.position || "";
    if (pos === "GK") t.positions.GK.push(p);
    else if (["LB", "RB", "CB", "LWB", "RWB"].includes(pos)) t.positions.DEF.push(p);
    else if (["CM", "CDM", "CAM", "LM", "RM"].includes(pos)) t.positions.MID.push(p);
    else t.positions.FW.push(p);

    // Get per-90 stats
    const pStats = statsById.get(p.player_id);
    if (pStats) {
      const rating = parseFloat(pStats.rating) || 0;
      if (rating > 0) {
        t.ratings.push(rating);
        if (rating >= 7.2) t.starCount += 1;
      }
    }
  }

  // Compute averages
  for (const [code, t] of teams) {
    t.avgAge = t.players.length > 0
      ? +(t.players.reduce((s, p) => s + (parseInt(p.age) || 0), 0) / t.players.length).toFixed(1)
      : 0;
    t.avgRating = t.ratings.length > 0
      ? +(t.ratings.reduce((a, b) => a + b, 0) / t.ratings.length).toFixed(2)
      : 0;
    t.squadSize = t.players.length;
    t.totalValueB = +(t.totalValue / 1e9).toFixed(2); // billions EUR
  }

  console.log(`Player data: ${teams.size} teams, ${squads.length} players`);
  return teams;
}
