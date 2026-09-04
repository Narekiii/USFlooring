import { Link } from 'react-router-dom';
import logoImg from '@/imports/us-flooring-header-logo-400x160.png';

const serviceAreas = ['Burbank', 'Glendale', 'North Hollywood', 'Toluca Lake', 'Studio City', 'Sun Valley', 'San Fernando Valley'];

export default function Footer() {
  return (
    <footer className="bg-dark text-ivory/70">
      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5 inline-block bg-ivory rounded-[3px] px-3 py-2">
            <img src={logoImg} alt="US Flooring & Molding" className="h-16 w-auto object-contain" />
          </div>
          <p className="font-sans text-[13px] text-ivory/45 leading-relaxed mb-5">
            Family-owned flooring store and contractor in Burbank, CA. Three generations in the trade, every floor treated like it's going in our own home.
          </p>
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C89B5A" stroke="none" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <p className="font-sans text-[12px] text-ivory/35">5.0 rating · 15 Google reviews</p>
        </div>

        {/* Pages */}
        <div>
          <p className="font-sans text-[11px] font-semibold text-gold uppercase tracking-wider mb-5">Pages</p>
          <nav className="flex flex-col gap-3">
            {[
              { to: '/', label: 'Home' },
              { to: '/products', label: 'Products & Services' },
              { to: '/about', label: 'About' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/reviews', label: 'Reviews' },
              { to: '/contact', label: 'Free Estimate' },
            ].map((link) => (
              <Link key={link.to + link.label} to={link.to} className="font-sans text-[13px] text-ivory/40 hover:text-ivory/70 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Service Areas */}
        <div>
          <p className="font-sans text-[11px] font-semibold text-gold uppercase tracking-wider mb-5">Service Areas</p>
          <div className="flex flex-col gap-2.5">
            {serviceAreas.map((a) => (
              <span key={a} className="font-sans text-[13px] text-ivory/40">{a}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-sans text-[11px] font-semibold text-gold uppercase tracking-wider mb-5">Contact</p>
          <div className="flex flex-col gap-3 mb-5">
            <a href="tel:+18185150009" className="font-sans text-[14px] text-ivory font-semibold hover:text-gold transition-colors">(818) 515-0009</a>
            <p className="font-sans text-[13px] text-ivory/35">Fax: (818) 840-8222</p>
            <a href="mailto:hello@USFlooring.LA" className="font-sans text-[13px] text-ivory/45 hover:text-ivory/70 transition-colors">hello@USFlooring.LA</a>
            <address className="not-italic font-sans text-[13px] text-ivory/35 leading-relaxed">
              1508 W Burbank Blvd<br />Burbank, CA 91506
            </address>
            <p className="font-sans text-[12px] text-ivory/25">Mon – Sat · 9am – 6pm</p>
          </div>
          <Link to="/contact" className="inline-block bg-walnut text-ivory px-5 py-2.5 rounded-[2px] font-sans text-[13px] font-bold hover:bg-walnut-dark transition-colors">
            Get Free Estimate
          </Link>
        </div>
      </div>

      {/* Compact location strip */}
      <div className="border-t border-ivory/10 px-6 py-6">
        <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
            {/* Pin icon + address */}
            <div className="flex items-start gap-2.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C89B5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="font-sans text-[12px] text-ivory/55">1508 W Burbank Blvd, Burbank, CA 91506</p>
                <a href="tel:+18185150009" className="font-sans text-[12px] text-ivory/40 hover:text-ivory/70 transition-colors">(818) 515-0009</a>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/jX5UrM4rbZP5CSq5A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold text-gold/60 hover:text-gold transition-colors whitespace-nowrap"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              View on Google Maps
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <p className="font-sans text-[11px] text-ivory/20">
              © 2025 US Flooring &amp; Molding Inc. All rights reserved.
            </p>
            <p className="font-sans text-[11px] text-ivory/15">Family Flooring. Honest People. Floors Built to Last.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
