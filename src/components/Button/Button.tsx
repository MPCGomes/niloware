import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: React.ReactNode;
  icon?: React.ReactNode;
  color?: string;
  borderColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  color,
  borderColor,
  onClick,
}) => {
  return (
    <button
      style={{ color: color, border: `2px solid ${borderColor}` }}
      onClick={onClick}
      className={styles.button}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
