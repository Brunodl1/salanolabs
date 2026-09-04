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
| `salano-logo.svg` | Navbar and footer lockup | SVG preferred. White wordmark on transparent — the site background is black. Roughly 4:1 wide. |
| `salano-mark.svg` | Square icon version | Optional. |
| `favicon.svg` | Browser tab icon | Referenced from `index.html`. A 32×32 PNG named `favicon.png` works too — update the `<link>` tag if you switch. |

Until `salano-logo.svg` exists, the site draws a typographic stand-in that
matches the real mark (heavy SALANO, blue rule, spaced LABS).

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
