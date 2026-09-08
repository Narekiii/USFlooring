import { Link } from 'react-router-dom';

const types = [
  { name: 'Baseboards', desc: 'Clean, precisely fitted baseboards that protect walls and give every room a finished appearance. Available in a range of profiles and heights to match any flooring and interior style.' },
  { name: 'Crown Molding', desc: 'Architectural crown molding installed where the wall meets the ceiling. Adds classical character and a sense of proportion to living rooms, dining rooms, and master bedrooms.' },
  { name: 'Door Casing', desc: 'Door casing frames every door opening with clean lines and precise miter joints. We match the profile to your existing trim or help you select a new profile for the space.' },
  { name: 'Window Casing', desc: 'Window casing that ties together the trim package throughout the home. Installed with careful attention to sill, apron, and side-casing alignment.' },
  { name: 'Decorative Molding', desc: 'Chair rail, picture rail, panel molding, and wainscoting that add architectural depth and visual interest to dining rooms, hallways, and home offices.' },
  { name: 'Custom Finishing', desc: 'When standard profiles do not meet the requirement, we source custom molding and fabricate finishing solutions that match the existing architecture precisely.' },
];

export default function Molding() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <section className="pt-32 pb-[72px] bg-charcoal">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-light-oak uppercase tracking-wider mb-4">Services</p>
          <h1 className="font-serif text-[36px] lg:text-[52px] font-semibold text-warm-white leading-[1.08] mb-4">Molding &amp; Trim</h1>
          <p className="font-sans text-base text-warm-white/50 max-w-[55ch]">
            Baseboards, crown molding, door and window casing, decorative molding, and custom finishing — precision-fitted to complete every room.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="aspect-[21/6] overflow-hidden bg-cream">
        <img src="https://images.unsplash.com/photo-1655457397686-4dd23e78a918?w=1400&h=480&fit=crop&auto=format" alt="Quality hardwood molding and trim" className="w-full h-full object-cover" />
      </div>

      {/* Why molding matters */}
      <section className="bg-cream py-[88px]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-6 h-[2px] bg-oak mb-5" />
            <h2 className="font-serif text-[28px] lg:text-[40px] font-semibold text-walnut mb-5 leading-tight">
              Molding Is the Detail That Completes a Room
            </h2>
            <p className="font-sans text-base text-brown/65 leading-relaxed mb-4">
              A floor can be beautiful, but without well-fitted baseboards and trim, the installation feels unfinished. Molding is what ties the floor to the wall, the wall to the ceiling, and every door and window into the architecture of the space.
            </p>
            <p className="font-sans text-base text-brown/65 leading-relaxed mb-8">
              After 20+ years of flooring and molding installations across Los Angeles, we understand how critical precise fitting, proper mitering, and correct material selection are to the finished result.
            </p>
            <Link to="/estimate" className="inline-block bg-charcoal text-warm-white px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:bg-espresso transition-colors">
              Get a Molding Estimate
            </Link>
          </div>
          <div className="bg-warm-white p-10 rounded-[3px] border border-divider">
            <p className="font-serif text-[20px] italic text-walnut leading-snug mb-5">
              "A floor is the foundation. Molding is the signature."
            </p>
            <div className="w-6 h-px bg-light-oak" />
            <p className="font-sans text-[12px] text-brown/35 mt-3">20+ years of molding and trim installations across Los Angeles</p>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="bg-warm-white py-[88px]">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-oak uppercase tracking-wider mb-4">What we install</p>
          <h2 className="font-serif text-[28px] lg:text-[40px] font-semibold text-walnut mb-10 leading-tight">Molding &amp; Trim Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {types.map((t, i) => (
              <div key={t.name} className="bg-cream border border-divider rounded-[3px] p-7">
                <div className="w-5 h-[2px] mb-4" style={{ backgroundColor: i % 3 === 0 ? '#2B1D16' : i % 3 === 1 ? '#6F4E37' : '#A9784D' }} />
                <h3 className="font-sans text-[15px] font-semibold text-walnut mb-2">{t.name}</h3>
                <p className="font-sans text-[13px] text-brown/55 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-[72px]">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-[24px] font-semibold text-warm-white mb-2">Ready to Finish the Room?</h2>
            <p className="font-sans text-base text-warm-white/45">Get a free estimate for molding and trim installation.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link to="/estimate" className="bg-warm-white text-walnut px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:bg-subtle transition-colors">Get a Free Estimate</Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-warm-white/35 text-warm-white/70 px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:border-warm-white hover:text-warm-white transition-colors">Call Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
