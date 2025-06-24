"use client";

import type { FC } from "react";
import { useState } from "react";
import clsx from "clsx";
import Button from "./Button";
import { Check as CheckIcon } from "@mui/icons-material";
import SwitchOption from "./SwitchOption";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";
import Checkbox from "@mui/material/Checkbox";

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
      if (typeof f !== "string" && f.options && Array.isArray(f.options)) {
        acc[f.name] = 0;
      }
      return acc;
    }, {} as Record<string, 0 | 1>)
  );

  const whatsappLink = useWhatsappLink("homepage.pricing", "whatsappMessage", {
    planName: name,
  });

  const parsePrice = (s: string) => {
    // Handle multiple formats: "1234.56 USD", "R$ 1.234,56", "0,00 BRL"
    if (s.includes("R$")) {
      // Brazilian format with R$: "R$ 1.234,56"
      const numPart = s.replace("R$", "").trim();
      // Convert Brazilian format (1.234,56) to US format (1234.56)
      const normalizedNum = numPart.replace(/\./g, "").replace(",", ".");
      return { value: parseFloat(normalizedNum), currency: "R$" };
    } else if (s.includes("BRL")) {
      // Brazilian format with BRL: "1.234,56 BRL" or "0,00 BRL"
      const parts = s.split(" ");
      const numPart = parts[0];
      // Convert Brazilian format (1.234,56) to US format (1234.56)
      const normalizedNum = numPart.replace(/\./g, "").replace(",", ".");
      return { value: parseFloat(normalizedNum), currency: "BRL" };
    } else {
      // US format: "1234.56 USD"
      const [num, ...curr] = s.split(" ");
      return { value: parseFloat(num), currency: curr.join(" ") };
    }
  };

  const computeCustom = () => {
    console.log(
      "Available features:",
      features.map((f) => (typeof f === "string" ? f : f.name))
    );
    console.log("Current selections:", selections);

    const pagesFeature = features.find(
      (f): f is CustomFeature =>
        typeof f !== "string" && (f.name === "Pages" || f.name === "Páginas")
    );

    if (!pagesFeature) {
      console.error(
        "Pages feature not found. Available custom features:",
        features.filter((f) => typeof f !== "string").map((f) => f.name)
      );
      return priceProp;
    }

    if (!pagesFeature.options || !Array.isArray(pagesFeature.options)) {
      console.error("Pages feature options are invalid:", pagesFeature.options);
      return priceProp;
    }

    const pageIdx = selections[pagesFeature.name];
    if (pageIdx === undefined) {
      console.error("No selection found for Pages feature");
      return priceProp;
    }

    const selectedOption = pagesFeature.options[pageIdx];
    console.log("Selected Pages option:", selectedOption);

    if (!selectedOption || typeof selectedOption.price !== "number") {
      console.error("Invalid price for Pages feature option:", selectedOption);
      return priceProp;
    }

    const basePlanPrice = selectedOption.price;
    let adjustedPlanPrice = basePlanPrice;

    console.log("Base plan price:", basePlanPrice);

    features.forEach((f) => {
      if (
        typeof f === "object" &&
        f.options &&
        Array.isArray(f.options) &&
        ["SEO", "Backup", "Support"].includes(f.name)
      ) {
        const sel = selections[f.name];
        console.log(`Processing ${f.name} with selection:`, sel);

        if (pageIdx === 0) {
          if (sel === 0) {
          } else if (sel === 1) {
            adjustedPlanPrice *= 1.05;
            console.log(
              `Applied 5% increase for ${f.name}, new price:`,
              adjustedPlanPrice
            );
          }
        } else if (pageIdx === 1) {
          if (sel === 0) {
            adjustedPlanPrice *= 0.95;
            console.log(
              `Applied 5% decrease for ${f.name}, new price:`,
              adjustedPlanPrice
            );
          } else if (sel === 1) {
          }
        }
      }
    });

    let multiplier = 1;
    features.forEach((f) => {
      if (
        typeof f === "object" &&
        f.options &&
        Array.isArray(f.options) &&
        f.name !== "Pages" &&
        f.name !== "Páginas" &&
        !["SEO", "Backup", "Support"].includes(f.name)
      ) {
        const sel = selections[f.name];
        const opt = f.options[sel];

        if (opt) {
          const pct = opt.priceAdjustmentPercent ?? 0;
          console.log(`Processing ${f.name} with ${pct}% adjustment`);

          if (
            ["Design", "E-Commerce", "Integration", "Delivery"].includes(f.name)
          ) {
            multiplier *= 1 + pct / 100;
            console.log(
              `Applied ${pct}% multiplier for ${f.name}, new multiplier:`,
              multiplier
            );
          }
        }
      }
    });

    const finalPrice = adjustedPlanPrice * multiplier;
    console.log("Final calculated price:", finalPrice);

    if (priceProp.includes("BRL") || priceProp.includes("R$")) {
      return `${finalPrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    } else {
      return `${finalPrice.toFixed(2)} USD`;
    }
  };

  const computeCustomHostPrice = () => {
    if (!hostPrice) return undefined;

    const designFeature = features.find(
      (f): f is CustomFeature => typeof f !== "string" && f.name === "Design"
    );

    if (
      designFeature &&
      designFeature.options &&
      Array.isArray(designFeature.options) &&
      selections["Design"] === 1
    ) {
      const { value, currency } = parsePrice(hostPrice);
      const doubledValue = value * 2;

      if (currency === "R$" || currency === "BRL") {
        return `${doubledValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;
      } else {
        return `${doubledValue.toFixed(2)} ${currency}`;
      }
    }

    return hostPrice;
  };

  // Only compute custom pricing if isCustom is true AND we have valid custom features
  const displayPrice =
    isCustom &&
    features.some(
      (f) =>
        typeof f !== "string" && (f.name === "Pages" || f.name === "Páginas")
    )
      ? computeCustom()
      : priceProp;

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
      <div className="flex justify-between items-center gap-[8px] h-[32px]">
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
        variant={variant === "popular" ? "default" : "outline-dark"}
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
          ) : feature.options && Array.isArray(feature.options) ? (
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
          ) : null
        )}
      </ul>
    </div>
  );
};

export default PricingCard;
