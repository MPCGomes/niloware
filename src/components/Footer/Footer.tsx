import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.scss';
import React from 'react'
import Link from 'next/link';
import { useTranslation } from '../../../src/hooks/useTranslation';

interface FooterTranslations {
    copyright: string;
}

const Footer = () => {
    const { t } = useTranslation<FooterTranslations>('common', 'footer');

    console.log('Footer translations:', t);

    if (!t || !t.copyright) {
        console.warn('Footer translations not loaded:', t);
        return null;
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <h3 className={styles.logo}>Niloware</h3>
                    <div className={styles.socials}>
                        <Link className={styles.social} href="">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.copyright}>
                        <p>{t.copyright}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
