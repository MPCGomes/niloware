'use client'

import Footer from '@/src/components/Footer/Footer'
import Navbar from '@/src/components/Navbar/Navbar'
import React from 'react'
import styles from './page.module.scss'

const page = () => {
  const links = [
    { name: 'Início', url: '/home' },
    { name: 'Galeria', url: '/portfolio' },
  ];

  return (
    <div>
      <Navbar
        links={links}
      />
      <Footer />
    </div>
  )
}

export default page