"use client";

import type { FC } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

interface TestimonialSectionProps {
  locale: string;
}

const TestimonialSection: FC<TestimonialSectionProps> = ({}) => {
  const t = useTranslations("homepage.testimonials");
  const heading = t("heading");
  const subheading = t("subheading");

  const items = t.raw("items") as {
    photo: string;
    name: string;
    role: string;
    rating: number;
    testimonial: string;
  }[];

  return (
    <section className="container section">
      <div className=" grid desktop:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-10">
          <SectionHeading variant="columnStart" subheading={subheading} heading={heading} />
          buttons
        </div>
        <div className="grid grid-cols-1">
          {items.map((item, idx) => (
            <TestimonialCard
              key={idx}
              photo={item.photo}
              name={item.name}
              role={item.role}
              rating={item.rating}
              testimonial={item.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
