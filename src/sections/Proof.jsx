import { useState } from "react";
import { site } from "../content/site";
import { Container, Section, SectionHeading } from "../components/ui";
import Placeholder from "../components/Placeholder";
import Reveal from "../components/Reveal";
import Lightbox from "../components/Lightbox";

/**
 * A wall of social proof: raw client dashboards.
 *
 * Images keep their own proportions rather than being cropped to a box.
 * These are screenshots whose whole point is the numbers in them, so the
 * grid is a CSS column layout (masonry) with each tile kept whole. Clicking
 * one opens it in the lightbox, where the fine print is actually readable.
 */
export default function Proof() {
  const { proof } = site;
  const [zoomed, setZoomed] = useState(null); // index of the open tile

  // The lightbox steps through the whole wall, not just the tile clicked.
  const slides = proof.items.map((item, i) => ({
    src: item.image,
    alt: `Client dashboard ${i + 1}`,
    pill: `${i + 1} of ${proof.items.length}`,
  }));

  const step = (delta) =>
    setZoomed((i) => (i === null ? null : (i + delta + slides.length) % slides.length));

  return (
    <Section id="proof" className="border-t border-line bg-surface/30">
      <Container>
        <SectionHeading eyebrow={proof.eyebrow} title={proof.title} subtitle={proof.subtitle} />

        <div className="mt-14 gap-4 sm:gap-5 [column-count:1] lg:[column-count:2]">
          {proof.items.map((item, index) => (
            <Reveal
              key={item.image}
              // Stagger caps out so later tiles don't lag noticeably.
              delay={Math.min(index, 5) * 70}
              className="group mb-4 break-inside-avoid sm:mb-5"
            >
              <button
                type="button"
                onClick={() => setZoomed(index)}
                aria-label={`Enlarge dashboard ${index + 1}`}
                className="block w-full cursor-zoom-in overflow-hidden rounded-card border border-line bg-surface transition-colors duration-300 hover:border-accent/50"
              >
                <Placeholder
                  src={item.image}
                  alt={`Client dashboard ${index + 1}`}
                  label="Dashboard"
                  aspect={null}
                  className="rounded-none border-0"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {zoomed !== null && (
        <Lightbox
          slides={slides}
          index={zoomed}
          onClose={() => setZoomed(null)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </Section>
  );
}
