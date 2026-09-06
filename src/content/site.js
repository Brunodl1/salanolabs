/* ==========================================================================
   SALANO LABS — SITE CONTENT
   --------------------------------------------------------------------------
   Every word, link, number and image path on the site lives in this file.
   Edit here and the page updates — you never need to open a component.

   ⚠️  ANYTHING MARKED  [PLACEHOLDER]  IS INVENTED AND MUST BE REPLACED
       WITH REAL NUMBERS BEFORE THIS SITE GOES LIVE.
   ========================================================================== */

/* --------------------------------------------------------------------------
   BOOKING
   The calendar is embedded directly in the page, so nobody has to leave the
   site to book. BOOKING_URL is the Calendly event the embed loads.
   BOOKING_ANCHOR is where every button on the site scrolls to.
   -------------------------------------------------------------------------- */
export const BOOKING_URL = "https://calendly.com/wayne-g-tobacco/1-on-1-discovery-call";
export const BOOKING_ANCHOR = "#book";

export const site = {
  /* ------------------------------------------------------------------ BRAND */
  brand: {
    name: "Salano Labs",
    legalName: "Salano Labs LLC",
    tagline:
      "Performance marketing for e-commerce brands ready to scale past their ceiling.",
    // Drop your logo files in public/assets/logo/ and point these at them.
    logo: "/assets/logo/salano-logo.png",
    favicon: "/assets/logo/favicon.png",
  },

  /* -------------------------------------------------------------------- NAV */
  nav: {
    links: [
      { label: "Results", href: "#results" },
      { label: "Proof", href: "#proof" },
      { label: "What We Do", href: "#services" },
      { label: "Process", href: "#process" },
    ],
    cta: "Book A Call",
  },

  /* ------------------------------------------------------------------- HERO */
  hero: {
    eyebrow: "Shopify only · 4 brands per quarter",
    // Split across lines so you control where the headline breaks. The
    // second line is the one rendered in the accent colour.
    // U+2060 word joiner after the en dash: invisible, but stops the
    // number range breaking across two lines.
    headline: ["Doing $1–⁠2k/Month?", "We Get You To $10k."],
    subhead:
      "In-house team to help you scale to 10k/m while you relax. Most brands get there in under 30 days.",
    // Optional bold tail on the subhead; empty means nothing is appended.
    kicker: "",
    cta: "Apply For A Growth Audit",
    ctaNote: "90 days · Half your fee back when we hit the number",
  },

  /* ------------------------------------------------------------------ STATS
     [PLACEHOLDER] — swap in your real figures.
     `value` counts up on scroll. `prefix` / `suffix` wrap the number.       */
  stats: [
    { value: 12, prefix: "$", suffix: "M+", label: "Tracked Online Sales" },
    { value: 4.6, suffix: "x", label: "Average ROAS", decimals: 1 },
    { value: 40, suffix: "+", label: "Brands Scaled" },
  ],

  /* ----------------------------------------------------------- CASE STUDIES
     Clients are kept anonymous: no brand name, no social handle. Only the
     result, the story and the numbers.

     [PLACEHOLDER] — the headlines, descriptions and result figures below
     are invented and still need replacing with real ones.

     Each card carries a three-slide carousel selected by pills under the
     image: Founder, Shopify, then SMS or Ads. `pill` is the button label.

     The client's message is separate. It lives under the description as a
     peek that opens the full screenshot in the lightbox, because these are
     tall phone screenshots and no landscape frame shows them well.          */
  caseStudies: {
    title: "Real Results From Real Brands",
    subtitle: "Brands that were stuck, now scaling profitably across every channel.",
    items: [
      {
        headline: "$76K On Drop Day",
        slides: [
          {
            src: "/assets/case-studies/client-one-person.webp",
            alt: "Founder photo",
            pill: "Founder",
            aspect: 1.6,
          },
          {
            src: "/assets/case-studies/client-one-shopify.webp",
            alt: "Shopify revenue on drop day",
            pill: "Shopify",
            aspect: 1.811,
          },
          {
            src: "/assets/case-studies/client-one-sms.webp",
            alt: "SMS campaign results",
            pill: "SMS",
            aspect: 2.033,
          },
        ],
        // Sits under the description. A wide message is shown in full; a
        // tall one is shown as a peek, since no card-width frame does a
        // 9:16 screenshot justice. Either way it opens in the lightbox.
        message: {
          src: "/assets/case-studies/client-one-message.webp",
          aspect: 2.157,
          label: "Message from the founder",
          quote: "\u201cI honestly don't know what to say\u2026 I'm now able to cover mum's treatment.\u201d",
        },
        description:
          "A handbag brand with small SMS list. We grew it a lot, fixed the flows, and spent 2 weeks before the drop getting people excited. First hour beat her whole previous year.",
        results: [
          "$76K in a day",
          "SMS drove 89% of drop-day revenue",
          "26,672 sms sent at 59.2x ROI",
        ],
      },
      {
        headline: "$1K To $14K Months",
        slides: [
          {
            src: "/assets/case-studies/client-two-person.webp",
            alt: "Founder photo",
            pill: "Founder",
            aspect: 1.6,
          },
          {
            src: "/assets/case-studies/client-two-shopify.webp",
            alt: "Shopify revenue over 30 days",
            pill: "Shopify",
            aspect: 1.969,
          },
          {
            src: "/assets/case-studies/client-two-ads.webp",
            alt: "Ads manager results",
            pill: "Ads",
            aspect: 1.978,
          },
        ],
        // Sits under the description. A wide message is shown in full; a
        // tall one is shown as a peek, since no card-width frame does a
        // 9:16 screenshot justice. Either way it opens in the lightbox.
        message: {
          src: "/assets/case-studies/client-two-message.webp",
          aspect: 2.161,
          label: "Message from the founder",
          quote: "\u201cbro i just checked the numbers wtf lol. my best month ever looks like nothing now.\u201d",
        },
        description:
          "His best month ever was $1K. We rebuilt the ad account around a few angles, redesigned the site, and sharpened the offer. Month two just closed at $14,305.",
        results: [
          "106% growth month over month",
          "5.21 ROAS on the top campaign",
          "$14,305 in the last 30 days",
        ],
      },
      {
        headline: "Step By Step To $74K",
        slides: [
          {
            src: "/assets/case-studies/client-three-person.webp",
            alt: "Founders on shipping day",
            pill: "Founder",
            aspect: 1.6,
          },
          {
            src: "/assets/case-studies/client-three-shopify.webp",
            alt: "Shopify revenue over 30 days",
            pill: "Shopify",
            aspect: 1.959,
          },
          {
            src: "/assets/case-studies/client-three-ads.webp",
            alt: "Ads manager results",
            pill: "Ads",
            aspect: 1.957,
          },
        ],
        // Sits under the description. A wide message is shown in full; a
        // tall one is shown as a peek, since no card-width frame does a
        // 9:16 screenshot justice. Either way it opens in the lightbox.
        message: {
          src: "/assets/case-studies/client-three-message.webp",
          aspect: 0.563,
          label: "Message from the founders",
          quote: "\u201call this thanks to you guys, living the dream with my boy\u201d",
        },
        description:
          "Two friends who went all in on this. We cleaned up the ad account, cut the dead spend, and got customers coming in at $16.59 a pop. They've been holding $74K months since.",
        results: [
          "$74,476 in the last 30 days",
          "$16.59 per customer",
          "Best campaign running at 20x",
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ PROOF GRID
     A wall of social proof: Shopify revenue graphs, ads manager dashboards,
     client screenshots, happy customers — whatever you have.

     Drop images in public/assets/proof/ and list them here. Add or remove
     entries freely; the grid reflows on its own. Images are center-cropped
     to a square, so anything at any aspect ratio will look right.

     `caption` is optional — leave it off for a clean image tile.           */
  proof: {
    eyebrow: "Receipts",
    title: "The Proof, Not The Promises",
    subtitle: "Real dashboards, real revenue, real accounts we run.",
    /* Raw client dashboards, kept at full resolution so the figures stay
       legible. No captions: the screenshots speak for themselves.

       ⚠️  The screenshots may show store names in the Shopify and Meta
       chrome. Blur those before launch if clients must stay anonymous.     */
    items: [
      { image: "/assets/proof/proof-01.webp" },
      { image: "/assets/proof/proof-02.webp" },
      { image: "/assets/proof/proof-03.webp" },
      { image: "/assets/proof/proof-04.webp" },
      { image: "/assets/proof/proof-05.webp" },
      { image: "/assets/proof/proof-06.webp" },
      { image: "/assets/proof/proof-07.webp" },
      { image: "/assets/proof/proof-08.webp" },
    ],
  },

  /* ----------------------------------------------------------- HERO GALLERY
     The two scrolling columns beside the hero headline on desktop.
     Drop images in public/assets/hero/ and list them below. Keep the two
     columns roughly even in length so the loop reads evenly.

     Portrait crops (4:5) work best — brand photography, product shots,
     campaign creative.                                                     */
  heroGallery: {
    /* The two scrolling columns beside the hero headline.

       Real brand photography, resized to 800x1000 WebP for fast loading.
       The columns scroll in opposite directions at different speeds, and
       each one loops its own list, so they do not need to be equal length.
       Add or remove paths freely.                                          */
    // full-house and shipping-day are both "packed orders everywhere" shots,
    // so they sit in different columns rather than near each other.
    columnOne: [
      "/assets/hero/beach-club.webp",
      "/assets/hero/desert-quad.webp",
      "/assets/hero/full-house.webp",
      "/assets/hero/muscle-car.webp",
      "/assets/hero/hotel-mirror.webp",
      "/assets/hero/skyline-pool.webp",
    ],
    columnTwo: [
      "/assets/hero/pyramids.webp",
      "/assets/hero/rooftop-lunch.webp",
      "/assets/hero/shipping-day.webp",
      "/assets/hero/snowboard-alps.webp",
      "/assets/hero/kyoto-temple.webp",
    ],
  },

  /* --------------------------------------------------------------- SERVICES
     What's actually in the engagement.                                      */
  services: {
    eyebrow: "The Engagement",
    title: "Everything That Moves Revenue. Handled.",
    subtitle: "One team running the channels that compound, not four freelancers pointing at each other.",
    // `icon` picks the mark drawn beside each service. Available icons live
    // in src/components/ServiceIcon.jsx: megaphone, inbox, cart, chart.
    items: [
      {
        number: "01",
        icon: "megaphone",
        title: "Paid Advertising",
        description:
          "Full strategy and daily management of your Meta ad account, plus a creative testing system that keeps finding new winning angles.",
        points: [
          "Account structure and scaling strategy",
          "Continuous creative testing",
          "Audience and offer iteration",
        ],
      },
      {
        number: "02",
        icon: "inbox",
        title: "Email & SMS",
        description:
          "We run the retention side properly. The automated flows that earn while you sleep, and the campaign calendar that makes every drop land harder.",
        points: [
          "Core automation flows built and optimized",
          "Campaign and drop calendar",
          "List growth and segmentation",
        ],
      },
      {
        number: "03",
        icon: "cart",
        title: "Conversion Optimization",
        description:
          "Traffic is wasted on a store that does not convert. We work the offer, the pricing and the checkout path until the numbers move.",
        points: [
          "Offer and pricing strategy",
          "Landing page and PDP improvements",
          "Upsells, bundles and post-purchase",
        ],
      },
      {
        number: "04",
        icon: "chart",
        title: "Tracking & Reporting",
        description:
          "Proper attribution from day one, so you know what is actually working. A written update every week and a full report every month.",
        points: [
          "Attribution and tracking setup",
          "Weekly written performance updates",
          "Monthly report on spend and revenue",
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- PROCESS
     The shape of the 90-day engagement.                                     */
  process: {
    eyebrow: "How It Works",
    title: "A 90-Day Engagement, Not A Retainer Treadmill",
    subtitle: "One focused sprint with a defined start, end and target.",
    steps: [
      {
        step: "Step 01",
        title: "Audit & Onboarding",
        description:
          "We audit the account, the store and the offer, then build the strategy and configure every platform.",
      },
      {
        step: "Step 02",
        title: "Launch",
        description:
          "Campaigns go live within two weeks. Flows are built, tracking is connected, first sale get in.",
      },
      {
        step: "Step 03",
        title: "The 90-Day Performance Period",
        description:
          "Ninety days of active management against an agreed target, with direct access to a dedicated team running your account.",
      },
      {
        step: "Step 04",
        title: "Scale",
        description:
          "What worked gets documented and scaled. You walk away owning a proven system.",
      },
    ],
  },

  /* ------------------------------------------------------------------- WHY */
  why: {
    eyebrow: "Why Salano",
    title: "Tired Of Agencies? You Should Be.",
    // An array renders as separate paragraphs.
    subtitle: [
      "Most sell you a strategist and hand you a VA that can't make it happen.",
      "Here, you will get three in-house specialists dedicated to your growth.",
    ],
    pillars: [
      {
        title: "Done-For-You Growth",
        description:
          "We handle the ads, the creative testing, the flows and the offer. You run the brand.",
      },
      {
        title: "Full-Funnel, Not Just Ads",
        description:
          "Paid, email, SMS and conversion run by one team, so the channels compound instead of competing.",
      },
      {
        title: "Partnership-Driven",
        description:
          "You work directly with the strategist running your account. Weekly updates, monthly reports.",
      },
    ],
  },

  /* -------------------------------------------------------------- FINAL CTA */
  finalCta: {
    eyebrow: "Ready For Real Results?",
    title: "You've Built The Brand. We'll Build The Scale.",
    subtitle: "Pick a time below and we'll show you what's capping your revenue right now.",
    note: "Free · 45 minutes · No pitch if you're not a fit",
  },

  /* ----------------------------------------------------------------- FOOTER */
  footer: {
    blurb: "We help e-commerce brands unlock consistent, profitable growth through advertising, retention systems and conversion strategy.",
    columns: [
      {
        title: "Policies",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Salano Labs LLC · Performance Marketing for E-commerce Brands`,
  },

  /* --------------------------------------------------------- BRAND LOGO ROW
     Client logos in the "trusted by" strip under the hero.

     `heightClass` sets each logo's height individually. Logos are balanced
     optically, not to one uniform height: a near-square mark like Paw
     Origins needs to sit taller than a long lockup like Sasillia to read at
     the same visual weight. Adjust these if you swap a file.               */
  brandLogos: [
    { name: "Diet Smoke", image: "/assets/brands/diet-smoke.svg", heightClass: "h-7 sm:h-8" },
    { name: "Escape", image: "/assets/brands/escape.svg", heightClass: "h-4 sm:h-5" },
    { name: "Paw Origins", image: "/assets/brands/paw-origins.png", heightClass: "h-9 sm:h-10" },
    {
      name: "Centurion Labz",
      image: "/assets/brands/centurion-labz.png",
      heightClass: "h-5 sm:h-6",
    },
    { name: "Sasillia", image: "/assets/brands/sasillia.png", heightClass: "h-3.5 sm:h-4" },
  ],
};

export default site;
