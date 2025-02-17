"use client";

import { useState } from "react";
import clsx from "clsx";
import styles from "./PricingToggle.module.scss";

const PricingToggle = ({
  onToggle,
}: {
  onToggle: (isAnnual: boolean) => void;
}) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = (value: boolean) => {
    setIsAnnual(value);
    onToggle(value);
  };

  return (
    <div className={styles.toggle}>
      <div
        className={clsx(styles.option, { [styles.active]: !isAnnual })}
        onClick={() => handleToggle(false)}
      >
        Mensal
      </div>

      <div
        className={clsx(styles.option, { [styles.active]: isAnnual })}
        onClick={() => handleToggle(true)}
      >
        <span>Anual</span>
        <span className={styles.discount}>-20%</span>
      </div>
    </div>
  );
};

export default PricingToggle;
