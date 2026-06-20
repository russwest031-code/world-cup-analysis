import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { loadRealTeamData } from "./fetch-real-data.mjs";
import { loadESPNStats } from "./fetch-espn-stats.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data.js");
const now = new Date();
const runDate = process.env.UPDATE_DATE || now.toISOString().slice(0, 10);

const MATCHES_URL = process.env.WORLD_CUP_MATCHES_URL ||
  "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json";
const TEAMS_URL = process.env.WORLD_CUP_TEAMS_URL ||
  "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.teams.json";
const ODDS_API_KEY = process.env.THE_ODDS_API_KEY || "";
const ODDS_SPORT_KEY = process.env.THE_ODDS_SPORT_KEY || "soccer_fifa_world_cup";
const ODDS_REGIONS = process.env.THE_ODDS_REGIONS || "eu,uk,us";
const ODDS_MARKETS = process.env.THE_ODDS_MARKETS || "h2h";
const WEATHER_ENABLED = process.env.WEATHER_ENABLED !== "0";
const API_FOOTBALL_KEY = process.env.API_FOOTBALL_KEY || "";
const API_FOOTBALL_BASE = process.env.API_FOOTBALL_BASE || "https://v3.football.api-sports.io";
const API_FOOTBALL_LEAGUE = process.env.API_FOOTBALL_LEAGUE || "1";
const API_FOOTBALL_SEASON = process.env.API_FOOTBALL_SEASON || "2026";
const API_FOOTBALL_LINEUP_WINDOW_DAYS = Number(process.env.API_FOOTBALL_LINEUP_WINDOW_DAYS || 3);
const EXPERT_RSS_URLS = (process.env.EXPERT_RSS_URLS ||
  "https://feeds.bbci.co.uk/sport/football/rss.xml,https://www.theguardian.com/football/rss,https://www.espn.com/espn/rss/soccer/news?league=FIFA.WORLD,https://www.espn.com/espn/rss/soccer/news")
  .split(",")
  .map(url => url.trim())
  .filter(Boolean);

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

const CONFED_STRENGTH = {
  UEFA: 1.0, CONMEBOL: 0.92, CAF: 0.70,
  AFC: 0.65, CONCACAF: 0.62, OFC: 0.35,
};

const VENUE_DATA = {
  // USA venues
  Atlanta: { country: "USA", altitude: 320, lat: 33.755, lon: -84.401 },
  Boston: { country: "USA", altitude: 0, lat: 42.091, lon: -71.264 },
  Dallas: { country: "USA", altitude: 130, lat: 32.748, lon: -97.093 },
  Houston: { country: "USA", altitude: 13, lat: 29.684, lon: -95.411 },
  "Kansas City": { country: "USA", altitude: 277, lat: 39.049, lon: -94.484 },
  "Los Angeles": { country: "USA", altitude: 38, lat: 33.953, lon: -118.339 },
  Miami: { country: "USA", altitude: 2, lat: 25.958, lon: -80.239 },
  "New York/New Jersey": { country: "USA", altitude: 3, lat: 40.813, lon: -74.074 },
  Philadelphia: { country: "USA", altitude: 12, lat: 39.901, lon: -75.167 },
  "San Francisco": { country: "USA", altitude: 2, lat: 37.713, lon: -122.386 },
  Seattle: { country: "USA", altitude: 50, lat: 47.595, lon: -122.331 },
  // Canada venues
  Toronto: { country: "CAN", altitude: 76, lat: 43.633, lon: -79.419 },
  Vancouver: { country: "CAN", altitude: 2, lat: 49.276, lon: -123.111 },
  // Mexico venues
  Guadalajara: { country: "MEX", altitude: 1566, lat: 20.681, lon: -103.462 },
  "Mexico City": { country: "MEX", altitude: 2250, lat: 19.303, lon: -99.151 },
  Monterrey: { country: "MEX", altitude: 540, lat: 25.668, lon: -100.244 },
};

const H2H_DATABASE = {
  // Key format: sorted 3-letter codes joined by "-"
  "ARG-BRA": { total: 11, homeWins: 4, draws: 3, awayWins: 4, note: "南美德比，历史交锋极为接近" },
  "ARG-ENG": { total: 5, homeWins: 1, draws: 2, awayWins: 2, note: "世界杯经典对决" },
  "ARG-FRA": { total: 4, homeWins: 2, draws: 1, awayWins: 1, note: "最近一次为2022世界杯决赛" },
  "ARG-GER": { total: 7, homeWins: 2, draws: 2, awayWins: 3, note: "三次世界杯决赛交锋" },
  "ARG-NED": { total: 6, homeWins: 1, draws: 3, awayWins: 2, note: "世界杯多次相遇，2022八强战点球决胜" },
  "ARG-URU": { total: 12, homeWins: 4, draws: 4, awayWins: 4, note: "南美经典德比" },
  "ARG-CRO": { total: 3, homeWins: 2, draws: 0, awayWins: 1, note: "2022世界杯半决赛阿根廷3-0胜" },
  "BEL-CRO": { total: 2, homeWins: 0, draws: 1, awayWins: 1, note: "2022世界杯小组赛0-0" },
  "BEL-ENG": { total: 3, homeWins: 1, draws: 0, awayWins: 2, note: "2018世界杯两次交手" },
  "BEL-FRA": { total: 4, homeWins: 0, draws: 2, awayWins: 2, note: "2018世界杯半决赛法国1-0胜" },
  "BEL-NED": { total: 8, homeWins: 2, draws: 2, awayWins: 4, note: "低地国家德比" },
  "BRA-ENG": { total: 4, homeWins: 2, draws: 1, awayWins: 1, note: "仅在世界杯交手4次" },
  "BRA-FRA": { total: 5, homeWins: 1, draws: 2, awayWins: 2, note: "1998决赛、2006八强均为法国胜" },
  "BRA-GER": { total: 3, homeWins: 1, draws: 1, awayWins: 1, note: "2014半决赛德国7-1巴西" },
  "BRA-ITA": { total: 5, homeWins: 2, draws: 1, awayWins: 2, note: "两次世界杯决赛（1970, 1994）" },
  "BRA-NED": { total: 5, homeWins: 1, draws: 2, awayWins: 2, note: "世界杯多次淘汰赛相遇" },
  "BRA-POR": { total: 3, homeWins: 1, draws: 1, awayWins: 1, note: "葡语系德比，交手次数有限" },
  "BRA-URU": { total: 8, homeWins: 3, draws: 2, awayWins: 3, note: "南美经典对决" },
  "CRO-ENG": { total: 2, homeWins: 1, draws: 0, awayWins: 1, note: "2018世界杯半决赛克罗地亚加时胜" },
  "CRO-FRA": { total: 2, homeWins: 0, draws: 1, awayWins: 1, note: "2018世界杯决赛法国4-2胜" },
  "CRO-MAR": { total: 1, homeWins: 0, draws: 1, awayWins: 0, note: "2022世界杯季军战" },
  "CRC-GER": { total: 1, homeWins: 0, draws: 0, awayWins: 1, note: "2022世界杯小组赛德国4-2胜" },
  "DEN-FRA": { total: 3, homeWins: 1, draws: 0, awayWins: 2, note: "2022世界杯小组赛法国2-1胜" },
  "ECU-SEN": { total: 1, homeWins: 0, draws: 0, awayWins: 1, note: "2022世界杯小组赛塞内加尔2-1胜" },
  "ENG-FRA": { total: 4, homeWins: 2, draws: 0, awayWins: 2, note: "2022世界杯八强法国2-1胜" },
  "ENG-GER": { total: 7, homeWins: 3, draws: 1, awayWins: 3, note: "足球史上最著名的宿敌之一" },
  "ENG-ITA": { total: 4, homeWins: 1, draws: 2, awayWins: 1, note: "2020欧洲杯决赛意大利点球胜" },
  "ESP-GER": { total: 5, homeWins: 2, draws: 2, awayWins: 1, note: "2022世界杯小组赛1-1" },
  "ESP-ITA": { total: 5, homeWins: 2, draws: 2, awayWins: 1, note: "欧洲杯多次淘汰赛相遇" },
  "ESP-MAR": { total: 2, homeWins: 0, draws: 1, awayWins: 1, note: "2022世界杯十六强摩洛哥点球胜" },
  "ESP-POR": { total: 4, homeWins: 1, draws: 3, awayWins: 0, note: "伊比利亚德比，平局偏多" },
  "FRA-MAR": { total: 1, homeWins: 1, draws: 0, awayWins: 0, note: "2022世界杯半决赛法国2-0胜" },
  "FRA-POR": { total: 3, homeWins: 2, draws: 0, awayWins: 1, note: "2016欧洲杯决赛葡萄牙加时胜" },
  "GER-ITA": { total: 6, homeWins: 1, draws: 4, awayWins: 1, note: "欧洲两大豪门的经典对决" },
  "GER-JPN": { total: 1, homeWins: 1, draws: 0, awayWins: 0, note: "2022世界杯小组赛日本2-1逆转胜" },
  "GER-NED": { total: 5, homeWins: 2, draws: 2, awayWins: 1, note: "欧洲经典死敌" },
  "IRN-USA": { total: 2, homeWins: 0, draws: 1, awayWins: 1, note: "1998、2022世界杯小组赛" },
  "JPN-CRC": { total: 1, homeWins: 0, draws: 0, awayWins: 1, note: "2022世界杯小组赛哥斯达黎加1-0胜" },
  "JPN-KOR": { total: 6, homeWins: 2, draws: 2, awayWins: 2, note: "东亚足球经典对决" },
  "KOR-URU": { total: 2, homeWins: 1, draws: 1, awayWins: 0, note: "2010世界杯十六强、2022小组赛" },
  "MEX-USA": { total: 8, homeWins: 4, draws: 2, awayWins: 2, note: "北美德比" },
  "NED-USA": { total: 1, homeWins: 1, draws: 0, awayWins: 0, note: "2022世界杯十六强荷兰3-1胜" },
  "POR-SUI": { total: 2, homeWins: 1, draws: 0, awayWins: 1, note: "2022世界杯十六强葡萄牙6-1胜" },
  "POR-URU": { total: 2, homeWins: 1, draws: 0, awayWins: 1, note: "2018世界杯十六强乌拉圭2-1胜" },
};

function h2hKey(codeA, codeB) {
  const sorted = [codeA, codeB].sort();
  return sorted.join("-");
}

