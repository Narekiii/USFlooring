import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumb, { breadcrumbJsonLd } from '@/components/Breadcrumb';

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Products & Services', href: '/products' }, { label: 'Moldings & Baseboards' }];

const faqs = [
  { q: 'What types of moldings does US Flooring & Molding install?', a: 'We install baseboards, shoe molding, quarter round, T-moldings, reducers, stair nose, and end caps. We carry coordinating molding profiles to match most flooring products we sell.' },
  { q: 'Is molding installation included with flooring installation?', a: "Molding installation is typically quoted alongside the flooring project. Whether it's included or quoted separately depends on the scope. We'll make the pricing clear during the estimate." },
  { q: 'What is the difference between baseboards and shoe molding?', a: 'Baseboards are the larger trim pieces installed along the base of walls to cover the gap between the wall and floor. Shoe molding is a smaller, narrower trim installed at the base of the baseboard to cover any remaining gap between the baseboard and the new flooring.' },
  { q: 'Do I need new baseboards when I install new flooring?', a: "Not always. If the existing baseboards are in good condition and the new flooring height is compatible, they can often be reused. We assess this during the estimate and let you know what's needed." },
  { q: 'Can moldings be painted or stained?', a: 'Yes. We carry moldings in both paintable and pre-stained finishes. Paintable profiles are primed and ready for the finish color of your choice. Stained options are available to coordinate with wood-tone flooring.' },
  { q: 'What are T-moldings and reducers used for?', a: 'T-moldings bridge transitions between two rooms where flooring heights are approximately equal. Reducers create a smooth slope between two surfaces at different heights — for example, where new flooring meets tile. End caps finish an open edge where the floor terminates, such as in a doorway.' },
];

const jsonLd = [
  breadcrumbJsonLd(crumbs),
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Molding and Baseboard Installation', provider: { '@type': 'LocalBusiness', name: 'US Flooring & Molding Inc.', url: 'https://www.usflooring.la/' }, areaServed: { '@type': 'City', name: 'Burbank' }, description: 'Molding and baseboard installation in Burbank and greater Los Angeles. Baseboards, shoe molding, T-moldings, stair nose, and more.' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
];

export default function MoldingInstallation() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <SEO
        title="Molding & Baseboard Installation in Burbank | US Flooring"
        description="Molding and baseboard installation in Burbank and Los Angeles. Baseboards, shoe molding, T-moldings, stair nose, and trim. Professional installation. Free estimate."
        canonical="https://www.usflooring.la/molding-baseboard-installation-burbank"
        ogTitle="Molding & Baseboard Installation in Burbank | US Flooring"
        ogDescription="Complete molding and baseboard installation from US Flooring & Molding Inc. in Burbank. The finishing detail that makes a floor look complete."
        ogUrl="https://www.usflooring.la/molding-baseboard-installation-burbank"
        jsonLd={jsonLd}
      />
      <Breadcrumb crumbs={crumbs} />

      <section className="pt-8 pb-16 bg-subtle">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Moldings & Baseboards · Burbank, CA</p>
            <h1 className="font-serif text-[40px] lg:text-[54px] font-semibold text-charcoal leading-[1.06] mb-5">
              Molding and Baseboard Installation in Burbank
            </h1>
            <p className="font-sans text-base lg:text-[17px] text-charcoal/60 leading-relaxed mb-8">
              The finishing detail that turns an installed floor into a finished room. We carry and install a full line of coordinating moldings — baseboards, transitions, stair nose, and trim — so everything ties together cleanly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="bg-red text-white px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors text-center">Get a Free Estimate</Link>
              <a href="tel:+18185150009" className="border-[1.5px] border-charcoal text-charcoal px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-subtle/60 transition-colors text-center">Call (818) 515-0009</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[3px] aspect-[4/3] bg-subtle/30">
            <img src="https://images.unsplash.com/photo-1655457397686-4dd23e78a918?w=720&h=540&fit=crop&auto=format" alt="Baseboard and molding trim installation" className="w-full h-full object-cover" loading="eager" fetchPriority="high" width="720" height="540" />
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-charcoal leading-tight mb-10">Molding Types We Carry and Install</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Baseboards', desc: 'Installed along the base of walls to cover the gap between wall and floor. Available in multiple heights and profiles to match the style of your home.' },
              { title: 'Shoe Molding & Quarter Round', desc: 'Slim trim installed at the base of baseboards to cover any remaining gap between the baseboard and the finished floor surface.' },
              { title: 'T-Moldings', desc: 'Transition pieces that bridge two rooms with flooring at approximately equal heights — used at doorways where flooring types change.' },
              { title: 'Reducers', desc: 'Create a smooth sloped transition between flooring surfaces at different heights — for example, where a new floor meets existing tile.' },
              { title: 'Stair Nose', desc: 'Protects and finishes the front edge of stair treads where flooring is installed on steps.' },
              { title: 'End Caps', desc: 'Finish open floor edges at sliding glass doors, room thresholds, or anywhere the flooring terminates without meeting a wall.' },
            ].map((b) => (
              <div key={b.title} className="bg-subtle border border-border rounded-[3px] p-7">
                <h3 className="font-sans text-[15px] font-semibold text-charcoal mb-3">{b.title}</h3>
                <p className="font-sans text-[13px] text-charcoal/55 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-subtle border-t border-border">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-charcoal leading-tight mb-10">Moldings & Baseboards FAQ</h2>
          <div className="flex flex-col divide-y divide-sand">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <h3 className="font-sans text-[15px] font-semibold text-charcoal mb-2">{faq.q}</h3>
                <p className="font-sans text-[14px] text-charcoal/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory border-t border-border">
        <div className="max-w-[1180px] mx-auto px-6 py-12">
          <h2 className="font-sans text-[13px] font-semibold text-charcoal/40 uppercase tracking-widest mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'Hardwood Flooring', href: '/hardwood-flooring-burbank' }, { label: 'Laminate Flooring', href: '/laminate-flooring-burbank' }, { label: 'Luxury Vinyl Flooring', href: '/luxury-vinyl-flooring-burbank' }, { label: 'Professional Installation', href: '/flooring-installation-burbank' }].map((l) => (
              <Link key={l.href} to={l.href} className="border border-border bg-subtle text-charcoal/60 font-sans text-[13px] px-4 py-2 rounded-[2px] hover:border-walnut/40 hover:text-walnut transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-ivory mb-4">Finish the Job Right</h2>
          <p className="font-sans text-base text-ivory/50 leading-relaxed mb-8">Moldings are part of every flooring project we do. Visit our Burbank showroom or request a free estimate to discuss your project.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="bg-red text-white px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors">Request Free Estimate</Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-ivory/30 text-ivory/70 px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:border-ivory/60 hover:text-ivory transition-colors">Call (818) 515-0009</a>
          </div>
        </div>
      </section>
    </div>
  );
}
