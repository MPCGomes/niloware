import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Seo from "@/components/Seo/Seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niloware | Criação de Sites Profissionais",
  description:
    "A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!",
  keywords:
    "criação de sites, desenvolvimento web, agência de sites, sites profissionais, Niloware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <Seo />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
