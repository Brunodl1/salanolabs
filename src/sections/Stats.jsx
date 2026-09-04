import { useEffect, useRef, useState } from "react";
import { site } from "../content/site";
import { Container } from "../components/ui";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Counts from 0 up to `value` once the element scrolls into view. */
function useCountUp(value, decimals = 0, duration = 1600) {
  // Anyone who asks for reduced motion starts on the final number instead.
  const [display, setDisplay] = useState(() => (prefersReducedMotion() ? value : 0));
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          // Ease-out cubic, so it decelerates into the final value.
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(value * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return [ref, display.toFixed(decimals)];
}

function Stat({ stat }) {
  const [ref, display] = useCountUp(stat.value, stat.decimals ?? 0);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 py-8 text-center sm:py-10"
    >
      <p className="font-display text-stat font-extrabold">
        {stat.prefix}
        {display}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted sm:text-sm sm:tracking-[0.14em]">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-line bg-surface/40">
      <Container>
        {/* Stacked on mobile with dividers between, three across from sm up. */}
        <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {site.stats.map((stat) => (
            <Stat key={stat.label} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
