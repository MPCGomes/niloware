"use client";

import { type FC } from "react";
import Logo from "./Logo";
import { Instagram, WhatsApp } from "@mui/icons-material";
import { useTranslations } from "next-intl";

const Footer: FC = () => {
  const t = useTranslations("common.footer");

  return (
    <footer className="bg-[#111111] text-text-secondary">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-[16px] px-[16px] py-[50px] lg:flex-row lg:justify-between lg:text-left lg:gap-0 lg:px-[120px]">
          <div className="flex flex-col items-center lg:items-start">
            <Logo size="xxl" variant="dark" />
            <div className="flex gap-[8px]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  fontSize="medium"
                  className="text-[var(--color-text-tertiary)]"
                />
              </a>
              <a
                href="https://wa.me/0123456789012"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsApp
                  fontSize="medium"
                  className="text-[var(--color-text-tertiary)]"
                />
              </a>
            </div>
          </div>
          <p className="text-center lg:text-left text-[var(--color-text-tertiary)]">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
