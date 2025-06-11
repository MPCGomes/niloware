import { type FC, type ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  text: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "subtle";
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
        "px-[32px] py-[12px] rounded-[24px] border-2 cursor-pointer flex items-center justify-center gap-[8px] font-medium bg-transparent",
        variant === "default" &&
          "border-[var(--color-text-white)] text-[var(--color-text-white)]",
        variant === "subtle" &&
          "border-gray-300 text-[var(--color-text-primary)]"
      )}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
