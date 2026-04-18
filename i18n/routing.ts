import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  pathnames: {
    "/": "/",
    "/newsletter": "/newsletter",
    "/newsletter/[slug]": "/newsletter/[slug]",
    "/sobre-mi": {
      es: "/sobre-mi",
      en: "/about",
    },
    "/contacto": {
      es: "/contacto",
      en: "/contact",
    },
  },
});
