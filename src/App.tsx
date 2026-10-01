import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components/Layout';
import NonBreakingProse from './components/NonBreakingProse';
import { portfolioContent } from './config/portfolio';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    document.title = `Kate Mel | ${portfolioContent.specialty}`;
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <NonBreakingProse />
      <div className="min-h-screen bg-[#181818] selection:bg-brand-accent selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case/:id" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
