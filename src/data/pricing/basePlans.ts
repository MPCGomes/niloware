export const BASE_PLANS = {
  basic: {
    id: "basic",
    priceUsd: 99.9,
    includedFeatureIds: [
      "landingPage",
      "preBuiltDesign",
      "responsive",
      "basicSeo",
      "ssl",
      "lgpd",
      "ddos",
      "monthlyBackup",
      "standardSupport",
    ],
  },
  professional: {
    id: "professional",
    priceUsd: 199.8,
    includedFeatureIds: [
      "multiPage",
      "preBuiltDesign",
      "responsive",
      "advancedSeo",
      "ssl",
      "lgpd",
      "ddos",
      "weeklyBackup",
      "prioritySupport",
    ],
  },
} as const;

export type BasePlanId = keyof typeof BASE_PLANS;
