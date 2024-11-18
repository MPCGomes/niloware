import React, { useEffect, useState } from 'react'
import styles from './Clients.module.scss'
import CardCarousel from '../../../components/CardCarousel/CardCarousel';
import { HiOutlineExternalLink } from "react-icons/hi";
import cardsData from '../../../data/clientCards.json';
import { useTranslation } from '../../../hooks/useTranslation';

interface Card {
    title: string;
    image: string;
    mainTag: string;
    tag: string[];
}

const Clients: React.FC = () => {
    const [clientCards, setClientCards] = useState<Card[]>([]);
    const { clients } = useTranslation();

    useEffect(() => {
        setClientCards(cardsData.slice(0, 6));
    }, []);

    if (!clients) return null;

    return (
        <section className={styles.clients}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>
                        {clients?.title}
                    </h2>
                    <a
                        href=""
                    >
                        {clients?.viewAll}
                        <span>
                            <HiOutlineExternalLink />
                        </span>
                    </a>
                </div>
                <CardCarousel cards={clientCards} />
            </div>
        </section>
    )
}

export default Clients