import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="border-t border-border mt-2xl">
      <div className="max-w-[1120px] mx-auto px-xl py-2xl">
        <div className="flex items-center justify-between mb-lg">
          <Logo size={28} />
          <div className="flex items-center gap-md">
            <a href="https://linkedin.com/in/diegoguzto" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary text-[13px] transition-colors">LinkedIn</a>
            <a href="https://x.com/diegoguzto" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary text-[13px] transition-colors">X</a>
          </div>
        </div>
        <p className="text-text-secondary text-[14px] text-center mb-md">{t("footer.tagline")}</p>
        <div className="flex justify-center gap-lg mb-lg">
          <Link href="/newsletter" className="text-text-secondary hover:text-text-primary text-[13px] transition-colors">{t("nav.newsletter")}</Link>
          <Link href="/contacto" className="text-text-secondary hover:text-text-primary text-[13px] transition-colors">{t("nav.contact")}</Link>
        </div>
        <p className="text-text-muted text-xs text-center">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
