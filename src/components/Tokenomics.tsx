import React from 'react';
import styles from '@/styles/Tokenomics.module.css'; // Update path as needed

// Tokenomics Component
const Tokenomics: React.FC = () => {
    return (
        <div className={styles.tokenomicsContainer}>
            <h2>Tokenomics</h2>
            <div className={styles.tokenomicsContent}>
                <h3><strong>Supply:</strong> 37,321</h3>
                <h3><strong>Tax:</strong> 0%</h3>
            </div>
        </div>
    );
};

export default Tokenomics;
