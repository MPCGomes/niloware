"use client";

import { useRef, type FC } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "./TestimonialCard";

const items = [
  {
    photo: "",
    name: "Nome Sobrenome",
    role: "Cargo",
    rating: 5,
    testimonial: "Depoimento...",
  },
  {
    photo: "",
    name: "Nome Sobrenome",
    role: "Cargo",
    rating: 4,
    testimonial: "Depoimento...",
  },
  {
    photo: "",
    name: "Nome Sobrenome",
    role: "Cargo",
    rating: 5,
    testimonial: "Depoimento...",
  },
];

interface TestimonialSectionProps {
  locale: string;
}

const TestimonialSection: FC<TestimonialSectionProps> = ({}) => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1440 }, items: 1 },
    desktop: { breakpoint: { max: 1440, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const carouselRef = useRef<InstanceType<typeof Carousel> | null>(null);

  return (
    <section className="container mx-auto px-5 flex flex-col gap-[56px] py-[56px]">
      <div className="grid gap-[56px] lg:grid-cols-[1fr_2fr] lg:items-center">
        <div className="flex flex-col gap-10">
          <SectionHeading subheading={"subheading"} heading={"heading"} />
          <div className="flex gap-5 justify-center lg:justify-start">
            <button
              onClick={() => carouselRef.current?.previous(1)}
              className="bg-[#000629] rounded-full p-2 transition cursor-pointer border border-[#000F3A] hover:bg-[#000A31] hover:border-[#00174B]"
            >
              <NavigateBeforeIcon />
            </button>
            <button
              onClick={() => carouselRef.current?.next(1)}
              className="bg-[#000629] rounded-full p-2 transition cursor-pointer border border-[#000F3A] hover:bg-[#000A31] hover:border-[#00174B]"
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
