"use client";

import type { FC } from "react";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";

interface HeroSectionProps {
  locale: string;
}

const HeroSection: FC<HeroSectionProps> = ({ locale }) => {
  const t = useTranslations("homepage.hero");
  const whatsappLink = useWhatsappLink("homepage.hero", "whatsappText");

  return (
    <section className="pt-[30px] bg-primary-gradient min-h-[calc(100vh-80px)] flex flex-col justify-between">
      <div className="container section flex flex-col items-center">
        <h1 className="text-hero text-white text-center mobile:text-2xl">
          {t("heading")}
        </h1>
        <h2 className="text-subhero text-white/80 text-center font-normal w-[70%] mobile:text-base desktop:w-[60%]">
          {t("subheading")}
        </h2>
        <Button
          text={<span className="text-base">{t("cta")}</span>}
          onClick={() => window.open(whatsappLink, "_blank")}
        />
      </div>
    </section>
  );
};

export default HeroSection;
