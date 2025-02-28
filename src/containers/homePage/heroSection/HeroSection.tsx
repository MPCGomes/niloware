"use client";

import Button from "@/components/Button/Button";
import React from "react";
import styles from "./HeroSection.module.scss";
import ClientsSection from "../clientsSection/ClientsSection";

const HeroSection = () => {
  const whatsappLink =
    "https://wa.me/5512997591515?text=Olá, estou interessado nos seus serviços!";

  return (
    <section className={styles.hero}>
      <div className="container section">
        <h1 className={styles.heading}>
          Conquiste mais clientes com um site profissional
        </h1>
        <h2 className={styles.subheading}>
          Um negócio confiável consegue mais vendas. Criamos sites que fazem as
          pessoas escolherem você.
        </h2>
        <Button
          text={<span className={styles.buttonText}>Peça um Orçamento</span>}
          onClick={() => window.open(whatsappLink, "_blank")}
        />
      </div>
      <ClientsSection />
    </section>
  );
};

export default HeroSection;
