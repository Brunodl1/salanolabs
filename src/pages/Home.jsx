import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import CaseStudies from "../sections/CaseStudies";
import Proof from "../sections/Proof";
import Services from "../sections/Services";
import Process from "../sections/Process";
import Why from "../sections/Why";
import Booking from "../sections/Booking";

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
      <Proof />
      <Services />
      <Process />
      <Why />
      <Booking />
    </>
  );
}
