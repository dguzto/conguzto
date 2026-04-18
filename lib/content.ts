import { articles as data, type ArticleData } from "./articles-data";

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

function toMeta(a: ArticleData): ArticleMeta {
  const words = a.content.split(/\s+/).length;
  return {
    slug: a.slug,
    title: a.title,
    subtitle: a.subtitle,
    industry: a.industry,
    country: a.country,
    date: a.date,
    readingTime: `${Math.max(1, Math.ceil(words / 200))}`,
    number: a.number,
  };
}

export function getArticles(locale: string): ArticleMeta[] {
  const list = data[locale] || [];
  return list.map(toMeta).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticle(locale: string, slug: string): Article | null {
  const a = (data[locale] || []).find((x) => x.slug === slug);
  if (!a) return null;
  return { ...toMeta(a), content: a.content };
}

export function getArticleSlugs(locale: string): string[] {
  return (data[locale] || []).map((a) => a.slug);
}
