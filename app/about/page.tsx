import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";

export const metadata: Metadata = {
  title: "About US Flooring & Molding | Burbank Flooring Experts",
  description:
    "Learn about US Flooring & Molding Inc., a family-owned Burbank flooring store and installation company backed by more than 20 years of flooring experience.",
  alternates: { canonical: "https://www.usflooring.la/about" },
  openGraph: {
    title: "About US Flooring & Molding Inc.",
    description: "Meet the family and flooring professionals behind US Flooring & Molding Inc. in Burbank, California.",
    url: "https://www.usflooring.la/about",
    type: "website",
  },
};

const items = [{ label: "Home", href: "/" }, { label: "About" }];
const values = [
  ["Honest Guidance", "We tell you what will actually work for your space, not just what is easiest to sell."],
  ["Family Accountability", "Our name is on every project. When something needs attention, real people answer and come back."],
  ["Skilled Craft", "We do not rush subfloor preparation or detail work. We do it right so the floor holds up."],
  ["Local Knowledge", "More than twenty years in Burbank means we understand how local homes are built and maintained."],
];

export default function AboutPage() {
  return (
    <main className="pb-20">
      <Breadcrumbs items={items} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(items)) }} />
      <section className="section container grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">About Us</p>
          <h1>Meet the Family Behind US Flooring &amp; Molding</h1>
          <p className="lead">US Flooring &amp; Molding Inc. is a family-owned flooring contractor and showroom based in Burbank, California. We serve homeowners, interior designers, and contractors across Los Angeles.</p>
          <p>We are not a franchise or a big-box satellite. Every floor we sell and every installation we run carries our family name—and that means something to us.</p>
        </div>
        <div className="overflow-hidden rounded">
          <img src="https://images.unsplash.com/photo-1712171984461-9a18baa57c42?w=720&h=560&fit=crop&auto=format" alt="Expert flooring craftsman at work" className="h-full w-full object-cover" />
        </div>
      </section>
      <section className="section bg-charcoal text-ivory"><div className="container grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">The story</p><h2>It Started with a Trowel and a Father Who Demanded Excellence</h2><p>Vick learned flooring the old way: by doing the work, correcting mistakes, and refusing to compromise on preparation or finish. That standard became the promise we make to every customer.</p></div><blockquote className="border border-ivory/20 p-8 text-2xl">“Do it like it’s going in your own house.”</blockquote></div></section>
      <section className="section container"><p className="eyebrow">What we stand for</p><h2>The Values We Work By Every Day</h2><div className="grid gap-5 sm:grid-cols-2">{values.map(([title, text]) => <article key={title} className="card"><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="section bg-subtle"><div className="container grid gap-8 lg:grid-cols-2"><div><p className="eyebrow">Our promise</p><h2>1-Year Labor Guarantee</h2><p>We stand behind the workmanship of what we install. If something is wrong within a year of completion, we come back and make it right.</p></div><ul className="card"><li>Every install covered for one full year from completion</li><li>Real people answer when you call</li><li>If something is wrong, we come back and fix it</li></ul></div></section>
      <section className="section container text-center"><h2>Ready to talk about your project?</h2><Link href="/contact" className="button">Get Your Free Estimate</Link></section>
    </main>
  );
}
