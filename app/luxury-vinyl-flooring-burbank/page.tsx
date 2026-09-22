import type { Metadata } from "next";
import ServicePage from "../ui/service-page";
import { SITE_URL } from "../lib/business";
export const metadata: Metadata = { title: "Luxury Vinyl Flooring in Burbank", description: "Shop LVP and luxury vinyl flooring for busy households in Burbank and greater Los Angeles.", alternates: { canonical: "/luxury-vinyl-flooring-burbank" }, openGraph: { title: "Luxury Vinyl Flooring in Burbank", description: "Luxury vinyl flooring sales and installation.", url: `${SITE_URL}/luxury-vinyl-flooring-burbank` }, twitter: { card: "summary_large_image" } };
export default function Page(){return <ServicePage title="Luxury Vinyl Flooring in Burbank" description="Choose durable luxury vinyl flooring for kitchens, baths, and busy households, installed by a local team." href="/luxury-vinyl-flooring-burbank"/>}
