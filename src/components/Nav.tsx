import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import USFMark from './USFMark';

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const navLinks = [
  { to: '/products', label: 'Products & Services' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ivory border-b border-sand">
        <div className="max-w-[1180px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
            <USFMark size={34} />
            <span className="font-sans text-walnut text-[14px] font-semibold leading-tight hidden sm:block">
              US Flooring &amp; Molding
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-sans text-[13px] font-medium transition-colors ${
                    isActive ? 'text-walnut' : 'text-charcoal/55 hover:text-charcoal'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="tel:+18185150009"
              className="flex items-center gap-2 font-sans text-[13px] text-charcoal/50 hover:text-walnut transition-colors"
            >
              <PhoneIcon />
              (818) 515-0009
            </a>
            <Link
              to="/contact"
              className="bg-terracotta text-ivory px-5 py-2.5 rounded-[2px] font-sans text-[13px] font-bold hover:bg-terra-dark transition-colors"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile right */}
          <div className="lg:hidden flex items-center gap-3">
            <a href="tel:+18185150009" className="text-charcoal/50 hover:text-walnut transition-colors" aria-label="Call us">
              <PhoneIcon />
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-terracotta text-ivory px-4 py-2 rounded-[2px] font-sans text-[12px] font-bold hover:bg-terra-dark transition-colors"
            >
              Estimate
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="flex flex-col justify-center items-center gap-[5px] w-9 h-9 shrink-0"
            >
              <span className={`block w-5 h-px bg-walnut transition-all origin-center ${open ? 'rotate-45 translate-y-[3px]' : ''}`} />
              <span className={`block w-5 h-px bg-walnut transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-walnut transition-all origin-center ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden bg-ivory border-t border-sand px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-sans text-[16px] font-medium py-1 transition-colors ${
                    isActive ? 'text-walnut' : 'text-charcoal/60 hover:text-charcoal'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* Mobile sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-ivory border-t border-sand px-4 py-3 flex gap-3">
        <a
          href="tel:+18185150009"
          className="flex-1 border-[1.5px] border-walnut text-walnut py-3 rounded-[2px] font-sans text-sm font-bold text-center hover:bg-sand/30 transition-colors"
        >
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex-1 bg-terracotta text-ivory py-3 rounded-[2px] font-sans text-sm font-bold text-center hover:bg-terra-dark transition-colors"
        >
          Free Estimate
        </Link>
      </div>
    </>
  );
}
