import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niloware | Criação de Sites Profissionais",
  description:
    "A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!",
  keywords:
    "criação de sites, desenvolvimento web, agência de sites, sites profissionais, Niloware",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.niloware.com.br/",
    title: "Niloware | Criação de Sites Profissionais",
    description:
      "A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!",
    images: [
      {
        url: "https://www.niloware.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Niloware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niloware | Criação de Sites Profissionais",
    description:
      "A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!",
    images: ["https://www.niloware.com.br/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>
        <Header />
        <BackToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
