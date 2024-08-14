import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useAccount, useConnect, useContractRead } from 'wagmi';
import Link from 'next/link';
import { ABIWOJAK } from '../contracts/ABIS';
import { formatUnits, BigNumberish } from "ethers";
import Intro from '@/components/Intro';

export default function Home() {

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
							<h1 className={styles.logoTitle}>OG Pepe</h1>
							<p className={styles.logoSubtitle}>The Original PEPE</p>
						</div>
					</div>
					{/* Navigation Menu */}
					<nav className={styles.menuLink}>
					<Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/charts" className={styles.navLink}>Charts</Link>
            <Link href="https://pepex.app" className={styles.navLink}>DEX</Link>
						{/* Add more links as needed */}
					</nav>
					<div className={styles.buttons}>
						<w3m-network-button />
						<w3m-button />
					</div>
				</div>
			</header>
			<Intro />
		</>
	);
}
