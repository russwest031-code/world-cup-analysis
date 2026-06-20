import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadShotData, loadXGData } from "./fetch-shot-data.mjs";

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

// ---- Chinese team name mapping ----
const TEAM_NAMES_ZH = {
  MEX:"墨西哥",RSA:"南非",KOR:"韩国",CZE:"捷克",CAN:"加拿大",BIH:"波黑",QAT:"卡塔尔",SUI:"瑞士",
  BRA:"巴西",MAR:"摩洛哥",HAI:"海地",SCO:"苏格兰",USA:"美国",PAR:"巴拉圭",AUS:"澳大利亚",TUR:"土耳其",
  GER:"德国",CUW:"库拉索",CIV:"科特迪瓦",ECU:"厄瓜多尔",NED:"荷兰",JPN:"日本",SWE:"瑞典",TUN:"突尼斯",
  BEL:"比利时",EGY:"埃及",IRN:"伊朗",NZL:"新西兰",ESP:"西班牙",CPV:"佛得角",KSA:"沙特",URU:"乌拉圭",
  FRA:"法国",SEN:"塞内加尔",IRQ:"伊拉克",NOR:"挪威",ARG:"阿根廷",ALG:"阿尔及利亚",AUT:"奥地利",JOR:"约旦",
  POR:"葡萄牙",COD:"刚果(金)",UZB:"乌兹别克斯坦",COL:"哥伦比亚",ENG:"英格兰",CRO:"克罗地亚",GHA:"加纳",PAN:"巴拿马",
  ITA:"意大利",GRE:"希腊",UKR:"乌克兰",NGA:"尼日利亚",CHI:"智利",UAE:"阿联酋",CMR:"喀麦隆",CHN:"中国",
  DEN:"丹麦",SRB:"塞尔维亚",POL:"波兰",HUN:"匈牙利",RUS:"俄罗斯",SVK:"斯洛伐克",ROU:"罗马尼亚",WAL:"威尔士",
  CRC:"哥斯达黎加",BFA:"布基纳法索",MLI:"马里",VEN:"委内瑞拉",BOL:"玻利维亚",JAM:"牙买加",ISL:"冰岛",FIN:"芬兰",
  BUL:"保加利亚",PER:"秘鲁",HON:"洪都拉斯",IRL:"爱尔兰",SVN:"斯洛文尼亚",MNE:"黑山",MKD:"北马其顿",
  ALB:"阿尔巴尼亚",GEO:"格鲁吉亚",ARM:"亚美尼亚",AZE:"阿塞拜疆",KAZ:"哈萨克斯坦",BLR:"白俄罗斯",LUX:"卢森堡",
  LTU:"立陶宛",LVA:"拉脱维亚",EST:"爱沙尼亚",MDA:"摩尔多瓦",MLT:"马耳他",AND:"安道尔",SMR:"圣马力诺",
  LIE:"列支敦士登",FRO:"法罗群岛",GIB:"直布罗陀",CYP:"塞浦路斯",ISR:"以色列",PLE:"巴勒斯坦",
  LBN:"黎巴嫩",SYR:"叙利亚",OMA:"阿曼",BHR:"巴林",KUW:"科威特",KGZ:"吉尔吉斯斯坦",TJK:"塔吉克斯坦",
  THA:"泰国",VIE:"越南",IDN:"印尼",MAS:"马来西亚",PRK:"朝鲜",PHI:"菲律宾",SGP:"新加坡",IND:"印度",
};

function opponentZh(code) {
  return TEAM_NAMES_ZH[code] || code;
}

// ---- Tournament name translation ----
const TOURNAMENT_ZH = {
  "FIFA World Cup": "世界杯",
  "FIFA World Cup qualification": "世预赛",
  "Friendly": "友谊赛",
  "UEFA Nations League": "欧国联",
  "CONCACAF Nations League": "中北美联",
  "Copa América": "美洲杯",
  "Africa Cup of Nations": "非洲杯",
  "Africa Cup of Nations qualification": "非洲杯预选",
  "AFC Asian Cup": "亚洲杯",
  "AFC Asian Cup qualification": "亚洲杯预选",
  "UEFA Euro": "欧洲杯",
  "UEFA Euro qualification": "欧洲杯预选",
  "CONCACAF Gold Cup": "金杯赛",
  "CONCACAF Gold Cup qualification": "金杯赛预选",
  "OFC Nations Cup": "大洋洲杯",
  "Confederations Cup": "联合会杯",
};

function tournamentZh(name) {
  return TOURNAMENT_ZH[name] || name;
}

