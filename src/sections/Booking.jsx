import { site, BOOKING_URL } from "../content/site";
import { Container, Eyebrow } from "../components/ui";
import Reveal from "../components/Reveal";
import CalendlyEmbed from "../components/CalendlyEmbed";

/**
 * The closing section: the pitch, then the live calendar.
 *
 * Every button on the site scrolls here (BOOKING_ANCHOR), so nobody has to
 * leave the page to book.
 */
export default function Booking() {
  const { finalCta } = site;

  return (
    <section id="book" className="relative overflow-hidden border-t border-line py-section">
      {/* Accent wash rising from the bottom edge. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[28rem] opacity-20 blur-[100px]"
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
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {finalCta.subtitle}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 text-sm text-faint">{finalCta.note}</p>
          </Reveal>
        </div>

        <Reveal delay={280} className="mx-auto mt-12 w-full max-w-3xl">
          <CalendlyEmbed url={BOOKING_URL} />
        </Reveal>
      </Container>
    </section>
  );
}
