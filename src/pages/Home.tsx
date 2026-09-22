import { Link } from 'react-router-dom';
import heroBg from '@/imports/ChatGPT_Image_Sep_3__2026__04_50_48_PM.png';
import SEO from '@/components/SEO';
import { BUSINESS } from '@/lib/business';

// ── Icons ─────────────────────────────────────────────────────────────────────
function StarIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#C89B5A" stroke="none" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C89B5A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const trustItems = [
  '5.0★ Google Rating',

  'Free Estimates',
  '1-Year Labor Guarantee',
  '20+ Years in Burbank',
  'Hardwood · Laminate · Vinyl · Moldings',
];

const howCards = [
  { title: 'Real Guidance', desc: "We tell you what actually fits your space and budget, not just what's in stock." },
  { title: 'Quality Materials', desc: 'Hardwood, laminate, vinyl, and moldings chosen for how they hold up — not just how they photograph.' },
  { title: 'Clean, Skilled Installs', desc: 'Crews who treat prep and detail like it matters, because it does.' },
  { title: 'Fair, Honest Pricing', desc: 'No inflated quotes. No bait-and-switch. Your real cost before you commit.' },
  { title: 'Free Estimates', desc: "Know your real cost before you commit to anything." },
  { title: '1-Year Labor Guarantee', desc: "We stand behind the work after we leave. Real people to call if something's not right." },
];

const serviceCards = [
  { name: 'Hardwood Flooring', desc: 'Timeless, durable, and built to outlast trends.', img: 'https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=600&h=440&fit=crop&auto=format', href: '/hardwood-flooring-burbank' },
  { name: 'Laminate Flooring', desc: 'Real style at a real-world price point.', img: 'https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=600&h=440&fit=crop&auto=format', href: '/laminate-flooring-burbank' },
  { name: 'Luxury Vinyl Flooring', desc: 'Waterproof toughness for kitchens, baths, and busy households.', img: 'https://images.unsplash.com/photo-1695191388218-f6259600223f?w=600&h=440&fit=crop&auto=format', href: '/luxury-vinyl-flooring-burbank' },
  { name: 'Moldings & Trim', desc: 'The finishing detail that makes a floor look finished, not just installed.', img: 'https://images.unsplash.com/photo-1655457397686-4dd23e78a918?w=600&h=440&fit=crop&auto=format', href: '/molding-baseboard-installation-burbank' },
  { name: 'Professional Installation', desc: 'Precision crews who respect your home and your timeline.', img: 'https://images.unsplash.com/photo-1622936063167-e32e9f955438?w=600&h=440&fit=crop&auto=format', href: '/flooring-installation-burbank' },
  { name: 'Showroom Consultation', desc: 'Touch it, see it in real light, ask us anything — no pressure.', img: 'https://images.unsplash.com/photo-1643903032976-8c0d0556a8ea?w=600&h=440&fit=crop&auto=format', href: '/products' },
];

const comparison = [
  { bad: 'Generic advice from whoever\'s on shift', good: 'Guidance from people who\'ve done this for decades' },
  { bad: 'Installation outsourced, no accountability', good: 'Our name is on every install' },
  { bad: "You're a transaction", good: "You're a neighbor" },
  { bad: 'One-size-fits-all recommendations', good: 'Advice built around your space' },
  { bad: 'Good luck if something goes wrong', good: '1-year labor guarantee, real people to call' },
];

const testimonials = [
  {
    name: 'Bob S.', city: 'Santa Monica, CA', stars: 5,
    quote: "Visited nearly a dozen flooring companies over four months before choosing US Flooring. Fair pricing, respect for customers, quality that beat Lowe's and Home Depot outright. Would use them again without hesitation.",
  },
  {
    name: 'Alin S.', city: 'Burbank, CA', role: 'Interior Designer', stars: 5,
    quote: "Vick goes above and beyond on every project — responsive, on time, and installs that came out impeccable. As a designer, I need vendors I can count on, and this team delivers every single time.",
  },
  {
    name: 'Ana O.', city: 'Los Angeles, CA', stars: 5,
    quote: "Got the exact laminate I wanted, fast, at the best price I found anywhere. The install crew delivered. Simple, clean, zero runaround from start to finish.",
  },
];

