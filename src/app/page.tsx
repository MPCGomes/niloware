import TestimonialsSection from "@/containers/homePage/testimonialsSection/TestimonialsSection";
import styles from "./page.module.scss";
import PricingToggle from "@/components/PricingToggle/PricingToggle";
import HeroSection from "@/containers/homePage/heroSection/HeroSection";
import FeaturesSection from "@/containers/homePage/featuresSection/FeaturesSection";
import PortfolioSection from "@/containers/homePage/portfolioSection/PortfolioSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <PricingToggle />
      <TestimonialsSection />
    </div>
  );
}
