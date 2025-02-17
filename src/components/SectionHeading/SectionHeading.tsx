import React from "react";
import Link from "next/link";
import { OpenInNew } from "@mui/icons-material";
import styles from "./SectionHeading.module.scss";
import clsx from "clsx";

interface SectionHeadingProps {
  subheading: string;
  heading: string;
  isRow?: boolean;
  link?: string;
  reverseOrder?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subheading,
  heading,
  isRow = false,
  link,
  reverseOrder = false,
}) => {
  return (
    <div
      className={clsx(styles.sectionHeading, {
        [styles.row]: isRow,
        [styles.reverse]: reverseOrder,
      })}
    >
      {isRow ? (
        <>
          {!reverseOrder ? (
            <>
              <p className={styles.heading}>{heading}</p>
              {link ? (
                <Link href={link} className={styles.subheadingLink}>
                  <span className={styles.subheading}>{subheading}</span>
                  <OpenInNew fontSize="small" />
                </Link>
              ) : (
                <p className={styles.subheading}>{subheading}</p>
              )}
            </>
          ) : (
            <>
              {link ? (
                <Link href={link} className={styles.subheadingLink}>
                  <span className={styles.subheading}>{subheading}</span>
                  <OpenInNew fontSize="small" />
                </Link>
              ) : (
                <p className={styles.subheading}>{subheading}</p>
              )}
              <p className={styles.heading}>{heading}</p>
            </>
          )}
        </>
      ) : (
        <>
          {!reverseOrder &&
            (link ? (
              <Link href={link} className={styles.subheadingLink}>
                <span className={styles.subheading}>{subheading}</span>
                <OpenInNew fontSize="small" />
              </Link>
            ) : (
              <p className={styles.subheading}>{subheading}</p>
            ))}

          <p className={styles.heading}>{heading}</p>

          {reverseOrder &&
            (link ? (
              <Link href={link} className={styles.subheadingLink}>
                <span className={styles.subheading}>{subheading}</span>
                <OpenInNew fontSize="small" />
              </Link>
            ) : (
              <p className={styles.subheading}>{subheading}</p>
            ))}
        </>
      )}
    </div>
  );
};

export default SectionHeading;
