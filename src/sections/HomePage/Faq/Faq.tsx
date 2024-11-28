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
  const { t } = useTranslation<FaqTranslations>('homePage', 'faq');

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2>
          {t.title}
        </h2>
        <div>
          <CustomAccordion items={t.items || []} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
