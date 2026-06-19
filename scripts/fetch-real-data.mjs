import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resultsPath = path.join(root, "scripts", "data", "kaggle-results.csv");

// ---- Team name mapping: CSV names → FIFA codes ----
const TEAM_NAME_MAP = {
  "mexico": "MEX", "south africa": "RSA", "south korea": "KOR", "czechia": "CZE",
  "czech republic": "CZE", "canada": "CAN", "bosnia and herzegovina": "BIH",
  "bosnia & herzegovina": "BIH", "qatar": "QAT", "switzerland": "SUI",
  "brazil": "BRA", "morocco": "MAR", "haiti": "HAI", "scotland": "SCO",
  "united states": "USA", "usa": "USA", "paraguay": "PAR",
  "australia": "AUS", "türkiye": "TUR", "turkey": "TUR",
  "germany": "GER", "curaçao": "CUW", "curacao": "CUW",
  "ivory coast": "CIV", "côte d'ivoire": "CIV", "ecuador": "ECU",
  "netherlands": "NED", "japan": "JPN", "sweden": "SWE", "tunisia": "TUN",
  "belgium": "BEL", "egypt": "EGY", "iran": "IRN", "new zealand": "NZL",
  "spain": "ESP", "cape verde": "CPV", "saudi arabia": "KSA", "uruguay": "URU",
  "france": "FRA", "senegal": "SEN", "iraq": "IRQ", "norway": "NOR",
  "argentina": "ARG", "algeria": "ALG", "austria": "AUT", "jordan": "JOR",
  "portugal": "POR", "democratic republic of the congo": "COD",
  "congo dr": "COD", "dr congo": "COD", "uzbekistan": "UZB", "colombia": "COL",
  "england": "ENG", "croatia": "CRO", "ghana": "GHA", "panama": "PAN",
  "italy": "ITA", "greece": "GRE", "ukraine": "UKR", "nigeria": "NGA",
  "chile": "CHI", "united arab emirates": "UAE", "cameroon": "CMR", "china": "CHN",
  "denmark": "DEN", "serbia": "SRB", "poland": "POL", "hungary": "HUN",
  "russia": "RUS", "slovakia": "SVK", "romania": "ROU", "wales": "WAL",
  "costa rica": "CRC", "burkina faso": "BFA", "mali": "MLI", "venezuela": "VEN",
  "bolivia": "BOL", "jamaica": "JAM", "iceland": "ISL", "finland": "FIN",
  "bulgaria": "BUL", "peru": "PER", "honduras": "HON",
  "republic of ireland": "IRL", "ireland": "IRL", "slovenia": "SVN",
  "montenegro": "MNE", "north macedonia": "MKD", "macedonia": "MKD",
  "albania": "ALB", "georgia": "GEO", "armenia": "ARM", "azerbaijan": "AZE",
  "kazakhstan": "KAZ", "belarus": "BLR", "luxembourg": "LUX", "lithuania": "LTU",
  "latvia": "LVA", "estonia": "EST", "moldova": "MDA", "malta": "MLT",
  "andorra": "AND", "san marino": "SMR", "liechtenstein": "LIE",
  "faroe islands": "FRO", "gibraltar": "GIB", "cyprus": "CYP",
  "israel": "ISR", "palestine": "PLE", "lebanon": "LBN", "syria": "SYR",
  "oman": "OMA", "bahrain": "BHR", "kuwait": "KUW",
  "kyrgyzstan": "KGZ", "tajikistan": "TJK", "thailand": "THA",
  "vietnam": "VIE", "indonesia": "IDN", "malaysia": "MAS",
  "north korea": "PRK", "philippines": "PHI", "singapore": "SGP",
  "india": "IND", "bangladesh": "BAN", "maldives": "MDV", "nepal": "NEP",
  "sri lanka": "SRI", "myanmar": "MYA", "laos": "LAO", "cambodia": "CAM",
  "timor-leste": "TLS", "east timor": "TLS", "mongolia": "MNG",
  "turkmenistan": "TKM", "afghanistan": "AFG", "pakistan": "PAK",
  "libya": "LBY", "sudan": "SDN", "south sudan": "SSD", "zambia": "ZAM",
  "angola": "ANG", "gabon": "GAB", "togo": "TOG", "benin": "BEN",
  "niger": "NIG", "guinea": "GUI", "sierra leone": "SLE", "liberia": "LBR",
  "gambia": "GAM", "mauritania": "MTN", "equatorial guinea": "GNQ",
  "são tomé and príncipe": "STP", "central african republic": "CTA",
  "congo": "CGO", "rwanda": "RWA", "burundi": "BDI", "ethiopia": "ETH",
  "kenya": "KEN", "tanzania": "TAN", "uganda": "UGA", "malawi": "MWI",
  "mozambique": "MOZ", "zimbabwe": "ZIM", "namibia": "NAM", "botswana": "BOT",
  "eswatini": "SWZ", "swaziland": "SWZ", "lesotho": "LES", "madagascar": "MAD",
  "mauritius": "MRI", "comoros": "COM", "seychelles": "SEY",
  "trinidad and tobago": "TRI", "cuba": "CUB", "suriname": "SUR",
  "guyana": "GUY", "antigua and barbuda": "ATG", "grenada": "GRN",
  "dominica": "DMA", "saint lucia": "LCA", "st. lucia": "LCA",
  "saint vincent and the grenadines": "VIN", "st. vincent": "VIN",
  "barbados": "BRB", "saint kitts and nevis": "SKN", "st. kitts": "SKN",
  "dominican republic": "DOM", "guatemala": "GUA", "el salvador": "SLV",
  "nicaragua": "NCA", "belize": "BLZ", "bahamas": "BAH", "bermuda": "BER",
  "aruba": "ARU",
  "papua new guinea": "PNG", "solomon islands": "SOL", "fiji": "FIJ",
  "tahiti": "TAH", "new caledonia": "NCL", "vanuatu": "VAN",
  "samoa": "SAM", "tonga": "TGA"
};

