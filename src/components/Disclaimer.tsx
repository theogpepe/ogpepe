import React from 'react';
import styles from '@/styles/Disclaimer.module.css'; // Update path as needed
import Image from 'next/image';

const Disclaimer: React.FC = () => {
    return (
        <div className={styles.disclaimerContainer}>

            <h1 className={styles.title}>$PEPE Disclaimer</h1>
            
            <div className={styles.section}>
                <h2 className={styles.subtitle}>Important Notice:</h2>
                <div className={styles.text}>
                    <h3 className={styles.heading}>No Intrinsic Value & High Risk</h3>
                    <p>$PEPE is a memecoin with no intrinsic value or expectation of financial return. Engaging with $PEPE involves a high risk, including the possibility of total financial loss. It is not a store of value, and additional tokens may be created, which could further impact its value.</p>
                </div>
                <div className={styles.text}>
                    <h3 className={styles.heading}>Purpose & Intended Use</h3>
                    <p>$PEPE exists solely for experimentation, learning, and entertainment. The PepeX.app platform is designed for these purposes, but $PEPE is not a platform token. Its use on PepeX should not be interpreted as giving $PEPE any inherent value or utility beyond its experimental nature.</p>
                </div>
                <div className={styles.text}>
                    <h3 className={styles.heading}>Risk Acknowledgment & Responsibility</h3>
                    <p>By interacting with $PEPE, you acknowledge the high-risk nature of this token and accept full responsibility for any actions taken, including financial losses. The developers and moderators of $PEPE disclaim all liability for any financial loss or damages incurred. Your participation is entirely at your own risk.</p>
                </div>
                <div className={styles.text}>
                    <h3 className={styles.heading}>Community Engagement & Conduct</h3>
                    <p>Participation in the $PEPE community, including on social media, implies acceptance of social norms and community guidelines. You are encouraged to foster a positive meme ecosystem and engage in the sharing of ideas, while respecting the limits of freedom of expression.</p>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
