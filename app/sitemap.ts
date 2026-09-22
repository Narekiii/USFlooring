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
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
  }));
}
