"use client";

import { useState, type FC } from "react";
import clsx from "clsx";

interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void;
}

const PricingToggle: FC<PricingToggleProps> = ({ onToggle }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = (value: boolean) => {
    if (value !== isAnnual) {
      setIsAnnual(value);
      onToggle(value);
    }
  };

  const baseOption =
    "flex-1 text-center px-[24px] py-[8px] text-sm leading-[1.4] cursor-pointer flex items-center justify-center flex-wrap gap-[4px] min-h-[40px] transition-colors duration-300";

  return (
    <div className="inline-flex w-[240px] rounded-[24px] overflow-hidden">
      <div
        className={clsx(
          baseOption,
          !isAnnual
            ? "bg-primary-gradient text-text-light"
            : "bg-background-card text-text-secondary",
          "rounded-l-[24px]"
        )}
        onClick={() => handleToggle(false)}
      >
        Mensal
      </div>
      <div
        className={clsx(
          baseOption,
          isAnnual
            ? "bg-primary-gradient text-text-light"
            : "bg-background-card text-text-secondary",
          "rounded-r-[24px]"
        )}
        onClick={() => handleToggle(true)}
      >
        <span>Anual</span>
        <span
          className={clsx(
            "font-normal",
            isAnnual ? "text-text-light" : "text-primary"
          )}
        >
          -20%
        </span>
      </div>
    </div>
  );
};

export default PricingToggle;
