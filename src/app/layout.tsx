import type { ReactNode } from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="bg-background text-foreground font-[var(--font-roboto)]">
        {children}
      </body>
    </html>
  );
}
