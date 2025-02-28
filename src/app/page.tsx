export const metadata = {
  title: "Criação de Sites Profissionais | Niloware",
  description:
    "A Niloware cria sites profissionais para empresas. Peça um orçamento agora!",
  openGraph: {
    url: "https://www.niloware.com.br/",
    title: "Criação de Sites Profissionais | Niloware",
    description:
      "A Niloware cria sites profissionais para empresas. Peça um orçamento agora!",
    images: [
      {
        url: "https://www.niloware.com.br/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

import TestimonialsSection from "@/containers/homePage/testimonialsSection/TestimonialsSection";
import HeroSection from "@/containers/homePage/heroSection/HeroSection";
import FeaturesSection from "@/containers/homePage/featuresSection/FeaturesSection";
import PortfolioSection from "@/containers/common/portfolioSection/PortfolioSection";
import PricingSection from "@/containers/homePage/pricingSection/PricingSection";
import FaqSection from "@/containers/homePage/faqSection/FaqSection";
import CtaSection from "@/containers/homePage/ctaSection/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection limit={4} />
      <PricingSection />
      <FaqSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
