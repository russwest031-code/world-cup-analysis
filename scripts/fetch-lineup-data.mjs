// Fetch actual starting XIs from ESPN API for completed World Cup matches
// Free, no API key, uses public ESPN scoreboard + summary endpoints

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LINEUP_CACHE = path.join(root, "scripts", "data", "lineup-cache.json");
const CACHE_TTL = 6 * 60 * 60 * 1000;

const ESPN_TEAM_IDS = {
  ARG: 202, FRA: 478, BRA: 205, ENG: 448, ESP: 164, POR: 439, NED: 449,
  GER: 181, BEL: 2650, CRO: 477, URU: 1507, JPN: 216, USA: 206, MEX: 214,
  SEN: 954, IRN: 470, KOR: 218, SUI: 1552, ECU: 2345, MAR: 4527,
  KSA: 1007, CAN: 2062, AUS: 2214, TUN: 1000, CZE: 12505, BIH: 12764,
  QAT: 4392, SCO: 1489, PAR: 2272, TUR: 455, CIV: 230, EGY: 641,
  NGA: 223, ALG: 2298, RSA: 4452, BFA: 2299, MLI: 2303, CPV: 15453,
  CUW: 16231, HAI: 2297, NOR: 1569, AUT: 4554, SWE: 150, PAN: 15075,
  JOR: 15699, IRQ: 2318, NZL: 4467, UZB: 15218, COL: 208, COD: 4347,
  GHA: 227, CRC: 234, CMR: 153, SRB: 452, POL: 1743, WAL: 1557,
  DEN: 468, CHI: 1492, PER: 1486, VEN: 16653, BOL: 2338, JAM: 2335,
};

async function fetchESPN(url) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(url, { signal: controller.signal, headers: { "User-Agent": "world-cup-app/1.0" } });
    clearTimeout(timer);
    if (!res.ok) return null;
    const text = await res.text();
    return JSON.parse(text);
  } catch (e) { return null; }
}

async function getLastMatchLineup(teamCode) {
  // Scan recent dates to find last completed match for this team
  const now = new Date();
  for (let d = 0; d < 14; d++) {
    const date = new Date(now - d * 86400000);
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "");
    const sb = await fetchESPN(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${dateStr}`);
    if (!sb?.events) continue;

    for (const ev of sb.events) {
      const comps = ev.competitions?.[0]?.competitors || [];
      const ourTeam = comps.find(c => c.team?.abbreviation?.toUpperCase() === teamCode);
      if (!ourTeam) continue;

      const isCompleted = ev.status?.type?.completed;
      if (!isCompleted) continue;

      // Fetch full summary with roster
      const summary = await fetchESPN(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/summary?event=${ev.id}`);
      if (!summary?.rosters) continue;

      const roster = summary.rosters.find(r => r.team?.abbreviation?.toUpperCase() === teamCode);
      if (!roster?.roster) continue;

      const starters = roster.roster
        .filter(p => p.starter)
        .map(p => ({
          name: p.athlete?.displayName || p.athlete?.fullName || "",
          position: p.athlete?.position?.abbreviation || "",
          jersey: p.jersey || "",
        }));

      if (starters.length >= 7) {
        // Also check formation from team data
        const formation = ourTeam.formation || "";
        return {
          code: teamCode,
          matchId: ev.id,
          date: ev.date,
          opponent: comps.find(c => c.team?.abbreviation?.toUpperCase() !== teamCode)?.team?.displayName || "",
          formation,
          starters,
          squadSize: (roster.roster || []).length,
          source: "ESPN match summary",
          reliability: starters.length >= 10 ? "high" : "medium",
        };
      }
    }
  }
  return null;
}

function loadCache() {
  if (fs.existsSync(LINEUP_CACHE)) {
    try {
      const cache = JSON.parse(fs.readFileSync(LINEUP_CACHE, "utf8"));
      if (Date.now() - (cache.timestamp || 0) < CACHE_TTL) return cache.data;
    } catch {}
  }
  return null;
}

function saveCache(data) {
  fs.writeFileSync(LINEUP_CACHE, JSON.stringify({ timestamp: Date.now(), data }, null, 2), "utf8");
}

export async function loadLineupData(teamCodes) {
  const cached = loadCache();
  if (cached && Object.keys(cached).length >= 15) {
    console.log(`Lineup cache: ${Object.keys(cached).length} teams`);
    return cached;
  }

  console.log(`Fetching ESPN lineups for ${teamCodes.length} teams...`);
  const lineups = {};

  for (const code of teamCodes) {
    const lineup = await getLastMatchLineup(code);
    if (lineup) {
      lineups[code] = lineup;
      console.log(`  ${code}: ${lineup.starters.length} starters, ${lineup.formation || '?'}, vs ${lineup.opponent} (${lineup.date})`);
    }
    // Rate limit
    await new Promise(r => setTimeout(r, 500));
  }

  saveCache(lineups);
  console.log(`Lineups: ${Object.keys(lineups).length}/${teamCodes.length} teams`);
  return lineups;
}
