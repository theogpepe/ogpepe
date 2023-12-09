// If using TypeScript (info.tsx)
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Info: NextPage = () => {
    return (
        <>
            <Head>
                <title>Info - wojak.farm</title>
            </Head>
            <main>
                <h1>Information Page</h1>
                <Image
                    src="/sequence_pepe.svg"
                    alt="Sequence Diagram"
                    height="800"
                    width="800"
                />
                                <div className="info-text">

                <p>
                    The sequence diagram you've seen illustrates the interactions within the Pepe contract, 
                    specifically focusing on how users stake Wojak tokens to earn Pepe tokens. Here's a 
                    step-by-step explanation of the process:
                </p>
                <h2>Staking Wojak Tokens:</h2>
                <p>
                    The user initiates the staking process by calling the <code>stake</code> function in the Pepe contract, 
                    specifying the amount of Wojak tokens they wish to stake. The Pepe contract then interacts with the 
                    Wojak IERC20 token contract, requesting to transfer the specified amount of Wojak tokens from the 
                    user's account to the Pepe contract. This is done using the <code>transferFrom</code> method. Once 
                    the transfer is confirmed, the Pepe contract logs this event with a <code>Staked</code> event, 
                    indicating the user's address, the amount staked, and the total Wojak staked in the contract.
                </p>
                <h2>Withdrawing Wojak Tokens:</h2>
                <p>
                    If the user decides to withdraw their staked Wojak tokens, they call the <code>withdraw</code> 
                    function in the Pepe contract. The Pepe contract then requests the Wojak token contract to transfer 
                    the specified amount of Wojak tokens back to the user's account. Upon successful transfer, the Pepe 
                    contract emits a <code>Withdrawn</code> event, detailing the user's address and the amount withdrawn.
                </p>
                <h2>Claiming Pepe Rewards:</h2>
                <p>
                    To claim Pepe rewards, the user calls the <code>getReward</code> function, specifying the amount of 
                    Pepe they wish to claim. The Pepe contract consults with the PEPE_ETH_Oracle to determine the value 
                    of the reward. A tax is calculated and transferred to a designated address (Chad's address in this 
                    case). The Pepe contract then directly mints the Pepe tokens to the user's account, effectively 
                    rewarding the user. This minting process is an internal action within the Pepe contract. Finally, a 
                    <code>Rewarded</code> event is emitted, indicating the user's address, the amount of Pepe claimed, 
                    its value, and the tax applied. Throughout this process, the Pepe contract handles the staking, 
                    withdrawal, and reward mechanisms, interacting with the Wojak token contract for token transfers and 
                    the oracle for value determination. The use of events (<code>Staked</code>, <code>Withdrawn</code>, 
                    <code>Rewarded</code>) provides transparency and traceability for these actions on the blockchain.
                </p>
                <h2>Understanding Difficulty and Reward Calculation</h2>
            <p>
                In the Pepe contract, the <code>difficulty</code> variable significantly influences 
                the rewards for staking Wojak tokens. Here's how it impacts the reward calculation:
            </p>
            <p>
                The <code>difficulty</code> variable is used as a divisor in the formula that calculates 
                the rewards for staking Wojak tokens. Typically, this formula would take into account 
                the number of tokens staked, the number of blocks since the last reward calculation, 
                and the difficulty value.
            </p>
            <p>
                The basic idea is that the reward for each block is proportional to the amount of Wojak 
                staked and inversely proportional to the difficulty. This means that as the difficulty 
                increases, the reward per block decreases, and vice versa.
            </p>
            <h3>Calculation Example:</h3>
            <p>
                Suppose the reward formula is something like this: 
                <code>reward = (stakedAmount * rewardBlocks) / difficulty</code>.
                Here, <code>stakedAmount</code> is the amount of Wojak tokens the user has staked, 
                <code>rewardBlocks</code> is the number of blocks since the last reward calculation, 
                and <code>difficulty</code> is the difficulty value set in the contract.
            </p>
            <p>
                If the difficulty is high, the division result becomes smaller, meaning the user gets 
                fewer rewards for each block. Conversely, if the difficulty is low, the division result 
                is larger, and the user gets more rewards.
            </p>
            <h3>Impact of Changing Difficulty:</h3>
            <ul>
                <li>
                    <strong>Increasing Difficulty:</strong> If the contract owner increases the difficulty, 
                    the rewards per block for each user will decrease. This might be done to control the 
                    rate at which new tokens are minted or distributed, possibly in response to economic 
                    factors like token inflation or changes in the token's value.
                </li>
                <li>
                    <strong>Decreasing Difficulty:</strong> Conversely, decreasing the difficulty will 
                    increase the rewards per block. This could be used as an incentive mechanism to 
                    encourage more users to stake their tokens, increasing participation in the platform.
                </li>
            </ul>
            <p>
                The difficulty setting is a tool for the contract administrators to balance the token 
                economy. It needs to be managed carefully to maintain a fair and sustainable reward system. 
                Setting the difficulty too low could lead to rapid inflation of the token, while setting it 
                too high might disincentivize staking due to meager rewards.
            </p>
                </div>

                <Link href="/">
                    Go back to home
                </Link>
            </main>
            <style jsx>{`
                .info-text {
                    background-color: #000; // Dark background
                    color: #fff; // Light text color for contrast
                    padding: 20px;
                    border-radius: 8px;
                    margin-top: 20px;
                }
            `}</style>
        </>
    );
};

export default Info;
