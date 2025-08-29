export const CUSTOM_PLAN_OPTIONS = {
  pages: [
    { id: "landingPage", baseUsd: 99.9 },
    { id: "multiPage", baseUsd: 199.8 },
  ],
  design: [
    { id: "preBuiltDesign", percent: 0 },
    { id: "customDesign", percent: 50 },
  ],
  seo: [
    { id: "basicSeo", percent: 0 },
    { id: "advancedSeo", percent: 5 },
  ],
  backup: [
    { id: "monthlyBackup", percent: 0 },
    { id: "weeklyBackup", percent: 5 },
  ],
  support: [
    { id: "standardSupport", percent: 0 },
    { id: "prioritySupport", percent: 5 },
  ],
  ecommerce: [
    { id: "noneEcommerce", percent: 0 },
    { id: "ecommerce", percent: 75 },
  ],
  integration: [
    { id: "noneIntegration", percent: 0 },
    { id: "integration", percent: 10 },
  ],
  delivery: [
    { id: "regularDelivery", percent: 0 },
    { id: "expressDelivery", percent: 10 },
  ],
} as const;

type CustomPlanOptions = typeof CUSTOM_PLAN_OPTIONS;
type OptionId<Group extends keyof CustomPlanOptions> =
  CustomPlanOptions[Group][number]["id"];

export type CustomPlanSelections = {
  [Group in keyof CustomPlanOptions]: OptionId<Group>;
};
