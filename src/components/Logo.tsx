"use client";

import { type FC } from "react";
import Link from "next/link";

interface LogoProps {
  size: "md" | "xxl";
  variant?: "light" | "dark";
}

const Logo: FC<LogoProps> = ({ size, variant = "light" }) => {
  const base = "font-bold tracking-[0em] uppercase no-underline";
  const sizeClasses = {
    md: "text-lg",
    xxl: "text-4xl",
  };
  const variantClasses = {
    light: "text-[var(--color-text-white)]",
    dark: "text-[var(--color-text-tertiary)]",
  };

  return (
    <Link
      href="/"
      className={`${base} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      NILOWARE
    </Link>
  );
};

export default Logo;
