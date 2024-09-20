import React from 'react'
import styles from './Resource.module.scss'
import classNames from 'classnames';
import ResourceCard from '@/app/components/ResourceCard/ResourceCard';

const Resource = () => {
  return (
    <section className={styles.resources}>
        <div className={classNames(styles['resources-container'], 'container')}>
            <h2>Recursos</h2>
            <div className={styles['resources-cards']}>
                <ResourceCard title='Texto' description='Descrição'></ResourceCard>
                <ResourceCard title='Texto' description='Descrição'></ResourceCard>
                <ResourceCard title='Texto' description='Descrição'></ResourceCard>
                <ResourceCard title='Texto' description='Descrição'></ResourceCard>
                <ResourceCard title='Texto' description='Descrição'></ResourceCard>
                <ResourceCard title='Texto' description='Descrição'></ResourceCard>
            </div>
        </div>
    </section>
  )
}

export default Resource