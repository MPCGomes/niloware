"use client";

import React, { ReactNode } from "react";
import Image from "next/image";

type Properties = {
  imageSrc: string;
  numProject: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export default function PortfolioCard({
  imageSrc,
  numProject,
  title,
  description,
}: Properties) {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center px-6 border border-[#0072FF08] overflow-hidden rounded-lg">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt="error"
        fill
        className="object-cover blur-[1px]"
      />

      {/* Tint */}
      <div className="absolute inset-0 bg-[#00012080] z-10" />

      {/* Thumbnail */}
      <div className="z-20 w-[345px] h-[253px] relative">
        <Image src={imageSrc} alt="error" fill className="object-cover" />
      </div>

      {/* Project Info */}
      <div className="flex items-center gap-2 absolute bottom-2 left-6 z-20">
        <p
          className="text-[4rem] font-medium"
          style={{
            backgroundImage: "linear-gradient(to right, #0072FF, #00c6ff)",
            WebkitBackgroundClip: "text",
            MozBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          {numProject}
        </p>
        <div>
          <p className="text-xl font-medium text-white">{title}</p>
          <p className="text-base font-medium text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
}
