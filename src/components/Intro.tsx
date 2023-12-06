import React from 'react';
import styles from '@/styles/Intro.module.css'; // Adjust the path as necessary
import Image from 'next/image';

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>The Original Pepe</h1>
        <h2 className={styles.subtitle}>
          The revival of the first ever Pepe token deployed on the Ethereum Blockchain
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.logoSection}>
          {/* Replace with the path to your actual logo */}
          <Image
            src="/logo.jpg"
            alt="The Original Pepe Logo"
            layout="responsive"
            width={1} // These can be any ratio as long as their
            height={1} // ratio is equal to your desired aspect ratio
            className={styles.logo}
          />
        </div>
        <div className={styles.textSection}>
          <p className={styles.supply}>
            Supply: 46,832 | Circulating: 37,321 | 0% Tax | Deployed 10/10/2020
          </p>
          <div className={styles.addressButton}>
            <a
              href="https://etherscan.io/token/0x4dfae3690b93c47470b03036a17B23C1Be05127C"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.address}
            >
              0x4dFae3690b93c47470b03036A17B23C1Be05127C
            </a>
          </div>
          <p className={styles.description}>
            PEPE Token, established in 2020, stands as an early meme token with a strong community base.
          </p>
          <p className={styles.description}>
            It is designed for easy transactions and active community engagement, centered around the iconic PEPE meme.
          </p>
          <p className={styles.description}>
            With a three-year journey in the crypto world, PEPE merges fun with functionality, marking it as a piece of crypto heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
