import { site } from "../content/site";
import { Container, Section, SectionHeading } from "../components/ui";
import Reveal from "../components/Reveal";
import ServiceIcon from "../components/ServiceIcon";

export default function Services() {
  const { services } = site;

  return (
    <Section id="services" className="border-t border-line">
      <Container>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2">
          {services.items.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 80}
              className="group flex flex-col gap-5 bg-surface p-7 transition-colors duration-300 hover:bg-surface-2 sm:p-9"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-line bg-bg text-accent transition-colors duration-300 group-hover:border-accent/50">
                  <ServiceIcon name={item.icon} className="h-6 w-6" />
                </span>
                <div>
                  <span className="font-display text-xs font-bold tracking-[0.18em] text-faint">
                    {item.number}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-base leading-relaxed text-muted">{item.description}</p>

              <ul className="mt-auto flex flex-col gap-2.5 border-t border-line pt-5">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[0.95rem] text-muted">
                    <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
