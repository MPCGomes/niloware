import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        <BackToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
