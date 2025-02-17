"use client";

import React from "react";
import FaqCard from "@/components/FaqCard/FaqCard";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./FaqSection.module.scss";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Curabitur vehicula justo nec nisi?",
    answer:
      "Curabitur vehicula justo nec nisi tincidunt, at scelerisque libero molestie.",
  },
  {
    question: "Phasellus auctor arcu a magna?",
    answer:
      "Phasellus auctor arcu a magna fermentum, a suscipit quam accumsan.",
  },
  {
    question: "Suspendisse potenti?",
    answer: "Suspendisse potenti. Nulla facilisi.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <section className="container section">
      <SectionHeading
        subheading="Respostas simples para ajudar você a fazer a escolha certa"
        heading="Perguntas Frequentes"
      />
      <div className={styles.faqGrid}>
        {faqs.map((faq, index) => (
          <FaqCard key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
