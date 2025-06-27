// src/components/PricingCard.tsx
"use client";

import type { FC } from "react";
import { useState } from "react";
import clsx from "clsx";
import Button from "./Button";
import { Check as CheckIcon } from "@mui/icons-material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SwitchOption from "./SwitchOption";
import { useWhatsappLink } from "@/hooks/useWhatsappLink";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
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

interface PricingCardProps {
  name: string;
  description: string;
  price: string; // planPrice
  hostPrice?: string; // raw host price, e.g. "4.90 USD"
  features: Feature[];
  variant?: "default" | "popular";
  isCustom?: boolean;
  isAnnual?: boolean;
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
  isAnnual = false,
  cta,
}) => {
  const t = useTranslations("homepage.pricing");
  const tooltips = t.raw("tooltips") as Record<string, string>;

  const [includeHosting, setIncludeHosting] = useState(false);
  const priceParam = hostPrice || "";
  const hostingLabel = includeHosting
    ? isAnnual
      ? t("hostingSupport.checkedAnnual", { price: priceParam })
      : t("hostingSupport.checkedMonthly", { price: priceParam })
    : t("hostingSupport.unchecked");

  const [selections, setSelections] = useState<
    Record<CustomFeature["id"], 0 | 1>
  >(() =>
    (features as CustomFeature[])
      .filter((f) => typeof f !== "string")
      .reduce((acc, f) => ({ ...acc, [f.id]: 0 }), {} as any)
  );

  const parsePrice = (s: string) => {
    if (s.includes("R$")) {
      const num = s.replace("R$", "").replace(/\./g, "").replace(",", ".");
      return { value: parseFloat(num), currency: "R$" };
    }
    if (s.includes("BRL")) {
      const [num] = s.split(" ");
      const v = parseFloat(num.replace(/\./g, "").replace(",", "."));
      return { value: v, currency: "BRL" };
    }
    const [n, ...c] = s.split(" ");
    return { value: parseFloat(n), currency: c.join(" ") };
  };

  const computeCustom = (): string => {
    const pagesF = features.find(
      (f): f is CustomFeature => typeof f !== "string" && f.id === "pages"
    );
    if (!pagesF) return priceProp;
    const idx = selections[pagesF.id];
    const opt = pagesF.options[idx];
    if (!opt.price) return priceProp;

    let price = opt.price;
    ["seo", "backup", "support"].forEach((id) => {
      const f = (features as CustomFeature[]).find((x) => x.id === id);
      if (f) {
        const sel = selections[f.id];
        if (idx === 0 && sel === 1) price *= 1.05;
        if (idx === 1 && sel === 0) price *= 0.95;
      }
    });

    let mult = 1;
    ["design", "ecommerce", "integration", "delivery"].forEach((id) => {
      const f = (features as CustomFeature[]).find((x) => x.id === id);
      if (f) {
        const sel = selections[f.id];
        const pct = f.options[sel].priceAdjustmentPercent ?? 0;
        mult *= 1 + pct / 100;
      }
    });

    const final = price * mult;
    if (priceProp.includes("R$") || priceProp.includes("BRL")) {
      return final.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    return `${final.toFixed(2)} USD`;
  };

  const displayPrice =
    isCustom && features.some((f) => typeof f !== "string" && f.id === "pages")
      ? computeCustom()
      : priceProp;

  return (
    <div
      className={clsx(
        "w-full p-[24px] rounded-[8px] flex flex-col gap-[24px] transition-all",
        variant === "popular"
          ? "bg-primary-gradient text-white"
          : "bg-[var(--color-primary-ghost)] text-[var(--color-text-primary)]"
      )}
    >
      {/* Title */}
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

      {/* Description */}
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

      {/* Price */}
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

      {/* Hosting + Support */}
      {hostPrice && (
        <div className="flex items-center gap-[8px]">
          <Checkbox
            checked={includeHosting}
            onChange={(e) => setIncludeHosting(e.target.checked)}
            size="small"
            sx={{
              color:
                variant === "popular"
                  ? "rgba(255,255,255,0.7)"
                  : "var(--color-primary)",
              "&.Mui-checked": {
                color: variant === "popular" ? "#fff" : "var(--color-primary)",
              },
            }}
          />
          <span
            className={clsx(
              "text-body-medium",
              variant === "popular"
                ? "text-white"
                : "text-[var(--color-text-primary)]"
            )}
          >
            {hostingLabel}
          </span>
        </div>
      )}

      {/* CTA */}
      <Button
        text={cta}
        variant={variant === "popular" ? "default" : "outline-dark"}
        onClick={() =>
          window.open(
            useWhatsappLink("homepage.pricing", "whatsappMessage", {
              planName: name,
            }),
            "_blank"
          )
        }
      />

      {/* Feature List with tooltips */}
      <ul className="list-none flex flex-col gap-[24px]">
        {features.map((feature, idx) => {
          if (typeof feature === "string") {
            // find a matching tooltip key
            const key = Object.keys(tooltips).find((k) =>
              feature.toLowerCase().includes(k)
            );
            const tip = key ? tooltips[key] : undefined;

            return (
              <li
                key={idx}
                className={clsx(
                  "flex items-center gap-[8px] text-body-medium",
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
                <span>{feature}</span>
                {tip && (
                  <Tooltip title={tip} arrow>
                    <InfoOutlinedIcon
                      fontSize="small"
                      className={clsx(
                        "ml-1",
                        variant === "popular"
                          ? "text-white"
                          : "text-[var(--color-primary)]"
                      )}
                    />
                  </Tooltip>
                )}
              </li>
            );
          } else {
            return (
              <li key={idx}>
                <SwitchOption
                  options={[
                    { label: feature.options[0].label },
                    { label: feature.options[1].label },
                  ]}
                  onToggle={(sel) =>
                    setSelections((s) => ({ ...s, [feature.id]: sel }))
                  }
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default PricingCard;
