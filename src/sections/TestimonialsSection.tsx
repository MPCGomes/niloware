"use client";

import { useRef, type FC } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import { useTranslations } from "next-intl";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1440 }, items: 1 },
    desktop: { breakpoint: { max: 1440, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const carouselRef = useRef<InstanceType<typeof Carousel> | null>(null);

  return (
    <section className="container section">
      <div className="grid gap-[56px] desktop:grid-cols-[1fr_2fr] desktop:items-center">
        <div className="flex flex-col gap-10">
          <SectionHeading
            variant="columnStart"
            subheading={subheading}
            heading={heading}
          />
          <div className="flex gap-5 justify-center desktop:justify-start">
            <button
              onClick={() => carouselRef.current?.previous(1)}
              className="bg-[var(--color-primary-ghost)] text-[var(--color-primary)] rounded-full p-2 transition hover:bg-[var(--color-primary-soft)] cursor-pointer"
            >
              <NavigateBeforeIcon />
            </button>
            <button
              onClick={() => carouselRef.current?.next(1)}
              className="bg-[var(--color-primary-ghost)] text-[var(--color-primary)] rounded-full p-2 transition hover:bg-[var(--color-primary-soft)] cursor-pointer"
            >
              <NavigateNextIcon />
            </button>
          </div>
        </div>
        <Carousel
          ref={carouselRef}
          swipeable
          draggable
          ssr
          infinite
          renderDotsOutside
          autoPlay={false}
          arrows={false}
          dotListClass="custom-dot-list-style"
          responsive={responsive}
        >
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
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
