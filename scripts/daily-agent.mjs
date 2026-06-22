import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data.js");
const outputDir = path.join(root, "outputs", "agent");
const requestedDate = process.env.AGENT_DATE || "";
const maxMatches = Number(process.env.AGENT_LIMIT || 12);
const bundledPython = "C:\\Users\\Russell\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\python\\python.exe";

function loadData() {
  const code = fs.readFileSync(dataPath, "utf8");
  const sandbox = {};
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return {
    meta: sandbox.ANALYSIS_META || {},
    matches: sandbox.MATCHES || [],
    backtest: sandbox.BACKTEST || null
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function roundTriplet(values) {
  const rounded = values.map(value => Math.round(value));
  rounded[0] += 100 - rounded.reduce((sum, value) => sum + value, 0);
  return rounded;
}

function outcomeLabel(index) {
  return index === 0 ? "主胜" : index === 1 ? "平局" : "客胜";
}

function sideName(match, index) {
  return index === 0 ? match.home.name : index === 2 ? match.away.name : "平局";
}

function topIndex(values) {
  return values.indexOf(Math.max(...values));
}

function parseScore(score) {
  if (!score || typeof score !== "string") return null;
  const match = score.match(/(\d+)\s*[-:]\s*(\d+)/);
  if (!match) return null;
  return { home: Number(match[1]), away: Number(match[2]) };
}

function scoreFromTeamRecent(team, opponent) {
  const rows = team?.recentMatches || [];
  const hit = rows.find(item =>
    (item.opponentCode === opponent?.code || item.opponent === opponent?.name)
    && Number.isFinite(Number(item.goalsFor))
    && Number.isFinite(Number(item.goalsAgainst))
  );
  if (!hit) return null;
  return { for: Number(hit.goalsFor), against: Number(hit.goalsAgainst) };
}

function completedScoreForMatch(match) {
  const direct = parseScore(match.score);
  if (direct) return direct;
  const fromHome = scoreFromTeamRecent(match.home, match.away);
  const fromAway = scoreFromTeamRecent(match.away, match.home);
  if (fromHome && fromAway) {
    if (fromHome.for === fromAway.against && fromHome.against === fromAway.for) {
      return { home: fromHome.for, away: fromHome.against };
    }
  }
  if (fromHome) return { home: fromHome.for, away: fromHome.against };
  if (fromAway) return { home: fromAway.against, away: fromAway.for };
  return null;
}

function teamKey(team) {
  return team?.code || team?.name || "";
}

function makeTableRow(team) {
  return {
    name: team.name,
    code: team.code,
    played: 0,
    points: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDiff: 0
  };
}

function applyResult(table, match, homeGoals, awayGoals) {
  const homeCode = teamKey(match.home);
  const awayCode = teamKey(match.away);
  if (!table.has(homeCode)) table.set(homeCode, makeTableRow(match.home));
  if (!table.has(awayCode)) table.set(awayCode, makeTableRow(match.away));

  const home = table.get(homeCode);
  const away = table.get(awayCode);
  home.played += 1;
  away.played += 1;
  home.goalsFor += homeGoals;
  home.goalsAgainst += awayGoals;
  away.goalsFor += awayGoals;
  away.goalsAgainst += homeGoals;
  home.goalDiff = home.goalsFor - home.goalsAgainst;
  away.goalDiff = away.goalsFor - away.goalsAgainst;

  if (homeGoals > awayGoals) {
    home.points += 3;
  } else if (homeGoals < awayGoals) {
    away.points += 3;
  } else {
    home.points += 1;
    away.points += 1;
  }
}

function standingsFromMatches(matches, group, includeScenario = null) {
  const table = new Map();
  const groupMatches = matches.filter(item => item.group === group);
  for (const match of groupMatches) {
    if (match.home) table.set(teamKey(match.home), table.get(teamKey(match.home)) || makeTableRow(match.home));
    if (match.away) table.set(teamKey(match.away), table.get(teamKey(match.away)) || makeTableRow(match.away));
    if (match.status !== "completed") continue;
    const score = completedScoreForMatch(match);
    if (score) applyResult(table, match, score.home, score.away);
  }
  if (includeScenario) {
    applyResult(table, includeScenario.match, includeScenario.homeGoals, includeScenario.awayGoals);
  }
  return [...table.values()]
    .sort((a, b) => b.points - a.points || b.goalDiff - a.goalDiff || b.goalsFor - a.goalsFor || a.name.localeCompare(b.name))
    .map((row, index) => ({ ...row, rank: index + 1 }));
}

function tableLine(row) {
  return `${row.rank}.${row.name} ${row.points}分 净胜${row.goalDiff >= 0 ? "+" : ""}${row.goalDiff}`;
}

function remainingOpponents(matches, group, teamCode, currentMatchId) {
  return matches
    .filter(item => item.group === group && item.status !== "completed" && item.id !== currentMatchId)
    .filter(item => teamKey(item.home) === teamCode || teamKey(item.away) === teamCode)
    .map(item => teamKey(item.home) === teamCode ? item.away : item.home);
}

function opponentDifficulty(team, opponent) {
  const teamRank = Number(team?.rank || 60);
  const opponentRank = Number(opponent?.rank || 60);
  const diff = teamRank - opponentRank;
  if (diff >= 25) return { label: "强敌", score: 0.85 };
  if (diff >= 10) return { label: "偏强", score: 0.68 };
  if (diff <= -25) return { label: "明显弱于己方", score: 0.25 };
  if (diff <= -10) return { label: "偏弱", score: 0.38 };
  return { label: "接近", score: 0.5 };
}

function strategicPlanForTeam({ team, opponent, nextOpponents, currentRank, points, drawKeepsTopTwo, winGetsTopTwo }) {
  const current = opponentDifficulty(team, opponent);
  const next = nextOpponents[0] ? opponentDifficulty(team, nextOpponents[0]) : null;
  const nextName = nextOpponents[0]?.name || "";
  let label = "正常投入";
  let intensityDelta = 0;
  let drawBias = 0;
  let note = `本场对手${current.label}`;

  if (next) note += `，下场对${nextName}为${next.label}`;

  if (drawKeepsTopTwo && points >= 3) {
    label = "稳妥控风险";
    intensityDelta -= 0.04;
    drawBias += 0.03;
    note += "；当前已有积分基础，平局价值较高，可能更重视不输球";
  }

  if (current.score >= 0.68 && next && next.score <= 0.38 && currentRank > 2) {
    label = "战略押后";
    intensityDelta -= 0.08;
    drawBias += 0.02;
    note += "；本场难度高且下场更可抢分，存在保守/押后可能";
  }

  if (current.score <= 0.38 && next && next.score >= 0.68) {
    label = "本场抢分窗口";
    intensityDelta += 0.08;
    drawBias -= 0.03;
    note += "；下场更难，本场是更现实的抢分窗口";
  }

  if (winGetsTopTwo && currentRank > 2) {
    label = label === "战略押后" ? "谨慎抢分" : "必须抢分";
    intensityDelta += 0.06;
    drawBias -= 0.04;
    note += "；赢球可进入前二，求胜权重上调";
  }

  return {
    label,
    intensityDelta: Number(intensityDelta.toFixed(2)),
    drawBias: Number(drawBias.toFixed(2)),
    currentDifficulty: current.label,
    nextOpponent: nextName || null,
    nextDifficulty: next?.label || null,
    note
  };
}

function rankingContext(matches, match) {
  if (!match.group || !/组$/.test(match.group)) return null;
  const homeCode = teamKey(match.home);
  const awayCode = teamKey(match.away);
  const current = standingsFromMatches(matches, match.group);
  const homeRow = current.find(row => row.code === homeCode);
  const awayRow = current.find(row => row.code === awayCode);
  if (!homeRow || !awayRow) return null;

  const scenarios = [
    { key: "homeWin", label: `${match.home.name}胜`, homeGoals: 1, awayGoals: 0 },
    { key: "draw", label: "平局", homeGoals: 1, awayGoals: 1 },
    { key: "awayWin", label: `${match.away.name}胜`, homeGoals: 0, awayGoals: 1 }
  ].map(scenario => {
    const table = standingsFromMatches(matches, match.group, {
      match,
      homeGoals: scenario.homeGoals,
      awayGoals: scenario.awayGoals
    });
    const homeAfter = table.find(row => row.code === homeCode);
    const awayAfter = table.find(row => row.code === awayCode);
    return {
      ...scenario,
      homeRank: homeAfter?.rank,
      awayRank: awayAfter?.rank,
      homePoints: homeAfter?.points,
      awayPoints: awayAfter?.points,
      homeGoalDiff: homeAfter?.goalDiff,
      awayGoalDiff: awayAfter?.goalDiff
    };
  });

  const homeRemainingTeams = remainingOpponents(matches, match.group, homeCode, match.id);
  const awayRemainingTeams = remainingOpponents(matches, match.group, awayCode, match.id);
  const homeRemaining = homeRemainingTeams.map(team => team.name);
  const awayRemaining = awayRemainingTeams.map(team => team.name);
  const groupRemaining = matches
    .filter(item => item.group === match.group && item.status !== "completed" && item.id !== match.id)
    .map(item => `${item.home.name}vs${item.away.name}`);

  const draw = scenarios.find(item => item.key === "draw");
  const homeWin = scenarios.find(item => item.key === "homeWin");
  const awayWin = scenarios.find(item => item.key === "awayWin");
  const notes = [];
  if (homeWin?.homeRank <= 2) notes.push(`${match.home.name}赢球可进入/稳住前二`);
  if (awayWin?.awayRank <= 2) notes.push(`${match.away.name}赢球可进入/稳住前二`);
  if (draw?.homeRank <= 2 && draw?.awayRank <= 2) {
    notes.push("平局对双方排名伤害有限，比赛可能更谨慎");
  } else if (draw?.homeRank > 2 || draw?.awayRank > 2) {
    notes.push("平局会让至少一方继续处在前二外，求胜动机会被放大");
  }
  if (Math.abs((homeRow.goalDiff || 0) - (awayRow.goalDiff || 0)) <= 1) {
    notes.push("两队净胜球接近，后续可能影响第三名比较和同分排序");
  }

  const strategy = {
    home: strategicPlanForTeam({
      team: match.home,
      opponent: match.away,
      nextOpponents: homeRemainingTeams,
      currentRank: homeRow.rank,
      points: homeRow.points,
      drawKeepsTopTwo: draw?.homeRank <= 2,
      winGetsTopTwo: homeWin?.homeRank <= 2
    }),
    away: strategicPlanForTeam({
      team: match.away,
      opponent: match.home,
      nextOpponents: awayRemainingTeams,
      currentRank: awayRow.rank,
      points: awayRow.points,
      drawKeepsTopTwo: draw?.awayRank <= 2,
      winGetsTopTwo: awayWin?.awayRank <= 2
    })
  };

  const pressure = Math.max(
    homeRow.rank > 2 ? 0.18 : 0,
    awayRow.rank > 2 ? 0.18 : 0,
    draw && (draw.homeRank > 2 || draw.awayRank > 2) ? 0.16 : 0,
    groupRemaining.length <= 1 ? 0.12 : 0
  );

  return {
    group: match.group,
    currentTable: current.map(tableLine),
    home: {
      currentRank: homeRow.rank,
      points: homeRow.points,
      goalDiff: homeRow.goalDiff,
      remainingOpponents: homeRemaining
    },
    away: {
      currentRank: awayRow.rank,
      points: awayRow.points,
      goalDiff: awayRow.goalDiff,
      remainingOpponents: awayRemaining
    },
    scenarios,
    groupRemaining,
    strategy,
    pressure,
    summary: notes.slice(0, 3).join("；") || "组内排名压力中性，主要仍看实力和市场信号。"
  };
}

function qualificationEvidenceText(context) {
  if (!context) return "";
  const scenarioText = context.scenarios
    .map(item => `${item.label}: 主队第${item.homeRank}/客队第${item.awayRank}`)
    .join("；");
  const nextText = [
    context.home.remainingOpponents.length ? `主队后续对${context.home.remainingOpponents.join("、")}` : "主队后续无小组赛",
    context.away.remainingOpponents.length ? `客队后续对${context.away.remainingOpponents.join("、")}` : "客队后续无小组赛"
  ].join("；");
  const strategyText = context.strategy
    ? `赛程战略：主队${context.strategy.home.label}（${context.strategy.home.note}）；客队${context.strategy.away.label}（${context.strategy.away.note}）。`
    : "";
  return `小组情景：当前${context.group}为 ${context.currentTable.join(" / ")}。本场三种赛果推演为 ${scenarioText}。${nextText}。${context.summary}。${strategyText}`;
}

function applyQualificationAdjustment(match, agent, context) {
  if (!context) return agent;
  const probs = [...agent.probabilities];
  const draw = context.scenarios.find(item => item.key === "draw");
  const homeWin = context.scenarios.find(item => item.key === "homeWin");
  const awayWin = context.scenarios.find(item => item.key === "awayWin");
  const notes = [];

  if (draw?.homeRank <= 2 && draw?.awayRank <= 2) {
    probs[1] += 3;
    probs[0] -= 1.5;
    probs[2] -= 1.5;
    notes.push("平局仍可让双方维持前二区间，模型提高谨慎/平局权重");
  } else if (draw && (draw.homeRank > 2 || draw.awayRank > 2)) {
    probs[1] -= 4;
    if (homeWin?.homeRank <= 2) probs[0] += 2;
    if (awayWin?.awayRank <= 2) probs[2] += 2;
    notes.push("平局会让至少一方继续处在前二外，模型降低平局权重");
  }

  if (context.home.currentRank > 2 && homeWin?.homeRank <= 2) {
    probs[0] += 2;
    probs[1] -= 1;
    probs[2] -= 1;
    notes.push(`${match.home.name}赢球可重回前二，主队求胜动机上调`);
  }
  if (context.away.currentRank > 2 && awayWin?.awayRank <= 2) {
    probs[2] += 2;
    probs[1] -= 1;
    probs[0] -= 1;
    notes.push(`${match.away.name}赢球可重回前二，客队求胜动机上调`);
  }

  if (context.strategy) {
    const homeDelta = context.strategy.home.intensityDelta || 0;
    const awayDelta = context.strategy.away.intensityDelta || 0;
    const drawDelta = (context.strategy.home.drawBias || 0) + (context.strategy.away.drawBias || 0);
    probs[0] += homeDelta * 35;
    probs[2] += awayDelta * 35;
    probs[1] += drawDelta * 35;
    const totalShift = Math.abs(homeDelta) + Math.abs(awayDelta) + Math.abs(drawDelta);
    if (totalShift >= 0.06) {
      notes.push(`赛程战略校正：${match.home.name}${context.strategy.home.label}，${match.away.name}${context.strategy.away.label}`);
    }
  }

  const adjusted = roundTriplet(probs.map(value => clamp(value, 3, 94)));
  return {
    ...agent,
    probabilities: adjusted,
    qualificationNote: notes.slice(0, 2).join("；")
  };
}

function hasMarket(match) {
  return ["connected", "snapshot"].includes(match.marketSignals?.status)
    && Array.isArray(match.marketSignals?.impliedProbabilities);
}

function qualityPenalty(match) {
  const counts = match.matchIntelligence?.dataQuality?.counts || {};
  const missing = counts.missing || 0;
  const inferred = counts.inferred || 0;
  return missing * 3 + inferred * 1.5;
}

function marketBlendWeight(match) {
  if (!hasMarket(match)) return 0;
  const bookmakers = Number(match.marketSignals.bookmakers || 0);
  const missingPenalty = qualityPenalty(match);
  let weight = bookmakers >= 30 ? 0.38 : bookmakers >= 10 ? 0.32 : 0.24;
  if (missingPenalty >= 9) weight += 0.05;
  if (match.marketCalibration?.drawGuardApplied) weight = Math.min(weight, 0.35);
  return clamp(weight, 0.18, 0.45);
}

function consensusLevel(model, market) {
  if (!market) return { level: "无市场", gap: null };
  const modelTop = topIndex(model);
  const marketTop = topIndex(market);
  const gap = Math.abs(model[modelTop] - market[modelTop]);
  if (modelTop === marketTop && gap <= 12) return { level: "高度一致", gap };
  if (modelTop === marketTop) return { level: "方向一致但强度分歧", gap };
  return { level: "方向冲突", gap };
}

function agentProbabilities(match) {
  const base = match.marketCalibration?.modelOnly || match.probabilities || [34, 33, 33];
  const current = match.probabilities || base;
  const market = hasMarket(match) ? match.marketSignals.impliedProbabilities : null;
  if (!market) {
    return {
      probabilities: current,
      marketWeight: 0,
      market: null,
      consensus: consensusLevel(base, null),
      note: "未采集到可用赔率，Agent 使用基础模型并降低市场层判断权重。"
    };
  }

  const weight = marketBlendWeight(match);
  const blended = roundTriplet(base.map((value, index) => value * (1 - weight) + market[index] * weight));
  const consensus = consensusLevel(base, market);
  let probabilities = blended;

  if (consensus.level === "方向冲突") {
    probabilities = roundTriplet(blended.map((value, index) => value * 0.85 + current[index] * 0.15));
  }

  return {
    probabilities,
    marketWeight: weight,
    market,
    consensus,
    note: consensus.level === "方向冲突"
      ? "基础模型与市场方向冲突，Agent 未盲从赔率，采用折中并降低置信。"
      : `赔率作为市场共识层参与 ${Math.round(weight * 100)}% 权重。`
  };
}

function confidence(match, agent, qualificationContext) {
  const probs = agent.probabilities;
  const sorted = [...probs].sort((a, b) => b - a);
  let score = 48 + (sorted[0] - sorted[1]) * 0.55;
  if (agent.consensus.level === "高度一致") score += 10;
  if (agent.consensus.level === "方向一致但强度分歧") score += 4;
  if (agent.consensus.level === "方向冲突") score -= 12;
  score -= qualityPenalty(match);
  if (match.marketCalibration?.drawGuardApplied) score -= 4;
  if ((qualificationContext?.pressure || 0) >= 0.16) score -= 2;
  return Math.round(clamp(score, 35, 88));
}

function confidenceLabel(value) {
  if (value >= 78) return "高";
  if (value >= 64) return "中高";
  if (value >= 52) return "中";
  return "低";
}

function pickScoreBand(match) {
  const bands = match.scoreBands || [];
  return bands[0] || { label: "比分区间待定", chance: "-", examples: [] };
}

function riskItems(match, agent, qualificationContext) {
  const risks = [];
  const gaps = match.matchIntelligence?.dataQuality?.gaps || [];
  if (gaps.length) risks.push(`数据缺口：${gaps.join("、")}`);
  if (agent.consensus.level === "方向冲突") risks.push("模型与赔率方向冲突");
  if (agent.consensus.level === "方向一致但强度分歧") risks.push("模型与赔率强度分歧较大");
  if (match.marketCalibration?.drawGuardApplied) risks.push("低进球/僵局保护触发，热门方向有回撤风险");
  if ((match.motivation?.drawValue || 0) >= 0.65) risks.push("平局收益较高，强弱判断需打折");
  if ((qualificationContext?.pressure || 0) >= 0.16) risks.push("组内排名情景敏感，赛果会明显改变前二位置或第三名压力");
  const strategies = [qualificationContext?.strategy?.home?.label, qualificationContext?.strategy?.away?.label].filter(Boolean);
  if (strategies.some(label => ["战略押后", "稳妥控风险", "本场抢分窗口", "必须抢分"].includes(label))) {
    risks.push(`赛程战略提示：${match.home.name}${qualificationContext.strategy.home.label}，${match.away.name}${qualificationContext.strategy.away.label}`);
  }
  return risks.slice(0, 4);
}

function evidenceItems(match, agent, qualificationContext) {
  const items = [];
  const probs = agent.probabilities;
  const pick = topIndex(probs);
  items.push(`Agent 综合概率：主${probs[0]}% / 平${probs[1]}% / 客${probs[2]}%，倾向${sideName(match, pick)}。`);
  if (agent.market) {
    items.push(`市场隐含概率：主${agent.market[0]}% / 平${agent.market[1]}% / 客${agent.market[2]}%，${agent.consensus.level}。`);
  }
  if (match.expectedGoals) {
    items.push(`预期进球：${match.home.name} ${match.expectedGoals.home}，${match.away.name} ${match.expectedGoals.away}。`);
  }
  const qualificationText = qualificationEvidenceText(qualificationContext);
  if (qualificationText) items.push(qualificationText);
  if (agent.qualificationNote) items.push(`小组动机校正：${agent.qualificationNote}。`);
  if (match.motivation?.note) items.push(match.motivation.note);
  if (match.matchIntelligence?.dataQuality?.summary) items.push(match.matchIntelligence.dataQuality.summary);
  return items.slice(0, 6);
}

function analyzeMatch(match, matches) {
  const qualificationContext = rankingContext(matches, match);
  const agent = applyQualificationAdjustment(match, agentProbabilities(match), qualificationContext);
  const conf = confidence(match, agent, qualificationContext);
  const pick = topIndex(agent.probabilities);
  const scoreBand = pickScoreBand(match);
  const topScores = (match.scoreOdds || []).slice(0, 3).map(item => `${item.score}(${item.chance}%)`);
  const risks = riskItems(match, agent, qualificationContext);
  return {
    id: match.id,
    date: match.date,
    time: match.time,
    title: `${match.home.name} vs ${match.away.name}`,
    homeName: match.home.name,
    awayName: match.away.name,
    homeCode: match.home.code,
    awayCode: match.away.code,
    pick: outcomeLabel(pick),
    pickText: sideName(match, pick),
    probabilities: {
      home: agent.probabilities[0],
      draw: agent.probabilities[1],
      away: agent.probabilities[2]
    },
    confidence: conf,
    confidenceLabel: confidenceLabel(conf),
    baseline: match.probabilities,
    market: agent.market,
    marketWeight: Math.round(agent.marketWeight * 100),
    consensus: agent.consensus.level,
    scoreBand,
    topScores,
    risks,
    qualificationContext,
    evidence: evidenceItems(match, agent, qualificationContext),
    xhs: buildXhsText(match, agent, conf, scoreBand, topScores, risks)
  };
}

function buildXhsText(match, agent, conf, scoreBand, topScores, risks) {
  const probs = agent.probabilities;
  const pick = topIndex(probs);
  const scoreText = topScores.length ? topScores.join(" / ") : "暂无精确比分";
  const keyPoint = agent.qualificationNote ? `${agent.note} ${agent.qualificationNote}。` : agent.note;
  return [
    `【${match.home.name} vs ${match.away.name}】`,
    `方向：${outcomeLabel(pick)}（${sideName(match, pick)}）`,
    `比分区间：${scoreBand.label}，参考 ${scoreBand.examples?.join(" / ") || scoreText}`,
    `综合概率：主${probs[0]}% / 平${probs[1]}% / 客${probs[2]}%`,
    `信心：${confidenceLabel(conf)}（${conf}）`,
    `关键点：${keyPoint}`,
    risks.length ? `风险：${risks.join("；")}` : "风险：暂无明显额外风险，但足球单场随机性较高。",
    "仅做赛前分析，不构成投注建议。"
  ].join("\n");
}

function tripletText(values) {
  if (!Array.isArray(values)) return "-";
  return `主${values[0]}% / 平${values[1]}% / 客${values[2]}%`;
}

function markdownReport(meta, analyses, targetDate) {
  const lines = [];
  lines.push("# 每日比赛预测 Agent");
  lines.push("");
  lines.push(`生成时间：${new Date().toISOString()}`);
  lines.push(`目标日期：${targetDate}`);
  lines.push(`数据刷新：${meta.updatedAt || "-"}`);
  lines.push("");
  lines.push("> 规则：现有模型作为 baseline，赔率作为市场共识层；Agent 只在证据充分时调整方向。数据缺口必须上报，不用假数据补齐。");
  lines.push("");
  for (const item of analyses) {
    lines.push(`## ${item.time} ${item.title}`);
    lines.push("");
    lines.push(`- 最终方向：**${item.pick} / ${item.pickText}**`);
    lines.push(`- 三层对比：基础模型 ${tripletText(item.baseline)}；市场 ${item.market ? tripletText(item.market) : "未采集"}；Agent ${tripletText([item.probabilities.home, item.probabilities.draw, item.probabilities.away])}`);
    lines.push(`- 综合概率：主 ${item.probabilities.home}% / 平 ${item.probabilities.draw}% / 客 ${item.probabilities.away}%`);
    lines.push(`- 信心：${item.confidenceLabel}（${item.confidence}）`);
    lines.push(`- 市场一致性：${item.consensus}，赔率权重 ${item.marketWeight}%`);
    lines.push(`- 比分区间：${item.scoreBand.label}（${item.scoreBand.chance}%），例：${item.scoreBand.examples?.join(" / ") || "-"}`);
    lines.push(`- 参考比分：${item.topScores.join(" / ") || "-"}`);
    lines.push("");
    lines.push("依据：");
    for (const evidence of item.evidence) lines.push(`- ${evidence}`);
    lines.push("");
    lines.push("风险：");
    if (item.risks.length) {
      for (const risk of item.risks) lines.push(`- ${risk}`);
    } else {
      lines.push("- 暂无明显额外风险，但足球单场随机性较高。");
    }
    lines.push("");
    lines.push("小红书文案：");
    lines.push("```text");
    lines.push(item.xhs);
    lines.push("```");
    lines.push("");
  }
  return lines.join("\n");
}

function xhsReport(analyses) {
  return analyses.map(item => item.xhs).join("\n\n---\n\n");
}

function main() {
  const { meta, matches } = loadData();
  const upcoming = matches.filter(match => match.status !== "completed");
  const targetDate = requestedDate || upcoming.map(match => match.date).sort()[0] || new Date().toISOString().slice(0, 10);
  const candidates = matches
    .filter(match => match.status !== "completed")
    .filter(match => !targetDate || match.date === targetDate)
    .slice(0, maxMatches);
  const fallback = candidates.length ? candidates : matches.filter(match => match.status !== "completed").slice(0, maxMatches);
  const analyses = fallback.map(match => analyzeMatch(match, matches));

  fs.mkdirSync(outputDir, { recursive: true });
  const payload = {
    generatedAt: new Date().toISOString(),
    targetDate,
    sourceUpdatedAt: meta.updatedAt || null,
    model: "agent-ensemble-v1",
    policy: "baseline-plus-market-plus-evidence-gaps",
    matches: analyses
  };

  fs.writeFileSync(path.join(outputDir, `${targetDate}.json`), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  fs.writeFileSync(path.join(outputDir, `${targetDate}.md`), markdownReport(meta, analyses, targetDate), "utf8");
  fs.writeFileSync(path.join(outputDir, `${targetDate}.xhs.txt`), xhsReport(analyses), "utf8");
  fs.writeFileSync(path.join(outputDir, "latest.json"), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  fs.writeFileSync(path.join(outputDir, "latest.md"), markdownReport(meta, analyses, targetDate), "utf8");
  fs.writeFileSync(path.join(outputDir, "latest.xhs.txt"), xhsReport(analyses), "utf8");

  if (process.env.AGENT_SKIP_IMAGES !== "1") {
    generateAiStyle(path.join(outputDir, `${targetDate}.json`));
    renderCards(path.join(outputDir, `${targetDate}.json`));
  }
  console.log(`Agent report generated: ${analyses.length} matches -> outputs/agent/${targetDate}.md`);
}

function generateAiStyle(jsonFile) {
  const script = path.join(root, "scripts", "generate-gpt-image-style.mjs");
  const result = spawnSync(process.execPath, [script, jsonFile], { cwd: root, encoding: "utf8" });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  return result.status === 0;
}

function renderCards(jsonFile) {
  const script = path.join(root, "scripts", "render-agent-cards.py");
  const candidates = [
    process.env.PYTHON,
    fs.existsSync(bundledPython) ? bundledPython : "",
    "python"
  ].filter(Boolean);
  for (const python of candidates) {
    const result = spawnSync(python, [script, jsonFile], { cwd: root, encoding: "utf8" });
    if (result.status === 0) {
      if (result.stdout) process.stdout.write(result.stdout);
      return true;
    }
  }
  console.warn("Card images were not rendered: Python/Pillow runtime unavailable.");
  return false;
}

main();