const pullQuotes = [
  '"Great variety and excellent customer service."',
  '"Professional and qualified experts."',
  '"High quality, great price."',
  '"Exactly what I needed, no runaround."',
];

// ── Component ─────────────────────────────────────────────────────────────────
const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': 'https://www.usflooring.la/#business',
    name: BUSINESS.name,
    url: BUSINESS.website,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: BUSINESS.ogImage,
    logo: {
      '@type': 'ImageObject',
      url: BUSINESS.logoUrl,
    },
    description: 'Family-owned flooring store and installation company serving Burbank and greater Los Angeles with hardwood, laminate, luxury vinyl, molding, and professional installation services.',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    hasMap: 'https://maps.app.goo.gl/tj7qojTHfH3svRqD6',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.1818843,
      longitude: -118.3279698,
    },
    sameAs: [
      BUSINESS.mapsUrl,
      'https://m.yelp.com/biz/us-flooring-and-molding-burbank',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Burbank' },
      { '@type': 'City', name: 'Glendale' },
      { '@type': 'City', name: 'North Hollywood' },
      { '@type': 'City', name: 'Toluca Lake' },
      { '@type': 'City', name: 'Studio City' },
      { '@type': 'City', name: 'Sun Valley' },
      { '@type': 'AdministrativeArea', name: 'San Fernando Valley' },
      { '@type': 'AdministrativeArea', name: 'Greater Los Angeles' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Flooring Products and Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hardwood Flooring' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laminate Flooring' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Vinyl Flooring' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flooring Installation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Molding and Baseboard Installation' } },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: BUSINESS.website,
    name: BUSINESS.name,
  },
];

