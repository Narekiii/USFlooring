import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import HardwoodFlooring from './pages/HardwoodFlooring';
import LaminateFlooring from './pages/LaminateFlooring';
import LuxuryVinylFlooring from './pages/LuxuryVinylFlooring';
import FlooringInstallation from './pages/FlooringInstallation';
import MoldingInstallation from './pages/MoldingInstallation';
import BuyersGuide from './pages/BuyersGuide';
import NotFound from './pages/NotFound';
import { initAnalytics, trackPageView } from './lib/analytics';

initAnalytics();

function RouteTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteTracker />
      <div className="min-h-full flex flex-col bg-ivory font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-navy focus:text-ivory focus:px-4 focus:py-2 focus:rounded-[2px] focus:font-sans focus:text-[14px] focus:font-bold focus:outline-none"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/hardwood-flooring-burbank" element={<HardwoodFlooring />} />
            <Route path="/laminate-flooring-burbank" element={<LaminateFlooring />} />
            <Route path="/luxury-vinyl-flooring-burbank" element={<LuxuryVinylFlooring />} />
            <Route path="/flooring-installation-burbank" element={<FlooringInstallation />} />
            <Route path="/molding-baseboard-installation-burbank" element={<MoldingInstallation />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/buyers-guide" element={<BuyersGuide />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </BrowserRouter>
  );
}
