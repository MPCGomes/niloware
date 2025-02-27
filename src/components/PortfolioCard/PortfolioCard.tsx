import React from "react";
import styles from "./PortfolioCard.module.scss";
import Link from "next/link";

interface PortfolioCardProps {
  title: React.ReactNode;
  features: React.ReactNode[];
  imageBackground: string;
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  features,
  imageBackground,
  link,
}) => {
  return (
    <Link
      className={styles.portfolioCard}
      style={{
        backgroundImage: `url(${imageBackground})`
      }}
      href={link}
      target="_blank"
    >
      <p className={styles.title}>{title}</p>
      <div className={styles.featureContainer}>
        {features.map((feature, index) => (
          <p key={index} className={styles.feature}>
            {feature}
          </p>
        ))}
      </div>
    </Link>
  );
};

export default PortfolioCard;
