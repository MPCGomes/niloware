"use client";

import { useState } from "react";
import clsx from "clsx";
import styles from "./PricingToggle.module.scss";

const PricingToggle = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className={styles.toggle}>
      {/* Mensal (Left) */}
      <div
        className={clsx(styles.option, { [styles.active]: !isAnnual })}
        onClick={() => setIsAnnual(false)}
      >
        Mensal
      </div>

      {/* Anual (Right) */}
      <div
        className={clsx(styles.option, { [styles.active]: isAnnual })}
        onClick={() => setIsAnnual(true)}
      >
        <span>Anual</span>
        <span className={styles.discount}>-20%</span>
      </div>
    </div>
  );
};

export default PricingToggle;
