import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* Indexing Instructions */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Metadata */}
        <meta
          name="title"
          content="Niloware | Criação de Sites Profissionais"
        />
        <meta
          name="description"
          content="A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!"
        />
        <meta
          name="keywords"
          content="criação de sites, desenvolvimento web, agência de sites, sites profissionais, Niloware"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://niloware.com" />
        <meta
          property="og:title"
          content="Niloware | Criação de Sites Profissionais"
        />
        <meta
          property="og:description"
          content="A Niloware é uma agência especializada na criação de sites profissionais para empresas. Peça um orçamento agora!"
        />
        <meta property="og:image" content="https://niloware.com/og-image.jpg" />

        {/* Twitter */}
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
          content="https://niloware.com/og-image.jpg"
        />

        {/* Favicon & Manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
