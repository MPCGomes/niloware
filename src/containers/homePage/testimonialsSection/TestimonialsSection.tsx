"use client";

import { FC, useEffect, useState } from "react";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import styles from "./TestimonialsSection.module.scss";

interface Testimonial {
  photo: string;
  name: string;
  title: string;
  rating: number;
  testimonial: string;
}

const TestimonialsSection: FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/data/testimonials.json");
        const data = await response.json();
        setTestimonials(data.slice(0, 5));
      } catch (error) {
        console.error("Failed to load testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
