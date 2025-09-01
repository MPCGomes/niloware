import type { FC } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { OpenInNew } from "@mui/icons-material";
import { SmallGradientIcon } from "@/components/ui/GradientIcon";

interface SectionHeadingProps {
  subheading: string;
  heading: string;
}

const gradientTextStyle = {
  background: "linear-gradient(90deg, #0072FF 0%, #00C6FF 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const SectionHeading: FC<SectionHeadingProps> = ({ subheading, heading }) => (
  <div className="flex w-full flex-col items-center justify-center text-center">
    <p
      className="text-[22px] leading-[28px] font-normal tracking-[0px] uppercase"
      style={gradientTextStyle}
    >
      {subheading}
    </p>
    <h2 className="text-[40px] leading-[48px] font-bold tracking-[0px] text-[var(--color-text-primary)]">
      {heading}
    </h2>
  </div>
);

const SectionHeadingWithLink: FC<SectionHeadingProps & { href: string }> = ({
  subheading,
  heading,
  href,
}) => (
  <div className="flex w-full flex-row items-center justify-between">
    <h2 className="text-[40px] leading-[48px] font-bold tracking-[0px] text-[var(--color-text-primary)]">
      {heading}
    </h2>
    <Link href={href} className="flex items-center gap-1">
      <span
        className="text-[22px] leading-[28px] font-normal tracking-[0px] uppercase"
        style={gradientTextStyle}
      >
        {subheading}
      </span>
      <SmallGradientIcon icon={<OpenInNew fontSize="small" />} />
    </Link>
  </div>
);

const SectionHeadingWithPortfolioLink: FC<SectionHeadingProps> = (props) => {
  const locale = useLocale();
  return <SectionHeadingWithLink {...props} href={`/${locale}/portfolio`} />;
};

const SectionHeadingWithHomeLink: FC<SectionHeadingProps> = (props) => {
  const locale = useLocale();
  return <SectionHeadingWithLink {...props} href={`/${locale}`} />;
};

export default SectionHeading;
export { SectionHeadingWithPortfolioLink, SectionHeadingWithHomeLink };
