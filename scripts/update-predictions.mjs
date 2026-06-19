import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data.js");
const now = new Date();
const runDate = process.env.UPDATE_DATE || now.toISOString().slice(0, 10);

const MATCHES_URL = process.env.WORLD_CUP_MATCHES_URL ||
  "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json";
const TEAMS_URL = process.env.WORLD_CUP_TEAMS_URL ||
  "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.teams.json";

const TEAM_NAMES_ZH = {
  MEX: "墨西哥", RSA: "南非", KOR: "韩国", CZE: "捷克",
  CAN: "加拿大", BIH: "波黑", QAT: "卡塔尔", SUI: "瑞士",
  BRA: "巴西", MAR: "摩洛哥", HAI: "海地", SCO: "苏格兰",
  USA: "美国", PAR: "巴拉圭", AUS: "澳大利亚", TUR: "土耳其",
  GER: "德国", CUW: "库拉索", CIV: "科特迪瓦", ECU: "厄瓜多尔",
  NED: "荷兰", JPN: "日本", SWE: "瑞典", TUN: "突尼斯",
  BEL: "比利时", EGY: "埃及", IRN: "伊朗", NZL: "新西兰",
  ESP: "西班牙", CPV: "佛得角", KSA: "沙特阿拉伯", URU: "乌拉圭",
  FRA: "法国", SEN: "塞内加尔", IRQ: "伊拉克", NOR: "挪威",
  ARG: "阿根廷", ALG: "阿尔及利亚", AUT: "奥地利", JOR: "约旦",
  POR: "葡萄牙", COD: "刚果（金）", UZB: "乌兹别克斯坦", COL: "哥伦比亚",
  ENG: "英格兰", CRO: "克罗地亚", GHA: "加纳", PAN: "巴拿马",
  ITA: "意大利", GRE: "希腊", UKR: "乌克兰", NGA: "尼日利亚",
  CHI: "智利", UAE: "阿联酋", CMR: "喀麦隆", CHN: "中国",
  DEN: "丹麦", SRB: "塞尔维亚", POL: "波兰", HUN: "匈牙利",
  RUS: "俄罗斯", SVK: "斯洛伐克", ROU: "罗马尼亚", WAL: "威尔士",
  CRC: "哥斯达黎加", BFA: "布基纳法索", MLI: "马里", VEN: "委内瑞拉",
  BOL: "玻利维亚", JAM: "牙买加", ISL: "冰岛", FIN: "芬兰",
  BUL: "保加利亚", IRN: "伊朗", PER: "秘鲁", HON: "洪都拉斯",
  IRL: "爱尔兰", SVN: "斯洛文尼亚", MNE: "黑山", MKD: "北马其顿",
  ALB: "阿尔巴尼亚", GEO: "格鲁吉亚", ARM: "亚美尼亚", AZE: "阿塞拜疆",
  KAZ: "哈萨克斯坦", BLR: "白俄罗斯", LUX: "卢森堡", LTU: "立陶宛",
  LVA: "拉脱维亚", EST: "爱沙尼亚", MDA: "摩尔多瓦", MLT: "马耳他",
  AND: "安道尔", SMR: "圣马力诺", LIE: "列支敦士登", FRO: "法罗群岛",
  GIB: "直布罗陀", CYP: "塞浦路斯", ISR: "以色列", PLE: "巴勒斯坦",
  LBN: "黎巴嫩", SYR: "叙利亚", OMA: "阿曼", BHR: "巴林",
  KUW: "科威特", KGZ: "吉尔吉斯斯坦", TJK: "塔吉克斯坦", THA: "泰国",
  VIE: "越南", IDN: "印度尼西亚", MAS: "马来西亚", PRK: "朝鲜",
  PHI: "菲律宾", SGP: "新加坡", IND: "印度", BAN: "孟加拉国",
  MDV: "马尔代夫", NEP: "尼泊尔", SRI: "斯里兰卡", MYA: "缅甸",
  LAO: "老挝", CAM: "柬埔寨", TLS: "东帝汶", MNG: "蒙古",
  TKM: "土库曼斯坦", AFG: "阿富汗", PAK: "巴基斯坦",
  LBY: "利比亚", SDN: "苏丹", SSD: "南苏丹", ZAM: "赞比亚",
  ANG: "安哥拉", GAB: "加蓬", TOG: "多哥", BEN: "贝宁",
  NIG: "尼日尔", GUI: "几内亚", SLE: "塞拉利昂", LBR: "利比里亚",
  GAM: "冈比亚", MTN: "毛里塔尼亚", GNQ: "赤道几内亚", STP: "圣多美和普林西比",
  CTA: "中非", CGO: "刚果（布）", RWA: "卢旺达", BDI: "布隆迪",
  ETH: "埃塞俄比亚", KEN: "肯尼亚", TAN: "坦桑尼亚", UGA: "乌干达",
  MWI: "马拉维", MOZ: "莫桑比克", ZIM: "津巴布韦", NAM: "纳米比亚",
  BOT: "博茨瓦纳", SWZ: "斯威士兰", LES: "莱索托", MAD: "马达加斯加",
  MRI: "毛里求斯", COM: "科摩罗", SEY: "塞舌尔",
  TRI: "特立尼达和多巴哥", CUB: "古巴", SUR: "苏里南",
  GUY: "圭亚那", ATG: "安提瓜和巴布达", GRN: "格林纳达", DMA: "多米尼克",
  LCA: "圣卢西亚", VIN: "圣文森特和格林纳丁斯", BRB: "巴巴多斯",
  SKN: "圣基茨和尼维斯", DOM: "多米尼加", GUA: "危地马拉", SLV: "萨尔瓦多",
  NCA: "尼加拉瓜", BLZ: "伯利兹", BAH: "巴哈马", BER: "百慕大",
  ARU: "阿鲁巴",
  PNG: "巴布亚新几内亚", SOL: "所罗门群岛", FIJ: "斐济", TAH: "塔希提",
  NCL: "新喀里多尼亚", VAN: "瓦努阿图", SAM: "萨摩亚", TGA: "汤加",
};

