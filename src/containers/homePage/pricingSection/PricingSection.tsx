import PricingCard from "@/components/PricingCard/PricingCard";
import PricingToggle from "@/components/PricingToggle/PricingToggle";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import React from "react";
import styles from "./PricingSection.module.scss";

const PricingSection = () => {
  return (
    <section className="section container">
      <SectionHeading
        subheading={"Confira nossos planos"}
        heading={"Escolha o Melhor Serviço para Você"}
      />
      <div className={styles.pricingToggle}>
        <PricingToggle />
      </div>
      <div className={styles.pricingContainer}>
        <PricingCard
          plan={"Profissional"}
          mostPopular={""}
          price={"R$ 989,90"}
          monthlyPrice={"+ R$ 29,90 / Mês"}
          feature={"1-10 Páginas"}
          backgroundGradient={""}
          textColor={""}
          btnColor={"#122E50"}
          btnBorder={"#122E5010"}
          listColor={"#666666"}
          checkColor={"#0072FF"}
        />
        <PricingCard
          plan={"Básico"}
          mostPopular={"Mais Popular"}
          price={"R$ 589,90"}
          monthlyPrice={"+ R$ 29,90 / Mês"}
          feature={"1-10 Páginas"}
          backgroundGradient={"linear-gradient(90deg, #0072FF, #00C6FF)"}
          textColor={"#fff"}
          btnColor={""}
          btnBorder={""}
          listColor={""}
          checkColor={""}
        />
        <PricingCard
          plan={"Lorem"}
          mostPopular={""}
          price={"Lorem"}
          monthlyPrice={"Lorem"}
          feature={"Lorem"}
          backgroundGradient={""}
          textColor={""}
          btnColor={"#122E50"}
          btnBorder={"#122E5010"}
          listColor={"#666666"}
          checkColor={"#0072FF"}
        />
      </div>
    </section>
  );
};

export default PricingSection;
