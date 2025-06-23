import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslations } from "next-intl";
import Link from "next/link";

const WhatsApp = () => {
  const t = useTranslations("homepage.cta");
  const whatsappLink = `https://wa.me/0123456789012?text=${encodeURIComponent(
    t("whatsappText")
  )}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      className="fixed z-[6] bottom-[40px] right-[20px] border-none rounded-full w-[45px] h-[45px] cursor-pointer flex items-center justify-center bg-[#39B44C] text-white"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="text-[45px]" />
    </Link>
  );
};

export default WhatsApp;
