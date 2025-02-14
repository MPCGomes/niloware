import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  text: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text}) => {
  return (
    <button className={styles.btn}>
      {text}
    </button>
  )
}

export default Button