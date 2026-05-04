import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface ArticleMeta {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription: string;
  keywords: string[];
  industry: string;
  country: string;
  date: string;
  dateModified: string;
  readingTime: string;
  number: number;
}

export interface Article extends ArticleMeta {
  content: string;
}

const contentDir = path.join(process.cwd(), "content");

export function getArticles(locale: string): ArticleMeta[] {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const articles: ArticleMeta[] = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const rt = readingTime(content);

    return {
      slug,
      title: data.title ?? "",
      subtitle: data.subtitle ?? "",
      metaDescription: data.metaDescription ?? data.subtitle ?? "",
      keywords: data.keywords ?? [],
      industry: data.industry ?? "",
      country: data.country ?? "",
      date: data.date ?? "",
      dateModified: data.dateModified ?? data.date ?? "",
      readingTime: `${Math.max(1, Math.ceil(rt.minutes))}`,
      number: data.number ?? 0,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticle(locale: string, slug: string): Article | null {
  const file = path.join(contentDir, locale, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title ?? "",
    subtitle: data.subtitle ?? "",
    metaDescription: data.metaDescription ?? data.subtitle ?? "",
    keywords: data.keywords ?? [],
    industry: data.industry ?? "",
    country: data.country ?? "",
    date: data.date ?? "",
    dateModified: data.dateModified ?? data.date ?? "",
    readingTime: `${Math.max(1, Math.ceil(rt.minutes))}`,
    number: data.number ?? 0,
    content,
  };
}

export function getArticleSlugs(locale: string): string[] {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
