'use client';

import { ReactNode } from 'react';
import ThemeProvider from '@/src/components/ThemeProvider/ThemeProvider';
import '../styles/globals.scss';

export default function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { locale: string };
}) {
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
