import React from 'react';
import styles from "@/styles/NFTCollection.module.css";
import Image from 'next/image';


const NFTCollection = () => {
  const nfts = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/nfts/${i + 1}.avif`, // Adjust as necessary
    link: "https://opensea.io/FirstPepeDeployed"
  }));

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>NFT Collection</h1>
        <p className={styles.subtitle}>You can mint the First Pepe NFT Collection on OpenSea</p>
      </div>

      <div className={styles.nftGrid}>
        {nfts.map((nft, index) => (
          <div key={index} className={styles.content}>
            <div className={styles.imageContainer}>
              <a href={nft.link} target="_blank" rel="noopener noreferrer">
                <Image src={nft.src} alt={`NFT ${nft.id}`} width={200} height={200} className={styles.image} />
              </a>
            </div>
            <h2 className={styles.nftTitle}># {nft.id}</h2>
          </div>
        ))}
      </div>

      <h2 className={styles.moreComingSoon}>More Coming Soon...</h2>
    </div>
  );
};

export default NFTCollection;
