import TestimonialsSection from "@/containers/homePage/testimonialsSection/TestimonialsSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <TestimonialsSection />
    </div>
  );
}
