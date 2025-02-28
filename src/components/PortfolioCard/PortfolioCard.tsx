import React from "react";
import styles from "./PortfolioCard.module.scss";
import Link from "next/link";

interface PortfolioCardProps {
  title: React.ReactNode;
  tags: React.ReactNode[];
  imageBackground: string;
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  tags,
  imageBackground,
  link,
}) => {
  return (
    <Link
      className={styles.portfolioCard}
      style={{
        backgroundImage: `url(${imageBackground})`,
<<<<<<< Updated upstream
        height: isFirst ? "380px" : "230px",
=======
>>>>>>> Stashed changes
        backgroundImage: `url(${imageBackground})`
      }}
      href={link}
      target="_blank"
    >
      <p className={styles.title}>{title}</p>
      <div className={styles.tagContainer}>
        {tags.map((tag, index) => (
          <p key={index} className={styles.tag}>
            {tag}
          </p>
        ))}
      </div>
    </Link>
  );
};

export default PortfolioCard;
