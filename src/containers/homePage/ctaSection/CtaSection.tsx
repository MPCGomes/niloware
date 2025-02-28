"use client";

import Button from "@/components/Button/Button";
import React from "react";
import styles from "./CtaSection.module.scss";

const CtaSection = () => {
  const whatsappLink =
    "https://wa.me/5512997591515?text=Olá, estou interessado nos seus serviços!";

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.content}>
          <p>Seu negócio merece crescer — Vamos fazer isso acontecer?</p>
          <Button
            text={<span className={styles.buttonText}>Peça um Orçamento</span>}
            onClick={() => window.open(whatsappLink, "_blank")}
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
