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
<<<<<<< Updated upstream
  hideHeading?: boolean;
=======
  viewAll?: boolean;
>>>>>>> Stashed changes
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  limit = null,
<<<<<<< Updated upstream
  hideHeading = false,
=======
  viewAll = false,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      {!hideHeading && (
        <SectionHeading
          subheading="Ver Todos"
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
=======
      <SectionHeading
        subheading={viewAll ? "Voltar" : "Ver Todos"}
        heading="Portfólio"
        variant="row"
        link={viewAll ? "/" : "/portfolio"}
      />

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
>>>>>>> Stashed changes
      </div>
    </section>
  );
};

export default PortfolioSection;
