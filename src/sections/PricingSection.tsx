"use client";

import type { FC } from "react";
import { useState } from "react";
import PricingCard from "@/components/PricingCard";
import PricingToggle from "@/components/PricingToggle";
import SectionHeading from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

interface FeatureOption {
  label: string;
  priceAdjustmentPercent?: number;
  price?: number;
}

interface CustomFeature {
  id:
    | "pages"
    | "design"
    | "seo"
    | "backup"
    | "support"
    | "ecommerce"
    | "integration"
    | "delivery";
  name: string;
  options: [FeatureOption, FeatureOption];
}

type Feature = string | CustomFeature;

interface Plan {
  name: string;
  description: string;
  planPrice: string; // e.g. "99.90 USD"
  hostPrice: string; // e.g. "4.90 USD"
  cta: string;
  features: Feature[];
}

interface PlansData {
  professional: Plan;
  basic: Plan;
  custom: Plan;
}

const PricingSection: FC = () => {
  const t = useTranslations("homepage.pricing");
  const heading = t("heading");
  const subheading = t("subheading");
  const plansData = t.raw("plans") as PlansData;
  const [isAnnual, setIsAnnual] = useState(false);

  const planOrder: { key: keyof PlansData; variant: "default" | "popular" }[] =
    [
      { key: "professional", variant: "default" },
      { key: "basic", variant: "popular" },
      { key: "custom", variant: "default" },
    ];

  return (
    <section className="section container">
      <SectionHeading subheading={subheading} heading={heading} />

      <div className="flex justify-center">
        <PricingToggle onToggle={setIsAnnual} />
      </div>

      <div className="flex flex-col items-start gap-[32px] desktop:flex-row">
        {planOrder.map(({ key, variant }) => {
          const plan = plansData[key];
          return (
            <PricingCard
              key={key}
              name={plan.name}
              description={plan.description}
              price={plan.planPrice} // unchanged on annual toggle
              hostPrice={plan.hostPrice} // raw, no suffix
              features={plan.features}
              variant={variant}
              isCustom={key === "custom"}
              isAnnual={isAnnual} // drives suffix choice
              cta={plan.cta}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;
