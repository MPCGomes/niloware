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
      <SectionHeading subheading={subheading} heading={heading} />
      <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-3 gap-[24px]">
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
    </section>
  );
};

export default TestimonialSection;
