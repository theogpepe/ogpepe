import React from 'react';
import Image from 'next/image';
import styles from '@/styles/HowToBuy.module.css';

// HowToBuy Component
const HowToBuy: React.FC = () => {
    return (
        <div className={styles.howToBuyContainer}>
            <h2>How to Buy?</h2>
            <p>Ready to join the revolution? Buying Pepe is simple:</p>
            <div className={styles.buySteps}>
                <div className={styles.buyStep}>
                    <div className={styles.imageRow}>
                        <div className={styles.imageContainer}>
                            <Image
                                width={50}
                                height={50}
                                src="/images/roadmap-icons/pepex.png"
                                alt="PepeX"
                                className={styles.stepImage}
                            />
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                width={50}
                                height={50}
                                src="/images/uniswap.png"
                                alt="Uniswap"
                                className={styles.stepImage}
                            />
                        </div>
                    </div>
                    <p className={styles.stepText}>PepeX | Uniswap</p>
                </div>
                <div className={styles.buyStep}>
                    <div className={styles.imageContainer}>
                        <Image
                            width={50}
                            height={50}
                            src="/images/walletlogo.png"
                            alt="Connect your wallet"
                            className={styles.stepImage}
                        />
                    </div>
                    <p className={styles.stepText}>Connect your wallet</p>
                </div>
                <div className={styles.buyStep}>
                    <div className={styles.imageContainer}>
                        <Image
                            width={50}
                            height={50}
                            src="/images/coins.png"
                            alt="Swap ETH for Pepe"
                            className={styles.stepImage}
                        />
                    </div>
                    <p className={styles.stepText}>Swap ETH for Pepe</p>
                </div>
            </div>
            <div className={styles.docs}>
                <p>For a detailed guide</p>
                <br></br>
                <p>
                    <a href="https://docs.pepex.app" target="_blank" rel="noopener noreferrer">
                        Click Here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default HowToBuy;
