import React from 'react';
import WojakFarm from './WojakFarm';
import PepeFarm from './PepeFarm';
import ChadFarm from './ChadFarm';
import styles from "@/styles/Dapp.module.css";

interface FarmModalProps {
  selectedFarm: string | null;
  onClose: () => void;
  wojakBalance: number;
  chadBalance: number;
  wojakStaked: any; // Replace 'any' with the correct type if known
  wojakAddress: string;
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
  setStakeAmount?: Function;

}

const FarmModal: React.FC<FarmModalProps> = ({
  selectedFarm,
  onClose,
  wojakBalance,
  wojakStaked,
  wojakAddress,
  chadBalance,
  uniAllowance,
  wojakAllowance,
  // Add the function props here
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
  setStakeAmount
}) => {
  let farmContent;

  if (selectedFarm === 'WOJAK') {
    farmContent = (
      <WojakFarm
        wojakBalance={wojakBalance}
        wojakStaked={wojakStaked}
        wojakAddress={wojakAddress}
        wojakAllowance={wojakAllowance}
        onClose={onClose}
        // Pass the function props to WojakFarm
        stake={stake}
        withdraw={withdraw}
        getReward={getReward}
        approveWojak={approveWojak}
        setStakeAmount={setStakeAmount}
        // ... other function props as needed
      />
    );
  } else if (selectedFarm === 'PEPE') {
    farmContent = (
      <PepeFarm
        onClose={onClose}
        // Pass the function props to PepeFarm
        stake={stake}
        withdraw={withdraw}
        getReward={getReward}
        // ... other function props as needed
      />
    );
  } else if (selectedFarm === 'CHAD') {
    farmContent = (
      <ChadFarm
        onClose={onClose}
        chadBalance={chadBalance}
        // Pass the function props to ChadFarm
        stake={stake}
        withdraw={withdraw}
        getReward={getReward}
        // ... other function props as needed
      />
    );
  }

  return (
    <div>
      <div>{farmContent}</div>
    </div>
  );
};

export default FarmModal;
