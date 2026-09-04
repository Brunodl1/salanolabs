/**
 * Line-art marks for the services section.
 *
 * Each service in site.js names one of these with its `icon` key. They're
 * drawn on a 24x24 grid with a consistent 1.5 stroke so they read as one set.
 * To add another, drop a new entry in `paths` and use its key in site.js.
 */
const paths = {
  // Paid advertising — a megaphone pushing reach outward.
  megaphone: (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l4.5 3.5a.6.6 0 0 0 1-.47V6.97a.6.6 0 0 0-1-.47L6 10H4a1 1 0 0 0-1 1Z" />
      <path d="M14.5 9.5a3.5 3.5 0 0 1 0 5" />
      <path d="M17.5 7a7 7 0 0 1 0 10" />
    </>
  ),

  // Email & SMS — an open envelope.
  inbox: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 7.6 5.4a1.6 1.6 0 0 0 1.8 0L20.5 7" />
    </>
  ),

  // Conversion optimization — a cart with an upward tick.
  cart: (
    <>
      <path d="M2.5 3h1.8a1 1 0 0 1 .97.77L6 8m0 0 1.4 6.1a1 1 0 0 0 .98.77h8.1a1 1 0 0 0 .97-.75L19 8H6Z" />
      <circle cx="9" cy="19.5" r="1.3" />
      <circle cx="16.5" cy="19.5" r="1.3" />
      <path d="M10.5 12.5 12.5 10l2 2 2.5-3" />
    </>
  ),

  // Tracking & reporting — bars with a trend line.
  chart: (
    <>
      <path d="M3 21h18" />
      <path d="M6 21v-6" />
      <path d="M11 21V9" />
      <path d="M16 21v-9" />
      <path d="M21 21V5" />
      <path d="m5 10 5-4 4 2.5L20 3" />
    </>
  ),
};

export default function ServiceIcon({ name, className = "" }) {
  const glyph = paths[name];
  if (!glyph) return null;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {glyph}
    </svg>
  );
}
