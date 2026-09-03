import { Link } from 'react-router-dom';
import USFMark from './USFMark';

const serviceAreas = ['Burbank', 'Glendale', 'North Hollywood', 'Toluca Lake', 'Studio City', 'Sun Valley', 'San Fernando Valley'];

export default function Footer() {
  return (
    <footer className="bg-dark text-ivory/70">
      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <USFMark size={40} />
            <span className="font-sans text-ivory text-[13px] font-semibold leading-tight">
              US Flooring<br />&amp; Molding
            </span>
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
          <Link to="/contact" className="inline-block bg-terracotta text-ivory px-5 py-2.5 rounded-[2px] font-sans text-[13px] font-bold hover:bg-terra-dark transition-colors">
            Get Free Estimate
          </Link>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-6 py-5">
        <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-[11px] text-ivory/20">
            © 2024 US Flooring &amp; Molding Inc. All rights reserved. · Burbank, CA
          </p>
          <p className="font-sans text-[11px] text-ivory/15">Family Flooring. Honest People. Floors Built to Last.</p>
        </div>
      </div>
    </footer>
  );
}
