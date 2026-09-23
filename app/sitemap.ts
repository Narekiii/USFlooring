import type { MetadataRoute } from "next";

const siteUrl = "https://www.usflooring.la";

const routes = [
  "/",
  "/products",
  "/hardwood-flooring-burbank",
  "/laminate-flooring-burbank",
  "/luxury-vinyl-flooring-burbank",
  "/flooring-installation-burbank",
  "/molding-baseboard-installation-burbank",
  "/about",
  "/gallery",
  "/reviews",
  "/contact",
  "/buyers-guide",
  "/privacy",
] as const;

// Reflects the date this route set was actually deployed with current content.
// Update only when the underlying page content genuinely changes.
const lastModified = new Date("2026-09-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
  }));
}
