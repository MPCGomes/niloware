import React from 'react'
import styles from './Faq.module.scss'
import CustomAccordion from '@/app/components/CustomAccordion/CustomAccordion';
import { useTranslation } from '../../../hooks/useTranslation';

const Faq: React.FC = () => {
  const { faq } = useTranslation();

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2>
          {faq?.title}
        </h2>
        <div>
          <CustomAccordion items={faq?.items || []} />
        </div>
      </div>
    </section>
  )
}

export default Faq