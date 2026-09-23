"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BUSINESS } from "../lib/business";

const logoUrl = "/us-flooring-header-logo-400x160.png";
const links = [["/products", "Products & Services"], ["/about", "About"], ["/gallery", "Gallery"], ["/reviews", "Reviews"]] as const;

export default function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  const close = () => setOpen(false);
  return <><header className="site-header"><div className="container nav-inner"><Link href="/" className="brand" onClick={close}><Image src={logoUrl} alt="US Flooring & Molding" width={200} height={80} priority sizes="200px" /></Link><nav className="desktop-nav" aria-label="Primary navigation">{links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</nav><div className="desktop-actions"><a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a><Link href="/contact" className="button button-secondary">Contact Us</Link><Link href="/contact" className="button">Free Estimate</Link></div><div className="mobile-actions"><a href={`tel:${BUSINESS.phone}`} aria-label={`Call ${BUSINESS.phoneDisplay}`}>☎</a><Link href="/contact" className="button">Estimate</Link><button type="button" aria-label="Toggle navigation menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="menu-button"><span /><span /><span /></button></div></div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(([href, label]) => <Link key={href} href={href} onClick={close}>{label}</Link>)}<Link href="/contact" onClick={close}>Contact Us</Link></nav>}</header><div className="mobile-bottom-bar"><a href={`tel:${BUSINESS.phone}`}>Call Now</a><Link href="/contact">Free Estimate</Link></div></>;
}
