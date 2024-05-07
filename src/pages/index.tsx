import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useAccount, useConnect, useContractRead } from "wagmi";
import Link from "next/link";
import { ABIWOJAK } from "../contracts/ABIS";
import { formatUnits, BigNumberish } from "ethers";
import Intro from "@/components/Intro";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function Home() {
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

    const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [totalSupply, setTotalSupply] = useState(0);
  const [burned, setBurned] = useState(0);
  const [circulatingSupply, setCirculatingSupply] = useState(0);

  const [userBalance, setUserBalance] = useState<number>(0);
  // Fetch user balance
  const userBalanceResult = useContractRead({
    address: "0x4dFae3690b93c47470b03036A17B23C1Be05127C",
    abi: ABIWOJAK,
    functionName: "balanceOf",
    args: [address],
  });

  useEffect(() => {
    if (userBalanceResult.data) {
      const formattedUserBalance = parseFloat(
        formatUnits(userBalanceResult.data.toString(), "ether")
      );
      setUserBalance(formattedUserBalance);
    }
  }, [userBalanceResult.data]);

  // TokenSupplyComponent - Fetch and set total supply
  const totalSupplyResult = useContractRead({
    address: "0x4dFae3690b93c47470b03036A17B23C1Be05127C",
    abi: ABIWOJAK,
    functionName: "totalSupply",
  });

  useEffect(() => {
    if (totalSupplyResult.data) {
      const formattedTotalSupply = parseFloat(
        formatUnits(totalSupplyResult.data.toString(), "ether")
      );
      setTotalSupply(formattedTotalSupply);
    }
  }, [totalSupplyResult.data]);

  // TokenBurnedComponent - Fetch and set burned tokens
  const burnedResult = useContractRead({
    address: "0x4dFae3690b93c47470b03036A17B23C1Be05127C",
    abi: ABIWOJAK,
    functionName: "balanceOf",
    args: ["0x000000000000000000000000000000000000dEaD"],
  });

  useEffect(() => {
    if (burnedResult.data) {
      const formattedBurned = parseFloat(
        formatUnits(burnedResult.data.toString(), "ether")
      );
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
      functionName: "balanceOf", // Replace with your contract's relevant function
      args: [address], // Arguments for the function call
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading balance</div>;

    // Assuming the balance is returned as a BigNumber, convert it as needed
    const balanceInWei = data || 0;
    const formattedBalance: string = formatUnits(
      balanceInWei.toString(),
      "ether"
    );

    return <div>PEPE Balance: {parseFloat(formattedBalance).toFixed(3)}</div>;
  }

  const DappButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const buttonStyle = {
      color: "white",
      //backgroundColor: isHovered ? "#3e8e41" : "#66974C", // Green background, darker on hover
      padding: "10px 15px",
      borderRadius: "8px",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
      margin: "10px",
	  border: "2px solid #ffff",
      display: "inline-block", // To maintain button shape
      cursor: "pointer", // Change cursor on hover
    };

    return (
      <div style={{ textAlign: "center" }}>
        {" "}
        {/* Center the button container */}
        <a
		className="text-white"
          href="https://swap.ogpepe.io"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Launch APP
        </a>
      </div>
    );
  };

  return (
    <>
       <div className={`fixed w-full h-screen bg-[#4c9540] flex justify-center items-center top-0 z-[100001] ${isMenuOpened?"block":"hidden"}`}>
        
        {isMenuOpened?<IoCloseSharp className="text-white absolute top-8 right-4 z-[100002] w-10 h-10 cursor-pointer" onClick={()=>{setIsMenuOpened(false)}}></IoCloseSharp>:<></>}
        <div className="flex flex-col gap-4">
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/" className={styles.navLink}>
            About
          </Link>
          <Link href="/" className={styles.navLink}>
            PEPE
          </Link>
          <Link href="/" className={styles.navLink}>
            CHAD
          </Link>
          <Link href="https://swap.ogpepe.io" className={styles.navLink}>
            DEX
          </Link>
          {/* Add more links as needed */}
          <Link href="https://swap.ogpepe.io" className={styles.navLink}>
            Launch App
          </Link>
        </div>
      </div>
      <Head>
        <title>PEPE</title>
        <meta
          name="description"
          content="The home of the Original PEPE Community, deployed in 2020- 0x4dFae3690b93c47470b03036A17B23C1Be05127C"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <img
              src="/logo.png"
              alt="PEPE Logo"
              height="60" // Increased size for more prominence
              width="60"
            />
            <div className={styles.logoTextContainer}>
              <h1 className={styles.logoTitle}>OG Pepe</h1>
              <p className={styles.logoSubtitle}>The Original PEPE</p>
            </div>
          </div>
          {/* Navigation Menu */}
          <nav className={styles.menuLink}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/" className={styles.navLink}>
              About
            </Link>
            <Link href="/" className={styles.navLink}>
              PEPE
            </Link>
            <Link href="/" className={styles.navLink}>
              CHAD
            </Link>
            <Link href="https://swap.ogpepe.io" className={styles.navLink}>
              DEX
            </Link>
            {/* Add more links as needed */}
           
          <div className={styles.buttons}>
              <DappButton />
          </div>
          </nav>
          {!isMenuOpened?
          <GiHamburgerMenu className="text-white block lg:hidden w-10 h-10 cursor-pointer" onClick={()=>{setIsMenuOpened(true)}}></GiHamburgerMenu>:<></>}
        </div>
      </header>
      <Intro />
    </>
  );
}
