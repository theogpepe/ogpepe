import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useAccount, useConnect, useContractRead } from 'wagmi';
import Link from 'next/link';
import { ABIWOJAK } from '../contracts/ABIS';
import { formatUnits, BigNumberish } from "ethers";
import DEX from "@/components/DEX";
import Dapp from './dapp';

export default function Home() {

	const { connector: activeConnector, isConnected, address } = useAccount()
	const { connect, connectors, error, isLoading, pendingConnector } = useConnect()

	const [totalSupply, setTotalSupply] = useState(0);
	const [burned, setBurned] = useState(0);
	const [circulatingSupply, setCirculatingSupply] = useState(0);

	const [userBalance, setUserBalance] = useState<number>(0);
	// Fetch user balance
	const userBalanceResult = useContractRead({
		address: "0x4dFae3690b93c47470b03036A17B23C1Be05127C",
		abi: ABIWOJAK,
		functionName: 'balanceOf',
		args: [address],
	});

	useEffect(() => {
		if (userBalanceResult.data) {
			const formattedUserBalance = parseFloat(formatUnits(userBalanceResult.data.toString(), 'ether'));
			setUserBalance(formattedUserBalance);
		}
	}, [userBalanceResult.data]);

	// TokenSupplyComponent - Fetch and set total supply
	const totalSupplyResult = useContractRead({
		address: "0x4dFae3690b93c47470b03036A17B23C1Be05127C",
		abi: ABIWOJAK,
		functionName: 'totalSupply',
	});

	useEffect(() => {
		if (totalSupplyResult.data) {
			const formattedTotalSupply = parseFloat(formatUnits(totalSupplyResult.data.toString(), 'ether'));
			setTotalSupply(formattedTotalSupply);
		}
	}, [totalSupplyResult.data]);

	// TokenBurnedComponent - Fetch and set burned tokens
	const burnedResult = useContractRead({
		address: "0x4dFae3690b93c47470b03036A17B23C1Be05127C",
		abi: ABIWOJAK,
		functionName: 'balanceOf',
		args: ["0x000000000000000000000000000000000000dEaD"],
	});

	useEffect(() => {
		if (burnedResult.data) {
			const formattedBurned = parseFloat(formatUnits(burnedResult.data.toString(), 'ether'));
			setBurned(formattedBurned);
		}
	}, [burnedResult.data]);

	// Calculate circulating supply
	useEffect(() => {
		setCirculatingSupply(totalSupply - burned);
	}, [totalSupply, burned]);

	function TokenBalanceComponent() {
		const { data, isError, isLoading } = useContractRead({
			address: "0x4dFae3690b93c47470b03036A17B23C1Be05127C", // Your contract's address
			abi: ABIWOJAK, // Your contract's ABI
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

	const DappButton = () => {
			const linkStyle = {
			  color: '#0070f3', // Example color
			  textDecoration: 'none',
			  fontWeight: 'bold',
			  // Add more styling as needed
			};
		  
			return (
				<Link href="https://swap.ogpepe.io"><div style={linkStyle}>Swap</div></Link>
			);
		  };
		  

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
			<DEX />
			<DappButton />
		</>
	);
}
