"use client";

import type { FC } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import SectionHeading from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

interface PortfolioSectionProps {
  locale: string;
  portfolio?: boolean;
}

const PortfolioSection: FC<PortfolioSectionProps> = ({
  locale,
  portfolio = false,
}) => {
  const t = useTranslations("homepage.portfolio");

  const previewHeading = t("preview.heading");
  const previewSubheading = t("preview.subheading");
  const pageHeading = t("page.heading");
  const pageSubheading = t("page.subheading");

  const rawItems = t.raw("items") as {
    title: string;
    tags: string[];
    imageBackground: string;
    link: string;
  }[];

  const items = Array.isArray(rawItems) ? rawItems : [];
  const displayed = portfolio ? items.slice(0, 4) : items;

  const heading = portfolio ? previewHeading : pageHeading;
  const subheading = portfolio ? previewSubheading : pageSubheading;

  return (
    <section className="container section">
      <SectionHeading
        subheading={subheading}
        heading={heading}
        variant="row"
        link={portfolio ? `/${locale}/portfolio` : `/${locale}`}
      />

      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-[24px]">
        {displayed.map((item, index) => {
          if (portfolio) {
            if (index === 0) {
              return (
                <div
                  key={index}
                  className="tablet:col-span-2 desktop:col-span-3 desktop:h-[380px] h-auto"
                >
                  <PortfolioCard {...item} />
                </div>
              );
            }

            if (index === 3) {
              return (
                <div key={index} className="block tablet:hidden desktop:block">
                  <PortfolioCard {...item} />
                </div>
              );
            }
          }

          return <PortfolioCard key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default PortfolioSection;
