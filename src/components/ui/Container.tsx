import { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  bleed?: boolean;
};

export default function Container({
  children,
  className,
  bleed,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[1440px]",
        bleed ? "px-0" : "px-[20px] tablet:px-[60px] desktop:px-[120px]",
        className
      )}
    >
      {children}
    </div>
  );
}
