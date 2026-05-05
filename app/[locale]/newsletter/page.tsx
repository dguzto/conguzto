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
  const tWid = await getTranslations("whatIDo");
  const articles = getArticles(locale);

  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="pt-2xl pb-xl px-xl">
        <div className="max-w-[680px] mx-auto text-center">
          <FadeIn>
            <h1 className="font-heading text-[clamp(1.8rem,4vw,2.25rem)] font-bold text-text-primary leading-[1.15] tracking-[-1px]">{t("title")}</h1>
            <p className="text-[15px] text-text-secondary mt-md leading-[1.7]">{t("subtitle")}</p>
          </FadeIn>
        </div>
      </section>

      <section className="px-xl pb-xl">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-lg">
          <FadeIn delay={100}>
            <div className="bg-bg-white border border-border rounded-card p-xl">
              <svg className="w-10 h-10 mb-md text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              <h3 className="font-heading text-[16px] font-semibold text-text-primary tracking-[-0.3px] mb-sm">{tWid("card1Title")}</h3>
              <p className="text-[14px] text-text-secondary leading-[1.6]">{tWid("card1Text")}</p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="bg-bg-white border border-border rounded-card p-xl">
              <svg className="w-10 h-10 mb-md text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <h3 className="font-heading text-[16px] font-semibold text-text-primary tracking-[-0.3px] mb-sm">{tWid("card2Title")}</h3>
              <p className="text-[14px] text-text-secondary leading-[1.6]">{tWid("card2Text")}</p>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="bg-bg-white border border-border rounded-card p-xl">
              <svg className="w-10 h-10 mb-md text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <h3 className="font-heading text-[16px] font-semibold text-text-primary tracking-[-0.3px] mb-sm">{tWid("card3Title")}</h3>
              <p className="text-[14px] text-text-secondary leading-[1.6]">{tWid("card3Text")}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {articles.length > 0 && (
        <section className="px-xl pb-xl">
          <div className="max-w-[1120px] mx-auto">
            <p className="text-[12px] font-semibold tracking-[2px] uppercase text-text-muted mb-lg">{t("archive")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
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
          </div>
        </section>
      )}

      <section className="px-xl py-2xl">
        <FadeIn direction="scale">
          <div className="max-w-[680px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2rem)] font-bold text-text-primary leading-[1.2] tracking-[-0.5px]">
              {t("ctaTitle")}
            </h2>
            <p className="text-[15px] text-text-secondary mt-md mb-xl">{t("ctaText")}</p>
            <NewsletterSignup />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
