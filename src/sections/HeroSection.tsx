"use client";

import type { FC } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";

interface HeroSectionProps {
  locale: string;
}

const HeroSection: FC<HeroSectionProps> = ({ locale }) => {
  const t = useTranslations("homepage.hero");
  const whatsappLink = useWhatsappLink("homepage.hero", "whatsappText");

  return (
    <section className="bg-primary-gradient">
      <div className="container flex flex-col items-center px-[20px] md:px-[16px] py-20 lg:py-30 lg:flex-row-reverse lg:items-center lg:gap-20">
        {/* Left Side (Image) */}
        <div className="lg:flex-1">
          <div className="relative aspect-[1/1] w-[200px] md:w-[300px] lg:w-[550px]">
            <Image
              src="/hero-image.svg"
              alt="hero-image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side (Text + Buttons) */}
        <div className="flex flex-col gap-[56px] items-center text-center lg:items-start lg:text-left lg:flex-1">
          {/* Text */}
          <div className="flex flex-col gap-[18px]">
            <h1 className="text-[2rem] desktop:text-[2.875rem] font-extrabold text-white">
              {t("heading")}
            </h1>
            <h2 className="text-[var(--color-text-white)] mobile:text-base tablet:text-[1.125rem]">
              {t("subheading")}
            </h2>
          </div>
          {/* Buttons */}
          <div className="flex gap-5">
            <Button
              variant="full"
              text={<span className="text-base">{t("cta")}</span>}
              onClick={() => window.open(whatsappLink, "_blank")}
            />
            <Button
              text={<span className="text-base">{t("cta")}</span>}
              onClick={() => window.open(whatsappLink, "_blank")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
