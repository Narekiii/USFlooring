import Link from "next/link";
import { navLinks, BUSINESS } from "../../lib/next-site";
export default function Nav(){return <header className="site-header"><div className="container nav-wrap"><Link className="logo" href="/">US <span>Flooring</span><small>&amp; Molding Inc.</small></Link><nav aria-label="Primary navigation">{navLinks.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}<a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a><Link className="nav-cta" href="/contact">Free Estimate</Link></nav></div></header>}
