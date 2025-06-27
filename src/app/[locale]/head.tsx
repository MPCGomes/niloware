"use client";

import { usePathname } from "next/navigation";
import { Locale } from "@/i18n/settings";

export default function Head({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const path = usePathname() || "/";
  const origin = "https://www.niloware.com";

  const hrefs = {
    "pt-br": `${origin}/pt-br${path}`,
    "en-us": `${origin}/en-us${path}`,
    "es-es": `${origin}/es-es${path}`,
  };

  return (
    <>
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${origin}/pt-br${path}`}
      />

      <link rel="alternate" hrefLang="pt-br" href={hrefs["pt-br"]} />
      <link rel="alternate" hrefLang="en-us" href={hrefs["en-us"]} />
      <link rel="alternate" hrefLang="es-es" href={hrefs["es-es"]} />

      <meta httpEquiv="Content-Language" content={locale} />
    </>
  );
}
