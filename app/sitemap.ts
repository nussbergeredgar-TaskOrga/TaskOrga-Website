import type { MetadataRoute } from "next";

const siteUrl = "https://taskorga.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/preise", "/demo", "/impressum", "/datenschutz"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
