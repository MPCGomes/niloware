"use client";

import type { FC } from "react";
import Carousel from "react-multi-carousel";
import TestimonialCard from "./TestimonialCard";
import "react-multi-carousel/lib/styles.css";

interface Testimonial {
  photo: string;
  name: string;
  role: string;
  rating: number;
  testimonial: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestimonialsCarousel: FC<TestimonialsCarouselProps> = ({
  testimonials,
}) => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      showDots={false}
      arrows={false}
      centerMode={false}
    >
      {testimonials.map((testimonial, index) => (
        <div key={index} className="px-2">
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialsCarousel;
