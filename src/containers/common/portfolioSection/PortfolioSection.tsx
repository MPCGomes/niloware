"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import PortfolioCard from "@/components/PortfolioCard/PortfolioCard";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./PortfolioSection.module.scss";

interface PortfolioItem {
  title: string;
  tags: string[];
  imageBackground: string;
  link: string;
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
        const response = await axios.get("/content/portfolio.json");
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
      ) : (
        <SectionHeading
          subheading="Voltar"
          heading="Portfólio"
          variant="row"
          link={"/"}
        />
      )}
      <div className={styles.portfolioGrid}>
        {displayedItems.map((item, index) => (
          <div key={index} className={styles[`grid${index + 1}`]}>
            <PortfolioCard
              title={item.title}
              tags={item.tags}
              imageBackground={item.imageBackground}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
