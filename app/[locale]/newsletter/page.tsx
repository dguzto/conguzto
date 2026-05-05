import { getTranslations, getLocale } from "next-intl/server";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArticleCard } from "@/components/ArticleCard";
import { getArticles } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEs = locale === "es";
  const title = "Newsletter · CGT";
  const description = isEs ? "Archivo completo de análisis de empresas." : "Full archive of company analyses.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://conguzto.com${isEs ? "" : "/en"}/newsletter`,
      siteName: "CGT",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "CGT" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
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
          <h1 className="font-heading text-[36px] font-bold text-text-primary leading-[1.15] tracking-[-1px]">{t("title")}</h1>
          <p className="text-[15px] text-text-secondary mt-md leading-[1.7]">{t("subtitle")}</p>
          <div className="mt-xl"><NewsletterSignup /></div>
        </div>
      </section>
      {articles.length > 0 && (
        <section className="px-xl pb-2xl">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-lg">
            <ArticleCard article={articles[0]} featured />
            {articles.length > 1 && (
              <div className="flex flex-col">
                {articles.slice(1).map((article, i) => (
                  <ArticleCard key={article.slug} article={article} listItem lastItem={i === articles.length - 2} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