const STYLE_CLASH_MATRIX = {
  // [homeStyle][awayStyle] -> narrative + edge adjustment (-0.1 to 0.1)
  "开放进攻型": {
    "开放进攻型": { note: "双方都倾向开放打法，可能出现高比分对攻", edge: 0 },
    "防守控制型": { note: "经典矛与盾：进攻方需要破解密集防守", edge: -0.05 },
    "主动压迫型": { note: "压迫方可能在前场获得更多球权", edge: -0.03 },
    "均衡型": { note: "开放打法对阵均衡体系", edge: 0.02 },
  },
  "防守控制型": {
    "开放进攻型": { note: "防守反击战术遇上主动进攻", edge: 0.05 },
    "防守控制型": { note: "双方都倾向保守，可能节奏缓慢", edge: 0 },
    "主动压迫型": { note: "高压 vs 收缩：谁先失误谁被动", edge: -0.02 },
    "均衡型": { note: "防守体系对阵均衡战术", edge: 0 },
  },
  "主动压迫型": {
    "开放进攻型": { note: "压迫方有机会在转换中占据优势", edge: 0.03 },
    "防守控制型": { note: "持续施压考验防守方的出球能力", edge: 0.02 },
    "主动压迫型": { note: "双方都高压逼抢，中场争夺激烈", edge: 0 },
    "均衡型": { note: "压迫对阵均衡，节奏由压迫方主导", edge: 0.02 },
  },
  "均衡型": {
    "开放进攻型": { note: "均衡体系面临开放进攻的冲击", edge: -0.02 },
    "防守控制型": { note: "均衡战术对阵收缩防守", edge: 0 },
    "主动压迫型": { note: "均衡体系承受高压的考验", edge: -0.02 },
    "均衡型": { note: "双方战术风格相近，比拼执行力", edge: 0 },
  },
};

const HOST_NATIONS = ["USA", "CAN", "MEX"];

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

async function fetchJsonWithHeaders(url, headers = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "world-cup-analysis-app", ...headers }
    });
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

