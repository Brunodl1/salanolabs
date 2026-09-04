import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import CaseStudies from "../sections/CaseStudies";
import Services from "../sections/Services";
import Process from "../sections/Process";
import Fit from "../sections/Fit";
import Why from "../sections/Why";
import FinalCta from "../sections/FinalCta";

/**
 * The landing page. Reorder, add or remove sections here — each one is
 * self-contained and pulls its own copy from content/site.js.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CaseStudies />
      <Services />
      <Process />
      <Fit />
      <Why />
      <FinalCta />
    </>
  );
}
