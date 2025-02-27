"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import PortfolioCard from "@/components/PortfolioCard/PortfolioCard";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./PortfolioSection.module.scss";

interface PortfolioItem {
  title: string;
  features: string[];
  imageBackground: string;
}

interface PortfolioSectionProps {
  limit?: number | null;
  portfolio?: boolean;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  limit = null,
  portfolio = false,
}) => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get("/data/portfolio.json");
        setPortfolioItems(response.data);
      } catch (error) {
        console.error("Erro ao carregar portfólio:", error);
      }
    };

    fetchPortfolio();
  }, []);

  const displayedItems = limit
    ? portfolioItems.slice(0, limit)
    : portfolioItems;

  return (
    <section className="container section">
      {!portfolio ? (
        <SectionHeading
          subheading="Ver Todos"
          heading="Portfólio"
          variant="row"
          link={"/portfolio"}
        />
      ):(
        <SectionHeading
          subheading="Voltar"
          heading="Portfólio"
          variant="row"
          link={"/"}
        />
      ) }

      <div className={styles.portfolioGrid}>
        <div className={styles.grid1}>
          <PortfolioCard
            title={"Litoral Pisos"}
            features={["Landing Page", "Construção"]}
            imageBackground={"./portfolio/litoral-pisos.png"}
            link={"https://litoralpisos.com.br/"}
          />
        </div>
        <div className={styles.grid2}>
          <PortfolioCard
            title={"Gesso Andrade"}
            features={["Landing Page", "Construção"]}
            imageBackground={"./portfolio/gesso-andrade.png"}
            link={"https://gessoandrade.com.br/"}
          />
        </div>
        <div className={styles.grid3}>
          <PortfolioCard
            title={"Clínica Ápice"}
            features={["Landing Page", "Saúde"]}
            imageBackground={"./portfolio/clinica-apice.png"}
            link={"https://apiceclinicamult.com.br/"}
          />
        </div>
        <div className={styles.grid4}>
          <PortfolioCard
            title={"Pousada Lilabella"}
            features={["Landing Page", "Hotelaria"]}
            imageBackground={"./portfolio/pousada-lilabella.png"}
            link={"https://pousadalilabella.com.br/"}
          />
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
