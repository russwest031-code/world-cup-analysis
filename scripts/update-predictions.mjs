import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data.js");
const now = new Date();
const runDate = process.env.UPDATE_DATE || now.toISOString().slice(0, 10);

function loadMatches() {
  const code = fs.readFileSync(dataPath, "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: "data.js" });
  return sandbox.window.MATCHES || [];
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

function recalc(match, date) {
  const random = rng(`${date}:${match.id}`);
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

  const homePower =
    (100 - homeRank) * 0.28 +
    homeAvg * 0.44 +
    homeForm * 1.25 +
    2.5;
  const awayPower =
    (100 - awayRank) * 0.28 +
    awayAvg * 0.44 +
    awayForm * 1.25;
  const dayNoise = (random() - 0.5) * 7;
  const edge = homePower - awayPower + dayNoise;

  const totalGoals = clamp(
    2.35 +
      ((homeAttack + awayAttack) - (homeDefense + awayDefense)) / 95 +
      (random() - 0.5) * 0.35,
    1.55,
    3.85
  );
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
  const tag = confidence >= 82 ? "高信心" : confidence >= 70 ? "稳健" : Math.abs(probabilities[0] - probabilities[2]) <= 8 ? "均衡" : "观察";

  return {
    ...match,
    probabilities,
    confidence,
    tag,
    scoreOdds,
    expectedGoals: {
      home: Number(homeGoals.toFixed(2)),
      away: Number(awayGoals.toFixed(2))
    },
    analysisUpdated: date
  };
}

function rollDates(matches, startDate) {
  const start = new Date(`${startDate}T12:00:00Z`);
  return matches.map((match, index) => {
    const d = new Date(start);
    d.setUTCDate(start.getUTCDate() + Math.floor(index / 3));
    return {
      ...match,
      date: d.toISOString().slice(0, 10)
    };
  });
}

function serialize(matches) {
  const meta = {
    updatedAt: now.toISOString(),
    runDate,
    source: "daily-model-refresh",
    model: "rank-form-metrics-poisson-v1"
  };
  return `window.ANALYSIS_META = ${JSON.stringify(meta, null, 2)};\n\nwindow.MATCHES = ${JSON.stringify(matches, null, 2)};\n`;
}

const matches = rollDates(loadMatches(), runDate).map(match => recalc(match, runDate));
fs.writeFileSync(dataPath, serialize(matches), "utf8");
console.log(`Updated ${matches.length} matches for ${runDate}`);
