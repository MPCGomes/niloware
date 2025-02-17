import TestimonialsSection from "@/containers/homePage/testimonialsSection/TestimonialsSection";
import HeroSection from "@/containers/homePage/heroSection/HeroSection";
import FeaturesSection from "@/containers/homePage/featuresSection/FeaturesSection";
import PortfolioSection from "@/containers/common/portfolioSection/PortfolioSection";
import ClientsSection from "@/containers/homePage/clientsSection/ClientsSection";
import PricingSection from "@/containers/homePage/pricingSection/PricingSection";
import FaqSection from "@/containers/homePage/faqSection/FaqSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <PortfolioSection limit={4} />
      <PricingSection />
      <FaqSection />
      <TestimonialsSection />
    </div>
  );
}
