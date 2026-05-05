import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Space_Grotesk, Sora } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-heading",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-logo",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: `https://conguzto.com${locale === "es" ? "" : "/en"}`,
      languages: {
        es: "https://conguzto.com",
        en: "https://conguzto.com/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "es" | "en")) notFound();
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Diego Guzmán",
    url: "https://conguzto.com",
    sameAs: ["https://www.linkedin.com/in/dguzto/", "https://x.com/dguzto7"],
    jobTitle: locale === "es" ? "Estratega de crecimiento" : "Growth strategist",
    description: locale === "es" ? "Construyo y analizo negocios que crecen." : "I build and analyze growing businesses.",
  };

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable} ${sora.variable}`}>
      <body className="bg-bg-primary font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
