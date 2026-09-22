import Link from "next/link";
import type { Metadata } from "next";
import { BUSINESS } from "../src/lib/next-site";

export const metadata: Metadata = { title: "Page Not Found", description: "The page you requested could not be found.", alternates: { canonical: "/404" }, robots: { index: false, follow: true } };
export default function NotFound() { return <section className="section container text-center"><p className="eyebrow">404</p><h1>That page could not be found</h1><p className="lead">Try one of these helpful pages, or call us at {BUSINESS.phoneDisplay}.</p><div className="button-row"><Link className="button" href="/">Homepage</Link><Link className="button secondary" href="/products">Products</Link><Link className="button secondary" href="/flooring-installation-burbank">Main services</Link><Link className="button secondary" href="/buyers-guide">Buyer&apos;s guide</Link><Link className="button secondary" href="/contact">Contact</Link></div></section>; }
