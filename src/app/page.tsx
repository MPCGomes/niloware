import TestimonialsSection from "@/containers/homePage/testimonialsSection/TestimonialsSection";
import styles from "./page.module.scss";
import PricingToggle from "@/components/PricingToggle/PricingToggle";
import HeroSection from "@/containers/homePage/heroSection/HeroSection";
import FeaturesSection from "@/containers/homePage/featuresSection/FeaturesSection";
import PortfolioSection from "@/containers/homePage/portfolioSection/PortfolioSection";
import ClientsSection from "@/containers/homePage/clientsSection/ClientsSection";
import PricingSection from "@/containers/homePage/pricingSection/PricingSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
    </div>
  );
}
