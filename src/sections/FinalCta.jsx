import { site } from "../content/site";
import { Button, Container, Eyebrow } from "../components/ui";
import Reveal from "../components/Reveal";

export default function FinalCta() {
  const { finalCta } = site;

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-section">
      {/* Accent wash rising from the bottom edge. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[28rem] opacity-[0.18] blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, var(--color-accent), transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow>{finalCta.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-6 max-w-3xl text-section text-balance">{finalCta.title}</h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {finalCta.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-10 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              {finalCta.cta}
            </Button>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-5 text-xs text-faint sm:text-sm">{finalCta.note}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
