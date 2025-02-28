import React, { FC } from "react";
import styles from "./BackToTop.module.scss";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

const BackToTop: FC = () => (
  <a className={styles.backToTop} href="#">
    <ExpandLessRoundedIcon className={styles.icon} />
  </a>
);

export default BackToTop;
