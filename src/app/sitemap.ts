import type { MetadataRoute } from "next";

const routes = [
  "",
  "/vision",
  "/campus",
  "/eco-living",
  "/education",
  "/wellness",
  "/innovation",
  "/community",
  "/gallery",
  "/live-updates",
  "/get-involved",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.jagkalyantarakgurukul.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/live-updates" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
