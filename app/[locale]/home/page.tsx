'use client';

import React from 'react';
import Footer from '@/src/components/Footer/Footer';
import Navbar from '@/src/components/Navbar/Navbar';
import Clients from '@/src/sections/HomePage/Clients/Clients';
import Contact from '@/src/sections/HomePage/Contact/Contact';
import Faq from '@/src/sections/HomePage/Faq/Faq';
import Hero from '@/src/sections/HomePage/Hero/Hero';
import Process from '@/src/sections/HomePage/Process/Process';
import Resource from '@/src/sections/HomePage/Resource/Resource';
import Services from '@/src/sections/HomePage/Services/Services';
import './page.scss'

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar
                link={'Recursos'}
                customRef={''}
            />
            <Hero />
            <Resource />
            <Process />
            <Clients />
            <Services />
            <Contact />
            <Faq />
            <Footer />
        </div>
    );
};

export default HomePage;