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

  function switchTo(targetLocale: string) {
    if (targetLocale === locale) return;
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
    <div className="flex border border-border rounded-md overflow-hidden">
      <button
        onClick={() => switchTo("es")}
        className={`px-2.5 py-1 text-[11px] font-medium transition-colors ${
          locale === "es"
            ? "bg-text-primary text-white"
            : "text-text-muted hover:bg-border/50 hover:text-text-primary"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => switchTo("en")}
        className={`px-2.5 py-1 text-[11px] font-medium transition-colors ${
          locale === "en"
            ? "bg-text-primary text-white"
            : "text-text-muted hover:bg-border/50 hover:text-text-primary"
        }`}
      >
        EN
      </button>
    </div>
  );
}
