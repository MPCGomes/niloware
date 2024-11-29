import React, { useState, useEffect } from 'react';
import styles from './Services.module.scss';
import { useTranslation } from '../../../hooks/useTranslation';
import { IoCheckmarkCircle } from 'react-icons/io5';

interface Plan {
    plan: string;
    description: string;
    price: number;
}

interface ServicesTranslations {
    title: string;
    plans: Plan[];
}

const Services: React.FC = () => {
    const { t } = useTranslation<ServicesTranslations>('homePage', 'services');

    const publicKey = 'APP_USR-dc03bb8e-92e4-4f3d-ae54-eed84351ec51';
    useMercadoPagoScript(publicKey);

    const [selectedPlan, setSelectedPlan] = useState(499.9);
    const [selectedPages, setSelectedPages] = useState(0);
    const [selectedHosting, setSelectedHosting] = useState(0);
    const [totalPrice, setTotalPrice] = useState(selectedPlan);

    useEffect(() => {
        setTotalPrice(selectedPlan + selectedPages + selectedHosting);
    }, [selectedPlan, selectedPages, selectedHosting]);

    const handlePayment = () => {
        try {
            if (!window.MercadoPago) {
                console.error('Mercado Pago SDK is not loaded.');
                return;
            }

            const mp = new window.MercadoPago(publicKey, { locale: 'pt-BR' });

            console.log('Initializing Mercado Pago Checkout');
            mp.checkout({
                preference: {
                    items: [
                        {
                            title: 'Custom Website Development',
                            description: 'Expresso, Landing Pages, Hosting/Support',
                            quantity: 1,
                            currency_id: 'BRL',
                            unit_price: totalPrice,
                        },
                    ],
                },
                autoOpen: true,
            });
        } catch (error) {
            console.error('Error during Mercado Pago checkout:', error);
        }
    };

    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>{t.title}</h2>
                </div>
                <div className={styles.dropdown}>
                    <label>
                        Tipo de Serviço:
                        <select
                            onChange={(e) => setSelectedPlan(parseFloat(e.target.value))}
                            defaultValue="499.9"
                        >
                            <option value="499.9">Expresso (R$ 499,90)</option>
                            <option value="999.9">Customizado (R$ 999,90)</option>
                        </select>
                    </label>
                    <label>
                        Páginas:
                        <select
                            onChange={(e) => setSelectedPages(parseFloat(e.target.value))}
                            defaultValue="0"
                        >
                            <option value="0">Landing Page (R$ 0)</option>
                            <option value="100">1-5 Páginas (+R$ 100)</option>
                            <option value="200">6-10 Páginas (+R$ 200)</option>
                        </select>
                    </label>
                    <label>
                        Hospedagem + Suporte:
                        <select
                            onChange={(e) => setSelectedHosting(parseFloat(e.target.value))}
                            defaultValue="0"
                        >
                            <option value="0">Nenhuma (R$ 0)</option>
                            <option value="29.9">Mensal (+R$ 29,90)</option>
                            <option value="299.9">Anual (+R$ 299,90)</option>
                        </select>
                    </label>
                </div>
                <div className={styles.total}>
                    <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
                    <button onClick={handlePayment}>Pagar com Mercado Pago</button>
                </div>
            </div>
        </section>
    );
};

const useMercadoPagoScript = (publicKey: string) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://sdk.mercadopago.com/js/v2';
        script.async = true;
        script.onload = () => {
            if (!window.MercadoPago) {
                console.error('Mercado Pago SDK failed to load.');
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [publicKey]);
};



export default Services;
