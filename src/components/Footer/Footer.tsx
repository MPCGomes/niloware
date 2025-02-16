"use client";

import React from "react";
import Logo from "../Logo/Logo";
import { Instagram, WhatsApp } from "@mui/icons-material";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.left}>
            <Logo size="xxl" />
            <div className={styles.icons}>
              <Instagram fontSize="medium" />
              <WhatsApp fontSize="medium" />
            </div>
          </div>
          <p className={styles.right}>
            ™ & © 2024 Niloware. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
