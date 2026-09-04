import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <SEO
        title="Page Not Found | US Flooring & Molding Inc."
        description="The page you were looking for could not be found. Visit US Flooring & Molding Inc. for flooring and molding services in Burbank, CA."
        canonical={typeof window !== 'undefined' ? window.location.href : 'https://www.usflooring.la/'}
        robots="noindex, follow"
      />
      <section className="pt-40 pb-24 bg-[#F0E9DC] min-h-[70vh] flex items-center">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-6">404</p>
          <h1 className="font-serif text-[40px] lg:text-[52px] font-semibold text-charcoal leading-tight mb-5">
            Page Not Found
          </h1>
          <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-10">
            The page you're looking for may have moved or no longer exists.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link to="/" className="bg-walnut text-ivory px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-walnut-dark transition-colors">
              Back to Homepage
            </Link>
            <Link to="/contact" className="border-[1.5px] border-walnut text-walnut px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-sand/30 transition-colors">
              Request Free Estimate
            </Link>
          </div>
          <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link to="/products" className="font-sans text-[13px] text-charcoal/50 hover:text-walnut transition-colors">Flooring Products</Link>
            <Link to="/flooring-installation-burbank" className="font-sans text-[13px] text-charcoal/50 hover:text-walnut transition-colors">Flooring Installation</Link>
            <Link to="/gallery" className="font-sans text-[13px] text-charcoal/50 hover:text-walnut transition-colors">Gallery</Link>
            <a href="tel:+18185150009" className="font-sans text-[13px] text-charcoal/50 hover:text-walnut transition-colors">Call (818) 515-0009</a>
          </nav>
        </div>
      </section>
    </div>
  );
}
