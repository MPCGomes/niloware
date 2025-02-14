import React from "react";
import styles from "./PortfolioCard.module.scss";

interface PortfolioCardProps {
  title: React.ReactNode;
  feature: React.ReactNode;
  imageBackground: string;
  height: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  feature,
  imageBackground,
  height,
}) => {
  return (
    <div
      className={styles.portfolioCard}
      style={{ backgroundImage: `url(${imageBackground})`, 
      height: height }}
    >
      <p className={styles.title}>{title}</p>
      <div className={styles.featureContainer}>
        <p className={styles.feature}>{feature}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
