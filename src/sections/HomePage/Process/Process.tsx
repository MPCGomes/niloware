import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Process.module.scss';
import { FaPhoneAlt, FaClipboardList, FaCheckCircle, FaShareSquare } from 'react-icons/fa';
import Arrow from '../../../public/assets/arrow.png';
import { useTranslation } from '@/src/hooks/useTranslation';
import ProcessButton from '@/src/components/ProcessButton/ProcessButton';

const Process: React.FC = () => {
    const { process } = useTranslation();

    const icons = [
        FaPhoneAlt,
        FaClipboardList,
        FaCheckCircle,
        FaShareSquare
    ];

    return (
        <section className={styles.process}>
            <div className={styles.container}>
                <h2>
                    {process?.title}
                </h2>
                <div className={styles.processContainer}>
                    {process?.steps?.map((step, index) => (
                        <React.Fragment key={index}>
                            <ProcessButton
                                icon={icons[index]}
                                title={step.title}
                                description={step.description}
                            />
                            {index < process.steps.length - 1 && (
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
    )
}

export default Process