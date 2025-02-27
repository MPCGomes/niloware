import TestimonialsSection from "@/containers/homePage/testimonialsSection/TestimonialsSection";
import HeroSection from "@/containers/homePage/heroSection/HeroSection";
import FeaturesSection from "@/containers/homePage/featuresSection/FeaturesSection";
import PortfolioSection from "@/containers/common/portfolioSection/PortfolioSection";
import PricingSection from "@/containers/homePage/pricingSection/PricingSection";
import FaqSection from "@/containers/homePage/faqSection/FaqSection";
import CtaSection from "@/containers/homePage/ctaSection/CtaSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection limit={4} />
      <PricingSection />
      <FaqSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