const PROFILE = {
  ARG: [1, 92, 88, 91, 89], FRA: [2, 94, 87, 89, 88], ESP: [3, 91, 86, 93, 90],
  ENG: [4, 90, 85, 88, 87], BRA: [5, 88, 81, 86, 79], POR: [6, 87, 84, 86, 85],
  NED: [7, 85, 84, 87, 83], MAR: [8, 76, 87, 78, 91], GER: [9, 86, 79, 83, 81],
  ITA: [10, 82, 88, 84, 82], BEL: [11, 83, 79, 82, 78], URU: [12, 81, 83, 80, 77],
  COL: [13, 80, 82, 81, 84], CRO: [14, 78, 82, 85, 76], JPN: [15, 79, 78, 82, 85],
  SUI: [16, 74, 81, 77, 74], USA: [17, 78, 76, 79, 80], MEX: [18, 76, 75, 76, 78],
  SEN: [19, 78, 80, 77, 79], IRN: [20, 75, 79, 76, 77], DEN: [21, 78, 80, 79, 78],
  NGA: [22, 80, 73, 76, 75], UKR: [23, 74, 75, 77, 73], ECU: [24, 77, 84, 80, 83],
  SRB: [25, 80, 75, 78, 75], AUS: [26, 72, 78, 69, 75], TUR: [27, 82, 71, 84, 80],
  KOR: [28, 77, 75, 78, 79], SWE: [29, 75, 79, 77, 75], NOR: [30, 84, 73, 78, 76],
  EGY: [31, 79, 76, 75, 78], POL: [32, 76, 74, 75, 74], HUN: [33, 75, 73, 76, 77],
  CHI: [34, 72, 72, 74, 71], CIV: [35, 78, 72, 74, 79], RUS: [36, 75, 73, 76, 72],
  SCO: [38, 76, 79, 81, 73], PAR: [39, 71, 78, 72, 71], GRE: [40, 69, 77, 71, 73],
  TUN: [41, 70, 78, 72, 74], CAN: [42, 74, 70, 73, 76], ALG: [43, 76, 73, 75, 77],
  AUT: [44, 76, 76, 78, 77], CZE: [45, 74, 77, 76, 72], SVK: [46, 71, 73, 72, 71],
  ROU: [47, 70, 72, 71, 73], WAL: [48, 72, 75, 73, 72], CRC: [49, 66, 69, 67, 64],
  GHA: [50, 72, 69, 72, 68], PER: [51, 70, 71, 72, 69], KSA: [52, 68, 68, 69, 67],
  HON: [53, 65, 63, 64, 62], VEN: [54, 69, 71, 70, 69], BFA: [55, 67, 65, 66, 66],
  MLI: [56, 68, 64, 67, 65], IRQ: [57, 68, 68, 68, 70], BIH: [58, 72, 68, 74, 70],
  IRL: [59, 65, 71, 66, 64], JAM: [60, 65, 63, 64, 65], QAT: [61, 69, 66, 68, 69],
  ISL: [62, 64, 68, 63, 62], FIN: [63, 63, 67, 64, 63], PAN: [64, 62, 64, 63, 62],
  UZB: [65, 69, 71, 70, 73], JOR: [66, 67, 68, 67, 72], BOL: [67, 61, 63, 62, 60],
  NZL: [68, 64, 68, 65, 66], UAE: [69, 66, 65, 67, 66], CMR: [70, 72, 71, 70, 73],
  CPV: [71, 68, 72, 68, 70], CHN: [72, 60, 58, 59, 57], BUL: [73, 66, 68, 67, 66],
  RSA: [74, 66, 67, 66, 68], COD: [77, 70, 72, 69, 71], ALB: [78, 65, 66, 65, 64],
  MKD: [79, 64, 65, 64, 63], GEO: [80, 67, 68, 66, 67], SVN: [81, 68, 69, 67, 68],
  CUW: [82, 57, 54, 59, 60], HAI: [84, 61, 55, 58, 62], OMA: [86, 62, 63, 62, 64],
  BHR: [87, 63, 62, 63, 63], SYR: [89, 60, 61, 60, 61], THA: [91, 58, 59, 58, 60],
  VIE: [92, 57, 58, 57, 59], PRK: [93, 59, 60, 58, 58], IDN: [94, 55, 56, 54, 55],
  MAS: [95, 54, 55, 53, 54], IND: [96, 52, 53, 51, 52], PHI: [97, 50, 51, 49, 50],
  TJK: [98, 57, 58, 56, 58], KGZ: [99, 55, 56, 54, 55],
};

