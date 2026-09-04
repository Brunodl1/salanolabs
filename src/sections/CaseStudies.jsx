import { site } from "../content/site";
import { CheckItem, Container, Section, SectionHeading } from "../components/ui";
import Placeholder from "../components/Placeholder";
import Reveal from "../components/Reveal";

function CaseStudyCard({ item, index }) {
  return (
    <Reveal
      as="article"
      delay={index * 90}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-colors duration-300 hover:border-accent/40"
    >
      <Placeholder
        src={item.image}
        alt={item.imageAlt}
        label={`${item.brand} image`}
        aspect="4/3"
        className="rounded-none border-0 border-b border-line"
        imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {item.brand}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-balance sm:text-[1.75rem]">
            {item.headline}
          </h3>
          <a
            href={item.handleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-accent transition-opacity hover:opacity-75"
          >
            {item.handle}
          </a>
        </div>

        {/* grow pushes the results list to the bottom so cards align */}
        <p className="grow text-sm leading-relaxed text-muted">{item.description}</p>

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

  return (
    <Section id="results">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title={caseStudies.title}
          subtitle={caseStudies.subtitle}
        />

        {/* One column on mobile, two on tablet, three on desktop. */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.items.map((item, index) => (
            <CaseStudyCard key={item.brand} item={item} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
