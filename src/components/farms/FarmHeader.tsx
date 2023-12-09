import React, { FC } from 'react';
import styles from "@/styles/Dapp.module.css";
import Link from 'next/link';
import Image from 'next/image';


const uniswapAddLpUrl = "https://app.uniswap.org/#/add/v2/ETH/0x4dfae3690b93c47470b03036a17b23c1be05127c";

interface FarmHeaderProps {
    wojakBalance: number;
    pepeBalance: number;
    totalWojakSupply: number;
  wojakStaked: number;
  pepeEthLpBalance: number;
  totalLPStaked: number;
  totalPepeSupply: number;
  addressStakeAmount: number;
  chadBalance: number;
  totalChadSupply: number;
  totalStaked: number;
}

const FarmHeader: FC<FarmHeaderProps> = ({
    wojakBalance,
    pepeBalance,
    totalWojakSupply,
  wojakStaked,
  pepeEthLpBalance,
  totalPepeSupply,
  addressStakeAmount,
  chadBalance,
  totalChadSupply, totalLPStaked, totalStaked
}) => {
  return (
    <div id="farm" className={styles.header}>
      <div className={styles.content}>
        <div className={styles.stats}>
          <div className={styles.inner + ' ' + styles.balance}>
            <div className={styles.label}>Your WOJAK Balance</div>
            <div className={styles.value}>
              <div className={styles.logo}>
                <Image width={50} height={50} src="/images/token/wojak.png" alt="WOJAK Token" />
              </div>
              <div className={styles.value}>{wojakBalance.toFixed(5)}</div>
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.inner + ' ' + styles.total_supply}>
            <div className={styles.label}>Total WOJAK Supply</div>
            <div className={styles.value}>{totalWojakSupply.toFixed(5)}</div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.inner + ' ' + styles.staked}>
            <div className={styles.label}>Total WOJAK staked</div>
            <div className={styles.value}>{totalStaked.toFixed(5)}</div>
          </div>
        </div>
        <div className={styles.stats}>
        <div className={`${styles.inner} ${styles.balance_2}`}>
          <div className={styles.label}>Your PEPE/ETH LP balance:</div>
          <div className={styles.value}>
            <div className={styles.logo}>
              <Image width={50} height={50} src="/images/token/pepe.png" alt="PEPE Token" />
            </div>
            <div className={styles.value}>{pepeEthLpBalance.toFixed(5)}</div>
            <a href={uniswapAddLpUrl} target="_blank" rel="noopener noreferrer" className={styles.addLpLink}>
              <span className={styles.plusSign}> Add +</span>
            </a>
          </div>
        </div>
      </div>
        <div className={styles.stats}>
          <div className={styles.inner + ' ' + styles.total_supply_2}>
            <div className={styles.label}>Total PEPE Supply</div>
            <div className={styles.value}>{totalPepeSupply.toFixed(5)}</div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.inner + ' ' + styles.staked_2}>
            <div className={styles.label}>Total PEPE/ETH LP staked</div>
            <div className={styles.value}>{totalLPStaked.toFixed(5)}</div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.inner + ' ' + styles.balance_3}>
            <div className={styles.label}>Your CHAD Balance</div>
            <div className={styles.value}>
              <div className={styles.logo}>
                <Image width={50} height={50} src="/images/token/chad.png" alt="CHAD Token" />
              </div>
              <div className={styles.value}>{chadBalance.toFixed(5)}</div>
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.inner + ' ' + styles.balance_3}>
            <div className={styles.label}>Your PEPE Balance</div>
            <div className={styles.value}>
              <div className={styles.logo}>
                <Image width={50} height={50} src="/images/token/pepe.png" alt="PEPE Token" />
              </div>
              <div className={styles.value}>{pepeBalance.toFixed(5)}</div>
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.inner + ' ' + styles.total_supply_3}>
            <div className={styles.label}>Total CHAD Supply</div>
            <div className={styles.value}>{totalChadSupply.toFixed(5)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmHeader;