function normalizeName(name) {
  return String(name || "").toLowerCase().trim();
}

function resolveCode(csvName) {
  const key = normalizeName(csvName);
  return TEAM_NAME_MAP[key] || null;
}

// ---- Parse CSV ----
function parseResultsCSV(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.trim().split("\n");
  const header = lines[0].split(",");
  const rows = [];
  for (let i = 1; i < lines.length; i += 1) {
    const cols = lines[i].split(",");
    if (cols.length < 5) continue;
    const homeScore = parseInt(cols[3], 10);
    const awayScore = parseInt(cols[4], 10);
    if (isNaN(homeScore) || isNaN(awayScore)) continue; // skip future fixtures (NA)
    rows.push({
      date: cols[0],
      homeTeam: cols[1],
      awayTeam: cols[2],
      homeScore,
      awayScore,
      tournament: cols[5] || "",
      neutral: cols[8] === "TRUE"
    });
  }
  return rows;
}

// ---- Compute team data from real matches ----
function buildTeamData(matches, targetCodes) {
  const byCode = new Map();

  // Initialize
  for (const code of targetCodes) {
    byCode.set(code, {
      code,
      matches: [],
      goalsFor: 0,
      goalsAgainst: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      cleanSheets: 0,
      failedToScore: 0,
      bigWins: 0,
      heavyLosses: 0
    });
  }

  // Collect matches for target teams (most recent first)
  const sorted = [...matches].sort((a, b) => b.date.localeCompare(a.date));
  for (const m of sorted) {
    const homeCode = resolveCode(m.homeTeam);
    const awayCode = resolveCode(m.awayTeam);
    if (homeCode && byCode.has(homeCode)) {
      const team = byCode.get(homeCode);
      if (team.matches.length < 10) {
        team.matches.push({ ...m, side: "home" });
      }
    }
    if (awayCode && byCode.has(awayCode)) {
      const team = byCode.get(awayCode);
      if (team.matches.length < 10) {
        team.matches.push({ ...m, side: "away" });
      }
    }
  }

  // Compute stats
  for (const [code, team] of byCode) {
    let totalGf = 0, totalGa = 0, totalPlayed = 0;
    for (const m of team.matches.slice(0, 10)) {
      totalPlayed += 1;
      const gf = m.side === "home" ? m.homeScore : m.awayScore;
      const ga = m.side === "home" ? m.awayScore : m.homeScore;
      totalGf += gf;
      totalGa += ga;
      if (gf > ga) { team.wins += 1; if (gf - ga >= 2) team.bigWins += 1; }
      else if (gf < ga) { team.losses += 1; if (ga - gf >= 2) team.heavyLosses += 1; }
      else team.draws += 1;
      if (ga === 0) team.cleanSheets += 1;
      if (gf === 0) team.failedToScore += 1;
    }
    team.played = Math.min(10, team.matches.length);
    team.goalsFor = totalGf;
    team.goalsAgainst = totalGa;
    team.avgGoalsFor = team.played ? +(totalGf / team.played).toFixed(2) : 0;
    team.avgGoalsAgainst = team.played ? +(totalGa / team.played).toFixed(2) : 0;
    team.winRate = team.played ? +(team.wins / team.played * 100).toFixed(0) : 0;

    // Derive metrics (normalize to 50-95 range)
    // Attack: based on goals scored per match (typical range 0.3–3.5 → map to 50-95)
    team.attack = Math.round(50 + Math.min(team.avgGoalsFor / 3.5 * 45, 45));
    // Defense: based on goals conceded per match (lower is better)
    team.defense = Math.round(95 - Math.min(team.avgGoalsAgainst / 3.5 * 45, 45));
    // Midfield: weighted combo of win rate and goal diff
    const gdPerGame = team.played ? (totalGf - totalGa) / team.played : 0;
    team.midfield = Math.round(50 + Math.max(-25, Math.min(gdPerGame * 8, 25)) + (team.winRate - 30) * 0.15);
    // Form score: win rate normalized
    team.formScore = Math.round(50 + (team.winRate - 30) * 0.8);

    // Recent 5 form
    team.recentForm = team.matches.slice(0, 5).map(m => {
      const gf = m.side === "home" ? m.homeScore : m.awayScore;
      const ga = m.side === "home" ? m.awayScore : m.homeScore;
      const opponentRaw = m.side === "home" ? m.awayTeam : m.homeTeam;
      const opponentCode = resolveCode(opponentRaw) || opponentRaw.slice(0, 3).toUpperCase();
      return {
        date: m.date,
        opponent: opponentRaw,
        opponentCode,
        tournament: m.tournament || "Unknown",
        result: gf > ga ? "W" : gf < ga ? "L" : "D",
        score: `${gf}-${ga}`,
        goalsFor: gf,
        goalsAgainst: ga,
        goalDiff: gf - ga,
        cleanSheet: ga === 0,
        failedToScore: gf === 0,
        bigWin: gf - ga >= 2,
        heavyLoss: ga - gf >= 2
      };
    });

    // Strength rank proxy (from match performance, not official FIFA)
    team.strengthScore = Math.round(team.attack * 0.35 + team.defense * 0.35 + team.midfield * 0.15 + team.formScore * 0.15);
  }

  return byCode;
}

