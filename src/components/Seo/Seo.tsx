export default function Seo() {
  return (
    <head>
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon-192x192.png"
      />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

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
      <meta name="twitter:image" content="https://niloware.com/og-image.jpg" />
    </head>
  );
}
