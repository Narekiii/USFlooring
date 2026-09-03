import { Link } from 'react-router-dom';

const areas = [
  { city: 'Burbank', desc: 'Home base and showroom location. We serve the entire Burbank community for residential and commercial flooring.' },
  { city: 'Glendale', desc: 'Full flooring and molding services for Glendale homes and commercial properties.' },
  { city: 'Pasadena', desc: 'Serving Pasadena with hardwood, LVP, laminate, tile, and molding installation.' },
  { city: 'Studio City', desc: 'Residential flooring specialists for Studio City homes, condos, and investment properties.' },
  { city: 'North Hollywood', desc: 'Flooring and molding for homes, apartments, and commercial spaces in North Hollywood.' },
  { city: 'Sherman Oaks', desc: 'Full-service flooring installation for Sherman Oaks homes and multifamily properties.' },
  { city: 'Encino', desc: 'Serving Encino with premium hardwood, engineered wood, and luxury vinyl plank flooring.' },
  { city: 'Beverly Hills', desc: 'Residential and commercial flooring for Beverly Hills homes, estates, and businesses.' },
  { city: 'Greater Los Angeles', desc: 'We serve clients across the greater Los Angeles area. Contact us to confirm service to your location.' },
];

export default function ServiceAreas() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <section className="pt-32 pb-[72px] bg-walnut">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-light-oak uppercase tracking-wider mb-4">Where we work</p>
          <h1 className="font-serif text-[36px] lg:text-[52px] font-semibold text-warm-white leading-[1.08] mb-4">
            Flooring and Molding Services Across Los Angeles
          </h1>
          <p className="font-sans text-base text-warm-white/50 max-w-[55ch]">
            Our Burbank showroom is the starting point. We install flooring and molding throughout the greater Los Angeles area.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-[88px]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {areas.map((a, i) => (
              <div key={a.city} className="bg-cream border border-divider rounded-[3px] p-7">
                <div className="w-5 h-[2px] mb-4" style={{ backgroundColor: i % 3 === 0 ? '#2B1D16' : i % 3 === 1 ? '#6F4E37' : '#A9784D' }} />
                <h2 className="font-sans text-[16px] font-semibold text-walnut mb-2">{a.city}</h2>
                <p className="font-sans text-[13px] text-brown/55 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Showroom info */}
          <div className="bg-cream border border-divider rounded-[3px] p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-sans text-[11px] font-semibold text-oak uppercase tracking-wider mb-4">Showroom</p>
              <h2 className="font-serif text-[24px] font-semibold text-walnut mb-4">Visit Our Burbank Showroom</h2>
              <address className="not-italic font-sans text-[14px] text-brown/60 leading-relaxed mb-4">
                1508 W Burbank Blvd<br />Burbank, CA 91506
              </address>
              <p className="font-sans text-[13px] text-brown/45 mb-6">Monday – Saturday, 9am – 6pm</p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://www.google.com/maps/dir/?api=1&destination=1508+W+Burbank+Blvd+Burbank+CA+91506" target="_blank" rel="noopener noreferrer" className="bg-walnut text-warm-white px-6 py-3 rounded-[2px] font-sans text-[13px] font-semibold hover:bg-espresso transition-colors">Get Directions</a>
                <a href="tel:+18185150009" className="border-[1.5px] border-walnut text-walnut px-6 py-3 rounded-[2px] font-sans text-[13px] font-semibold hover:bg-cream transition-colors">Call (818) 515-0009</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[3px] aspect-[4/3] bg-sand">
              <iframe
                title="US Flooring & Molding Showroom Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-118.325%2C34.175%2C-118.300%2C34.190&layer=mapnik&marker=34.1824%2C-118.3128"
                width="100%" height="100%" style={{ border: 0, display: 'block' }} loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream border-t border-divider py-[72px]">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[28px] lg:text-[36px] font-semibold text-walnut mb-4 leading-tight">Don't See Your City?</h2>
          <p className="font-sans text-base text-brown/50 mb-8 max-w-[44ch] mx-auto">We serve many areas not listed here. Contact us to confirm service to your location and get a free estimate.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/estimate" className="bg-walnut text-warm-white px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:bg-espresso transition-colors">Request a Free Estimate</Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-walnut text-walnut px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:bg-cream transition-colors">Call (818) 515-0009</a>
          </div>
        </div>
      </section>
    </div>
  );
}
