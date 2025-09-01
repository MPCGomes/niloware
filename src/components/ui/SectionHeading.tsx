import type { FC } from "react";
import clsx from "clsx";
import { OpenInNew } from "@mui/icons-material";
import Link from "next/link";
import { useLocale } from "next-intl";

interface BaseSectionHeadingProps {
  subheading: string;
  heading: string;
  alignment?: "center" | "left";
}

interface SectionHeadingLinkProps extends BaseSectionHeadingProps {
  linkType: "portfolio" | "home";
}

const SectionHeading: FC<BaseSectionHeadingProps> = ({
  subheading,
  heading,
  alignment = "center",
}) => {
  const isCenter = alignment === "center";

  return (
    <div
      className={clsx(
        "flex w-full flex-col",
        isCenter
          ? "items-center justify-center text-center"
          : "items-start justify-center text-left desktop:items-start desktop:text-left"
      )}
    >
      <p
        className="text-[22px] leading-[28px] font-normal tracking-[0px] bg-gradient-to-r from-[#0072FF] to-[#00C6FF] bg-clip-text text-transparent"
        style={{
          background: "linear-gradient(90deg, #0072FF 0%, #00C6FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {subheading}
      </p>

      <h2 className="text-[40px] leading-[48px] font-bold tracking-[0px] text-[var(--color-text-primary)]">
        {heading}
      </h2>
    </div>
  );
};

const SectionHeadingWithLink: FC<SectionHeadingLinkProps> = ({
  subheading,
  heading,
  linkType,
}) => {
  const locale = useLocale();
  const linkHref =
    linkType === "portfolio" ? `/${locale}/portfolio` : `/${locale}`;

  return (
    <div className="flex w-full flex-row items-center justify-between">
      <h2 className="text-[40px] leading-[48px] font-bold tracking-[0px] text-[var(--color-text-primary)]">
        {heading}
      </h2>

      <Link
        href={linkHref}
        className="flex items-center gap-1 text-[var(--color-primary)] no-underline hover:underline"
      >
        <span
          className="text-[22px] leading-[28px] font-normal tracking-[0px]"
          style={{
            background: "linear-gradient(90deg, #0072FF 0%, #00C6FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {subheading}
        </span>
        <OpenInNew fontSize="small" className="text-[var(--color-primary)]" />
      </Link>
    </div>
  );
};

const SectionHeadingWithPortfolioLink: FC<BaseSectionHeadingProps> = (
  props
) => <SectionHeadingWithLink {...props} linkType="portfolio" />;

const SectionHeadingWithHomeLink: FC<BaseSectionHeadingProps> = (props) => (
  <SectionHeadingWithLink {...props} linkType="home" />
);

export default SectionHeading;
export {
  SectionHeadingWithLink,
  SectionHeadingWithPortfolioLink,
  SectionHeadingWithHomeLink,
};
