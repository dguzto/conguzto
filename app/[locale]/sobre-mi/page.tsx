import { getTranslations, getLocale } from "next-intl/server";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEs = locale === "es";
  const title = isEs ? "Sobre mí — Con Guzto" : "About — Con Guzto";
  const description = isEs ? "Diego Guzmán. Construyo y analizo negocios que crecen." : "Diego Guzmán. I build and analyze growing businesses.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://conguzto.com${isEs ? "" : "/en"}/sobre-mi`,
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

export default async function AboutPage() {
  const t = await getTranslations();
  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="py-3xl px-xl">
        <div className="max-w-[680px] mx-auto">
          <div className="mb-2xl">
            <img src="/diego.jpg" alt="Diego Guzmán" className="w-[200px] h-[200px] object-cover rounded-image mb-lg" />
            <h1 className="text-[30px] font-bold text-text-primary tracking-[--tracking-tight-h1] leading-[1.2]">{t("about.title")}</h1>
          </div>
          <div className="space-y-md text-[16px] text-text-secondary leading-[1.7]">
            <p>{t("about.bio1")}</p>
            <p>{t("about.bio2")}</p>
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
