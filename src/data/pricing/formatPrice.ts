import type { Locale } from "@/i18n/settings";

export type SupportedCurrency = "USD" | "BRL";
export const USD_TO_BRL_RATE = 5.5 as const;

export function getCurrencyForLocale(locale: Locale): SupportedCurrency {
  return locale.startsWith("pt") ? "BRL" : "USD";
}

export function convertUsdToLocal(amountUsd: number, locale: Locale): number {
  const currency = getCurrencyForLocale(locale);
  const localizedAmount =
    currency === "BRL" ? amountUsd * USD_TO_BRL_RATE : amountUsd;
  return Math.round(localizedAmount * 100) / 100;
}

export function formatPrice(amountUsd: number, locale: Locale): string {
  const currency = getCurrencyForLocale(locale);
  const localAmount = convertUsdToLocal(amountUsd, locale);

  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(localAmount);
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(localAmount);
}
