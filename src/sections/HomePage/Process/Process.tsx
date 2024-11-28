import React from 'react';
import Image from 'next/image';
import styles from './Process.module.scss';
import { FaPhoneAlt, FaClipboardList, FaCheckCircle, FaShareSquare } from 'react-icons/fa';
import Arrow from '@/public/assets/homePage/arrow.png';
import { useTranslation } from '@/src/hooks/useTranslation';
import ProcessButton from '@/src/components/ProcessButton/ProcessButton';

interface Step {
    title: string;
    description: string;
}

interface ProcessTranslations {
    title: string;
    steps: Step[];
}

const ProcessComponent: React.FC = () => {
    const { t } = useTranslation<ProcessTranslations>('homePage', 'process');

    const icons = [FaPhoneAlt, FaClipboardList, FaCheckCircle, FaShareSquare];

    return (
        <section className={styles.process}>
            <div className={styles.container}>
                <h2>
                    {t.title}
                </h2>
                <div className={styles.processContainer}>
                    {t.steps?.map((step, index) => (
                        <React.Fragment key={index}>
                            <ProcessButton
                                icon={icons[index]}
                                title={step.title}
                                description={step.description}
                            />
                            {index < t.steps.length - 1 && (
                                <Image
                                    className={styles.arrow}
                                    src={Arrow}
                                    alt="arrow"
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessComponent;
