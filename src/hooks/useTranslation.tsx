import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

export const useTranslation = <T extends Record<string, any>>(
    page: string,
    section: string
) => {
    const [translations, setTranslations] = useState<T>({} as T);
    const params = useParams();

    const localeParam = params?.locale;
    const locale = Array.isArray(localeParam) ? localeParam[0] : localeParam || 'pt-br';

    useEffect(() => {
        const loadTranslations = async () => {
            if (!page || !section) {
                console.error('Page or section is undefined in useTranslation hook.');
                return;
            }

            try {
                const res = await axios.get<T>(`/locales/${locale}/${page}/${section}.json`);
                setTranslations(res.data);
            } catch (error) {
                console.error(`Error loading translations for ${page}/${section}:`, error);
            }
        };

        loadTranslations();
    }, [locale, page, section]);

    return { t: translations, locale };
};
