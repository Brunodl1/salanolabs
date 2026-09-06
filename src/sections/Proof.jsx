import { site } from "../content/site";
import { Container, Section, SectionHeading } from "../components/ui";
import Placeholder from "../components/Placeholder";
import Reveal from "../components/Reveal";

/**
 * A wall of social proof: Shopify revenue graphs, ads dashboards, creative.
 *
 * Images keep their own proportions rather than being cropped to a fixed
 * box. These are screenshots whose whole point is the numbers in them, and
 * a square crop would cut the revenue breakdown clean off the right edge.
 *
 * Because the heights vary, the grid is a CSS column layout (masonry): one
 * column on mobile, two on desktop, with each tile kept whole.
 */
export default function Proof() {
  const { proof } = site;

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
              {/* No caption bar: the dashboards carry their own numbers. */}
              <div className="overflow-hidden rounded-card border border-line bg-surface transition-colors duration-300 hover:border-accent/50">
                <Placeholder
                  src={item.image}
                  alt="Client dashboard"
                  label="Dashboard"
                  aspect={null}
                  className="rounded-none border-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
