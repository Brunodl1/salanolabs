import { site } from "../content/site";
import { Container, Section, SectionHeading } from "../components/ui";
import Reveal from "../components/Reveal";

export default function Why() {
  const { why } = site;

  return (
    <Section className="border-t border-line">
      <Container>
        <SectionHeading
          eyebrow={why.eyebrow}
          title={why.title}
          subtitle={why.subtitle}
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {why.pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 90}
              className="flex flex-col gap-4 rounded-card border border-line bg-surface p-7 text-center transition-colors duration-300 hover:border-accent/40 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="mx-auto h-px w-10 bg-accent"
              />
              <h3 className="font-display text-xl font-bold tracking-tight text-balance">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
