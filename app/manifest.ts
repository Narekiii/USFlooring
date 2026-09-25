import type { MetadataRoute } from "next";
import { BUSINESS } from "./lib/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.name,
    short_name: "US Flooring",
    description: "Flooring and molding sales and installation in Burbank, CA.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F2E8",
    theme_color: "#D91F2A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
