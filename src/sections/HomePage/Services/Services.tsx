import React from 'react';
import styles from './Services.module.scss';
import ServiceCard from '../../../components/ServiceCard/ServiceCard';
import { useTranslation } from '../../../hooks/useTranslation';
import { IoCheckmarkCircle } from 'react-icons/io5';

const Services: React.FC = () => {
    const { services } = useTranslation();
    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>
                        {services?.title}
                    </h2>
                </div>
                <div className={styles.card}>
                    {services?.plans?.map((plan, index) => (
                        <ServiceCard
                            key={index}
                            plan={plan.plan}
                            description={plan.description}
                            textPrice={plan.textPrice}
                            price={plan.price}
                            siteItem={(
                                <ul>
                                    {plan.siteItems.map((item, i) => (
                                        <li key={i}>
                                            <span><IoCheckmarkCircle /></span> {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            buttonText={plan.buttonText}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services