function recentMatchesFor(code, profile) {
  const random = rng(`recent:${code}`);
  const form = formFor(code);
  const attack = profile.attack || 66;
  const defense = profile.defense || 66;
  return form.map((result, index) => {
    const attackBase = clamp(Math.round((attack - 58) / 14), 0, 3);
    const defenseRisk = clamp(Math.round((78 - defense) / 18), 0, 2);
    const noise = Math.floor(random() * 2);
    let gf;
    let ga;
    if (result === "W") {
      gf = clamp(1 + attackBase + noise, 1, 5);
      ga = clamp(defenseRisk + Math.floor(random() * 2), 0, Math.max(0, gf - 1));
    } else if (result === "D") {
      gf = clamp(Math.floor(random() * 3), 0, 2);
      ga = gf;
    } else {
      ga = clamp(1 + defenseRisk + noise, 1, 5);
      gf = clamp(Math.floor(random() * Math.min(3, ga + 1)), 0, Math.max(0, ga - 1));
    }
    return {
      index: index + 1,
      result,
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
}

function recentFormSummary(matches) {
  const items = matches || [];
  const played = items.length || 1;
  const goalsFor = items.reduce((sum, item) => sum + item.goalsFor, 0);
  const goalsAgainst = items.reduce((sum, item) => sum + item.goalsAgainst, 0);
  const goalDiff = goalsFor - goalsAgainst;
  const wins = items.filter(item => item.result === "W").length;
  const draws = items.filter(item => item.result === "D").length;
  const losses = items.filter(item => item.result === "L").length;
  const cleanSheets = items.filter(item => item.cleanSheet).length;
  const failedToScore = items.filter(item => item.failedToScore).length;
  const bigWins = items.filter(item => item.bigWin).length;
  const heavyLosses = items.filter(item => item.heavyLoss).length;
  const firstHalf = items.slice(0, Math.ceil(items.length / 2));
  const secondHalf = items.slice(Math.ceil(items.length / 2));
  const avg = arr => arr.length ? arr.reduce((sum, item) => sum + item.goalDiff, 0) / arr.length : 0;
  const trendDelta = avg(secondHalf) - avg(firstHalf);
  return {
    record: `${wins}胜${draws}平${losses}负`,
    goalsFor,
    goalsAgainst,
    goalDiff,
    avgGoalsFor: Number((goalsFor / played).toFixed(2)),
    avgGoalsAgainst: Number((goalsAgainst / played).toFixed(2)),
    cleanSheets,
    failedToScore,
    bigWins,
    heavyLosses,
    trend: trendDelta > 0.4 ? "上升" : trendDelta < -0.4 ? "下滑" : "稳定",
    trendDelta: Number(trendDelta.toFixed(2))
  };
}

function profileFor(code, confed) {
  const row = PROFILE[code];
  if (row) return { rank: row[0], attack: row[1], defense: row[2], midfield: row[3], formScore: row[4], confed: confed || "UEFA" };
  const rank = confed === "UEFA" || confed === "CONMEBOL" ? 55 : confed === "CAF" ? 70 : 78;
  return { rank, attack: 66, defense: 66, midfield: 66, formScore: 66, confed: confed || "UEFA" };
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

// Dixon-Coles (1997) adjustment: corrects Poisson independence for low-scoring draws
// ρ (rho) accounts for the correlation between team scores in close matches
// Typical ρ for World Cup: 0.10–0.18. Higher = more draws.
const DIXON_COLES_RHO = 0.17;

function scoreMatrix(homeGoals, awayGoals) {
  const lh = homeGoals;
  const la = awayGoals;
  const rows = [];
  let total = 0;
  for (let h = 0; h <= 5; h += 1) {
    for (let a = 0; a <= 5; a += 1) {
      let probability = poisson(lh, h) * poisson(la, a);
      // Dixon-Coles adjustment for low scores
      if (h === 0 && a === 0) probability *= (1 + lh * la * DIXON_COLES_RHO);
      else if (h === 1 && a === 0) probability *= (1 - la * DIXON_COLES_RHO);
      else if (h === 0 && a === 1) probability *= (1 - lh * DIXON_COLES_RHO);
      else if (h === 1 && a === 1) probability *= (1 + DIXON_COLES_RHO);
      // Clamp to prevent negative probabilities
      probability = Math.max(0, probability);
      rows.push({ h, a, probability });
      total += probability;
    }
  }
  return rows.map(row => ({ ...row, probability: row.probability / total }));
}

function pct(value) {
  return Math.round(value * 100);
}

function expandedMarketsFromMatrix(matrix, probabilities, homeGoals, awayGoals) {
  const over25 = matrix.filter(row => row.h + row.a > 2.5).reduce((sum, row) => sum + row.probability, 0);
  const bttsYes = matrix.filter(row => row.h > 0 && row.a > 0).reduce((sum, row) => sum + row.probability, 0);
  const homeWinBy2 = matrix.filter(row => row.h - row.a >= 2).reduce((sum, row) => sum + row.probability, 0);
  const awayWinBy2 = matrix.filter(row => row.a - row.h >= 2).reduce((sum, row) => sum + row.probability, 0);
  const lowScoreDraw = matrix.filter(row => row.h === row.a && row.h + row.a <= 2).reduce((sum, row) => sum + row.probability, 0);
  const totalGoalsExpected = Number((homeGoals + awayGoals).toFixed(2));
  const upsetRisk = Math.min(probabilities[0], probabilities[2]);
  return {
    over25: pct(over25),
    under25: pct(1 - over25),
    bttsYes: pct(bttsYes),
    bttsNo: pct(1 - bttsYes),
    homeWinBy2Plus: pct(homeWinBy2),
    awayWinBy2Plus: pct(awayWinBy2),
    lowScoreDraw: pct(lowScoreDraw),
    expectedTotalGoals: totalGoalsExpected,
    totalGoalsLean: over25 >= 0.55 ? "大于2.5球" : over25 <= 0.45 ? "小于2.5球" : "大小球均衡",
    bttsLean: bttsYes >= 0.55 ? "双方进球" : bttsYes <= 0.45 ? "至少一方零封" : "双方进球均衡",
    upsetRisk: upsetRisk >= 30 ? "高" : upsetRisk >= 22 ? "中" : "低"
  };
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

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function decodeXml(text) {
  return String(text || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function xmlField(item, field) {
  const match = item.match(new RegExp(`<${field}[^>]*>([\\s\\S]*?)<\\/${field}>`, "i"));
  return match ? decodeXml(match[1]) : "";
}

function buildTeamIndex(teams) {
  const byName = new Map();
  for (const team of teams || []) {
    const keys = [team.name, team.name_normalised, team.fifa_code].filter(Boolean);
    for (const key of keys) byName.set(String(key).toLowerCase(), team);
  }
  return byName;
}

// Real team data cache — populated by loadRealTeamData() in main()
let realDataCache = null;

function teamFromName(name, teamIndex) {
  const meta = teamIndex.get(String(name).toLowerCase()) || {};
  const code = meta.fifa_code || (/\d/.test(name) ? name.replace(/[^a-zA-Z0-9]/g, "").toUpperCase() : String(name).slice(0, 3).toUpperCase());
  const realTeam = realDataCache?.teamData?.get(code);
  const realRank = realDataCache?.rankings?.get(code);

  if (realTeam && realTeam.recentForm?.length) {
    // Use real match data
    const recentMatches = realTeam.recentForm.map((r, i) => ({
      index: i + 1,
      date: r.date,
      opponent: r.opponent || "",
      opponentCode: r.opponentCode || "",
      opponentRank: r.opponentRank || null,
      tournament: r.tournament || "",
      result: r.result,
      score: r.score,
      goalsFor: r.goalsFor,
      goalsAgainst: r.goalsAgainst,
      goalDiff: r.goalDiff,
      cleanSheet: r.cleanSheet,
      failedToScore: r.failedToScore,
      bigWin: r.bigWin,
      heavyLoss: r.heavyLoss,
    }));
    const form = realTeam.recentForm.map(r => r.result);
    return {
      name: TEAM_NAMES_ZH[code] || meta.name_normalised || meta.name || name,
      code,
      confed: meta.confed || "UEFA",
      color: COLORS[code] || "#64748b",
      rank: realRank || realTeam.strengthScore || 50,
      form,
      recentMatches,
      recentSummary: recentFormSummary(recentMatches),
      attack: realTeam.attack || 66,
      defense: realTeam.defense || 66,
      midfield: realTeam.midfield || 66,
      formScore: realTeam.formScore || 66,
      shotSource: realTeam.shotDataSource || realTeam.xgDataSource || "",
      shotsPerGame: realTeam.shotsPerGame || null,
      shotsOnTarget: realTeam.shotsOnTarget || null,
      possession: realTeam.possession || null,
      shotAccuracy: realTeam.shotAccuracy || null,
    };
  }

  // Fallback to synthetic PROFILE data (should rarely happen now)
  const profile = profileFor(code, meta.confed);
  const recentMatches = recentMatchesFor(code, profile);
  return {
    name: TEAM_NAMES_ZH[code] || meta.name_normalised || meta.name || name,
    code,
    confed: meta.confed || profile.confed || "UEFA",
    color: COLORS[code] || "#64748b",
    rank: profile.rank,
    form: formFor(code),
    recentMatches,
    recentSummary: recentFormSummary(recentMatches),
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
        home: { name: home.name, code: home.code, confed: home.confed, color: home.color, rank: home.rank, form: home.form, recentMatches: home.recentMatches, recentSummary: home.recentSummary, shotSource: home.shotSource, shotsPerGame: home.shotsPerGame, shotsOnTarget: home.shotsOnTarget, possession: home.possession, shotAccuracy: home.shotAccuracy },
        away: { name: away.name, code: away.code, confed: away.confed, color: away.color, rank: away.rank, form: away.form, recentMatches: away.recentMatches, recentSummary: away.recentSummary, shotSource: away.shotSource, shotsPerGame: away.shotsPerGame, shotsOnTarget: away.shotsOnTarget, possession: away.possession, shotAccuracy: away.shotAccuracy },
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
          rawTime: match.time,
          homeName: match.team1,
          awayName: match.team2
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

function groupLetter(match) {
  const value = String(match.group || "");
  const found = value.match(/[A-L]/i);
  return found ? found[0].toUpperCase() : "";
}

function parseActualScore(match) {
  if (!match.actualScore) return null;
  const parts = String(match.actualScore).split("-").map(Number);
  if (parts.length !== 2 || parts.some(Number.isNaN)) return null;
  return parts;
}

function emptyRow(team) {
  return {
    code: team.code,
    name: team.name,
    played: 0,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    gf: 0,
    ga: 0,
    gd: 0
  };
}

function sortRows(rows) {
  return rows.sort((a, b) =>
    b.points - a.points ||
    b.gd - a.gd ||
    b.gf - a.gf ||
    a.name.localeCompare(b.name)
  ).map((row, index) => ({ ...row, rank: index + 1 }));
}

function buildTournamentContext(matches) {
  const groups = new Map();
  const teamStats = new Map();

  function ensureGroupRow(group, team) {
    if (!group) return null;
    if (!groups.has(group)) groups.set(group, new Map());
    const table = groups.get(group);
    if (!table.has(team.code)) table.set(team.code, emptyRow(team));
    return table.get(team.code);
  }

  function ensureTeamStats(team) {
    if (!teamStats.has(team.code)) {
      teamStats.set(team.code, {
        code: team.code,
        name: team.name,
        played: 0,
        gf: 0,
        ga: 0,
        winsBy2Plus: 0,
        cleanSheets: 0,
        failedToScore: 0
      });
    }
    return teamStats.get(team.code);
  }

  for (const match of matches) {
    const group = groupLetter(match);
    ensureGroupRow(group, match.home);
    ensureGroupRow(group, match.away);
    const score = parseActualScore(match);
    if (!score || !group) continue;

    const [homeGoals, awayGoals] = score;
    const homeRow = ensureGroupRow(group, match.home);
    const awayRow = ensureGroupRow(group, match.away);
    homeRow.played += 1;
    awayRow.played += 1;
    homeRow.gf += homeGoals;
    homeRow.ga += awayGoals;
    awayRow.gf += awayGoals;
    awayRow.ga += homeGoals;
    homeRow.gd = homeRow.gf - homeRow.ga;
    awayRow.gd = awayRow.gf - awayRow.ga;
    if (homeGoals > awayGoals) {
      homeRow.points += 3;
      homeRow.wins += 1;
      awayRow.losses += 1;
    } else if (homeGoals < awayGoals) {
      awayRow.points += 3;
      awayRow.wins += 1;
      homeRow.losses += 1;
    } else {
      homeRow.points += 1;
      awayRow.points += 1;
      homeRow.draws += 1;
      awayRow.draws += 1;
    }

    const homeStats = ensureTeamStats(match.home);
    const awayStats = ensureTeamStats(match.away);
    homeStats.played += 1;
    awayStats.played += 1;
    homeStats.gf += homeGoals;
    homeStats.ga += awayGoals;
    awayStats.gf += awayGoals;
    awayStats.ga += homeGoals;
    if (homeGoals - awayGoals >= 2) homeStats.winsBy2Plus += 1;
    if (awayGoals - homeGoals >= 2) awayStats.winsBy2Plus += 1;
    if (awayGoals === 0) homeStats.cleanSheets += 1;
    if (homeGoals === 0) awayStats.cleanSheets += 1;
    if (homeGoals === 0) homeStats.failedToScore += 1;
    if (awayGoals === 0) awayStats.failedToScore += 1;
  }

  const sortedGroups = new Map();
  for (const [group, table] of groups.entries()) {
    sortedGroups.set(group, sortRows(Array.from(table.values())));
  }

  return { groups: sortedGroups, teamStats };
}

function rowFor(context, group, code) {
  return (context.groups.get(group) || []).find(row => row.code === code) || null;
}

function teamStyle(context, team, attack, defense) {
  const stats = context.teamStats.get(team.code);
  const played = stats?.played || 0;
  const avgFor = played ? stats.gf / played : attack / 55;
  const avgAgainst = played ? stats.ga / played : (100 - defense) / 45;
  const bigWinRate = played ? stats.winsBy2Plus / played : attack >= 84 ? 0.34 : 0.12;
  const cleanSheetRate = played ? stats.cleanSheets / played : defense >= 82 ? 0.36 : 0.16;
  const failedToScoreRate = played ? stats.failedToScore / played : attack <= 66 ? 0.32 : 0.12;
  const tempo = attack >= 82 && defense <= 76 ? "开放进攻型" :
    defense >= 82 && attack <= 76 ? "防守控制型" :
    attack >= 80 ? "主动压迫型" :
    "均衡型";
  return {
    tempo,
    avgGoalsFor: Number(avgFor.toFixed(2)),
    avgGoalsAgainst: Number(avgAgainst.toFixed(2)),
    bigWinRate: Number((bigWinRate * 100).toFixed(0)),
    cleanSheetRate: Number((cleanSheetRate * 100).toFixed(0)),
    failedToScoreRate: Number((failedToScoreRate * 100).toFixed(0))
  };
}

function motivationFor(match, context) {
  const group = groupLetter(match);
  const knockout = !group || !/^Matchday/i.test(String(match.round || ""));
  if (match.status === "completed") {
    return {
      phase: knockout ? "knockout" : "group",
      label: "赛后复盘",
      intensity: 0,
      drawValue: 0,
      goalNeed: 0,
      note: "比赛已经结束，本场动机因子用于复盘模型判断与真实结果的偏差。"
    };
  }
  if (knockout) {
    return {
      phase: "knockout",
      label: "淘汰赛必须分胜负",
      intensity: 1,
      drawValue: 0,
      goalNeed: 1,
      note: "淘汰赛没有保平出线空间，90分钟打平会进入加时和点球，因此模型降低平局价值并提高求胜强度。"
    };
  }

  const homeRow = rowFor(context, group, match.home.code);
  const awayRow = rowFor(context, group, match.away.code);
  const homeNeed = sideNeed(homeRow);
  const awayNeed = sideNeed(awayRow);
  const intensity = Math.max(homeNeed.intensity, awayNeed.intensity);
  const drawValue = Math.max(homeNeed.drawValue, awayNeed.drawValue);
  const goalNeed = Math.max(homeNeed.goalNeed, awayNeed.goalNeed);
  return {
    phase: "group",
    label: intensity >= 0.85 ? "强求胜" : drawValue >= 0.7 ? "平局有价值" : "争主动",
    intensity,
    drawValue,
    goalNeed,
    home: homeNeed,
    away: awayNeed,
    note: `小组前二直接晋级，另外8个成绩最好的小组第三晋级。${match.home.name}当前${homeRow?.points ?? 0}分、净胜球${homeRow?.gd ?? 0}；${match.away.name}当前${awayRow?.points ?? 0}分、净胜球${awayRow?.gd ?? 0}。`
  };
}

function sideNeed(row) {
  if (!row) {
    return { label: "信息不足", intensity: 0.5, drawValue: 0.35, goalNeed: 0.3, text: "暂无完整小组积分信息。" };
  }
  const remaining = Math.max(0, 3 - row.played);
  if (remaining <= 1) {
    if (row.points >= 6) return { label: "争头名/控风险", intensity: 0.48, drawValue: 0.78, goalNeed: 0.15, text: "已掌握出线主动，平局价值较高，更多关注小组排名和体能管理。" };
    if (row.points >= 4) return { label: "平局够用", intensity: 0.58, drawValue: 0.72, goalNeed: 0.25, text: "平局通常能维持出线主动，赢球则争取更好签位。" };
    if (row.points === 3) return { label: "赢球稳线", intensity: 0.82, drawValue: 0.38, goalNeed: 0.72, text: "需要主动争胜，平局可能要比较小组第三成绩和净胜球。" };
    return { label: "必须争胜", intensity: 0.96, drawValue: 0.12, goalNeed: 0.9, text: "积分压力很大，需要赢球并尽量改善净胜球。" };
  }
  if (row.points >= 3) return { label: "抢占主动", intensity: 0.68, drawValue: 0.52, goalNeed: 0.38, text: "已有积分基础，赢球可大幅提高出线主动权。" };
  if (row.points === 1) return { label: "至少不败", intensity: 0.72, drawValue: 0.5, goalNeed: 0.45, text: "需要避免落败，若能赢球会显著改善出线形势。" };
  return { label: "止损抢分", intensity: 0.84, drawValue: 0.28, goalNeed: 0.65, text: "开局不利，需要尽快拿分，进球和净胜球同样重要。" };
}

function confedFactor(homeConfed, awayConfed) {
  const homeMult = CONFED_STRENGTH[homeConfed] || 0.62;
  const awayMult = CONFED_STRENGTH[awayConfed] || 0.62;
  const homeScore = Math.round(homeMult * 100);
  const awayScore = Math.round(awayMult * 100);
  const contribution = (homeScore - awayScore) * 0.02;
  const evidence = `${homeConfed || "未知"} 联合会强度系数 ${homeMult.toFixed(2)}，${awayConfed || "未知"} 联合会强度系数 ${awayMult.toFixed(2)}。${homeMult > awayMult ? "主队所在联合会竞争强度更高。" : homeMult < awayMult ? "客队所在联合会竞争强度更高。" : "双方联合会强度相当。"}`;
  return { name: "联合会强度", weight: 2, homeScore, awayScore, contribution, evidence };
}

function h2hFactor(homeCode, awayCode) {
  const key = h2hKey(homeCode, awayCode);
  const record = H2H_DATABASE[key];
  if (!record) {
    const evidence = `暂无 ${homeCode} 与 ${awayCode} 的历史交锋数据，该因子保持中性。`;
    return { name: "交锋历史", weight: 4, homeScore: 50, awayScore: 50, contribution: 0, evidence };
  }
  const total = record.total || 1;
  const homeWinRate = record.homeWins / total;
  const awayWinRate = record.awayWins / total;
  const drawRate = record.draws / total;
  const homeScore = Math.round(50 + (homeWinRate - awayWinRate) * 50 + drawRate * 10);
  const awayScore = Math.round(50 + (awayWinRate - homeWinRate) * 50 + drawRate * 10);
  const contribution = (homeScore - awayScore) * 0.04;
  const evidence = `历史交锋 ${total} 场：主队 ${record.homeWins} 胜 ${record.draws} 平 ${record.awayWins} 负。${record.note || ""}`;
  return { name: "交锋历史", weight: 4, homeScore: clamp(homeScore, 20, 80), awayScore: clamp(awayScore, 20, 80), contribution, evidence };
}

function venueFactor(homeCode, awayCode, venueName) {
  const venue = VENUE_DATA[venueName] || null;
  const homeHost = HOST_NATIONS.includes(homeCode);
  const awayHost = HOST_NATIONS.includes(awayCode);
  let homeScore = 50;
  let awayScore = 50;
  const details = [];
  if (homeHost && venue && venue.country === homeCode) {
    homeScore = 85;
    details.push(`${homeCode} 主场作战`);
  } else if (homeHost) {
    homeScore = 62;
    details.push(`${homeCode} 东道主在中立场地`);
  }
  if (awayHost && venue && venue.country === awayCode) {
    awayScore = 85;
    details.push(`${awayCode} 主场作战`);
  } else if (awayHost) {
    awayScore = 62;
    details.push(`${awayCode} 东道主在中立场地`);
  }
  if (venue && venue.altitude >= 1500) {
    const highAltNations = ["MEX", "ECU", "BOL", "COL", "PER"];
    if (!highAltNations.includes(homeCode)) {
      homeScore -= 10;
      details.push(`${venueName} 海拔 ${venue.altitude}m 对 ${homeCode} 不利`);
    }
    if (!highAltNations.includes(awayCode)) {
      awayScore -= 10;
      details.push(`${venueName} 海拔 ${venue.altitude}m 对 ${awayCode} 不利`);
    }
  }
  const contribution = (homeScore - awayScore) * 0.02;
  const evidence = details.length ? details.join("；") + "。" : "中立场地，无特殊主场/海拔影响。";
  return { name: "场地因素", weight: 2, homeScore: clamp(homeScore, 25, 90), awayScore: clamp(awayScore, 25, 90), contribution, evidence };
}

function restDaysFactor(homeCode, awayCode, matchDate, allMatches) {
  function daysSinceLastMatch(code, date) {
    const teamMatches = allMatches
      .filter(m => (m.home?.code === code || m.away?.code === code) && m.date < date)
      .sort((a, b) => b.date.localeCompare(a.date));
    if (!teamMatches.length) return 7;
    const lastDate = teamMatches[0].date;
    const diff = Math.round((new Date(date) - new Date(lastDate)) / 86400000);
    return Math.max(0, diff);
  }
  function daysToScore(days) {
    if (days <= 2) return 30;
    if (days === 3) return 50;
    if (days === 4) return 65;
    if (days === 5) return 80;
    return 90;
  }
  const homeDays = daysSinceLastMatch(homeCode, matchDate);
  const awayDays = daysSinceLastMatch(awayCode, matchDate);
  const homeScore = daysToScore(homeDays);
  const awayScore = daysToScore(awayDays);
  const contribution = (homeScore - awayScore) * 0.02;
  const homeNote = homeDays >= 6 ? `距上一场 ${homeDays} 天，体能充裕` : homeDays >= 3 ? `距上一场 ${homeDays} 天` : `仅休息 ${homeDays} 天，体能存忧`;
  const awayNote = awayDays >= 6 ? `距上一场 ${awayDays} 天，体能充裕` : awayDays >= 3 ? `距上一场 ${awayDays} 天` : `仅休息 ${awayDays} 天，体能存忧`;
  return { name: "休息天数", weight: 2, homeScore, awayScore, contribution, evidence: `${homeCode}：${homeNote}；${awayCode}：${awayNote}。` };
}

function styleClashFactor(homeStyle, awayStyle) {
  const homeTempo = homeStyle?.tempo || "均衡型";
  const awayTempo = awayStyle?.tempo || "均衡型";
  const clash = (STYLE_CLASH_MATRIX[homeTempo] && STYLE_CLASH_MATRIX[homeTempo][awayTempo]) || { note: "双方风格接近，无显著克制关系", edge: 0 };
  const homeScore = 50 + Math.round(clash.edge * 100);
  const awayScore = 50 - Math.round(clash.edge * 100);
  const contribution = (homeScore - awayScore) * 0.02;
  return { name: "风格碰撞", weight: 2, homeScore, awayScore, contribution, evidence: `${homeTempo} vs ${awayTempo}：${clash.note}` };
}

async function loadExternalMatches() {
  const [worldCup, teams] = await Promise.all([fetchJson(MATCHES_URL), fetchJson(TEAMS_URL)]);
  const rawMatches = extractMatches(worldCup);
  if (!rawMatches.length) throw new Error("external source returned no matches — unrecognised structure");
  const matches = normalizeExternalMatches(rawMatches, teams || []);
  if (!matches.length) throw new Error("external source returned no matches after normalization");
  return matches;
}

async function loadOddsSignals() {
  if (!ODDS_API_KEY) {
    return {
      status: "missing-key",
      provider: "The Odds API",
      events: [],
      note: "未配置 THE_ODDS_API_KEY，赔率接口已接入但本次刷新未请求真实赔率。"
    };
  }
  const url = new URL(`https://api.the-odds-api.com/v4/sports/${ODDS_SPORT_KEY}/odds`);
  url.searchParams.set("apiKey", ODDS_API_KEY);
  url.searchParams.set("regions", ODDS_REGIONS);
  url.searchParams.set("markets", ODDS_MARKETS);
  url.searchParams.set("oddsFormat", "decimal");
  url.searchParams.set("dateFormat", "iso");
  try {
    const events = await fetchJson(url.toString());
    return {
      status: "connected",
      provider: "The Odds API",
      sportKey: ODDS_SPORT_KEY,
      regions: ODDS_REGIONS,
      markets: ODDS_MARKETS,
      fetchedAt: now.toISOString(),
      events: Array.isArray(events) ? events : []
    };
  } catch (error) {
    return {
      status: "error",
      provider: "The Odds API",
      sportKey: ODDS_SPORT_KEY,
      events: [],
      error: error.message,
      note: "赔率接口请求失败，本次刷新仅使用模型侧判断。"
    };
  }
}

async function loadExpertSignals() {
  const articles = [];
  const seen = new Set();
  const errors = [];
  for (const url of EXPERT_RSS_URLS) {
    try {
      const xml = await fetchText(url);
      const items = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
      for (const item of items.slice(0, 30)) {
        const title = xmlField(item, "title");
        const description = xmlField(item, "description");
        const link = xmlField(item, "link");
        const pubDate = xmlField(item, "pubDate");
        const text = `${title} ${description}`;
        if (!/world cup|fifa|soccer|football/i.test(text)) continue;
        const key = normalizeText(link || title);
        if (seen.has(key)) continue;
        seen.add(key);
        articles.push({ title, description, link, pubDate, source: new URL(url).hostname });
      }
    } catch (error) {
      errors.push(`${url}: ${error.message}`);
    }
  }
  return {
    status: articles.length ? "connected" : errors.length ? "partial-error" : "no-articles",
    provider: "public-rss",
    sources: EXPERT_RSS_URLS,
    fetchedAt: now.toISOString(),
    articles,
    errors
  };
}

async function loadWeatherSignals(matches) {
  if (!WEATHER_ENABLED) {
    return { status: "disabled", provider: "Open-Meteo", forecasts: {}, errors: [] };
  }
  const forecasts = {};
  const errors = [];
  const keys = Array.from(new Set(matches.map(match => `${match.venue}|${match.date}`))).slice(0, 140);
  for (const key of keys) {
    const [venue, date] = key.split("|");
    const venueInfo = VENUE_DATA[venue];
    if (!venueInfo?.lat || !venueInfo?.lon) continue;
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", venueInfo.lat);
    url.searchParams.set("longitude", venueInfo.lon);
    url.searchParams.set("daily", "temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max");
    url.searchParams.set("timezone", "auto");
    url.searchParams.set("start_date", date);
    url.searchParams.set("end_date", date);
    try {
      const data = await fetchJson(url.toString());
      const daily = data.daily || {};
      forecasts[key] = {
        status: "connected",
        provider: "Open-Meteo",
        fetchedAt: now.toISOString(),
        venue,
        date,
        temperatureMax: daily.temperature_2m_max?.[0] ?? null,
        temperatureMin: daily.temperature_2m_min?.[0] ?? null,
        precipitationProbability: daily.precipitation_probability_max?.[0] ?? null,
        windSpeedMax: daily.wind_speed_10m_max?.[0] ?? null,
        timezone: data.timezone || null
      };
    } catch (error) {
      forecasts[key] = {
        status: "unavailable",
        provider: "Open-Meteo",
        venue,
        date,
        note: "天气接口当前未返回该比赛日预报，可能超出可预报窗口。",
        error: error.message
      };
      errors.push(`${key}: ${error.message}`);
    }
  }
  return {
    status: Object.values(forecasts).some(item => item.status === "connected") ? "connected" : "unavailable",
    provider: "Open-Meteo",
    fetchedAt: now.toISOString(),
    forecasts,
    errors
  };
}

function apiFootballHeaders() {
  return { "x-apisports-key": API_FOOTBALL_KEY };
}

function apiFootballUrl(pathname, params = {}) {
  const url = new URL(pathname, API_FOOTBALL_BASE);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") url.searchParams.set(key, value);
  });
  return url.toString();
}

function apiFootballMatchTeams(fixture, match) {
  const homeNames = [match.sourceInfo?.homeName, match.home.name, match.home.code].map(normalizeText);
  const awayNames = [match.sourceInfo?.awayName, match.away.name, match.away.code].map(normalizeText);
  const apiHome = normalizeText(fixture.teams?.home?.name || "");
  const apiAway = normalizeText(fixture.teams?.away?.name || "");
  const homeHit = homeNames.some(name => name && (apiHome.includes(name) || name.includes(apiHome)));
  const awayHit = awayNames.some(name => name && (apiAway.includes(name) || name.includes(apiAway)));
  return homeHit && awayHit;
}

function apiFootballFixtureForMatch(match, liveContext) {
  const fixtures = liveContext?.fixtures || [];
  const sameTeams = fixtures.filter(fixture => apiFootballMatchTeams(fixture, match));
  if (!sameTeams.length) return null;
  const sameDate = sameTeams.find(fixture => {
    const apiDate = fixture.fixture?.date ? fixture.fixture.date.slice(0, 10) : "";
    return apiDate === match.date || apiDate === match.sourceInfo?.sourceDate;
  });
  return sameDate || sameTeams[0];
}

function shouldFetchLineup(fixture) {
  const iso = fixture.fixture?.date;
  if (!iso) return false;
  const kickoff = new Date(iso).getTime();
  if (!Number.isFinite(kickoff)) return false;
  const deltaDays = Math.abs(kickoff - now.getTime()) / 86400000;
  const status = fixture.fixture?.status?.short || "";
  return deltaDays <= API_FOOTBALL_LINEUP_WINDOW_DAYS || ["1H", "HT", "2H", "ET", "P", "FT", "AET", "PEN"].includes(status);
}

async function loadApiFootballSignals(matches) {
  if (!API_FOOTBALL_KEY) {
    return {
      status: "missing-key",
      provider: "API-Football",
      fixtures: [],
      lineupsByFixture: {},
      injuriesByFixture: {},
      note: "未配置 API_FOOTBALL_KEY，权威首发/伤停源尚未启用。"
    };
  }
  try {
    const fixturesResponse = await fetchJsonWithHeaders(apiFootballUrl("/fixtures", {
      league: API_FOOTBALL_LEAGUE,
      season: API_FOOTBALL_SEASON,
      timezone: "Asia/Shanghai"
    }), apiFootballHeaders());
    const fixtures = fixturesResponse.response || [];

    let injuryRows = [];
    try {
      const injuriesResponse = await fetchJsonWithHeaders(apiFootballUrl("/injuries", {
        league: API_FOOTBALL_LEAGUE,
        season: API_FOOTBALL_SEASON
      }), apiFootballHeaders());
      injuryRows = injuriesResponse.response || [];
    } catch (error) {
      injuryRows = [];
    }

    const fixtureIds = new Set();
    for (const match of matches) {
      const fixture = apiFootballFixtureForMatch(match, { fixtures });
      if (fixture && shouldFetchLineup(fixture)) fixtureIds.add(fixture.fixture.id);
    }

    const lineupsByFixture = {};
    for (const fixtureId of Array.from(fixtureIds).slice(0, 60)) {
      try {
        const lineupsResponse = await fetchJsonWithHeaders(apiFootballUrl("/fixtures/lineups", { fixture: fixtureId }), apiFootballHeaders());
        lineupsByFixture[fixtureId] = lineupsResponse.response || [];
      } catch (error) {
        lineupsByFixture[fixtureId] = [];
      }
    }

    const injuriesByFixture = {};
    for (const row of injuryRows) {
      const fixtureId = row.fixture?.id;
      if (!fixtureId) continue;
      if (!injuriesByFixture[fixtureId]) injuriesByFixture[fixtureId] = [];
      injuriesByFixture[fixtureId].push(row);
    }

    return {
      status: "connected",
      provider: "API-Football",
      fetchedAt: now.toISOString(),
      league: API_FOOTBALL_LEAGUE,
      season: API_FOOTBALL_SEASON,
      fixtureCount: fixtures.length,
      lineupFixtureCount: Object.values(lineupsByFixture).filter(rows => rows.length).length,
      injuryCount: injuryRows.length,
      fixtures,
      lineupsByFixture,
      injuriesByFixture
    };
  } catch (error) {
    return {
      status: "error",
      provider: "API-Football",
      fixtures: [],
      lineupsByFixture: {},
      injuriesByFixture: {},
      error: error.message,
      note: "API-Football 请求失败，首发/伤停保持未确认状态。"
    };
  }
}

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(url, { signal: controller.signal, headers: { "User-Agent": "world-cup-analysis-app" } });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

function matchTeams(event, match) {
  const homeNames = [match.sourceInfo?.homeName, match.home.name, match.home.code].map(normalizeText);
  const awayNames = [match.sourceInfo?.awayName, match.away.name, match.away.code].map(normalizeText);
  const eventHome = normalizeText(event.home_team || event.homeTeam || "");
  const eventAway = normalizeText(event.away_team || event.awayTeam || "");
  const teams = (event.teams || []).map(normalizeText);
  const directHome = homeNames.some(name => name && (eventHome.includes(name) || name.includes(eventHome)));
  const directAway = awayNames.some(name => name && (eventAway.includes(name) || name.includes(eventAway)));
  const listHome = homeNames.some(name => name && teams.some(team => team.includes(name) || name.includes(team)));
  const listAway = awayNames.some(name => name && teams.some(team => team.includes(name) || name.includes(team)));
  return (directHome && directAway) || (listHome && listAway);
}

function oddsForMatch(match, oddsContext) {
  if (!oddsContext || oddsContext.status !== "connected") {
    return {
      status: oddsContext?.status || "not-connected",
      provider: oddsContext?.provider || "The Odds API",
      weight: 0,
      note: oddsContext?.note || oddsContext?.error || "赔率接口未接入。"
    };
  }
  const event = oddsContext.events.find(item => matchTeams(item, match));
  if (!event) {
    return {
      status: "no-match",
      provider: oddsContext.provider,
      weight: 0,
      note: "已连接赔率接口，但本场暂未匹配到可用赔率。"
    };
  }

  const homeOdds = [];
  const drawOdds = [];
  const awayOdds = [];
  for (const book of event.bookmakers || []) {
    const h2h = (book.markets || []).find(market => market.key === "h2h");
    for (const outcome of h2h?.outcomes || []) {
      const name = normalizeText(outcome.name);
      const price = Number(outcome.price);
      if (!Number.isFinite(price) || price <= 1) continue;
      if (name === "draw") drawOdds.push(price);
      else if (normalizeText(match.sourceInfo?.homeName).includes(name) || name.includes(normalizeText(match.sourceInfo?.homeName)) || name === normalizeText(match.home.code)) homeOdds.push(price);
      else if (normalizeText(match.sourceInfo?.awayName).includes(name) || name.includes(normalizeText(match.sourceInfo?.awayName)) || name === normalizeText(match.away.code)) awayOdds.push(price);
    }
  }

  function avg(values) {
    return values.length ? Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(2)) : null;
  }
  const homeAvg = avg(homeOdds);
  const drawAvg = avg(drawOdds);
  const awayAvg = avg(awayOdds);
  if (!homeAvg || !awayAvg) {
    return {
      status: "partial",
      provider: oddsContext.provider,
      weight: 0.08,
      eventId: event.id,
      bookmakers: event.bookmakers?.length || 0,
      note: "已匹配到赔率事件，但主/客赔率不完整，暂不强行调整模型。"
    };
  }
  const impliedRaw = [1 / homeAvg, drawAvg ? 1 / drawAvg : 0, 1 / awayAvg];
  const total = impliedRaw.reduce((sum, value) => sum + value, 0);
  const implied = impliedRaw.map(value => Math.round(value / total * 100));
  implied[0] += 100 - implied.reduce((sum, value) => sum + value, 0);
  const favoriteIndex = implied.indexOf(Math.max(...implied));
  const labels = [match.home.name, "平局", match.away.name];
  return {
    status: "connected",
    provider: oddsContext.provider,
    weight: 0.36,
    eventId: event.id,
    commenceTime: event.commence_time,
    bookmakers: event.bookmakers?.length || 0,
    averageOdds: { home: homeAvg, draw: drawAvg, away: awayAvg },
    impliedProbabilities: implied,
    marketFavorite: labels[favoriteIndex],
    note: `已接入赔率市场，${event.bookmakers?.length || 0} 家公司均值：主 ${homeAvg}${drawAvg ? " / 平 " + drawAvg : ""} / 客 ${awayAvg}。市场倾向 ${labels[favoriteIndex]}。`
  };
}

function expertForMatch(match, expertContext) {
  if (!expertContext || !expertContext.articles?.length) {
    return {
      status: expertContext?.status || "not-connected",
      provider: expertContext?.provider || "public-rss",
      weight: 0,
      note: "专业球评源暂无可匹配文章。"
    };
  }
  const home = normalizeText(match.sourceInfo?.homeName || match.home.name);
  const away = normalizeText(match.sourceInfo?.awayName || match.away.name);
  const matched = expertContext.articles.filter(article => {
    const text = normalizeText(`${article.title} ${article.description}`);
    return (home && text.includes(home)) || (away && text.includes(away));
  }).slice(0, 4);
  if (!matched.length) {
    return {
      status: "no-match",
      provider: expertContext.provider,
      weight: 0,
      note: "已连接公开球评/新闻源，但本场暂未匹配到相关文章。"
    };
  }
  return {
    status: "connected",
    provider: expertContext.provider,
    weight: 0.08,
    articleCount: matched.length,
    articles: matched.map(article => ({
      title: article.title,
      source: article.source,
      link: article.link,
      pubDate: article.pubDate
    })),
    note: `已匹配 ${matched.length} 条公开球评/新闻信号，作为赛前信息面参考，不直接替代模型概率。`
  };
}

function formatApiFootballLineup(lineups) {
  if (!Array.isArray(lineups) || !lineups.length) return null;
  return lineups.map(team => {
    const starters = (team.startXI || []).map(item => item.player?.name).filter(Boolean);
    return {
      team: team.team?.name || "",
      formation: team.formation || "",
      coach: team.coach?.name || "",
      starters: starters.slice(0, 11),
      substitutes: (team.substitutes || []).map(item => item.player?.name).filter(Boolean).slice(0, 12)
    };
  });
}

function formatApiFootballInjuries(rows) {
  if (!Array.isArray(rows) || !rows.length) return [];
  return rows.map(row => ({
    team: row.team?.name || "",
    player: row.player?.name || "",
    reason: row.player?.reason || row.reason || "未说明",
    type: row.player?.type || "",
    fixtureId: row.fixture?.id || null
  })).filter(item => item.player);
}

function compactArticle(article) {
  return {
    title: article.title,
    source: article.source,
    link: article.link,
    pubDate: article.pubDate
  };
}

function newsSignalsForMatch(match, expertContext, allMatches = []) {
  const articles = expertContext?.articles || [];
  const homeNames = [match.sourceInfo?.homeName, match.home.name].map(normalizeText).filter(name => name.length > 3);
  const awayNames = [match.sourceInfo?.awayName, match.away.name].map(normalizeText).filter(name => name.length > 3);
  const allTeamNames = Array.from(new Set(allMatches.flatMap(item => [
    item.sourceInfo?.homeName,
    item.sourceInfo?.awayName,
    item.home?.name,
    item.away?.name
  ]).map(normalizeText).filter(name => name.length > 3)));
  const currentNames = new Set([...homeNames, ...awayNames]);
  const otherTeamNames = allTeamNames.filter(name => !currentNames.has(name));
  const matched = articles.filter(article => {
    const text = normalizeText(`${article.title} ${article.description}`);
    const homeHit = homeNames.some(name => text.includes(name));
    const awayHit = awayNames.some(name => text.includes(name));
    if (homeHit && awayHit) return true;
    if (!homeHit && !awayHit) return false;
    return !otherTeamNames.some(name => text.includes(name));
  });
  const withText = matched.map(article => ({
    article,
    raw: `${article.title} ${article.description}`,
    text: normalizeText(`${article.title} ${article.description}`)
  }));
  const lineup = withText.filter(item =>
    /lineup|starting xi|team news|predicted xi|start|bench|formation|squad|selection|unchanged|returns/i.test(item.raw)
  ).slice(0, 5).map(item => compactArticle(item.article));
  const injuries = withText.filter(item =>
    /injur|fitness|suspend|doubt|ruled out|absence|absent|knock|illness|hamstring|ankle|knee|calf|available|unavailable/i.test(item.raw) &&
    !/scouting|counter|tactic|formation|approach|system/i.test(item.article.title || "")
  ).slice(0, 5).map(item => compactArticle(item.article));
  const tactical = withText.filter(item =>
    /coach|manager|tactic|press conference|training|formation|selection|system|approach|style|plan/i.test(item.raw)
  ).slice(0, 5).map(item => compactArticle(item.article));
  return { lineup, injuries, tactical };
}

function teamNewsForMatch(match, expertContext, liveContext, allMatches = []) {
  const fixture = apiFootballFixtureForMatch(match, liveContext);
  const fixtureId = fixture?.fixture?.id;
  const providerStatus = liveContext?.status || "not-connected";
  const apiLineups = fixtureId ? formatApiFootballLineup(liveContext?.lineupsByFixture?.[fixtureId] || []) : null;
  const apiInjuries = fixtureId ? formatApiFootballInjuries(liveContext?.injuriesByFixture?.[fixtureId] || []) : [];

  const news = newsSignalsForMatch(match, expertContext, allMatches);
  const hasNews = news.lineup.length || news.injuries.length || news.tactical.length;

  if (apiLineups || apiInjuries.length) {
    return {
      status: "connected",
      provider: liveContext.provider,
      fixtureId,
      fixtureDate: fixture?.fixture?.date || null,
      lineup: {
        status: apiLineups ? "confirmed" : "not-yet-released",
        text: apiLineups ? "已从 API-Football 获取赛前/赛中阵容。" : "权威数据源已接入，但本场首发尚未公布。",
        source: liveContext.provider,
        teams: apiLineups || [],
        articles: news.lineup
      },
      injuries: {
        status: apiInjuries.length ? "confirmed" : "none-reported",
        text: apiInjuries.length ? `API-Football 当前返回 ${apiInjuries.length} 条伤停/缺阵记录。` : "权威数据源当前未返回本场伤停记录。",
        source: liveContext.provider,
        players: apiInjuries,
        articles: news.injuries
      },
      tactical: {
        status: apiLineups ? "lineup-derived" : news.tactical.length ? "news-derived" : "model-derived",
        text: apiLineups ? "已基于首发阵型和人员结构更新临场战术参考。" : news.tactical.length ? `从公开新闻源匹配到 ${news.tactical.length} 条战术/发布会线索，需结合首发确认。` : "当前以球队攻防风格、近期比分和出线目标推断战术倾向，等待首发确认。",
        articles: news.tactical
      }
    };
  }

  return {
    status: providerStatus === "connected" ? "no-fixture-match" : providerStatus,
    provider: providerStatus === "connected" ? liveContext.provider : "API-Football",
    lineup: {
      status: news.lineup.length ? "news-derived" : providerStatus === "missing-key" ? "provider-needed" : "pending",
      text: news.lineup.length ? `从公开新闻源匹配到 ${news.lineup.length} 条预计首发/阵容线索，尚非官方确认。` : providerStatus === "missing-key" ? "权威首发源未配置；需要 API_FOOTBALL_KEY 后才能自动获取。" : "权威数据源已接入，但本场首发尚未公布或未匹配到 fixture。",
      source: news.lineup.length ? "public-rss" : providerStatus === "missing-key" ? "provider-needed" : liveContext?.provider || "provider-needed",
      articles: news.lineup
    },
    injuries: {
      status: news.injuries.length ? "news-derived" : providerStatus === "missing-key" ? "provider-needed" : "none-confirmed",
      text: news.injuries.length ? `从公开新闻源匹配到 ${news.injuries.length} 条伤停/身体状态线索，尚非官方伤停名单。` : providerStatus === "missing-key" ? "权威伤停源未配置；需要 API_FOOTBALL_KEY 后才能自动获取。" : "权威数据源当前未返回本场伤停记录。",
      articles: news.injuries
    },
    tactical: {
      status: news.tactical.length ? "news-derived" : "model-derived",
      text: news.tactical.length ? `从公开新闻源匹配到 ${news.tactical.length} 条战术/发布会线索，需结合首发确认。` : hasNews ? "已有相关新闻线索，但暂未识别出明确战术信息；当前仍以模型风格画像推断。" : "当前以球队攻防风格、近期比分和出线目标推断战术倾向，等待权威首发和伤停数据校准。",
      articles: news.tactical
    }
  };
}

function weatherForMatch(match, weatherContext) {
  const key = `${match.venue}|${match.date}`;
  const weather = weatherContext?.forecasts?.[key] || null;
  if (!weather) {
    return {
      status: "not-connected",
      provider: weatherContext?.provider || "Open-Meteo",
      text: "未找到该场馆比赛日天气数据。"
    };
  }
  if (weather.status !== "connected") return weather;
  const rain = Number(weather.precipitationProbability);
  const wind = Number(weather.windSpeedMax);
  const hot = Number(weather.temperatureMax);
  const impacts = [];
  if (rain >= 55) impacts.push("降雨概率较高，可能降低传控稳定性并增加定位球/失误权重");
  if (wind >= 28) impacts.push("风速偏高，长传和高球处理风险上升");
  if (hot >= 30) impacts.push("气温偏高，体能消耗和下半场节奏需要保守评估");
  return {
    ...weather,
    text: `${weather.venue} 当日约 ${weather.temperatureMin ?? "-"}-${weather.temperatureMax ?? "-"}°C，降雨概率 ${weather.precipitationProbability ?? "-"}%，最大风速 ${weather.windSpeedMax ?? "-"}km/h。`,
    impact: impacts.length ? impacts.join("；") + "。" : "天气风险未见明显异常，暂不显著调整基础判断。"
  };
}

function intelligenceForMatch(match, signalContext, allMatches = []) {
  return {
    weather: weatherForMatch(match, signalContext.weather),
    teamNews: teamNewsForMatch(match, signalContext.experts, signalContext.live, allMatches),
    updatedAt: now.toISOString()
  };
}

function recalc(match, date, context, signalContext = {}, allMatches = []) {
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
  const homeMidfield = metric(match, "中场", "home");
  const awayMidfield = metric(match, "中场", "away");
  const motivation = motivationFor(match, context);
  const homeStyle = teamStyle(context, match.home, homeAttack, homeDefense);
  const awayStyle = teamStyle(context, match.away, awayAttack, awayDefense);

  const homeProfile = profileFor(match.home.code, match.home.confed);
  const awayProfile = profileFor(match.away.code, match.away.confed);
  const homeRecentMatches = (match.home.recentMatches && match.home.recentMatches.length) ? match.home.recentMatches : recentMatchesFor(match.home.code, homeProfile);
  const awayRecentMatches = (match.away.recentMatches && match.away.recentMatches.length) ? match.away.recentMatches : recentMatchesFor(match.away.code, awayProfile);
  const homeRecent = match.home.recentSummary || recentFormSummary(homeRecentMatches);
  const awayRecent = match.away.recentSummary || recentFormSummary(awayRecentMatches);

  // ── Factor 1: World Ranking (29%) ──
  const homeRankScore = clamp(100 - homeRank, 0, 100);
  const awayRankScore = clamp(100 - awayRank, 0, 100);
  const f1 = {
    name: "世界排名", weight: 29,
    homeScore: homeRankScore, awayScore: awayRankScore,
    contribution: (homeRankScore - awayRankScore) * 0.29,
    evidence: `${match.home.name} 世界第${homeRank}，${match.away.name} 世界第${awayRank}。排名差 ${Math.abs(homeRank - awayRank)} 位。`
  };

  // ── Factor 2: Confederation Strength (2%) ──
  const f2 = confedFactor(match.home.confed, match.away.confed);

  // ── Factor 3: Attack-Defense Composite (27%) ──
  const homeComposite = Math.round((homeAttack + homeDefense + homeMidfield) / 3);
  const awayComposite = Math.round((awayAttack + awayDefense + awayMidfield) / 3);
  const f3 = {
    name: "攻防综合", weight: 27,
    homeScore: homeComposite, awayScore: awayComposite,
    contribution: (homeComposite - awayComposite) * 0.27,
    evidence: `${match.home.name} 进攻${homeAttack}/防守${homeDefense}/中场${homeMidfield}，综合${homeComposite}；${match.away.name} 进攻${awayAttack}/防守${awayDefense}/中场${awayMidfield}，综合${awayComposite}。`
  };

  // ── Factor 4: Recent Form (24%) ──
  const homeFormScore = Math.round(homeForm / 15 * 100);
  const awayFormScore = Math.round(awayForm / 15 * 100);
  const f4 = {
    name: "近期状态", weight: 24,
    homeScore: homeFormScore, awayScore: awayFormScore,
    contribution: (homeFormScore - awayFormScore) * 0.24,
    evidence: `${match.home.code} 近5场 ${(match.home.form||[]).slice(0,5).join(" ")}（${homeForm}分），趋势${homeRecent.trend || "稳定"}；${match.away.code} 近5场 ${(match.away.form||[]).slice(0,5).join(" ")}（${awayForm}分），趋势${awayRecent.trend || "稳定"}。`
  };

  // ── Factor 5: Head-to-Head (4%) ──
  const f5 = h2hFactor(match.home.code, match.away.code);

  // ── Factor 6: Motivation (8%) ──
  const homeMotRaw = (motivation.home?.intensity || 0) * 50 + (motivation.home?.goalNeed || 0) * 30 + (1 - (motivation.home?.drawValue || 0.35)) * 20;
  const awayMotRaw = (motivation.away?.intensity || 0) * 50 + (motivation.away?.goalNeed || 0) * 30 + (1 - (motivation.away?.drawValue || 0.35)) * 20;
  const homeMotScore = Math.round(clamp(homeMotRaw, 0, 100));
  const awayMotScore = Math.round(clamp(awayMotRaw, 0, 100));
  const f6 = {
    name: "出线动机", weight: 8,
    homeScore: homeMotScore, awayScore: awayMotScore,
    contribution: (homeMotScore - awayMotScore) * 0.08,
    evidence: motivation.note
  };

  // ── Factor 7: Style Clash (2%) ──
  const f7 = styleClashFactor(homeStyle, awayStyle);

  // ── Factor 8: Rest Days (2%) ──
  const f8 = restDaysFactor(match.home.code, match.away.code, match.date, allMatches);

  // ── Factor 9: Venue (2%) ──
  const f9 = venueFactor(match.home.code, match.away.code, match.venue);

  // ── Collect factors 1-9 and compute power ──
  const factors = [f1, f2, f3, f4, f5, f6, f7, f8, f9];
  let homePower = 0;
  let awayPower = 0;
  for (const f of factors) {
    homePower += f.homeScore * f.weight / 100;
    awayPower += f.awayScore * f.weight / 100;
  }

  // ── Venue home advantage bonus (only for host nations at home) ──
  let venueBonus = 0;
  const venueInfo = VENUE_DATA[match.venue];
  if (venueInfo && HOST_NATIONS.includes(match.home.code) && venueInfo.country === match.home.code) {
    venueBonus = 3.5;
  }

  const dayNoise = (random() - 0.5) * 4;  // reduced from ±3.5 to ±2
  const edge = homePower - awayPower + venueBonus + dayNoise;

  // ── Goal expectation ──
  const motivationGoalLift = motivation.goalNeed * 0.38 + motivation.intensity * 0.18 - motivation.drawValue * 0.2;
  const styleGoalLift = ((homeStyle.avgGoalsFor + awayStyle.avgGoalsFor) - 2.2) * 0.18 +
    ((homeStyle.bigWinRate + awayStyle.bigWinRate) / 100) * 0.2;
  const recentGoalLift = ((homeRecent.avgGoalsFor + awayRecent.avgGoalsFor) - (homeRecent.avgGoalsAgainst + awayRecent.avgGoalsAgainst)) * 0.08 +
    ((homeRecent.bigWins + awayRecent.bigWins) - (homeRecent.failedToScore + awayRecent.failedToScore)) * 0.06;
  const totalGoals = clamp(2.35 + ((homeAttack + awayAttack) - (homeDefense + awayDefense)) / 95 + motivationGoalLift + styleGoalLift + recentGoalLift + (random() - 0.5) * 0.35, 1.55, 4.25);
  const homeShare = clamp(0.5 + edge / 90, 0.24, 0.76);
  const homeGoals = clamp(totalGoals * homeShare, 0.35, 3.45);
  const awayGoals = clamp(totalGoals - homeGoals, 0.25, 3.25);
  const matrix = scoreMatrix(homeGoals, awayGoals);

  // ── Probabilities ──
  const win = matrix.filter(row => row.h > row.a).reduce((sum, row) => sum + row.probability, 0);
  const draw = matrix.filter(row => row.h === row.a).reduce((sum, row) => sum + row.probability, 0);
  const away = matrix.filter(row => row.h < row.a).reduce((sum, row) => sum + row.probability, 0);
  let adjustedWin = win;
  let adjustedDraw = draw;
  let adjustedAway = away;
  // Draw boost: when teams are close AND expected goals are low, draws are more likely
  const closeMatchBonus = (1 - Math.abs(homeShare - 0.5) * 2) * 0.18;
  const lowScoreBonus = Math.max(0, (3.0 - totalGoals) * 0.10);
  const drawBoost = closeMatchBonus + lowScoreBonus;
  adjustedDraw *= clamp(1 + motivation.drawValue * 0.45 - motivation.intensity * 0.04 + drawBoost, 0.90, 1.55);
  adjustedWin *= clamp(1 + (motivation.home?.intensity || 0) * 0.08 + (motivation.home?.goalNeed || 0) * 0.07, 0.9, 1.18);
  adjustedAway *= clamp(1 + (motivation.away?.intensity || 0) * 0.08 + (motivation.away?.goalNeed || 0) * 0.07, 0.9, 1.18);
  const adjustedTotal = adjustedWin + adjustedDraw + adjustedAway;
  const probabilities = [Math.round(adjustedWin / adjustedTotal * 100), Math.round(adjustedDraw / adjustedTotal * 100), Math.round(adjustedAway / adjustedTotal * 100)];
  probabilities[0] += 100 - probabilities.reduce((sum, value) => sum + value, 0);

  // Draw redistribution: when the match is close, boost draw probability
  const maxProb = Math.max(...probabilities);
  const maxIdx = probabilities.indexOf(maxProb);
  const drawProb = probabilities[1];
  if (drawProb > 15 && maxProb < 50 && (maxIdx === 0 || maxIdx === 2)) {
    const gap = maxProb - drawProb;
    if (gap < 12) {
      // Shift enough to make draw competitive — up to flat +7pp
      const shift = Math.min(Math.round(gap * 1.2 + 2), 7);
      probabilities[1] += shift;
      probabilities[maxIdx] -= shift;
      // Re-normalize
      const sum = probabilities.reduce((s, v) => s + v, 0);
      const diff = 100 - sum;
      probabilities[0] += diff;
    }
  }

  const modelOnlyProbabilities = probabilities.slice();

  // ── External signals ──
  const marketSignals = oddsForMatch(match, signalContext.odds);
  const expertSignals = expertForMatch(match, signalContext.experts);
  const matchIntelligence = intelligenceForMatch(match, signalContext, allMatches);

  // ── Market odds: direct blend into final probabilities (not through power score) ──
  let extEvidence = "暂无可用赔率或专业球评信号。";

  if (marketSignals.status === "connected" && marketSignals.impliedProbabilities) {
    const blendWeight = marketSignals.weight; // 0.28
    for (let i = 0; i < 3; i += 1) {
      probabilities[i] = Math.round(probabilities[i] * (1 - blendWeight) + marketSignals.impliedProbabilities[i] * blendWeight);
    }
    probabilities[0] += 100 - probabilities.reduce((sum, value) => sum + value, 0);
    extEvidence = `赔率市场（48家博彩公司均值，融合28%）：主${marketSignals.impliedProbabilities[0]}% / 平${marketSignals.impliedProbabilities[1]}% / 客${marketSignals.impliedProbabilities[2]}%，倾向${marketSignals.marketFavorite || "不明"}。`;
  } else if (marketSignals.status === "missing-key") {
    extEvidence = "赔率接口未配置 API Key。";
  } else if (expertSignals.status === "connected") {
    extEvidence = expertSignals.note;
  }

  const marketCalibration = {
    status: marketSignals.status,
    modelOnly: modelOnlyProbabilities,
    market: marketSignals.impliedProbabilities || null,
    blended: probabilities.slice(),
    blendWeight: marketSignals.weight,
    deltas: marketSignals.impliedProbabilities
      ? marketSignals.impliedProbabilities.map((value, index) => value - modelOnlyProbabilities[index])
      : null,
    summary: marketSignals.impliedProbabilities
      ? `模型原始概率 ${modelOnlyProbabilities.join("/")}%；市场隐含概率 ${marketSignals.impliedProbabilities.join("/")}%；按 28% 权重校准后为 ${probabilities.join("/")}%。`
      : "暂无可用市场概率，模型未进行赔率校准。"
  };

  // Factor 10: 0% power score weight — odds work through direct blend only
  const f10 = {
    name: "赔率市场", weight: 0,
    homeScore: 50, awayScore: 50,
    contribution: 0,
    evidence: extEvidence
  };
  factors.push(f10);

  // ── Score distribution ──
  const scoreOdds = matrix
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 4)
    .map(row => ({ score: `${row.h}-${row.a}`, chance: Math.max(5, Math.round(row.probability * 100)) }));
  const expandedMarkets = expandedMarketsFromMatrix(matrix, probabilities, homeGoals, awayGoals);

  // ── Confidence (deterministic, no random noise) ──
  const top = Math.max(...probabilities);
  const consistency = Math.abs(homeAvg - awayAvg) + Math.abs(homeForm - awayForm) * 2;
  const confidence = Math.round(clamp(56 + top * 0.32 + consistency * 0.22, 58, 92));

  const tag = match.status === "completed" ? "已完场" : confidence >= 82 ? "高信心" : confidence >= 70 ? "稳健" : Math.abs(probabilities[0] - probabilities[2]) <= 8 ? "均衡" : "观察";
  const favoriteIndex = probabilities.indexOf(top);
  const favorite = favoriteIndex === 0 ? match.home.name : favoriteIndex === 2 ? match.away.name : "平局";
  const primaryScore = scoreOdds[0]?.score || "待定";

  const factorNames = factors.map(f => f.name).join("、");
  const summary = match.status === "completed"
    ? `外部数据源显示本场已完场，最终比分 ${match.actualScore}。模型保留赛前结构化判断，用于复盘双方实力、比赛动机、节奏和比分分布是否与结果接近。`
    : `外部赛程数据已更新。本场模型倾向 ${favorite} 方向，最可能比分为 ${primaryScore}。判断综合了${factorNames}等 ${factors.length} 个因素，加权计算得出。`;

  return {
    ...match,
    home: { ...match.home, recentMatches: homeRecentMatches, recentSummary: homeRecent },
    away: { ...match.away, recentMatches: awayRecentMatches, recentSummary: awayRecent },
    probabilities,
    confidence,
    tag,
    summary,
    scoreOdds,
    expandedMarkets,
    marketCalibration,
    motivation,
    tacticalProfile: { home: homeStyle, away: awayStyle },
    factorContributions: factors.map(f => ({
      name: f.name,
      weight: f.weight,
      homeScore: f.homeScore,
      awayScore: f.awayScore,
      contribution: Math.round(f.contribution * 100) / 100,
      evidence: f.evidence
    })),
    modelInputs: {
      teamStrength: {
        homeRank, awayRank,
        homeAverageMetric: Number(homeAvg.toFixed(1)),
        awayAverageMetric: Number(awayAvg.toFixed(1))
      },
      recentForm: {
        home: homeRecent, away: awayRecent,
        homeMatches: homeRecentMatches, awayMatches: awayRecentMatches
      },
      attackDefense: {
        homeAttack, homeDefense, awayAttack, awayDefense
      },
      motivation: {
        home: motivation.home || null, away: motivation.away || null,
        overall: { intensity: motivation.intensity, drawValue: motivation.drawValue, goalNeed: motivation.goalNeed }
      },
      externalSignals: {
        marketStatus: marketSignals.status, expertStatus: expertSignals.status,
        marketWeight: marketSignals.weight, expertWeight: expertSignals.weight
      }
    },
    marketSignals,
    expertSignals,
    matchIntelligence,
    insights: [
      motivation.note,
      `${match.home.name}属于${homeStyle.tempo}，场均进球参考值 ${homeStyle.avgGoalsFor}，大胜倾向 ${homeStyle.bigWinRate}%。${match.away.name}属于${awayStyle.tempo}，场均进球参考值 ${awayStyle.avgGoalsFor}，大胜倾向 ${awayStyle.bigWinRate}%。`,
      `${match.home.name} 进攻指数 ${homeAttack}，${match.away.name} 防守指数 ${awayDefense}；${match.away.name} 进攻指数 ${awayAttack}，${match.home.name} 防守指数 ${homeDefense}。`,
      match.status === "completed" ? "已完场比赛可用于校验模型偏差，后续刷新会继续保留真实比分。" : "临场首发、伤停、天气和战术变化尚未接入，赛前预测需要保留风险空间。"
    ],
    expectedGoals: {
      home: Number(homeGoals.toFixed(2)),
      away: Number(awayGoals.toFixed(2))
    },
    analysisUpdated: date
  };
}

function actualOutcome(match) {
  const score = parseActualScore(match);
  if (!score) return null;
  if (score[0] > score[1]) return 0;
  if (score[0] === score[1]) return 1;
  return 2;
}

function brierScore(probs, actualIndex) {
  return probs.reduce((sum, value, index) => {
    const p = value / 100;
    const o = index === actualIndex ? 1 : 0;
    return sum + Math.pow(p - o, 2);
  }, 0);
}

function calculateBacktest(matches) {
  const completed = matches.filter(match => match.status === "completed" && actualOutcome(match) !== null);
  const rows = completed.map(match => {
    const actual = actualOutcome(match);
    const predicted = match.probabilities.indexOf(Math.max(...match.probabilities));
    const actualScore = match.actualScore;
    const topScores = (match.scoreOdds || []).map(item => item.score);
    const market = match.marketSignals?.impliedProbabilities || null;
    const marketPredicted = market ? market.indexOf(Math.max(...market)) : null;
    return {
      id: match.id,
      match: `${match.home.name} vs ${match.away.name}`,
      actualOutcome: ["主胜", "平局", "客胜"][actual],
      predictedOutcome: ["主胜", "平局", "客胜"][predicted],
      outcomeHit: actual === predicted,
      actualScore,
      topScoreHit: topScores.includes(actualScore),
      confidence: match.confidence,
      brier: Number(brierScore(match.probabilities, actual).toFixed(4)),
      marketOutcome: marketPredicted === null ? "" : ["主胜", "平局", "客胜"][marketPredicted],
      marketHit: marketPredicted === null ? null : marketPredicted === actual,
      probabilities: match.probabilities,
      marketProbabilities: market
    };
  });
  const count = rows.length || 1;
  const high = rows.filter(row => row.confidence >= 80);
  const marketRows = rows.filter(row => row.marketHit !== null);
  const hitRate = list => list.length ? Math.round(list.filter(row => row.outcomeHit).length / list.length * 100) : null;
  return {
    updatedAt: now.toISOString(),
    completedCount: rows.length,
    outcomeHitRate: hitRate(rows),
    highConfidenceCount: high.length,
    highConfidenceHitRate: hitRate(high),
    topScoreCoverage: Math.round(rows.filter(row => row.topScoreHit).length / count * 100),
    averageBrier: Number((rows.reduce((sum, row) => sum + row.brier, 0) / count).toFixed(4)),
    marketComparableCount: marketRows.length,
    marketHitRate: marketRows.length ? Math.round(marketRows.filter(row => row.marketHit).length / marketRows.length * 100) : null,
    rows: rows.slice(0, 24)
  };
}

function serialize(matches, metaOverrides = {}, backtestData = null) {
  const meta = {
    updatedAt: now.toISOString(),
    runDate,
    source: "openfootball-worldcup-json",
    externalFetchedAt: now.toISOString(),
    externalMatchCount: matches.length,
    model: "ten-factor-dixon-coles-v3",
    rulesModel: "wc2026-group-qualification-v1",
    marketSignals: "not-connected",
    expertSignals: "not-connected",
    refreshCadence: "daily",
    refreshTimeLocal: "15:00",
    refreshTimeZone: "Asia/Shanghai",
    ...metaOverrides
  };
  // When falling back to cache, there is no fresh external fetch
  if (meta.source === "cached-local-fallback" && !metaOverrides.externalFetchedAt) {
    meta.externalFetchedAt = null;
  }
  const backtest = calculateBacktest(matches);
  const backtestBlock = backtestData ? `\nwindow.ANALYSIS_BACKTEST = ${JSON.stringify(backtestData, null, 2)};\n` : "";
  return `window.ANALYSIS_META = ${JSON.stringify(meta, null, 2)};\n\nwindow.MATCHES = ${JSON.stringify(matches, null, 2)};\n${backtestBlock}`;
}

async function main() {
  // Load real match data to replace synthetic PROFILE
  const wc48Codes = Object.keys(PROFILE);
  // Load ESPN WC2026 live stats first (shot/possession data from completed matches)
  let espnStats = null;
  try {
    espnStats = await loadESPNStats();
    console.log(`ESPN WC2026 stats loaded: ${espnStats?.size || 0} teams`);
  } catch (err) {
    console.warn(`ESPN stats unavailable: ${err.message}`);
  }
  try {
    const realData = loadRealTeamData(wc48Codes, espnStats);
    if (realData) {
      realDataCache = realData;
      console.log(`Real team data loaded: ${realData.teamData.size} teams, ${realData.rankings.size} rankings.`);
    }
  } catch (err) {
    console.warn(`Real team data unavailable, falling back to PROFILE: ${err.message}`);
  }

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

  const context = buildTournamentContext(matches);
  const [odds, experts, weather, live] = await Promise.all([
    loadOddsSignals(),
    loadExpertSignals(),
    loadWeatherSignals(matches),
    loadApiFootballSignals(matches)
  ]);
  metaOverrides = {
    ...metaOverrides,
    marketSignals: odds.status,
    expertSignals: experts.status,
    weatherSignals: weather.status,
    liveTeamNewsSignals: live.status,
    teamData: realDataCache ? "real-kaggle-results" : "synthetic-profile",
    teamDataCount: realDataCache?.teamData?.size || 0,
    oddsProvider: odds.provider,
    oddsSportKey: odds.sportKey || ODDS_SPORT_KEY,
    oddsEventCount: odds.events?.length || 0,
    expertProvider: experts.provider,
    expertArticleCount: experts.articles?.length || 0,
    weatherProvider: weather.provider,
    weatherForecastCount: Object.values(weather.forecasts || {}).filter(item => item.status === "connected").length,
    liveTeamNewsProvider: live.provider,
    liveFixtureCount: live.fixtureCount || 0,
    liveLineupFixtureCount: live.lineupFixtureCount || 0,
    liveInjuryCount: live.injuryCount || 0
  };
  const refreshed = matches.map(match => recalc(match, runDate, context, { odds, experts, weather, live }, matches));

  // Loop 1: Backtest completed matches, auto-adjust weights if needed
  let backtestData = null;
  try {
    const { runBacktest } = await import("./loop-backtest.mjs");
    backtestData = runBacktest();
    if (backtestData) {
      console.log(`Backtest: ${backtestData.accuracy}% accuracy (${backtestData.correct}/${backtestData.totalMatches})`);
      if (backtestData.needsAdjust) {
        console.log("Auto-adjusting weights:", JSON.stringify(backtestData.adjustments));
      }
    }
  } catch (err) {
    console.warn(`Backtest skipped: ${err.message}`);
  }

  // Loop 2: Generate match autopsies for completed matches
  let autopsyData = null;
  try {
    const { runAutopsy } = await import("./loop-autopsy.mjs");
    autopsyData = runAutopsy();
    if (autopsyData) {
      // Merge autopsy text into each match
      const autopsyMap = new Map(autopsyData.map(a => [a.matchId, a]));
      for (const m of refreshed) {
        const a = autopsyMap.get(m.id);
        if (a) m.matchAutopsy = a;
      }
      console.log(`Autopsy: ${autopsyData.length} matches analyzed`);
    }
  } catch (err) {
    console.warn(`Autopsy skipped: ${err.message}`);
  }

  fs.writeFileSync(dataPath, serialize(refreshed, metaOverrides, backtestData), "utf8");
  console.log(`Updated ${refreshed.length} matches for ${runDate} from ${metaOverrides.source || "openfootball-worldcup-json"}; odds=${odds.status}; experts=${experts.status}; weather=${weather.status}; live=${live.status}; teamData=${metaOverrides.teamData}; backtest=${backtestData?.accuracy || "N/A"}%`);

  // Loop 3: Self-check
  try {
    const { runGuard } = await import("./loop-guard.mjs");
    const guardResult = await runGuard();
    if (!guardResult.allOk) {
      console.warn("Guard check found issues — see above.");
    }
  } catch (err) {
    console.warn(`Guard skipped: ${err.message}`);
  }
}

await main();
