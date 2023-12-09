// Farms.tsx (or Farms/index.tsx)
import React from 'react';
import styles from "@/styles/Dapp.module.css";
import FarmModal from './FarmModal'; // Import the FarmModal component
import FarmHeader from './FarmHeader';
import { BigNumberish } from 'ethers';
import Image from 'next/image';
interface FarmsProps {
  isFarmModalVisible: boolean;
  selectedFarm: string;
  handleFarmSelection: (farm: string) => void;
  setIsFarmModalVisible: (isVisible: boolean) => void;
  wojakBalance: number;
  pepeBalance: number;
  wojakStaked: any;
  wojakAddress: string;
  totalWojakSupply: number; // Add this prop
  pepeEthLpBalance: number; // Add this prop
  totalPepeSupply: number; // Add this prop
  addressStakeAmount: number; // Add this prop
  setStakeAmount?: Function; // Add this prop
  chadBalance: number; // Add this prop
  totalChadSupply: number; // Add this prop
  wojakAllowance: number;
  uniAllowance: number;
  stake?: Function;
  withdraw?: Function;
  getReward?: Function;
  approveWojak?: Function;
  approveUni?: Function;
  stakeWojak?: Function;
  claimPepe?: Function;
  claimUni?: Function;
  claimChad?: Function;
  stakeUni?: Function;
  totalLPStaked: number;
  totalStaked: number; 
  // Add other expected props here
}


const Farms: React.FC<FarmsProps> = ({
  isFarmModalVisible,
  selectedFarm,
  handleFarmSelection,
  setIsFarmModalVisible,
  wojakBalance,
  pepeBalance,
  wojakStaked,
  wojakAddress,
  totalWojakSupply, // You can use this prop like this
  pepeEthLpBalance, // And this one as well
  totalPepeSupply,
  addressStakeAmount,
  chadBalance,
  totalChadSupply,
  wojakAllowance,
  uniAllowance,
  stake,
  withdraw,
  getReward,
  approveWojak,
  approveUni,
  stakeWojak,
  claimPepe,
  claimUni,
  claimChad,
  stakeUni,
  setStakeAmount,
  totalLPStaked,
  totalStaked
}) => {

  const handleStake = (amount: BigNumberish) => {
    if (stake) {
      stake({ args: [amount] });
    } else {
      console.error("Stake function is not available");
    }
  };

  return (
    <div className={styles.farm}>
      <FarmHeader
        wojakBalance={wojakBalance}
        pepeBalance={pepeBalance}
        totalWojakSupply={totalWojakSupply}
        wojakStaked={wojakStaked}
        pepeEthLpBalance={pepeEthLpBalance}
        totalPepeSupply={totalPepeSupply}
        totalLPStaked={totalLPStaked}
        addressStakeAmount={addressStakeAmount}
        chadBalance={chadBalance}
        totalChadSupply={totalChadSupply}
        totalStaked={totalStaked}
      />


      {!isFarmModalVisible && (
        <div className={styles.content}>
          <div className={styles.farm_info}>
            <div className={`${styles.inner} ${styles.special}`}>
              <Image width={50} height={50} className={styles.shadow_logo} src="/images/token/wojak.png" alt="Wojak Farm" />
              <div className={styles.logo}>
                <Image width={50} height={50} src="/images/token/wojak.png" alt="Wojak Farm" />
              </div>
              <div className={styles.name}>WOJAK</div>
              <div className={styles.coin_info}>
                <div className={styles.stake}>
                  <div className={styles.label}>Stake:</div>
                  <div className={styles.name}>WOJAK</div>
                </div>
                <div className={styles.earn}>
                  <div className={styles.label}>Earn:</div>
                  <div className={styles.name}>PEPE</div>
                </div>
                <div className={styles.earn}>
                  <div className={styles.label}>PEPE/day:</div>
                  <div className={styles.name}>0.00</div>
                </div>
              </div>
              <div className={styles.button}>
                <button className={styles.wojak} onClick={() => handleFarmSelection("WOJAK")}>Select</button>
              </div>
            </div>
          </div>

          <div className={styles.farm_info}>
            <div className={`${styles.inner} ${styles.special}`}>
              <Image width={50} height={50} className={styles.shadow_logo} src="/images/token/pepe.png" alt="Wojak Farm" />
              <div className={styles.logo}>
                <Image width={50} height={50} src="/images/token/pepe.png" alt="Wojak Farm" />
              </div>
              <div className={styles.name}>PEPE</div>
              <div className={styles.coin_info}>
                <div className={styles.stake}>
                  <div className={styles.label}>Stake:</div>
                  <div className={styles.name}>PEPE/ETH LP</div>
                </div>
                <div className={styles.earn}>
                  <div className={styles.label}>Earn:</div>
                  <div className={styles.name}>CHAD</div>
                </div>
                <div className={styles.earn}>
                  <div className={styles.label}>CHAD/day:</div>
                  <div className={styles.name}>0.00</div>
                </div>
              </div>
              <div className={styles.button}>
                <button className={styles.pepe} onClick={() => handleFarmSelection("PEPE")}>Select</button>
              </div>
            </div>
          </div>

          <div className={styles.farm_info}>
            <div className={`${styles.inner} ${styles.special}`}>
              <Image width={50} height={50} className={styles.shadow_logo} src="/images/token/chad.png" alt="Wojak Farm" />
              <div className={styles.logo}>
                <Image width={50} height={50} src="/images/token/chad.png" alt="Wojak Farm" />
              </div>
              <div className={styles.name}>CHAD</div>
              <div className={styles.coin_info}>
                <div className={styles.stake}>
                  <div className={styles.label}>Burn:</div>
                  <div className={styles.name}>CHAD</div>
                </div>
                <div className={styles.earn}>
                  <div className={styles.label}>Earn:</div>
                  <div className={styles.name}>ETH</div>
                </div>
              </div>
              <div className={styles.button}>
                <button className={styles.chad} onClick={() => handleFarmSelection("CHAD")}>Select</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isFarmModalVisible && (
        <FarmModal
          selectedFarm={selectedFarm}
          wojakBalance={wojakBalance}
          chadBalance={chadBalance}
          wojakStaked={wojakStaked}
          wojakAllowance={wojakAllowance}
          uniAllowance={uniAllowance}
          wojakAddress={wojakAddress}
          onClose={() => setIsFarmModalVisible(false)}
          stake={stake}
          withdraw={withdraw}
          getReward={getReward}
          approveWojak={approveWojak}
          approveUni={approveUni}
          stakeWojak={stakeWojak}
          claimPepe={claimPepe}
          claimUni={claimUni}
          claimChad={claimChad}
          stakeUni={stakeUni}
        />
      )}
    </div>
  );
};

export default Farms;
