import { useCallback, useEffect, useRef, useState } from "react";
import Lightbox from "./Lightbox";
import Placeholder from "./Placeholder";

/**
 * A small image carousel for the case study cards.
 *
 * Slides are chosen by named pills underneath (Founder / Shopify / Ads).
 * They all sit in a flex track that slides horizontally, so every image
 * stays mounted and there's no flash when switching.
 *
 * Navigation: the pills, arrows on hover or focus, arrow keys, and
 * horizontal swipe on touch. Clicking the image opens it in a lightbox.
 *
 * Auto-advance: when `active` is true, the carousel moves forward ONCE after
 * `startDelay`, then stops for good. It never wraps back on its own, so a
 * card that has turned over stays put. The timer only runs while `active` is
 * true, pauses under the pointer, stops permanently as soon as the visitor
 * navigates, and never runs under prefers-reduced-motion.
 */
// A portrait image gets a frame no taller than this. Without a floor, one
// 9:16 phone screenshot would stretch the whole row of cards.
const MIN_ASPECT = 0.75;

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
  const [zoomed, setZoomed] = useState(false);
  // A swipe also fires a click afterwards; this keeps that from opening the
  // lightbox when the visitor meant to change slide.
  const swiped = useRef(false);
  const count = slides.length;

  const go = useCallback(
    (next) => setIndex(((next % count) + count) % count),
    [count],
  );

  // The frame takes the shape of whichever slide is showing, so each image
  // fills it instead of floating in dead space. Only a portrait clamped by
  // MIN_ASPECT is letterboxed, and that gets a blurred backdrop.
  const slideAspect = slides[index].aspect;
  const frameAspect = slideAspect ? Math.max(slideAspect, MIN_ASPECT) : aspect;
  const clamped = Boolean(slideAspect) && slideAspect < MIN_ASPECT;

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
    if (Math.abs(dx) > 40) {
      swiped.current = true;
      take(index + (dx < 0 ? 1 : -1));
    }
    setTouchX(null);
  };

  const openZoom = () => {
    if (swiped.current) {
      swiped.current = false; // that gesture was a swipe, not a tap
      return;
    }
    setTaken(true); // opening the viewer counts as taking control
    setZoomed(true);
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
      className="group/carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image viewport */}
      <div
        className="relative overflow-hidden transition-[aspect-ratio] duration-500 ease-out"
        style={{ aspectRatio: frameAspect }}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
      {/* Slide track */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={openZoom}
            tabIndex={i === index ? 0 : -1}
            aria-label={`Enlarge ${slide.pill || "image"}`}
            className="h-full w-full shrink-0 cursor-zoom-in"
            aria-hidden={i !== index}
          >
            <Placeholder
              src={slide.src}
              alt={slide.alt}
              label={slide.pill}
              // The frame already matches the active slide, so every image is
              // contained: it can never be cropped, whatever its shape.
              aspect={null}
              fit="contain"
              backdrop={clamped}
              className="h-full rounded-none border-0 bg-bg"
              imgClassName="h-full w-full"
            />
          </button>
        ))}
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
      </div>

      {/* Pills. These name what each slide shows, so the visitor picks a
          view rather than guessing what an unlabelled dot leads to. */}
      {count > 1 && (
        <div
          role="tablist"
          aria-label={label}
          className="flex flex-wrap items-center gap-2 border-y border-line bg-surface px-4 py-3"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => take(i)}
              className={`rounded-pill px-3.5 py-1.5 font-display text-xs font-semibold tracking-tight transition-all duration-300 ${
                i === index
                  ? "bg-accent text-white"
                  : "border border-line text-muted hover:border-accent/50 hover:text-text"
              }`}
            >
              {slide.pill}
            </button>
          ))}
        </div>
      )}

      {zoomed && (
        <Lightbox
          slides={slides}
          index={index}
          onClose={() => setZoomed(false)}
          onPrev={() => go(index - 1)}
          onNext={() => go(index + 1)}
        />
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
