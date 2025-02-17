"use client";

import React, { useState } from "react";
import PricingCard from "@/components/PricingCard/PricingCard";
import PricingToggle from "@/components/PricingToggle/PricingToggle";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./PricingSection.module.scss";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="section container">
      <SectionHeading
        subheading="Confira nossos planos"
        heading="Escolha o Melhor Serviço para Você"
      />

      <div className={styles.pricingToggle}>
        <PricingToggle onToggle={setIsAnnual} />
      </div>

      <div className={styles.pricingContainer}>
        <PricingCard
          plan="Profissional"
          mostPopular=""
          price="R$ 989,90"
          monthlyPrice={isAnnual ? "+ R$ 287,04 / Ano" : "+ R$ 29,90 / Mês"}
          features={[
            "1-10 Páginas",
            "Design Customizado",
            "Responsivo",
            "SEO Avançado",
            "SSL",
            "Anti-DDoS",
            "LGPD",
            "Backup Diário",
            "Suporte Prioritário",
          ]}
          backgroundGradient=""
          textColor=""
          btnColor="#122E50"
          btnBorder="#122E5010"
          listColor="#666666"
          checkColor="#0072FF"
        />

        <PricingCard
          plan="Básico"
          mostPopular="Mais Popular"
          price="R$ 589,90"
          monthlyPrice={isAnnual ? "+ R$ 287,04 / Ano" : "+ R$ 29,90 / Mês"}
          features={[
            "1-5 Páginas",
            "Design Pré-Fabricado",
            "Responsivo",
            "SEO Básico",
            "SSL",
            "Anti-DDoS",
            "Backup Semanal",
          ]}
          backgroundGradient="linear-gradient(90deg, #0072FF, #00C6FF)"
          textColor="#fff"
          btnColor=""
          btnBorder=""
          listColor=""
          checkColor=""
        />

        <PricingCard
          plan="Personalizado"
          mostPopular=""
          price="À COMBINAR"
          monthlyPrice={isAnnual ? "+ R$ 287,04 / Ano" : "+ R$ 29,90 / Mês"}
          features={[
            "Páginas Ilimitadas",
            "Design Exclusivo",
            "Responsivo",
            "SEO Avançado",
            "SSL",
            "Anti-DDoS",
            "LGPD",
            "Backup Personalizado",
            "Suporte Especializado",
          ]}
          backgroundGradient=""
          textColor=""
          btnColor="#122E50"
          btnBorder="#122E5010"
          listColor="#666666"
          checkColor="#0072FF"
        />
      </div>
    </section>
  );
};

export default PricingSection;
