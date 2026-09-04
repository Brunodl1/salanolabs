import { Link } from "react-router-dom";
import { Container } from "../components/ui";

/**
 * Shared layout for the Privacy Policy and Terms of Service pages.
 * Content comes from content/legal.js.
 */
export default function LegalPage({ doc }) {
  return (
    <article className="pt-36 pb-section sm:pt-44">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>

          <h1 className="mt-8 text-section text-balance">{doc.title}</h1>
          <p className="mt-4 text-sm text-faint">Last updated: {doc.updated}</p>

          <p className="mt-8 text-base leading-relaxed text-muted">{doc.intro}</p>

          <div className="mt-14 flex flex-col gap-12">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
