import React from 'react'
import styles from './Resource.module.scss'
import classNames from 'classnames';
import ResourceCard from '@/app/components/ResourceCard/ResourceCard';
import { FaPencilRuler } from 'react-icons/fa';
import { useTranslation } from '../../../hooks/useTranslation';

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