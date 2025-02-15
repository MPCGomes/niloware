import styles from "./page.module.scss";
import PricingToggle from "@/components/PricingToggle/PricingToggle";

export default function Home() {
  return (
    <div className={styles.page}>
      <PricingToggle />
      <TestimonialsSection />
    </div>
  );
}
