import { useCallback, useEffect, useState } from "react";
import Placeholder from "./Placeholder";

/**
 * A small image carousel for the case study cards.
 *
 * Built for two slides (the person, then the proof) but works with any
 * number. All slides sit in a flex track that slides horizontally, so every
 * image stays mounted and there's no flash when switching.
 *
 * Navigation: arrows on hover or focus, dots always, plus arrow keys and
 * horizontal swipe on touch.
 *
 * Auto-advance: when `active` is true, the carousel moves forward ONCE after
 * `startDelay`, then stops for good. It never wraps back on its own, so a
 * card that has turned over to the proof stays on the proof. Only a click,
 * key or swipe can move it back.
 *
 * Staggering `startDelay` across a row of cards makes them turn over as a
 * wave rather than in lockstep. The timer only runs while `active` is true,
 * pauses under the pointer, and never runs under prefers-reduced-motion.
 */
export default function CardCarousel({
  slides,
  aspect = "4/3",
  label = "Images",
  active = false,
  startDelay = 3000,
}) {
  const [index, setIndex] = useState(0);
  const [taken, setTaken] = useState(false); // visitor took control
  const [autoDone, setAutoDone] = useState(false); // the one auto-advance fired
  const [hovered, setHovered] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (next) => setIndex(((next % count) + count) % count),
    [count],
  );

  // Any deliberate navigation stops the auto-advance permanently, so the
  // carousel never yanks a slide away from someone driving it.
  const take = useCallback(
    (next) => {
      setTaken(true);
      go(next);
    },
    [go],
  );

  useEffect(() => {
    // Only runs while the card is on screen, and only until it has fired.
    if (!active || taken || autoDone || hovered || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setTimeout(() => {
      // Forward only, clamped to the last slide, so it never wraps around.
      setIndex((i) => Math.min(i + 1, count - 1));
      setAutoDone(true);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [active, taken, autoDone, hovered, count, startDelay]);

  // Swipe handling. We only act on a decisive horizontal drag.
  const [touchX, setTouchX] = useState(null);
  const onTouchStart = (e) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) take(index + (dx < 0 ? 1 : -1));
    setTouchX(null);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      take(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      take(index - 1);
    }
  };

  return (
    <div
      className="group/carousel relative overflow-hidden border-b border-line"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Slide track */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="w-full shrink-0"
            aria-hidden={i !== index}
          >
            <Placeholder
              src={slide.src}
              alt={slide.alt}
              label={slide.label}
              aspect={aspect}
              className="rounded-none border-0"
            />
          </div>
        ))}
      </div>

      {/* Current slide's label */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 p-4"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--color-bg) 85%, transparent), transparent)",
        }}
      >
        <span className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
          {slides[index].label}
        </span>
      </div>

      {/* Arrows. Hidden until hover or keyboard focus, and never on touch-only. */}
      {count > 1 && (
        <>
          <CarouselArrow
            direction="prev"
            onClick={() => take(index - 1)}
            label={`Previous image, ${label}`}
          />
          <CarouselArrow
            direction="next"
            onClick={() => take(index + 1)}
            label={`Next image, ${label}`}
          />
        </>
      )}

      {/* Dots */}
      {count > 1 && (
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-4">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => take(i)}
              aria-label={`Show ${slide.label}`}
              aria-current={i === index}
              className={`h-1.5 rounded-pill transition-all duration-300 ${
                i === index
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CarouselArrow({ direction, onClick, label }) {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-pill border border-line bg-bg/80 text-text opacity-0 backdrop-blur transition-all duration-300 hover:border-accent hover:bg-accent focus-visible:opacity-100 group-hover/carousel:opacity-100 ${
        isPrev ? "left-3" : "right-3"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={isPrev ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
      </svg>
    </button>
  );
}
