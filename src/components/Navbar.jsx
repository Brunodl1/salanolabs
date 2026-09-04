import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "../content/site";
import { Button, Container } from "./ui";
import Logo from "./Logo";

export default function Navbar() {
  // Read the initial value directly, so a page loaded mid-scroll (a refresh,
  // or a direct link to an anchor) already has the solid background.
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Solid background once the user scrolls off the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Anchor links only work on the landing page — prefix them when elsewhere.
  const isHome = pathname === "/";
  const hrefFor = (href) => (isHome ? href : `/${href}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between gap-6">
          <Link
            to="/"
            aria-label={`${site.brand.name} — home`}
            onClick={() => setOpen(false)}
            className="shrink-0"
          >
            <Logo />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {site.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={hrefFor(link.href)}
                  className="text-sm font-medium text-muted transition-colors duration-200 hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button size="sm">{site.nav.cta}</Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-pill border border-line text-text lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>
      </Container>

      {/* Mobile menu — opaque, so page content doesn't show through it. */}
      <div
        className={`overflow-hidden border-t border-line bg-bg transition-[max-height] duration-400 ease-out lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-transparent"
        }`}
      >
        <Container className="flex flex-col gap-1 py-6">
          {site.nav.links.map((link) => (
            <a
              key={link.href}
              href={hrefFor(link.href)}
              onClick={() => setOpen(false)}
              className="py-2.5 font-display text-lg font-medium text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <Button className="mt-4 w-full" size="sm" onClick={() => setOpen(false)}>
            {site.nav.cta}
          </Button>
        </Container>
      </div>
    </header>
  );
}
