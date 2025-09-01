"use client";

import { ReactElement, cloneElement, useId } from "react";

type Props = { icon: ReactElement<any> };

const createGradientIcon =
  (size: string) =>
  ({ icon }: Props) => {
    const uid = useId().replace(/:/g, "");
    const gradId = `gradient-${uid}`;

    return (
      <div className={size}>
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0072FF" />
              <stop offset="100%" stopColor="#00C6FF" />
            </linearGradient>
          </defs>
          {cloneElement(icon, {
            style: {
              fill: `url(#${gradId})`,
              stroke: `url(#${gradId})`,
              width: "100%",
              height: "100%",
            },
          })}
        </svg>
      </div>
    );
  };

const GradientIcon = createGradientIcon("w-12 h-12");
const SmallGradientIcon = createGradientIcon("w-[18px] h-[18px]");

export default GradientIcon;
export { SmallGradientIcon };
