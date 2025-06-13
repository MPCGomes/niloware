import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";
import PortfolioSection from "@/sections/PortfolioSection";
import PricingSection from "@/sections/PricingSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FaqSection from "@/sections/FaqSection";
import CtaSection from "@/sections/CtaSection";
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
    images: { url: string; width?: number; height?: number }[];
  };
  alternateLocales: { hrefLang: string; href: string }[];
  jsonLd: unknown[];
}

type Messages = {
  homepage: { seo: Seo };
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/i18n/messages/${locale}.json`))
    .default as Messages;
  const seo = messages.homepage.seo;
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  const messages = (await import(`@/i18n/messages/${locale}.json`))
    .default as Messages;
  const jsonLd = messages.homepage.seo.jsonLd;
  return (
    <>
      <HeroSection />
      <FeaturesSection locale={locale} />
      <PortfolioSection locale={locale} portfolio={true} />
      <PricingSection />
      <TestimonialsSection locale={locale} />
      <FaqSection locale={locale} />
      <CtaSection locale={locale} />
      <Script
        id="homepage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(jsonLd)}
      </Script>
    </>
  );
}