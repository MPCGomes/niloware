import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";
import { RootState } from '../../store/store';
import styles from './ThemeToggle.module.scss';
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeToggle: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    if (!isMounted) return null;

    return (
        <button
            className={styles.toggleButton}
            onClick={handleToggle}
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? <IoMoon /> : <IoSunny />}
        </button>
    );
};

export default ThemeToggle;