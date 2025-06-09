"use client";

import { type FC, type ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
  color: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color,
}) => {
  return (
    <div className="p-[32px_24px] rounded-[20px] bg-[var(--color-primary-ghost)] flex flex-col w-full h-full transition-[background,transform] duration-300 ease-in-out hover:bg-[var(--color-primary-soft)] hover:scale-[1.02]">
      <div className="w-12 h-12" style={{ color }}>
        {icon}
      </div>
      <div className="flex flex-col gap-[10px] mt-[24px]">
        <p className="text-[1.125rem] font-semibold">{title}</p>
        <p className="text-base leading-[1.5] text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
