import type { MetadataRoute } from "next";
const routes=["/","/products","/hardwood-flooring-burbank","/laminate-flooring-burbank","/luxury-vinyl-flooring-burbank","/flooring-installation-burbank","/molding-baseboard-installation-burbank","/about","/gallery","/reviews","/contact","/buyers-guide"];
export default function sitemap():MetadataRoute.Sitemap{return routes.map(url=>({url:`https://www.usflooring.la${url}`,lastModified:new Date("2026-09-22")}))}
