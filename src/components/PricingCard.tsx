"use client";

import type { FC } from "react";
import { useState } from "react";
import clsx from "clsx";
import Button from "./Button";
import { Check as CheckIcon } from "@mui/icons-material";
import SwitchOption from "./SwitchOption";

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
  isAnnual?: boolean;
  isCustom?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({
  name,
  description,
  price: priceProp,
  hostPrice,
  features,
  variant = "default",
  isAnnual = false,
  isCustom = false,
}) => {
  const [selections, setSelections] = useState<Record<string, 0 | 1>>(() =>
    features.reduce((acc, f) => {
      if (typeof f !== "string") acc[f.name] = 0;
      return acc;
    }, {} as Record<string, 0 | 1>)
  );

  const parsePrice = (s: string) => {
    const [num, ...curr] = s.split(" ");
    return { value: parseFloat(num), currency: curr.join(" ") };
  };

  const computeCustom = () => {
    let sum = 0;
    const pagesFeature = features.find(
      (f): f is CustomFeature => typeof f !== "string" && f.name === "Pages"
    )!;
    const pageIdx = selections["Pages"];
    sum = pagesFeature.options[pageIdx].price!;

    features.forEach((f) => {
      if (typeof f === "object" && f.name !== "Pages") {
        const sel = selections[f.name];
        const opt = f.options[sel];
        const pct = opt.priceAdjustmentPercent ?? 0;

        if (
          ["Design", "E-Commerce", "Integration", "Delivery"].includes(f.name)
        ) {
          sum *= 1 + pct / 100;
        } else if (
          ["SEO", "Backup", "Support"].includes(f.name) &&
          pageIdx === 0
        ) {
          sum *= 1 + pct / 100;
        }
      }
    });

    if (isAnnual) sum *= 10;
    const { currency } = parsePrice(priceProp);
    return `${sum.toFixed(2)} ${currency}`;
  };

  const displayPrice = isCustom ? computeCustom() : priceProp;
  const whatsappLink = `https://wa.me/0123456789012?text=${encodeURIComponent(
    `Olá, quero contratar o plano ${name}.`
  )}`;

  return (
    <div
      className={clsx(
        "w-full p-[24px] rounded-[8px] flex flex-col gap-[24px] transition-all",
        variant === "popular"
          ? "bg-primary-gradient text-white"
          : "bg-[var(--color-primary-03)] text-[var(--color-text-primary)]"
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

      {hostPrice && (
        <p
          className={clsx(
            "text-body-medium",
            variant === "popular"
              ? "text-white"
              : "text-[var(--color-text-primary)]"
          )}
        >
          + {hostPrice}/month hosting
        </p>
      )}

      <Button
        text="Contratar"
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
                  : "text-[var(--color-text-primary)]"
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
                      label:
                        feature.options[0].price != null
                          ? `${
                              feature.options[0].label
                            } (${feature.options[0].price.toFixed(2)})`
                          : `${feature.options[0].label} (+${feature.options[0].priceAdjustmentPercent}%)`,
                    },
                    {
                      label:
                        feature.options[1].price != null
                          ? `${
                              feature.options[1].label
                            } (${feature.options[1].price.toFixed(2)})`
                          : `${feature.options[1].label} (+${feature.options[1].priceAdjustmentPercent}%)`,
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
