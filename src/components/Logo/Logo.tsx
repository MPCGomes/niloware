"use client";

import React from "react";
import Link from "next/link";
import styles from "./Logo.module.scss";
import clsx from "clsx";

interface LogoProps {
  size: "md" | "xxl";
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size, light }) => {
  return (
    <Link
      href="/"
      className={clsx(styles.logo, styles[size], { [styles.light]: light })}
    >
      NILOWARE
    </Link>
  );
};

export default Logo;
