"use client";

import React, { useEffect, useState } from "react";
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
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[] | null>(
    null
  );

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch("/content/portfolio.json");
        const data = await response.json();
        if (data.length) setPortfolioItems(data);
      } catch {
        console.error("Erro ao carregar portfólio");
      }
    };

    fetchPortfolio();
  }, []);

  if (!portfolioItems) return null;

  const displayedItems = limit
    ? portfolioItems.slice(0, limit)
    : portfolioItems;

  return (
    <section className="container section">
      <SectionHeading
        subheading={portfolio ? "Voltar" : "Ver Todos"}
        heading="Portfólio"
        variant="row"
        link={portfolio ? "/" : "/portfolio"}
      />
      <div className={styles.portfolioGrid}>
        {displayedItems.map((item, index) => (
          <div key={index} className={styles[`grid${index + 1}`]}>
            <PortfolioCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
