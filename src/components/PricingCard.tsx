"use client";

import type { FC } from "react";
import { useState } from "react";
import clsx from "clsx";
import Button from "./Button";
import { Check as CheckIcon } from "@mui/icons-material";
import SwitchOption from "./SwitchOption";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";

interface FeatureOption {
  label: string;
  priceAdjustmentPercent?: number;
  price?: number;
}

interface CustomFeature {
  name: string;
  options: [FeatureOption, FeatureOption];
}

type Feature = string | CustomFeature;

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  hostPrice?: string;
  features: Feature[];
  variant?: "default" | "popular";
  isCustom?: boolean;
  cta: string;
}

const PricingCard: FC<PricingCardProps> = ({
  name,
  description,
  price: priceProp,
  hostPrice,
  features,
  variant = "default",
  isCustom = false,
  cta,
}) => {
  const [selections, setSelections] = useState<Record<string, 0 | 1>>(() =>
    features.reduce((acc, f) => {
      if (typeof f !== "string") acc[f.name] = 0;
      return acc;
    }, {} as Record<string, 0 | 1>)
  );

  const whatsappLink = useWhatsappLink("homepage.pricing", "whatsappMessage", {
    planName: name,
  });

  const parsePrice = (s: string) => {
    const [num, ...curr] = s.split(" ");
    return { value: parseFloat(num), currency: curr.join(" ") };
  };

  const computeCustom = () => {
    const pagesFeature = features.find(
      (f): f is CustomFeature => typeof f !== "string" && f.name === "Pages"
    )!;
    const pageIdx = selections["Pages"];
    const basePlanPrice = pagesFeature.options[pageIdx].price!;

    let adjustedPlanPrice = basePlanPrice;

    features.forEach((f) => {
      if (
        typeof f === "object" &&
        ["SEO", "Backup", "Support"].includes(f.name)
      ) {
        const sel = selections[f.name];

        if (pageIdx === 0) {
          if (sel === 0) {
          } else if (sel === 1) {
            adjustedPlanPrice *= 1.05;
          }
        } else if (pageIdx === 1) {
          if (sel === 0) {
            adjustedPlanPrice *= 0.95;
          } else if (sel === 1) {
          }
        }
      }
    });

    let multiplier = 1;
    features.forEach((f) => {
      if (
        typeof f === "object" &&
        f.name !== "Pages" &&
        !["SEO", "Backup", "Support"].includes(f.name)
      ) {
        const sel = selections[f.name];
        const opt = f.options[sel];
        const pct = opt.priceAdjustmentPercent ?? 0;

        if (
          ["Design", "E-Commerce", "Integration", "Delivery"].includes(f.name)
        ) {
          multiplier *= 1 + pct / 100;
        }
      }
    });

    const finalPrice = adjustedPlanPrice * multiplier;
    return `${finalPrice.toFixed(2)} USD`;
  };

  const computeCustomHostPrice = () => {
    if (!hostPrice) return undefined;

    const designFeature = features.find(
      (f): f is CustomFeature => typeof f !== "string" && f.name === "Design"
    );

    if (designFeature && selections["Design"] === 1) {
      const { value, currency } = parsePrice(hostPrice);
      return `${(value * 2).toFixed(2)} ${currency}`;
    }

    return hostPrice;
  };

  const displayPrice = isCustom ? computeCustom() : priceProp;
  const displayHostPrice = isCustom ? computeCustomHostPrice() : hostPrice;

  return (
    <div
      className={clsx(
        "w-full p-[24px] rounded-[8px] flex flex-col gap-[24px] transition-all",
        variant === "popular"
          ? "bg-primary-gradient text-white"
          : "bg-[var(--color-primary-ghost)] text-[var(--color-text-primary)]"
      )}
    >
      <div className="flex justify-between items-center gap-[8px]">
        <p
          className={clsx(
            "text-title-medium",
            variant === "popular"
              ? "text-white"
              : "text-[var(--color-text-primary)]"
          )}
        >
          {name}
        </p>
        {variant === "popular" && (
          <p className="text-body-medium px-[12px] py-[4px] border-[2px] border-[hsla(0,0%,100%,0.5)] rounded-[30px] flex items-center justify-center min-h-[30px]">
            Mais Popular
          </p>
        )}
      </div>

      <p
        className={clsx(
          "text-body-medium",
          variant === "popular"
            ? "text-white"
            : "text-[var(--color-text-primary)]"
        )}
      >
        {description}
      </p>

      <p
        className={clsx(
          "text-display-medium",
          variant === "popular"
            ? "text-white"
            : "text-[var(--color-text-primary)]"
        )}
      >
        {displayPrice}
      </p>

      {displayHostPrice && (
        <p
          className={clsx(
            "text-body-medium",
            variant === "popular"
              ? "text-white"
              : "text-[var(--color-text-primary)]"
          )}
        >
          + {displayHostPrice}/month hosting
        </p>
      )}

      <Button
        text={cta}
        variant={variant === "popular" ? "default" : "subtle"}
        onClick={() => window.open(whatsappLink, "_blank")}
      />

      <ul className="list-none flex flex-col gap-[24px]">
        {features.map((feature, idx) =>
          typeof feature === "string" ? (
            <li
              key={idx}
              className={clsx(
                "flex items-center gap-[10px] text-body-medium",
                variant === "popular"
                  ? "text-white"
                  : "text-[var(--color-text-secondary)]"
              )}
            >
              <CheckIcon
                fontSize="small"
                className={clsx(
                  variant === "popular"
                    ? "text-white"
                    : "text-[var(--color-primary)]"
                )}
              />
              {feature}
            </li>
          ) : (
            <li key={idx}>
              <SwitchOption
                options={
                  [
                    {
                      label: feature.options[0].label,
                    },
                    {
                      label: feature.options[1].label,
                    },
                  ] as [FeatureOption, FeatureOption]
                }
                onToggle={(sel) =>
                  setSelections((s) => ({ ...s, [feature.name]: sel }))
                }
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default PricingCard;
