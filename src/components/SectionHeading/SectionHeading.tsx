import React from "react";
import styles from "./SectionHeading.module.scss";
import Button from "../Button/Button";

const SectionHeading = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <p>Niloware</p>
        <Button />
      </div>
    </nav>
  );
};

export default SectionHeading;
