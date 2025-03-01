"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { WhatsApp, Menu, Close } from "@mui/icons-material";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const whatsappLink =
    "https://wa.me/5512997591515?text=Olá, estou interessado nos seus serviços!";

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerSection}>
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>
              Início
            </Link>
            <Link href="/portfolio" className={styles.navLink}>
              Portfólio
            </Link>
            <Button
              text="+55 12 9 9759-1515"
              icon={<WhatsApp fontSize="small" />}
              onClick={() => window.open(whatsappLink, "_blank")}
            />
          </nav>

          {/* Mobile / Tablet Menu Button */}
          <button className={styles.menuButton} onClick={openMenu}>
            <Menu fontSize="large" />
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Full-Screen Modal */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {/* Close Button */}
          <button className={styles.closeButton} onClick={closeMenu}>
            <Close fontSize="large" />
          </button>

          {/* Navigation inside Modal */}
          <nav className={styles.mobileNav}>
            <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>
              Início
            </Link>
            <Link
              href="/portfolio"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Portfólio
            </Link>
            <Button
              text="+55 12 9 9759-1515"
              icon={<WhatsApp fontSize="small" />}
              variant="subtle"
              onClick={() => window.open(whatsappLink, "_blank")}
            />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
