import React from 'react';
import Image from 'next/image';
import styles from '@/styles/CoinGeckoRequest.module.css'; // Assume you have corresponding CSS

const CoinGeckoRequestInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/coingecko.png" alt="Coingecko Logo" width={100} height={100} />
      </div>
      <div className={styles.info}>
        <p>🚀 Just submitted my request to <strong>OG Pepe</strong> through CoinGecko!</p>
        <p>🎫 Request ID: <strong>CL2411230007</strong></p>
        <p>
          🔗 GeckoTerminal URL: 
          <a 
            href="https://www.geckoterminal.com/?q=0x4dFae3690b93c47470b03036A17B23C1Be05127C" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            <strong> https://www.geckoterminal.com/?q=0x4dFae3690b93c47470b03036A17B23C1Be05127C</strong>
          </a>
        </p>
      </div>
    </div>
  );
};

export default CoinGeckoRequestInfo;
