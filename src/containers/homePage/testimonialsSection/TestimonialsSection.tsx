"use client";

import { FC, useEffect, useState } from "react";
import axios from "axios";
import TestimonialsCarousel from "../../../components/TestimonialsCarousel/TestimonialsCarousel";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

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
        const response = await axios.get("/data/testimonials.json");
        setTestimonials(response.data);
      } catch (error) {
        console.error("Failed to load testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="container section">
      <SectionHeading
        subheading="Confira como ajudamos negócios a crescerem"
        heading="O Que Nossos Clientes Dizem?"
      />
      {testimonials.length > 0 && (
        <TestimonialsCarousel testimonials={testimonials} />
      )}
    </section>
  );
};

export default TestimonialsSection;
