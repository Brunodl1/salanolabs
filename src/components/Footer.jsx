import { Link } from "react-router-dom";
import { site } from "../content/site";
import { Container } from "../components/ui";
import Logo from "./Logo";

export default function Footer() {
  const { footer } = site;

  return (
    <footer className="border-t border-line bg-bg">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
          {/* Brand + blurb */}
          <div className="max-w-sm">
            <Logo size="lg" />
            <p className="mt-7 text-base leading-relaxed text-muted">{footer.blurb}</p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-faint">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted transition-colors hover:text-text"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-sm text-muted transition-colors hover:text-text"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <p className="text-xs leading-relaxed text-faint">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
