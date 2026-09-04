import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumb, { breadcrumbJsonLd } from '@/components/Breadcrumb';

const services = [
  {
    name: 'Hardwood Flooring',
    tagline: 'Timeless underfoot. Lasts a generation.',
    desc: 'Solid and engineered hardwood in oak, maple, hickory, walnut, and more. We carry domestic and exotic species, prefinished and unfinished — and we install all of it with the care it deserves.',
    img: 'https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=700&h=500&fit=crop&auto=format',
    features: ['Solid & engineered options', 'Pre-finished & unfinished', 'Refinishing & restoration', 'Domestic & exotic species'],
    href: '/hardwood-flooring-burbank',
  },
  {
    name: 'Laminate Flooring',
    tagline: 'Real-wood look. Real-world budget.',
    desc: 'Modern laminate gives you the character of hardwood with better scratch resistance and a price that keeps the rest of your renovation budget intact. We carry leading brands in every plank width and finish.',
    img: 'https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=700&h=500&fit=crop&auto=format',
    features: ['High-definition print layers', 'Scratch & dent resistant', 'Click-lock installation', 'Wide plank options'],
    href: '/laminate-flooring-burbank',
  },
  {
    name: 'Luxury Vinyl Flooring',
    tagline: 'Waterproof. Tough. Still looks great.',
    desc: 'LVP and LVT are the right answer for kitchens, bathrooms, basements, and homes with pets or heavy foot traffic. Completely waterproof, dimensionally stable, and comfortable underfoot.',
    img: 'https://images.unsplash.com/photo-1695191388218-f6259600223f?w=700&h=500&fit=crop&auto=format',
    features: ['100% waterproof core', 'Pet & kid friendly', 'Floating or glue-down', 'Underfloor heating compatible'],
    href: '/luxury-vinyl-flooring-burbank',
  },
  {
    name: 'Moldings & Trim',
    tagline: 'The detail that makes the difference.',
    desc: "A floor isn't finished until the transitions, baseboards, and quarter-rounds are right. We carry and install a full line of coordinating moldings so everything ties together cleanly.",
    img: 'https://images.unsplash.com/photo-1655457397686-4dd23e78a918?w=700&h=500&fit=crop&auto=format',
    features: ['Baseboards & shoe molding', 'T-moldings & reducers', 'Stair nose & end caps', 'Painted & stained finishes'],
    href: '/molding-baseboard-installation-burbank',
  },
  {
    name: 'Professional Installation',
    tagline: 'Our name is on every install.',
    desc: "We don't hand your job off to a subcontractor you've never met. Our own crew handles the work — prep, install, cleanup, and follow-up. That's the accountability a family name demands.",
    img: 'https://images.unsplash.com/photo-1622936063167-e32e9f955438?w=700&h=500&fit=crop&auto=format',
    features: ['Moisture & subfloor prep', 'Molding & transition installation', 'Cleanup & final walkthrough', '1-year labor guarantee'],
    href: '/flooring-installation-burbank',
  },
  {
    name: 'Showroom Consultation',
    tagline: 'See it. Feel it. Decide with confidence.',
    desc: 'Our Burbank showroom lets you see full-size samples in real light before you commit. No pressure, no sales tactics — just honest guidance from people who do this every day.',
    img: 'https://images.unsplash.com/photo-1643903032976-8c0d0556a8ea?w=700&h=500&fit=crop&auto=format',
    features: ['Full-size floor samples', 'Expert guidance', 'In-home measurement', 'Free estimates'],
    href: '/contact',
  },
];

const faqs = [
  {
    q: 'What flooring types does US Flooring & Molding offer?',
    a: 'We carry hardwood, laminate, luxury vinyl plank (LVP), luxury vinyl tile (LVT), and a full range of moldings and trim. We install all flooring types we sell and can help you compare options during a showroom visit or free estimate.',
  },
  {
    q: 'Which flooring works best for kitchens and bathrooms?',
    a: 'Luxury vinyl is generally a strong option for kitchens and bathrooms because it is designed to resist moisture. The best choice still depends on the product specifications, subfloor condition, traffic level, and installation conditions. We can walk you through the tradeoffs for your specific space.',
  },
  {
    q: 'What is the difference between hardwood, laminate, and luxury vinyl?',
    a: 'Hardwood is a real wood product that can be refinished multiple times and typically lasts decades. Laminate uses a photographic layer over a composite core — it resists scratching but cannot be refinished and is not waterproof. Luxury vinyl is a synthetic, waterproof product with strong durability and is a good fit for wet or high-traffic areas. Each has different price points, maintenance requirements, and aesthetic characteristics.',
  },
  {
    q: 'Do you provide professional flooring installation?',
    a: 'Yes. Our own crew handles installation — not a subcontractor. We do subfloor prep, the install itself, cleanup, and a final walkthrough. All installation work is covered by a 1-year labor guarantee.',
  },
  {
    q: 'Do you install moldings and baseboards?',
    a: 'Yes. We carry and install baseboards, shoe molding, T-moldings, reducers, stair nose, and end caps. Molding installation is typically included or quoted alongside your flooring project.',
  },
  {
    q: 'Can I visit the Burbank showroom?',
    a: 'Yes. Our showroom at 1508 W Burbank Blvd, Burbank, CA 91506 is open Monday through Saturday. You can see full-size floor samples in real light, ask questions, and get an honest recommendation with no sales pressure.',
  },
  {
    q: 'Which areas does US Flooring & Molding serve?',
    a: 'We primarily serve Burbank and the surrounding San Fernando Valley, including Glendale, North Hollywood, Toluca Lake, Studio City, Sun Valley, and communities throughout greater Los Angeles.',
  },
  {
    q: 'How can I request a flooring estimate?',
    a: 'You can call us at (818) 515-0009, email hello@USFlooring.LA, fill out the estimate form on our contact page, or visit the showroom. Estimates are free and come with no obligation.',
  },
  {
    q: 'What should I do to prepare before installation?',
    a: "Preparation depends on the project scope, flooring type, and your home's conditions. We will walk you through specific steps during the estimate process. General considerations include ensuring the subfloor is accessible and confirming material delivery timing. We can advise on whether acclimation time is needed for the material you choose.",
  },
  {
    q: 'How long does flooring installation typically take?',
    a: 'Timeline depends on the square footage, flooring type, subfloor condition, and project complexity. A single room may take one day; a full home may take several. We will give you a realistic timeline during the estimate so you can plan accordingly.',
  },
];

