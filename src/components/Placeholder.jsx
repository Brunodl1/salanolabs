import { useState } from "react";

/**
 * An image that degrades into a labeled placeholder box.
 *
 * Point `src` at a file in public/assets/. If the file isn't there yet
 * (or fails to load) you get a dark box showing the label and the path
 * it's looking for — so you always know which file to drop where.
 *
 * The moment you add the real file, it renders instead. No code change.
 *
 * Pass aspect={null} to let the image keep its own proportions instead of
 * being cropped to a fixed box. Use that for screenshots, where cropping
 * would cut off the very numbers the image exists to show.
 */
export default function Placeholder({
  src,
  alt = "",
  label,
  aspect = "4/5",
  className = "",
  imgClassName = "",
  // Rendered on top of the image, but ONLY once a real file has loaded.
  // Keeps captions from doubling up with the placeholder's own label.
  overlay = null,
}) {
  const [failed, setFailed] = useState(false);

  // aspect={null} means "keep the image's own shape".
  const natural = aspect === null;

  return (
    <div
      className={`relative overflow-hidden rounded-card border border-line bg-surface ${className}`}
      style={natural ? { minHeight: failed || !src ? "12rem" : undefined } : { aspectRatio: aspect }}
    >
      {!failed && src ? (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className={
              natural
                ? `block h-auto w-full ${imgClassName}`
                : `h-full w-full object-cover ${imgClassName}`
            }
          />
          {overlay}
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
          {/* Subtle diagonal hatch so empty slots read as intentional */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, var(--color-line) 10px, var(--color-line) 11px)",
            }}
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="relative h-7 w-7 text-faint"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <p className="relative font-display text-sm font-semibold tracking-tight text-muted">
            {label || "Image placeholder"}
          </p>
          {src && (
            <code className="relative max-w-full truncate text-[11px] text-faint">{src}</code>
          )}
        </div>
      )}
    </div>
  );
}
