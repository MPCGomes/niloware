import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
