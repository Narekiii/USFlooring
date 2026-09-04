import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <SEO
        title="Page Not Found | US Flooring & Molding Inc."
        description="The page you were looking for could not be found. Visit US Flooring & Molding Inc. for flooring and molding services in Burbank, CA."
        canonical="https://www.usflooring.la/404"
      />
      <section className="pt-40 pb-24 bg-[#F0E9DC] min-h-[70vh] flex items-center">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-6">404</p>
          <h1 className="font-serif text-[40px] lg:text-[52px] font-semibold text-charcoal leading-tight mb-5">
            Page Not Found
          </h1>
          <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-10">
            The page you were looking for doesn't exist or may have moved. Head back to the homepage or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="bg-walnut text-ivory px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-walnut-dark transition-colors">
              Back to Homepage
            </Link>
            <Link to="/contact" className="border-[1.5px] border-walnut text-walnut px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-sand/30 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
