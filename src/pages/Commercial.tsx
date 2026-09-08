import { Link } from 'react-router-dom';

const targets = [
  { title: 'Property Managers', desc: 'Reliable scheduling, clear communication, and flooring solutions designed for multi-unit and commercial properties.' },
  { title: 'Interior Designers', desc: 'Consistent product quality, accurate lead times, and a showroom with samples to support your project presentations.' },
  { title: 'General Contractors', desc: 'Subcontractor-level professionalism: documented estimates, on-time crews, and complete project documentation.' },
  { title: 'Remodeling Companies', desc: 'We coordinate directly with your project schedule to minimize downtime and deliver clean installations on deadline.' },
  { title: 'Retail & Office Spaces', desc: 'Commercial-grade flooring options and installation processes suited to high-traffic public and professional environments.' },
  { title: 'Multifamily Properties', desc: 'Unit-by-unit flooring replacement programs with consistent material selection, pricing, and installation quality.' },
];

const capabilities = [
  'Commercial flooring selection and consultation',
  'Detailed written estimates and project documentation',
  'Reliable scheduling and on-time installation',
  'Material coordination and delivery management',
  'Unit flooring programs for multifamily properties',
  'Coordination with contractors and designers',
  'Commercial LVP, tile, carpet, and hardwood',
  'Post-installation inspection and documentation',
];

export default function Commercial() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <section className="pt-32 pb-[72px] bg-charcoal">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-light-oak uppercase tracking-wider mb-4">Services</p>
          <h1 className="font-serif text-[36px] lg:text-[52px] font-semibold text-warm-white leading-[1.08] mb-4">Commercial Services</h1>
          <p className="font-sans text-base text-warm-white/50 max-w-[55ch]">
            Professional flooring and molding for property managers, designers, contractors, and commercial spaces across Los Angeles.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-[88px]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-6 h-[2px] bg-oak mb-5" />
            <h2 className="font-serif text-[28px] lg:text-[40px] font-semibold text-walnut mb-5 leading-tight">
              Corporate-Grade Service for Commercial Projects
            </h2>
            <p className="font-sans text-base text-brown/65 leading-relaxed mb-4">
              Commercial flooring projects require a different level of coordination than residential work. Scheduling has to align with tenant occupancy, material deliveries need to be precise, and installation teams need to perform reliably without supervision.
            </p>
            <p className="font-sans text-base text-brown/65 leading-relaxed mb-8">
              After 20+ years of Los Angeles projects, we bring that coordination discipline to every commercial engagement — from a single-unit rental refresh to a multi-floor office build-out.
            </p>
            <Link to="/estimate" className="inline-block bg-charcoal text-warm-white px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:bg-espresso transition-colors">
              Request a Commercial Estimate
            </Link>
          </div>
          <div className="overflow-hidden rounded-[3px] aspect-[4/3] bg-subtle">
            <img src="https://images.unsplash.com/photo-1643902917449-98c7ef8c9685?w=700&h=520&fit=crop&auto=format" alt="Commercial flooring project" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-warm-white py-[88px]">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-oak uppercase tracking-wider mb-4">Who we work with</p>
          <h2 className="font-serif text-[28px] lg:text-[40px] font-semibold text-walnut mb-10 leading-tight">We Serve Commercial Clients Across Los Angeles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {targets.map((t, i) => (
              <div key={t.title} className="bg-cream border border-divider rounded-[3px] p-7">
                <div className="w-5 h-[2px] mb-4" style={{ backgroundColor: i % 3 === 0 ? '#2B1D16' : i % 3 === 1 ? '#6F4E37' : '#A9784D' }} />
                <h3 className="font-sans text-[15px] font-semibold text-walnut mb-2">{t.title}</h3>
                <p className="font-sans text-[13px] text-brown/55 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-cream py-[88px]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-[11px] font-semibold text-oak uppercase tracking-wider mb-4">Capabilities</p>
            <h2 className="font-serif text-[28px] lg:text-[36px] font-semibold text-walnut mb-4 leading-tight">What We Bring to Commercial Projects</h2>
            <p className="font-sans text-base text-brown/60 leading-relaxed">Consistent product quality, reliable installation schedules, and professional communication throughout.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map((c) => (
              <div key={c} className="flex items-start gap-3 bg-warm-white border border-divider rounded-[2px] p-4">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A9784D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                <p className="font-sans text-[13px] text-brown/65">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-[72px]">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[28px] lg:text-[36px] font-semibold text-warm-white mb-4 leading-tight">Start a Commercial Project</h2>
          <p className="font-sans text-base text-warm-white/45 mb-8 max-w-[44ch] mx-auto">Request a commercial flooring estimate or call to discuss your project requirements.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/estimate" className="bg-warm-white text-walnut px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:bg-subtle transition-colors">Request an Estimate</Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-warm-white/35 text-warm-white/70 px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:border-warm-white hover:text-warm-white transition-colors">Call (818) 515-0009</a>
          </div>
        </div>
      </section>
    </div>
  );
}
