import { ReactNode } from 'react';
import { ThemeProvider } from '@/src/context/ThemeContext';
import '../../styles/globals.scss';

export default async function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    const { locale } = await params;

    return (
        <html lang={locale}>
            <body>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
