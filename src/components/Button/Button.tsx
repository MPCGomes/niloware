import React, { FC } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: React.ReactNode;
  icon?: React.ReactNode;
  color?: "default" | "subtle";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  icon,
  color = "default",
  onClick,
}) => (
  <button className={clsx(styles.button, styles[color])} onClick={onClick}>
    {icon && <span className={styles.icon}>{icon}</span>}
    {text}
  </button>
);

export default Button;
