import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Niloware | Criação de Sites Profissionais</title>
        <meta
          name="description"
          content="A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!"
        />
        <meta name="robots" content="index, follow" />

        {/* Favicon & Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* OpenGraph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.niloware.com.br/" />
        <meta
          property="og:title"
          content="Niloware | Criação de Sites Profissionais"
        />
        <meta
          property="og:description"
          content="A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!"
        />
        <meta
          property="og:image"
          content="https://www.niloware.com.br/og-image.jpg"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Niloware | Criação de Sites Profissionais"
        />
        <meta
          name="twitter:description"
          content="A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!"
        />
        <meta
          name="twitter:image"
          content="https://www.niloware.com.br/og-image.jpg"
        />
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
