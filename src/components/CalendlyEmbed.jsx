import { useEffect, useRef, useState } from "react";

const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Calendly's inline booking widget, themed to match the site.
 *
 * The visitor books without ever leaving the page. Calendly's script is
 * loaded once and shared: if another embed already added it, we reuse it
 * rather than adding a second copy.
 *
 * Colors are passed to Calendly as query params so the iframe renders dark
 * instead of flashing a white panel in the middle of a black page.
 */
export default function CalendlyEmbed({ url, className = "h-[1180px] sm:h-[900px]" }) {
  const container = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const themed = new URL(url);
    themed.searchParams.set("hide_gdpr_banner", "1");
    themed.searchParams.set("background_color", "0d0d10");
    themed.searchParams.set("text_color", "ffffff");
    themed.searchParams.set("primary_color", "3b3bff");

    const init = () => {
      if (!window.Calendly || !container.current) return;
      // Clear first: React StrictMode mounts effects twice in development,
      // and Calendly would otherwise append a second iframe.
      container.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: themed.toString(),
        parentElement: container.current,
      });
    };

    if (window.Calendly) {
      init();
      return;
    }

    let script = document.querySelector(`script[src="${WIDGET_SRC}"]`);
    const isNew = !script;

    if (isNew) {
      script = document.createElement("script");
      script.src = WIDGET_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    const onError = () => setFailed(true);
    script.addEventListener("load", init);
    script.addEventListener("error", onError);

    return () => {
      script.removeEventListener("load", init);
      script.removeEventListener("error", onError);
    };
  }, [url]);

  // If Calendly can't load (blocked script, offline), don't leave a blank
  // hole where the calendar should be — give them a way through.
  if (failed) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-4 rounded-card border border-line bg-surface p-10 text-center"
        style={{ minHeight: 320 }}
      >
        <p className="text-base text-muted">The calendar couldn&apos;t load.</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display font-semibold text-accent underline underline-offset-4 hover:text-accent-hover"
        >
          Open the booking page instead
        </a>
      </div>
    );
  }

  return (
    // Deliberately NOT class "calendly-inline-widget": that class makes
    // widget.js auto-initialize on load, and it reads a data-url attribute
    // we don't set, which throws and aborts the whole script. We drive it
    // through initInlineWidget above instead.
    <div
      ref={container}
      className={`overflow-hidden rounded-card border border-line bg-surface ${className}`}
      style={{ minWidth: 320 }}
    />
  );
}
