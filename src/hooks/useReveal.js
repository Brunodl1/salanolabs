import { useEffect, useRef } from "react";

/**
 * Reveals an element when it scrolls into view.
 *
 * Attach the returned ref to any element that also has the `reveal` class:
 *
 *   const ref = useReveal();
 *   <div ref={ref} className="reveal">…</div>
 *
 * The hook sets data-revealed="true" once, and theme.css handles the
 * transition. Elements stay revealed after the first trigger.
 *
 * @param {object}  options
 * @param {number}  options.threshold  How much must be visible (0–1).
 * @param {number}  options.delay      Stagger in ms, for lists.
 */
export function useReveal({ threshold = 0.15, delay = 0 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return ref;
}

export default useReveal;
