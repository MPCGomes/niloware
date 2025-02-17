"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { ExpandMore } from "@mui/icons-material";
import styles from "./FaqCard.module.scss";

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(styles.faqCard, { [styles.open]: isOpen })}>
      <button className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <ExpandMore
          className={clsx(styles.icon, { [styles.rotated]: isOpen })}
        />
      </button>
      <div className={styles.answer}>{isOpen && <p>{answer}</p>}</div>
    </div>
  );
};

export default FaqCard;
