# Salano Labs

Marketing site for Salano Labs. React + Vite + Tailwind v4. It builds to plain
static files — no backend, no database, no server to run.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Deploying

```bash
npm run build    # outputs to dist/
```

Then put `dist/` on any static host:

| Host | How |
| --- | --- |
| **Netlify** | Drag the `dist/` folder onto the dashboard, or connect the repo (build: `npm run build`, publish: `dist`). |
| **Vercel** | Connect the repo. It detects Vite automatically. |
| **Cloudflare Pages** | Connect the repo (build: `npm run build`, output: `dist`). |
| **GitHub Pages** | Push `dist/` to a `gh-pages` branch. |

`public/_redirects` (Netlify) and `vercel.json` (Vercel) are already included so
`/privacy` and `/terms` resolve on a direct visit or refresh. On another host,
configure it to serve `index.html` for unmatched routes.

---

## The three files you'll actually edit

### 1. `src/content/site.js` — all the words

Every headline, paragraph, stat, case study, nav link and footer detail lives
here in one object. Change the text, save, done. You never need to open a
component to change copy.

The booking link is the constant at the top:

```js
export const BOOKING_URL = "https://cal.com/your-handle/growth-audit";
```

Every CTA button on the site points at it. Change that one line and all of
them update.

### 2. `src/theme.css` — all the styling

Colors, fonts, heading sizes, radii, section spacing — all defined as tokens in
one `@theme` block. Tailwind turns each token into a utility class
automatically, so changing `--color-accent` restyles every accent on the site.

Current palette (taken from the logo):

| Token | Value | Used for |
| --- | --- | --- |
| `--color-bg` | `#050505` | Page background |
| `--color-surface` | `#0d0d10` | Cards and panels |
| `--color-text` | `#ffffff` | Headings, primary text |
| `--color-muted` | `#8a8a93` | Body copy |
| `--color-accent` | `#1b1bff` | Buttons, links, the logo rule |

To change the fonts, edit `--font-display` / `--font-body` in `theme.css` **and**
the Google Fonts `<link>` in `index.html`.

### 3. `public/assets/` — all the images

Drop real files in and they appear. See `public/assets/README.md` for the exact
filenames and sizes each slot expects. Anything missing renders as a labeled
placeholder box showing the path it's looking for, so nothing breaks and you
always know what to add next.

---

## Project layout

```
src/
  content/
    site.js        ← all landing page copy + the booking link
    legal.js       ← privacy policy + terms text
  theme.css        ← all design tokens
  components/      ← Navbar, Footer, Logo, Button, Placeholder, …
  sections/        ← one file per landing page section
  pages/
    Home.jsx       ← the section order — reorder or remove sections here
    LegalPage.jsx  ← shared layout for /privacy and /terms
  App.jsx          ← routes
public/assets/     ← drop your images here
```

Adding or reordering sections is done in `src/pages/Home.jsx`. Each section is
self-contained and pulls its own copy from `site.js`.

---

## Before this goes live

- [ ] Set the real `BOOKING_URL` in `src/content/site.js`
- [ ] Replace everything marked `[PLACEHOLDER]` in `site.js` — the stats and all
      three case studies are currently invented numbers
- [ ] Fill in the real contact email, business address and Instagram URL
- [ ] Drop the real logo, case study images, brand logos and OG image into
      `public/assets/`
- [ ] Have a lawyer review `src/content/legal.js` — the privacy policy and terms
      are generic boilerplate, not legal advice
