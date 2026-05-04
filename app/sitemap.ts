import type { MetadataRoute } from "next";
import { getArticleSlugs } from "@/lib/content";

const BASE_URL = "https://conguzto.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const esPages = [
    { url: `${BASE_URL}/es`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/es/newsletter`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/es/sobre-mi`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/es/contacto`, changeFrequency: "monthly" as const, priority: 0.5 },
  ];
  const enPages = [
    { url: `${BASE_URL}/en`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/en/newsletter`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/en/about`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/en/contact`, changeFrequency: "monthly" as const, priority: 0.4 },
  ];
  const esArticles = getArticleSlugs("es").map((slug) => ({ url: `${BASE_URL}/es/newsletter/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 }));
  const enArticles = getArticleSlugs("en").map((slug) => ({ url: `${BASE_URL}/en/newsletter/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 }));
  return [...esPages, ...enPages, ...esArticles, ...enArticles];
}
