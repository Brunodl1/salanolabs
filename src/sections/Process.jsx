import { site } from "../content/site";
import { Container, Section, SectionHeading } from "../components/ui";
import Reveal from "../components/Reveal";

export default function Process() {
  const { process } = site;

  return (
    <Section id="process" className="border-t border-line bg-surface/30">
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          subtitle={process.subtitle}
        />

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {process.steps.map((step, index) => (
            <Reveal as="li" key={step.step} delay={index * 90} className="relative flex flex-col gap-4">
              {/* Connector line to the next step — desktop only. */}
              {index < process.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[9px] hidden h-px w-full bg-linear-to-r from-accent/50 to-transparent lg:block"
                />
              )}

              <span
                aria-hidden="true"
                className="relative h-[18px] w-[18px] rounded-full border-2 border-accent bg-bg"
              />

              {/* Step label and title share a line, baseline aligned. */}
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {step.step}
                </p>
                <h3 className="font-display text-xl font-bold tracking-tight text-balance">
                  {step.title}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
