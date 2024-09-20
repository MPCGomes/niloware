import React from 'react'
import classNames from 'classnames'
import styles from './Process.module.scss'
import ProcessButton from '@/app/components/ProcessButton/ProcessButton'

const Process = () => {
  return (
    <section className={styles.process}>
        <div className={classNames(styles['process-container'], 'container')}>
            <h2>Processo</h2>
            <div className={styles['process-details']}>
                <div className={styles['process-btn']}>
                    <ProcessButton></ProcessButton>
                    <ProcessButton></ProcessButton>
                    <ProcessButton></ProcessButton>
                    <ProcessButton></ProcessButton>
                </div>
                <div className={styles['process-text']}>
                    <h4>Título</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis a magna id dapibus. Quisque vitae ex eget elit scelerisque ullamcorper. Vivamus urna ante, rutrum ultrices facilisis in, auctor feugiat nisl.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Process