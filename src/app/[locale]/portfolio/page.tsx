import PortfolioSection from "@/sections/PortfolioSection";
import Script from "next/script";
import type { Metadata } from "next";
import { languages } from "@/i18n/settings";

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
  jsonLd: unknown[];
}

type Messages = {
  portfolio: { seo: Seo };
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/i18n/messages/${locale}.json`))
    .default as Messages;
  const seo = messages.portfolio.seo;
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
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`@/i18n/messages/${locale}.json`))
    .default as Messages;
  const jsonLd = messages.portfolio.seo.jsonLd;
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
