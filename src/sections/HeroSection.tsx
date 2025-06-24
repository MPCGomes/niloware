"use client";

import type { FC } from "react";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";

const HeroSection: FC = () => {
  const t = useTranslations("homepage.hero");
  const whatsappLink = useWhatsappLink("homepage.hero", "whatsappText");

  return (
    <section className="bg-primary-gradient bg-hero h-screen">
      <div className="container flex flex-col gap-16 items-center justify-center h-full px-[20px] md:px-[16px] py-20 lg:py-30 lg:items-start ">
        {/* Text */}
        <div className="flex flex-col gap-[18px] text-[var(--color-text-primary)] text-center lg:text-left">
          <h1 className="text-[2rem] desktop:text-[2.875rem] font-extrabold lg:w-[800px]">
            {t("heading")}
          </h1>
          <h2 className="mobile:text-base tablet:text-[1.125rem] lg:w-[600px]">
            {t("subheading")}
          </h2>
        </div>
        {/* Buttons */}
        <div className="flex gap-5">
          <Button
            variant="full-dark"
            text={<span className="text-base">{t("cta")}</span>}
            onClick={() => window.open(whatsappLink, "_blank")}
          />
          <Button
            variant="outline-dark"
            text={<span className="text-base">{t("cta")}</span>}
            onClick={() => window.open(whatsappLink, "_blank")}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
