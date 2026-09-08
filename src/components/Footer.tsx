import { Link } from 'react-router-dom';
import logoImg from '@/imports/us-flooring-header-logo-400x160.png';
import { BUSINESS } from '@/lib/business';

const YELP_URL = 'https://www.yelp.com/biz/us-flooring-and-molding-burbank';

function YelpIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.16 12.596c.411-.36.416-.849.015-1.166l-3.584-2.765c-.398-.311-.861-.134-.99.381l-.73 2.91c-.127.507.205.88.74.826l4.103-.44a1.3 1.3 0 0 0 .447-.204l-.001-.001v-.001zm-7.693 6.547.73 2.911c.13.515.594.694.99.381l3.584-2.765c.401-.318.396-.806-.015-1.166a1.3 1.3 0 0 0-.447-.205l-4.103-.44c-.535-.055-.868.319-.74.826zm-3.135 1.53c.35.392.827.347 1.06-.1l1.261-2.407c.234-.447.032-.895-.449-1.008l-4.012-.94c-.482-.113-.812.218-.697.718l.957 4.021c.118.5.535.73.88.341zm-3.18-7.573a1.27 1.27 0 0 0-.327.418L3.91 16.48c-.232.464.002.9.521.964l4.103.497c.52.063.854-.32.744-.847l-.845-3.884c-.11-.528-.609-.758-1.004-.416l-.042.036zM10.6 3.27c-.232-.464-.716-.528-1.05-.14L6.457 6.658c-.336.39-.262.868.162 1.065l3.667 1.71c.423.197.826-.042.899-.55l.589-4.027c.074-.51-.172-.917-.404-1.381L10.6 3.27z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-light border-t border-border">
      <div className="max-w-[1180px] mx-auto px-6 pt-14 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5 inline-block">
            <img src={logoImg} alt="US Flooring & Molding — Burbank, CA" className="h-14 w-auto object-contain" width="256" height="102" />
          </div>
          <p className="font-sans text-[13px] text-charcoal/55 leading-relaxed mb-5">
            Family-owned flooring store and contractor in Burbank, CA. Over 20 years in the trade — every floor treated like it's going in our own home.
          </p>
          <div className="flex gap-1 mb-3" aria-label="5-star rating">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C89B62" stroke="none" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <a
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-sans text-[12px] text-charcoal/45 hover:text-charcoal transition-colors mb-2"
            onClick={() => (window as any).gtag?.('event', 'google_reviews_click')}
          >
            Read our Google reviews →
          </a>
          <a
            href={YELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View US Flooring & Molding Inc. on Yelp"
            className="inline-flex items-center gap-2 font-sans text-[12px] text-charcoal/45 hover:text-[#d32323] focus-visible:text-[#d32323] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d32323]"
            onClick={() => (window as any).gtag?.('event', 'outbound_yelp_click', { link_location: 'footer', destination_url: YELP_URL })}
          >
            <YelpIcon />
            View us on Yelp
          </a>
        </div>

        {/* Pages */}
        <div>
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-wider mb-5">Pages</p>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Products & Services' },
                { to: '/about', label: 'About' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/reviews', label: 'Reviews' },
                { to: '/contact', label: 'Free Estimate' },
              ].map((link) => (
                <li key={link.to + link.label}>
                  <Link to={link.to} className="font-sans text-[13px] text-charcoal/55 hover:text-charcoal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Services */}
        <div>
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-wider mb-5">Services</p>
          <nav aria-label="Services navigation">
            <ul className="flex flex-col gap-3">
              {[
                { to: '/hardwood-flooring-burbank', label: 'Hardwood Flooring' },
                { to: '/laminate-flooring-burbank', label: 'Laminate Flooring' },
                { to: '/luxury-vinyl-flooring-burbank', label: 'Luxury Vinyl Flooring' },
                { to: '/flooring-installation-burbank', label: 'Flooring Installation' },
                { to: '/molding-baseboard-installation-burbank', label: 'Moldings & Baseboards' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="font-sans text-[13px] text-charcoal/55 hover:text-charcoal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-wider mb-5">Contact</p>
          <address className="not-italic flex flex-col gap-3 mb-5">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="font-sans text-[14px] text-charcoal font-semibold hover:text-navy transition-colors"
              onClick={() => (window as any).gtag?.('event', 'phone_click')}
            >
              {BUSINESS.phoneDisplay}
            </a>
            <p className="font-sans text-[13px] text-charcoal/45">Fax: {BUSINESS.fax}</p>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="font-sans text-[13px] text-charcoal/55 hover:text-charcoal transition-colors"
              onClick={() => (window as any).gtag?.('event', 'email_click')}
            >
              {BUSINESS.email}
            </a>
            <a
              href="https://maps.app.goo.gl/tj7qojTHfH3svRqD6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open US Flooring & Molding Inc. in Google Maps"
              className="font-sans text-[13px] text-charcoal/45 hover:text-charcoal transition-colors leading-relaxed"
            >
              {BUSINESS.address.street}<br />{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
            </a>
            <p className="font-sans text-[12px] text-charcoal/35">{BUSINESS.hours}</p>
          </address>
          <Link
            to="/contact"
            className="inline-block bg-red text-white px-5 py-2.5 rounded-[2px] font-sans text-[13px] font-bold hover:bg-red-dark transition-colors"
            onClick={() => (window as any).gtag?.('event', 'estimate_cta_click')}
          >
            Get Free Estimate
          </Link>
        </div>
      </div>

      {/* Location strip */}
      <div className="border-t border-border px-6 py-5">
        <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
            <div className="flex items-start gap-2.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B4423" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 mt-0.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="font-sans text-[12px] text-charcoal/55">{BUSINESS.address.full}</p>
                <a href={`tel:${BUSINESS.phone}`} className="font-sans text-[12px] text-charcoal/40 hover:text-charcoal transition-colors">
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold text-walnut hover:text-charcoal transition-colors whitespace-nowrap"
              onClick={() => (window as any).gtag?.('event', 'directions_click')}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              View on Google Maps
            </a>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
            <p className="font-sans text-[11px] text-charcoal/30">
              © {BUSINESS.copyrightYear} {BUSINESS.legalName}. All rights reserved.
            </p>
            <p className="font-sans text-[11px] text-charcoal/20">Family Flooring. Honest People. Floors Built to Last.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
