"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageToggle } from "./LanguageToggle";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-text-primary p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-primary border-b border-border px-xl py-lg">
          <nav className="flex flex-col gap-lg">
            <Link href="/newsletter" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-text-primary text-[15px]">{t("newsletter")}</Link>
            <Link href="/sobre-mi" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-text-primary text-[15px]">{t("about")}</Link>
            <Link href="/contacto" onClick={() => setIsOpen(false)} className="text-text-secondary hover:text-text-primary text-[15px]">{t("contact")}</Link>
            <LanguageToggle />
          </nav>
        </div>
      )}
    </div>
  );
}
