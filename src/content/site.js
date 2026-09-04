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
    eyebrow: "Trusted by growing e-commerce brands",
    // Split across lines so you control where the headline breaks.
    headline: ["Stuck Around", "$5k/Month?"],
    subhead:
      "You proved the product sells. We build the ads, email, SMS and conversion systems that turn a few thousand a month into a real business.",
    kicker: "Zero guesswork.",
    cta: "Apply For A Growth Audit",
    ctaNote: "90-day engagement · Limited to 4 new brands per quarter",
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
     [PLACEHOLDER] — every brand, number and quote below is invented.

     Each card carries a two-slide carousel: `slides[0]` is the person and
     `slides[1]` is the proof (a revenue graph, dashboard, or screenshot).
     Replace both files in public/assets/case-studies/.                      */
  caseStudies: {
    title: "Real Results From Real Brands",
    subtitle: "Brands that were stuck, now scaling profitably across every channel.",
    items: [
      {
        brand: "[CLIENT ONE]",
        headline: "$53,000 On Drop Day",
        handle: "@clientone",
        handleUrl: "#",
        // Two slides per card: the person, then the proof.
        slides: [
          {
            src: "/assets/case-studies/client-one-person.jpg",
            alt: "[PLACEHOLDER] founder photo",
            label: "The founder",
          },
          {
            src: "/assets/case-studies/client-one-result.jpg",
            alt: "[PLACEHOLDER] result screenshot",
            label: "The result",
          },
        ],
        description:
          "Built the SMS list from scratch, rebuilt the automation flows, and sharpened the offer. Their next drop did more in an hour than the previous month.",
        results: [
          "$53K+ generated in under an hour",
          "80% of drop revenue from SMS",
          "Higher AOV and repeat purchase rate",
        ],
      },
      {
        brand: "[CLIENT TWO]",
        headline: "$100k+ In The First 90 Days",
        handle: "@clienttwo",
        handleUrl: "#",
        // Two slides per card: the person, then the proof.
        slides: [
          {
            src: "/assets/case-studies/client-two-person.jpg",
            alt: "[PLACEHOLDER] founder photo",
            label: "The founder",
          },
          {
            src: "/assets/case-studies/client-two-result.jpg",
            alt: "[PLACEHOLDER] result screenshot",
            label: "The result",
          },
        ],
        description:
          "They were living drop to drop with no predictable revenue. We rebuilt the funnel, restructured the ad account, and turned it into a system that prints profit between launches.",
        results: [
          "5.3x average ROAS",
          "42% lower cost per purchase",
          "$100k+ gross revenue in 90 days",
        ],
      },
      {
        brand: "[CLIENT THREE]",
        headline: "$61k In 35 Days",
        handle: "@clientthree",
        handleUrl: "#",
        // Two slides per card: the person, then the proof.
        slides: [
          {
            src: "/assets/case-studies/client-three-person.jpg",
            alt: "[PLACEHOLDER] founder photo",
            label: "The founder",
          },
          {
            src: "/assets/case-studies/client-three-result.jpg",
            alt: "[PLACEHOLDER] result screenshot",
            label: "The result",
          },
        ],
        description:
          "A brand new store with no history. Our creative testing system found the winning angle in week two and we scaled it hard from there.",
        results: [
          "$74K in the best 7-day window",
          "5.2x ROAS at scale",
          "3.2% site-wide conversion rate",
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
    subtitle: "Real dashboards, real revenue, real messages from the brands we run.",
    items: [
      { image: "/assets/proof/proof-01.jpg", caption: "Shopify revenue" },
      { image: "/assets/proof/proof-02.jpg", caption: "Meta Ads Manager" },
      { image: "/assets/proof/proof-03.jpg", caption: "Klaviyo flows" },
      { image: "/assets/proof/proof-04.jpg", caption: "Client message" },
      { image: "/assets/proof/proof-05.jpg", caption: "Drop day" },
      { image: "/assets/proof/proof-06.jpg", caption: "ROAS at scale" },
      { image: "/assets/proof/proof-07.jpg", caption: "Store sessions" },
      { image: "/assets/proof/proof-08.jpg", caption: "SMS campaign" },
      { image: "/assets/proof/proof-09.jpg", caption: "Repeat customers" },
      { image: "/assets/proof/proof-10.jpg", caption: "Best month yet" },
    ],
  },

  /* ----------------------------------------------------------- HERO GALLERY
     The two scrolling columns beside the hero headline on desktop.
     Drop images in public/assets/hero/ and list them below. Keep the two
     columns roughly even in length so the loop reads evenly.

     Portrait crops (4:5) work best — brand photography, product shots,
     campaign creative.                                                     */
  heroGallery: {
    columnOne: [
      "/assets/hero/hero-01.jpg",
      "/assets/hero/hero-02.jpg",
      "/assets/hero/hero-03.jpg",
      "/assets/hero/hero-04.jpg",
    ],
    columnTwo: [
      "/assets/hero/hero-05.jpg",
      "/assets/hero/hero-06.jpg",
      "/assets/hero/hero-07.jpg",
      "/assets/hero/hero-08.jpg",
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
          "Campaigns go live within two weeks. Flows are built, tracking is connected, first tests running.",
      },
      {
        step: "Step 03",
        title: "The 90-Day Performance Period",
        description:
          "Ninety days of active management against an agreed target, with direct access to the strategist running your account.",
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
    title: "Tired Of Agencies That Don't Deliver?",
    subtitle: "No VAs on your account. No guesswork. Real strategy, real operators.",
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
     Small logos in the "trusted by" strip under the hero.
     [PLACEHOLDER] — these are invented brand names. Replace the files in
     public/assets/brands/ and the names here with real clients.              */
  brandLogos: [
    { name: "NORTHSIDE", image: "/assets/brands/brand-1.png" },
    { name: "ATELIER 9", image: "/assets/brands/brand-2.png" },
    { name: "VANTA CO", image: "/assets/brands/brand-3.png" },
    { name: "RUNWELL", image: "/assets/brands/brand-4.png" },
    { name: "OKAPI", image: "/assets/brands/brand-5.png" },
  ],
};

export default site;
