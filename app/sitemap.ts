import type { MetadataRoute } from "next";
import { sectors, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/sectors",
    "/investors",
    "/contractors",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/cookie-preferences",
    ...sectors.map((sector) => `/sectors/${sector.slug}`)
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
