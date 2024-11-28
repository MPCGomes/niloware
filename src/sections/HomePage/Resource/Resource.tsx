import React from 'react';
import styles from './Resource.module.scss';
import classNames from 'classnames';
import { FaDesktop, FaPaintBrush, FaRocket, FaShapes, FaCogs, FaHeadset } from 'react-icons/fa';
import { useTranslation } from '@/src/hooks/useTranslation';
import ResourceCard from '@/src/components/ResourceCard/ResourceCard';

interface ResourceCardData {
  title: string;
  description: string;
}

interface ResourceTranslations {
  title: string;
  cards: ResourceCardData[];
}

const Resource: React.FC = () => {
  const { t } = useTranslation<ResourceTranslations>('homePage', 'resources');

  const icons = [
    FaDesktop,
    FaPaintBrush,
    FaRocket,
    FaShapes,
    FaCogs,
    FaHeadset,
  ];

  if (!t.title || !t.cards) {
    return (
      <section className={styles.resources}>
        <div className={styles.container}>
          <h2 className={styles.subtitle}>
            Loading...
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.resources}>
      <div className={styles.container}>
        <h2 className={classNames(styles.subtitle)}>
          {t.title}
        </h2>
        <div className={styles.cards}>
          {t.cards.map((card, index) => (
            <ResourceCard
              key={index}
              icon={icons[index]}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resource;
