import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Hardwood Flooring',
    img: 'https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=800&h=520&fit=crop&auto=format',
    desc: 'Solid and engineered hardwood in a wide range of species, stains, and surface finishes. Hardwood adds enduring value and character to any room.',
    benefits: ['Long-lasting natural beauty', 'Can be sanded and refinished', 'Adds lasting home value', 'Wide species and finish selection'],
    best: 'Living rooms, dining rooms, bedrooms, hallways',
    maintenance: 'Sweep or vacuum regularly; avoid excess moisture; refinish as needed.',
  },
  {
    name: 'Engineered Wood',
    img: 'https://images.unsplash.com/photo-1773098587044-0c830e398428?w=800&h=520&fit=crop&auto=format',
    desc: 'Engineered construction provides dimensional stability in environments where solid wood would expand or contract. Natural wood veneer on top delivers the authentic look.',
    benefits: ['More stable than solid hardwood', 'Suitable for radiant heating', 'Available in wide planks', 'Natural wood surface layer'],
    best: 'Kitchens, basements, rooms with temperature variation',
    maintenance: 'Sweep regularly; damp mop with approved cleaner; avoid standing water.',
  },
  {
    name: 'Luxury Vinyl Plank',
    img: 'https://images.unsplash.com/photo-1695191388218-f6259600223f?w=800&h=520&fit=crop&auto=format',
    desc: 'Waterproof, scratch-resistant luxury vinyl with realistic wood and stone visuals. One of our most popular choices for modern Los Angeles homes.',
    benefits: ['100% waterproof', 'Scratch and dent resistant', 'Comfortable underfoot', 'Realistic wood and stone looks'],
    best: 'Kitchens, bathrooms, laundry rooms, high-traffic areas',
    maintenance: 'Sweep and damp mop; avoid abrasive cleaners.',
  },
  {
    name: 'Laminate Flooring',
    img: 'https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=800&h=520&fit=crop&auto=format',
    desc: 'High-performance laminate that delivers the look of hardwood with a practical price point and easy maintenance. Ideal for busy households and rental properties.',
    benefits: ['Affordable and durable', 'Wide style and color selection', 'Scratch and stain resistant', 'Easy to maintain'],
    best: 'Rental properties, high-traffic areas, second floors',
    maintenance: 'Sweep and damp mop; avoid excess water; repair chips promptly.',
  },
  {
    name: 'Tile Flooring',
    img: 'https://images.unsplash.com/photo-1643902917449-98c7ef8c9685?w=800&h=520&fit=crop&auto=format',
    desc: 'Porcelain, ceramic, and natural stone tile for kitchens, bathrooms, entryways, and commercial spaces. Durable, beautiful, and easy to clean.',
    benefits: ['Extremely durable', 'Water and stain resistant', 'Wide design range', 'Ideal for wet areas'],
    best: 'Bathrooms, kitchens, entryways, commercial spaces',
    maintenance: 'Sweep and mop; regrout periodically; seal natural stone.',
  },
  {
    name: 'Carpet',
    img: 'https://images.unsplash.com/photo-1552289195-3f47ade0a94a?w=800&h=520&fit=crop&auto=format',
    desc: 'Plush and low-pile carpet options in a range of textures, patterns, and performance ratings. Adds warmth and comfort to bedrooms and living areas.',
    benefits: ['Warm and comfortable', 'Noise reducing', 'Wide style selection', 'Budget-friendly options available'],
    best: 'Bedrooms, living rooms, offices, stairs',
    maintenance: 'Vacuum regularly; professional cleaning recommended annually.',
  },
];

export default function Flooring() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <section className="pt-32 pb-[72px] bg-walnut">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-light-oak uppercase tracking-wider mb-4">Products</p>
          <h1 className="font-serif text-[36px] lg:text-[52px] font-semibold text-warm-white leading-[1.08] mb-4">Flooring Products</h1>
          <p className="font-sans text-base text-warm-white/50 max-w-[55ch]">
            Hardwood, engineered wood, luxury vinyl plank, laminate, tile, and carpet — with expert guidance to find the right material for your project.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-[88px]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="flex flex-col gap-24">
            {categories.map((c, i) => (
              <div key={c.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
                <div className="overflow-hidden rounded-[3px] aspect-[16/10] bg-cream">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <div className="w-6 h-[2px] bg-oak mb-5" />
                  <h2 className="font-serif text-[28px] font-semibold text-walnut mb-4 leading-tight">{c.name}</h2>
                  <p className="font-sans text-base text-brown/65 leading-relaxed mb-5">{c.desc}</p>
                  <div className="mb-5">
                    <p className="font-sans text-[11px] font-semibold text-brown/40 uppercase tracking-wide mb-3">Main Benefits</p>
                    <ul className="flex flex-col gap-2">
                      {c.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3 font-sans text-[14px] text-brown/65">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A9784D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-[11px] font-semibold text-brown/40 uppercase tracking-wide mb-1">Best For</p>
                      <p className="font-sans text-[13px] text-brown/55">{c.best}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] font-semibold text-brown/40 uppercase tracking-wide mb-1">Maintenance</p>
                      <p className="font-sans text-[13px] text-brown/55">{c.maintenance}</p>
                    </div>
                  </div>
                  <Link to="/estimate" className="inline-block bg-walnut text-warm-white px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:bg-espresso transition-colors">
                    Ask About {c.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream border-t border-divider py-[72px]">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[28px] lg:text-[36px] font-semibold text-walnut mb-4 leading-tight">Visit Our Burbank Showroom</h2>
          <p className="font-sans text-base text-brown/50 mb-8 max-w-[44ch] mx-auto">See and compare flooring samples in person with expert guidance. No appointment needed.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/estimate" className="bg-walnut text-warm-white px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:bg-espresso transition-colors">Request a Free Estimate</Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-walnut text-walnut px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:bg-cream transition-colors">Call (818) 515-0009</a>
          </div>
        </div>
      </section>
    </div>
  );
}
