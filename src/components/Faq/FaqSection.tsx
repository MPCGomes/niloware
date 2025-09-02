"use client";

import type { FC } from "react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FaqCard from "./FaqCard";

type FaqItem = { question: string; answer: string };

interface FaqSectionProps {
  locale: string;
}

const FaqSection: FC<FaqSectionProps> = () => {
  const t = useTranslations("faq");
  const subheading = t("subheading");
  const heading = t("heading");
  const items = t.raw("items") as FaqItem[];

  return (
    <section>
      <Container>
        <SectionHeading subheading={subheading} heading={heading} />
        <div className="grid grid-cols-1 w-full gap-[24px] items-start gap-x-[30px] lg:grid-cols-2">
          {items.map((faq, index) => (
            <FaqCard
              key={`${faq.question}-${index}`}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
