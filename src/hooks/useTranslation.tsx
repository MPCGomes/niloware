import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

export const useTranslation = <T extends Record<string, any>>(page: string, section: string) => {
    const [translations, setTranslations] = useState<T>({} as T);
    const params = useParams();

    const localeParam = params.locale;
    const locale = Array.isArray(localeParam) ? localeParam[0] : localeParam || 'pt-br';

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const res = await axios.get<T>(`/locales/${locale}/${page}/${section}.json`);
                setTranslations(res.data);
            } catch (error) {
                console.error('Error loading translations:', error);
            }
        };

        loadTranslations();
    }, [locale, page, section]);

    return { t: translations, locale };
};
