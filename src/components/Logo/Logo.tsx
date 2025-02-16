"use client";

import React from "react";
import Link from "next/link";
import styles from "./Logo.module.scss";

interface LogoProps {
  size: "md" | "xxl";
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size, light }) => {
  return (
    <Link
      href="/"
      className={`${styles.logo} ${styles[size]} ${light ? styles.light : ""}`}
    >
      NILOWARE
    </Link>
  );
};

export default Logo;