const productsCrumbs = [{ label: 'Home', href: '/' }, { label: 'Products & Services' }];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Products() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pb-[72px] lg:pb-0">
      <SEO
        title="Hardwood, Laminate & Vinyl Flooring in Burbank"
        description="Explore hardwood, laminate, luxury vinyl, molding, trim, showroom consultation, and professional flooring installation from US Flooring & Molding in Burbank."
        canonical="https://www.usflooring.la/products"
        ogTitle="Flooring Products & Installation | US Flooring Burbank"
        ogDescription="Compare hardwood, laminate, luxury vinyl, molding, and professional flooring installation options for your Los Angeles-area property."
        ogUrl="https://www.usflooring.la/products"
        jsonLd={[breadcrumbJsonLd(productsCrumbs), faqJsonLd]}
      />
      <Breadcrumb crumbs={productsCrumbs} />

      {/* Header */}
      <section className="pt-8 pb-16 bg-[#F0E9DC]">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Products &amp; Services</p>
          <h1 className="font-serif text-[40px] lg:text-[60px] font-semibold text-charcoal leading-[1.06] max-w-[580px] mb-3">
            Hardwood, Laminate, Vinyl and Molding in Burbank
          </h1>
          <p className="font-sans text-base lg:text-[18px] text-walnut font-semibold mb-5">
            Everything You Need, Under One Roof
          </p>
          <p className="font-sans text-base lg:text-[18px] text-charcoal/60 leading-relaxed max-w-[560px] mb-8">
            Flooring, moldings, and professional installation — all from a family that has been getting this right since 2005 in Burbank.
          </p>
          <Link to="/contact" className="inline-block bg-walnut text-ivory px-8 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-walnut-dark transition-colors">
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-20">
          <div className="flex flex-col gap-20">
            {services.map((s, i) => (
              <div key={s.name} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`overflow-hidden rounded-[3px] aspect-[4/3] bg-sand/30 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={s.img} alt={`${s.name} — US Flooring & Molding, Burbank`} className="w-full h-full object-cover" loading="lazy" width="700" height="500" />
                </div>
                <div>
                  <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-3">{s.tagline}</p>
                  <h2 className="font-serif text-[28px] lg:text-[36px] font-semibold text-charcoal mb-4 leading-tight">{s.name}</h2>
                  <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="flex flex-col gap-2.5 mb-8" aria-label={`${s.name} features`}>
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 font-sans text-[13px] text-charcoal/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-walnut shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to={s.href} className="inline-flex items-center gap-2 font-sans text-[14px] font-bold text-walnut hover:text-walnut-dark transition-colors group">
                    Learn about {s.name} <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F0E9DC] border-t border-sand">
        <div className="max-w-[860px] mx-auto px-6 py-20">
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Common Questions</p>
          <h2 className="font-serif text-[32px] lg:text-[42px] font-semibold text-charcoal leading-tight mb-12">
            Flooring FAQs
          </h2>
          <div className="flex flex-col divide-y divide-sand">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full text-left py-5 flex items-start justify-between gap-4 group"
                >
                  <h3 className="font-sans text-[15px] font-semibold text-charcoal leading-snug group-hover:text-walnut transition-colors">
                    {faq.q}
                  </h3>
                  <span className="shrink-0 font-sans text-[18px] text-charcoal/30 mt-0.5" aria-hidden="true">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <p className="font-sans text-[14px] text-charcoal/60 leading-relaxed pb-5">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-charcoal py-20">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[32px] lg:text-[44px] font-semibold text-ivory mb-4">Not Sure Where to Start?</h2>
          <p className="font-sans text-base text-ivory/50 leading-relaxed mb-8">
            Come by the showroom or give us a call. We'll help you figure out the right material for your space, your lifestyle, and your budget.
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
