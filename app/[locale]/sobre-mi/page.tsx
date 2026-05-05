import { getTranslations, getLocale } from "next-intl/server";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEs = locale === "es";
  const title = isEs ? "Sobre mí · CGT" : "About · CGT";
  const description = isEs ? "Diego Guzmán. Construyo y analizo negocios que crecen." : "Diego Guzmán. I build and analyze growing businesses.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://conguzto.com${isEs ? "" : "/en"}/sobre-mi`,
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

export default async function AboutPage() {
  const t = await getTranslations();
  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="py-2xl px-xl">
        <div className="max-w-[680px] mx-auto">
          <FadeIn direction="scale">
            <img src="/diego.png" alt="Diego Guzmán" className="w-[200px] h-[200px] object-cover rounded-image mb-lg" />
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="font-heading text-[clamp(1.8rem,4vw,2.25rem)] font-bold text-text-primary leading-[1.15] tracking-[-1px]">{t("about.title")}</h1>
          </FadeIn>
          <div className="mt-xl space-y-md text-[16px] text-text-secondary leading-[1.7]">
            <FadeIn delay={200}><p>{t("about.bio1")}</p></FadeIn>
            <FadeIn delay={300}><p>{t("about.bio2")}</p></FadeIn>
            <FadeIn delay={400}><p>{t("about.bio3")}</p></FadeIn>
            <FadeIn delay={500}>
              <div className="flex flex-wrap gap-lg py-md text-[14px] text-text-muted font-medium tracking-wide">
                <span>{t("about.stat1")}</span>
                <span>·</span>
                <span>{t("about.stat2")}</span>
                <span>·</span>
                <span>{t("about.stat3")}</span>
                <span>·</span>
                <span>{t("about.stat4")}</span>
              </div>
            </FadeIn>
            <FadeIn delay={600}>
              <p>{t("about.bio4")}<a href="/contacto" className="text-accent font-medium hover:opacity-80 transition-opacity">{t("about.bio4Link")}</a></p>
            </FadeIn>
          </div>
          <FadeIn delay={700}>
            <div className="flex gap-md mt-xl">
              <a href="https://www.linkedin.com/in/dguzto/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary text-[14px] transition-colors underline underline-offset-4">LinkedIn</a>
              <a href="https://x.com/dguzto7" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary text-[14px] transition-colors underline underline-offset-4">X</a>
            </div>
          </FadeIn>
          <FadeIn delay={800} direction="scale">
            <div className="mt-2xl pt-xl border-t border-border"><NewsletterSignup /></div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
