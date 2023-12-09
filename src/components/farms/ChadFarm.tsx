import React from 'react';
import styles from "@/styles/Dapp.module.css";
import Image from 'next/image';


interface ChadFarmProps {
  chadBalance: number;
  onClose: () => void;
  // Add function props as needed
  stake?: Function;
  withdraw?: Function;
  getReward?: Function;
  // ... other function props ...
}


const ChadFarm: React.FC<ChadFarmProps> = ({ onClose, chadBalance }) => {
  return (
    <div className={styles.content}>
      <div className={styles.farm_info}>
        <div className={styles.inner}>
        <div className={styles.stats}>
              <div className={styles.inner + ' ' + styles.balance}>
                <div className={styles.label}>Your CHAD Balance</div>
                <div className={styles.value}>
                  <div className={styles.logo}>
                    <Image width={50} height={50} src="/images/token/chad.png" alt="WOJAK Token" />
                  </div>
                  <div className={styles.value}>{chadBalance.toFixed(5)}</div>
                </div>
              </div>
            </div>
          <div className={styles.max_amount}>Max amount</div>
          <input className={styles.amount} placeholder="0.0" />
          <div className={styles.button}>
            <button className={styles.approve}>BURN CHAD / CLAIM ETH</button>
          </div>
          <div>
            <h2>Be Chad</h2>

            <p>
              Chad is the main governance token, the one that collects all the
              taxes paid by wojaks. Only true Chads will be able to make
              decisions and collect ethereum rewards.
            </p>
            <p>
              Chads will be able to manage and redeem the collected taxes. 10%
              of the fees collected by Chads will be used to burn Pepe tokens,
              solving the inflation problem.
            </p>
          </div>
          <div className={styles.button}>
          <button className={styles.chad} onClick={() => onClose()}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChadFarm;
