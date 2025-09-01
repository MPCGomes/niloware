"use client";

import FeatureCard from "@/components/Features/FeatureCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientIcon from "@/components/ui/GradientIcon";
import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import {
  Devices as DevicesIcon,
  TrendingUp as TrendingUpIcon,
  Edit as EditIcon,
  Apps as AppsIcon,
  Share as ShareIcon,
  HeadsetMic as HeadsetMicIcon,
} from "@mui/icons-material";

type FeatureItem = { title: string; description: string };

export default function FeaturesSection() {
  const t = useTranslations("home.features");
  const heading = t("heading");
  const subheading = t("subheading");
  const items = t.raw("items") as FeatureItem[];

  const icons = [
    <DevicesIcon key="i1" />,
    <TrendingUpIcon key="i2" />,
    <EditIcon key="i3" />,
    <AppsIcon key="i4" />,
    <ShareIcon key="i5" />,
    <HeadsetMicIcon key="i6" />,
  ].map((el, i) => (
    <GradientIcon key={`g${i}`} icon={el} className="w-12 h-12" />
  ));

  return (
    <section className="bg-background-alt">
      <Container className="py-[56px] space-y-[56px]">
        <SectionHeading subheading={subheading} heading={heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {items.slice(0, 6).map((item, index) => (
            <FeatureCard
              key={`${item.title}-${index}`}
              icon={icons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
