import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import type { Locale } from "./settings";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = (await requestLocale) ?? routing.defaultLocale;
  const resolvedLocale: Locale = hasLocale(routing.locales, requestedLocale)
    ? (requestedLocale as Locale)
    : routing.defaultLocale;

  const messageNamespaces = [
    "common",
    "home",
    "pricing",
    "faq",
    "portfolio",
    "testimonials",
  ] as const;

  const namespaceEntries = await Promise.all(
    messageNamespaces.map(async (namespace) => {
      const messagesModule = await import(
        `./messages/${resolvedLocale}/${namespace}.json`
      );
      return [namespace, messagesModule.default] as const;
    })
  );

  const messagesByNamespace = Object.fromEntries(namespaceEntries);

  return { locale: resolvedLocale, messages: messagesByNamespace };
});
