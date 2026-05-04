"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const localizedPaths: Record<string, string> = {
  "/sobre-mi": "/about",
  "/about": "/sobre-mi",
  "/contacto": "/contact",
  "/contact": "/contacto",
};

export function LanguageToggle() {
  const locale = useLocale();
  const rawPathname = usePathname();
  const router = useRouter();

  const targetLocale = locale === "es" ? "en" : "es";
  const label = targetLocale.toUpperCase();

  function switchLocale() {
    let path = rawPathname.replace(/^\/(es|en)/, "") || "/";

    for (const [from, to] of Object.entries(localizedPaths)) {
      if (path === from) {
        path = to;
        break;
      }
    }

    router.push(`/${targetLocale}${path === "/" ? "" : path}`);
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