const COLORS = {
  ARG: "#75aadb", FRA: "#002395", ESP: "#c60b1e", ENG: "#ffffff", BRA: "#f5cf36",
  POR: "#900020", NED: "#f36c21", MAR: "#d91d3b", GER: "#e6e6e6", ITA: "#0066cc",
  BEL: "#fdda24", URU: "#55b8e8", COL: "#ffcd00", CRO: "#ff0000", JPN: "#244a9b",
  SUI: "#d52b1e", USA: "#002868", MEX: "#006847", SEN: "#00853f", IRN: "#239f40",
  DEN: "#c60c30", NGA: "#008751", UKR: "#0057b7", ECU: "#ffd32a", SRB: "#c6363c",
  AUS: "#f0b51d", TUR: "#e32636", KOR: "#c8102e", SWE: "#fecd00", NOR: "#ba0c2f",
  EGY: "#ce1126", POL: "#dc143c", HUN: "#cd2a3e", CHI: "#da291c", CIV: "#ef7d22",
  RUS: "#d62718", SCO: "#183c74", PAR: "#d52b1e", GRE: "#0d5eaf", TUN: "#e70013",
  CAN: "#d52b1e", ALG: "#006633", AUT: "#ed2939", CZE: "#11457e", SVK: "#034da3",
  ROU: "#fcd116", WAL: "#c8102e", CRC: "#002b7f", GHA: "#ce1126", PER: "#d91023",
  KSA: "#006c35", HON: "#0f1778", VEN: "#8a1538", BFA: "#009e60", MLI: "#14b53a",
  IRQ: "#ce1126", BIH: "#001489", IRL: "#169b62", JAM: "#009b3a", QAT: "#8a1538",
  ISL: "#02529c", FIN: "#002f6c", PAN: "#005293", UZB: "#1eb53a", JOR: "#007a3d",
  BOL: "#007a33", NZL: "#000000", UAE: "#00732f", CMR: "#007a5e", CPV: "#003893",
  CHN: "#de2910", BUL: "#00966e", RSA: "#007a4d", COD: "#007fff", ALB: "#e41e20",
  MKD: "#d82126", GEO: "#da291c", SVN: "#0057b7", CUW: "#1f62c4", HAI: "#174ea6",
  OMA: "#cc0000", BHR: "#ce1126", SYR: "#ce1126", THA: "#a51931", VIE: "#da251d",
  PRK: "#024fa2", IDN: "#ce1126", MAS: "#cc0001", IND: "#0066cc", PHI: "#0038a8",
  TJK: "#006600", KGZ: "#e8112d",
};

