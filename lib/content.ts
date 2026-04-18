import matter from "gray-matter";
import readingTime from "reading-time";
import { articles as contentRegistry } from "./articles-data";

export interface ArticleMeta {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  country: string;
  date: string;
  readingTime: string;
  number: number;
}

export interface Article extends ArticleMeta {
  content: string;
}

function parseArticle(slug: string, raw: string): Article {
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    slug,
    title: data.title || slug,
    subtitle: data.subtitle || "",
    industry: data.industry || "",
    country: data.country || "",
    date: data.date || "",
    readingTime: `${Math.ceil(stats.minutes)}`,
    number: data.number || 0,
    content,
  };
}

export function getArticles(locale: string): ArticleMeta[] {
  const files = contentRegistry[locale] || {};
  const articles = Object.entries(files).map(([slug, raw]) => {
    const { content: _, ...meta } = parseArticle(slug, raw);
    return meta;
  });
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticle(locale: string, slug: string): Article | null {
  const raw = contentRegistry[locale]?.[slug];
  if (!raw) return null;
  return parseArticle(slug, raw);
}

export function getArticleSlugs(locale: string): string[] {
  return Object.keys(contentRegistry[locale] || {});
}
