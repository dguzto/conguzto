import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { getArticle, getArticles, getArticleSlugs } from "@/lib/content";
import { MdxContent } from "@/components/MdxContent";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArticleCard } from "@/components/ArticleCard";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const esSlugs = getArticleSlugs("es");
  const enSlugs = getArticleSlugs("en");
  return [...esSlugs.map((slug) => ({ locale: "es", slug })), ...enSlugs.map((slug) => ({ locale: "en", slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const locale = await getLocale();
  const { slug } = await params;
  const article = getArticle(locale, slug);
  if (!article) return { title: "Not Found" };
  return { title: `${article.title} — Con Guzto`, description: article.subtitle };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getLocale();
  const { slug } = await params;
  const article = getArticle(locale, slug);
  if (!article) notFound();

  const t = await getTranslations("article");
  const otherArticles = getArticles(locale).filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="pt-3xl px-xl">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[11px] font-medium text-accent uppercase tracking-[--tracking-label] mb-md">ANÁLISIS #{String(article.number).padStart(2, "0")}</p>
          <h1 className="text-[30px] font-bold text-text-primary tracking-[--tracking-tight-h1] leading-[1.2]">{article.title}</h1>
          <p className="text-[15px] text-text-secondary mt-md leading-[1.6]">{article.subtitle}</p>
          <p className="text-xs text-text-muted mt-md">{article.readingTime} {t("readTime")} · {new Date(article.date).toLocaleDateString(locale === "es" ? "es-ES" : "en-US", { month: "long", year: "numeric" })}</p>
        </div>
      </section>
      <section className="py-2xl px-xl"><MdxContent source={article.content} /></section>
      <section className="px-xl pb-2xl"><div className="max-w-[420px] mx-auto"><NewsletterSignup /></div></section>
      {otherArticles.length > 0 && (
        <section className="px-xl pb-2xl border-t border-border pt-2xl">
          <div className="max-w-[1120px] mx-auto">
            <p className="text-[11px] font-medium text-accent uppercase tracking-[--tracking-label] mb-md">{t("keepReading")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">{otherArticles.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
          </div>
        </section>
      )}
    </div>
  );
}
