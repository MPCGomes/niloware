"use client";

import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { WhatsApp } from "@mui/icons-material";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const whatsappLink = `https://wa.me/5512974096393?text=Olá, estou interessado nos seus serviços!`;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.section}>
          <Logo size="md" light />
          <Button
            text="+55 12 97409-6393"
            icon={<WhatsApp fontSize="small" />}
            onClick={() => window.open(whatsappLink, "_blank")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
