import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/seo";

const routes = [
  "",
  "/blog",
  "/dersler",
  "/galeri",
  "/hakkimda",
  "/iletisim",
  "/randevu",
  "/gizlilik-politikasi",
  "/cerez-politikasi",
  "/kullanim-kosullari",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const getChangeFrequency = (route: string): MetadataRoute.Sitemap[number]["changeFrequency"] =>
    route === "" ? "weekly" : "monthly";

  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: getChangeFrequency(route),
    priority: route === "" ? 1 : route === "/blog" ? 0.8 : 0.7,
  }));

  const postRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
