"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const targetLocale = locale === "es" ? "en" : "es";
  const label = targetLocale.toUpperCase();

  function switchLocale() {
    if (locale === "es") {
      router.push(`/en${pathname}`);
    } else {
      const newPath = pathname.replace(/^\/en/, "") || "/";
      router.push(newPath);
    }
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
