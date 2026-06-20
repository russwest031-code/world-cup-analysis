import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// ---- Load AFCON 2025-26 shot/possession data ----
function loadAfconData() {
  const afconPath = path.join(root, "scripts", "data", "afcon_2025_2026.csv");
  if (!fs.existsSync(afconPath)) { console.warn("AFCON data not found"); return null; }

  const text = fs.readFileSync(afconPath, "utf8");
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",");

  const teamStats = new Map();

  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(",");
    if (cols.length < 15) continue;
    const row = {};
    headers.forEach((h, idx) => { row[h.trim()] = (cols[idx] || "").trim(); });

    for (const side of [1, 2]) {
      const teamName = row[`Team${side}`];
      if (!teamName) continue;
      const key = teamName.toLowerCase();
      if (!teamStats.has(key)) {
        teamStats.set(key, {
          team: teamName,
          matches: 0,
          totalShots: 0,
          shotsOnTarget: 0,
          totalPossession: 0,
          corners: 0,
        });
      }
      const s = teamStats.get(key);
      s.matches += 1;
      s.totalShots += parseInt(row[`Team ${side} Shot Attempts`]) || 0;
      s.shotsOnTarget += parseInt(row[`Team ${side} Shots on Goal`]) || 0;
      s.totalPossession += parseFloat(row[`Team ${side} Possession percentage`]) || 0;
      s.corners += parseInt(row[`Team ${side} Corner Kicks`]) || 0;
    }
  }

  // Compute averages
  for (const [, s] of teamStats) {
    s.avgShotsPerGame = +(s.totalShots / s.matches).toFixed(1);
    s.avgShotsOnTarget = +(s.shotsOnTarget / s.matches).toFixed(1);
    s.avgPossession = +(s.totalPossession / s.matches).toFixed(1);
    s.shotAccuracy = s.totalShots > 0 ? +(s.shotsOnTarget / s.totalShots * 100).toFixed(0) : 0;
  }

  console.log(`AFCON: loaded ${teamStats.size} teams`);
  return teamStats;
}

// ---- AFCON team name → FIFA code mapping ----
const AFCON_TEAM_MAP = {
  "morocco": "MAR", "senegal": "SEN", "egypt": "EGY", "algeria": "ALG",
  "ghana": "GHA", "cameroon": "CMR", "nigeria": "NGA", "south africa": "RSA",
  "ivory coast": "CIV", "côte d'ivoire": "CIV", "tunisia": "TUN",
  "congo dr": "COD", "dr congo": "COD", "democratic republic of the congo": "COD",
  "burkina faso": "BFA", "mali": "MLI", "cape verde": "CPV",
  "guinea": "GUI", "gabon": "GAB", "angola": "ANG", "zambia": "ZAM",
  "comoros": "COM", "equatorial guinea": "GNQ",
};

export function loadShotData() {
  const afcon = loadAfconData();
  if (!afcon) return null;

  // Convert to code-indexed map
  const byCode = new Map();
  for (const [name, stats] of afcon) {
    const code = AFCON_TEAM_MAP[name];
    if (code) byCode.set(code, stats);
  }

  console.log(`Shot data: ${byCode.size} WC teams have AFCON stats`);
  return byCode;
}
