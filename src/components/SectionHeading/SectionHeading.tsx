import React from "react";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  subheading: string;
  heading: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subheading,
  heading,
}) => {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.subheading}>{subheading}</p>
      <p className={styles.heading}>{heading}</p>
    </div>
  );
};

export default SectionHeading;
