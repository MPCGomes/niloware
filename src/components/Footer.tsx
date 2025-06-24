"use client";

import { type FC } from "react";
import Logo from "./Logo";
import { Instagram, WhatsApp } from "@mui/icons-material";
import { useTranslations } from "next-intl";

interface FooterProps {
  locale: string;
}

const Footer: FC<FooterProps> = ({ locale }) => {
  const t = useTranslations("common.footer");

  return (
    <footer className="bg-[#111111] text-[var(--color-text-secondary)]">
      <div className="container flex flex-col items-center text-center gap-[24px] px-5 py-[48px] lg:flex-col lg:items-start">
        {/* Top side */}
        <div className="flex flex-col items-center gap-8 lg:w-full lg:flex-row lg:justify-between lg:items-start">
          <Logo size="xxl" variant="dark" />
          {/* Right Side */}
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Quick Links */}
            <div className="text-[var(--color-text-tertiary)] flex flex-col gap-[18px] ">
              <p className="text-base text-center font-bold lg:text-left ">Quick Links</p>
              <ul className="flex flex-col gap-3 ">
                <li className="lg:text-left">
                  <a href={`/${locale}`} className="underline">
                    Home
                  </a>
                </li>
                <li className="lg:text-left">
                  <a href={`/${locale}/portfolio`} className="underline">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            {/* Social Media */}
            <div className="text-[var(--color-text-tertiary)] flex flex-col gap-[18px]">
              <p className="text-base text-center font-bold">Social Media</p>
              {/* Icons */}
              <div className="flex gap-3 justify-center lg:justify-start">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram fontSize="medium" />
                </a>
                <a
                  href="https://wa.me/0123456789012"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsApp fontSize="medium" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Horizontal Line */}
        <hr className="border border-t-0 border-[var(--color-text-tertiary)] w-full" />
        {/* Copyright */}
        <p className="text-center lg:text-left text-[var(--color-text-tertiary)]">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
