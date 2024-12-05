import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.scss';
import React from 'react'
import Link from 'next/link';
import { useTranslation } from '../../../src/hooks/useTranslation';

interface FooterTranslations {
    footer: {
        copyright: string;
    };
}

const Footer = () => {
    const { t } = useTranslation<FooterTranslations>('common', 'footer');

    if (!t || !t.footer) {
        return null;
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <h3 className={styles.logo}>
                        Niloware
                    </h3>
                    <div className={styles.socials}>
                        <Link
                            className={styles.social}
                            href=""
                        >
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.copyright}>
                        <p>
                            {t.footer.copyright}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
