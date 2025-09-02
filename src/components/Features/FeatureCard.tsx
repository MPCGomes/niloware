"use client";

import { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="w-auto h-auto px-6 py-8 rounded-[8px] bg-primary-4 border border-primary-8 flex flex-col gap-6">
      <div className="w-12 h-12 flex items-center justify-center">{icon}</div>
      <div className="flex flex-col gap-2.5">
        <p className="text-[22px] leading-[28px] font-medium text-white">
          {title}
        </p>
        <p className="text-[16px] leading-[24px] font-normal text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
}
