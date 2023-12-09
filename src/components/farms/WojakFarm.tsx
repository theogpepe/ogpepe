import React, { useState } from 'react';
import styles from "@/styles/Dapp.module.css";
import { ABIPEPE } from '@/contracts/ABIS';
import { useContractWrite } from 'wagmi'
import Image from 'next/image';

interface WojakFarmProps {
  wojakBalance: number;
  wojakStaked: number;
  wojakAddress: string;
  wojakAllowance: number;
  onClose: () => void;
  stake?: Function;
  withdraw?: Function;
  getReward?: Function;
  approveWojak?: Function;
  setStakeAmount?: Function;
  // Add other function props as needed
}


const WojakFarm: React.FC<WojakFarmProps> = ({
  wojakAddress,
  wojakBalance,
  wojakStaked,
  wojakAllowance,
  onClose,
  stake,
  withdraw,
  getReward,
  approveWojak,
  setStakeAmount
}) => {
  // Your existing state variables and values here
  const [inputValue, setInputValue] = useState(0);
  const [claimPepeValue, setClaimPepeValue] = useState(0);
  const [stakeInputValue, setStakeInputValue] = useState(0);
  const [withdrawInputValue, setWithdrawInputValue] = useState(0);
  const pepeAddress = '0x4dfae3690b93c47470b03036a17b23c1be05127c';
  const chadAddress = '0x5C888fA2e6f9f0880321683D1eFA12e936fD5051';
  const uniAddress = '0xAA9b647f42858F2Db441F0AA75843A8E7fd5aFF2';

  const handleStakeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStakeInputValue(parseFloat(e.target.value));
  };

  const handleWithdrawInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWithdrawInputValue(parseFloat(e.target.value));
  };

  const handleMaxStakeAmount = () => {
    setStakeInputValue(wojakBalance);
  };

  const handleMaxWithdrawAmount = () => {
    setWithdrawInputValue(wojakStaked);
  };

  const handleClaimPepeValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClaimPepeValue(parseFloat(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseFloat(e.target.value));
    console.log(inputValue);
  };

  const isApprove = inputValue > wojakAllowance;
  const isStake = inputValue <= wojakAllowance && inputValue <= wojakBalance;
  const isDisabled = false;//inputValue >= wojakBalance;

  const handleMaxAmount = () => {
    setInputValue(wojakBalance);
  };
  const handleMaxClaimAmount = () => {
    setClaimPepeValue(parseFloat('3'));
  };

  // Function to calculate tax based on claimed rewards
  const calculateTax = (claimedRewards: number) => {
    // Replace with actual tax calculation logic
    const taxRate = 0.25; // Example tax rate
    const tax = Math.min(claimedRewards * taxRate, getMaxClaimableReward());
    return tax;
  };

  // Function to get the maximum claimable reward
  const getMaxClaimableReward = () => {
    // Replace with actual logic to get the max claimable reward
    return 100; // Example value
  };

  const StakeButton = () => {
    const { data, isLoading, isSuccess, write } = useContractWrite({
      address: pepeAddress, // Replace with your contract's address
      abi: ABIPEPE,         // Replace with your contract's ABI
      functionName: 'stake', // The contract function to call
      args: [inputValue],
    });
  
    return (
      <div>
        <button
          disabled={!write || isLoading}
          onClick={() =>
            write()
          }
        >
          Stake
        </button>
        {isLoading && <div>Check Wallet</div>}
        {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      </div>
    );
  };

  const handleWithdraw = () => {
    if (withdraw) {
      withdraw(); // Call the withdraw function without args
    } else {
      console.error("Withdraw function is not available");
    }
  };

  const WithdrawButton = () => {
    const { data, isLoading, isSuccess, write } = useContractWrite({
      address: pepeAddress,
      abi: ABIPEPE,
      functionName: 'withdraw',
    })

    return (
      <div>
        <button
          disabled={!write}
          onClick={() =>
            write({
              args: [wojakStaked],
            })
          }
        >
          Withdraw
        </button>
        {isLoading && <div>Check Wallet</div>}
        {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      </div>
    )
  }

  const handleApprove = () => {
    if (approveWojak) {
      approveWojak(); // Call the approve function without args
    } else {
      console.error("Approve function is not available");
    }
  };

  const handleClaimReward = () => {
    if (getReward) {
      getReward(); // Call the getReward function without args
    } else {
      console.error("GetReward function is not available");
    }
  };


  return (
    <div className={styles.content}>
      <div className={styles.farm_info}>
        <div className={styles.inner}>
          <div className={styles.special}>
            <div className={styles.stats}>
              <div className={styles.inner + ' ' + styles.balance}>
                <div className={styles.label}>Your WOJAK Balance</div>
                <div className={styles.value}>
                  <div className={styles.logo}>
                    <Image width={50} height={50} src="/images/token/wojak.png" alt="WOJAK Token" />
                  </div>
                  <div className={styles.value}>{wojakBalance.toFixed(5)}</div>
                </div>
                <div className={styles.max_amount}>
                  <button onClick={handleMaxAmount}>Max amount</button>
                </div>
                <input
                  className={styles.amount}
                  placeholder="0.0"
                  type="number"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <div className={styles.button}>
                  {isApprove ? (
                    <button className={styles.approve} onClick={handleApprove} disabled={isDisabled}>
                      APPROVE
                    </button>
                  ) : (
                    <StakeButton />
                  )}
                </div>
              </div>
            </div>
            <div className={styles.stats}>
              <div className={styles.inner + ' ' + styles.balance}>
                <div className={styles.label}>Your WOJAK Staked</div>
                <div className={styles.value}>{wojakStaked.toFixed(5)}</div>
                <div className={styles.max_amount}>
                  <button onClick={handleMaxWithdrawAmount}>Max amount</button>
                </div>
                <input
                  className={styles.amount}
                  placeholder="0.0"
                  type="number"
                  value={withdrawInputValue}
                  onChange={handleWithdrawInputChange}
                />
                <div className={styles.button}>
                  <WithdrawButton />
                </div>
              </div>
            </div>
            <div className={styles.stats}>
              <div className={styles.inner + ' ' + styles.balance}>
                <div className={styles.label}>Your WOJAK Allowance</div>
                <div className={styles.value}>
                  <div className={styles.logo}>
                    <Image width={50} height={50} src="/images/token/wojak.png" alt="WOJAK Token" />
                  </div>
                  <div className={styles.value}>
                    {wojakAllowance !== null ? wojakAllowance.toFixed(5) : '0'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <a
              target="_blank"
              href={`https://app.uniswap.org/#/swap?outputCurrency=${wojakAddress}`}
            >
              <button className={styles.buy}>BUY WOJAK</button>
            </a>
          </div>
          <div>

            <div className={styles.stats}>
              <div className={styles.inner + ' ' + styles.balance}>
                <p>
                  INFO: Wojaks are wagecucks, so every time you claim, you will have
                  to pay 25% VAT in ETH. These fees will be collected by real CHADs.
                </p>
                <p>
                  Pepe rewards grow per block and are updated on each transaction
                  (send) to functions with the updateStakingRewards modifier.
                </p>
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
                <input
                  className={styles.amount}
                  placeholder="0.0"
                  type="number"
                  value={claimPepeValue}
                  onChange={handleClaimPepeValueChange}
                />
                <div className={styles.max_amount}>
                  <button onClick={handleMaxClaimAmount}>Max amount</button>
                </div>
                <p className={styles.eth_tax}>Tax: {calculateTax(claimPepeValue)} ETH</p>
                <div className={styles.button}>
                  <button className={styles.claim}>CLAIM PEPE</button>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <button className={styles.chad} onClick={() => onClose()}>Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WojakFarm;
