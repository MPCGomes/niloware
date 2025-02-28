export const metadata = {
  title: "Portfólio | Niloware",
  description:
    "Veja os projetos da Niloware e descubra como podemos ajudar sua empresa.",
  openGraph: {
    url: "https://www.niloware.com.br/portfolio",
    title: "Portfólio | Niloware",
    description:
      "Veja os projetos da Niloware e descubra como podemos ajudar sua empresa.",
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
