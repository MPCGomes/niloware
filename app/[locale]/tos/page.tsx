'use client';

import Footer from '@/src/components/Footer/Footer';
import Navbar from '@/src/components/Navbar/Navbar';
import TermsService from '@/src/sections/TosPage/TermsService';
import './page.scss'
import React from 'react';


const Tos: React.FC = () => {
    return (
        <div>
            <Navbar link={''} customRef={''} />
            <TermsService />
            <Footer />
        </div>
    );
};

export default Tos;
