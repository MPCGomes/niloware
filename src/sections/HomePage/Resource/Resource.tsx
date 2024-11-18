import React from 'react';
import { FaPencilRuler } from 'react-icons/fa';
import classNames from 'classnames';

import { useTranslation } from '../../../hooks/useTranslation';
import ResourceCard from '@/src/components/ResourceCard/ResourceCard';

import styles from './Resource.module.scss';

const Resource: React.FC = () => {
  const { resource } = useTranslation();

  const icons = [
    FaPencilRuler,
    FaPencilRuler,
    FaPencilRuler,
    FaPencilRuler,
    FaPencilRuler,
    FaPencilRuler
  ];

  return (
    <section className={styles.resources}>
      <div className={styles.container}>
        <h2 className={classNames(
          styles.subtitle
        )}>
          {resource?.title}
        </h2>
        <div className={styles.cards}>
          {resource?.cards?.map((card, index) => (
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
  )
}

export default Resource