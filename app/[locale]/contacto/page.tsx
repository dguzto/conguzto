import { getTranslations, getLocale } from "next-intl/server";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEs = locale === "es";
  const title = isEs ? "Contacto · CGT" : "Contact · CGT";
  const description = isEs ? "Escríbeme para trabajar juntos, colaborar, o preguntar." : "Write to me to work together or collaborate.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://conguzto.com${isEs ? "" : "/en"}/contacto`,
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

export default async function ContactPage() {
  const t = await getTranslations("contact");
  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="py-2xl px-xl">
        <div className="max-w-[520px] mx-auto">
          <FadeIn>
            <h1 className="font-heading text-[clamp(1.8rem,4vw,2.25rem)] font-bold text-text-primary leading-[1.15] tracking-[-1px] mb-sm">{t("title")}</h1>
            <p className="text-[15px] text-text-secondary mb-2xl">{t("subtitle")}</p>
          </FadeIn>
          <FadeIn delay={200}>
            <ContactForm />
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-text-muted text-xs mt-xl">{t("directEmail")} <a href="mailto:diego@conguzto.com" className="text-accent hover:underline">diego@conguzto.com</a></p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
