import { useTranslations } from "next-intl";

export function useWhatsappLink(
  namespace: string,
  textKey: string,
  variables: Record<string, string | number | Date> = {},
  phone = "0123456789012"
) {
  const t = useTranslations(namespace);
  const message = t(textKey, variables);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
