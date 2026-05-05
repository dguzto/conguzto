import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="border-t border-border">
      <div className="max-w-[1120px] mx-auto px-xl py-lg flex flex-col sm:flex-row items-center justify-between gap-sm text-[13px]">
        <p className="text-text-muted">{t("footer.copyright")}</p>
        <div className="flex items-center gap-lg">
          <Link href="/newsletter" className="text-text-secondary hover:text-text-primary transition-colors">{t("nav.newsletter")}</Link>
          <Link href="/contacto" className="text-text-secondary hover:text-text-primary transition-colors">{t("nav.contact")}</Link>
          <a href="https://linkedin.com/in/diegoguzto" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">LinkedIn</a>
          <a href="https://x.com/diegoguzto" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">X</a>
        </div>
      </div>
    </footer>
  );
}
