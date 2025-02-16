"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import PortfolioCard from "../../../components/PortfolioCard/PortfolioCard";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./PortfolioSection.module.scss";

interface PortfolioItem {
  title: string;
  feature: string;
  imageBackground: string;
  height: string;
  fullWidth: boolean;
}

const PortfolioSection: React.FC = () => {
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

  return (
    <section className="container section">
      <SectionHeading subheading="Nosso Trabalho" heading="Portfólio" />

      <div className={styles.portfolioGrid}>
        {portfolioItems.length > 0 && <PortfolioCard {...portfolioItems[0]} />}

        <div className={styles.row}>
          {portfolioItems.slice(1).map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
