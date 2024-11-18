import React from 'react';
import styles from './ProcessButton.module.scss';
import classNames from 'classnames';

interface ProcessButtonProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ProcessButton: React.FC<ProcessButtonProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.processButton}>
      <Icon className={styles.icon} />
      <div>
        <p className={styles.title}>
          {title}
        </p>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessButton;