import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumb, { breadcrumbJsonLd } from '@/components/Breadcrumb';

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Products & Services', href: '/products' }, { label: 'Hardwood Flooring' }];

const faqs = [
  { q: 'What types of hardwood does US Flooring & Molding carry?', a: 'We carry solid hardwood and engineered hardwood in species including oak, maple, hickory, walnut, and others. Options include prefinished and unfinished boards in a range of widths, stains, and finishes.' },
  { q: 'What is the difference between solid and engineered hardwood?', a: 'Solid hardwood is milled from a single piece of wood and can be sanded and refinished multiple times over its life. Engineered hardwood has a real wood veneer over a stable plywood core, which makes it better suited for environments with humidity variation and is often compatible with radiant heat.' },
  { q: 'Can hardwood be installed in kitchens or bathrooms?', a: 'Solid hardwood is generally not recommended in high-moisture areas like full bathrooms. Engineered hardwood with appropriate moisture barriers may work in kitchens, depending on subfloor conditions and traffic. We will assess your space and recommend accordingly.' },
  { q: 'How long does hardwood flooring installation take?', a: 'Timeline depends on the square footage, whether the hardwood needs to acclimate, subfloor condition, and any demolition of existing flooring. We will give you a realistic schedule during the estimate.' },
  { q: 'What does the 1-year labor guarantee cover?', a: 'Our 1-year labor guarantee covers workmanship defects in the installation itself. If something is wrong with how we installed the floor — not manufacturer defects or normal wear — we come back and fix it.' },
  { q: 'Can existing hardwood be refinished instead of replaced?', a: 'In many cases, yes. If the existing floor has enough wear layer remaining, refinishing is a cost-effective alternative to replacement. We can assess your floor during the estimate.' },
];

const jsonLd = [
  breadcrumbJsonLd(crumbs),
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hardwood Flooring Sales and Installation',
    provider: { '@type': 'LocalBusiness', name: 'US Flooring & Molding Inc.', url: 'https://www.usflooring.la/' },
    areaServed: { '@type': 'City', name: 'Burbank' },
    description: 'Solid and engineered hardwood flooring sales and professional installation serving Burbank and greater Los Angeles.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
];

export default function HardwoodFlooring() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <SEO
        title="Hardwood Flooring in Burbank, CA | US Flooring"
        description="Hardwood flooring sales and professional installation in Burbank and Los Angeles. Solid and engineered hardwood in oak, maple, walnut, and more. Free estimate."
        canonical="https://www.usflooring.la/hardwood-flooring-burbank"
        ogTitle="Hardwood Flooring in Burbank | US Flooring & Molding"
        ogDescription="Solid and engineered hardwood flooring from a family-owned Burbank flooring store with over 20 years of installation experience."
        ogUrl="https://www.usflooring.la/hardwood-flooring-burbank"
        jsonLd={jsonLd}
      />
      <Breadcrumb crumbs={crumbs} />

      {/* Hero */}
      <section className="pt-8 pb-16 bg-[#F0E9DC]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Hardwood Flooring · Burbank, CA</p>
            <h1 className="font-serif text-[40px] lg:text-[54px] font-semibold text-charcoal leading-[1.06] mb-5">
              Hardwood Flooring Sales and Installation in Burbank
            </h1>
            <p className="font-sans text-base lg:text-[17px] text-charcoal/60 leading-relaxed mb-8">
              Real wood underfoot. We help you choose the right species, finish, and format for your home — then we install it properly so it lasts for decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="bg-walnut text-ivory px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-walnut-dark transition-colors text-center">
                Get a Free Estimate
              </Link>
              <a href="tel:+18185150009" className="border-[1.5px] border-walnut text-walnut px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-sand/30 transition-colors text-center">
                Call (818) 515-0009
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[3px] aspect-[4/3] bg-sand/30">
            <img
              src="https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=720&h=540&fit=crop&auto=format"
              alt="Hardwood flooring installation"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              width="720"
              height="540"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-charcoal leading-tight mb-10">
            Why Choose Hardwood Flooring?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Lasts Decades', desc: 'Properly installed and maintained hardwood can last the life of the home. Solid hardwood can be sanded and refinished multiple times as it ages.' },
              { title: 'Timeless Aesthetic', desc: "Wood grain doesn't go out of style. The warmth and character of real hardwood works across interior styles from traditional to contemporary." },
              { title: 'Adds Home Value', desc: 'Hardwood is consistently cited as a feature that appeals to buyers and supports resale value.' },
              { title: 'Improved Air Quality', desc: 'Unlike carpet, hardwood does not trap allergens, pet dander, or dust mites, making it easier to maintain a cleaner indoor environment.' },
              { title: 'Wide Style Range', desc: 'From narrow strip oak to wide-plank walnut, prefinished to site-finished, the selection available today covers every interior direction.' },
              { title: 'Repairs Are Possible', desc: 'Damaged boards can often be replaced individually, and the surface can be refinished to address scratches or worn areas — something not possible with most other flooring types.' },
            ].map((b) => (
              <div key={b.title} className="bg-[#F0E9DC] border border-sand rounded-[3px] p-7">
                <h3 className="font-sans text-[15px] font-semibold text-charcoal mb-3">{b.title}</h3>
                <p className="font-sans text-[13px] text-charcoal/55 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="bg-[#F0E9DC] border-t border-sand">
        <div className="max-w-[1180px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-charcoal leading-tight mb-6">
            Solid vs. Engineered Hardwood
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-ivory border border-sand rounded-[3px] p-8">
              <h3 className="font-sans text-[16px] font-semibold text-charcoal mb-4">Solid Hardwood</h3>
              <p className="font-sans text-[14px] text-charcoal/60 leading-relaxed mb-4">Milled from a single piece of wood. Can be sanded and refinished multiple times. Best for above-grade installations in climate-controlled environments.</p>
              <ul className="flex flex-col gap-2">
                {['Refinishable 3–5 times over its lifespan', 'Available in any species or finish', 'Not recommended below grade or over radiant heat', 'Typically 3/4" thick'].map((i) => (
                  <li key={i} className="flex items-start gap-2 font-sans text-[13px] text-charcoal/55">
                    <span className="text-walnut shrink-0 mt-0.5">✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ivory border border-sand rounded-[3px] p-8">
              <h3 className="font-sans text-[16px] font-semibold text-charcoal mb-4">Engineered Hardwood</h3>
              <p className="font-sans text-[14px] text-charcoal/60 leading-relaxed mb-4">Real wood veneer over a plywood core. More dimensionally stable than solid wood, making it a better fit for environments with humidity variation.</p>
              <ul className="flex flex-col gap-2">
                {['Compatible with radiant floor heating', 'Suitable for below-grade and on-slab installations', 'Available with floating, glue-down, or nail-down installs', 'Can often be refinished 1–2 times depending on veneer thickness'].map((i) => (
                  <li key={i} className="flex items-start gap-2 font-sans text-[13px] text-charcoal/55">
                    <span className="text-walnut shrink-0 mt-0.5">✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-ivory border-t border-sand">
        <div className="max-w-[1180px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-charcoal leading-tight mb-10">
            Our Installation Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Estimate & Selection', desc: 'We assess your space, discuss your goals and budget, and help you choose the right wood species, format, and finish.' },
              { step: '02', title: 'Subfloor Preparation', desc: 'We inspect and address subfloor issues before installation. Proper prep is where installs succeed or fail.' },
              { step: '03', title: 'Installation', desc: 'Our own crew installs the floor. We do not subcontract. Attention to acclimation, expansion gaps, and transitions is standard.' },
              { step: '04', title: 'Cleanup & Walkthrough', desc: 'We clean up the work area and walk through the finished floor with you before we consider the job done.' },
            ].map((s) => (
              <div key={s.step} className="bg-[#F0E9DC] border border-sand rounded-[3px] p-7">
                <div className="font-sans text-[11px] font-semibold text-walnut/50 uppercase tracking-widest mb-3">{s.step}</div>
                <h3 className="font-sans text-[15px] font-semibold text-charcoal mb-3">{s.title}</h3>
                <p className="font-sans text-[13px] text-charcoal/55 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F0E9DC] border-t border-sand">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-charcoal leading-tight mb-10">
            Hardwood Flooring FAQ
          </h2>
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

      {/* Related services */}
      <section className="bg-ivory border-t border-sand">
        <div className="max-w-[1180px] mx-auto px-6 py-12">
          <h2 className="font-sans text-[13px] font-semibold text-charcoal/40 uppercase tracking-widest mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Laminate Flooring', href: '/laminate-flooring-burbank' },
              { label: 'Luxury Vinyl Flooring', href: '/luxury-vinyl-flooring-burbank' },
              { label: 'Professional Installation', href: '/flooring-installation-burbank' },
              { label: 'Moldings & Trim', href: '/molding-baseboard-installation-burbank' },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="border border-sand bg-[#F0E9DC] text-charcoal/60 font-sans text-[13px] px-4 py-2 rounded-[2px] hover:border-walnut/40 hover:text-walnut transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom CTA */}
      <section className="bg-charcoal py-16">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-ivory mb-4">
            See Hardwood Samples in Person
          </h2>
          <p className="font-sans text-base text-ivory/50 leading-relaxed mb-8">
            Visit our Burbank showroom at 1508 W Burbank Blvd to compare species, widths, and finishes in real light before you commit. Estimates are free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="bg-walnut text-ivory px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-walnut-dark transition-colors">
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
