import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="border-t border-border">
      <div className="max-w-[1120px] mx-auto px-xl py-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-md">
          <div className="flex items-center gap-lg">
            <Logo size={22} />
            <p className="text-text-secondary text-[13px]">{t("footer.tagline")}</p>
          </div>
          <div className="flex items-center gap-lg">
            <Link href="/newsletter" className="text-text-secondary hover:text-text-primary text-[13px] transition-colors">{t("nav.newsletter")}</Link>
            <Link href="/contacto" className="text-text-secondary hover:text-text-primary text-[13px] transition-colors">{t("nav.contact")}</Link>
            <a href="https://linkedin.com/in/diegoguzto" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary text-[13px] transition-colors">LinkedIn</a>
            <a href="https://x.com/diegoguzto" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary text-[13px] transition-colors">X</a>
          </div>
        </div>
        <p className="text-text-muted text-xs text-center mt-lg">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
