import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LegalPage from "./pages/LegalPage";
import { privacy, terms } from "./content/legal";

/** Jumps to the top on route change (but leaves #anchor links alone). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<LegalPage doc={privacy} />} />
          <Route path="/terms" element={<LegalPage doc={terms} />} />
          {/* Anything unrecognised falls back to the landing page. */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
