import React from 'react';
import CustomAccordion from '@/src/components/CustomAccordion/CustomAccordion';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './Faq.module.scss';

interface FaqQuestion {
  question: string;
  answer: string;
}

interface FaqTranslations {
  heading: string;
  questions: FaqQuestion[];
}

const Faq: React.FC = () => {
  const { t } = useTranslation<FaqTranslations>('homePage', 'faq');

  if (!t || !t.questions) {
    return null;
  }

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2>{t.heading}</h2>
        <div>
          <CustomAccordion
            items={t.questions.map((q) => ({
              title: q.question,
              content: q.answer,
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
