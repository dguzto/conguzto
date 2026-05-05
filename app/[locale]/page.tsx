import { getTranslations, getLocale } from "next-intl/server";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArticleCard } from "@/components/ArticleCard";
import { FadeIn } from "@/components/FadeIn";
import { getArticles } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEs = locale === "es";
  const title = isEs ? "CGT · Aprende marketing analizando empresas" : "CGT · Learn marketing by analyzing companies";
  const description = isEs
    ? "Cada semana analizo una empresa que crece, desgloso su estrategia y comparto qué puedes copiar. Análisis accionables de marketing, growth y negocio. Por Diego Guzmán."
    : "Every week I break down a growing company and share what you can copy. Actionable marketing, growth, and business analysis. By Diego Guzmán.";
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
      {/* Hero */}
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

      {/* Articles */}
      {articles.length > 0 && (
        <section className="px-xl pb-2xl">
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

      {/* Split 1 */}
      <section className="px-xl py-2xl">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2xl items-center">
          <FadeIn direction="left">
            <h2 className="font-heading text-[28px] font-bold text-text-primary leading-[1.2] tracking-[-0.5px]">
              {t("split1Title")}
            </h2>
            <p className="text-[15px] text-text-secondary mt-md leading-[1.7]">
              {t("split1Text")}
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={150}>
            <div className="bg-gradient-to-br from-accent/8 to-accent/2 border border-border rounded-image h-[280px] flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="45" stroke="#C4703E" strokeWidth="2" strokeDasharray="8 4" fill="none"/>
                <polygon points="95,55 105,60 95,65" fill="#C4703E"/>
                <circle cx="60" cy="15" r="8" fill="rgba(196,112,62,0.15)" stroke="#C4703E" strokeWidth="1.5"/>
                <text x="60" y="18" textAnchor="middle" fontSize="10" fill="#C4703E">$</text>
                <circle cx="105" cy="60" r="8" fill="rgba(196,112,62,0.15)" stroke="#C4703E" strokeWidth="1.5"/>
                <text x="105" y="63" textAnchor="middle" fontSize="10" fill="#C4703E">&#x27F3;</text>
                <circle cx="60" cy="105" r="8" fill="rgba(196,112,62,0.15)" stroke="#C4703E" strokeWidth="1.5"/>
                <text x="60" y="108" textAnchor="middle" fontSize="10" fill="#C4703E">&#x2191;</text>
                <circle cx="15" cy="60" r="8" fill="rgba(196,112,62,0.15)" stroke="#C4703E" strokeWidth="1.5"/>
                <text x="15" y="63" textAnchor="middle" fontSize="10" fill="#C4703E">&#x1F50D;</text>
              </svg>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Split 2 */}
      <section className="px-xl py-2xl">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2xl items-center">
          <FadeIn direction="left" className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-accent/8 to-accent/2 border border-border rounded-image h-[280px] flex items-center justify-center">
              <div className="text-left px-xl text-[15px] text-text-primary leading-[2.4]">
                <div><span className="text-accent mr-2">&#10003;</span> Identify acquisition channel</div>
                <div><span className="text-accent mr-2">&#10003;</span> Map the funnel</div>
                <div><span className="text-accent mr-2">&#10003;</span> Find the growth loop</div>
                <div className="opacity-40"><span className="mr-2">&#9744;</span> Run it this week</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={150} className="order-1 md:order-2">
            <h2 className="font-heading text-[28px] font-bold text-text-primary leading-[1.2] tracking-[-0.5px]">
              {t("split2Title")}
            </h2>
            <p className="text-[15px] text-text-secondary mt-md leading-[1.7]">
              {t("split2Text")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-xl py-3xl">
        <FadeIn direction="scale">
          <div className="max-w-[520px] mx-auto text-center">
            <h2 className="font-heading text-[28px] font-bold text-text-primary leading-[1.2] tracking-[-0.5px]">
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
