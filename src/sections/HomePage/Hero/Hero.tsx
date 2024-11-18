import React from 'react'
import styles from './Hero.module.scss'
import Button from '../../components/Button/Button'
import { useTranslation } from '../../../src/hooks/useTranslation';

const Hero: React.FC = () => {
  const { hero } = useTranslation();

  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <h1>
          {hero?.title}
        </h1>
        <h3>
          {hero?.subtitle}
        </h3>
        <Button
          link='#'
          text={hero?.cta}
        />
      </div>
    </header>
  )
}

export default Hero