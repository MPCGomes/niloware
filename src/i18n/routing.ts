import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en-us", "es-es", "pt-br"],
  defaultLocale: "pt-br",
});
