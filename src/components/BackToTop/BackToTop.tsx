import React from 'react'
import styles from './BackToTop.module.scss'
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  return (
    <button className={styles.backToTop}>
      <a href="#">
        <IoIosArrowUp />
      </a>
    </button>
  )
}

export default BackToTop