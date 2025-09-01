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
      className={`bg-[#000629] border border-[#000F3A] rounded-[12px] transition-all duration-300 ease-in-out ${
        isOpen
          ? "hover:bg-[#000F3B] border-[#00174B]"
          : "hover:bg-[#000A31] border-[#00174B]"
      }`}
    >
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left border-none px-[24px] py-[24px] text-base leading-[1.5] font-medium flex justify-between items-center cursor-pointer transition-colors duration-300 ease-in-out ${
          isOpen
            ? "text-[var(--color-primary)]"
            : "text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
        }`}
        aria-expanded={isOpen}
        aria-controls="faq-content"
      >
        <span>{question}</span>
        <ExpandMore
          className={`transition-transform duration-300 ease-in-out ${
            isOpen
              ? "rotate-180 text-primary"
              : "text-[var(--color-text-primary)]"
          }`}
        />
      </button>

      {/* Answer */}
      <div
        id="faq-content"
        className={`overflow-hidden px-[24px] text-base leading-[1.5] text-[var(--color-text-primary)] transition-[max-height,padding] duration-300 ease-in-out ${
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
