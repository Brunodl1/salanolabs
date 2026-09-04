import { site } from "../content/site";
import { Button, CheckItem, Container, Eyebrow, Section } from "../components/ui";
import Reveal from "../components/Reveal";

export default function Fit() {
  const { fit } = site;

  return (
    <Section id="fit" className="border-t border-line">
      <Container>
        <Reveal className="relative overflow-hidden rounded-card border border-line bg-surface p-7 sm:p-12 lg:p-16">
          {/* Corner accent glow. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-[90px]"
            style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
          />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-xl">
              <Eyebrow>{fit.eyebrow}</Eyebrow>
              <h2 className="mt-5 text-section text-balance">{fit.title}</h2>
              <p className="mt-6 text-base text-muted">{fit.intro}</p>

              <ul className="mt-6 flex flex-col gap-4">
                {fit.criteria.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>

              <p className="mt-8 border-l-2 border-accent pl-5 text-sm leading-relaxed text-faint">
                {fit.exclusion}
              </p>
            </div>

            <div className="shrink-0 lg:w-64">
              <Button size="lg" className="w-full">
                {fit.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
