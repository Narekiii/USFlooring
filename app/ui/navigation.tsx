import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "../lib/business";
const links = [["Products & Services", "/products"], ["About", "/about"], ["Gallery", "/gallery"], ["Reviews", "/reviews"], ["Contact", "/contact"]];
export default function Navigation() { return <header className="site-header"><div className="container nav-inner"><Link href="/" className="brand"><Image src="/og-image.jpg" alt={BUSINESS.name} width={100} height={52} priority /></Link><nav aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link className="button button-small" href="/contact">Free Estimate</Link></nav></div></header>; }