// ---- Compute a simple performance-based ranking ----
function computeRankings(teamData) {
  const sorted = [...teamData.values()]
    .sort((a, b) => b.strengthScore - a.strengthScore);
  const rankings = new Map();
  sorted.forEach((team, idx) => {
    rankings.set(team.code, idx + 1);
  });
  return rankings;
}

// ---- Main export ----
export function loadRealTeamData(targetCodes) {
  if (!fs.existsSync(resultsPath)) {
    console.warn("Kaggle results CSV not found, cannot load real data.");
    return null;
  }

  console.log(`Loading real match data from ${resultsPath}...`);
  const allMatches = parseResultsCSV(resultsPath);
  console.log(`Parsed ${allMatches.length} matches with actual scores.`);

  const teamData = buildTeamData(allMatches, targetCodes);
  const rankings = computeRankings(teamData);
  console.log(`Computed data for ${teamData.size} teams.`);

  return { teamData, rankings };
}

// ---- CLI test ----
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/"))) {
  const WC48 = [
    "MEX","RSA","KOR","CZE","CAN","BIH","QAT","SUI",
    "BRA","MAR","HAI","SCO","USA","PAR","AUS","TUR",
    "GER","CUW","CIV","ECU","NED","JPN","SWE","TUN",
    "BEL","EGY","IRN","NZL","ESP","CPV","KSA","URU",
    "FRA","SEN","IRQ","NOR","ARG","ALG","AUT","JOR",
    "POR","COD","UZB","COL","ENG","CRO","GHA","PAN"
  ];
  const result = loadRealTeamData(WC48);
  if (result) {
    for (const [code, data] of result.teamData) {
      console.log(`${code}: rank=${result.rankings.get(code)} attack=${data.attack} defense=${data.defense} midfield=${data.midfield} formScore=${data.formScore} recent=${data.recentForm.slice(0,5).map(r=>r.result).join("")}`);
    }
  }
}
