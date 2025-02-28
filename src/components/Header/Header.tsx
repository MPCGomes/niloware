"use client";

import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { WhatsApp } from "@mui/icons-material";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const whatsappLink =
    "https://wa.me/5512997591515?text=Olá, estou interessado nos seus serviços!";

  const openWhatsApp = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.section}>
          <Logo size="md" />
          <Button
            text={<span className={styles.buttonText}>+55 12 9 9759-1515</span>}
            icon={<WhatsApp fontSize="small" />}
            onClick={openWhatsApp}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
