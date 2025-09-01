import CtaSection from "@/components/Cta/CtaSection";
import FaqSection from "@/components/Faq/FaqSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
import HeroSection from "@/components/Hero/HeroSection";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
import Header from "@/components/ui/Header";
import { languages } from "@/i18n/settings";

export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
