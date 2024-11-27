import React from 'react'
import CustomAccordion from '@/src/components/CustomAccordion/CustomAccordion';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './Faq.module.scss'

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