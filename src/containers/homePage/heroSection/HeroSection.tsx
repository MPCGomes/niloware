import Button from "@/components/Button/Button";
import React from "react";
import styles from "./HeroSection.module.scss";
import ClientsSection from "../clientsSection/ClientsSection";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className="container section">
        <h1>Conquiste mais clientes com um site profissional</h1>
        <h3>
          Um negócio confiável consegue mais vendas. Criamos sites que fazem as
          pessoas escolherem você.
        </h3>
        <Button text="Peça um Orçamento" />
      </div>
      <ClientsSection />
    </section>
  );
};

export default HeroSection;
