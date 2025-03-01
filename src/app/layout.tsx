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

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />

        {/* Apple Touch Icon (iOS) */}
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />

        {/* Android Chrome Icons (para atalhos em Android e PWAs) */}
        <link
          rel="icon"
          href="/android-chrome-192x192.png"
          sizes="192x192"
          type="image/png"
        />
        <link
          rel="icon"
          href="/android-chrome-512x512.png"
          sizes="512x512"
          type="image/png"
        />

        {/* Manifest para Progressive Web App (PWA) */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* OpenGraph para redes sociais (Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Criação de Sites Profissionais | Niloware"
        />
        <meta
          property="og:description"
          content="A Niloware cria sites modernos e otimizados para empresas. Peça um orçamento agora!"
        />
        <meta
          property="og:image"
          content="https://www.niloware.com.br/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.niloware.com.br/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Criação de Sites Profissionais | Niloware"
        />
        <meta
          name="twitter:description"
          content="A Niloware cria sites modernos e otimizados para empresas. Peça um orçamento agora!"
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
