import React, { useContext } from 'react';
import { ThemeContext } from '@/src/context/ThemeContext';
import { IoMoon, IoSunny } from 'react-icons/io5';
import styles from './ThemeToggle.module.scss';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className={styles.toggleButton}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? <IoSunny /> : <IoMoon />}
        </button>
    );
};

export default ThemeToggle;
