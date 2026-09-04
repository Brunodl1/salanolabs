# Assets

Drop your real files into the folders below. **You do not need to touch any
component** — every image path is listed in `src/content/site.js`. If the file
name matches what's listed there, it just appears.

Anything missing renders as a labeled placeholder box instead of breaking, so
you can add files one at a time.

`proof/` holds **real client screenshots**. Every other folder is populated
with branded placeholder images, clearly stamped PLACEHOLDER so none of them
can be mistaken for real client work. Overwrite them with the real files,
keeping the same names, and nothing else needs to change.

---

## `logo/`

| File | Used for | Notes |
| --- | --- | --- |
| `salano-logo.png` | Navbar and footer lockup | ✅ In place. White wordmark on transparent, 700×356. Swap for an SVG any time — update the path in `site.js`. |
| `favicon.png` | Browser tab icon | ✅ In place. 500×500, referenced from `index.html`. |

If the logo file is ever missing, the site falls back to a typographic
stand-in that matches the mark (heavy SALANO, blue rule, spaced LABS).

## `case-studies/`

Each card carries a **two-slide carousel**: the person, then the proof. Listed
in `site.js` under `caseStudies.items[].slides`.

| File | Slide | Should show |
| --- | --- | --- |
| `client-one-person.jpg` | 1 | The founder / client |
| `client-one-result.jpg` | 2 | Their revenue graph, dashboard or screenshot |
| `client-two-person.jpg` | 1 | The founder / client |
| `client-two-result.jpg` | 2 | Their result |
| `client-three-person.jpg` | 1 | The founder / client |
| `client-three-result.jpg` | 2 | Their result |

**Size:** 1200×900 (4:3), JPG or WebP. Center-cropped to fill, so keep the
subject centered. Aim for under 300 KB each.

Placeholder versions are already in place. Want more than two slides on a
card? Just add entries to that card's `slides` array; the dots follow.

## `brands/`

Small client logos for the "trusted by" strip under the hero. Listed in
`site.js` under `brandLogos`.

| File | Used for |
| --- | --- |
| `brand-1.png` … `brand-5.png` | Logo strip |

**Size:** SVG preferred, or PNG at ~260×64. They render white/greyscale at
reduced opacity, so single-color versions on transparent work best. Missing
files fall back to the brand name as text.

⚠️ The current files and the names in `site.js` are invented placeholders
(NORTHSIDE, ATELIER 9, …). Replace both with real clients before launch.

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

Placeholder versions are already in place, and the columns show at every
screen size.

## `proof/`

The social-proof wall. Listed in `site.js` under `proof.items`.

**Populated with real client screenshots** (Merlin's Father, Time A Tell,
Gastavi, SEVENN, Enchanted Nail Supply, Bailout, Karbon Footprint).

**Size:** anything. Images keep their own proportions here rather than being
cropped to a box, because these are screenshots whose whole point is the
numbers in them. A square crop would cut the revenue breakdown off the right
edge. The grid is a masonry column layout, so mixed heights pack fine.

Very tall images are capped at 30rem and cropped from the top, so one portrait
shot can't tower over the dashboards around it.

Each item takes an optional `caption`, shown under the image. Keep captions to
what the screenshot actually shows.

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
