import React from "react";
import Link from "next/link";
import { OpenInNew } from "@mui/icons-material";
import styles from "./SectionHeading.module.scss";
import clsx from "clsx";

interface SectionHeadingProps {
  subheading: string;
  heading: string;
  variant?: "column" | "row";
  link: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subheading,
  heading,
  variant = "column",
  link,
}) => {
  return (
    <div className={clsx(styles.sectionHeading, styles[variant])}>
      {variant === "row" ? (
        <>
          <p className={styles.heading}>{heading}</p>
          <Link href={link} className={styles.subheadingLink}>
            <span className={styles.subheading}>{subheading}</span>
            <OpenInNew fontSize="small" />
          </Link>
        </>
      ) : (
        <>
          <p className={styles.subheading}>{subheading}</p>
          <p className={styles.heading}>{heading}</p>
        </>
      )}
    </div>
  );
};

export default SectionHeading;
