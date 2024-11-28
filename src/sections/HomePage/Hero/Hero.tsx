// Hero.tsx
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
  const { title, subtitle, cta } = useTranslation<HeroTranslations>('homePage', 'hero');

  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <Button link="#" text={cta} />
      </div>
    </header>
  );
};

export default Hero;
