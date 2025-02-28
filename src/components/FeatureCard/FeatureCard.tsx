import React from "react";
import styles from "./FeatureCard.module.scss";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  iconColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconColor,
}) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.icon} style={{ color: iconColor }}>
        {icon}
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeatureCard;
