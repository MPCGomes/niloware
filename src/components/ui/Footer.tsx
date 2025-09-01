"use client";

import { type FC } from "react";
import { Instagram, WhatsApp } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="container mx-auto py-[48px] px-5 flex flex-col items-center gap-6 lg:flex-row justify-between">
      {/* Logo + Socials */}
      <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-4">
        {/* Logo */}
        <p className="uppercase text-[2.5rem] font-black lg:text-[3.375rem]">
          Niloware
        </p>
        {/* Socials */}
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              fontSize="medium"
              className="text-white/80"
            />
          </a>
          <a
            href="https://wa.me/0123456789012"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp
              fontSize="medium"
              className="text-white/80"
            />
          </a>
        </div>
      </div>
      {/* Links + Copyright */}
      <div className="flex flex-col gap-6 items-center lg:items-end lg:gap-4">
        {/* Links */}
        <div className="flex gap-4 font-medium">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Portfolio</Link>
        </div>
        {/* Copyright */}
        <p className="text-center lg:text-left text-white/80">
          copyright
        </p>
      </div>
    </footer>
  );
};

export default Footer;
