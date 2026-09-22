import type { Metadata } from "next";
import ContactForm from "../../src/components/next/ContactForm";
import { BUSINESS, pageMetadata } from "../../src/lib/next-site";
export const metadata: Metadata=pageMetadata("Free Flooring Estimate in Burbank","Request a free flooring estimate from US Flooring & Molding Inc. Call or visit our showroom at 1508 W Burbank Blvd.","/contact");
export default function Contact(){return <><section className="page-head"><div className="container"><p className="eyebrow">Get in touch</p><h1>Get a Free Flooring Estimate in Burbank</h1><p className="lead">Call us, stop by, or fill out the form. You&apos;ll get a real answer from a real person — not a script.</p><p><a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a> · {BUSINESS.address.full}</p></div></section><section className="section container narrow"><ContactForm/></section></>}
