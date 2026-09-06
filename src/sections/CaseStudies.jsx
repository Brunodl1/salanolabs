import { useEffect, useRef, useState } from "react";
import { site } from "../content/site";
import { CheckItem, Container, Section, SectionHeading } from "../components/ui";
import CardCarousel from "../components/CardCarousel";
import Reveal from "../components/Reveal";

function CaseStudyCard({ item, index, active }) {
  return (
    <Reveal
      as="article"
      delay={index * 90}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-colors duration-300 hover:border-accent/40"
    >
      <CardCarousel
        slides={item.slides}
        aspect="4/3"
        label={`Case study ${index + 1} images`}
        active={active}
        // 3s, then 6s, then 9s after the row appears: they turn over as a
        // wave, each exactly once, and stay on the proof slide.
        startDelay={3000 + index * 3000}
      />

      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
        {/* Clients stay anonymous: the result leads, no brand or handle. */}
        <h3 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-[1.75rem]">
          {item.headline}
        </h3>

        {/* grow pushes the results list to the bottom so cards align */}
        <p className="grow text-base leading-relaxed text-muted">{item.description}</p>

        <ul className="mt-1 flex flex-col gap-3 border-t border-line pt-5">
          {item.results.map((result) => (
            <CheckItem key={result}>{result}</CheckItem>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function CaseStudies() {
  const { caseStudies } = site;

  // The stagger is timed from the moment the row of cards comes on screen,
  // so all three run off one clock rather than each card's own entrance.
  const gridRef = useRef(null);
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="results">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title={caseStudies.title}
          subtitle={caseStudies.subtitle}
        />

        {/* One column on mobile, two on tablet, three on desktop. */}
        <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.items.map((item, index) => (
            <CaseStudyCard key={item.headline} item={item} index={index} active={onScreen} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
