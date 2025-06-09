"use client";

import type { FC } from "react";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import { useTranslations } from "next-intl";
import {
  Devices as DevicesIcon,
  TrendingUp as TrendingUpIcon,
  Edit as EditIcon,
  Apps as AppsIcon,
  Share as ShareIcon,
  HeadsetMic as HeadsetMicIcon,
} from "@mui/icons-material";

interface FeaturesSectionProps {
  locale: string;
}

const FeaturesSection: FC<FeaturesSectionProps> = ({}) => {
  const t = useTranslations("homepage.features");

  const heading = t("heading");
  const subheading = t("subheading");
  const features = t.raw("features") as {
    title: string;
    description: string;
  }[];

  const icons = [
    { icon: <DevicesIcon fontSize="large" />, color: "#0072FF" },
    { icon: <TrendingUpIcon fontSize="large" />, color: "#00C853" },
    { icon: <EditIcon fontSize="large" />, color: "#6200EA" },
    { icon: <AppsIcon fontSize="large" />, color: "#FF6D00" },
    { icon: <ShareIcon fontSize="large" />, color: "#0091EA" },
    { icon: <HeadsetMicIcon fontSize="large" />, color: "#FFD600" },
  ];

  return (
    <section className="container section">
      <SectionHeading subheading={subheading} heading={heading} />
      <div className="grid grid-cols-1 gap-[32px] tablet:grid-cols-2 desktop:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            icon={icons[index]?.icon}
            title={feature.title}
            description={feature.description}
            color={icons[index]?.color || "#000"}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
