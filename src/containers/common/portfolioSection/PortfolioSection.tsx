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
  hideHeading?: boolean;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  limit = null,
  hideHeading = false,
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
      {!hideHeading && (
        <SectionHeading
          subheading="Ver Todos os Projetos"
          heading="Portfólio"
          variant="row"
        />
      )}

      <div className={styles.portfolioGrid}>
        {displayedItems.length > 0 && (
          <PortfolioCard {...displayedItems[0]} isFirst={true} />
        )}

        <div className={styles.row}>
          {displayedItems.slice(1).map((item, index) => (
            <PortfolioCard key={index} {...item} isFirst={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
