"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const targetLocale = locale === "es" ? "en" : "es";
  const label = targetLocale.toUpperCase();

  function switchLocale() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace(pathname as any, { locale: targetLocale });
  }

  return (
    <button
      onClick={switchLocale}
      className="text-accent font-semibold text-xs hover:opacity-80 transition-opacity"
    >
      {label}
    </button>
  );
}
