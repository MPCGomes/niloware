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
    <div className={clsx(styles.faqCard, isOpen && styles.open)}>
      <button className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <ExpandMore className={clsx(styles.icon, isOpen && styles.rotated)} />
      </button>
      <div className={styles.answer} aria-hidden={!isOpen}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;
