import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Ecosystem.module.css'; // Update path as needed

// Ecosystem Component
const Ecosystem: React.FC = () => {
    return (
        <div className={styles.ecosystemContainer}>
            <h2>The WOJAK-PEPE-CHAD Ecosystem</h2>
            <p>
                Our ecosystem is intricately designed around three core tokens: <strong>WOJAK</strong>,
                <strong>PEPE</strong>, and <strong>CHAD</strong>. Each token plays a unique role
                in fostering a dynamic and interconnected environment. Here’s a brief overview:
            </p>
            <div className={styles.tokenSection}>
                <div className={styles.token}>
                    <Image
                        src="/images/token/wojak.png" // Update with the correct path
                        alt="Wojak"
                        width={100}
                        height={100}
                        className={styles.tokenImage}
                    />
                    <h3>WOJAK</h3>
                    <p>
                        WOJAK is a foundational element:
                    </p>
                    <p>
                        Stake WOJAK to accumulate PEPE rewards
                    </p>
                    <a href="https://wojak.farm" target="_blank" rel="noopener noreferrer">
                        Learn More
                    </a>
                </div>
                <div className={styles.token}>
                    <Image
                        src="/logo.png" // Update with the correct path
                        alt="Pepe"
                        width={100}
                        height={100}
                        className={styles.tokenImage}
                    />
                    <h3>PEPE</h3>
                    <p>
                        PEPE adds dynamism and utility to the ecosystem, creating opportunities
                        for trading, staking and participating in community initiatives.
                    </p>
                    <a href="https://ogpepe.io" target="_blank" rel="noopener noreferrer">
                        Learn More
                    </a>
                </div>
                <div className={styles.token}>
                    <Image
                        src="/images/token/chad.png" // Update with the correct path
                        alt="Chad"
                        width={100}
                        height={100}
                        className={styles.tokenImage}
                    />
                    <h3>CHAD</h3>
                    <p>
                        CHAD enhances the ecosystem by capturing value through fee collection and strategic tokenomics design.
                    </p>
                    <a href="https://chads.meme" target="_blank" rel="noopener noreferrer">
                        Learn More
                    </a>
                </div>
            </div>
            <Image
                src="/images/PepeXtext.png" // Update with the correct path
                alt="PepeX"
                width={543}
                height={196}
                className={styles.tokenImage}
            />
            <p>
                The <strong>PepeX DEX</strong> is our decentralized exchange platform, designed
                to facilitate seamless trading and liquidity provision across the ecosystem.
                It enables users to trade PEPE, CHAD, WOJAK and other tokens with minimal fees and high efficiency.
            </p>
            <a href="https://pepex.app" target="_blank" rel="noopener noreferrer" className={styles.pepexLink}>
                Visit PepeX DEX
            </a>
        </div>
    );
};

export default Ecosystem;
