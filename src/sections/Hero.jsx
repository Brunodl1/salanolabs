import { site } from "../content/site";
import { Button, Container } from "../components/ui";
import Reveal from "../components/Reveal";
import Placeholder from "../components/Placeholder";

/**
 * One vertically scrolling column of images.
 *
 * The list is rendered twice inside the track. The animation translates the
 * track by exactly -50%, which lands the second copy precisely where the
 * first started — so the loop is seamless with no jump.
 */
function MarqueeColumn({ images, duration, reverse = false, offset = false }) {
  return (
    <div className={offset ? "mt-12" : undefined}>
      <div
        className={`marquee-track flex flex-col gap-4 ${reverse ? "marquee-track--reverse" : ""}`}
        style={{ "--marquee-duration": duration }}
      >
        {[...images, ...images].map((src, i) => (
          <Placeholder
            key={`${src}-${i}`}
            src={src}
            alt=""
            label="Brand image"
            aspect="4/5"
            className="shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const { hero, brandLogos, heroGallery } = site;

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-36 lg:pb-24">
      {/* Ambient accent glow. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[72rem] max-w-none -translate-x-1/2 -translate-y-1/3 rounded-full opacity-25 blur-[120px] lg:left-1/4"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 65%)" }}
      />
      {/* Faint grid, fading out toward the bottom. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          {/* ------------------------------------------------------- COPY */}
          <div className="flex flex-col items-start text-left">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-pill border border-line bg-surface/60 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted backdrop-blur sm:text-xs">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_10px_var(--color-success)]"
                />
                {hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-8 text-hero text-balance">
                {hero.headline[0]}
                <br />
                <span className="text-accent [text-shadow:0_0_44px_var(--color-accent-soft)]">
                  {hero.headline[1]}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                {hero.subhead} <span className="font-semibold text-text">{hero.kicker}</span>
              </p>
            </Reveal>

            <Reveal delay={240} className="mt-10 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                {hero.cta}
              </Button>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-5 text-xs text-faint sm:text-sm">{hero.ctaNote}</p>
            </Reveal>
          </div>

          {/* --------------------------------------------- SCROLLING IMAGES
              Shown at every size. Shorter on phones so it doesn't push the
              rest of the page too far down. */}
          <Reveal
            delay={360}
            aria-hidden="true"
            className="relative h-[22rem] overflow-hidden sm:h-[28rem] lg:h-[38rem]"
          >
            <div className="grid grid-cols-2 gap-4">
              <MarqueeColumn images={heroGallery.columnOne} duration="46s" />
              <MarqueeColumn images={heroGallery.columnTwo} duration="58s" reverse offset />
            </div>

            {/* Fade the columns out at the top and bottom edges. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-bg) 0%, transparent 18%, transparent 82%, var(--color-bg) 100%)",
              }}
            />
          </Reveal>
        </div>

        {/* Trusted-by logo strip. Scrolls horizontally on small screens. */}
        <Reveal delay={420} className="mt-16 sm:mt-20">
          <div className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            <ul className="flex min-w-max items-center justify-start gap-10 opacity-55 sm:min-w-0 sm:gap-14">
              {brandLogos.map((brand) => (
                <li key={brand.name} className="shrink-0">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="h-6 w-auto opacity-80 grayscale transition sm:h-7"
                    onError={(e) => {
                      // No file yet — fall back to the brand name as text.
                      e.currentTarget.replaceWith(
                        Object.assign(document.createElement("span"), {
                          className:
                            "font-display text-sm font-semibold tracking-tight text-faint whitespace-nowrap",
                          textContent: brand.name,
                        }),
                      );
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
