import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";
import { JsonLd, businessJsonLd } from "../ui/json-ld";
import { SITE_URL } from "../lib/business";

const crumbs = [{ label: "Home", href: "/" }, { label: "Reviews" }];
const yelpUrl = "https://www.yelp.com/biz/us-flooring-and-molding-burbank";

function StarIcon({ size = 14 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="#C89B5A" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}

const reviews = [
  {
    name: "Bob S.",
    city: "Santa Monica, CA",
    quote:
      "Visited nearly a dozen flooring companies over four months before choosing US Flooring. Fair pricing, respect for customers, quality that beat Lowe's and Home Depot outright. Would use them again without hesitation.",
    highlight: "Fair pricing. Real quality.",
  },
  {
    name: "Alin S.",
    city: "Burbank, CA",
    role: "Interior Designer",
    quote:
      "Vick goes above and beyond on every project — responsive, on time, and installs that came out impeccable. As a designer, I need vendors I can count on, and this team delivers every single time.",
    highlight: "My go-to for every design client.",
  },
  {
    name: "Ana O.",
    city: "Los Angeles, CA",
    quote:
      "Got the exact laminate I wanted, fast, at the best price I found anywhere. The install crew delivered. Simple, clean, zero runaround from start to finish.",
    highlight: "Zero runaround, start to finish.",
  },
  {
    name: "Marcus T.",
    city: "Glendale, CA",
    quote:
      "I'd been putting off redoing my kitchen floor for years because I dreaded dealing with contractors. US Flooring made the entire thing painless. They showed up when they said they would and handled the details with care.",
    highlight: "Made the whole thing painless.",
  },
  {
    name: "Linda K.",
    city: "North Hollywood, CA",
    quote:
      "Vick was straightforward with us from the first call. He didn't try to upsell us — he told us exactly what would work in our hallway and why. The installation was clean and fast. Genuine value and no pressure.",
    highlight: "Honest from the first call.",
  },
  {
    name: "David R.",
    city: "Studio City, CA",
    quote:
      "Great variety and excellent customer service. I came in not knowing what I wanted and left with a plan and a price I was happy with. The whole crew was professional and the floors turned out beautifully.",
    highlight: "Great variety and service.",
  },
] as const;

const pullQuotes = [
  { quote: '"Professional and qualified experts."', author: "Burbank homeowner" },
  { quote: '"High quality, great price."', author: "Studio City, CA" },
  { quote: '"Exactly what I needed, no runaround."', author: "Glendale, CA" },
  { quote: '"The best contractor experience we\'ve had."', author: "North Hollywood, CA" },
] as const;

export const metadata: Metadata = {
  title: "Customer Reviews | US Flooring Burbank",
  description:
    "Read customer experiences with US Flooring & Molding in Burbank and explore professional flooring, molding and installation services.",
  alternates: { canonical: `${SITE_URL}/reviews` },
  openGraph: {
    title: "US Flooring Customer Reviews | Burbank, CA",
    description:
      "Read customer experiences with US Flooring & Molding in Burbank and explore professional flooring, molding and installation services.",
    url: `${SITE_URL}/reviews`,
    images: [{ url: "/og-image.jpg", alt: "US Flooring & Molding" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "US Flooring Customer Reviews | Burbank, CA",
    description:
      "Read customer experiences with US Flooring & Molding in Burbank and explore professional flooring, molding and installation services.",
    images: ["/og-image.jpg"],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/reviews#page`,
  url: `${SITE_URL}/reviews`,
  name: "US Flooring Customer Reviews | Burbank, CA",
  about: { "@id": `${SITE_URL}/#business` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
};

export default function ReviewsPage() {
  return (
    <main className="pb-20">
      <JsonLd data={[pageJsonLd, breadcrumbJsonLd(crumbs), businessJsonLd()]} />
      <Breadcrumbs items={crumbs} />
      <section className="section bg-subtle">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Customer reviews</p>
            <h1>Customer Reviews for US Flooring &amp; Molding</h1>
            <p className="lead max-w-2xl">
              These are real people who hired us for real projects. Their experience is the most honest description of what it is like to work with us.
            </p>
          </div>
          <div className="rounded border border-border bg-ivory p-8">
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <StarIcon key={i} size={22} />)}</div>
            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-charcoal/60">Customer experiences</p>
            <p className="mt-4 text-5xl font-semibold text-charcoal">5.0</p>
            <p className="mt-2 text-sm font-medium text-charcoal/70">External rating and review availability can change over time.</p>
            <a
              href={yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-link"
              aria-label="Read US Flooring reviews on Yelp"
            >
              Read our Yelp reviews →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-8 text-ivory">
        <div className="container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pullQuotes.map((item) => (
            <blockquote key={item.quote} className="rounded border border-white/10 bg-charcoal/80 p-4">
              <p className="text-sm italic text-ivory/80">{item.quote}</p>
              <footer className="mt-3 text-[11px] uppercase tracking-widest text-ivory/40">— {item.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <article key={`${review.name}-${review.city}`} className="flex h-full flex-col rounded border border-border bg-subtle p-6">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
                <p className="text-xs font-bold uppercase tracking-widest text-walnut">{review.highlight}</p>
                <blockquote className="mt-4 flex-1 text-sm leading-7 text-charcoal/70">“{review.quote}”</blockquote>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-charcoal">{review.name}</p>
                  <p className="text-xs text-charcoal/60">
  {review.city}
  {"role" in review && review.role ? ` · ${review.role}` : ""}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-subtle">
        <div className="container max-w-3xl text-center">
          <p className="eyebrow">See more</p>
          <h2>Explore what we do and contact our team</h2>
          <p className="mt-4 text-charcoal/70">
            Visit our official Yelp profile to read more customer feedback, or request a free estimate for your Burbank or Los Angeles project.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="button">Get a Free Estimate</Link>
            <a
              href={yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
              aria-label="Read more US Flooring reviews on Yelp"
            >
              Read More Reviews on Yelp
            </a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/gallery" className="text-link">Gallery</Link>
          <Link href="/hardwood-flooring-burbank" className="text-link">Hardwood Flooring</Link>
          <Link href="/laminate-flooring-burbank" className="text-link">Laminate Flooring</Link>
          <Link href="/luxury-vinyl-flooring-burbank" className="text-link">Luxury Vinyl Flooring</Link>
          <Link href="/flooring-installation-burbank" className="text-link">Flooring Installation</Link>
        </div>
      </section>
    </main>
  );
}
