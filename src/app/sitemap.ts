import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { posts } from "@/lib/posts";

// Only canonical, indexable URLs. Demo /work pages are noindex and deliberately left out.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.indexable) return [];
  const now = new Date();
  const staticRoutes = ["", "/services", "/about", "/blog", "/contact", "/privacy", "/terms"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : p === "/privacy" || p === "/terms" ? 0.3 : 0.8,
  }));
  return [
    ...staticRoutes,
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, priority: 0.9 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date), priority: 0.6 })),
  ];
}
