'use client';

import { ReactNode } from 'react';
import ThemeProvider from '@/src/components/ThemeProvider/ThemeProvider';
import '../../styles/globals.scss';

export default async function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { locale: string };
}) {

    const locale = await Promise.resolve(params.locale);

    return (
        <ThemeProvider>
            <html lang={params.locale}>
                <body>
                    {children}
                </body>
            </html>
        </ThemeProvider>
    );
}
