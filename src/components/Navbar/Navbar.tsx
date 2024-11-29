import React, { useState } from 'react';
import styles from './Navbar.module.scss'
import classNames from 'classnames'
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Link href='/home'>
            <h3>Nilo
              <span>
                ware
              </span>
            </h3>
          </Link>

          <div className={classNames(
            styles.links,
            { [styles.open]: isOpen })
          }>
            <Link href='home'>
              Ínicio
            </Link>
            <Link href='/portfolio'>
              Portfólio
            </Link>
          </div>
        </div>
        <div className={styles.rightSide}>
          <ThemeToggle />
          <LanguageToggle />
          <button className={styles.button}>
            Fale Conosco
          </button>
          {/* Menu */}
          <button
            onClick={toggleMenu}
            className={styles.menu}>
            <IoMdMenu />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar