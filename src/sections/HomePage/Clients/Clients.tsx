import React, { useEffect, useState } from 'react';
import CardCarousel from '@/src/components/CardCarousel/CardCarousel';
import styles from './Clients.module.scss';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useTranslation } from '@/src/hooks/useTranslation';
import axios from 'axios';

interface ClientCard {
    id: number;
    client: string;
    tags: Array<string | { [key: string]: string }>;
    image: string;
    url: string;
}

interface ClientsTranslations {
    title: string;
    viewAll: string;
}

const Clients: React.FC = () => {
    const [clientCards, setClientCards] = useState<ClientCard[]>([]);
    const { locale, title, viewAll } = useTranslation<ClientsTranslations>('homePage', 'clients');

    useEffect(() => {
        const fetchClientCards = async () => {
            try {
                const response = await axios.get<ClientCard[]>('/data/portfolio.json');
                setClientCards(response.data);
            } catch (error) {
                console.error('Error fetching client cards:', error);
            }
        };
        fetchClientCards();
    }, []);

    const getTranslatedTags = (tags: ClientCard['tags']) => {
        return tags.map(tag => {
            if (typeof tag === 'string') return tag;
            if (tag[locale]) return tag[locale];
            console.warn(`Missing translation for tag: ${JSON.stringify(tag)} in locale: ${locale}`);
            return tag['pt-br'];
        });
    };

    const translatedCards = clientCards.map(card => ({
        ...card,
        tags: getTranslatedTags(card.tags),
    }));

    return (
        <section className={styles.clients}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>{title}</h2>
                    <a href="/portfolio" className={styles.viewAllLink}>
                        {viewAll}
                        <span>
                            <HiOutlineExternalLink />
                        </span>
                    </a>
                </div>
                <CardCarousel cards={translatedCards} />
            </div>
        </section>
    );
};

export default Clients;
