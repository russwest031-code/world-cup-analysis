(function () {
  const API = "/api/sporttery";

  const number = value => {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  };

  function probabilities(odds) {
    const values = [odds.home, odds.draw, odds.away];
    if (values.some(value => !value)) return [34, 33, 33];
    const raw = values.map(value => 1 / value);
    const total = raw.reduce((sum, value) => sum + value, 0);
    const result = raw.map(value => Math.round(value / total * 100));
    result[0] += 100 - result.reduce((sum, value) => sum + value, 0);
    return result;
  }

  function genericAnalysis(match, odds) {
    const probs = probabilities(odds);
    const outcomes = ["主队方向", "平局方向", "客队方向"];
    const top = probs.indexOf(Math.max(...probs));
    return {
      summary: `中国竞彩当前固定奖金显示 ${outcomes[top]} 相对占优。本场暂未生成深度模型报告，页面先以官方玩法数据和市场隐含概率为主。`,
      picks: [
        { label: "市场倾向", value: outcomes[top], note: "按当前固定奖金", level: "safe" },
        { label: "让球玩法", value: match.hhad && match.hhad.goalLine ? `${match.homeTeamAbbName} ${match.hhad.goalLine}` : "暂无", note: "官方让球", level: "medium" },
        { label: "数据状态", value: match.matchStatus === "Selling" ? "销售中" : match.matchStatus, note: "以官方为准", level: "bold" }
      ],
      metrics: [
        { label: "市场", home: probs[0], away: probs[2] },
        { label: "排名", home: 50, away: 50 },
        { label: "状态", home: 50, away: 50 },
        { label: "模型", home: probs[0], away: probs[2] }
      ],
      scoreOdds: [{ score: "待分析", chance: 0 }, { score: "--", chance: 0 }, { score: "--", chance: 0 }, { score: "--", chance: 0 }],
      insights: [
        "本场已接入中国体育彩票竞彩足球官方固定奖金。",
        "固定奖金可能随销售情况调整，请关注页面更新时间。",
        "赛事分析与官方彩票数据分开展示，避免把模型判断误当作官方结论。"
      ]
    };
  }

  function normalize(match) {
    const had = match.had || {};
    const hhad = match.hhad || {};
    const active = had.h && had.d && had.a ? had : hhad;
    const odds = { home: number(active.h), draw: number(active.d), away: number(active.a), updated: `${active.updateTime || "--"} 更新` };
    const probs = probabilities(odds);
    const generic = genericAnalysis(match, odds);
    return {
      id: `jc-${match.matchId}`,
      source: "sporttery",
      date: match.matchDate,
      time: (match.matchTime || "--:--").slice(0, 5),
      group: match.leagueAbbName || "竞彩足球",
      venue: (match.remark || "中国竞彩").replace("比赛将在", ""),
      home: { name: match.homeTeamAbbName, code: match.homeTeamCode || "HOME", color: `#${match.backColor || "b8f23d"}`, rank: (match.homeRank || "--").replace(/[\[\]]/g, ""), form: [] },
      away: { name: match.awayTeamAbbName, code: match.awayTeamCode || "AWAY", color: "#d94252", rank: (match.awayRank || "--").replace(/[\[\]]/g, ""), form: [] },
      odds,
      handicap: hhad.goalLine ? `${match.homeTeamAbbName} ${hhad.goalLine}` : "未开",
      total: "--",
      probabilities: probs,
      confidence: Math.max(...probs),
      tag: match.isHot ? "热门" : "竞彩",
      matchNum: match.matchNumStr,
      matchStatus: match.matchStatus,
      officialUpdate: [had.updateDate, had.updateTime].filter(Boolean).join(" ") || [hhad.updateDate, hhad.updateTime].filter(Boolean).join(" "),
      jc: {
        had: { home: number(had.h), draw: number(had.d), away: number(had.a), update: `${had.updateDate || ""} ${had.updateTime || ""}`.trim() },
        hhad: { line: hhad.goalLine || "", home: number(hhad.h), draw: number(hhad.d), away: number(hhad.a), update: `${hhad.updateDate || ""} ${hhad.updateTime || ""}`.trim() },
        crs: match.crs || {},
        ttg: match.ttg || {},
        hafu: match.hafu || {}
      },
      ...generic
    };
  }

  function mergeAnalysis(official, analyses) {
    const analysis = analyses.find(item => item.home.name === official.home.name && item.away.name === official.away.name);
    if (!analysis) return official;
    return {
      ...official,
      id: analysis.id,
      summary: analysis.summary,
      picks: analysis.picks,
      metrics: analysis.metrics,
      scoreOdds: analysis.scoreOdds,
      insights: analysis.insights,
      confidence: analysis.confidence,
      tag: analysis.tag
    };
  }

  window.loadSportteryMatches = async function (analyses) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);
    try {
      const response = await fetch(API, { signal: controller.signal, headers: { Accept: "application/json, text/plain, */*" } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      if (!payload.success || !payload.value) throw new Error(payload.errorMessage || "接口返回异常");
      const official = payload.value.matchInfoList
        .flatMap(day => day.subMatchList || [])
        .filter(match => match.leagueCode === "WCC" || match.leagueAbbName === "世界杯" || match.leagueAllName === "世界杯")
        .map(normalize);
      const officialDates = [...new Set(official.map(item => item.date))];
      return {
        matches: official.map(item => mergeAnalysis(item, analyses)),
        dates: officialDates,
        updated: payload.value.lastUpdateTime,
        source: "中国体育彩票竞彩足球",
        live: true
      };
    } catch (error) {
      return {
        matches: analyses,
        dates: [...new Set(analyses.map(item => item.date))],
        updated: "本地缓存",
        source: "演示数据",
        live: false,
        error: error.message
      };
    } finally {
      clearTimeout(timeout);
    }
  };
})();
