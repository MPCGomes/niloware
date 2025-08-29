import type { Locale } from "@/i18n/settings";
import { BASE_PLANS, type BasePlanId } from "./basePlans";
import {
  CUSTOM_PLAN_OPTIONS,
  type CustomPlanSelections,
} from "./customPlanOptions";
import { convertUsdToLocal } from "./formatPrice";

const UPGRADE_PERCENT = 5;
const DOWNGRADE_PERCENT = -5;

export function getLockedPlanPrice(
  locale: Locale,
  basePlanId: BasePlanId
): number {
  const plan = BASE_PLANS[basePlanId];
  return convertUsdToLocal(plan.priceUsd, locale);
}

type FlexibleOverrides = {
  seo?: "basicSeo" | "advancedSeo";
  backup?: "monthlyBackup" | "weeklyBackup";
  support?: "standardSupport" | "prioritySupport";
};

export function getFlexiblePlanPrice(
  locale: Locale,
  basePlanId: BasePlanId,
  overrides: FlexibleOverrides
): number {
  const plan = BASE_PLANS[basePlanId];
  let totalUsd = plan.priceUsd;

  const includedFeatureIds = new Set(plan.includedFeatureIds);

  const applyOverrideAdjustment = (
    fromFeatureId: string,
    toFeatureId?: string
  ) => {
    if (!toFeatureId || toFeatureId === fromFeatureId) return;

    const isUpgrade =
      (fromFeatureId === "basicSeo" && toFeatureId === "advancedSeo") ||
      (fromFeatureId === "monthlyBackup" && toFeatureId === "weeklyBackup") ||
      (fromFeatureId === "standardSupport" &&
        toFeatureId === "prioritySupport");

    const adjustmentPercent = isUpgrade ? UPGRADE_PERCENT : DOWNGRADE_PERCENT;
    totalUsd += (plan.priceUsd * adjustmentPercent) / 100;
  };

  if (includedFeatureIds.has("basicSeo")) {
    applyOverrideAdjustment("basicSeo", overrides.seo);
  } else if (includedFeatureIds.has("advancedSeo")) {
    applyOverrideAdjustment("advancedSeo", overrides.seo);
  }

  if (includedFeatureIds.has("monthlyBackup")) {
    applyOverrideAdjustment("monthlyBackup", overrides.backup);
  } else if (includedFeatureIds.has("weeklyBackup")) {
    applyOverrideAdjustment("weeklyBackup", overrides.backup);
  }

  if (includedFeatureIds.has("standardSupport")) {
    applyOverrideAdjustment("standardSupport", overrides.support);
  } else if (includedFeatureIds.has("prioritySupport")) {
    applyOverrideAdjustment("prioritySupport", overrides.support);
  }

  return convertUsdToLocal(totalUsd, locale);
}

export function getCustomPlanPrice(
  locale: Locale,
  selections: CustomPlanSelections
): number {
  const pageOption = CUSTOM_PLAN_OPTIONS.pages.find(
    (option) => option.id === selections.pages
  );
  let totalUsd = pageOption ? pageOption.baseUsd : 0;

  const percentageGroups = [
    { group: "design", selectedId: selections.design },
    { group: "seo", selectedId: selections.seo },
    { group: "backup", selectedId: selections.backup },
    { group: "support", selectedId: selections.support },
    { group: "ecommerce", selectedId: selections.ecommerce },
    { group: "integration", selectedId: selections.integration },
    { group: "delivery", selectedId: selections.delivery },
  ] as const;

  for (const { group, selectedId } of percentageGroups) {
    const optionsForGroup = CUSTOM_PLAN_OPTIONS[group] as ReadonlyArray<{
      id: string;
      percent: number;
    }>;
    const chosenOption = optionsForGroup.find(
      (option) => option.id === selectedId
    );
    if (chosenOption && chosenOption.percent) {
      totalUsd += totalUsd * (chosenOption.percent / 100);
    }
  }

  return convertUsdToLocal(totalUsd, locale);
}
