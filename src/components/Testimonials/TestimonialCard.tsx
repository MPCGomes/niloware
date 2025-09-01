import type { FC } from "react";
import Image from "next/image";
import { Star } from "@mui/icons-material";

interface TestimonialCardProps {
  photo: string;
  name: string;
  role: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  photo,
  name,
  role,
  rating,
  testimonial,
}) => {
  return (
    <div className="w-full p-[16px] flex flex-col gap-6 bg-[#0072FF04] border border-[#0072FF08] rounded-2xl">
      {/* Stars */}
      <div className="flex gap-[4px] text-[var(--color-text-secondary)]">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            sx={{
              color:
                index < rating
                  ? "#FBBF24"
                  : "var(--tw-text-opacity,1) theme('colors.text-secondary')",
              width: "20px",
              height: "19px",
            }}
          />
        ))}
      </div>
      {/* Testimonial */}
      <p className="text-base text-[var(--color-text-secondary)] leading-[1.5]">
        {testimonial}
      </p>
      {/* Client */}
      <div className="flex items-center gap-[16px] w-full">
        <Image
          src={photo}
          alt={"error"}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-base font-medium text-[var(--color-text-primary)] leading-[1.5]">
            {name}
          </p>
          <p className="text-sm font-extralight text-[var(--color-text-secondary)] leading-[1.5]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
