import { Link } from 'react-router-dom';

const steps = [
  { n: '01', title: 'Site Evaluation', desc: 'We assess the existing subfloor, measure the space, identify moisture or leveling issues, and document what is needed for a clean, long-lasting installation.' },
  { n: '02', title: 'Measurements & Estimate', desc: 'Precise measurements with a fully itemized estimate — materials, labor, and any subfloor work required — so there are no surprises after the job begins.' },
  { n: '03', title: 'Material Selection', desc: 'Final confirmation of the selected flooring material, finish, and any transition or molding components needed to complete the project.' },
  { n: '04', title: 'Floor Preparation', desc: 'Removal of existing flooring, subfloor leveling, moisture barrier application, and any structural repairs required before installation begins.' },
  { n: '05', title: 'Professional Installation', desc: 'Performed by our experienced installation crew using proper techniques for the selected material — glue-down, nail-down, or floating — with careful attention to pattern, direction, and layout.' },
  { n: '06', title: 'Final Inspection & Cleanup', desc: 'We inspect the completed installation together, address any items, install transitions and moldings, and leave the space clean and ready to use.' },
];

const details = [
  { title: 'Floor Removal', desc: 'Complete removal of carpet, hardwood, tile, laminate, or vinyl — including tack strips, staples, and adhesive residue.' },
  { title: 'Subfloor Preparation', desc: 'Leveling, patching, sanding, or adding underlayment to create a flat, stable surface for the new floor.' },
  { title: 'Moisture Protection', desc: 'Moisture barriers and sealers applied as required for the material and subfloor type — critical in California climates.' },
  { title: 'Transitions & Thresholds', desc: 'T-molding, reducers, and threshold strips fitted precisely between flooring materials and room transitions.' },
  { title: 'Baseboard Installation', desc: 'Baseboards and quarter-round installed after flooring to protect walls and create a clean, finished appearance.' },
  { title: 'Complete Cleanup', desc: 'All debris, packaging, and installation materials removed. Space left clean and ready to enjoy.' },
];

export default function Installation() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <section className="pt-32 pb-[72px] bg-walnut">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-light-oak uppercase tracking-wider mb-4">Services</p>
          <h1 className="font-serif text-[36px] lg:text-[52px] font-semibold text-warm-white leading-[1.08] mb-4">Professional Installation</h1>
          <p className="font-sans text-base text-warm-white/50 max-w-[55ch]">
            A precise, thorough installation process built on 20+ years of experience — from site evaluation through final inspection, with a 1-year labor guarantee.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="aspect-[21/6] overflow-hidden bg-cream">
        <img src="https://images.unsplash.com/photo-1622936063167-e32e9f955438?w=1400&h=480&fit=crop&auto=format" alt="Professional flooring installation" className="w-full h-full object-cover" />
      </div>

      {/* Process */}
      <section className="bg-warm-white py-[88px]">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-oak uppercase tracking-wider mb-4">Our process</p>
          <h2 className="font-serif text-[28px] lg:text-[40px] font-semibold text-walnut mb-12 leading-tight max-w-[520px]">
            Six Steps to a Professionally Installed Floor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="bg-cream border border-divider rounded-[3px] p-7">
                <p className="font-serif text-[36px] font-semibold text-oak/30 leading-none mb-4">{s.n}</p>
                <h3 className="font-sans text-[15px] font-semibold text-walnut mb-2">{s.title}</h3>
                <p className="font-sans text-[13px] text-brown/55 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-cream py-[88px]">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-oak uppercase tracking-wider mb-4">What's included</p>
          <h2 className="font-serif text-[28px] lg:text-[40px] font-semibold text-walnut mb-10 leading-tight">Comprehensive Preparation &amp; Finishing</h2>
          <div className="border-t border-divider">
            {details.map((d) => (
              <div key={d.title} className="flex flex-col sm:flex-row gap-4 py-6 border-b border-divider">
                <h3 className="font-sans text-[14px] font-semibold text-walnut sm:w-48 shrink-0">{d.title}</h3>
                <p className="font-sans text-[14px] text-brown/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-walnut py-[88px]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-6 h-[2px] bg-light-oak mb-6" />
            <h2 className="font-serif text-[28px] lg:text-[40px] font-semibold text-warm-white mb-5 leading-tight">1-Year Labor Guarantee</h2>
            <p className="font-sans text-base text-warm-white/50 leading-relaxed mb-8">
              Every installation we perform is backed by a one-year workmanship guarantee. If anything related to the installation itself fails within the first year, we return and correct it at no charge. That's how confident we are in our work.
            </p>
            <Link to="/estimate" className="inline-block bg-warm-white text-walnut px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:bg-sand transition-colors">
              Request a Free Estimate
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '20+', l: 'Years of installations' },
              { n: '1 yr', l: 'Labor guarantee' },
              { n: 'LA', l: 'Serving all of Los Angeles' },
              { n: 'R&C', l: 'Residential & commercial' },
            ].map((s) => (
              <div key={s.n} className="bg-espresso rounded-[3px] p-6 text-center">
                <p className="font-serif text-[28px] font-semibold text-light-oak leading-none mb-2">{s.n}</p>
                <p className="font-sans text-[12px] text-warm-white/40 leading-snug">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
