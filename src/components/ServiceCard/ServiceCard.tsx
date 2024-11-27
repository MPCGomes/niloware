import React from 'react'
import styles from './ServiceCard.module.scss'
import Button from '../Button/Button';

interface ClientCardProps {
    plan: string;
    description: string;
    price: string;
    siteItem: React.ReactNode;
    textPrice: string;
    buttonText: string;
    extraPrice: string;
}

const ServiceCard: React.FC<ClientCardProps> = ({ plan, description, price, siteItem, textPrice, buttonText, extraPrice }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p className={styles.plan}>
                    {plan}
                </p>
                <p className={styles.description}>
                    {description}
                </p>
                <p className={styles.price}>
                    {textPrice}
                    <span>
                        {price}
                    </span>
                </p>
                <p className={styles.extraPrice}>
                    {extraPrice}
                </p>
                <Button
                    text={buttonText}
                    link={''}
                    className={styles.customWidth}
                />
            </div>
            <div className={styles.list}>
                <div className={styles.site}>
                    <ul>
                        <li>
                            {siteItem}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard