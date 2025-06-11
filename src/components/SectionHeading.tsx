import type { FC } from "react";
import clsx from "clsx";
import { OpenInNew } from "@mui/icons-material";

interface SectionHeadingProps {
  subheading: string;
  heading: string;
  variant?: "column" | "row" | "columnStart";
  link?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({
  subheading,
  heading,
  variant = "column",
  link,
}) => {
  const base = "flex w-full items-center text-title-large";

  const column = "flex-col justify-center text-center";
  const columnStart =
    "flex-col justify-center text-center desktop:items-start desktop:text-left";
  const row = "flex-row justify-between items-center text-left";

  return (
    <div
      className={clsx(
        base,
        variant === "row"
          ? row
          : variant === "columnStart"
          ? columnStart
          : column
      )}
    >
      {variant === "row" && link ? (
        <>
          <p className="text-heading leading-[1.4] text-[var(--color-text-[var(--color-primary)])]">
            {heading}
          </p>
          <a
            href={link}
            className="flex items-center gap-[4px] text-[var(--color-primary)] no-underline hover:underline"
          >
            <span className="text-title-heading leading-[1.5] text-[var(--color-primary)]">
              {subheading}
            </span>
            <OpenInNew fontSize="small" />
          </a>
        </>
      ) : (
        <>
          <p className="text-title-heading leading-[1.5] text-[var(--color-primary)]">
            {subheading}
          </p>
          <p className="text-heading leading-[1.4] text-[var(--color-text-primary)]">
            {heading}
          </p>
        </>
      )}
    </div>
  );
};

export default SectionHeading;
