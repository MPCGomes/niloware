import React, { FC } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "default" | "subtle";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  icon,
  variant = "default",
  onClick,
}) => (
  <button className={clsx(styles.button, styles[variant])} onClick={onClick}>
    {icon && <span className={styles.icon}>{icon}</span>}
    {text}
  </button>
);

export default Button;
