import Button from "@/components/Button/Button";
import React from "react";
import styles from './CtaSection.module.scss'

const CtaSection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className='container'>
        <p>Seu negócio merece crescer — Vamos fazer isso acontecer?</p>
        <Button text={"Peça um Orçamento"} color={""} borderColor={""} />
      </div>
    </section>
  );
};

export default CtaSection;
