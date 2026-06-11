import type { MetadataRoute } from "next";

const publicRoutes = [
  "",
  "/communities",
  "/creators",
  "/competition",
  "/about",
  "/waitlist",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-10");

  return publicRoutes.map((route) => ({
    url: `https://sidelinesocials.com${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/waitlist" ? 0.9 : 0.8,
  }));
}
