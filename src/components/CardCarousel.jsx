import { useCallback, useState } from "react";
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
 */
export default function CardCarousel({ slides, aspect = "4/3", label = "Images" }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback(
    (next) => setIndex(((next % count) + count) % count),
    [count],
  );

  // Swipe handling. We only act on a decisive horizontal drag.
  const [touchX, setTouchX] = useState(null);
  const onTouchStart = (e) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    setTouchX(null);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
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
            onClick={() => go(index - 1)}
            label={`Previous image, ${label}`}
          />
          <CarouselArrow
            direction="next"
            onClick={() => go(index + 1)}
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
              onClick={() => go(i)}
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
