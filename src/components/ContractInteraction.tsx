// components/ContractInteraction.tsx
import React, { useState, useEffect } from 'react';
import { useContractWrite, useContractRead, useAccount, useConnect, usePrepareContractWrite } from 'wagmi';
import { formatUnits, BigNumberish } from "ethers";
import { ABIWOJAK, ABICHAD, ABIPEPE, ABIUNI } from '../contracts/ABIS';
import styles from "@/styles/Dapp.module.css";
import Farms from './farms/Farms';


const ContractInteraction = () => {
    const { address } = useAccount();
    const [amount, setAmount] = useState('');
    const [userBalance, setUserBalance] = useState(0);
    const [totalSupply, setTotalSupply] = useState(0);

    const [burned, setBurned] = useState(0);
    const [circulatingSupply, setCirculatingSupply] = useState(0);

    const pepeAddress = '0x4dfae3690b93c47470b03036a17b23c1be05127c';
    const wojakAddress = '0x4fd2ec9bdd398f8e522d76ea3704f8dbdc1f23f4';
    const chadAddress = '0x5C888fA2e6f9f0880321683D1eFA12e936fD5051';
    const uniAddress = '0xAA9b647f42858F2Db441F0AA75843A8E7fd5aFF2';

    // States for balances
    const [wojakBalance, setWojakBalance] = useState(0);
    const [pepeBalance, setPepeBalance] = useState(0);
    const [chadBalance, setChadBalance] = useState(0);
    const [uniBalance, setUniBalance] = useState(0);
    const [totalSupplyWojak, setTotalSupplyWojak] = useState(0);
    const [totalSupplyPepe, setTotalSupplyPepe] = useState(0);
    const [totalSupplyChad, setTotalSupplyChad] = useState(0);
    const [totalSupplyUni, setTotalSupplyUni] = useState(0);
    const [myRewardsBalance, setMyRewardsBalance] = useState(0);
    const [totalStaked, setTotalStaked] = useState(0);
    const [addressStakeAmount, setAddressStakeAmount] = useState(0);
    const [selectedFarm, setSelectedFarm] = useState<string>(""); // Initialize with an empty string
    const [wojakAllowance, setWojakAllowance] = useState<any>(null);
    const [uniAllowance, setUniAllowance] = useState<any>(null);
    const [stakeAmount, setStakeAmount] = useState('');
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [rewardAmount, setRewardAmount] = useState('');
    const [withdrawAmountUNI, setWithdrawAmountUNI] = useState('');
    const [totalLPStaked, setTotalLPStaked] = useState(0);

// Function to handle farm selection
    const handleFarmSelection = (farm: string) => {
        setSelectedFarm(farm);
        setIsFarmModalVisible(true);

    };
    // Fetch user balance for WOJAK
    const { data: wojakBalanceData } = useContractRead({
        address: wojakAddress,
        abi: ABIWOJAK,
        functionName: 'balanceOf',
        args: [address],
    });

    // Fetch user balance for PEPE
    const { data: pepeBalanceData } = useContractRead({
        address: pepeAddress,
        abi: ABIPEPE,
        functionName: 'balanceOf',
        args: [address],
    });

    // Fetch user balance for CHAD
    const { data: chadBalanceData } = useContractRead({
        address: chadAddress,
        abi: ABICHAD,
        functionName: 'balanceOf',
        args: [address],
    });

    // Fetch user balance for UNI
    const { data: uniBalanceData } = useContractRead({
        address: uniAddress,
        abi: ABIUNI,
        functionName: 'balanceOf',
        args: [address],
    });

        // Fetch user balance for UNI
        const { data: uniTotalData } = useContractRead({
            address: uniAddress,
            abi: ABIWOJAK,
            functionName: 'balanceOf',
            args: [chadAddress],
        });
        useEffect(() => {
            if (uniTotalData) {
                setTotalLPStaked(parseFloat(formatUnits(uniTotalData.toString(), 'ether')));
            }
        }, [uniTotalData]);

    // Then, you can use useEffect to update the state when these values change
    useEffect(() => {
        if (wojakBalanceData) {
            setWojakBalance(parseFloat(formatUnits(wojakBalanceData.toString(), 'ether')));
        }
        if (pepeBalanceData) {
            setPepeBalance(parseFloat(formatUnits(pepeBalanceData.toString(), 'ether')));
        }
        if (chadBalanceData) {
            setChadBalance(parseFloat(formatUnits(chadBalanceData.toString(), 'ether')));
        }
        if (uniBalanceData) {
            setUniBalance(parseFloat(formatUnits(uniBalanceData.toString(), 'ether')));
        }
    }, [wojakBalanceData, pepeBalanceData, chadBalanceData, uniBalanceData]);

    // Fetch allowance for WOJAK
    const { data: wojakAllowanceData } = useContractRead({
        address: wojakAddress, // WOJAK token address
        abi: ABIWOJAK, // ABI for WOJAK token contract
        functionName: 'allowance',
        args: [address, pepeAddress], // User's address and PEPE token address
    });

    // Parse and update the allowance state
    useEffect(() => {
        if (wojakAllowanceData) {
            setWojakAllowance(parseFloat(formatUnits(wojakAllowanceData.toString(), 'ether')));
        }
    }, [wojakAllowanceData]);

    // Fetch allowance for UNI LP (CHAD)
    const { data: uniAllowanceData } = useContractRead({
        address: chadAddress, // CHAD token address
        abi: ABICHAD, // ABI for CHAD token contract
        functionName: 'allowance',
        args: [address, uniAddress], // User's address and UNI LP token address
    });

    // Parse and update the allowance state
    useEffect(() => {
        if (uniAllowanceData) {
            setUniAllowance(parseFloat(formatUnits(uniAllowanceData.toString(), 'ether')));
        }
    }, [uniAllowanceData]);

    // Fetch total supply for WOJAK
    const { data: totalSupplyWojakData } = useContractRead({
        address: wojakAddress,
        abi: ABIWOJAK,
        functionName: 'totalSupply',
    });

    // Fetch total supply for PEPE
    const { data: totalSupplyPepeData } = useContractRead({
        address: pepeAddress,
        abi: ABIPEPE,
        functionName: 'totalSupply',
    });

    // Fetch total supply for CHAD
    const { data: totalSupplyChadData } = useContractRead({
        address: chadAddress,
        abi: ABICHAD,
        functionName: 'totalSupply',
    });

    // Fetch total supply for UNI
    const { data: totalSupplyUniData } = useContractRead({
        address: uniAddress,
        abi: ABIUNI,
        functionName: 'totalSupply',
    });

    // Then, use useEffect to update the state when these values change
    useEffect(() => {
        if (totalSupplyWojakData) {
            setTotalSupplyWojak(parseFloat(formatUnits(totalSupplyWojakData.toString(), 'ether')));
        }
        if (totalSupplyPepeData) {
            setTotalSupplyPepe(parseFloat(formatUnits(totalSupplyPepeData.toString(), 'ether')));
        }
        if (totalSupplyChadData) {
            setTotalSupplyChad(parseFloat(formatUnits(totalSupplyChadData.toString(), 'ether')));
        }
        if (totalSupplyUniData) {
            setTotalSupplyUni(parseFloat(formatUnits(totalSupplyUniData.toString(), 'ether')));
        }
    }, [totalSupplyWojakData, totalSupplyPepeData, totalSupplyChadData, totalSupplyUniData]);

    // Fetch my rewards balance
    const { data: myRewardsBalanceData } = useContractRead({
        address: pepeAddress,
        abi: ABIPEPE,
        functionName: 'myRewardsBalance',
        args: [address], // User's address
    });

    useEffect(() => {
        if (myRewardsBalanceData) {
            setMyRewardsBalance(parseFloat(formatUnits(myRewardsBalanceData.toString(), 'ether')));
        }
    }, [myRewardsBalanceData]);

    // Fetch total staked
    const { data: totalStakedData } = useContractRead({
        address: wojakAddress,
        abi: ABIWOJAK,
        functionName: 'balanceOf',
        args: [pepeAddress],
    });

    useEffect(() => {
        if (totalStakedData) {
            setTotalStaked(parseFloat(formatUnits(totalStakedData.toString(), 'ether')));
        }
    }, [totalStakedData]);

    // Fetch address stake amount
    const { data: addressStakeAmountData } = useContractRead({
        address: pepeAddress,
        abi: ABIPEPE,
        functionName: 'getAddressStakeAmount',
        args: [address], // User's address
    });

    useEffect(() => {
        if (addressStakeAmountData) {
            setAddressStakeAmount(parseFloat(formatUnits(addressStakeAmountData.toString(), 'ether')));
        }
    }, [addressStakeAmountData]);


    // Fetch user balance
    const { data: userBalanceData } = useContractRead({
        address: pepeAddress,
        abi: ABIWOJAK,
        functionName: 'balanceOf',
        args: [address],
    });

    useEffect(() => {
        if (userBalanceData) {
            setUserBalance(parseFloat(formatUnits(userBalanceData.toString(), 'ether')));
        }
    }, [userBalanceData]);

    // Fetch total supply
    const { data: totalSupplyData } = useContractRead({
        address: pepeAddress,
        abi: ABIWOJAK,
        functionName: 'totalSupply',
    });

    useEffect(() => {
        if (totalSupplyData) {
            setTotalSupply(parseFloat(formatUnits(totalSupplyData.toString(), 'ether')));
        }
    }, [totalSupplyData]);

    // Fetch burned tokens
    const { data: burnedData } = useContractRead({
        address: pepeAddress,
        abi: ABIWOJAK,
        functionName: 'balanceOf',
        args: ["0x000000000000000000000000000000000000dEaD"],
    });

    useEffect(() => {
        if (burnedData) {
            setBurned(parseFloat(formatUnits(burnedData.toString(), 'ether')));
        }
    }, [burnedData]);



    // Calculate circulating supply
    useEffect(() => {
        setCirculatingSupply(totalSupply - burned);
    }, [totalSupply, burned]);

    // Prepare contract write functions
    const { config: stakeConfig } = usePrepareContractWrite({
        address: pepeAddress,
        abi: ABIPEPE,
        functionName: 'stake',
        args: [stakeAmount],
    });
    const { write: stake } = useContractWrite(stakeConfig);

    const { config: withdrawConfig } = usePrepareContractWrite({
        address: pepeAddress,
        abi: ABIPEPE,
        functionName: 'withdraw',
        args: [withdrawAmount],
    });
    const { write: withdraw } = useContractWrite(withdrawConfig);

    const { config: getRewardConfig } = usePrepareContractWrite({
        address: pepeAddress,
        abi: ABIPEPE,
        functionName: 'getReward',
        args: [rewardAmount],
    });
    const { write: getReward } = useContractWrite(getRewardConfig);


    // Approve Wojak
    const { config: approveWojakConfig } = usePrepareContractWrite({
        address: wojakAddress,
        abi: ABIWOJAK,
        functionName: 'approve',
        args: [pepeAddress, '9999999999999999999999999999999'],
    });
    const { write: approveWojak } = useContractWrite(approveWojakConfig);

    // Approve Uni
    const { config: approveUniConfig } = usePrepareContractWrite({
        address: uniAddress,
        abi: ABIUNI,
        functionName: 'approve',
        args: [pepeAddress, '9999999999999999999999999999999'],
    });
    const { write: approveUni } = useContractWrite(approveUniConfig);


    // Claim Pepe
    const { config: claimPepeConfig } = usePrepareContractWrite({
        address: pepeAddress,
        abi: ABIPEPE,
        functionName: 'getReward',
        args: [rewardAmount],
    });
    const { write: claimPepe } = useContractWrite(claimPepeConfig);

    // Claim UNI from Chad
    const { config: claimUniConfig } = usePrepareContractWrite({
        address: chadAddress,
        abi: ABICHAD,
        functionName: 'withdraw',
        args: [withdrawAmountUNI],
    });
    const { write: claimUni } = useContractWrite(claimUniConfig);

        // Claim Uni
        const { config: claimCHADconfig } = usePrepareContractWrite({
            address: chadAddress,
            abi: ABICHAD,
            functionName: 'getReward',
            args: [withdrawAmountUNI],
        });
        const { write: claimChad } = useContractWrite(claimCHADconfig);
    
    // Stake Uni
    const { config: stakeUniConfig } = usePrepareContractWrite({
        address: chadAddress,
        abi: ABICHAD,
        functionName: 'stake',
        args: [amount],
    });
    const { write: stakeUni } = useContractWrite(stakeUniConfig);
    const [isFarmModalVisible, setIsFarmModalVisible] = useState(false);


    return (
        <div>
            {/* Your existing code */}
            {/* ... */}

            {/* Include the Farms component */}
            <Farms
                isFarmModalVisible={isFarmModalVisible}
                selectedFarm={selectedFarm}
                handleFarmSelection={handleFarmSelection}
                setIsFarmModalVisible={setIsFarmModalVisible}
                wojakBalance={wojakBalance}
                pepeBalance={pepeBalance}
                wojakStaked={addressStakeAmount}
                wojakAddress={wojakAddress}
                totalWojakSupply={totalSupplyWojak}
                pepeEthLpBalance={uniBalance}
                totalLPStaked={totalLPStaked}
                totalPepeSupply={totalSupplyPepe}
                addressStakeAmount={addressStakeAmount}
                chadBalance={chadBalance}
                totalChadSupply={totalSupplyChad}
                wojakAllowance={wojakAllowance}
                uniAllowance={uniAllowance}
                stake={stake}
                withdraw={withdraw}
                getReward={getReward}
                approveWojak={approveWojak}
                approveUni={approveUni}
                stakeWojak={stake}
                claimPepe={claimPepe}
                claimUni={claimUni}
                claimChad={claimChad}
                stakeUni={stakeUni}
                setStakeAmount={setStakeAmount}
                totalStaked={totalStaked}
            />


        </div>
    );
};

export default ContractInteraction;
