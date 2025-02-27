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
            title={"Eflyer"}
            features={["Otimização SEO", "Landing Page"]}
            imageBackground={"./portfolio/portfolio1.jpg"}
            link={"#"}
          />
        </div>
        <div className={styles.grid2}>
          <PortfolioCard
            title={"Eflyer"}
            features={["Otimização SEO", "Landing Page"]}
            imageBackground={"./portfolio/portfolio2.jpg"}
            link={"#"}
          />
        </div>
        <div className={styles.grid3}>
          <PortfolioCard
            title={"Eflyer"}
            features={["Otimização SEO", "Landing Page"]}
            imageBackground={"./portfolio/portfolio3.jpg"}
            link={"#"}
          />
        </div>
        <div className={styles.grid4}>
          <PortfolioCard
            title={"Eflyer"}
            features={["Otimização SEO", "Landing Page"]}
            imageBackground={"./portfolio/portfolio4.jpg"}
            link={"#"}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
