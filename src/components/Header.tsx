"use client";

import { type FC, useState } from "react";
import Link from "next/link";
import { WhatsApp, Menu, Close } from "@mui/icons-material";
import Logo from "./Logo";
import Button from "./Button";
import LocaleSwitch from "./LocaleSwitch";
import { useTranslations } from "next-intl";

interface HeaderProps {
  locale: string;
}

const Header: FC<HeaderProps> = ({ locale }) => {
  const t = useTranslations("common.header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/0123456789012?text=${encodeURIComponent(
    t("contact.whatsappText")
  )}`;

  return (
    <header className="bg-primary-gradient">
      <div className="container">
        <div className="h-[80px] px-[16px] flex justify-between items-center lg:px-[120px]">
          <Logo size="md" />

          <nav className="hidden md:flex items-center gap-[24px]">
            <Link
              href={`/${locale}`}
              className="text-md text-text-light no-underline hover:opacity-80 transition-opacity"
            >
              {t("nav.home")}
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className="text-md text-text-light no-underline hover:opacity-80 transition-opacity"
            >
              {t("nav.portfolio")}
            </Link>
            <LocaleSwitch currentLocale={locale} />
            <Button
              text={t("contact.phone")}
              icon={<WhatsApp fontSize="small" />}
              onClick={() => window.open(whatsappLink, "_blank")}
            />
          </nav>

          <div className="flex items-center gap-[8px] md:hidden">
            <LocaleSwitch currentLocale={locale} />
            <button
              className="p-[8px] hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu fontSize="large" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#1f1f1f] p-[20px] flex flex-col gap-[32px] z-[1000] animate-slideIn">
          <div className="flex justify-between items-center">
            <Logo size="md" />
            <button
              className="p-[8px] hover:bg-[rgba(0,0,0,0.1)] rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Close fontSize="large" />
            </button>
          </div>

          <nav className="flex flex-col gap-[24px] text-left">
            <Link
              href={`/${locale}`}
              className="text-md text-background no-underline hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className="text-md text-background no-underline hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.portfolio")}
            </Link>
            <Button
              text={t("contact.phone")}
              icon={<WhatsApp fontSize="small" />}
              onClick={() => window.open(whatsappLink, "_blank")}
              variant="default"
            />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
