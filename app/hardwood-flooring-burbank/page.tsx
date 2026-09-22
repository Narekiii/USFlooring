import type { Metadata } from "next";
import ServicePage from "../ui/service-page";
import { SITE_URL } from "../lib/business";
export const metadata: Metadata = { title: "Hardwood Flooring in Burbank", description: "Shop solid and engineered hardwood flooring and arrange professional installation in Burbank.", alternates: { canonical: "/hardwood-flooring-burbank" }, openGraph: { title: "Hardwood Flooring in Burbank", description: "Hardwood flooring products and installation.", url: `${SITE_URL}/hardwood-flooring-burbank` }, twitter: { card: "summary_large_image" } };
export default function Page(){return <ServicePage title="Hardwood Flooring in Burbank" description="Solid and engineered hardwood flooring selected for your home and installed by an experienced local team." href="/hardwood-flooring-burbank"/>}
