'use client';

import React from 'react';
import Footer from '@/src/components/Footer/Footer';
import Navbar from '@/src/components/Navbar/Navbar';
import PrivacyPolicy from '@/src/sections/PrivacyPage/PrivacyPolicy';
import './page.scss'


const Tos: React.FC = () => {
    return (
        <div>
            <Navbar link={''} ref={''} />
            <PrivacyPolicy />
            <Footer />
        </div>
    );
};

export default Tos;
