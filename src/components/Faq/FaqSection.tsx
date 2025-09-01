"use client";

import type { FC } from "react";
import FaqCard from "./FaqCard";
import SectionHeading from "../ui/SectionHeading";

const faqs = [
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
  {
    question: "Pergunta",
    answer: "Resposta...",
  },
];

interface FaqSectionProps {
  locale: string;
}

const FaqSection: FC<FaqSectionProps> = ({}) => {
  return (
    <section className="container mx-auto px-5 flex flex-col gap-[56px] py-[56px]">
      <SectionHeading subheading={"subheading"} heading={"heading"} />
      <div className="grid grid-cols-1 w-full gap-[24px] items-start gap-x-[30px] lg:grid-cols-2">
        {faqs.map((faq, index) => (
          <FaqCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
