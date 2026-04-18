import { getTranslations, getLocale } from "next-intl/server";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticles } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEs = locale === "es";
  const title = isEs ? "Con Guzto — Aprende marketing analizando empresas" : "Con Guzto — Learn marketing by analyzing companies";
  const description = isEs ? "Cada semana analizo una empresa y te cuento qué haría para hacerla crecer. Por Diego Guzmán." : "Every week I analyze a company and tell you what I'd do to grow it. By Diego Guzmán.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://conguzto.com${isEs ? "" : "/en"}`,
      siteName: "Con Guzto",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations("home");
  const articles = getArticles(locale);

  return (
    <div className="bg-bg-primary">
      <section className="py-3xl px-xl">
        <div className="max-w-[580px] mx-auto text-center">
          <h1 className="text-[30px] font-bold text-text-primary tracking-[--tracking-tight-h1] leading-[1.2]">{t("headline")}</h1>
          <p className="text-[15px] text-text-secondary mt-md">{t("subtitle")}</p>
          <p className="text-[15px] text-text-secondary mt-md leading-[1.6]">{t("description")}</p>
          <div className="mt-xl"><NewsletterSignup /></div>
        </div>
      </section>
      {articles.length > 0 && (
        <section className="px-xl pb-xl">
          <div className="max-w-[1120px] mx-auto">
            <p className="text-[11px] font-medium text-accent uppercase tracking-[--tracking-label] mb-md">{t("latestLabel")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              {articles.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
