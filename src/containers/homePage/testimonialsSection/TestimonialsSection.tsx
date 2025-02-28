"use client";

import { FC, useEffect, useState } from "react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel/TestimonialsCarousel";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

interface Testimonial {
  photo: string;
  name: string;
  title: string;
  rating: number;
  testimonial: string;
}

const TestimonialsSection: FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[] | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/content/testimonials.json");
        const data = await response.json();
        if (data.length) setTestimonials(data);
      } catch {
        console.error("Erro ao carregar depoimentos");
      }
    };

    fetchTestimonials();
  }, []);

  if (!testimonials) return null;

  return (
    <section className="container section">
      <SectionHeading
        subheading="Confira o que nossos clientes estão dizendo"
        heading="Depoimentos"
      />
      {testimonials.length > 0 && (
        <TestimonialsCarousel testimonials={testimonials} />
      )}
    </section>
  );
};

export default TestimonialsSection;
