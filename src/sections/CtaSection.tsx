"use client";

import type { FC } from "react";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";

interface CtaSectionProps {
  locale: string;
}

const CtaSection: FC<CtaSectionProps> = ({}) => {
  const t = useTranslations("homepage.cta");
  const whatsappLink = `https://wa.me/0123456789012?text=${encodeURIComponent(
    t("whatsappText")
  )}`;

  return (
    <section className="bg-gradient p-[30px]">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-[32px] text-[var(--color-text-white)] text-base tablet:flex-row tablet:text-left tablet:justify-center desktop:gap-[64px]">
          <p>{t("text")}</p>
          <Button
            text={<span className="text-base">{t("button")}</span>}
            onClick={() => window.open(whatsappLink, "_blank")}
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
