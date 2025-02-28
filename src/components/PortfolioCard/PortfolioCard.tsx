import React from "react";
import styles from "./PortfolioCard.module.scss";

interface PortfolioCardProps {
  title: React.ReactNode;
  tags: React.ReactNode[];
  imageBackground: string;
  isFirst: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  tags,
  imageBackground,
  isFirst,
}) => {
  return (
    <div
      className={styles.portfolioCard}
      style={{
        backgroundImage: `url(${imageBackground})`,
<<<<<<< Updated upstream
        height: isFirst ? "380px" : "230px",
=======
>>>>>>> Stashed changes
      }}
    >
      <p className={styles.title}>{title}</p>
      <div className={styles.tagContainer}>
        {tags.map((tag, index) => (
          <p key={index} className={styles.tag}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
