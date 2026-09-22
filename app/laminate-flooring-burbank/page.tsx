import type { Metadata } from "next";
import ServicePage from "../ui/service-page";
import { SITE_URL } from "../lib/business";
export const metadata: Metadata = { title: "Laminate Flooring in Burbank", description: "Explore durable laminate flooring products and professional installation in Burbank.", alternates: { canonical: "/laminate-flooring-burbank" }, openGraph: { title: "Laminate Flooring in Burbank", description: "Laminate flooring products and installation.", url: `${SITE_URL}/laminate-flooring-burbank` }, twitter: { card: "summary_large_image" } };
export default function Page(){return <ServicePage title="Laminate Flooring in Burbank" description="Get real style at a practical price with laminate flooring and professional installation." href="/laminate-flooring-burbank"/>}
