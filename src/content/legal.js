/* ==========================================================================
   LEGAL PAGE CONTENT
   --------------------------------------------------------------------------
   ⚠️  [REVIEW BEFORE LAUNCH]
   The text below is generic boilerplate written as a starting point. It is
   NOT legal advice and has not been reviewed by a lawyer. Have counsel review
   and adapt both documents before this site goes live, and fill in every
   bracketed placeholder.
   ========================================================================== */

const CONTACT_EMAIL = "hello@salanolabs.com"; // TODO: real contact email
const LAST_UPDATED = "September 2026"; // TODO: update when the policy changes

export const privacy = {
  title: "Privacy Policy",
  updated: LAST_UPDATED,
  intro: `This Privacy Policy explains how Salano Labs LLC ("Salano Labs", "we", "us") collects, uses and protects information when you visit our website or enquire about our services.`,
  sections: [
    {
      heading: "Information We Collect",
      body: [
        "We collect information you provide directly to us — for example your name, email address, business name and website when you book an audit or contact us.",
        "We also collect limited technical information automatically, such as your browser type, device type, referring page and general location, through standard web analytics.",
      ],
    },
    {
      heading: "How We Use Information",
      body: [
        "We use the information we collect to respond to enquiries, deliver and improve our services, communicate about your engagement, and understand how our website is used.",
        "We do not sell your personal information to third parties.",
      ],
    },
    {
      heading: "Cookies & Analytics",
      body: [
        "Our website may use cookies and similar technologies to understand traffic and improve the experience. You can disable cookies in your browser settings, though some parts of the site may not work as intended.",
      ],
    },
    {
      heading: "Third-Party Services",
      body: [
        "We use third-party providers for scheduling, analytics, email and advertising. These providers process data under their own privacy policies. [REVIEW: list the specific providers you use.]",
      ],
    },
    {
      heading: "Data Retention",
      body: [
        "We retain personal information only as long as necessary for the purposes described in this policy, or as required by law.",
      ],
    },
    {
      heading: "Your Rights",
      body: [
        "Depending on where you live, you may have the right to access, correct or delete the personal information we hold about you, or to object to certain processing. To make a request, contact us at the address below.",
      ],
    },
    {
      heading: "Contact",
      body: [
        `Questions about this policy can be sent to ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const terms = {
  title: "Terms of Service",
  updated: LAST_UPDATED,
  intro: `These Terms of Service govern your use of the Salano Labs website. Client engagements are governed separately by a signed written agreement, which takes precedence over anything on this website.`,
  sections: [
    {
      heading: "Use of This Website",
      body: [
        "You may use this website for lawful purposes only. You agree not to use it in any way that damages, disables or impairs the site, or interferes with anyone else's use of it.",
      ],
    },
    {
      heading: "No Guarantee Of Results",
      body: [
        "Any results, figures or case studies shown on this website describe outcomes for specific clients under specific conditions. They are not a promise, projection or guarantee of the results you will achieve.",
        "Marketing performance depends on factors outside our control, including product quality and market fit, pricing and offer strength, market demand and seasonality, competition, advertising platform changes, website performance, and inventory and fulfilment capability.",
      ],
    },
    {
      heading: "Services & Engagements",
      body: [
        "Nothing on this website constitutes an offer to contract. Services, scope, fees, timelines and responsibilities are defined exclusively in the written agreement signed by both parties before work begins.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        "All content on this website — including text, graphics, logos and the Salano Labs name and marks — is our property or used with permission, and may not be copied or reproduced without written consent.",
      ],
    },
    {
      heading: "Limitation Of Liability",
      body: [
        "To the maximum extent permitted by law, Salano Labs is not liable for any indirect, incidental or consequential damages arising from your use of this website.",
      ],
    },
    {
      heading: "Changes To These Terms",
      body: [
        "We may update these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about these terms can be sent to ${CONTACT_EMAIL}.`],
    },
  ],
};
