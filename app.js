(async function () {
  var matches = window.MATCHES || [];
  var analysisMeta = window.ANALYSIS_META || {};
  var backtest = window.ANALYSIS_BACKTEST || {};
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

  // Keep legacy generated copy from implying that model priors are verified facts.
  function sanitizeDisplayText(text) {
    if (!text) return text;
    return text
      .replace(/判断综合了[^。]*等 10 个因素，加权计算得出。/g, "判断结合已接入真实数据和模型参数计算得出，具体事实证据见“真实数据源”和“临场情报”。")
      .replace(/世界排名/g, "实力评估")
      .replace(/近期战绩/g, "模型状态")
      .replace(/近期状态/g, "模型状态")
      .replace(/攻防指标/g, "模型综合评估")
      .replace(/攻防风格/g, "战术风格")
      .replace(/近期比分/g, "模型比分分布")
      .replace(/模拟样本/g, "模型推断")
      .replace(/实力对比/g, "实力参考")
      .replace(/攻防综合/g, "综合能力");
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
          '<div class="team">' + flag(match.home) + '<div class="team-name"><strong>' + match.home.name + '</strong><small>' + (match.home.confed || match.home.code) + '</small></div></div>' +
          kickoffHTML +
          '<div class="team away">' + flag(match.away) + '<div class="team-name"><strong>' + match.away.name + '</strong><small>' + (match.away.confed || match.away.code) + '</small></div></div>' +
        '</div>' +
        scoreHTML +
        altsHTML +
        wdlHTML +
        metaHTML +
        '<p class="analysis-summary">' + sanitizeDisplayText(match.summary || "") + '</p>' +
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
          '<div class="detail-team">' + flag(match.home) + '<h2>' + match.home.name + '</h2><p>' + (match.home.confed || match.home.code) + '</p></div>' +
          detailTimeHTML +
          '<div class="detail-team">' + flag(match.away) + '<h2>' + match.away.name + '</h2><p>' + (match.away.confed || match.away.code) + '</p></div>' +
        '</div>' +
      '</section>' +

      '<section class="model-card">' +
        '<div class="model-head"><span>AI 比赛模型</span><strong>信心指数 ' + match.confidence + '%</strong></div>' +
        '<div class="prob-row">' + match.probabilities.map(function (value, index) { return '<div class="prob"><strong>' + value + '%</strong><span>' + labels[index] + '</span><div class="prob-bar"><i style="width:' + value + '%"></i></div></div>'; }).join("") + '</div>' +
      '</section>' +

      renderDataBoundary(match) +

      '<div class="detail-content">' +

        // Section 1: 比赛判断
        '<section class="detail-section">' +
          '<div class="section-title"><h3>比赛判断</h3><small>模型综合分析</small></div>' +
          '<p class="analysis-copy">' + sanitizeDisplayText(match.summary) + '</p>' +
        '</section>' +

        // Section 2: 参考结论
        renderConclusion(match) +

        // Section 3: 近期状态（真实比赛数据）
        renderRecentForm(match) +

        // Section 4: 真实数据源
        renderVerifiedDataSources(match) +

        // Section 4: 比分分布
        '<section class="detail-section">' +
          '<div class="section-title"><h3>比分分布</h3><small>模型概率</small></div>' +
          '<div class="score-grid">' + match.scoreOdds.map(function (item) { return '<div class="score-card"><strong>' + item.score + '</strong><span>' + item.chance + '%</span></div>'; }).join("") + '</div>' +
        '</section>' +

        // Section 5: 出线动机与比赛目标
        renderMotivation(match) +

        // Section 6: 临场情报
        renderMatchIntelligence(match) +

        // Section 7: 扩展市场与赔率校准
        renderMarketsAndCalibration(match) +

        // Section 8: 比赛复盘（仅已完赛）
        renderAutopsy(match) +

        // Section 8: 比赛情景推演
        renderScenarios(match) +

        // Section 9: 风险因素
        renderRiskAssessment(match) +

        '<p class="disclaimer">以上分析仅基于赛前模型数据，不构成任何决策建议。足球比赛存在固有不确定性，实际结果可能与预测存在较大偏差。</p>' +
      '</div>';
  }

  function renderRecentForm(match) {
    function recentTable(team) {
      var games = team.recentMatches || [];
      var rank = team.rank || "-";
      if (!games.length) return '<p>暂无近期比赛数据。</p>';
      var rows = games.slice(0, 5).map(function (g) {
        var cls = g.result === "W" ? "w" : g.result === "D" ? "d" : "l";
        var resultZh = g.result === "W" ? "胜" : g.result === "D" ? "平" : "负";
        return '<tr class="' + cls + '">' +
          '<td><small>' + (g.date || "").slice(5) + '</small></td>' +
          '<td><b class="result-' + cls + '">' + resultZh + '</b></td>' +
          '<td><strong>' + g.score + '</strong></td>' +
          '<td>' + (g.opponent || "-") + (g.opponentRank ? ' <small>(' + g.opponentRank + ')</small>' : '') + '</td>' +
          '<td><small>' + (g.tournament || "") + '</small></td>' +
        '</tr>';
      }).join("");
      return '<div class="recent-table-wrap">' +
        '<div class="recent-table-head"><strong>' + team.name + '</strong><span>世界第' + rank + ' · ' + (team.recentSummary?.record || "") + '</span></div>' +
        '<table class="recent-table">' + rows + '</table>' +
      '</div>';
    }
    function shotCard(team) {
      if (!team.shotsPerGame && !team.possession) return '';
      var src = team.shotSource || '';
      if (src.startsWith('ESPN')) src = src.replace('ESPN WC2026', '本届世界杯');
      return '<div class="shot-stats-mini">' +
        (team.shotsPerGame ? '<span>场均射门 <b>' + team.shotsPerGame + '</b></span>' : '') +
        (team.shotsOnTarget ? '<span>射正 <b>' + team.shotsOnTarget + '</b></span>' : '') +
        (team.possession ? '<span>控球率 <b>' + team.possession + '%</b></span>' : '') +
        (team.shotAccuracy ? '<span>射正率 <b>' + team.shotAccuracy + '%</b></span>' : '') +
        (src ? '<small>' + src + '</small>' : '') +
      '</div>';
    }
    var summaryNote = "";
    if (match.home.recentMatches && match.home.recentMatches[0] && match.home.recentMatches[0].date) {
      summaryNote = '<p class="data-source-note">数据来源：Kaggle 国际比赛数据库（1872–2026），共 49,478 场真实比赛记录。</p>';
    }
    return '<section class="detail-section">' +
      '<div class="section-title"><h3>近期状态</h3><small>近 5 场真实比赛</small></div>' +
      '<div class="shot-stats-row">' + shotCard(match.home) + shotCard(match.away) + '</div>' +
      '<div class="recent-dual">' +
        recentTable(match.home) +
        recentTable(match.away) +
      '</div>' +
      summaryNote +
    '</section>';
  }

  function renderDataBoundary(match) {
    var status = match.marketSignals && match.marketSignals.status === "connected"
      ? "已接入赔率市场信号"
      : "未接入稳定赔率市场信号";
    return '<section class="data-boundary-card">' +
      '<div><strong>数据边界</strong><span>' + status + '</span></div>' +
      '<p>页面证据只展示已接入的真实来源：赛程/赛果、赔率、天气和新闻线索。未接入可靠来源的数据不会作为事实展示；模型预测属于算法输出，不等同于真实比赛数据。</p>' +
    '</section>';
  }

  function renderVerifiedDataSources(match) {
    var market = match.marketSignals || {};
    var intel = match.matchIntelligence || {};
    var weather = intel.weather || {};
    var news = intel.teamNews || {};
    var source = match.sourceInfo || {};
    function statusText(status) {
      var map = {
        connected: "已接入",
        "no-match": "未匹配",
        "missing-key": "需密钥",
        "news-derived": "新闻提取",
        "provider-needed": "需权威源",
        scheduled: "赛程",
        completed: "赛果"
      };
      return map[status] || status || "-";
    }
    function card(title, status, text) {
      return '<div class="verified-card"><div><strong>' + title + '</strong><span>' + statusText(status) + '</span></div><p>' + text + '</p></div>';
    }
    var scoreText = match.status === "completed" && match.actualScore
      ? match.home.name + " vs " + match.away.name + "，最终比分 " + match.actualScore + "。来源：" + (source.provider || "赛程源") + "。"
      : match.home.name + " vs " + match.away.name + "，" + match.date + " " + match.time + "，" + match.venue + "。来源：" + (source.provider || "赛程源") + "。";
    var oddsText = market.averageOdds
      ? "平均赔率：" + market.averageOdds.home + " / " + (market.averageOdds.draw || "-") + " / " + market.averageOdds.away + "，公司数 " + (market.bookmakers || "-") + "。"
      : (market.note || "本场暂未匹配到赔率。");
    var weatherText = weather.status === "connected"
      ? (weather.text || "") + (weather.impact ? " " + weather.impact : "")
      : (weather.text || weather.note || "暂无天气数据。");
    var newsCount = (news.lineup?.articles?.length || 0) + (news.injuries?.articles?.length || 0) + (news.tactical?.articles?.length || 0);
    var newsText = newsCount
      ? "已提取 " + newsCount + " 条相关新闻线索，分布在首发/伤停/战术卡片中。"
      : "暂无可用新闻线索；首发、伤停仍等待权威源或公开报道。";
    return '<section class="detail-section">' +
      '<div class="section-title"><h3>真实数据源</h3><small>只展示已接入来源</small></div>' +
      '<div class="verified-grid">' +
        card("赛程 / 赛果", match.status, scoreText) +
        card("赔率市场", market.status, oddsText) +
        card("比赛天气", weather.status, weatherText) +
        card("新闻情报", news.status, newsText) +
      '</div>' +
    '</section>';
  }

  function renderMarketsAndCalibration(match) {
    var markets = match.expandedMarkets || {};
    var cal = match.marketCalibration || {};
    var deltas = cal.deltas || [];
    function marketItem(label, value, note) {
      return '<div class="market-item"><small>' + label + '</small><strong>' + (value ?? "-") + '</strong><span>' + (note || "") + '</span></div>';
    }
    var calibration = cal.market
      ? '<div class="calibration-grid">' +
          '<div><small>模型原始</small><strong>' + cal.modelOnly.join(" / ") + '%</strong></div>' +
          '<div><small>市场隐含</small><strong>' + cal.market.join(" / ") + '%</strong></div>' +
          '<div><small>校准后</small><strong>' + cal.blended.join(" / ") + '%</strong></div>' +
        '</div>' +
        '<div class="delta-row">' +
          '<span>主胜差 ' + (deltas[0] > 0 ? "+" : "") + (deltas[0] ?? "-") + 'pp</span>' +
          '<span>平局差 ' + (deltas[1] > 0 ? "+" : "") + (deltas[1] ?? "-") + 'pp</span>' +
          '<span>客胜差 ' + (deltas[2] > 0 ? "+" : "") + (deltas[2] ?? "-") + 'pp</span>' +
        '</div>'
      : '<p class="calibration-note">' + (cal.summary || "暂无市场校准数据。") + '</p>';
    return '<section class="detail-section">' +
      '<div class="section-title"><h3>扩展市场与赔率校准</h3><small>大小球 / BTTS / 市场对照</small></div>' +
      '<div class="market-grid">' +
        marketItem("大小球2.5", (markets.over25 ?? "-") + "%", markets.totalGoalsLean || "") +
        marketItem("双方进球", (markets.bttsYes ?? "-") + "%", markets.bttsLean || "") +
        marketItem("主队大胜", (markets.homeWinBy2Plus ?? "-") + "%", "赢2球+") +
        marketItem("客队大胜", (markets.awayWinBy2Plus ?? "-") + "%", "赢2球+") +
        marketItem("低比分平局", (markets.lowScoreDraw ?? "-") + "%", "0-0/1-1") +
        marketItem("冷门风险", markets.upsetRisk || "-", "弱侧概率") +
      '</div>' +
      '<div class="calibration-box">' +
        '<strong>赔率校准</strong>' +
        '<p>' + (cal.summary || "暂无市场校准数据。") + '</p>' +
        calibration +
      '</div>' +
    '</section>';
  }

  function renderMatchIntelligence(match) {
    var intel = match.matchIntelligence || {};
    var weather = intel.weather || {};
    var news = intel.teamNews || {};
    var injuries = news.injuries || {};
    var lineup = news.lineup || {};
    var tactical = news.tactical || {};
    function newsList(articles) {
      articles = (articles || []).slice(0, 3);
      return articles.length
        ? '<div class="news-fact-list">' + articles.map(function (article) {
          return '<div class="news-fact"><strong>' + article.title + '</strong><small>' + (article.source || "公开新闻源") + (article.pubDate ? " · " + article.pubDate : "") + '</small></div>';
        }).join("") + '</div>'
        : "";
    }
    function statusLabel(status) {
      var map = {
        "connected": "已接入",
        "confirmed": "已确认",
        "not-yet-released": "未公布",
        "pending": "待公布",
        "provider-needed": "需权威源",
        "missing-key": "需密钥",
        "news-derived": "新闻提取",
        "model-derived": "模型推断",
        "lineup-derived": "首发推导",
        "none-reported": "暂无记录",
        "none-confirmed": "未确认",
        "no-fixture-match": "未匹配",
        "unavailable": "暂无预报"
      };
      return map[status] || status || "-";
    }
    function lineupExtra() {
      var teams = lineup.teams || [];
      var articles = newsList(lineup.articles);
      if (!teams.length) return articles;
      return '<div class="lineup-list">' + teams.map(function (team) {
        return '<div><strong>' + team.team + (team.formation ? " · " + team.formation : "") + '</strong><small>' + (team.starters || []).join(" / ") + '</small></div>';
      }).join("") + '</div>' + articles;
    }
    function injuryExtra() {
      var players = injuries.players || [];
      if (!players.length) return newsList(injuries.articles);
      return '<div class="injury-list">' + players.slice(0, 8).map(function (item) {
        return '<span>' + item.player + ' · ' + (item.reason || "未说明") + '</span>';
      }).join("") + '</div>' + newsList(injuries.articles);
    }
    function card(title, status, text, extra) {
      return '<div class="intel-card"><div><strong>' + title + '</strong><span>' + statusLabel(status) + '</span></div><p>' + (text || "暂无数据。") + '</p>' + (extra || "") + '</div>';
    }
    return '<section class="detail-section">' +
      '<div class="section-title"><h3>临场情报</h3><small>首发 / 伤停 / 天气 / 战术</small></div>' +
      '<div class="intel-grid">' +
        card("首发阵容", lineup.status, sanitizeDisplayText(lineup.text), lineupExtra()) +
        card("伤病停赛", injuries.status, sanitizeDisplayText(injuries.text), injuryExtra()) +
        card("比赛天气", weather.status, (weather.text || "") + (weather.impact ? " " + weather.impact : "")) +
        card("临场战术", tactical.status, sanitizeDisplayText(tactical.text), newsList(tactical.articles)) +
      '</div>' +
    '</section>';
  }

  // ─── DETAIL: 出线动机与比赛目标 ───
  function renderAutopsy(match) {
    var a = match.matchAutopsy;
    if (!a) return "";
    var icon = a.correct ? "✓" : "✗";
    var cls = a.correct ? "autopsy-correct" : "autopsy-wrong";
    var factorsHTML = "";
    if (a.rightFactors && a.rightFactors.length) {
      factorsHTML += '<div class="autopsy-factors right"><strong>判断正确：</strong>' + a.rightFactors.join("、") + '</div>';
    }
    if (a.wrongFactors && a.wrongFactors.length) {
      factorsHTML += '<div class="autopsy-factors wrong"><strong>判断错误：</strong>' + a.wrongFactors.join("、") + '</div>';
    }
    return '<section class="detail-section">' +
      '<div class="section-title"><h3>比赛复盘</h3><small>模型 vs 真实结果</small></div>' +
      '<div class="autopsy-box ' + cls + '">' +
        '<div class="autopsy-head"><span class="autopsy-icon">' + icon + '</span><strong>' + (a.correct ? "模型预测正确" : "模型预测偏差") + '</strong></div>' +
        '<p class="autopsy-text">' + (a.text || "") + '</p>' +
        factorsHTML +
      '</div>' +
    '</section>';
  }

  function renderMotivation(match) {
    var m = match.motivation || {};
    var home = m.home || {};
    var away = m.away || {};
    function pct(value) {
      return Math.round((Number(value) || 0) * 100) + "%";
    }
    var sideRows = "";
    if (home.text || away.text) {
      sideRows =
        '<div class="motivation-side"><strong>' + match.home.name + '</strong><span>' + (home.label || "待评估") + '</span><p>' + (home.text || "暂无完整出线形势。") + '</p></div>' +
        '<div class="motivation-side"><strong>' + match.away.name + '</strong><span>' + (away.label || "待评估") + '</span><p>' + (away.text || "暂无完整出线形势。") + '</p></div>';
    }
    return '<section class="detail-section">' +
      '<div class="section-title"><h3>出线动机与比赛目标</h3><small>小组规则 / 净胜球需求</small></div>' +
      '<div class="motivation-box">' +
        '<div class="motivation-head"><strong>' + (m.label || "待评估") + '</strong><span>' + (m.phase === "knockout" ? "淘汰赛" : "小组赛") + '</span></div>' +
        '<p>' + (m.note || "暂无出线形势数据。") + '</p>' +
        '<div class="motivation-grid">' +
          '<div><small>求胜强度</small><strong>' + pct(m.intensity) + '</strong></div>' +
          '<div><small>平局价值</small><strong>' + pct(m.drawValue) + '</strong></div>' +
          '<div><small>净胜球需求</small><strong>' + pct(m.goalNeed) + '</strong></div>' +
        '</div>' +
        '<div class="motivation-sides">' + sideRows + '</div>' +
      '</div>' +
    '</section>';
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
        text: "按模型概率分布，" + awayName + " 取胜是最可能的结果。" + awayName + "在综合评估上的优势可能转化为比分的领先。" + homeName + "需要把握有限的反击机会才能改变被动局面。",
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
      text: "当前事实证据层只展示已接入的赛程/赛果、赔率、天气和公开新闻线索。首发阵容、伤停名单、球员级数据和临场战术只有在匹配到可靠来源时才展示；未接入的数据不会伪造成事实。",
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
      '<p class="risk-disclaimer">以上风险因素来自当前已接入真实数据和模型概率分布。未确认的伤病、首发、临场事件不会作为事实写入页面；足球分析存在固有不确定性，请理性看待模型输出。</p>' +
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
            '<div class="flow-step"><span class="flow-num">01</span><strong>真实数据采集</strong><p>每日从公开数据源获取世界杯赛程、对阵和比分，从 The Odds API 拉取赔率，从 Open-Meteo 获取天气，并从公开新闻源提取首发、伤停、战术相关线索。</p></div>' +
            '<div class="flow-step"><span class="flow-num">02</span><strong>出线形势</strong><p>按照2026世界杯规则计算小组积分、净胜球、剩余场次和出线压力：小组前二直接晋级，8个成绩最好的小组第三进入32强。</p></div>' +
            '<div class="flow-step"><span class="flow-num">03</span><strong>证据与模型分层</strong><p>页面把真实证据和模型输出分开展示：赛程/赛果、赔率、天气、新闻线索作为事实证据；比分分布、胜平负概率和信心指数作为算法预测。</p></div>' +
            '<div class="flow-step"><span class="flow-num">04</span><strong>概率计算</strong><p>基于已接入数据和模型参数生成胜平负概率、最可能比分和信心指数；未接入可靠来源的信息不会被包装成事实证据。</p></div>' +
            '<div class="flow-step"><span class="flow-num">05</span><strong>每日刷新</strong><p>每日定时（北京时间 15:00）自动拉取最新赛程/赛果、赔率、天气和公开新闻线索，重新生成分析并通过云端自动部署上线。</p></div>' +
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
            '<p>信心指数基于预测概率集中度和各因素间一致性计算（无随机成分），反映模型对当前预测的把握程度：</p>' +
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
              '<li><strong>赛前数据</strong>：所有分析基于赛前和公开可获取数据，不反映未发布的临场变化。</li>' +
              '<li><strong>信息缺口</strong>：实时首发、权威伤停和球员级统计只有在稳定来源接入后才展示；未确认内容不会伪造。</li>' +
              '<li><strong>市场信号</strong>：赔率已接入 The Odds API；未匹配到赔率的场次会明确显示缺口，不会伪造市场共识。</li>' +
              '<li><strong>简化假设</strong>：泊松模型假设进球独立分布，实际比赛中进球往往存在相关性。</li>' +
              '<li><strong>新闻线索</strong>：公开新闻源可辅助识别伤停、首发和战术话题，但不等同于官方确认名单。</li>' +
              '<li><strong>无法量化的因素</strong>：球队士气、球迷氛围、历史恩怨、裁判尺度等因素无法纳入模型。</li>' +
            '</ul>' +
          '</div>' +
        '</section>' +

        '<section class="detail-section">' +
          '<div class="section-title"><h3>更新策略</h3><small>预测刷新说明</small></div>' +
          '<div class="method-text">' +
            '<p>本应用采用每日模型刷新机制：GitHub Actions 每天北京时间 15:00 自动拉取最新赛程/赛果、赔率、天气和公开新闻线索，重新计算出线动机、比分分布、胜平负概率和信心指数，并提交到代码仓库。</p>' +
            '<p>Render 会根据最新提交自动部署，因此手机端通常每天 15:00 后看到一次更新后的分析结果。</p>' +
            '<p>赔率接口已按 The Odds API 接入，配置 THE_ODDS_API_KEY 后会在每日刷新中拉取真实赔率并按小权重校准模型概率；未配置 key 时不会伪造赔率。</p>' +
            '<p>新闻情报当前来自 ESPN、BBC、Guardian 等公开 RSS，按球队名和关键词匹配相关文章；付费实时首发、权威伤停和球员级数据仍待后续接入。</p>' +
          '</div>' +
        '</section>' +

      '</div>';
  }

  function renderBacktest() {
    var root = document.getElementById("backtestRoot");
    if (!root) return;
    var rows = backtest.rows || [];
    function metric(label, value, note) {
      return '<div class="backtest-metric"><small>' + label + '</small><strong>' + (value ?? "-") + '</strong><span>' + (note || "") + '</span></div>';
    }
    root.innerHTML =
      '<section class="methodology-hero">' +
        '<h1>模型回测</h1>' +
        '<p>用已完场比赛验证预测概率、比分覆盖和赔率市场对照，避免模型只会输出、不会自我评估。</p>' +
      '</section>' +
      '<div class="methodology-content">' +
        '<section class="detail-section">' +
          '<div class="section-title"><h3>回测概览</h3><small>已完场样本</small></div>' +
          '<div class="backtest-grid">' +
            metric("已完场", backtest.completedCount || 0, "场") +
            metric("胜平负命中", (backtest.outcomeHitRate ?? "-") + "%", "模型主方向") +
            metric("Top4比分覆盖", (backtest.topScoreCoverage ?? "-") + "%", "真实比分是否入围") +
            metric("Brier Score", backtest.averageBrier ?? "-", "越低越好") +
            metric("高信心样本", backtest.highConfidenceCount || 0, "场") +
            metric("高信心命中", (backtest.highConfidenceHitRate ?? "-") + "%", ">=80%") +
            metric("赔率可比", backtest.marketComparableCount || 0, "场") +
            metric("市场命中", (backtest.marketHitRate ?? "-") + "%", "赔率倾向") +
          '</div>' +
        '</section>' +
        '<section class="detail-section">' +
          '<div class="section-title"><h3>样本明细</h3><small>最近24场</small></div>' +
          '<div class="backtest-table">' +
            rows.map(function (row) {
              return '<div class="backtest-row">' +
                '<strong>' + row.match + '</strong>' +
                '<div><span>实际 ' + row.actualOutcome + ' ' + row.actualScore + '</span><span>模型 ' + row.predictedOutcome + '</span></div>' +
                '<div><span class="' + (row.outcomeHit ? "hit" : "miss") + '">' + (row.outcomeHit ? "方向命中" : "方向未中") + '</span><span class="' + (row.topScoreHit ? "hit" : "miss") + '">' + (row.topScoreHit ? "比分覆盖" : "比分未覆盖") + '</span></div>' +
                '<small>概率 ' + row.probabilities.join(" / ") + '% · Brier ' + row.brier + (row.marketOutcome ? ' · 市场 ' + row.marketOutcome : '') + '</small>' +
              '</div>';
            }).join("") +
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
  } else if (document.getElementById("backtestRoot")) {
    renderBacktest();
  } else if (document.getElementById("methodologyRoot")) {
    renderMethodology();
  } else {
    renderAnalysis();
  }
})();
