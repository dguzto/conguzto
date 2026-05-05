import { getTranslations, getLocale } from "next-intl/server";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArticleCard } from "@/components/ArticleCard";
import { FadeIn } from "@/components/FadeIn";
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
  const tHome = await getTranslations("home");
  const articles = getArticles(locale);

  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="py-2xl px-xl">
        <div className="max-w-[680px] mx-auto">
          <FadeIn>
            <h1 className="font-heading text-[clamp(1.8rem,4vw,2.25rem)] font-bold text-text-primary leading-[1.15] tracking-[-1px]">{t("title")}</h1>
            <p className="text-[15px] text-text-secondary mt-md leading-[1.7]">{t("subtitle")}</p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="mt-xl"><NewsletterSignup /></div>
          </FadeIn>
        </div>
      </section>
      {articles.length > 0 && (
        <section className="px-xl pb-2xl">
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-lg">
            <FadeIn delay={100}>
              <ArticleCard article={articles[0]} featured />
            </FadeIn>
            {articles.length > 1 && (
              <FadeIn delay={200}>
                <div className="flex flex-col">
                  {articles.slice(1).map((article, i) => (
                    <ArticleCard key={article.slug} article={article} listItem lastItem={i === articles.length - 2} />
                  ))}
                </div>
              </FadeIn>
            )}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="px-xl py-2xl">
        <FadeIn direction="scale">
          <div className="max-w-[520px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-text-primary leading-[1.2] tracking-[-0.5px]">
              {tHome("ctaTitle")}
            </h2>
            <p className="text-[15px] text-text-secondary mt-md mb-xl">{tHome("ctaText")}</p>
            <NewsletterSignup />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
