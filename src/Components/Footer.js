// src/components/Footer.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer>
            <p>Footer content in {theme} mode.</p>
        </footer>
    );
};

export default Footer;
