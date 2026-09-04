/* ==========================================================================
   SALANO LABS — SITE CONTENT
   --------------------------------------------------------------------------
   Every word, link, number and image path on the site lives in this file.
   Edit here and the page updates — you never need to open a component.

   ⚠️  ANYTHING MARKED  [PLACEHOLDER]  IS INVENTED AND MUST BE REPLACED
       WITH REAL NUMBERS BEFORE THIS SITE GOES LIVE.
   ========================================================================== */

/* --------------------------------------------------------------------------
   BOOKING LINK
   Every "book / apply" button on the site points here. Change this one line
   and all of them update. Paste your Cal.com or Calendly URL below.
   -------------------------------------------------------------------------- */
export const BOOKING_URL = "https://cal.com/your-handle/growth-audit"; // TODO: replace with the real booking link

export const site = {
  /* ------------------------------------------------------------------ BRAND */
  brand: {
    name: "Salano Labs",
    legalName: "Salano Labs LLC",
    tagline:
      "Performance marketing for e-commerce brands ready to scale past their ceiling.",
    // Drop your logo files in public/assets/logo/ and point these at them.
    logo: "/assets/logo/salano-logo.svg",
    logoMark: "/assets/logo/salano-mark.svg",
  },

  /* -------------------------------------------------------------------- NAV */
  nav: {
    links: [
      { label: "Results", href: "#results" },
      { label: "What We Do", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Who It's For", href: "#fit" },
    ],
    cta: "Apply For A Growth Audit",
  },

  /* ------------------------------------------------------------------- HERO */
  hero: {
    eyebrow: "Trusted by growing e-commerce brands",
    // Split across lines so you control where the headline breaks.
    headline: ["Stuck Around", "$20k/Month?"],
    subhead:
      "We help e-commerce brands break through their revenue ceiling with paid ads, email and SMS systems, and conversion strategy that actually compounds.",
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
     Replace with real client results and drop the matching image in
     public/assets/case-studies/.                                            */
  caseStudies: {
    title: "Real Results From Real Brands",
    subtitle:
      "Brands that were stuck before, now scaling profitably across paid, email and SMS.",
    items: [
      {
        brand: "[CLIENT ONE]",
        headline: "$53,000 On Drop Day",
        handle: "@clientone",
        handleUrl: "#",
        image: "/assets/case-studies/client-one.jpg",
        imageAlt: "[PLACEHOLDER] Client One campaign creative",
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
        image: "/assets/case-studies/client-two.jpg",
        imageAlt: "[PLACEHOLDER] Client Two campaign creative",
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
        image: "/assets/case-studies/client-three.jpg",
        imageAlt: "[PLACEHOLDER] Client Three campaign creative",
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

  /* --------------------------------------------------------------- SERVICES
     What's actually in the engagement.                                      */
  services: {
    eyebrow: "The Engagement",
    title: "Everything That Moves Revenue. Handled.",
    subtitle:
      "One team running the channels that compound — not four freelancers pointing at each other.",
    items: [
      {
        number: "01",
        title: "Paid Advertising",
        description:
          "Full strategy and day-to-day management of your Meta ad account, plus a structured creative testing system that keeps finding new winning angles instead of riding one until it dies.",
        points: [
          "Account structure and scaling strategy",
          "Continuous creative testing",
          "Audience and offer iteration",
        ],
      },
      {
        number: "02",
        title: "Email & SMS",
        description:
          "We build and run the retention side properly — the automated flows that earn money while you sleep, and the campaign calendar that makes every drop land harder.",
        points: [
          "Core automation flows built and optimized",
          "Campaign and drop calendar",
          "List growth and segmentation",
        ],
      },
      {
        number: "03",
        title: "Conversion Optimization",
        description:
          "Traffic is wasted on a store that doesn't convert. We work on the offer, the pricing, the product presentation and the checkout path until the numbers move.",
        points: [
          "Offer and pricing strategy",
          "Landing page and PDP improvements",
          "Upsells, bundles and post-purchase",
        ],
      },
      {
        number: "04",
        title: "Tracking & Reporting",
        description:
          "Proper attribution set up from day one, so you know what's actually working. A written update every week and a full performance report every month.",
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
    subtitle:
      "One focused sprint with a defined start, a defined end, and a defined target.",
    steps: [
      {
        step: "Step 01",
        title: "Audit & Onboarding",
        description:
          "We audit the account, the store and the offer, then build the strategy and configure every platform. You get a clear picture of what's actually holding the brand back.",
      },
      {
        step: "Step 02",
        title: "Launch",
        description:
          "Campaigns go live within two weeks of kickoff. Flows are built, tracking is connected, and the first creative tests are already running.",
      },
      {
        step: "Step 03",
        title: "The 90-Day Performance Period",
        description:
          "Ninety days of active management against an agreed revenue target. Weekly written updates, monthly reports, and direct access to the strategist running your account.",
      },
      {
        step: "Step 04",
        title: "Scale",
        description:
          "What worked gets documented and scaled. You either continue with a proven system or you walk away owning one.",
      },
    ],
  },

  /* -------------------------------------------------------------------- FIT */
  fit: {
    eyebrow: "Qualification",
    title: "Who This Is For",
    intro: "We work with brands that:",
    criteria: [
      "Are generating $20k+ per month in revenue",
      "Are spending at least $5k per month on paid ads",
      "Have proven products and real market fit",
      "Want a long-term growth partner, not a freelancer",
    ],
    exclusion:
      "Not for early-stage brands, pre-revenue startups, or anyone shopping for cheap ad management.",
    cta: "Request My Brand Audit",
  },

  /* ------------------------------------------------------------------- WHY */
  why: {
    eyebrow: "Why Salano",
    title: "Tired Of Agencies That Don't Deliver?",
    subtitle:
      "No VAs running your account. No guesswork. Real strategy, real operators, real reporting.",
    pillars: [
      {
        title: "Done-For-You Growth",
        description:
          "We handle the ads, the creative testing, the flows and the offer. You run the brand.",
      },
      {
        title: "Full-Funnel, Not Just Ads",
        description:
          "Paid, email, SMS and conversion all run by one team, so the channels compound instead of competing.",
      },
      {
        title: "Partnership-Driven",
        description:
          "You work directly with the strategist running your account. Weekly updates, monthly reports, no account-manager telephone game.",
      },
    ],
  },

  /* -------------------------------------------------------------- FINAL CTA */
  finalCta: {
    eyebrow: "Ready For Real Results?",
    title: "You've Built The Brand. We'll Build The Scale.",
    subtitle:
      "Book a free growth audit and we'll show you exactly what's capping your revenue right now.",
    cta: "Book My Audit Now",
    note: "Free · 30 minutes · No pitch if you're not a fit",
  },

  /* ----------------------------------------------------------------- FOOTER */
  footer: {
    blurb:
      "We help e-commerce brands unlock consistent, profitable growth through world-class advertising, retention systems and conversion strategy.",
    columns: [
      {
        title: "Policies",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ],
      },
      {
        title: "Social",
        links: [
          // TODO: replace with the real Instagram handle
          { label: "Instagram", href: "https://instagram.com/", external: true },
        ],
      },
    ],
    // TODO: replace with the real business address and contact email
    address: "[BUSINESS ADDRESS]",
    email: "hello@salanolabs.com",
    copyright: `© ${new Date().getFullYear()} Salano Labs LLC — Performance Marketing for E-commerce Brands`,
  },

  /* --------------------------------------------------------- BRAND LOGO ROW
     Small logos in the "trusted by" strip under the hero.
     Drop files in public/assets/brands/ and list them here.                  */
  brandLogos: [
    { name: "[BRAND 1]", image: "/assets/brands/brand-1.svg" },
    { name: "[BRAND 2]", image: "/assets/brands/brand-2.svg" },
    { name: "[BRAND 3]", image: "/assets/brands/brand-3.svg" },
    { name: "[BRAND 4]", image: "/assets/brands/brand-4.svg" },
    { name: "[BRAND 5]", image: "/assets/brands/brand-5.svg" },
  ],
};

export default site;
