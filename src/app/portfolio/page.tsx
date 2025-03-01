export const metadata = {
  title: "Portfólio | Niloware",
  description:
    "Confira os sites profissionais desenvolvidos pela Niloware para empresas de diversos segmentos. Transforme sua presença online!",
  openGraph: {
    url: "https://www.niloware.com.br/portfolio/",
    title: "Portfólio | Niloware",
    description:
      "Confira os sites profissionais desenvolvidos pela Niloware para empresas de diversos segmentos. Transforme sua presença online!",
    images: [
      {
        url: "https://www.niloware.com.br/portfolio-og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

import PortfolioSection from "@/containers/common/portfolioSection/PortfolioSection";

export default function PortfolioPage() {
  return <PortfolioSection portfolio />;
}
