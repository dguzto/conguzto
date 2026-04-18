import { getTranslations, getLocale } from "next-intl/server";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEs = locale === "es";
  const title = isEs ? "Contacto — Con Guzto" : "Contact — Con Guzto";
  const description = isEs ? "Escríbeme para trabajar juntos, colaborar, o preguntar." : "Write to me to work together or collaborate.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://conguzto.com${isEs ? "" : "/en"}/contacto`,
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

export default async function ContactPage() {
  const t = await getTranslations("contact");
  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="py-3xl px-xl">
        <div className="max-w-[520px] mx-auto">
          <h1 className="text-[30px] font-bold text-text-primary tracking-[--tracking-tight-h1] leading-[1.2] mb-md">{t("title")}</h1>
          <p className="text-[15px] text-text-secondary mb-2xl">{t("subtitle")}</p>
          <ContactForm />
          <p className="text-text-muted text-xs mt-2xl">{t("directEmail")} <a href="mailto:diego@conguzto.com" className="text-accent hover:underline">diego@conguzto.com</a></p>
        </div>
      </section>
    </div>
  );
}
