import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale } from "@/i18n/settings";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function LocaleLayout(props: LayoutProps) {
  const { locale } = await props.params;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header locale={locale} />
      {props.children}
      <Footer />
    </NextIntlClientProvider>
  );
}
