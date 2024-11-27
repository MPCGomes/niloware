import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames';

interface buttonProps {
  text?: string;
  link?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<buttonProps> = ({ text, link, className, type = 'button' }) => {
  if (type === 'submit' || type === 'reset') {
    return (
      <button
        type={type}
        className={classNames(styles.button, className)}
      >
        {text}
      </button>
    );
  }

  return (
    <a
      href={link}
      className={classNames(styles.button, className)}
    >
      {text}
    </a>
  );
};

export default Button;