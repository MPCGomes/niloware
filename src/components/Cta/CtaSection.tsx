"use client";

import type { FC } from "react";
import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { CTAOutlineButton } from "@/components/ui/CTAButton";

interface CtaSectionProps {
  locale: string;
}

const CtaSection: FC<CtaSectionProps> = () => {
  const tHome = useTranslations("home.cta");
  const text = tHome("text");
  const ctaLabel = tHome("button");

  return (
    <section className="bg-[#000130] p-[30px]">
      <Container>
        <div className="flex flex-col items-center text-center gap-8 text-base md:flex-row md:text-left md:justify-center lg:gap-16">
          <p className="text-2xl">{text}</p>
          <CTAOutlineButton label={ctaLabel} />
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
