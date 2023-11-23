import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useAccount, useConnect, useContractRead } from 'wagmi';
import Link from 'next/link';
import { ABIWojak } from '../contracts/ABIS';
import { formatUnits, BigNumberish } from "ethers";
import DEX from "@/components/DEX";
import NFTCollection from "@/components/NFTCollection";
import Intro from "@/components/Intro";

export default function Home() {

	const { connector: activeConnector, isConnected, address } = useAccount()
	const { connect, connectors, error, isLoading, pendingConnector } = useConnect()


	function TokenBalanceComponent() {
		const { data, isError, isLoading } = useContractRead({
			address: "0x4dFae3690b93c47470b03036A17B23C1Be05127C", // Your contract's address
			abi: ABIWojak, // Your contract's ABI
			functionName: 'balanceOf', // Replace with your contract's relevant function
			args: [address], // Arguments for the function call
		});

		if (isLoading) return <div>Loading...</div>;
		if (isError) return <div>Error loading balance</div>;

		// Assuming the balance is returned as a BigNumber, convert it as needed
		const balanceInWei = data || 0;
		const formattedBalance: string = formatUnits(balanceInWei.toString(), 'ether');

		return (
			<div>
				PEPE Balance: {parseFloat(formattedBalance).toFixed(3)}
			</div>
		);
	}

	return (
		<>
			<Head>
				<title>PEPE</title>
				<meta
					name="description"
					content= "The home of the Original PEPE Community, deployed in 2020- 0x4dFae3690b93c47470b03036A17B23C1Be05127C"
					/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<div className={styles.header}>
					<div className={styles.logo}>
						<Image
							src="/logo.png"
							alt="PEPE Logo"
							height="32"
							width="32"
						/>
						<span> PEPE</span>
					</div>
					<div className={styles.buttons}>
							<w3m-network-button />
							<w3m-button />
					</div>
				</div>
			</header>
			<main className={styles.main}>
			<div className={styles.spacer} /> {/* New spacer element */}

				<Intro />
				<div className={styles.spacer} /> {/* New spacer element */}

				<div className={styles.wrapper}>
					<div className={styles.container}>
						{isConnected ? (
							<div className={styles.content}>
								<h2>Blockchain Info</h2>
								<p>Connected as: {address}</p>
								<TokenBalanceComponent />
							</div>
						) : (
							<div className={styles.content}>
								<h2>Connect to Blockchain</h2>
								<p>Please connect to view blockchain information.</p>
								{/* Render connect button or logic */}
							</div>
						)}
					</div>
					<div className={styles.wrapperFooter}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							height={16}
							width={16}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
							/>
						</svg>
						<Link href="/info">
							Check out the full information here
						</Link>
					</div>
				</div>
				<div className={styles.spacer} /> {/* New spacer element */}

				<DEX />
				<div className={styles.spacer} /> {/* New spacer element */}

				<NFTCollection />
				<div className={styles.spacer} /> {/* New spacer element */}

				<footer className={styles.footer}>
        <a href="https://x.com/firstpepeerc20" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Twitter</a>
        <a href="https://t.me/theogpepe" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Telegram</a>
        <a href="https://www.dextools.io/app/es/ether/pair-explorer/0xa84181f223a042949e9040e42b44c50021802db6" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Dextools</a>
        <a href="https://app.uniswap.org/#/swap?outputCurrency=0x4dFae3690b93c47470b03036A17B23C1Be05127C" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Uniswap</a>
        <a href="https://the-og-pepe.medium.com/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Medium</a>
      </footer>
			</main>
		</>
	);
}