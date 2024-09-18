import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Description.module.css';
import TimeSinceDeployment from './TimeSinceDeployment';
import SocialLinks from './SocialLinks';
import Tokenomics from './Tokenomics';

// Description component for introductory text
const DescriptionSection: React.FC = () => {
    return (
        <div className={styles.description}>
            <h1>Unleashing the Power of Memecoins</h1>
            <p>One of the oldest Pepe on the Ethereum</p>
            {/* Header with Title and Address */}
            <div className={styles.addressSection}>
                <a href="https://etherscan.io/token/0x4dfae3690b93c47470b03036A17B23C1Be05127C"
                    target="_blank" rel="noopener noreferrer"
                    className={styles.addressLink}>
                    0x4dFae3690b93c47470b03036A17B23C1Be05127C
                </a>
            </div>
            <TimeSinceDeployment />
        </div>
    );
};

// Introduction component with image and text side by side
const IntroductionSection: React.FC = () => {
    return (
        <div className={styles.introSection}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/logo.png" // Replace with the correct path to the image you uploaded
                    alt="The Original Pepe"
                    width={200}
                    height={200}
                />
            </div>
            <div className={styles.introText}>
                <p>
                    Pepe isn&apos;t just another meme token;
                    </p>
                    <p>
                        Rooted in game theory, it&apos;s part of a dynamic,
                    interconnected token ecosystem launched in 2020.
                </p>
            </div>
            <Tokenomics />

            <div className={styles.introText}>
                <h3>Join the Movement!</h3>
                <p>Building an Ethereum Meme Community that extends beyond Pepe </p>
                <p>Shape the future with us:</p>
                <SocialLinks />
            </div>
        </div>
    );
};

// Header section with logo and title
const HeaderSection: React.FC = () => {
    return (
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
                <h1 className={styles.title}>Pepe</h1>
            </div>
        </div>
    );
};

// Dapp button component
const DappButton: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        color: 'black',
        backgroundColor: isHovered ? '#3e8e41' : 'var(--color-pepe)', // Green background, darker on hover
        padding: '10px 15px',
        borderRadius: '8px',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
        margin: '10px',
        display: 'inline-block', // To maintain button shape
        cursor: 'pointer', // Change cursor on hover
    };

    return (
        <div style={{ textAlign: 'center' }}> {/* Center the button container */}
            <a href="https://pepex.app" target="_blank" rel="noopener noreferrer"
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                Launch APP
            </a>
        </div>
    );
};

const Description: React.FC = () => {
    return (
        <div className={styles.container}>
            <DescriptionSection />
            <IntroductionSection />
            <DappButton />
        </div>
    );
};

export default Description;
