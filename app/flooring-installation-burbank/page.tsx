import type { Metadata } from "next";
import ServicePage from "../ui/service-page";
import { SITE_URL } from "../lib/business";
export const metadata: Metadata = { title: "Flooring Installation in Burbank", description: "Professional flooring installation for residential and commercial properties in Burbank and Los Angeles.", alternates: { canonical: "/flooring-installation-burbank" }, openGraph: { title: "Flooring Installation in Burbank", description: "Professional flooring installation.", url: `${SITE_URL}/flooring-installation-burbank` }, twitter: { card: "summary_large_image" } };
export default function Page(){return <ServicePage title="Professional Flooring Installation in Burbank" description="Our experienced installation team respects your home, your materials, and your timeline." href="/flooring-installation-burbank"/>}
