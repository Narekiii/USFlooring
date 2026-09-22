import type { Metadata } from "next";
import { pageMetadata } from "../../src/lib/next-site";
import Gallery from "../../src/components/next/Gallery";
export const metadata: Metadata=pageMetadata("Flooring Installation Projects in Los Angeles","View hardwood, laminate, luxury vinyl, molding, and flooring installation work from US Flooring & Molding Inc. in Burbank.","/gallery");
export default function Page(){return <><section className="page-head"><div className="container"><p className="eyebrow">Gallery</p><h1>Flooring Installation Projects in Burbank and Los Angeles</h1><p className="lead">Explore flooring styles, materials, patterns, and installation inspiration.</p></div></section><Gallery/></>}
