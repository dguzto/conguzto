import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "content");

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

export function getArticles(locale: string): ArticleMeta[] {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  const articles = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const stats = readingTime(content);
    return {
      slug, title: data.title || slug, subtitle: data.subtitle || "",
      industry: data.industry || "", country: data.country || "",
      date: data.date || "", readingTime: `${Math.ceil(stats.minutes)}`,
      number: data.number || 0,
    };
  });
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticle(locale: string, slug: string): Article | null {
  const filePath = path.join(contentDir, locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  return {
    slug, title: data.title || slug, subtitle: data.subtitle || "",
    industry: data.industry || "", country: data.country || "",
    date: data.date || "", readingTime: `${Math.ceil(stats.minutes)}`,
    number: data.number || 0, content,
  };
}

export function getArticleSlugs(locale: string): string[] {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}
