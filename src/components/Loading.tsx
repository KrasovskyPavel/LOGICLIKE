import React from 'react';
import styles from '../styles/Loading.module.scss';

const Loading: React.FC = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <span>Загрузка...</span>
        </div>
    );
};

export default Loading;
