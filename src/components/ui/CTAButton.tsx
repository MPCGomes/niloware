"use client";

import clsx from "clsx";

export type CTAButtonProps = { label: string };

const buttonBase = "justify-center rounded-md px-6 py-2.5 font-medium";

const buttonOutline = "border";

const buttonFilled = "bg-white";

const labelGradient = "bg-gradient-primary bg-clip-text text-transparent";

export function CTAOutlineButton({ label }: CTAButtonProps) {
  return (
    <a
      href="#pricing"
      aria-label={label}
      className={clsx(buttonBase, buttonOutline)}
    >
      {label}
    </a>
  );
}

export function CTAGradientButton({ label }: CTAButtonProps) {
  return (
    <a
      href="#pricing"
      aria-label={label}
      className={clsx(buttonBase, buttonFilled)}
    >
      <span className={labelGradient}>{label}</span>
    </a>
  );
}
