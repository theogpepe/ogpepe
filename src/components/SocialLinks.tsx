import React from 'react';
import Image from 'next/image';
import styles from '@/styles/SocialLinks.module.css'; // Update path as needed

// SocialLinks Component
const SocialLinks: React.FC = () => {
    return (
        <div className={styles.socialContainer}>
            <div className={styles.row}>
                <a href="https://etherscan.io/token/0x4dfae3690b93c47470b03036A17B23C1Be05127C" target="_blank" rel="noopener noreferrer">
                    <Image width={64} height={64} src="/socials/etherscan.png" alt="Etherscan" className={styles.logoImage} />
                </a>
                <a href="https://www.dextools.io/app/es/ether/pair-explorer/0xa84181f223a042949e9040e42b44c64021802db6" target="_blank" rel="noopener noreferrer">
                    <Image width={64} height={64} src="/socials/dextools.png" alt="Dextools" className={styles.logoImage} />
                </a>
                <a href="https://www.coingecko.com/en/coins/the-original-pepe" target="_blank" rel="noopener noreferrer">
                    <Image width={64} height={64} src="/socials/coingecko.png" alt="Coingecko" className={styles.logoImage} />
                </a>
            </div>
            <div className={styles.row}>
                <a href="https://the-og-pepe.medium.com/" target="_blank" rel="noopener noreferrer">
                    <Image width={64} height={64} src="/socials/medium-logo.png" alt="Medium" className={styles.logoImage} />
                </a>
                <a href="https://github.com/theogpepe/" target="_blank" rel="noopener noreferrer">
                    <Image width={64} height={64} src="/socials/github-logo.png" alt="GitHub" className={styles.logoImage} />
                </a>
                <a href="https://app.uniswap.org/#/swap?outputCurrency=0x4dFae3690b93c47470b03036A17B23C1Be05127C" target="_blank" rel="noopener noreferrer">
                    <Image width={64} height={64} src="/images/uniswap.png" alt="Uniswap" className={styles.logoImage} />
                </a>
            </div>
            <div className={styles.row}>
                <a href="https://docs.pepex.app/" target="_blank" rel="noopener noreferrer">
                    <Image width={64} height={64} src="/socials/gitbook.png" alt="GitBook" className={styles.logoImage} />
                </a>

                <a href="https://twitter.com/theogpepe2020" target="_blank" rel="noopener noreferrer">
                    <Image width={64} height={64} src="/socials/x-logo.png" alt="Twitter" className={styles.logoImage} />
                </a>
                <a href="https://t.me/OgPeperc20" target="_blank" rel="noopener noreferrer">
                    <Image width={64} height={64} src="/socials/telegram-logo.png" alt="Telegram" className={styles.logoImage} />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;
