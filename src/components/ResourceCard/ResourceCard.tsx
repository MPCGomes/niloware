import React from 'react';
import styles from './ResourceCard.module.scss';

interface ResourceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.resourceCard}>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>
          {title}
        </p>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ResourceCard