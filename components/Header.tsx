import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageToggle } from "./LanguageToggle";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between px-xl py-md relative">
        <Link href="/" className="font-bold text-text-primary text-[16px]">
          con guzto
        </Link>
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
