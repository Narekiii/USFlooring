import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumb, { breadcrumbJsonLd } from '@/components/Breadcrumb';

const crumbs = [{ label: 'Home', href: '/' }, { label: 'Products & Services', href: '/products' }, { label: 'Luxury Vinyl Flooring' }];

const faqs = [
  { q: 'What is luxury vinyl plank (LVP) flooring?', a: 'Luxury vinyl plank is a multi-layer synthetic flooring product with a 100% waterproof core, a photographic print layer that realistically mimics wood or stone, a durable wear layer, and a backing. It is thicker and more realistic than traditional vinyl.' },
  { q: 'Is luxury vinyl fully waterproof?', a: 'Yes. The core of LVP and LVT is fully waterproof. This makes it suitable for kitchens, bathrooms, laundry rooms, and other areas exposed to moisture — provided installation is done correctly and the product is appropriate for the subfloor conditions.' },
  { q: 'How does luxury vinyl compare to laminate?', a: 'Both are synthetic flooring products. Luxury vinyl is fully waterproof and generally more impact-resistant underfoot. Laminate is harder-wearing against scratches from furniture but is not waterproof. For wet areas, luxury vinyl is the more practical choice.' },
  { q: 'Can luxury vinyl be installed over existing flooring?', a: 'In some cases, yes, depending on the height difference and the condition of the existing floor. We assess during the estimate whether your existing floor is suitable as a base or whether removal is necessary.' },
  { q: 'Is luxury vinyl comfortable underfoot?', a: 'Luxury vinyl with a thicker wear layer and attached underlayment tends to feel softer underfoot than laminate or tile. Comfort depends on the specific product and the subfloor beneath it.' },
  { q: 'Does luxury vinyl work with underfloor heating?', a: 'Many LVP products are compatible with radiant floor heating systems, but specifications vary by product. We can confirm compatibility for the specific product you select.' },
];

const jsonLd = [
  breadcrumbJsonLd(crumbs),
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Luxury Vinyl Flooring Sales and Installation', provider: { '@type': 'LocalBusiness', name: 'US Flooring & Molding Inc.', url: 'https://www.usflooring.la/' }, areaServed: { '@type': 'City', name: 'Burbank' }, description: 'Luxury vinyl plank and tile flooring sales and professional installation in Burbank and greater Los Angeles.' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
];

export default function LuxuryVinylFlooring() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <SEO
        title="Luxury Vinyl Flooring in Burbank, CA | US Flooring"
        description="Luxury vinyl plank and tile flooring sales and installation in Burbank and Los Angeles. Fully waterproof, durable, and comfortable. Free estimate."
        canonical="https://www.usflooring.la/luxury-vinyl-flooring-burbank"
        ogTitle="Luxury Vinyl Flooring in Burbank | US Flooring & Molding"
        ogDescription="Waterproof luxury vinyl plank and tile flooring from a family-owned Burbank flooring store. Professional installation with a 1-year labor guarantee."
        ogUrl="https://www.usflooring.la/luxury-vinyl-flooring-burbank"
        jsonLd={jsonLd}
      />
      <Breadcrumb crumbs={crumbs} />

      <section className="pt-8 pb-16 bg-[#F0E9DC]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Luxury Vinyl Flooring · Burbank, CA</p>
            <h1 className="font-serif text-[40px] lg:text-[54px] font-semibold text-charcoal leading-[1.06] mb-5">
              Luxury Vinyl Flooring Sales and Installation in Burbank
            </h1>
            <p className="font-sans text-base lg:text-[17px] text-charcoal/60 leading-relaxed mb-8">
              Fully waterproof, comfortable underfoot, and built to handle real life. LVP and LVT are the right answer for kitchens, bathrooms, and busy households with pets or children.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="bg-walnut text-ivory px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-walnut-dark transition-colors text-center">Get a Free Estimate</Link>
              <a href="tel:+18185150009" className="border-[1.5px] border-walnut text-walnut px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-sand/30 transition-colors text-center">Call (818) 515-0009</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[3px] aspect-[4/3] bg-sand/30">
            <img src="https://images.unsplash.com/photo-1695191388218-f6259600223f?w=720&h=540&fit=crop&auto=format" alt="Luxury vinyl plank flooring in a kitchen" className="w-full h-full object-cover" loading="eager" fetchPriority="high" width="720" height="540" />
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-charcoal leading-tight mb-10">Why Luxury Vinyl?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '100% Waterproof Core', desc: 'Unlike hardwood or laminate, luxury vinyl will not swell, buckle, or warp if water reaches it — making it genuinely suitable for kitchens, bathrooms, and laundry rooms.' },
              { title: 'Pet & Family Friendly', desc: 'Resistant to scratches from pet claws, easy to clean up after accidents, and comfortable for bare feet and children playing on the floor.' },
              { title: 'Realistic Wood & Stone Look', desc: 'Modern LVP reproduces the look and texture of hardwood with impressive accuracy. Stone-look LVT achieves the same for tile patterns.' },
              { title: 'Comfortable Underfoot', desc: 'LVP with attached underlayment is softer and warmer underfoot than tile or thinner laminate products.' },
              { title: 'Durable Wear Layer', desc: 'A thicker mil wear layer resists everyday traffic, scuffs, and surface damage longer. We carry products appropriate for residential and light commercial use.' },
              { title: 'Flexible Installation', desc: 'Luxury vinyl can be installed floating, glue-down, or with specific click-lock systems depending on the product and subfloor conditions.' },
            ].map((b) => (
              <div key={b.title} className="bg-[#F0E9DC] border border-sand rounded-[3px] p-7">
                <h3 className="font-sans text-[15px] font-semibold text-charcoal mb-3">{b.title}</h3>
                <p className="font-sans text-[13px] text-charcoal/55 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F0E9DC] border-t border-sand">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-charcoal leading-tight mb-10">Luxury Vinyl FAQ</h2>
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

      <section className="bg-ivory border-t border-sand">
        <div className="max-w-[1180px] mx-auto px-6 py-12">
          <h2 className="font-sans text-[13px] font-semibold text-charcoal/40 uppercase tracking-widest mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'Hardwood Flooring', href: '/hardwood-flooring-burbank' }, { label: 'Laminate Flooring', href: '/laminate-flooring-burbank' }, { label: 'Professional Installation', href: '/flooring-installation-burbank' }, { label: 'Moldings & Trim', href: '/molding-baseboard-installation-burbank' }].map((l) => (
              <Link key={l.href} to={l.href} className="border border-sand bg-[#F0E9DC] text-charcoal/60 font-sans text-[13px] px-4 py-2 rounded-[2px] hover:border-walnut/40 hover:text-walnut transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-ivory mb-4">Compare Vinyl Options at Our Showroom</h2>
          <p className="font-sans text-base text-ivory/50 leading-relaxed mb-8">Visit 1508 W Burbank Blvd to see and feel luxury vinyl samples before you decide. Free estimates, no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="bg-walnut text-ivory px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-walnut-dark transition-colors">Request Free Estimate</Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-ivory/30 text-ivory/70 px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:border-ivory/60 hover:text-ivory transition-colors">Call (818) 515-0009</a>
          </div>
        </div>
      </section>
    </div>
  );
}
