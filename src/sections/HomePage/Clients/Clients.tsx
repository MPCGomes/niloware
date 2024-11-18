import React, { useEffect, useState } from 'react';
import CardCarousel from '@/src/components/CardCarousel/CardCarousel';
import { useParams } from 'next/navigation';

interface ClientCard {
    id: number;
    clientName: string;
    websiteUrl: string;
    imageUrl: string;
    tags: string[];
}

const Clients: React.FC = () => {
    const params = useParams();
    const locale = params.locale || 'en-us';

    const [clientCards, setClientCards] = useState<ClientCard[]>([]);

    useEffect(() => {
        const fetchClientCards = async () => {
            const response = await fetch(`/api/client-cards?locale=${locale}`);
            const data = await response.json();
            setClientCards(data);
        };
        fetchClientCards();
    }, [locale]);

    return (
        <section>
            <CardCarousel cards={clientCards} />
        </section>
    );
};

export default Clients;
