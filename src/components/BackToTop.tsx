"use client";

import { type FC } from "react";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

const BackToTop: FC = () => (
  <a
    href="#"
    className="fixed z-[6] bottom-[20px] right-[20px] border-none rounded-full w-[45px] h-[45px] cursor-pointer flex items-center justify-center bg-[rgba(0,0,0,1)] text-white opacity-[0.5]"
    aria-label="Back to top"
  >
    <ExpandLessRoundedIcon className="text-[45px]" />
  </a>
);

export default BackToTop;
