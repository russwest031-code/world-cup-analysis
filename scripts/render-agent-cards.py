import json
import math
import re
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


W, H = 1080, 1440
BG = "#f4f7f2"
TEXT = "#0b2118"
MUTED = "#617269"
ACCENT = "#128452"
ACCENT_2 = "#0f6f47"
BLUE = "#1458d4"
RED = "#e04b32"
GRAY = "#a6adb5"
WARN = "#b7791f"
DANGER = "#c94c43"
LINE = "#dce7df"
WHITE = "#ffffff"


def font(size, bold=False):
    candidates = [
        r"C:\Windows\Fonts\Noto Sans SC Bold (TrueType).otf" if bold else r"C:\Windows\Fonts\Noto Sans SC (TrueType).otf",
        r"C:\Windows\Fonts\msyhbd.ttc" if bold else r"C:\Windows\Fonts\msyh.ttc",
        r"C:\Windows\Fonts\simhei.ttf",
    ]
    for path in candidates:
        if path and Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


F = {
    "title": font(52, True),
    "h1": font(44, True),
    "h2": font(34, True),
    "body": font(26),
    "body_bold": font(26, True),
    "small": font(22),
    "tiny": font(18),
    "num": font(72, True),
}


def safe_name(value):
    return re.sub(r"[^0-9A-Za-z\u4e00-\u9fff_-]+", "-", value).strip("-")[:48] or "match"


def rounded(draw, xy, r, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=r, fill=fill, outline=outline, width=width)


def text(draw, xy, s, fill=TEXT, f=None, anchor=None):
    draw.text(xy, str(s), fill=fill, font=f or F["body"], anchor=anchor)


def wrap(draw, value, f, max_width, max_lines=None):
    value = str(value or "")
    lines = []
    current = ""
    for char in value:
        trial = current + char
        if draw.textlength(trial, font=f) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = char
    if current:
        lines.append(current)
    if max_lines and len(lines) > max_lines:
        lines = lines[:max_lines]
        while lines[-1] and draw.textlength(lines[-1] + "…", font=f) > max_width:
            lines[-1] = lines[-1][:-1]
        lines[-1] += "…"
    return lines


def paragraph(draw, xy, value, max_width, f=None, fill=MUTED, line_gap=8, max_lines=None):
    f = f or F["body"]
    x, y = xy
    lines = wrap(draw, value, f, max_width, max_lines)
    for line in lines:
        text(draw, (x, y), line, fill=fill, f=f)
        y += f.size + line_gap
    return y


def chip(draw, xy, value, fill="#e7f3ec", fg=ACCENT, f=None):
    f = f or F["small"]
    x, y = xy
    tw = draw.textlength(value, font=f)
    w = int(tw + 34)
    h = f.size + 18
    rounded(draw, (x, y, x + w, y + h), 999, fill)
    text(draw, (x + 17, y + 8), value, fill=fg, f=f)
    return x + w + 12


