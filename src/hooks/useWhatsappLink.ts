import { useTranslations } from "next-intl";

export function useWhatsappLink(
  namespace: string,
  textKey: string,
  phone = "0123456789012"
) {
  const t = useTranslations(namespace);
  return `https://wa.me/${phone}?text=${encodeURIComponent(t(textKey))}`;
}
