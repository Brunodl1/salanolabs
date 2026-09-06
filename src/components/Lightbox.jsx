import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * Full-screen image viewer.
 *
 * Rendered through a portal on <body> so no card's stacking or transform
 * context can clip it. Closes on Escape, on the backdrop, or the X. Arrow
 * keys step through the other slides in the same card.
 */
export default function Lightbox({ slides, index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null);
  const slide = slides[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "ArrowLeft") onPrev();
    };
    document.addEventListener("keydown", onKey);

    // Stop the page scrolling behind the overlay.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={slide.pill || "Enlarged image"}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-pill border border-line bg-bg/80 text-text transition-colors hover:border-accent hover:bg-accent sm:right-6 sm:top-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {slides.length > 1 && (
        <>
          <LightboxArrow side="left" onClick={onPrev} label="Previous image" />
          <LightboxArrow side="right" onClick={onNext} label="Next image" />
        </>
      )}

      {/* Stop clicks on the figure itself from closing the overlay. */}
      <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full flex-col items-center gap-4">
        <img
          src={slide.src}
          alt={slide.alt}
          className="max-h-[80vh] w-auto max-w-full rounded-card object-contain"
        />
        {slide.pill && (
          <figcaption className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            {slide.pill}
          </figcaption>
        )}
      </figure>
    </div>,
    document.body,
  );
}

function LightboxArrow({ side, onClick, label }) {
  const isLeft = side === "left";
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-pill border border-line bg-bg/80 text-text transition-colors hover:border-accent hover:bg-accent sm:flex ${
        isLeft ? "left-4 sm:left-8" : "right-4 sm:right-8"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={isLeft ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
      </svg>
    </button>
  );
}
