"use client";

import { useId, useState, type FC } from "react";
import { ExpandMore } from "@mui/icons-material";
import { SmallGradientIcon } from "@/components/ui/GradientIcon";

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard: FC<FaqCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const uid = useId().replace(/:/g, "");
  const contentId = `faq-content-${uid}`;

  return (
    <div
      className={`group bg-[#000629] border border-[#000F3A] rounded-[12px] transition-all duration-300 ease-in-out ${
        isOpen
          ? "hover:bg-[#000F3B] border-[#00174B]"
          : "hover:bg-[#000A31] border-[#00174B]"
      }`}
    >
      {/* Question */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="w-full text-left border-none px-[24px] py-[24px] flex justify-between items-center cursor-pointer transition-colors duration-300 ease-in-out"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        {/* Question */}
        <span
          className={`text-[16px] leading-[24px] tracking-[0.009375em] font-medium ${
            isOpen
              ? "text-transparent bg-clip-text bg-gradient-primary"
              : "text-white/80 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary"
          }`}
        >
          {question}
        </span>

        {/* Arrow */}
        <span
          className={`transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <SmallGradientIcon icon={<ExpandMore />} />
        </span>
      </button>

      {/* Answer */}
      <div
        id={contentId}
        className={`overflow-hidden px-[24px] transition-[max-height,padding] duration-300 ease-in-out ${
          isOpen ? "max-h-[200px] pb-[24px]" : "max-h-0 pb-0"
        }`}
        aria-hidden={!isOpen}
      >
        <p className="text-[16px] leading-[24px] tracking-[0.03125em] font-normal text-white/80">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqCard;
