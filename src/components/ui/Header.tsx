"use client";

import { type FC, useState } from "react";
import Link from "next/link";
import { Menu, Close } from "@mui/icons-material";

interface HeaderProps {
  locale: string;
}

const Header: FC<HeaderProps> = ({ locale }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#00012080] border-b border-b-white">
      <div className="mx-auto container">
        <div className="h-[80px] flex justify-between items-center px-[20px] tablet:px-[16px]">
          <p className="uppercase font-bold text-xl">Niloware</p>

          {/* Navbar */}
          <nav className="hidden md:flex items-center gap-[24px]">
            <Link
              href={""}
              className="text-md text-[var(--color-text-white)] no-underline "
            >
              Home
            </Link>
            <Link
              href={""}
              className="text-md text-[var(--color-text-white)] no-underline"
            >
              Portfolio
            </Link>
            Button
          </nav>

          {/* Hamburguer menu */}
          <div className="flex items-center gap-[8px] md:hidden">
            <button
              className="p-[8px] text-white hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu fontSize="large" />
            </button>
          </div>
        </div>
      </div>

      {/* Open menu mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#000120] p-[20px] flex flex-col gap-[32px] z-[1000] animate-slideIn">
          <div className="flex justify-between items-center">
            <p className="uppercase font-bold text-xl">Niloware</p>
            {/* Close button */}
            <button
              className="p-[8px] hover:bg-[rgba(0,0,0,0.1)] text-white rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Close fontSize="large" />
            </button>
          </div>

          <nav className="flex flex-col text-white gap-[24px] text-left">
            <Link
              href={`/${locale}`}
              className="text-md text-background no-underline hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className="text-md text-background no-underline hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            Button
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
