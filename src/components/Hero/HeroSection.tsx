import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-screen container mx-auto px-5 flex items-center">
      {/* Hero Image */}
      {/* <Image src={""} alt="error" fill className="object-cover opacity-40" /> */}
      {/* Text */}
      <div className="absolute z-1  flex flex-col gap-8 items-center lg:items-start">
        <div className="text-white text-center lg:text-left">
          <h2 className="text-lg font-medium">Web Design Agency</h2>
          <h1 className="text-[3.5rem] font-black">LOREM IPSUM</h1>
          <p className="text-lg font-medium lg:max-w-[600px]">
            Credibility sells. Turn first-time visitors into loyal clients with
            a site designed to impress and convert.
          </p>
        </div>
        Button
      </div>
    </section>
  );
};

export default HeroSection;
