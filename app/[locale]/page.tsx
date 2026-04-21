import { getTranslations, getLocale } from "next-intl/server";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArticleCard } from "@/components/ArticleCard";
import { FadeIn } from "@/components/FadeIn";
import { getArticles } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEs = locale === "es";
  const title = isEs ? "CGT — Aprende marketing analizando empresas" : "CGT — Learn marketing by analyzing companies";
  const description = isEs
    ? "Cada semana analizo una empresa real, desgloso su estrategia de crecimiento y te cuento qué haría diferente. Análisis accionables de marketing, growth y negocio. Por Diego Guzmán."
    : "Every week I break down a real company's growth strategy and share what I'd do differently. Actionable marketing, growth, and business analysis. By Diego Guzmán.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://conguzto.com${isEs ? "" : "/en"}`,
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

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations("home");
  const articles = getArticles(locale);

  return (
    <div className="bg-bg-primary">
      <section className="py-3xl px-xl">
        <FadeIn>
          <div className="max-w-[580px] mx-auto text-center">
            <h1 className="font-heading text-[36px] font-bold text-text-primary leading-[1.15] tracking-[-1px]">
              <span className="decoration-accent underline decoration-2 underline-offset-4">{t("headline")}</span>
            </h1>
            <p className="text-[15px] text-text-secondary mt-md">{t("subtitle")}</p>
            <p className="text-[15px] text-text-secondary mt-md leading-[1.6]">{t("description")}</p>
            <div className="mt-xl bg-accent/5 rounded-card p-lg"><NewsletterSignup /></div>
          </div>
        </FadeIn>
      </section>
      {articles.length > 0 && (
        <section className="px-xl pb-xl">
          <div className="max-w-[1120px] mx-auto">
            <FadeIn>
              <p className="text-[11px] font-medium text-accent uppercase tracking-[--tracking-label] mb-md">{t("latestLabel")}</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              {articles.slice(0, 3).map((article, i) => (
                <FadeIn key={article.slug} delay={i * 100}>
                  <ArticleCard article={article} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
