import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEs = locale === "es";
  return {
    title: isEs ? "Contacto — Con Guzto" : "Contact — Con Guzto",
    description: isEs ? "Escríbeme para trabajar juntos, colaborar, o preguntar." : "Write to me to work together or collaborate.",
  };
}

export default function ContactPage() {
  const t = useTranslations("contact");
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
