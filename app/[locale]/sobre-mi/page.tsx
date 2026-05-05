import { getTranslations, getLocale } from "next-intl/server";
import { NewsletterSignup } from "@/components/NewsletterSignup";
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
      <section className="py-3xl px-xl">
        <div className="max-w-[680px] mx-auto">
          <div className="mb-2xl">
            <img src="/diego.png" alt="Diego Guzmán" className="w-[200px] h-[200px] object-cover rounded-image mb-lg" />
            <h1 className="font-heading text-[36px] font-bold text-text-primary leading-[1.15] tracking-[-1px]">{t("about.title")}</h1>
          </div>
          <div className="space-y-md text-[16px] text-text-secondary leading-[1.7]">
            <p>{t("about.bio1")}</p>
            <p>{t("about.bio2")}</p>
            <p>{t("about.bio3")}</p>
            <p>{t("about.bio4")}<a href="/contacto" className="text-accent font-medium hover:opacity-80 transition-opacity">{t("about.bio4Link")}</a></p>
          </div>
          <div className="flex gap-md mt-2xl">
            <a href="https://linkedin.com/in/diegoguzto" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary text-[14px] transition-colors underline underline-offset-4">LinkedIn</a>
            <a href="https://x.com/diegoguzto" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary text-[14px] transition-colors underline underline-offset-4">X</a>
          </div>
          <div className="mt-2xl pt-2xl border-t border-border"><NewsletterSignup /></div>
        </div>
      </section>
    </div>
  );
}
