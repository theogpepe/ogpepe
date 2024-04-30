// src/pages/info.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";
import FAQ from '@/components/FAQ';

const Info: NextPage = () => {

    // Define the FaqType type
    type FaqType = {
        question: string;
        answer: string;
    };

    // ... (rest of your component code)

    // Define your FAQs here or import them from another file
    const faqs: FaqType[] = [
        {
            "question": "How do PEPE and WOJAK tokens interact in the Pepe DEX ecosystem?",
            "answer": "In Pepe DEX, WOJAK tokens, with their limited supply of 11,000, are staked in the Pepe Contract. Users stake WOJAK to earn PEPE tokens as rewards. The Pepe Contract handles these transactions and, under certain rules, mints new PEPE tokens for stakers, leveraging the scarcity of WOJAK to add value to the PEPE rewards."
        },
        {
            "question": "What is the function of the Pepe smart contract in the ecosystem?",
            "answer": "The Pepe smart contract manages the staking of WOJAK tokens and distribution of PEPE rewards. Users stake WOJAK by interacting with the contract, which then may mint PEPE tokens based on set conditions. The process is automated and transparent, providing a decentralized system for token transactions."
        },
        {
            "question": "Can you describe the staking management and reward mechanism in the Pepe ecosystem?",
            "answer": "Staking and rewards in the Pepe ecosystem are controlled by the smart contract. Users stake WOJAK with the 'stake' function and withdraw with 'withdraw'. Rewards are claimed through 'getReward', with the contract calculating and minting PEPE tokens. A fee in ETH is taken from the rewards for ecosystem development, and the rest is awarded to the user."
        },

        {
            "question": "How does the Pepe DEX maintain a healthy mint-burn balance in its ecosystem?",
            "answer": "The Pepe DEX employs a strategic mint-burn mechanism to maintain token value and ecosystem stability. Minting occurs primarily through rewards for liquidity providers and staking participants. To counteract inflationary pressures, we implement token burning mechanisms, such as burning a portion of transaction fees or implementing buy-back-and-burn strategies. This balance is crucial for sustaining long-term token value and ecosystem health."
        },
        {
            "question": "Are new PEPE tokens currently being minted for staking rewards?",
            "answer": "No, minting new PEPE tokens for staking rewards is currently halted. The community voted to set the difficulty high, which results in zero rewards being distributed at this time."
        },
        {
            "question": "How does the tax work when claiming rewards on Pepe DEX?",
            "answer": "When claiming rewards, a tax is applied as a percentage of the reward's value, payable in ETH. This tax is used to fund community initiatives and promote the Pepe ecosystem."
        },
        {
            "question": "Can you explain how the 'difficulty' setting impacts rewards in the Pepe DEX?",
            "answer": "In the Pepe DEX, the 'difficulty' setting is a crucial factor in determining how many rewards users get for staking their tokens. Think of 'difficulty' as a hurdle or challenge level in a game. When the difficulty is set high, it's like the game becomes harder, and as a result, the rewards you can earn for the same effort are less. This reduced reward rate helps to prevent too many new PEPE tokens from being created (or minted), which could lead to inflation. Inflation in this context means there are too many tokens available, which can reduce their value. So, by adjusting the difficulty, we can control how many new tokens are given out as rewards, helping to maintain the value of both WOJAK and PEPE tokens. It's a balancing act to ensure that staking remains rewarding but doesn't devalue the tokens you earn."
        },
        {
            "question": "What strategies are being implemented for liquidity and MEME tokens on the DEX?",
            "answer": "To build liquidity, the DEX is focusing on partnerships, such as with wojak.farm, to reward users who add liquidity to PEPE-related pairs. This strategy aims to unite Pepe communities and promote MEME tokens, increasing visibility and trading efficiency. By providing incentives for liquidity providers, we're enhancing the overall ecosystem and user experience."
        },
        {
            "question": "Can I launch my MEME token on the DEX, and what resources are available for learning about DeFi and DEX?",
            "answer": "Yes, the DEX encourages users to create and list their own MEME tokens, subject to certain criteria and community review. Additionally, the platform offers comprehensive guides and tutorials to educate new users about DeFi and the DEX, ensuring a supportive environment for both token creators and traders."
        },
        {
            "question": "How does OG PEPE DEX distinguish itself, and how can users contribute to its development?",
            "answer": "OG PEPE DEX sets itself apart with its 1% fee and focus on community-driven development and MEME token specialization. We value community input for new features or partnerships, which can be suggested through governance processes or community forums. This collaborative approach is key to our continuous evolution and success."
        },

        {
            "question": "What is the strategy for integrating Pepe communities into the Pepe DEX ecosystem?",
            "answer": "Our strategy involves engaging with communities associated with other Pepe tokens, aiming to bring them under the broader Pepe DEX umbrella. By targeting these specific groups, we plan to increase visibility and adoption within the Pepe ecosystem. Incentive programs, collaborations, and community-driven initiatives are key to this approach, helping to unify various Pepe communities and fostering a more robust and interconnected ecosystem."
        },
        {
            "question": "How does the DEX ensure ecosystem sustainability while promoting MEME tokens?",
            "answer": "Sustainability in the DEX is achieved through a careful balance of promoting MEME tokens and ensuring responsible ecosystem management. We focus on supporting MEME tokens with strong community backing and potential for growth, while implementing mechanisms to maintain liquidity and token value. This includes liquidity incentives, community engagement programs, and regular evaluations of token performance to ensure alignment with our long-term ecosystem goals."
        },
        {
            "question": "What are the long-term plans for the OG PEPE token within the DEX?",
            "answer": "Long-term plans for the OG PEPE token revolve around enhancing its utility and value within the DEX. This includes integrating OG PEPE into governance processes, using it as a key token for exclusive features or services, and developing partnerships that extend its use cases. By continuously evolving its utility, we aim to solidify OG PEPE's position as a cornerstone of our ecosystem, benefiting token holders and contributing to the overall health of the platform."
        }


    ]

        ;

    return (
        <>
            <Head>
                <title>PEPE</title>
                <meta
                    name="description"
                    content="The home of the Original PEPE Community, deployed in 2020- 0x4dFae3690b93c47470b03036A17B23C1Be05127C"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div className={styles.header}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/logo.png"
                            alt="PEPE Logo"
                            height="60"  // Increased size for more prominence
                            width="60"
                        />
                        <div className={styles.logoTextContainer}>
                            <h1 className={styles.logoTitle}></h1>
                            <p className={styles.logoSubtitle}>The Original PEPE</p>
                        </div>
                    </div>
                    {/* Navigation Menu */}
                    <nav className={styles.menuLink}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/info" className={styles.navLink}>About</Link>
                        <Link href="/pepe" className={styles.navLink}>PEPE</Link>
                        <Link href="/chad" className={styles.navLink}>CHAD</Link>
                        <Link href="https://swap.ogpepe.io" className={styles.navLink}>DEX</Link>
                        {/* Add more links as needed */}
                    </nav>
                    <div className={styles.buttons}>
                        <w3m-network-button />
                        <w3m-button />
                    </div>
                </div>
            </header>

            <main style={{ marginTop: '128px' }}>
                <FAQ faqs={faqs} />

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
