"use client";

import { useState } from "react";
import type { FC } from "react";
import Switch from "@mui/material/Switch";
import CircleIcon from "@mui/icons-material/Circle";

interface FeatureOption {
  label: string;
}

interface SwitchOptionProps {
  options: [FeatureOption, FeatureOption];
  onToggle?: (selectedIndex: 0 | 1) => void;
}

const SwitchOption: FC<SwitchOptionProps> = ({ options, onToggle }) => {
  const [on, setOn] = useState(false);
  return (
    <div className="flex items-center gap-[10px]">
      <Switch
        checked={on}
        onChange={() => {
          const next = !on;
          setOn(next);
          onToggle?.(next ? 1 : 0);
        }}
        icon={<CircleIcon fontSize="small" />}
        checkedIcon={<CircleIcon fontSize="small" />}
        size="small"
      />
      <span>{on ? options[1].label : options[0].label}</span>
    </div>
  );
};

export default SwitchOption;