export default function Home() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <SEO
        title="Flooring Store & Installation in Burbank, CA | US Flooring"
        description="Shop hardwood, laminate, and luxury vinyl flooring in Burbank. Professional flooring and molding installation across Los Angeles. Free estimates — call (818) 515-0009."
        canonical="https://www.usflooring.la/"
        ogTitle="US Flooring & Molding Inc. | Burbank Flooring Experts"
        ogDescription="Hardwood, laminate, luxury vinyl, molding, and professional flooring installation from US Flooring & Molding Inc. in Burbank — 20+ years of experience."
        ogUrl="https://www.usflooring.la/"
        jsonLd={homeJsonLd}
      />

      {/* ── 1. Hero ── */}
      <section className="pt-16 grid grid-cols-1 lg:grid-cols-2 min-h-[92vh]">
        {/* Hero photo — mobile: full-width top, desktop: right panel */}
        <div className="relative overflow-hidden h-[56vw] lg:h-auto lg:min-h-[600px] lg:order-2">
          <img
            src={heroBg}
            alt="US Flooring & Molding showroom and installation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-transparent" />
        </div>
        {/* Text panel */}
        <div className="flex flex-col justify-center bg-ivory px-6 lg:pl-[max(24px,calc((100vw-1180px)/2+24px))] pr-6 lg:pr-16 py-12 lg:py-20 lg:order-1">
          <h1 className="font-serif text-[36px] lg:text-[58px] font-semibold text-charcoal leading-[1.06] mb-3 max-w-[520px]">
            Trusted Flooring Store and Installation Company in Burbank
          </h1>
          <p className="font-sans text-base lg:text-[18px] text-walnut font-semibold mb-5">
            Two Decades of Craftsmanship You Can Trust
          </p>
          <p className="font-sans text-base lg:text-[17px] text-charcoal/65 leading-relaxed mb-8 max-w-[480px]">
            We're the local flooring team Burbank homeowners call when they want it done right — real guidance, real craftsmanship, and a family name behind every install.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Link to="/contact" className="bg-red text-white px-8 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors text-center">
              Get Your Free Estimate
            </Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-charcoal text-charcoal px-8 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-subtle/60 transition-colors text-center">
              Call (818) 515-0009
            </a>
          </div>
          {/* Trust micro-line */}
          <p className="font-sans text-[12px] font-semibold text-charcoal/40 tracking-wide">
            ★ Verified Google Reviews · 20+ Years in Burbank · 1-Year Labor Guarantee
          </p>
        </div>
      </section>

      {/* ── 1b. GEO Answer Block ── */}
      <section className="bg-ivory border-b border-border/60">
        <div className="max-w-[1180px] mx-auto px-6 py-5">
          <p className="font-sans text-[14px] text-charcoal/55 leading-relaxed">
            US Flooring &amp; Molding Inc. is a family-owned flooring store and installation company located at 1508 W Burbank Blvd in Burbank, California. We help homeowners, designers, contractors, and property professionals choose and install hardwood, laminate, luxury vinyl, molding, and baseboards throughout Burbank and the greater Los Angeles area.
          </p>
        </div>
      </section>

      {/* ── 2. Trust Bar ── */}
      <section className="bg-light border-y border-border">
        <div className="max-w-[1180px] mx-auto px-6 py-5 flex flex-wrap gap-x-7 gap-y-2 items-center justify-center">
          {trustItems.map((item, i) => (
            <span key={item} className="flex items-center gap-3 font-sans text-[12px] font-semibold text-charcoal/65 whitespace-nowrap uppercase tracking-wide">
              {i !== 0 && <span className="w-px h-3 bg-charcoal/20" aria-hidden="true" />}
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. WHY ── */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-[96px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Why we exist</p>
            <h2 className="font-serif text-[32px] lg:text-[48px] font-semibold text-charcoal mb-6 leading-[1.1]">
              Flooring Shouldn't Feel Like a Gamble
            </h2>
            <p className="font-sans text-base lg:text-[17px] text-charcoal/65 leading-relaxed mb-4">
              New flooring means dozens of decisions — material, color, durability, budget, who's actually going to install it. Get it wrong and you're stuck looking at it for the next fifteen years. That's exactly the stress we built this business to remove.
            </p>
            <p className="font-sans text-base lg:text-[17px] text-charcoal/65 leading-relaxed mb-8">
              We're not here to sell you the most expensive option on the floor. We're here to tell you the truth about what will actually work in your home — and then do the work ourselves, right.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 font-sans text-[15px] font-bold text-walnut hover:text-charcoal transition-colors group">
              Let's Talk About Your Floor
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="bg-subtle/30 border border-border p-10 rounded-[3px]">
            <div className="w-8 h-[3px] bg-gold mb-6" />
            <blockquote className="font-serif text-[22px] lg:text-[26px] font-medium italic text-charcoal leading-snug">
              "Your floor isn't just a surface. It's the first thing your family feels underfoot every single day. We help you get it right."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── 4. HOW ── */}
      <section className="bg-subtle">
        <div className="max-w-[1180px] mx-auto px-6 py-[96px]">
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">How we do it</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <h2 className="font-serif text-[32px] lg:text-[48px] font-semibold text-charcoal leading-[1.1] max-w-[520px]">
              Three Generations of Getting This Right
            </h2>
            <Link to="/about" className="shrink-0 inline-flex items-center gap-2 font-sans text-[15px] font-bold text-walnut hover:text-charcoal transition-colors group">
              See Why Burbank Trusts Us
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          {/* Story block */}
          <div className="bg-ivory border-l-[3px] border-walnut p-8 rounded-[2px] mb-12 max-w-[680px]">
            <p className="font-sans text-base text-charcoal/70 leading-relaxed">
              Vick learned this trade from his father, starting at seventeen — sanding, measuring, installing, listening to how customers actually talk about their homes. That apprenticeship became a promise: every project gets the same care as if it were going in our own house.
            </p>
          </div>
          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {howCards.map((card, i) => (
              <div key={card.title} className="bg-ivory border border-border rounded-[3px] p-7">
                <div className="w-6 h-[2.5px] mb-4" style={{ backgroundColor: i % 3 === 0 ? '#6B4A2D' : i % 3 === 1 ? '#C89B5A' : '#8A867D' }} />
                <h3 className="font-sans text-[15px] font-bold text-charcoal mb-2">{card.title}</h3>
                <p className="font-sans text-[13px] text-charcoal/55 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHAT ── */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-[96px]">
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">What we offer</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <h2 className="font-serif text-[32px] lg:text-[48px] font-semibold text-charcoal leading-[1.1] max-w-[480px]">
              Everything You Need, Under One Roof
            </h2>
            <Link to="/products" className="shrink-0 inline-flex items-center gap-2 font-sans text-[15px] font-bold text-walnut hover:text-charcoal transition-colors group">
              Visit Our Burbank Showroom
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCards.map((s) => (
              <Link key={s.name} to={s.href} className="group bg-ivory border border-border rounded-[3px] overflow-hidden hover:border-walnut/40 transition-colors">
                <div className="aspect-[16/9] overflow-hidden bg-subtle/30">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-sans text-[15px] font-bold text-charcoal mb-1.5">{s.name}</h3>
                  <p className="font-sans text-[13px] text-charcoal/50 leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Big-Box Difference ── */}
      <section className="bg-subtle">
        <div className="max-w-[1180px] mx-auto px-6 py-[96px]">
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">The difference</p>
          <h2 className="font-serif text-[32px] lg:text-[48px] font-semibold text-charcoal mb-5 leading-[1.1] max-w-[600px]">
            Why Homeowners Choose Us Over the Big-Box Aisle
          </h2>
          <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-12 max-w-[560px]">
            Big-box stores can sell you a box of flooring. What they can't sell you is someone who picks up the phone when there's a question, shows up when they say they will, and stands behind the install a year later. That's the difference a family business makes.
          </p>
          <div className="rounded-[3px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* Left — Big Box */}
            <div className="bg-charcoal p-10 lg:p-12">
              <p className="font-sans text-[11px] font-semibold text-ivory/30 uppercase tracking-widest mb-7">Big-Box Store</p>
              <div className="flex flex-col gap-5">
                {comparison.map((row) => (
                  <div key={row.bad} className="flex items-start gap-3">
                    <span className="text-ivory/25 shrink-0 mt-0.5"><XIcon /></span>
                    <p className="font-sans text-[14px] text-ivory/35 leading-relaxed">{row.bad}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — USF */}
            <div className="bg-charcoal p-10 lg:p-12">
              <p className="font-sans text-[11px] font-semibold text-gold/70 uppercase tracking-widest mb-7">US Flooring &amp; Molding</p>
              <div className="flex flex-col gap-5 mb-10">
                {comparison.map((row) => (
                  <div key={row.good} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5"><CheckIcon /></span>
                    <p className="font-sans text-[14px] text-ivory/90 leading-relaxed">{row.good}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-block bg-ivory text-charcoal px-7 py-3.5 rounded-[2px] font-sans text-[14px] font-bold hover:bg-white transition-colors">
                Get the Personal Treatment — Request an Estimate →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Testimonials ── */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-[96px]">
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Reviews</p>
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-12">
            <h2 className="font-serif text-[32px] lg:text-[48px] font-semibold text-charcoal leading-[1.1]">Don't Take Our Word for It</h2>
            <Link to="/reviews" className="shrink-0 inline-flex items-center gap-2 font-sans text-[15px] font-bold text-walnut hover:text-charcoal transition-colors group">
              Read More Reviews <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-subtle border border-border rounded-[3px] p-7 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <blockquote className="font-sans text-[14px] text-charcoal/65 leading-relaxed mb-6 flex-1 italic">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center shrink-0">
                    <span className="font-sans text-ivory text-[12px] font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-bold text-charcoal">{t.name}</p>
                    <p className="font-sans text-[11px] text-charcoal/40">{t.city}{t.role ? ` · ${t.role}` : ''}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pull quotes strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {pullQuotes.map((q) => (
              <div key={q} className="bg-charcoal rounded-[2px] px-5 py-4">
                <p className="font-sans text-[13px] text-ivory/65 italic leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
          <a
            href="https://www.yelp.com/biz/us-flooring-and-molding-burbank"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-[13px] text-charcoal/40 hover:text-walnut focus-visible:text-walnut focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-walnut transition-colors"
            onClick={() => (window as any).gtag?.('event', 'outbound_yelp_click', { link_location: 'homepage_testimonials', destination_url: 'https://www.yelp.com/biz/us-flooring-and-molding-burbank' })}
          >
            Read more customer reviews on Yelp →
          </a>
        </div>
      </section>

      {/* ── 8. About Teaser ── */}
      <section className="bg-charcoal">
        <div className="max-w-[1180px] mx-auto px-6 py-[96px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-[11px] font-semibold text-gold/60 uppercase tracking-widest mb-4">About us</p>
            <h2 className="font-serif text-[32px] lg:text-[48px] font-semibold text-ivory leading-[1.1] mb-6">
              Meet the Family Behind the Floors
            </h2>
            <p className="font-sans text-base text-ivory/60 leading-relaxed mb-8">
              Vick was seventeen the first time his father handed him a trowel. What started as an apprenticeship became a life's work — and eventually, this business. Every plank we sell and every install we run still carries that same standard: do it like it's going in your own home.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 font-sans text-[15px] font-bold text-ivory hover:text-gold transition-colors group">
              Visit the Showroom, Meet the Team
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="overflow-hidden rounded-[3px] aspect-[4/3] bg-charcoal/50">
            <img
              src="https://images.unsplash.com/photo-1712171984461-9a18baa57c42?w=720&h=560&fit=crop&auto=format"
              alt="Expert flooring craftsman at work"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* ── 9. Local Presence ── */}
      <section className="bg-subtle">
        <div className="max-w-[1180px] mx-auto px-6 py-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Local presence</p>
              <h2 className="font-serif text-[28px] lg:text-[36px] font-semibold text-charcoal mb-4 leading-tight">
                Proudly Serving Burbank and the Surrounding Valley
              </h2>
              <p className="font-sans text-base text-charcoal/60 leading-relaxed">
                Based on West Burbank Blvd, we work with homeowners, designers, and contractors across Burbank and the greater Los Angeles area — including Glendale, North Hollywood, Toluca Lake, Studio City, Sun Valley, and the San Fernando Valley.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Burbank', 'Glendale', 'North Hollywood', 'Toluca Lake', 'Studio City', 'Sun Valley', 'San Fernando Valley'].map((area) => (
                <span key={area} className="border border-border/80 bg-ivory text-charcoal/55 font-sans text-[13px] px-4 py-2 rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Final CTA ── */}
      <section className="bg-charcoal">
        <div className="max-w-[1180px] mx-auto px-6 py-[96px]">
          <div className="max-w-[680px] mx-auto text-center">
            <div className="flex gap-0.5 justify-center mb-6">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <h2 className="font-serif text-[32px] lg:text-[52px] font-semibold text-ivory leading-[1.1] mb-5">
              Ready for a Floor You Won't Second-Guess?
            </h2>
            <p className="font-sans text-base text-ivory/55 leading-relaxed mb-4">
              Call us, stop by the showroom, or fill out the form — either way, you'll get a real answer from a real person, not a script.
            </p>
            <div className="font-sans text-[13px] text-ivory/35 mb-10">
              US Flooring &amp; Molding Inc. · 1508 W Burbank Blvd, Burbank, CA 91506<br />
              (818) 515-0009 · Fax (818) 840-8222
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="tel:+18185150009" className="bg-red text-white px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors">
                Call Now
              </a>
              <Link to="/contact" className="bg-ivory text-charcoal px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-subtle transition-colors">
                Request a Free Estimate
              </Link>
              <a href="https://www.google.com/maps/dir/?api=1&destination=1508+W+Burbank+Blvd+Burbank+CA+91506" target="_blank" rel="noopener noreferrer" className="border-[1.5px] border-ivory/30 text-ivory/60 px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:border-ivory/60 hover:text-ivory transition-colors">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
