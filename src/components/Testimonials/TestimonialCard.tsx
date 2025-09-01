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
    <div className="w-full p-[16px] flex flex-col gap-6 bg-[#000629] border border-[#000F3A] rounded-2xl">
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
      <p className="text-base text-white/80 leading-[1.5]">
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
          <p className="text-base font-medium text-white leading-[1.5]">
            {name}
          </p>
          <p className="text-sm font-extralight text-white/80 leading-[1.5]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
