import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
            </div>
        </div>
    );
};

export default Card;
