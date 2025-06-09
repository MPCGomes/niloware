import PortfolioSection from "@/sections/PortfolioSection";
import { getMessages } from "next-intl/server";
import { languages } from "@/i18n/settings";
import Script from "next/script";
import type { Metadata } from "next";
import type { AbstractIntlMessages } from "next-intl";

interface Seo {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    url: string;
    title: string;
    description: string;
    images: { url: string; width: number; height: number }[];
  };
  alternateLocales: { hrefLang: string; href: string }[];
  jsonLd: any[];
}

export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const messages = (await getMessages({ locale })) as AbstractIntlMessages;
  const seo = (messages.portfolio as any).seo as Seo;

  const languagesMap = Object.fromEntries(
    seo.alternateLocales.map(({ hrefLang, href }) => [hrefLang, href])
  );

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
      languages: languagesMap,
    },
    openGraph: {
      url: seo.openGraph.url,
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      images: seo.openGraph.images,
    },
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const messages = (await getMessages({ locale })) as AbstractIntlMessages;
  const seo = (messages.portfolio as any).seo as Seo;
  const jsonLd = seo.jsonLd;

  return (
    <>
      <PortfolioSection locale={locale} portfolio={false} />
      <Script
        id="portfolio-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script>
    </>
  );
}
