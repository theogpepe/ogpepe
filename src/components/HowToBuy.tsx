import React from 'react';
import Image from 'next/image';
import styles from '@/styles/HowToBuy.module.css';

// HowToBuy Component
const HowToBuy: React.FC = () => {
    return (
        <div className={styles.howToBuyContainer}>
        <div className={styles.howToBuyContent}>
        <h2>How to Buy?</h2>
            <p>Ready to join the revolution? Buying Pepe is simple:</p>
            <div className={styles.buySteps}>
                <div className={styles.buyStep}>
                    <div className={styles.imageRow}>
                        <div className={styles.imageContainer}>
                            <a href="https://app.uniswap.org/swap?outputCurrency=0x4dfae3690b93c47470b03036a17b23c1be05127c" target="_blank" rel="noopener noreferrer">
                                <Image
                                    width={64}
                                    height={64}
                                    src="/images/uniswap.png"
                                    alt="Uniswap"
                                    className={styles.stepImage}
                                />
                            </a>
                        </div>
                    </div>
                    <p className={styles.stepText}>Uniswap</p>
                </div>

                <div className={styles.buyStep}>
                <div className={styles.imageRow}>

                    <div className={styles.imageContainer}>
                        <Image
                            width={64}
                            height={64}
                            src="/images/walletlogo.png"
                            alt="Connect your wallet"
                            className={styles.stepImage}
                        />
                    </div>
                    </div>
                    <p className={styles.stepText}>Connect your wallet</p>
                </div>
                <div className={styles.buyStep}>
                <div className={styles.imageRow}>

                    <div className={styles.imageContainer}>
                        <Image
                            width={64}
                            height={64}
                            src="/images/coins.png"
                            alt="Swap ETH for Pepe"
                            className={styles.stepImage}
                        />
                    </div>
                    </div>
                    <p className={styles.stepText}>Swap ETH for Pepe</p>
                </div>
            </div>
            </div>
            </div>
        );
};

export default HowToBuy;
