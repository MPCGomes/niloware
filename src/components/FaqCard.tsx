"use client";

import { useState, type FC } from "react";
import { ExpandMore } from "@mui/icons-material";

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard: FC<FaqCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-[12px] border border-transparent transition-all duration-300 ease-in-out ${
        isOpen
          ? "bg-[rgba(0,114,255,0.1)]"
          : "hover:bg-[rgba(0,114,255,0.05)] bg-background-card"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-transparent text-left border-none px-[24px] py-[24px] text-base leading-[1.5] font-semibold flex justify-between items-center cursor-pointer transition-colors duration-300 ease-in-out ${
          isOpen
            ? "text-[var(--color-primary)]"
            : "text-[var(--color-text-primary)]"
        }`}
        aria-expanded={isOpen}
        aria-controls="faq-content"
      >
        <span>{question}</span>
        <ExpandMore
          className={`transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180 text-primary" : "text-text-primary"
          }`}
        />
      </button>

      <div
        id="faq-content"
        className={`overflow-hidden px-[24px] text-base leading-[1.5] text-text-primary transition-[max-height,padding] duration-300 ease-in-out ${
          isOpen ? "max-h-[200px] pb-[24px]" : "max-h-0 pb-0"
        }`}
        aria-hidden={!isOpen}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;
