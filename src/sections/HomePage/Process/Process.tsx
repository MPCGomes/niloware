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

interface Process {
    title: string;
    steps: Step[];
}

const ProcessComponent: React.FC = () => {
    const { title, steps } = useTranslation<Process>('homePage', 'process');

    const icons = [FaPhoneAlt, FaClipboardList, FaCheckCircle, FaShareSquare];

    return (
        <section className={styles.process}>
            <div className={styles.container}>
                <h2>{title}</h2>
                <div className={styles.processContainer}>
                    {steps?.map((step, index) => (
                        <React.Fragment key={index}>
                            <ProcessButton
                                icon={icons[index]}
                                title={step.title}
                                description={step.description}
                            />
                            {index < steps.length - 1 && (
                                <Image className={styles.arrow} src={Arrow} alt="arrow" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessComponent;
