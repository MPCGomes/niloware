import React from 'react';
import Button from '@/src/components/Button/Button';
import { useTranslation } from '@/src/hooks/useTranslation';
import styles from './Hero.module.scss';

interface HeroTranslations {
  title: string;
  subtitle: string;
  cta: string;
}

const Hero: React.FC = () => {
  const { t } = useTranslation<HeroTranslations>('homePage', 'hero');

  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <h1>
          {t.title}
        </h1>
        <h3>
          {t.subtitle}
        </h3>
        <Button
          className={styles.button}
          link="#"
          text={t.cta}
        />
      </div>
    </header>
  );
};

export default Hero;
