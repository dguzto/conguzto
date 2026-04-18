import { getTranslations, getLocale } from "next-intl/server";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEs = locale === "es";
  return {
    title: isEs ? "Sobre mí — Con Guzto" : "About — Con Guzto",
    description: isEs ? "Diego Guzmán. Construyo y analizo negocios que crecen." : "Diego Guzmán. I build and analyze growing businesses.",
  };
}

export default async function AboutPage() {
  const t = await getTranslations();
  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="py-3xl px-xl">
        <div className="max-w-[680px] mx-auto">
          <div className="mb-2xl">
            <div className="w-[200px] h-[200px] bg-gradient-to-br from-[#e8e0d8] to-[#d4c4b0] rounded-image mb-lg" />
            <h1 className="text-[30px] font-bold text-text-primary tracking-[--tracking-tight-h1] leading-[1.2]">{t("about.title")}</h1>
          </div>
          <div className="space-y-md text-[16px] text-text-secondary leading-[1.7]">
            <p>Hoy soy CMO de Mentorhood, cofundador de Good People (una agencia de marketing), y escribo esta newsletter donde analizo cómo crecen empresas.</p>
            <p>Antes de esto pasé por roles de marketing en startups B2B, consultoría de negocio, y un máster que me enseñó más sobre lo que no quería hacer que sobre lo que sí.</p>
            <p>Lo que me mueve es entender por qué unas empresas crecen y otras no. No desde la teoría — desde operar, equivocarme, y volver a probar.</p>
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
