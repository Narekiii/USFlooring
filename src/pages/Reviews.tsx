import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumb, { breadcrumbJsonLd } from '@/components/Breadcrumb';
import { BUSINESS } from '@/lib/business';

function StarIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#C89B5A" stroke="none" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const reviews = [
  {
    name: 'Bob S.',
    city: 'Santa Monica, CA',
    stars: 5,
    date: '2023',
    quote: "Visited nearly a dozen flooring companies over four months before choosing US Flooring. Fair pricing, respect for customers, quality that beat Lowe's and Home Depot outright. Would use them again without hesitation.",
    highlight: 'Fair pricing. Real quality.',
  },
  {
    name: 'Alin S.',
    city: 'Burbank, CA',
    role: 'Interior Designer',
    stars: 5,
    date: '2023',
    quote: "Vick goes above and beyond on every project — responsive, on time, and installs that came out impeccable. As a designer, I need vendors I can count on, and this team delivers every single time. Already referred him to four clients.",
    highlight: 'My go-to for every design client.',
  },
  {
    name: 'Ana O.',
    city: 'Los Angeles, CA',
    stars: 5,
    date: '2022',
    quote: "Got the exact laminate I wanted, fast, at the best price I found anywhere. The install crew delivered. Simple, clean, zero runaround from start to finish.",
    highlight: 'Zero runaround, start to finish.',
  },
  {
    name: 'Marcus T.',
    city: 'Glendale, CA',
    stars: 5,
    date: '2023',
    quote: "I'd been putting off redoing my kitchen floor for years because I dreaded dealing with contractors. US Flooring made the entire thing painless. They showed up when they said they would, kept the mess minimal, and the floor looks incredible.",
    highlight: 'Made the whole thing painless.',
  },
  {
    name: 'Linda K.',
    city: 'North Hollywood, CA',
    stars: 5,
    date: '2022',
    quote: "Vick was straightforward with us from the first call. He didn't try to upsell us — he told us exactly what would work in our hallway and why. The installation was clean and fast. Genuinely one of the better contractor experiences we've had.",
    highlight: "Honest from the first call.",
  },
  {
    name: 'David R.',
    city: 'Studio City, CA',
    stars: 5,
    date: '2023',
    quote: "Great variety and excellent customer service. I came in not knowing what I wanted and left with a plan and a price I was happy with. The whole crew was professional and the floors turned out beautifully.",
    highlight: 'Great variety and service.',
  },
];

const pullQuotes = [
  { quote: '"Professional and qualified experts."', author: 'Burbank homeowner' },
  { quote: '"High quality, great price."', author: 'Studio City, CA' },
  { quote: '"Exactly what I needed, no runaround."', author: 'Glendale, CA' },
  { quote: '"The best contractor experience we\'ve had."', author: 'North Hollywood, CA' },
];

const reviewsCrumbs = [{ label: 'Home', href: '/' }, { label: 'Reviews' }];

export default function Reviews() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <SEO
        title="US Flooring & Molding Reviews | Burbank, CA"
        description="Read verified customer experiences with US Flooring & Molding Inc. for flooring products, molding, consultation, and installation in Burbank and Los Angeles."
        canonical="https://www.usflooring.la/reviews"
        ogTitle="Customer Reviews | US Flooring & Molding"
        ogDescription="See what verified customers say about working with US Flooring & Molding Inc. in Burbank."
        ogUrl="https://www.usflooring.la/reviews"
        jsonLd={breadcrumbJsonLd(reviewsCrumbs)}
      />
      <Breadcrumb crumbs={reviewsCrumbs} />

      {/* Header */}
      <section className="pt-8 pb-16 bg-[#F0E9DC]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Customer Reviews</p>
            <h1 className="font-serif text-[40px] lg:text-[56px] font-semibold text-charcoal leading-[1.06] mb-4">
              Customer Reviews for US Flooring &amp; Molding
            </h1>
            <p className="font-sans text-base text-charcoal/55 leading-relaxed">
              These are real people who hired us for real projects. Their experience is the most honest description of what it's like to work with us.
            </p>
          </div>
          <div className="bg-ivory border border-sand rounded-[3px] p-8 flex flex-col gap-5">
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <StarIcon key={i} size={22} />)}</div>
            <div className="font-serif text-[52px] font-semibold text-charcoal leading-none">5.0</div>
            <div>
              <p className="font-sans text-[14px] font-semibold text-charcoal">Google Rating</p>
            </div>
            <a
              href={BUSINESS.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[13px] font-bold text-walnut hover:text-walnut-dark transition-colors"
            >
              Read our Google Reviews →
            </a>
          </div>
        </div>
      </section>

      {/* Pull quotes */}
      <section className="bg-charcoal">
        <div className="max-w-[1180px] mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pullQuotes.map((p) => (
            <div key={p.quote} className="flex flex-col gap-2">
              <p className="font-sans text-[13px] text-ivory/60 italic leading-relaxed">{p.quote}</p>
              <p className="font-sans text-[11px] text-ivory/25">— {p.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-[#F0E9DC] border border-sand rounded-[3px] p-7 flex flex-col">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(r.stars)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="font-sans text-[12px] font-bold text-walnut uppercase tracking-wide mb-3">
                  "{r.highlight}"
                </p>
                <blockquote className="font-sans text-[14px] text-charcoal/60 leading-relaxed flex-1 mb-6">
                  {r.quote}
                </blockquote>
                <div className="flex items-center gap-3 border-t border-sand pt-5">
                  <div className="w-9 h-9 rounded-full bg-walnut flex items-center justify-center shrink-0">
                    <span className="font-sans text-ivory text-[12px] font-bold">{r.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-bold text-charcoal">{r.name}</p>
                    <p className="font-sans text-[11px] text-charcoal/35">{r.city}{r.role ? ` · ${r.role}` : ''}</p>
                  </div>
                  <span className="ml-auto font-sans text-[11px] text-charcoal/25">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#F0E9DC] border-t border-sand py-16">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-semibold text-charcoal mb-4">Ready to Become Our Next Happy Customer?</h2>
          <p className="font-sans text-base text-charcoal/55 leading-relaxed mb-7">
            We give every project the same care these customers experienced. Start with a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="bg-walnut text-ivory px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-walnut-dark transition-colors">
              Get a Free Estimate
            </Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-walnut text-walnut px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-sand/30 transition-colors">
              Call (818) 515-0009
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
