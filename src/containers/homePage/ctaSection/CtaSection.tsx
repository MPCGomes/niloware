"use client";

import Button from "@/components/Button/Button";
import React from "react";
import styles from "./CtaSection.module.scss";

const CtaSection = () => {
  const whatsappLink = `https://wa.me/5512974096393?text=Olá, estou interessado nos seus serviços!`;

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <p>Seu negócio merece crescer — Vamos fazer isso acontecer?</p>
        <Button
          text={<span className={styles.buttonText}>Peça um Orçamento</span>}
          onClick={() => window.open(whatsappLink, "_blank")}
        />
      </div>
    </section>
  );
};

export default CtaSection;
