import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageToggle } from "./LanguageToggle";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between px-xl py-md relative">
        <Logo size={28} />
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/newsletter" className="text-text-secondary hover:text-text-primary text-[13px] transition-colors">{t("newsletter")}</Link>
          <Link href="/sobre-mi" className="text-text-secondary hover:text-text-primary text-[13px] transition-colors">{t("about")}</Link>
          <Link href="/contacto" className="text-text-secondary hover:text-text-primary text-[13px] transition-colors">{t("contact")}</Link>
          <LanguageToggle />
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
