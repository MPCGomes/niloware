"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./Logo.module.scss";

interface LogoProps {
  size: "md" | "xxl";
  variant?: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({ size, variant = "light" }) => {
  return (
    <Link href="/" className={clsx(styles.logo, styles[size], styles[variant])}>
      NILOWARE
    </Link>
  );
};

export default Logo;