// ---- Official FIFA World Rankings (June 11, 2026) ----
const FIFA_RANKINGS = {
  ARG:1, ESP:2, FRA:3, ENG:4, POR:5, BRA:6, MAR:7, NED:8,
  BEL:9, GER:10, CRO:11, COL:13, MEX:14, SEN:15, URU:16, USA:17,
  JPN:18, SUI:19, IRN:20, TUR:22, ECU:23, AUT:24, KOR:25, AUS:27,
  ALG:28, EGY:29, CAN:30, NOR:31, CIV:33, PAN:34, SWE:38, CZE:40,
  PAR:41, SCO:42, TUN:45, COD:46, UZB:50, QAT:56, IRQ:57, RSA:60,
  KSA:61, JOR:63, BIH:64, CPV:67, GHA:73, CUW:82, HAI:83, NZL:85,
};

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

  // Compute stats with opponent strength adjustment
  for (const [code, team] of byCode) {
    let totalWgf = 0, totalWga = 0, totalWeight = 0;
    const recent = team.matches.slice(0, 10);
    for (const m of recent) {
      const gf = m.side === "home" ? m.homeScore : m.awayScore;
      const ga = m.side === "home" ? m.awayScore : m.homeScore;
      const oppCode = m.side === "home" ? resolveCode(m.awayTeam) : resolveCode(m.homeTeam);
      const oppRank = oppCode ? (FIFA_RANKINGS[oppCode] || 100) : 100;
      // Opponent strength: 0-1, higher = stronger opponent
      const strength = Math.max(0.1, (200 - oppRank) / 200);
      // Attack weight: goals against strong teams count more
      const attWeight = 0.4 + 0.6 * strength;
      // Defense weight: conceding to weak teams is penalized
      const defWeight = 1.6 - 0.6 * strength;
      totalWgf += gf * attWeight;
      totalWga += ga * defWeight;
      totalWeight += 1;

      // Raw stats (unweighted, for W/D/L records)
      if (gf > ga) { team.wins += 1; if (gf - ga >= 2) team.bigWins += 1; }
      else if (gf < ga) { team.losses += 1; if (ga - gf >= 2) team.heavyLosses += 1; }
      else team.draws += 1;
      if (ga === 0) team.cleanSheets += 1;
      if (gf === 0) team.failedToScore += 1;
    }
    team.played = Math.min(10, recent.length);
    team.goalsFor = Math.round(totalWgf);
    team.goalsAgainst = Math.round(totalWga);
    // Opponent-adjusted averages
    team.avgGoalsFor = team.played ? +(totalWgf / team.played).toFixed(2) : 0;
    team.avgGoalsAgainst = team.played ? +(totalWga / team.played).toFixed(2) : 0;
    team.winRate = team.played ? +(team.wins / team.played * 100).toFixed(0) : 0;

    // Derive metrics (normalize to 50-95 range)
    // Attack: weighted goals per match (typical range 0.3–3.5 → map to 50-95)
    team.attack = Math.round(50 + Math.min(team.avgGoalsFor / 3.5 * 45, 45));
    // Defense: weighted goals conceded per match (lower is better)
    team.defense = Math.round(95 - Math.min(team.avgGoalsAgainst / 4.0 * 45, 45));
    // Midfield: weighted combo of goal diff and win rate
    const gdPerGame = team.played ? (totalWgf - totalWga) / team.played : 0;
    team.midfield = Math.round(50 + Math.max(-25, Math.min(gdPerGame * 8, 25)) + (team.winRate - 30) * 0.15);
    // Form score: win rate normalized
    team.formScore = Math.round(50 + (team.winRate - 30) * 0.8);

    // Store raw goals-based metrics for fallback
    team.attackRaw = team.attack;
    team.defenseRaw = team.defense;
    team.midfieldRaw = team.midfield;

    // Recent 5 form
    team.recentForm = team.matches.slice(0, 5).map(m => {
      const gf = m.side === "home" ? m.homeScore : m.awayScore;
      const ga = m.side === "home" ? m.awayScore : m.homeScore;
      const opponentRaw = m.side === "home" ? m.awayTeam : m.homeTeam;
      const opponentCode = resolveCode(opponentRaw) || opponentRaw.slice(0, 3).toUpperCase();
      return {
        date: m.date,
        opponent: opponentZh(opponentCode),
        opponentCode,
        opponentRank: FIFA_RANKINGS[opponentCode] || null,
        tournament: tournamentZh(m.tournament),
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

// ---- Compute merged rankings (FIFA official + performance fallback) ----
function computeRankings(teamData) {
  const rankings = new Map();
  for (const [code, team] of teamData) {
    if (FIFA_RANKINGS[code]) {
      rankings.set(code, FIFA_RANKINGS[code]);
    } else {
      // Fallback: performance-based ranking for teams not in FIFA list
      rankings.set(code, team.strengthScore);
    }
  }
  return rankings;
}

// ---- Main export ----
export function loadRealTeamData(targetCodes, espnStats = null) {
  if (!fs.existsSync(resultsPath)) {
    console.warn("Kaggle results CSV not found, cannot load real data.");
    return null;
  }

  console.log(`Loading real match data from ${resultsPath}...`);
  const allMatches = parseResultsCSV(resultsPath);
  console.log(`Parsed ${allMatches.length} matches with actual scores.`);

  const teamData = buildTeamData(allMatches, targetCodes);

  // Priority 1: ESPN WC2026 live stats (real shot/possession from THIS tournament)
  if (espnStats && espnStats.size > 0) {
    for (const [code, team] of teamData) {
      const espn = espnStats.get(code);
      if (espn && espn.matches >= 1) {
        // Attack: 70% ESPN shot-based + 30% goals-based
        const espnAttack = Math.round(50 + Math.min(espn.avgShots / 15 * 45, 45));
        const espnSOT = Math.round(50 + Math.min(espn.avgShotsOnTarget / 7 * 45, 45));
        team.attack = Math.round(espnAttack * 0.6 + espnSOT * 0.2 + team.attackRaw * 0.2);
        // Defense: blend possession and clean sheets
        const possDefense = Math.round(50 + espn.avgPossession * 0.4);
        team.defense = Math.round(team.defenseRaw * 0.5 + possDefense * 0.5);
        // Midfield: possession-driven
        team.midfield = Math.round(espn.avgPossession * 0.7 + team.midfieldRaw * 0.3);
        team.shotDataSource = `ESPN WC2026 (${espn.matches}场)`;
        team.shotsPerGame = espn.avgShots;
        team.shotsOnTarget = espn.avgShotsOnTarget;
        team.possession = espn.avgPossession;
        team.shotAccuracy = espn.shotAccuracy;
      }
    }
    console.log(`ESPN data blended for ${[...teamData.values()].filter(t=>t.shotDataSource?.startsWith('ESPN')).length} teams.`);
  }

  // Priority 2: AFCON 2025-26 shot data (for teams not covered by ESPN)
  const shotData = loadShotData();
  if (shotData) {
    for (const [code, team] of teamData) {
      if (team.shotDataSource?.startsWith("ESPN")) continue; // ESPN is better
      const shots = shotData.get(code);
      if (shots && shots.matches >= 2) {
        const shotAttack = Math.round(50 + Math.min(shots.avgShotsPerGame / 18 * 45, 45));
        team.attack = Math.round(team.attackRaw * 0.6 + shotAttack * 0.4);
        const shotDefense = Math.round(50 + shots.shotAccuracy * 0.4);
        team.defense = Math.round(team.defenseRaw * 0.7 + shotDefense * 0.3);
        const possMid = Math.round(shots.avgPossession);
        team.midfield = Math.round(team.midfieldRaw * 0.5 + possMid * 0.5);
        team.shotDataSource = "AFCON 2025-26";
        team.shotsPerGame = shots.avgShotsPerGame;
        team.shotAccuracy = shots.shotAccuracy;
        team.possession = shots.avgPossession;
      }
    }
    console.log(`AFCON data blended for ${[...teamData.values()].filter(t=>t.shotDataSource==='AFCON 2025-26').length} teams.`);
  }

  // Priority 3: 2022 World Cup xG (fallback for remaining teams)
  const xgData = loadXGData();
  if (xgData) {
    for (const [code, team] of teamData) {
      if (team.shotDataSource) continue; // already have better data
      const xg = xgData.get(code);
      if (xg && xg.matches >= 2) {
        const xgAttack = Math.round(50 + Math.min(xg.avgXG / 3.0 * 45, 45));
        team.attack = Math.round(team.attack * 0.5 + xgAttack * 0.5);
        const xgDefense = Math.round(95 - Math.min(xg.avgXGA / 2.5 * 45, 45));
        team.defense = Math.round(team.defense * 0.5 + xgDefense * 0.5);
        const xgMid = Math.round(50 + xg.xgDiff * 12);
        team.midfield = Math.round(team.midfield * 0.5 + xgMid * 0.5);
        team.xgDataSource = "WC 2022 xG";
        team.avgXG = xg.avgXG;
        team.avgXGA = xg.avgXGA;
      }
    }
    console.log(`xG data blended for ${[...teamData.values()].filter(t=>t.xgDataSource).length} teams.`);
  }

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
