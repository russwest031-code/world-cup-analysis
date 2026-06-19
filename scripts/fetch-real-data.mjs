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
        opponent: opponentZh(opponentCode),
        opponentCode,
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
