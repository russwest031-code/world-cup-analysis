(async function () {
  var matches = window.MATCHES || [];
  var analysisMeta = window.ANALYSIS_META || {};
  var days = [];

  var weekNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

  function flag(team) {
    return '<span class="flag" style="--flag:' + team.color + '">' + team.code + '</span>';
  }

  function confidenceLabel(c) {
    if (c >= 80) return { text: "高信心 " + c + "%", cls: "high" };
    if (c >= 65) return { text: "中信心 " + c + "%", cls: "medium" };
    return { text: "低信心 " + c + "%", cls: "low" };
  }

  // ─── ANALYSIS HOME PAGE ────────────────────────────────────────
  function renderAnalysis() {
    var list = document.getElementById("matchList");
    if (!list) return;

    var strip = document.getElementById("dateStrip");
    var input = document.getElementById("searchInput");
    var empty = document.getElementById("emptyState");
    var heading = document.getElementById("matchHeading");
    var todayKey = new Date().toISOString().slice(0, 10);
    var defaultDay = days.find(function (day) { return day.date >= todayKey; }) || days[0];
    var selectedDate = defaultDay ? defaultDay.date : "";

    strip.innerHTML = days.map(function (day, index) {
      var active = day.date === selectedDate ? "active" : "";
      return '<button class="date-chip ' + active + '" data-date="' + day.date + '"><small>' + day.week + '</small><strong>' + day.day + '</strong><small>' + day.month + '月</small></button>';
    }).join("");

    function renderCard(match) {
      var probs = match.probabilities;
      var primaryScore = (match.scoreOdds && match.scoreOdds[0]) ? match.scoreOdds[0] : null;
      var altScores = (match.scoreOdds || []).slice(1, 4);
      var conf = confidenceLabel(match.confidence);

      var scoreHTML = "";
      if (primaryScore) {
        scoreHTML = '<div class="score-headline">' +
          '<span class="predicted-score">' + primaryScore.score + '</span>' +
          '<div class="score-meta">' +
            '<small>泊松分布 · 最可能比分</small>' +
            '<span class="model-badge">概率 ' + primaryScore.chance + '%</span>' +
          '</div>' +
        '</div>';
      }

      var altsHTML = "";
      if (altScores.length) {
        altsHTML = '<div class="score-alts">' +
          altScores.map(function (s) {
            return '<span class="score-alt"><strong>' + s.score + '</strong><small>' + s.chance + '%</small></span>';
          }).join("") +
        '</div>';
      }

      var wdlHTML = '<div class="wdl-bars">' +
        ['胜', '平', '负'].map(function (label, i) {
          return '<div class="wdl-bar-item"><span>' + label + '</span><strong>' + probs[i] + '%</strong><div class="wdl-track"><i style="width:' + probs[i] + '%"></i></div></div>';
        }).join("") +
      '</div>';

      var metaHTML = '<div class="analysis-meta-row">' +
        '<span class="confidence-badge ' + conf.cls + '">' + conf.text + '</span>' +
      '</div>';

      var completedBadgeHTML = match.status === "completed"
        ? '<span class="match-tag completed-tag">已完赛</span>'
        : '';

      var kickoffHTML;
      if (match.status === "completed" && match.actualScore) {
        kickoffHTML = '<div class="kickoff completed-kickoff"><strong>' + match.actualScore + '</strong><i></i><small>最终比分</small></div>';
      } else {
        kickoffHTML = '<div class="kickoff"><strong>' + match.time + '</strong><i></i><small>北京时间</small></div>';
      }

      var footBadgeHTML = match.status === "completed"
        ? '<span class="single-badge completed-foot-badge">已完赛</span>'
        : '<span class="single-badge">模型预测</span>';

      return '<article class="match-card analysis-card">' +
        '<div class="card-top">' +
          '<div class="card-top-left">' +
            '<span class="match-num">' + (match.group || "") + '</span>' +
            '<span class="match-tag">' + match.tag + '</span>' +
            completedBadgeHTML +
            '<small>模型分析</small>' +
          '</div>' +
          '<a class="detail-link" href="detail.html?id=' + match.id + '">比赛分析 →</a>' +
        '</div>' +
        '<div class="team-row">' +
          '<div class="team">' + flag(match.home) + '<div class="team-name"><strong>' + match.home.name + '</strong><small>世界第' + match.home.rank + '</small></div></div>' +
          kickoffHTML +
          '<div class="team away">' + flag(match.away) + '<div class="team-name"><strong>' + match.away.name + '</strong><small>世界第' + match.away.rank + '</small></div></div>' +
        '</div>' +
        scoreHTML +
        altsHTML +
        wdlHTML +
        metaHTML +
        '<p class="analysis-summary">' + (match.summary || "") + '</p>' +
        '<div class="card-foot">' +
          '<span>' + (match.venue || "") + '</span>' +
          footBadgeHTML +
        '</div>' +
      '</article>';
    }

    function draw() {
      var query = input.value.trim().toLowerCase();
      var filtered = matches.filter(function (match) {
        var dateOk = !selectedDate || match.date === selectedDate;
        var queryOk = !query || (match.home.name + match.away.name + match.home.code + match.away.code).toLowerCase().indexOf(query) !== -1;
        return dateOk && queryOk;
      });

      heading.textContent = selectedDate && selectedDate === todayKey
        ? "今日比赛"
        : (selectedDate ? selectedDate.slice(5).replace("-", "月") + "日比赛" : "全部比赛");

      list.innerHTML = filtered.map(renderCard).join("");
      empty.hidden = filtered.length > 0;
    }

    strip.addEventListener("click", function (event) {
      var button = event.target.closest(".date-chip");
      if (!button) return;
      selectedDate = button.dataset.date;
      strip.querySelectorAll(".date-chip").forEach(function (chip) {
        chip.classList.toggle("active", chip === button);
      });
      draw();
    });

    input.addEventListener("input", draw);
    document.getElementById("clearSearch").addEventListener("click", function () {
      input.value = "";
      input.focus();
      draw();
    });
    document.getElementById("searchToggle").addEventListener("click", function () {
      var panel = document.getElementById("searchPanel");
      panel.classList.toggle("open");
      if (panel.classList.contains("open")) input.focus();
    });

    draw();
  }

  // ─── DETAIL PAGE ───────────────────────────────────────────────
  function renderDetail() {
    var root = document.getElementById("detailRoot");
    if (!root) return;

    var id = new URLSearchParams(location.search).get("id");
    var match = matches.find(function (item) { return item.id === id; }) || matches[0];
    if (!match) return;

    document.title = match.home.name + " vs " + match.away.name + " - 赛研";
    var labels = ["主胜", "平局", "客胜"];

    var completedHeroBadge = match.status === "completed"
      ? '<span class="completed-hero-badge">已完赛</span>'
      : '';

    var detailTimeHTML;
    if (match.status === "completed" && match.actualScore) {
      detailTimeHTML = '<div class="detail-time completed-detail-time"><strong>' + match.actualScore + '</strong><i></i><span>最终比分</span></div>';
    } else {
      detailTimeHTML = '<div class="detail-time"><strong>' + match.time + '</strong><i></i><span>北京时间</span></div>';
    }

    root.innerHTML =
      '<section class="detail-hero">' +
        '<div class="detail-meta">' + (match.group || "") + " · " + match.date + " · " + match.venue + ' ' + completedHeroBadge + '</div>' +
        '<div class="detail-matchup">' +
          '<div class="detail-team">' + flag(match.home) + '<h2>' + match.home.name + '</h2><p>世界排名 ' + match.home.rank + '</p></div>' +
          detailTimeHTML +
          '<div class="detail-team">' + flag(match.away) + '<h2>' + match.away.name + '</h2><p>世界排名 ' + match.away.rank + '</p></div>' +
        '</div>' +
      '</section>' +

      '<section class="model-card">' +
        '<div class="model-head"><span>AI 比赛模型</span><strong>信心指数 ' + match.confidence + '%</strong></div>' +
        '<div class="prob-row">' + match.probabilities.map(function (value, index) { return '<div class="prob"><strong>' + value + '%</strong><span>' + labels[index] + '</span><div class="prob-bar"><i style="width:' + value + '%"></i></div></div>'; }).join("") + '</div>' +
      '</section>' +

      '<div class="detail-content">' +

        // Section 1: 比赛判断
        '<section class="detail-section">' +
          '<div class="section-title"><h3>比赛判断</h3><small>模型综合分析</small></div>' +
          '<p class="analysis-copy">' + match.summary + '</p>' +
        '</section>' +

        // Section 2: 参考结论
        renderConclusion(match) +

        // Section 3: 实力对比
        '<section class="detail-section">' +
          '<div class="section-title"><h3>实力对比</h3><small>' + match.home.code + " / " + match.away.code + '</small></div>' +
          '<div class="metrics">' + match.metrics.map(function (metric) { return '<div class="metric-row"><strong>' + metric.home + '</strong><div class="metric-track home"><i style="width:' + metric.home + '%"></i></div><span>' + metric.label + '</span><div class="metric-track away"><i style="width:' + metric.away + '%"></i></div><strong>' + metric.away + '</strong></div>'; }).join("") + '</div>' +
        '</section>' +

        // Section 4: 比分分布
        '<section class="detail-section">' +
          '<div class="section-title"><h3>比分分布</h3><small>模型概率</small></div>' +
          '<div class="score-grid">' + match.scoreOdds.map(function (item) { return '<div class="score-card"><strong>' + item.score + '</strong><span>' + item.chance + '%</span></div>'; }).join("") + '</div>' +
        '</section>' +

        // Section 5: 预测依据及各因素权重
        renderFactorModel(match) +

        // Section 6: 比赛情景推演
        renderScenarios(match) +

        // Section 7: 风险因素
        renderRiskAssessment(match) +

        '<p class="disclaimer">以上分析仅基于赛前模型数据，不构成任何决策建议。足球比赛存在固有不确定性，实际结果可能与预测存在较大偏差。</p>' +
      '</div>';
  }

  // ─── DETAIL: 参考结论 ───
  function renderConclusion(match) {
    var probs = match.probabilities;
    var maxIdx = probs.indexOf(Math.max.apply(null, probs));
    var outcomes = ["主胜", "平局", "客胜"];

    var primaryScore = (match.scoreOdds && match.scoreOdds[0]) ? match.scoreOdds[0] : null;
    var conf = match.confidence;

    var directionText;
    if (conf >= 80) {
      directionText = "模型对本场判断较为明确，" + outcomes[maxIdx] + "方向概率占优。最可能比分" + (primaryScore ? primaryScore.score : "待定") + "，可作为主要参考方向。";
    } else if (conf >= 65) {
      directionText = "模型判断存在一定把握，" + outcomes[maxIdx] + "方向略占优势，但各结果概率差距不大。建议结合更多信息综合判断。";
    } else {
      directionText = "本场比赛各结果概率较为接近，模型判断的不确定性较高。建议以观赛为主，不过度依赖单一预测。";
    }

    return '<section class="detail-section">' +
      '<div class="section-title"><h3>参考结论</h3><small>基于模型输出</small></div>' +
      '<div class="conclusion-box">' +
        '<p class="conclusion-text">' + directionText + '</p>' +
        '<div class="conclusion-tags">' +
          '<span class="conc-tag">' + outcomes[maxIdx] + '方向</span>' +
          (primaryScore ? '<span class="conc-tag">参考比分 ' + primaryScore.score + '</span>' : '') +
          '<span class="conc-tag">信心 ' + conf + '%</span>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  // ─── DETAIL: 预测依据及各因素权重 ───
  function renderFactorModel(match) {
    var weights = { strength: 30, metrics: 30, form: 20, tactical: 20 };
    var probs = match.probabilities;
    var homeRank = Number(match.home.rank) || 50;
    var awayRank = Number(match.away.rank) || 50;
    var rankDiff = awayRank - homeRank;

    // Team strength evidence
    var strengthNote;
    if (rankDiff > 15) strengthNote = match.home.name + " 排名显著高于 " + match.away.name + "（第" + homeRank + " vs 第" + awayRank + "），实力层面优势明显。";
    else if (rankDiff > 5) strengthNote = match.home.name + " 排名略高于 " + match.away.name + "（第" + homeRank + " vs 第" + awayRank + "），实力差距有限。";
    else if (rankDiff > -5) strengthNote = "两队世界排名接近（第" + homeRank + " vs 第" + awayRank + "），实力层面难分伯仲。";
    else if (rankDiff > -15) strengthNote = match.away.name + " 排名略高于 " + match.home.name + "（第" + homeRank + " vs 第" + awayRank + "），客队实力稍占上风。";
    else strengthNote = match.away.name + " 排名显著高于 " + match.home.name + "（第" + homeRank + " vs 第" + awayRank + "），客队实力优势明显。";

    // Attack/defense metrics evidence
    var offHome = 0, offAway = 0, defHome = 0, defAway = 0;
    if (match.metrics && match.metrics.length) {
      match.metrics.forEach(function (m) {
        if (m.label === "进攻") { offHome = m.home; offAway = m.away; }
        if (m.label === "防守") { defHome = m.home; defAway = m.away; }
      });
    }
    var metricsNote = match.home.name + " 进攻指数 " + offHome + " / 防守指数 " + defHome + "，" +
      match.away.name + " 进攻指数 " + offAway + " / 防守指数 " + defAway + "。综合攻防指标反映了两队在不同环节的优劣。";

    // Recent form evidence
    var homeForm = (match.home.form || []).slice(0, 5).join(" ");
    var awayForm = (match.away.form || []).slice(0, 5).join(" ");
    function formWins(arr) { return (arr || []).slice(0, 5).filter(function (r) { return r === "W"; }).length; }
    var formNote = match.home.code + " 近5场 " + homeForm + "（" + formWins(match.home.form) + "胜），" +
      match.away.code + " 近5场 " + awayForm + "（" + formWins(match.away.form) + "胜）。近期状态是预测的重要参考维度。";

    // Tactical matchup evidence
    var tacHome = 0, tacAway = 0, tacN = 0;
    if (match.metrics && match.metrics.length) {
      match.metrics.forEach(function (m) {
        if (m.label === "中场") { tacHome = m.home; tacAway = m.away; tacN = 1; }
      });
    }
    var tacNote = "中场控制力对比：" + match.home.name + " " + tacHome + " vs " + match.away.name + " " + tacAway + "。战术匹配度考察双方风格克制关系与关键对位。";

    function factorRow(name, weight, evidence) {
      return '<div class="factor-row">' +
        '<div class="factor-head"><strong>' + name + '</strong><span class="factor-weight">权重 ' + weight + '%</span></div>' +
        '<div class="factor-weight-track"><i style="width:' + weight + '%"></i></div>' +
        '<small class="factor-evidence">' + evidence + '</small>' +
      '</div>';
    }

    return '<section class="detail-section">' +
      '<div class="section-title"><h3>预测依据及各因素权重</h3><small>四因素加权 · 非官方数据</small></div>' +
      '<div class="factor-model">' +
        factorRow("球队实力排名", weights.strength, strengthNote) +
        factorRow("攻防指标", weights.metrics, metricsNote) +
        factorRow("近期状态", weights.form, formNote) +
        factorRow("战术匹配度", weights.tactical, tacNote) +
      '</div>' +
      '<div class="factor-result">' +
        '<p class="factor-note">四项权重合计 100%。模型通过以上因素综合计算W/D/L概率（主胜 ' + probs[0] + '% / 平局 ' + probs[1] + '% / 客胜 ' + probs[2] + '%），本区解释模型预测的形成依据，不另行生成第二套概率结果。</p>' +
      '</div>' +
    '</section>';
  }

  // ─── DETAIL: 比赛情景推演 ───
  function renderScenarios(match) {
    var probs = match.probabilities;
    var maxIdx = probs.indexOf(Math.max.apply(null, probs));
    var primaryScore = (match.scoreOdds && match.scoreOdds[0]) ? match.scoreOdds[0] : null;
    var homeName = match.home.name;
    var awayName = match.away.name;

    var scenarios = [];

    // Scenario 1: Expected scenario (most likely)
    if (maxIdx === 0) {
      scenarios.push({
        title: "预期情景：主队主导",
        text: "按模型概率分布，" + homeName + " 取胜是最可能的结果。如果" + homeName + "在上半场取得领先，比赛将更可能走向" + (primaryScore ? " " + primaryScore.score + " 附近的比分" : "主胜方向") + "。" + awayName + "需要提升防守效率才能改变走势。",
        cls: "scenario-primary"
      });
    } else if (maxIdx === 1) {
      scenarios.push({
        title: "预期情景：胶着拉锯",
        text: "模型显示平局概率较高，双方实力接近。" + homeName + "和" + awayName + "都可能在对方的压制下难以打开局面。如果半场仍为平局，比赛节奏可能进一步趋向谨慎，定位球或一次失误将成为决定性因素。",
        cls: "scenario-primary"
      });
    } else {
      scenarios.push({
        title: "预期情景：客队占优",
        text: "按模型概率分布，" + awayName + " 取胜是最可能的结果。" + awayName + "在攻防指标上的优势可能转化为比分的领先。" + homeName + "需要把握有限的反击机会才能改变被动局面。",
        cls: "scenario-primary"
      });
    }

    // Scenario 2: Alternative (underdog strikes first)
    if (maxIdx === 0) {
      scenarios.push({
        title: "变数情景：" + awayName + "率先得分",
        text: "如果" + awayName + "通过反击或定位球先下一城，" + homeName + "将被迫压上进攻，比赛可能进入开放节奏。这种情况下平局或" + awayName + "爆冷的概率会明显上升，比分分布将向高进球数偏移。",
        cls: "scenario-alt"
      });
    } else if (maxIdx === 2) {
      scenarios.push({
        title: "变数情景：" + homeName + "率先得分",
        text: "如果" + homeName + "借助主场之势先拔头筹，比赛的平衡可能被打破。" + awayName + "需要主动进攻，这反而可能给" + homeName + "的反击留下空间。后续比分分布将更加开放。",
        cls: "scenario-alt"
      });
    } else {
      scenarios.push({
        title: "变数情景：一方率先得分",
        text: "在平局概率较高的比赛中，率先得分的一方将获得巨大的战术主动权。领先方可能选择收缩控制，落后方则需要冒险进攻，比赛走势将取决于第一个进球的时间点。",
        cls: "scenario-alt"
      });
    }

    // Scenario 3: Tight match / defensive
    var defScore = match.scoreOdds ? match.scoreOdds.filter(function (s) { return s.score === "0-0" || s.score === "1-0" || s.score === "0-1"; }) : [];
    if (defScore.length > 0) {
      scenarios.push({
        title: "保守情景：低比分走势",
        text: "防守数据较强的背景下，比赛有较大概率走向低比分。如果双方都选择以稳为主的开局策略，上半场进球数可能偏少，比赛的胜负手更可能出现在下半场中后段。",
        cls: "scenario-def"
      });
    }

    return '<section class="detail-section">' +
      '<div class="section-title"><h3>比赛情景推演</h3><small>基于模型数据推演</small></div>' +
      '<div class="scenario-list">' +
        scenarios.map(function (s) {
          return '<div class="scenario-item ' + s.cls + '">' +
            '<div class="scenario-head"><strong>' + s.title + '</strong></div>' +
            '<p>' + s.text + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</section>';
  }

  // ─── DETAIL: 风险因素 ───
  function renderRiskAssessment(match) {
    var risks = [];
    var conf = match.confidence || 50;

    // Risk 1: Uncertainty risk from confidence
    if (conf >= 80) {
      risks.push({
        type: "模型不确定性",
        text: "信心指数 " + conf + "%，处于高信心区间。模型判断相对稳定，但足球比赛固有的随机性意味着任何单场比赛都可能偏离概率分布。不可将模型输出等同于确定性结论。",
        cls: "risk-low"
      });
    } else if (conf >= 65) {
      risks.push({
        type: "模型不确定性",
        text: "信心指数 " + conf + "%，处于中等信心区间。比赛存在较多不可量化变量，各结果概率分布较为分散，建议结合更多信息源综合参考。",
        cls: "risk-medium"
      });
    } else {
      risks.push({
        type: "模型不确定性",
        text: "信心指数 " + conf + "%，处于低信心区间。该类比赛模型判断的稳定性有限，概率分布相对均匀，需警惕模型在信息不足或双方实力接近场景下的局限性。",
        cls: "risk-high"
      });
    }

    // Risk 2: Score distribution spread risk
    var scores = match.scoreOdds || [];
    if (scores.length >= 2) {
      var topChance = scores[0].chance;
      if (topChance <= 25) {
        risks.push({
          type: "比分分布分散",
          text: "最可能比分的概率仅为 " + topChance + "%，比分分布较为分散。这意味着比赛有多种可能的走向，单一比分预测的可靠性有限，建议关注比分区间而非精确比分。",
          cls: "risk-medium"
        });
      } else {
        risks.push({
          type: "比分分布集中",
          text: "最可能比分的概率为 " + topChance + "%，比分分布相对集中。但足球比赛中一次意外事件（红牌、点球、个人失误）就可能完全改变比分走向。",
          cls: "risk-low"
        });
      }
    }

    // Risk 3: Data scope limitation
    risks.push({
      type: "数据范围限制",
      text: "当前分析仅基于赛前可获取的结构化数据（世界排名、近期战绩、攻防指标等）。模型不掌握实时首发阵容、伤病情况、天气条件、临场战术调整等信息，这些因素可能对比赛结果产生重要影响。",
      cls: "risk-medium"
    });

    // Risk 4: Model calibration note
    var probs = match.probabilities;
    var spread = Math.max.apply(null, probs) - Math.min.apply(null, probs);
    if (spread >= 40) {
      risks.push({
        type: "强弱悬殊注意",
        text: "本场模型概率分布明显偏向一方（差距 " + spread + "pp），强弱对比清晰。但足球比赛尤其是杯赛中的冷门并不罕见，弱势方在单场淘汰制下的爆发力不应被完全忽视。",
        cls: "risk-low"
      });
    }

    return '<section class="detail-section">' +
      '<div class="section-title"><h3>风险因素</h3><small>仅基于现有数据推导</small></div>' +
      '<div class="risk-list">' +
        risks.map(function (r, i) {
          return '<div class="risk-item ' + r.cls + '">' +
            '<div class="risk-head">' +
              '<span class="risk-num">0' + (i + 1) + '</span>' +
              '<strong>' + r.type + '</strong>' +
            '</div>' +
            '<p>' + r.text + '</p>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<p class="risk-disclaimer">以上风险因素仅基于现有比赛数据结构化推导，不包含伤病、首发、天气、临场事件等未获取信息。足球分析存在固有不确定性，请理性看待模型输出。</p>' +
    '</section>';
  }

  // ─── METHODOLOGY PAGE ───────────────────────────────────────────
  function renderMethodology() {
    var root = document.getElementById("methodologyRoot");
    if (!root) return;

    root.innerHTML =
      '<section class="methodology-hero">' +
        '<h1>模型说明</h1>' +
        '<p>了解赛研的预测模型如何运作、数据来源、以及如何正确解读分析结果。</p>' +
      '</section>' +

      '<div class="methodology-content">' +

        '<section class="detail-section">' +
          '<div class="section-title"><h3>模型工作流程</h3><small>从数据到预测</small></div>' +
          '<div class="method-flow">' +
            '<div class="flow-step"><span class="flow-num">01</span><strong>数据采集</strong><p>每日从公开数据源（openfootball/worldcup.json）获取世界杯赛程、对阵、比分和球队信息，结合内置的球队排名、近期战绩和攻防指标数据库，构建结构化赛前数据。</p></div>' +
            '<div class="flow-step"><span class="flow-num">02</span><strong>因素加权</strong><p>通过四因素加权框架（球队实力30%、攻防指标30%、近期状态20%、战术匹配度20%）综合评估双方竞争力。</p></div>' +
            '<div class="flow-step"><span class="flow-num">03</span><strong>概率计算</strong><p>基于加权综合评分，结合泊松分布模型，计算主胜/平局/客胜的概率分布及最可能比分。</p></div>' +
            '<div class="flow-step"><span class="flow-num">04</span><strong>每日刷新</strong><p>每日定时（北京时间 15:00）自动从公开数据源拉取最新世界杯赛程、球队和比分数据，重新计算W/D/L概率、比分分布、信心指数、比赛情景推演及风险提示，并通过云端自动部署上线。</p></div>' +
          '</div>' +
        '</section>' +

        '<section class="detail-section">' +
          '<div class="section-title"><h3>比分分布说明</h3><small>泊松分布模型</small></div>' +
          '<div class="method-text">' +
            '<p>比分预测基于泊松分布模型。该模型假设两队的进球数相互独立且服从泊松分布，通过球队的攻防强度参数计算各比分出现的概率。</p>' +
            '<p>页面展示的比分按概率从高到低排列，最可能比分以高亮显示。需要注意：即使是"最可能比分"，其概率通常也不超过20-25%，这是因为足球比赛可能的比分组合非常多，概率天然分散。</p>' +
            '<p>建议关注比分区间而非精确比分。例如：将"1-0、2-0、2-1"统一视为"主队小胜"区间，将"1-1、0-0"视为"低比分平局"区间。</p>' +
          '</div>' +
        '</section>' +

        '<section class="detail-section">' +
          '<div class="section-title"><h3>信心指数解读</h3><small>如何理解百分比</small></div>' +
          '<div class="method-text">' +
            '<p>信心指数反映模型对当前预测的把握程度，基于因素间的一致性和数据完整度计算：</p>' +
            '<div class="confidence-guide">' +
              '<div class="conf-item high"><span class="conf-dot"></span><strong>高信心（≥80%）</strong><p>各因素指向一致，数据较为完整。模型判断相对稳定，但仍需注意足球比赛的固有随机性。</p></div>' +
              '<div class="conf-item medium"><span class="conf-dot"></span><strong>中等信心（65-79%）</strong><p>多数因素指向相似，但存在一定分歧或数据缺口。建议结合更多信息源综合参考。</p></div>' +
              '<div class="conf-item low"><span class="conf-dot"></span><strong>低信心（<65%）</strong><p>各因素指向分散或数据不完整。模型判断的参考价值有限，不应作为主要决策依据。</p></div>' +
            '</div>' +
          '</div>' +
        '</section>' +

        '<section class="detail-section">' +
          '<div class="section-title"><h3>数据局限性</h3><small>理解模型的边界</small></div>' +
          '<div class="method-text">' +
            '<p>本模型存在以下重要局限，使用分析结果时请务必考虑：</p>' +
            '<ul class="method-limits">' +
              '<li><strong>赛前数据</strong>：所有分析基于赛前可获取的结构化数据，不反映临场变化。</li>' +
              '<li><strong>信息缺失</strong>：模型不获取实时首发、伤病、天气、裁判、球队内部状态等信息。</li>' +
              '<li><strong>简化假设</strong>：泊松模型假设进球独立分布，实际比赛中进球往往存在相关性。</li>' +
              '<li><strong>排名局限</strong>：世界排名存在滞后性，不能完全反映球队当前的真实水平。</li>' +
              '<li><strong>样本有限</strong>：近期状态仅参考5场比赛，样本量较小可能放大偶然性。</li>' +
              '<li><strong>无法量化的因素</strong>：球队士气、球迷氛围、历史恩怨、裁判尺度等因素无法纳入模型。</li>' +
            '</ul>' +
          '</div>' +
        '</section>' +

        '<section class="detail-section">' +
          '<div class="section-title"><h3>更新策略</h3><small>预测刷新说明</small></div>' +
          '<div class="method-text">' +
            '<p>本应用采用每日模型刷新机制：GitHub Actions 每天北京时间 15:00 自动从公开数据源（openfootball/worldcup.json）拉取最新世界杯赛程、球队和比分数据，重新计算比分分布、胜平负概率和信心指数，并提交到代码仓库。</p>' +
            '<p>Render 会根据最新提交自动部署，因此手机端通常每天 15:00 后看到一次更新后的分析结果。</p>' +
            '<p>这不是实时数据流；目前尚未接入付费的实时首发阵容、伤病、天气或赔率数据提供商。所有分析结论仅供赛事研究和娱乐参考。</p>' +
          '</div>' +
        '</section>' +

      '</div>';
  }

  // ─── SHARED DATA INIT ──────────────────────────────────────────
  days = Array.from(new Set(matches.map(function (item) { return item.date; }))).map(function (date) {
    var parsed = new Date(date + "T12:00:00");
    return { date: date, week: weekNames[parsed.getDay()], month: String(parsed.getMonth() + 1), day: date.slice(8, 10) };
  });

  var status = document.getElementById("dataStatus");
  var count = document.getElementById("matchCount");
  var update = document.getElementById("lastUpdate");
  if (status) {
    var sourceLabel = analysisMeta.source === "openfootball-worldcup-json" ? "外部赛程数据已接入" : "模型分析数据集";
    status.innerHTML = '<i class="live-dot"></i> ' + sourceLabel;
  }
  if (count) count.textContent = "共 " + matches.length + " 场";
  if (update) {
    var updatedAt = analysisMeta.updatedAt ? new Date(analysisMeta.updatedAt) : new Date();
    var beijing = new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false
    }).format(updatedAt);
    update.innerHTML = '更新 <strong>' + beijing + ' 北京时间</strong>';
  }

  // ─── PAGE DISPATCH ──────────────────────────────────────────────
  if (document.getElementById("detailRoot")) {
    renderDetail();
  } else if (document.getElementById("methodologyRoot")) {
    renderMethodology();
  } else {
    renderAnalysis();
  }
})();
