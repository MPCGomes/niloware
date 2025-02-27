import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Niloware | Criação de Sites Profissionais</title>
        <meta
          name="description"
          content="A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!"
        />
        <meta name="robots" content="index, follow" />

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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "Inter, sans-serif" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
