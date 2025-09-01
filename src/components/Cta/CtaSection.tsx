"use client";

import type { FC } from "react";

interface CtaSectionProps {
  locale: string;
}

const CtaSection: FC<CtaSectionProps> = ({}) => {
  return (
    <section className="bg-[#000130] p-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-8 text-[var(--color-text-white)] text-base md:flex-row md:text-left md:justify-center lg:gap-16">
          <p>Your business deserves to grow—ready to make it happen?</p>
          Button
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
