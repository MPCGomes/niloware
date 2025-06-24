"use client";

import {
  useState,
  useEffect,
  useRef,
  type FC,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { Language as LanguageIcon } from "@mui/icons-material";
import { useRouter, usePathname } from "@/i18n/navigation";

interface LocaleSwitchProps {
  currentLocale: string;
}

const locales = [
  { code: "en-us", label: "English (NA)" },
  { code: "es-es", label: "Español (EUW)" },
  { code: "pt-br", label: "Português (Brasil)" },
];

const LocaleSwitch: FC<LocaleSwitchProps> = ({ currentLocale }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleDropdown = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (locale: string) => {
    try {
      router.push(pathname, { locale });
      setOpen(false);
    } catch (error) {
      console.error("Error switching locale:", error);
      window.location.href = `/${locale}${pathname}`;
    }
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        onClick={toggleDropdown}
        className="bg-transparent border-none rounded-full p-[8px] cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.3)]"
        aria-label="Switch language"
      >
        <LanguageIcon fontSize="medium" style={{ color: "#122E50" }} />
      </button>

      {open && (
        <div className="absolute top-[110%] right-0 mt-[8px] bg-white border border-[#e0e0e0] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.15)] overflow-hidden z-[100] min-w-[180px]">
          {locales.map((locale) => (
            <button
              key={locale.code}
              onClick={(e: ReactMouseEvent) => {
                e.preventDefault();
                if (locale.code !== currentLocale) {
                  switchLocale(locale.code);
                } else {
                  setOpen(false);
                }
              }}
              className={`w-full text-left block px-[16px] py-[8px] border-none bg-transparent cursor-pointer whitespace-nowrap transition-all duration-200 ease-in-out text-[#122e50] hover:bg-[var(--color-primary-soft)] ${
                locale.code === currentLocale ? "font-bold text-primary" : ""
              }`}
            >
              {locale.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitch;
