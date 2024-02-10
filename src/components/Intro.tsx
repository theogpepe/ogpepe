import React, { useEffect, useState } from 'react';
import { SwapWidget, Theme } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { MY_TOKEN_LIST } from '../utils/constants';
import styles from "@/styles/DEX.module.css";
import Image from 'next/image';


const TimeSinceDeployment = () => {
    const [timeSinceDeployment, setTimeSinceDeployment] = useState('');

    useEffect(() => {
        const deploymentTimestamp = 1602340728; // Replace with actual deployment timestamp
        const deploymentTime = new Date(deploymentTimestamp * 1000);

        const interval = setInterval(() => {
            const now = new Date();
            const timeDifference = now.getTime() - deploymentTime.getTime();

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setTimeSinceDeployment(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.timerInfo}>
            <p className={styles.timer}>Age: {timeSinceDeployment}</p>
        </div>
    );
};

// Utility function to format currency values
function formatCurrency(value: string): string {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
        return 'N/A'; // Return 'N/A' if value is not a valid number
    }

    if (numValue < 1000) {
        return `$${numValue.toFixed(2)}`;
    } else if (numValue < 1000000) {
        return `$${(numValue / 1000).toFixed(1)}k`;
    } else {
        return `$${(numValue / 1000000).toFixed(2)}m`;
    }
}

const SocialLinks = () => {
    return (
        <div className={styles.socialContainer}>
            <div className={styles.row}>
                <a href="https://twitter.com/theogpepe2020" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/x-logo.png" alt="Twitter" className={styles.logoImage} />
                </a>
                <a href="https://t.me/OgPeperc20" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/telegram-logo.png" alt="Telegram" className={styles.logoImage} />
                </a>
                <a href="https://www.dextools.io/app/es/ether/pair-explorer/0xa84181f223a042949e9040e42b44c50021802db6" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/dextools-logo.png" alt="Dextools" className={styles.logoImage} />
                </a>
            </div>
            <div className={styles.row}>
                <a href="https://app.uniswap.org/#/swap?outputCurrency=0x4dFae3690b93c47470b03036A17B23C1Be05127C" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/uniswap-logo.png" alt="Uniswap" className={styles.logoImage} />
                </a>
                <a href="https://the-og-pepe.medium.com/" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/medium-logo.png" alt="Medium" className={styles.logoImage} />
                </a>
                <a href="https://github.com/theogpepe/" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/github-logo.png" alt="Medium" className={styles.logoImage} />
                </a>
            </div>
        </div>
    );
};


const Intro: React.FC = () => {
    return (
        <div className={styles.container}>
            {/* Header with Title and Address */}
            <div className={styles.addressSection}>
                    <a href="https://etherscan.io/token/0x4dfae3690b93c47470b03036A17B23C1Be05127C"
                        target="_blank" rel="noopener noreferrer"
                        className={styles.addressLink}>
                        0x4dFae3690b93c47470b03036A17B23C1Be05127C
                    </a>
                </div>
            <div className={styles.header}>
                
                <div className={styles.logoAddress}>
                    <div className={styles.logoSection}>
                        <Image
                            src="/logo.png"
                            alt="The Original Pepe Logo"
                            width={64}
                            height={64}
                        />
                    </div>
                    <h1 className={styles.title}>The Original Pepe </h1>
                </div>
            </div>
            {/* Main Content with Stats and Social Links */}
            <div className={styles.mainContent}>

                <div className={styles.socialContainer}>
                    <SocialLinks />
                </div>
            </div>


            {/* Timer at the Bottom */}
            <TimeSinceDeployment />
        </div>
    );
};


export default Intro;
