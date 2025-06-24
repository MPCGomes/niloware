import { type FC, type ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  text: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "subtle" | "full" | "full-dark" | "outline-dark";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  icon,
  variant = "default",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-[24px] py-[10px] rounded-[24px] border-2 cursor-pointer flex items-center justify-center gap-[8px] font-medium",
        variant === "default" &&
          "border-[var(--color-text-white)] text-[var(--color-text-white)] hover:bg-[var(--color-text-white)] hover:text-[var(--color-primary)] transition-all duration-300 ease-in-out",
        variant === "outline-dark" &&
          "border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-white transition-all duration-300 ease-in-out",
        variant === "subtle" &&
          "border-[var(--color-text-primary)] text-[var(--color-text-primary)]",
        variant === "full" &&
          "bg-white border-white text-[var(--color-primary)] hover:bg-gray-100 hover:border-gray-100 transition-all duration-300 ease-in-out",
        variant === "full-dark" &&
          "bg-[var(--color-text-primary)] border-[var(--color-text-primary)] text-[var(--color-text-white)] hover:bg-[#0B2443] transition-all duration-300 ease-in-out"
      )}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
