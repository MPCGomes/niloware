import React from "react";
import styles from "./SectionHeading.module.scss";
import Button from "../Button/Button";

const SectionHeading = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <p>Niloware</p>
        <Button text='(12) 3456-7890'/>
      </div>
    </nav>
  );
};

export default SectionHeading;
