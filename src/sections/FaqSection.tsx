"use client";

import type { FC } from "react";
import FaqCard from "@/components/FaqCard";
import SectionHeading from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

interface FaqSectionProps {
  locale: string;
}

const FaqSection: FC<FaqSectionProps> = ({  }) => {
  const t = useTranslations("homepage.faq");
  const heading = t("heading");
  const subheading = t("subheading");

  const faqs = t.raw("faqs") as {
    question: string;
    answer: string;
  }[];

  return (
    <section className="container section">
      <SectionHeading subheading={subheading} heading={heading} />
      <div className="grid grid-cols-1 w-full gap-[24px] items-start mobile:grid-cols-2 mobile:gap-x-[30px]">
        {faqs.map((faq) => (
          <FaqCard
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
