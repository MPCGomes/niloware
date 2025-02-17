import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niloware | Criação de Sites Profissionais",
  description:
    "A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!",
  keywords:
    "criação de sites, desenvolvimento web, agência de sites, sites profissionais, Niloware",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    url: "https://niloware.com",
    title: "Niloware | Criação de Sites Profissionais",
    description:
      "A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!",
    images: [
      {
        url: "https://niloware.com/og-image.jpg",
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
    images: ["https://niloware.com/og-image.jpg"],
  },
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
