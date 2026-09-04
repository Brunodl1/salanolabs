import { useState } from "react";
import { site } from "../content/site";

/**
 * The Salano Labs lockup.
 *
 * If public/assets/logo/salano-logo.svg exists it is used. Until then this
 * renders a typographic stand-in that matches the real mark: heavy wordmark,
 * blue rule, spaced-out "LABS" underneath.
 */
export default function Logo({ className = "", size = "md" }) {
  const [failed, setFailed] = useState(false);

  const sizes = {
    sm: { word: "text-lg", labs: "text-[0.5rem]", gap: "gap-[3px]" },
    md: { word: "text-xl", labs: "text-[0.55rem]", gap: "gap-[4px]" },
    lg: { word: "text-3xl", labs: "text-[0.7rem]", gap: "gap-[6px]" },
  };
  const s = sizes[size];

  if (site.brand.logo && !failed) {
    return (
      <img
        src={site.brand.logo}
        alt={site.brand.name}
        onError={() => setFailed(true)}
        className={`h-9 w-auto ${className}`}
      />
    );
  }

  return (
    <span className={`inline-flex flex-col ${s.gap} leading-none ${className}`}>
      <span className={`font-display font-extrabold tracking-tight ${s.word}`}>SALANO</span>
      <span aria-hidden="true" className="h-[2px] w-full bg-accent" />
      <span
        className={`font-display font-light tracking-[0.38em] text-text ${s.labs}`}
      >
        LABS
      </span>
    </span>
  );
}
