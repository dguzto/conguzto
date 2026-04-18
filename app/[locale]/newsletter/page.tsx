import { getTranslations, getLocale } from "next-intl/server";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticles } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEs = locale === "es";
  const title = "Newsletter — Con Guzto";
  const description = isEs ? "Archivo completo de análisis de empresas." : "Full archive of company analyses.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://conguzto.com${isEs ? "" : "/en"}/newsletter`,
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

export default async function NewsletterPage() {
  const locale = await getLocale();
  const t = await getTranslations("newsletter");
  const articles = getArticles(locale);

  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="py-3xl px-xl">
        <div className="max-w-[680px] mx-auto">
          <h1 className="text-[30px] font-bold text-text-primary tracking-[--tracking-tight-h1] leading-[1.2]">{t("title")}</h1>
          <p className="text-[15px] text-text-secondary mt-md leading-[1.7]">{t("subtitle")}</p>
          <div className="mt-xl"><NewsletterSignup /></div>
        </div>
      </section>
      <section className="px-xl pb-2xl">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
