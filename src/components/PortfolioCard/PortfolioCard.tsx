import React from "react";
import styles from "./PortfolioCard.module.scss";

interface PortfolioCardProps {
  title: React.ReactNode;
  features: React.ReactNode[];
  imageBackground: string;
  isFirst: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  features,
  imageBackground,
  isFirst,
}) => {
  return (
    <div
      className={styles.portfolioCard}
      style={{
        backgroundImage: `url(${imageBackground})`,
        height: isFirst ? "380px" : "230px",
      }}
    >
      <p className={styles.title}>{title}</p>
      <div className={styles.featureContainer}>
        {features.map((feature, index) => (
          <p key={index} className={styles.feature}>
            {feature}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
