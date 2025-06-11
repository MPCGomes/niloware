"use client";

import { useState } from "react";
import type { FC } from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

interface FeatureOption {
  label: string;
}

interface SwitchOptionProps {
  options: [FeatureOption, FeatureOption];
  onToggle?: (selectedIndex: 0 | 1) => void;
}

// Criando o estilo iOS customizado
const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
  ({ theme }) => ({
    width: 39,
    height: 17,
    padding: 0,
    display: "flex",
    "& .MuiSwitch-switchBase": {
      padding: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(22px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "#0072FF" : "#0072FF",
          opacity: 1,
          border: 0,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      width: 13,
      height: 13,
      borderRadius: 11,
      backgroundColor: "#fff",
      boxShadow: "none",
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#39393D" : "rgba(0, 114, 255, 0.2)",
      boxSizing: "border-box",
    },
  })
);

const SwitchOption: FC<SwitchOptionProps> = ({ options, onToggle }) => {
  const [on, setOn] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <IOSSwitch
        checked={on}
        onChange={() => {
          const next = !on;
          setOn(next);
          onToggle?.(next ? 1 : 0);
        }}
      />
      <span className="text-[var(--color-text-secondary)] font-normal text-sm">
        {on ? options[1].label : options[0].label}
      </span>
    </div>
  );
};

export default SwitchOption;
