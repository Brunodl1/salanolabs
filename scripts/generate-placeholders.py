"""Generate branded placeholder assets for the Salano Labs site.

These are stand-ins, not real content. Every one is visibly labelled
PLACEHOLDER so nothing can be mistaken for genuine client proof.
"""

from PIL import Image, ImageDraw, ImageFont
import os

OUT = "/Users/brunodelafontaine/git/SalanoLabs/public/assets"

BG = (13, 13, 16)
DEEP = (5, 5, 5)
ACCENT = (59, 59, 255)
LINE = (30, 30, 38)
MUTED = (138, 138, 147)
FAINT = (85, 85, 94)
WHITE = (255, 255, 255)

BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
REG = "/System/Library/Fonts/Supplemental/Arial.ttf"


def font(path, size):
    return ImageFont.truetype(path, size)


def centered(d, y, text, f, fill, w):
    bbox = d.textbbox((0, 0), text, font=f)
    d.text(((w - (bbox[2] - bbox[0])) / 2, y), text, font=f, fill=fill)
    return bbox[3] - bbox[1]


def base(w, h, tint=0.16, angle=0):
    """Dark panel with a soft accent wash and a faint diagonal hatch."""
    im = Image.new("RGB", (w, h), BG)
    wash = Image.new("RGB", (w, h), BG)
    wd = ImageDraw.Draw(wash)
    # Diagonal accent gradient band.
    for i in range(0, w + h, 3):
        t = i / (w + h)
        shade = tuple(
            int(BG[c] + (ACCENT[c] - BG[c]) * tint * (1 - abs(t - 0.5) * 2) ** 2)
            for c in range(3)
        )
        wd.line([(i - h + angle, h), (i + angle, 0)], fill=shade, width=3)
    im = Image.blend(im, wash, 0.9)

    d = ImageDraw.Draw(im)
    # Hairline hatch for texture.
    for i in range(-h, w, 22):
        d.line([(int(i), h), (int(i + h), 0)], fill=LINE, width=1)
    d.rectangle([0, 0, w - 1, h - 1], outline=LINE, width=2)
    return im, ImageDraw.Draw(im)


def tag(d, w, h, text):
    """Small PLACEHOLDER chip in the top-left corner."""
    f = font(BOLD, max(11, w // 62))
    bbox = d.textbbox((0, 0), text, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    pad = max(8, w // 90)
    x, y = pad * 2, pad * 2
    d.rounded_rectangle(
        [int(x), int(y), int(x + tw + pad * 2), int(y + th + pad * 2)],
        radius=999, fill=DEEP, outline=ACCENT
    )
    d.text((x + pad, y + pad - bbox[1]), text, font=f, fill=ACCENT)


def person_glyph(d, cx, cy, r):
    w = max(2, int(r // 18))
    d.ellipse([int(cx - r * 0.42), int(cy - r), int(cx + r * 0.42), int(cy - r * 0.16)],
              outline=FAINT, width=w)
    d.arc([int(cx - r * 0.8), int(cy + r * 0.05), int(cx + r * 0.8), int(cy + r * 1.7)],
          180, 360, fill=FAINT, width=w)


def chart_glyph(d, cx, cy, r):
    bars = [0.45, 0.7, 0.55, 0.95, 0.8]
    bw = r * 0.24
    gap = r * 0.1
    total = len(bars) * bw + (len(bars) - 1) * gap
    x = cx - total / 2
    for b in bars:
        d.rectangle([int(x), int(cy + r * 0.7 - r * 1.3 * b), int(x + bw), int(cy + r * 0.7)],
                    outline=FAINT, width=max(2, int(r // 20)))
        x += bw + gap


def panel(path, w, h, title, sub, glyph, tint=0.16, angle=0):
    im, d = base(w, h, tint, angle)
    g = min(w, h)
    glyph(d, w / 2, h / 2 - g * 0.10, g * 0.13)
    y = h / 2 + g * 0.14
    y += centered(d, y, title, font(BOLD, max(18, g // 22)), MUTED, w) + g * 0.055
    centered(d, y, sub, font(REG, max(13, g // 34)), FAINT, w)
    tag(d, w, h, "PLACEHOLDER")
    im.save(path, quality=88)
    print(" ", os.path.relpath(path, OUT))


# ----------------------------------------------------------------- hero
os.makedirs(f"{OUT}/hero", exist_ok=True)
print("hero/")
for i in range(1, 9):
    panel(
        f"{OUT}/hero/hero-{i:02d}.jpg", 800, 1000,
        f"BRAND IMAGE {i:02d}", "800 x 1000  ·  drop yours here",
        person_glyph, tint=0.10 + (i % 4) * 0.06, angle=i * 40,
    )

# ---------------------------------------------------------- case studies
os.makedirs(f"{OUT}/case-studies", exist_ok=True)
print("case-studies/")
for n, slug in enumerate(["client-one", "client-two", "client-three"], start=1):
    panel(
        f"{OUT}/case-studies/{slug}-person.jpg", 1200, 900,
        "CLIENT PHOTO", "the founder  ·  1200 x 900",
        person_glyph, tint=0.12 + n * 0.05, angle=n * 70,
    )
    panel(
        f"{OUT}/case-studies/{slug}-result.jpg", 1200, 900,
        "RESULT SCREENSHOT", "revenue graph or dashboard  ·  1200 x 900",
        chart_glyph, tint=0.20 + n * 0.05, angle=n * 110,
    )

# --------------------------------------------------------------- brands
os.makedirs(f"{OUT}/brands", exist_ok=True)
print("brands/")
names = ["NORTHSIDE", "ATELIER 9", "VANTA CO", "RUNWELL", "OKAPI"]
for i, name in enumerate(names, start=1):
    w, h = 260, 64
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    f = font(BOLD, 26)
    bbox = d.textbbox((0, 0), name, font=f)
    d.text(((w - (bbox[2] - bbox[0])) / 2, (h - (bbox[3] - bbox[1])) / 2 - bbox[1]),
           name, font=f, fill=(255, 255, 255, 235))
    im.save(f"{OUT}/brands/brand-{i}.png")
    print(f"  brands/brand-{i}.png  ({name})")

print("\ndone")
