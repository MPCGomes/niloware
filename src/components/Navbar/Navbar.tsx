import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { IoMdMenu } from 'react-icons/io';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

interface NavbarProps {
  links: { name: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Link href='/home'>
            <h3>
              Nilo<span>ware</span>
            </h3>
          </Link>

          <div
            className={classNames(styles.links, {
              [styles.open]: isOpen,
            })}
          >
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.rightSide}>
          <ThemeToggle />
          <LanguageToggle />
          <Link href={'#contact'}>
            <button className={styles.button}>Fale Conosco</button>
          </Link>
          <button onClick={toggleMenu} className={styles.menu}>
            <IoMdMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
