# Assets

Drop your real files into the folders below. **You do not need to touch any
component** — every image path is listed in `src/content/site.js`. If the file
name matches what's listed there, it just appears.

Anything missing renders as a labeled placeholder box instead of breaking, so
you can add files one at a time.

---

## `logo/`

| File | Used for | Notes |
| --- | --- | --- |
| `salano-logo.png` | Navbar and footer lockup | ✅ In place. White wordmark on transparent, 700×356. Swap for an SVG any time — update the path in `site.js`. |
| `favicon.png` | Browser tab icon | ✅ In place. 500×500, referenced from `index.html`. |

If the logo file is ever missing, the site falls back to a typographic
stand-in that matches the mark (heavy SALANO, blue rule, spaced LABS).

## `case-studies/`

One image per case study. Listed in `site.js` under `caseStudies.items[].image`.

| File | Used for |
| --- | --- |
| `client-one.jpg` | First case study card |
| `client-two.jpg` | Second case study card |
| `client-three.jpg` | Third case study card |

**Size:** 1200×900 (4:3), JPG or WebP. They're displayed cropped to fill, so
keep the subject centered. Aim for under 300 KB each.

## `brands/`

Small client logos for the "trusted by" strip under the hero. Listed in
`site.js` under `brandLogos`.

| File | Used for |
| --- | --- |
| `brand-1.svg` … `brand-5.svg` | Logo strip |

**Size:** SVG preferred, or PNG at ~200×56. They render white/greyscale at
reduced opacity, so single-color versions on transparent work best. Missing
files fall back to the brand name as text.

Add or remove entries in the `brandLogos` array to change how many show.

## `hero/`

The two scrolling columns beside the hero headline on desktop. Listed in
`site.js` under `heroGallery`.

| File | Used for |
| --- | --- |
| `hero-01.jpg` … `hero-04.jpg` | Left column (scrolls up) |
| `hero-05.jpg` … `hero-08.jpg` | Right column (scrolls down) |

**Size:** portrait, 800×1000 (4:5), JPG or WebP. Brand photography, product
shots or campaign creative work best. Keep the two columns the same length so
the loop reads evenly — add or remove entries in `site.js` to change how many.

The columns are hidden below the `lg` breakpoint, so these never load on phones.

## `proof/`

The social-proof wall — Shopify revenue graphs, Meta Ads Manager dashboards,
Klaviyo screenshots, client messages, happy customers. Listed in `site.js`
under `proof.items`.

| File | Used for |
| --- | --- |
| `proof-01.jpg` … `proof-10.jpg` | The proof grid |

**Size:** anything. Tiles are square and images are center-cropped to fill, so
a wide dashboard screenshot and a tall phone screenshot both sit in the grid
without distorting. If a screenshot has important detail near an edge, crop it
closer to square yourself first so the center crop doesn't cut it off.

Add or remove entries in the `proof.items` array — the grid reflows on its own.
Each item takes an optional `caption`; omit it for a clean tile.

## `og/`

| File | Used for |
| --- | --- |
| `og-image.jpg` | Link preview card on social and messaging apps |

**Size:** exactly 1200×630 JPG. Referenced from `index.html`.

---

## Adding a new image anywhere

1. Drop the file in the right folder here.
2. Reference it in `src/content/site.js` as `/assets/<folder>/<filename>`.

Paths start from `/assets/` — no import statement, no build step.
