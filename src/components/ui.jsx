import { BOOKING_ANCHOR } from "../content/site";

/* --------------------------------------------------------------- CONTAINER */

/** Centers content at the max page width defined by --container-page. */
export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-page px-6 sm:px-8 ${className}`}>{children}</div>
  );
}

/* ------------------------------------------------------------------ BUTTON */

/**
 * The site's call-to-action button.
 *
 * Defaults to BOOKING_ANCHOR, which scrolls down to the embedded calendar
 * rather than sending anyone off-site.
 */
export function Button({
  children,
  href = BOOKING_ANCHOR,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-pill font-display font-semibold tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover hover:shadow-[0_0_40px_-4px_var(--color-accent)] active:scale-[0.98]",
    outline:
      "border border-line bg-transparent text-text hover:border-accent hover:bg-accent-soft active:scale-[0.98]",
    ghost: "text-muted hover:text-text",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-[0.95rem]",
    lg: "px-9 py-4.5 text-base sm:text-lg",
  };

  const isExternal = href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ EYEBROW */

/** Small uppercase label that sits above a section heading. */
export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted ${className}`}
    >
      <span aria-hidden="true" className="h-px w-8 bg-accent" />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------ SECTION TITLE */

export function SectionHeading({ eyebrow, title, subtitle, align = "left", className = "" }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} gap-5 ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-section text-balance">{title}</h2>
      {subtitle &&
        // A subtitle may be a string or an array of paragraphs.
        (Array.isArray(subtitle) ? subtitle : [subtitle]).map((para) => (
          <p key={para} className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {para}
          </p>
        ))}
    </div>
  );
}

/* --------------------------------------------------------------- CHECK ITEM */

/** A green-check bullet, used in the result and criteria lists. */
export function CheckItem({ children, className = "" }) {
  return (
    <li className={`flex items-start gap-3 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="mt-0.5 h-5 w-5 shrink-0 text-success"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-base leading-relaxed text-muted">{children}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ SECTION */

/** A page section with consistent vertical rhythm and an anchor id. */
export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-section ${className}`}>
      {children}
    </section>
  );
}
