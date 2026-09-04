import { site } from "../content/site";
import { Container, Section, SectionHeading } from "../components/ui";
import Placeholder from "../components/Placeholder";
import Reveal from "../components/Reveal";

/**
 * A wall of social proof — Shopify graphs, ads dashboards, client messages.
 *
 * Every tile is a fixed square and images are center-cropped to fill it
 * (object-cover), so screenshots at any aspect ratio sit in the grid without
 * distorting or leaving gaps. Add or remove items in site.js and the grid
 * reflows on its own.
 */
export default function Proof() {
  const { proof } = site;

  return (
    <Section id="proof" className="border-t border-line bg-surface/30">
      <Container>
        <SectionHeading eyebrow={proof.eyebrow} title={proof.title} subtitle={proof.subtitle} />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
          {proof.items.map((item, index) => (
            <Reveal
              key={item.image}
              // Stagger caps out so the last tiles don't lag noticeably.
              delay={Math.min(index, 5) * 70}
              className="group relative"
            >
              <Placeholder
                src={item.image}
                alt={item.caption || "Client result"}
                label={item.caption || "Proof"}
                aspect="1/1"
                className="transition-colors duration-300 group-hover:border-accent/50"
                imgClassName="transition-transform duration-500 group-hover:scale-[1.04]"
                overlay={
                  item.caption ? (
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 p-4"
                      style={{
                        background:
                          "linear-gradient(to top, color-mix(in srgb, var(--color-bg) 92%, transparent), transparent)",
                      }}
                    >
                      <p className="truncate text-sm font-medium text-white/90">{item.caption}</p>
                    </div>
                  ) : null
                }
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