function loadCachedMatches() {
  const code = fs.readFileSync(dataPath, "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: "data.js" });
  return sandbox.window.MATCHES || [];
}

async function fetchJson(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(url, { signal: controller.signal, headers: { "User-Agent": "world-cup-analysis-app" } });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

function hashText(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function rng(seedText) {
  let state = hashText(seedText) || 1;
  return () => {
    state = Math.imul(1664525, state) + 1013904223;
    return (state >>> 0) / 4294967296;
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formFor(code) {
  const base = PROFILE[code]?.[4] || 68;
  return base >= 84 ? ["W", "W", "W", "D", "W"] :
    base >= 76 ? ["W", "D", "W", "W", "L"] :
    base >= 70 ? ["D", "W", "L", "W", "D"] :
    ["L", "D", "W", "L", "D"];
}

function profileFor(code, confed) {
  const row = PROFILE[code];
  if (row) return { rank: row[0], attack: row[1], defense: row[2], midfield: row[3], formScore: row[4] };
  const rank = confed === "UEFA" || confed === "CONMEBOL" ? 55 : confed === "CAF" ? 70 : 78;
  return { rank, attack: 66, defense: 66, midfield: 66, formScore: 66 };
}

function formPoints(form) {
  return (form || []).slice(0, 5).reduce((sum, result) => {
    if (result === "W") return sum + 3;
    if (result === "D") return sum + 1;
    return sum;
  }, 0);
}

function metric(match, label, side) {
  const item = (match.metrics || []).find(entry => entry.label === label);
  return item ? Number(item[side]) : 70;
}

function averageMetric(match, side) {
  const metrics = match.metrics || [];
  if (!metrics.length) return 70;
  return metrics.reduce((sum, entry) => sum + Number(entry[side]), 0) / metrics.length;
}

function poisson(lambda, goals) {
  let factorial = 1;
  for (let i = 2; i <= goals; i += 1) factorial *= i;
  return (Math.exp(-lambda) * Math.pow(lambda, goals)) / factorial;
}

function scoreMatrix(homeGoals, awayGoals) {
  const rows = [];
  let total = 0;
  for (let h = 0; h <= 5; h += 1) {
    for (let a = 0; a <= 5; a += 1) {
      const probability = poisson(homeGoals, h) * poisson(awayGoals, a);
      rows.push({ h, a, probability });
      total += probability;
    }
  }
  return rows.map(row => ({ ...row, probability: row.probability / total }));
}

function parseBeijingKickoff(date, timeText) {
  const match = String(timeText || "12:00 UTC").match(/(\d{1,2}):(\d{2})\s+UTC([+-]\d+)?/i);
  if (!match) return { date, time: "待定" };
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  const offset = Number(match[3] || 0);
  const utcMs = Date.UTC(...date.split("-").map((part, index) => index === 1 ? Number(part) - 1 : Number(part)), hour - offset, minute);
  const beijing = new Date(utcMs + 8 * 60 * 60 * 1000);
  return {
    date: beijing.toISOString().slice(0, 10),
    time: beijing.toISOString().slice(11, 16)
  };
}

function slug(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildTeamIndex(teams) {
  const byName = new Map();
  for (const team of teams || []) {
    const keys = [team.name, team.name_normalised, team.fifa_code].filter(Boolean);
    for (const key of keys) byName.set(String(key).toLowerCase(), team);
  }
  return byName;
}

function teamFromName(name, teamIndex) {
  const meta = teamIndex.get(String(name).toLowerCase()) || {};
  const code = meta.fifa_code || (/\d/.test(name) ? name.replace(/[^a-zA-Z0-9]/g, "").toUpperCase() : String(name).slice(0, 3).toUpperCase());
  const profile = profileFor(code, meta.confed);
  return {
    name: TEAM_NAMES_ZH[code] || meta.name_normalised || meta.name || name,
    code,
    color: COLORS[code] || "#64748b",
    rank: profile.rank,
    form: formFor(code),
    attack: profile.attack,
    defense: profile.defense,
    midfield: profile.midfield,
    formScore: profile.formScore,
  };
}

function normalizeExternalMatches(rawMatches, rawTeams) {
  const teamIndex = buildTeamIndex(rawTeams);
  return (rawMatches || [])
    .filter(match => match.team1 && match.team2)
    .map((match, index) => {
      const kickoff = parseBeijingKickoff(match.date, match.time);
      const home = teamFromName(match.team1, teamIndex);
      const away = teamFromName(match.team2, teamIndex);
      const score = match.score?.ft;
      const status = Array.isArray(score) ? "completed" : "scheduled";
      return {
        id: `${slug(home.code)}-${slug(away.code)}-${index + 1}`,
        date: kickoff.date,
        time: kickoff.time,
        group: String(match.group || match.round || "").replace("Group ", "") + (match.group ? "组" : ""),
        round: match.round || "Group Stage",
        venue: match.ground || "待定",
        status,
        actualScore: status === "completed" ? `${score[0]}-${score[1]}` : "",
        externalSourceId: `${match.date}-${match.team1}-${match.team2}`,
        home: { name: home.name, code: home.code, color: home.color, rank: home.rank, form: home.form },
        away: { name: away.name, code: away.code, color: away.color, rank: away.rank, form: away.form },
        metrics: [
          { label: "进攻", home: home.attack, away: away.attack },
          { label: "防守", home: home.defense, away: away.defense },
          { label: "中场", home: home.midfield, away: away.midfield },
          { label: "近期状态", home: home.formScore, away: away.formScore }
        ],
        sourceInfo: {
          provider: "openfootball/worldcup.json",
          fetchedAt: now.toISOString(),
          rawDate: match.date,
          rawTime: match.time
        }
      };
    })
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
}

function extractMatches(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.matches)) return data.matches;
  if (Array.isArray(data?.rounds)) {
    return data.rounds.reduce((acc, r) => acc.concat(Array.isArray(r?.matches) ? r.matches : []), []);
  }
  return [];
}

async function loadExternalMatches() {
  const [worldCup, teams] = await Promise.all([fetchJson(MATCHES_URL), fetchJson(TEAMS_URL)]);
  const rawMatches = extractMatches(worldCup);
  if (!rawMatches.length) throw new Error("external source returned no matches — unrecognised structure");
  const matches = normalizeExternalMatches(rawMatches, teams || []);
  if (!matches.length) throw new Error("external source returned no matches after normalization");
  return matches;
}

function recalc(match, date) {
  const random = rng(`${date}:${match.id}:${match.actualScore || ""}`);
  const homeRank = Number(match.home.rank) || 50;
  const awayRank = Number(match.away.rank) || 50;
  const homeForm = formPoints(match.home.form);
  const awayForm = formPoints(match.away.form);
  const homeAvg = averageMetric(match, "home");
  const awayAvg = averageMetric(match, "away");
  const homeAttack = metric(match, "进攻", "home");
  const awayAttack = metric(match, "进攻", "away");
  const homeDefense = metric(match, "防守", "home");
  const awayDefense = metric(match, "防守", "away");

  const homePower = (100 - homeRank) * 0.28 + homeAvg * 0.44 + homeForm * 1.25 + 2.5;
  const awayPower = (100 - awayRank) * 0.28 + awayAvg * 0.44 + awayForm * 1.25;
  const dayNoise = (random() - 0.5) * 7;
  const edge = homePower - awayPower + dayNoise;

  const totalGoals = clamp(2.35 + ((homeAttack + awayAttack) - (homeDefense + awayDefense)) / 95 + (random() - 0.5) * 0.35, 1.55, 3.85);
  const homeShare = clamp(0.5 + edge / 90, 0.24, 0.76);
  const homeGoals = clamp(totalGoals * homeShare, 0.35, 3.45);
  const awayGoals = clamp(totalGoals - homeGoals, 0.25, 3.25);
  const matrix = scoreMatrix(homeGoals, awayGoals);

  const win = matrix.filter(row => row.h > row.a).reduce((sum, row) => sum + row.probability, 0);
  const draw = matrix.filter(row => row.h === row.a).reduce((sum, row) => sum + row.probability, 0);
  const away = matrix.filter(row => row.h < row.a).reduce((sum, row) => sum + row.probability, 0);
  const probabilities = [Math.round(win * 100), Math.round(draw * 100), Math.round(away * 100)];
  probabilities[0] += 100 - probabilities.reduce((sum, value) => sum + value, 0);

  const scoreOdds = matrix
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 4)
    .map(row => ({ score: `${row.h}-${row.a}`, chance: Math.max(5, Math.round(row.probability * 100)) }));

  const top = Math.max(...probabilities);
  const consistency = Math.abs(homeAvg - awayAvg) + Math.abs(homeForm - awayForm) * 2;
  const confidence = Math.round(clamp(54 + top * 0.34 + consistency * 0.24 + random() * 4, 58, 92));
  const tag = match.status === "completed" ? "已完场" : confidence >= 82 ? "高信心" : confidence >= 70 ? "稳健" : Math.abs(probabilities[0] - probabilities[2]) <= 8 ? "均衡" : "观察";
  const favoriteIndex = probabilities.indexOf(top);
  const favorite = favoriteIndex === 0 ? match.home.name : favoriteIndex === 2 ? match.away.name : "平局";
  const primaryScore = scoreOdds[0]?.score || "待定";

  return {
    ...match,
    probabilities,
    confidence,
    tag,
    summary: match.status === "completed"
      ? `外部数据源显示本场已完场，最终比分 ${match.actualScore}。模型仍保留赛前结构化判断，用于复盘双方实力、节奏和比分分布是否与结果接近。`
      : `外部赛程数据已更新。本场模型倾向 ${favorite} 方向，最可能比分为 ${primaryScore}。判断主要来自世界排名、攻防指标、近期状态和赛程场地信息。`,
    scoreOdds,
    insights: [
      `${match.home.name} 进攻指数 ${homeAttack}，${match.away.name} 防守指数 ${awayDefense}，这是判断主队进球上限的关键。`,
      `${match.away.name} 进攻指数 ${awayAttack}，${match.home.name} 防守指数 ${homeDefense}，客队反击和转换质量需要重点观察。`,
      match.status === "completed" ? "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。" : "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    expectedGoals: {
      home: Number(homeGoals.toFixed(2)),
      away: Number(awayGoals.toFixed(2))
    },
    analysisUpdated: date
  };
}

function serialize(matches, metaOverrides = {}) {
  const meta = {
    updatedAt: now.toISOString(),
    runDate,
    source: "openfootball-worldcup-json",
    externalFetchedAt: now.toISOString(),
    externalMatchCount: matches.length,
    model: "rank-form-metrics-poisson-v1",
    refreshCadence: "daily",
    refreshTimeLocal: "15:00",
    refreshTimeZone: "Asia/Shanghai",
    ...metaOverrides
  };
  // When falling back to cache, there is no fresh external fetch
  if (meta.source === "cached-local-fallback" && !metaOverrides.externalFetchedAt) {
    meta.externalFetchedAt = null;
  }
  return `window.ANALYSIS_META = ${JSON.stringify(meta, null, 2)};\n\nwindow.MATCHES = ${JSON.stringify(matches, null, 2)};\n`;
}

async function main() {
  let matches;
  let metaOverrides = {};
  try {
    matches = await loadExternalMatches();
  } catch (error) {
    console.warn(`External data fetch failed: ${error.message}`);
    matches = loadCachedMatches();
    metaOverrides = {
      source: "cached-local-fallback",
      externalFetchError: error.message,
      externalMatchCount: matches.length
    };
  }

  const refreshed = matches.map(match => recalc(match, runDate));
  fs.writeFileSync(dataPath, serialize(refreshed, metaOverrides), "utf8");
  console.log(`Updated ${refreshed.length} matches for ${runDate} from ${metaOverrides.source || "openfootball-worldcup-json"}`);
}

await main();
