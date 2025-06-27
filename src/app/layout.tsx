import { notFound } from "next/navigation";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const locale = params.locale || "pt-br";
  if (!["pt-br", "en-us", "es-es"].includes(locale)) return notFound();

  return (
    <html lang={locale}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
