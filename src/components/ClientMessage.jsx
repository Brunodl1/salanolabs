import { useState } from "react";
import Lightbox from "./Lightbox";

/** Below this the screenshot is a tall phone capture, not a wide one. */
const WIDE_ENOUGH = 1;

/** Height of the peek banner, matched to a typical wide message. */
const PEEK_ASPECT = 2.157;

/**
 * The client's own message, shown under the case study description.
 *
 * A wide screenshot is shown complete, at card width, because it fits.
 *
 * A tall one depends on the screen. On a phone the card is already narrow
 * and tall, so the whole screenshot is shown outright and no tap is needed.
 * From sm up, where three cards sit side by side, a full 9:16 capture would
 * tower over the row, so it becomes a peek banner instead.
 *
 * Either way, clicking opens the full screenshot in the lightbox.
 */
export default function ClientMessage({ message }) {
  const [zoomed, setZoomed] = useState(false);
  if (!message) return null;

  const wide = (message.aspect ?? 0) >= WIDE_ENOUGH;
  const slides = [{ src: message.src, alt: message.label, pill: message.label }];

  return (
    <>
      {wide ? (
        <button
          type="button"
          onClick={() => setZoomed(true)}
          aria-label={`Enlarge ${message.label}`}
          className="group/msg block w-full cursor-zoom-in overflow-hidden rounded-card border border-line bg-bg transition-colors duration-300 hover:border-accent/50"
        >
          <img
            src={message.src}
            alt={message.label}
            loading="lazy"
            decoding="async"
            // Its own proportions, at card width: complete, never cropped.
            style={{ aspectRatio: message.aspect }}
            className="block w-full object-contain"
          />
        </button>
      ) : (
        <>
          {/* Phones: the full screenshot, no tap required. */}
          <button
            type="button"
            onClick={() => setZoomed(true)}
            aria-label={`Enlarge ${message.label}`}
            className="group/msg block w-full cursor-zoom-in overflow-hidden rounded-card border border-line bg-bg transition-colors duration-300 hover:border-accent/50 sm:hidden"
          >
            <img
              src={message.src}
              alt={message.label}
              loading="lazy"
              decoding="async"
              style={{ aspectRatio: message.aspect }}
              className="block w-full object-contain"
            />
          </button>

          {/* sm and up: a peek, so one tall capture can't tower over the row. */}
          <button
            type="button"
            onClick={() => setZoomed(true)}
            aria-label={`Read ${message.label}`}
            className="group/msg relative hidden w-full cursor-zoom-in overflow-hidden rounded-card border border-line bg-bg text-left transition-colors duration-300 hover:border-accent/50 sm:block"
            // Matches the height of a wide message, so all three cards balance.
            style={{ aspectRatio: PEEK_ASPECT }}
          >
            {/* A slice of the conversation. Deliberately a peek, not the whole
              thing: the full screenshot is one click away in the lightbox. */}
            <img
              src={message.src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover/msg:scale-[1.03]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, var(--color-bg) 4%, color-mix(in srgb, var(--color-bg) 55%, transparent) 45%, transparent)",
              }}
            />

            <span className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3">
              <span className="min-w-0 flex-1 truncate text-sm text-white/90">
                {message.quote}
              </span>
              <span className="shrink-0 font-display text-[0.7rem] font-semibold tracking-tight text-accent">
                Read it
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" />
              </svg>
            </span>
          </button>
        </>
      )}

      {zoomed && (
        <Lightbox
          slides={slides}
          index={0}
          onClose={() => setZoomed(false)}
          onPrev={() => {}}
          onNext={() => {}}
        />
      )}
    </>
  );
}