def bar(draw, x, y, w, h, pct, label, color):
    rounded(draw, (x, y, x + w, y + h), h // 2, "#ecf2ee")
    fw = int(w * max(0, min(100, pct)) / 100)
    if fw > 0:
        rounded(draw, (x, y, x + fw, y + h), h // 2, color)
    text(draw, (x, y - 34), label, fill=MUTED, f=F["small"])
    text(draw, (x + w, y - 36), f"{pct}%", fill=TEXT, f=F["body_bold"], anchor="ra")


def segmented_bar(draw, x, y, w, h, probs):
    home = int(w * probs["home"] / 100)
    draw_part = int(w * probs["draw"] / 100)
    away = max(0, w - home - draw_part)
    rounded(draw, (x, y, x + w, y + h), h // 2, "#e9eef3")
    if home > 0:
        rounded(draw, (x, y, x + home, y + h), h // 2, BLUE)
    if draw_part > 0:
        draw.rectangle((x + home, y, x + home + draw_part, y + h), fill=GRAY)
    if away > 0:
        rounded(draw, (x + home + draw_part, y, x + w, y + h), h // 2, RED)


def direction_badge(draw, x, y, item):
    if item["pick"] == "主胜":
        label, color, fill = "主胜方向", BLUE, "#edf4ff"
    elif item["pick"] == "客胜":
        label, color, fill = "客队更优", RED, "#fff0ed"
    else:
        label, color, fill = "平局空间", GRAY, "#f3f5f7"
    rounded(draw, (x, y, x + 148, y + 54), 18, fill)
    text(draw, (x + 74, y + 14), label, fill=color, f=F["small"], anchor="ma")


def card_base():
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)
    draw.ellipse((-220, -260, 520, 420), fill="#dff2e7")
    draw.ellipse((720, 1040, 1300, 1620), fill="#e7f0ea")
    return img, draw


def render_match(item, idx, total, out_path):
    img, draw = card_base()
    rounded(draw, (54, 54, W - 54, H - 54), 42, WHITE, outline=LINE, width=2)

    text(draw, (90, 92), "世界杯赛前预测", fill=ACCENT, f=F["small"])
    text(draw, (W - 90, 92), f"{idx}/{total}", fill=MUTED, f=F["small"], anchor="ra")
    text(draw, (90, 135), item["title"], fill=TEXT, f=F["h1"])
    text(draw, (90, 192), f"{item['date']} {item['time']}", fill=MUTED, f=F["body"])

    rounded(draw, (90, 250, W - 90, 430), 30, "#f5fbf7", outline="#d4eadc", width=2)
    text(draw, (120, 280), "方向", fill=MUTED, f=F["small"])
    text(draw, (120, 315), f"{item['pick']} · {item['pickText']}", fill=ACCENT, f=F["title"])
    text(draw, (W - 120, 292), "信心", fill=MUTED, f=F["small"], anchor="ra")
    text(draw, (W - 120, 325), f"{item['confidenceLabel']} {item['confidence']}", fill=TEXT, f=F["h2"], anchor="ra")
    chip(draw, (120, 382), f"比分区间：{item['scoreBand']['label']}", fill="#e9f5ee", fg=ACCENT)

    y = 500
    text(draw, (90, y), "三层概率", fill=TEXT, f=F["h2"])
    y += 70
    p = item["probabilities"]
    bar(draw, 100, y, 820, 24, p["home"], "主胜", ACCENT)
    y += 90
    bar(draw, 100, y, 820, 24, p["draw"], "平局", WARN)
    y += 90
    bar(draw, 100, y, 820, 24, p["away"], "客胜", ACCENT_2)

    y += 70
    text(draw, (90, y), "模型对比", fill=TEXT, f=F["h2"])
    y += 48
    base = item.get("baseline") or []
    market = item.get("market")
    compare = f"基础模型 主{base[0]} / 平{base[1]} / 客{base[2]}    "
    compare += f"市场 主{market[0]} / 平{market[1]} / 客{market[2]}" if market else "市场 未采集"
    y = paragraph(draw, (90, y), compare, 900, f=F["small"], fill=MUTED, max_lines=2)
    y += 12
    next_x = chip(draw, (90, y), f"市场一致性：{item['consensus']}", fill="#fff3dd", fg=WARN)
    if next_x + 190 < W - 90:
        chip(draw, (next_x, y), f"赔率权重：{item['marketWeight']}%", fill="#eef6f1", fg=ACCENT)
        y += 66
    else:
        chip(draw, (90, y + 44), f"赔率权重：{item['marketWeight']}%", fill="#eef6f1", fg=ACCENT)
        y += 110

    y += 10
    text(draw, (90, y), "关键依据", fill=TEXT, f=F["h2"])
    y += 46
    for evidence in item.get("evidence", [])[:3]:
        rounded(draw, (90, y, 118, y + 28), 14, "#dff2e7")
        text(draw, (104, y + 4), "✓", fill=ACCENT, f=F["tiny"], anchor="ma")
        y = paragraph(draw, (130, y - 4), evidence, 820, f=F["small"], fill=MUTED, max_lines=2) + 8

    y += 2
    text(draw, (90, y), "风险提示", fill=TEXT, f=F["h2"])
    y += 46
    risks = item.get("risks") or ["暂无明显额外风险，但足球单场随机性较高。"]
    for risk in risks[:2]:
        rounded(draw, (90, y, W - 90, y + 50), 18, "#fff8eb", outline="#f1ddbd")
        text(draw, (116, y + 13), risk, fill="#795b2a", f=F["small"])
        y += 60

    footer = "仅做赛前分析，不构成投注建议"
    text(draw, (W // 2, H - 82), footer, fill=MUTED, f=F["small"], anchor="ma")
    img.save(out_path, quality=95)


def render_cover(payload, out_path):
    img = Image.new("RGB", (W, H), "#f7f9fc")
    draw = ImageDraw.Draw(img)
    draw.rectangle((0, 0, W, 178), fill="#eaf1ff")
    draw.polygon([(0, 0), (330, 0), (210, 178), (0, 178)], fill=BLUE)
    draw.polygon([(W, 0), (W - 220, 0), (W - 110, 178), (W, 178)], fill="#cfe0ff")
    text(draw, (72, 42), "世界杯", fill=WHITE, f=F["h1"])
    text(draw, (290, 43), "4场方向总览", fill=BLUE, f=F["title"])
    text(draw, (292, 112), f"{payload.get('targetDate', '')}  赛前留档 | 先看方向", fill=TEXT, f=F["body"])

    matches = payload.get("matches", [])[:4]
    y = 210
    for idx, item in enumerate(matches, start=1):
        rounded(draw, (46, y, W - 46, y + 158), 20, WHITE, outline="#d9e3f2", width=2)
        rounded(draw, (68, y + 22, 118, y + 72), 12, BLUE)
        text(draw, (93, y + 34), str(idx), fill=WHITE, f=F["body_bold"], anchor="ma")
        title = item["title"].replace(" vs ", "  vs  ")
        text(draw, (150, y + 25), title, fill=TEXT, f=F["h2"])
        direction_badge(draw, W - 220, y + 24, item)
        p = item["probabilities"]
        text(draw, (150, y + 82), f"主胜 {p['home']}%", fill=BLUE, f=F["small"])
        text(draw, (392, y + 82), f"平 {p['draw']}%", fill="#6b7178", f=F["small"])
        text(draw, (584, y + 82), f"客胜 {p['away']}%", fill=RED, f=F["small"])
        segmented_bar(draw, 150, y + 120, 700, 18, p)
        y += 176

    y += 10
    rounded(draw, (46, y, W - 46, y + 330), 22, WHITE, outline="#d9e3f2", width=2)
    draw.polygon([(46, y), (384, y), (330, y + 66), (46, y + 66)], fill=BLUE)
    text(draw, (86, y + 16), "比分结构总览", fill=WHITE, f=F["h2"])
    text(draw, (W - 76, y + 24), "每场展示前3个参考比分", fill=MUTED, f=F["small"], anchor="ra")
    row_y = y + 86
    for idx, item in enumerate(matches, start=1):
        text(draw, (82, row_y + 10), str(idx), fill=BLUE, f=F["body_bold"])
        text(draw, (132, row_y + 10), item["title"], fill=TEXT, f=F["body_bold"])
        scores = item.get("topScores") or []
        x = 610
        for raw in scores[:3]:
            score = raw.split("(")[0]
            pct = raw[raw.find("(") + 1:raw.find(")")] if "(" in raw else ""
            rounded(draw, (x, row_y, x + 112, row_y + 58), 12, "#f7f9fc", outline=LINE)
            text(draw, (x + 56, row_y + 8), score, fill=BLUE if idx != 4 else RED, f=F["body_bold"], anchor="ma")
            text(draw, (x + 56, row_y + 34), pct, fill=MUTED, f=F["tiny"], anchor="ma")
            x += 128
        row_y += 62

    rounded(draw, (46, H - 164, W - 46, H - 104), 18, BLUE)
    text(draw, (W // 2, H - 148), "今晚先看方向，再看比分结构；明天统一回来看账。", fill=WHITE, f=F["body_bold"], anchor="ma")
    text(draw, (W // 2, H - 76), "模型 + 结果，仅供看球讨论，不作任何建议。", fill=MUTED, f=F["small"], anchor="ma")
    img.save(out_path, quality=95)


def main():
    if len(sys.argv) < 2:
        raise SystemExit("Usage: render-agent-cards.py <agent-json>")
    json_path = Path(sys.argv[1]).resolve()
    payload = json.loads(json_path.read_text(encoding="utf-8"))
    out_dir = json_path.parent / "cards" / json_path.stem
    out_dir.mkdir(parents=True, exist_ok=True)
    render_cover(payload, out_dir / "00-cover.png")
    for idx, item in enumerate(payload.get("matches", []), start=1):
        render_match(item, idx, len(payload.get("matches", [])), out_dir / f"{idx:02d}-{safe_name(item['title'])}.png")
    latest_dir = json_path.parent / "cards" / "latest"
    latest_dir.mkdir(parents=True, exist_ok=True)
    for old in latest_dir.glob("*.png"):
        old.unlink()
    for png in out_dir.glob("*.png"):
        (latest_dir / png.name).write_bytes(png.read_bytes())
    print(f"Rendered {len(list(out_dir.glob('*.png')))} images -> {out_dir}")


if __name__ == "__main__":
    main()
