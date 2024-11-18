import React from 'react';
import { FaPencilRuler } from 'react-icons/fa';
import Image from 'next/image';

import { useTranslation } from '@/src/hooks/useTranslation';
import ProcessButton from '@/src/components/ProcessButton/ProcessButton';
import Arrow from '../../../../public/assets/arrow.png';

import styles from './Process.module.scss';

const Process: React.FC = () => {
    const { process } = useTranslation();

    const icons = [
        FaPencilRuler,
        FaPencilRuler,
        FaPencilRuler,
        FaPencilRuler
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