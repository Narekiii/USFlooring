import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Hardwood Flooring',
    tagline: 'Timeless underfoot. Lasts a generation.',
    desc: 'Solid and engineered hardwood in oak, maple, hickory, walnut, and more. We carry domestic and exotic species, prefinished and unfinished — and we install all of it with the care it deserves.',
    img: 'https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=700&h=500&fit=crop&auto=format',
    features: ['Solid & engineered options', 'Pre-finished & unfinished', 'Refinishing & restoration', 'Domestic & exotic species'],
  },
  {
    name: 'Laminate Flooring',
    tagline: 'Real-wood look. Real-world budget.',
    desc: 'Modern laminate gives you the character of hardwood with better scratch resistance and a price that keeps the rest of your renovation budget intact. We carry leading brands in every plank width and finish.',
    img: 'https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=700&h=500&fit=crop&auto=format',
    features: ['High-definition print layers', 'Scratch & dent resistant', 'Click-lock installation', 'Wide plank options'],
  },
  {
    name: 'Luxury Vinyl Flooring',
    tagline: 'Waterproof. Tough. Still looks great.',
    desc: 'LVP and LVT are the right answer for kitchens, bathrooms, basements, and homes with pets or heavy foot traffic. Completely waterproof, dimensionally stable, and comfortable underfoot.',
    img: 'https://images.unsplash.com/photo-1695191388218-f6259600223f?w=700&h=500&fit=crop&auto=format',
    features: ['100% waterproof core', 'Pet & kid friendly', 'Floating or glue-down', 'Underfloor heating compatible'],
  },
  {
    name: 'Moldings & Trim',
    tagline: 'The detail that makes the difference.',
    desc: "A floor isn't finished until the transitions, baseboards, and quarter-rounds are right. We carry and install a full line of coordinating moldings so everything ties together cleanly.",
    img: 'https://images.unsplash.com/photo-1655457397686-4dd23e78a918?w=700&h=500&fit=crop&auto=format',
    features: ['Baseboards & shoe molding', 'T-moldings & reducers', 'Stair nose & end caps', 'Painted & stained finishes'],
  },
  {
    name: 'Professional Installation',
    tagline: 'Our name is on every install.',
    desc: "We don't hand your job off to a subcontractor you've never met. Our own crew handles the work — prep, install, cleanup, and follow-up. That's the accountability a family name demands.",
    img: 'https://images.unsplash.com/photo-1622936063167-e32e9f955438?w=700&h=500&fit=crop&auto=format',
    features: ['Moisture & subfloor prep', 'Furniture moving', 'Haul-away & cleanup', '1-year labor guarantee'],
  },
  {
    name: 'Showroom Consultation',
    tagline: 'See it. Feel it. Decide with confidence.',
    desc: 'Our Burbank showroom lets you see full-size samples in real light before you commit. No pressure, no sales tactics — just honest guidance from people who do this every day.',
    img: 'https://images.unsplash.com/photo-1643903032976-8c0d0556a8ea?w=700&h=500&fit=crop&auto=format',
    features: ['Full-size floor samples', 'Expert guidance', 'In-home measurement', 'Free estimates'],
  },
];

export default function Products() {
  return (
    <div className="pb-[72px] lg:pb-0">
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#F0E9DC]">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-bold text-terracotta uppercase tracking-widest mb-4">Products &amp; Services</p>
          <h1 className="font-serif text-[40px] lg:text-[60px] font-bold text-charcoal leading-[1.06] max-w-[580px] mb-5">
            Everything You Need, Under One Roof
          </h1>
          <p className="font-sans text-base lg:text-[18px] text-charcoal/60 leading-relaxed max-w-[560px] mb-8">
            Flooring, moldings, and professional installation — all from a family that has been getting this right for over fifteen years in Burbank.
          </p>
          <Link to="/contact" className="inline-block bg-terracotta text-ivory px-8 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-terra-dark transition-colors">
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-20">
          <div className="flex flex-col gap-20">
            {services.map((s, i) => (
              <div key={s.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={`overflow-hidden rounded-[3px] aspect-[4/3] bg-sand/30 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <p className="font-sans text-[11px] font-bold text-terracotta uppercase tracking-widest mb-3">{s.tagline}</p>
                  <h2 className="font-serif text-[28px] lg:text-[36px] font-bold text-charcoal mb-4 leading-tight">{s.name}</h2>
                  <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 font-sans text-[13px] text-charcoal/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-walnut shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 font-sans text-[14px] font-bold text-terracotta hover:text-terra-dark transition-colors group">
                    Ask about {s.name} <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-charcoal py-20">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[32px] lg:text-[44px] font-bold text-ivory mb-4">Not Sure Where to Start?</h2>
          <p className="font-sans text-base text-ivory/50 leading-relaxed mb-8">
            Come by the showroom or give us a call. We'll help you figure out the right material for your space, your lifestyle, and your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="bg-terracotta text-ivory px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-terra-dark transition-colors">
              Request Free Estimate
            </Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-ivory/30 text-ivory/70 px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:border-ivory/60 hover:text-ivory transition-colors">
              Call (818) 515-0009
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
