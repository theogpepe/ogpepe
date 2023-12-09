import React, { useState } from 'react';
import styles from "@/styles/Dapp.module.css";
import Image from 'next/image';
interface PepeFarmProps {
  onClose: () => void;
  // Add function props as needed
  stake?: Function;
  withdraw?: Function;
  getReward?: Function;
  // ... other function props ...
}

const PepeFarm: React.FC<PepeFarmProps> = ({onClose, stake, withdraw, getReward}) => {
  
  const [stakeAmount, setStakeAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [claimAmount, setClaimAmount] = useState(0);

  const handleStake = () => {
    if (stake) {
      stake({ args: [stakeAmount] });
    }
  };

  const handleWithdraw = () => {
    if (withdraw) {
      withdraw({ args: [withdrawAmount] });
    }
  };

  const handleClaim = () => {
    if (getReward) {
      getReward({ args: [claimAmount] });
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.farm_info}>
        <div className={styles.inner}>
        <div className={styles.stats}>
              <div className={styles.inner + ' ' + styles.balance}>
                <div className={styles.label}>PEPE Earned</div>
                <div className={styles.value}>
                  <div className={styles.logo}>
                    <Image width={50} height={50} src="/images/token/pepe.png" alt="WOJAK Token" />
                  </div>
                  <div className={styles.value}>{0}</div>
                </div>
              </div>
            </div>
            <div className={styles.stats}>
          <div className={`${styles.inner} ${styles.balance}`}>
            <div className={styles.label}>PEPE/ETH LP Staked</div>
            <div className={styles.value}>
              <div className={styles.logo}>
                <Image width={50} height={50} src="/images/token/pepe.png" alt="PEPE Token" />
              </div>
              <div className={styles.value}>{0}</div> {/* Replace 0 with dynamic value */}
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={`${styles.inner} ${styles.balance}`}>
            <div className={styles.label}>PEPE Balance</div>
            <div className={styles.value}>
              <div className={styles.logo}>
                <Image width={50} height={50} src="/images/token/pepe.png" alt="PEPE Token" />
              </div>
              <div className={styles.value}>{0}</div> {/* Replace 0 with dynamic value */}
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={`${styles.inner} ${styles.balance}`}>
            <div className={styles.label}>PEPE/ETH LP Balance</div>
            <div className={styles.value}>
              <div className={styles.logo}>
                <Image width={50} height={50} src="/images/token/pepe.png" alt="PEPE Token" />
              </div>
              <div className={styles.value}>{0}</div> {/* Replace 0 with dynamic value */}
            </div>
          </div>
        </div>

        <div className={styles.max_amount}>Max amount</div>
        <input className={styles.amount} placeholder="0.0" />
        <div className={styles.button}>
          <button className={styles.approve}>APPROVE</button>
        </div>
        <div className={styles.button}>
          <button className={styles.buy}>BUY PEPE</button>
        </div>
        <div className={styles.button}>
          <button className={styles.withdraw}>WITHDRAW</button>
        </div>
        <div>
          <div className={styles.update}>UPDATE</div>
          <h2>GET CHAD</h2>
        </div>
        <div>
          <p>
            Chad rewards grow per block and are updated on each transaction
            (send) to functions with the updateStakingRewards modifier.
          </p>
        </div>
        <input className={styles.claim_Amount} placeholder="0.0" />
        <div className={styles.button}>
          <button className={styles.claim}>CLAIM CHAD</button>
        </div>
        <div className={styles.button}>
          <button className={styles.chad} onClick={() => onClose()}>Back</button>
        </div>
      </div>
    </div>
  </div>
);
};

export default PepeFarm;
