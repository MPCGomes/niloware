"use client";

import React from "react";
import Logo from "../Logo/Logo";
import { Instagram, WhatsApp } from "@mui/icons-material";
import styles from "./Footer.module.scss";

const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.left}>
            <Logo size="xxl" variant="dark" />
            <div className={styles.icons}>
              <ExternalLink href="https://instagram.com">
                <Instagram fontSize="medium" />
              </ExternalLink>
              <ExternalLink href="https://wa.me/5512974096393">
                <WhatsApp fontSize="medium" />
              </ExternalLink>
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
