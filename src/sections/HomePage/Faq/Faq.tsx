import React from 'react';
import CustomAccordion from '@/src/components/CustomAccordion/CustomAccordion';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './Faq.module.scss';

interface FaqItem {
  title: string;
  content: string;
}

interface FaqTranslations {
  title: string;
  items: FaqItem[];
}

const Faq: React.FC = () => {
  const { title, items } = useTranslation<FaqTranslations>('homePage', 'faq');

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <div>
          <CustomAccordion items={items || []} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
