import React, { useEffect, useState } from "react";
import { SwapWidget, Theme } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { MY_TOKEN_LIST } from "../utils/constants";
import styles from "@/styles/Intro.module.css";
import Image from "next/image";

const TimeSinceDeployment = () => {
  const [timeSinceDeployment, setTimeSinceDeployment] = useState("");

  useEffect(() => {
    const deploymentTimestamp = 1602340728; // Replace with actual deployment timestamp
    const deploymentTime = new Date(deploymentTimestamp * 1000);

    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = now.getTime() - deploymentTime.getTime();

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeSinceDeployment(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.timerInfo}>
      <p className={styles.timer}>Age: {timeSinceDeployment}</p>
    </div>
  );
};

// Utility function to format currency values
function formatCurrency(value: string): string {
  const numValue = parseFloat(value);
  if (isNaN(numValue)) {
    return "N/A"; // Return 'N/A' if value is not a valid number
  }

  if (numValue < 1000) {
    return `$${numValue.toFixed(2)}`;
  } else if (numValue < 1000000) {
    return `$${(numValue / 1000).toFixed(1)}k`;
  } else {
    return `$${(numValue / 1000000).toFixed(2)}m`;
  }
}

const SocialLinks = () => {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.row}>
        <a
          href="https://twitter.com/theogpepe2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={50}
            height={50}
            src="/socials/x-logo.png"
            alt="Twitter"
            className={styles.logoImage}
          />
        </a>
        <a
          href="https://t.me/OgPeperc20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={50}
            height={50}
            src="/socials/telegram-logo.png"
            alt="Telegram"
            className={styles.logoImage}
          />
        </a>
        <a
          href="https://www.dextools.io/app/es/ether/pair-explorer/0xa84181f223a042949e9040e42b44c50021802db6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={50}
            height={50}
            src="/socials/dextools-logo.png"
            alt="Dextools"
            className={styles.logoImage}
          />
        </a>
      </div>
      <div className={styles.row}>
        <a
          href="https://app.uniswap.org/#/swap?outputCurrency=0x4dFae3690b93c47470b03036A17B23C1Be05127C"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={50}
            height={50}
            src="/socials/uniswap-logo.png"
            alt="Uniswap"
            className={styles.logoImage}
          />
        </a>
        <a
          href="https://the-og-pepe.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={50}
            height={50}
            src="/socials/medium-logo.png"
            alt="Medium"
            className={styles.logoImage}
          />
        </a>
        <a
          href="https://github.com/theogpepe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width={50}
            height={50}
            src="/socials/github-logo.png"
            alt="Medium"
            className={styles.logoImage}
          />
        </a>
      </div>
    </div>
  );
};

const Intro: React.FC = () => {
  return (
    <div className="w-full">
      <div className={styles.container}>
        <div className="flex flex-col justify-start items-center bg-[url('/coins-bg.png')] bg-contain bg-no-repeat bg-top w-full max-w-4xl">
          <div className="relative flex justify-center">
            <img
              src="./pepe-temp.png"
              className="w-4/6 md:w-[325px] md:h-[308px]"
            ></img>
            <img
              src="./glass.png"
              className="top-7 md:top-28 left-4 md:-left-0 absolute w-3/6 md:w-[205px] md:h-[72px] hover:animate-shake"
            ></img>
          </div>
          <h1
            style={{ textShadow: "6px 5px 0 #000" }}
            className="z-10 text-shadow-medium -mt-2 md:-mt-12 mb-10 max-w-80 md:max-w-md font-chango text-4xl text-center text-stroke-thin text-yellow-300 md:text-5xl leading-none"
          >
            Unleashing the Titan of Memes
          </h1>
          <button className="hover:scale-125 border-2 bg-slate-200 hover:bg-slate-300 box-shadow text-shadow px-4 py-1 border-black rounded-md font-chango text-green-300 text-lg text-stroke-thin hover:text-green-500 whitespace-nowrap hover:animate-pulse duration-300 ease-in">
            <a
              href="https://app.uniswap.org/#/swap?outputCurrency=0x4dFae3690b93c47470b03036A17B23C1Be05127C"
              target="_blank"
              className="flex justify-center items-center gap-x-2"
            >
              <img
                alt="telegram icon"
                width="44"
                height="44"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                style={{ color: "transparent" }}
                src="./socials/uniswap-logo.png"
              />
            </a>Buy Now
          </button>
          <div className="flex md:flex-row flex-col gap-4 mt-8">
            <a
              href="https://app.uniswap.org/#/swap?outputCurrency=0x4dFae3690b93c47470b03036A17B23C1Be05127C"
              target="_blank"
              className="flex justify-center items-center gap-x-2"
            >
              <img
                alt="telegram icon"
                width="44"
                height="44"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                style={{ color: "transparent" }}
                src="./socials/uniswap-logo.png"
              />
            </a>
            <a
              href="https://x.com/theogpepe2020"
              target="_blank"
              className="flex justify-center items-center gap-x-2"
            >
              <img
                alt="x icon"
                width="44"
                height="44"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                style={{ color: "transparent" }}
                src="./socials/x-logo.png"
              />
            </a>
            <a
              href="https://www.dextools.io/app/es/ether/pair-explorer/0xa84181f223a042949e9040e42b44c50021802db6"
              target="_blank"
              className="flex justify-center items-center gap-x-2"
            >
              <img
                alt="telegram icon"
                width="44"
                height="44"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                style={{ color: "transparent" }}
                src="./socials/dextools-logo.png"
              />
            </a>
            <a
              href="https://github.com/theogpepe"
              target="_blank"
              className="flex justify-center items-center gap-x-2"
            >
              <img
                alt="telegram icon"
                width="44"
                height="44"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                style={{ color: "transparent" }}
                src="./socials/github-logo.png"
              />
            </a>
            <a
              href="https://t.me/OgPeperc20"
              target="_blank"
              className="flex justify-center items-center gap-x-2"
            >
              <img
                alt="telegram icon"
                width="44"
                height="44"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                style={{ color: "transparent" }}
                src="./socials/telegram-icon.svg"
              />
            </a>
            <a
              href="https://docs.ogpepe.io/"
              target="_blank"
              className="flex justify-center items-center gap-x-2"
            >
              <img
                alt="telegram icon"
                width="44"
                height="44"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                style={{ color: "transparent" }}
                src="./socials/gitbook-logo.png"
              />
            </a>
            <a
              href="https://the-og-pepe.medium.com/"
              target="_blank"
              className="flex justify-center items-center gap-x-2"
            >
              <img
                alt="telegram icon"
                width="44"
                height="44"
                decoding="async"
                data-nimg="1"
                className="w-8 h-8"
                style={{ color: "transparent" }}
                src="./socials/medium-logo.png"
              />
            </a>
          </div>
        </div>
        <TimeSinceDeployment />


      </div>

      <div className="bg-[url('/separator-1.png')] bg-[length:250px_50px] bg-repeat-x w-full h-[50px]"></div>

      <section
        id="about"
        className="flex flex-col justify-center items-center w-full"
      >
        <div className="flex flex-col justify-start items-center bg-[#FCFEBA] py-10 w-full">
          <h2 className="z-10 text-shadow-medium mt-10 font-chango text-4xl text-center text-stroke-thin text-yellow-300 md:text-5xl leading-none">
            Introduction
          </h2>
          <div className="text-black mb-6 font-extrabold font-inter text-xl uppercase font-sans w-full text-center"></div>
          <div className="text-black text-xl leading-normal font-sans w-full max-w-[720px]">
            <p>Welcome to the Home of the Oldest & Rarest PEPE on Ethereum.</p>
            <p>             We stand as a beacon of Transparency & Community-driven Success in the Crypto World. With 20% of Tokens Burnt, a circulating supply of just 37,321 PEPE, Taxes at 0%, and No team wallets or other sketchy shenanigans...we will aim to Flip the Price of Bitcoin.
            </p>
            <p>Join us as we gain International Visibility for our Beloved PEPE!</p>
            <p>Truly, The Bitcoin of Memecoins!</p>
          </div>
        </div>
      </section>
      <div className="z-20 relative bg-[url('/separator-2.png')] bg-[length:250px_50px] bg-repeat-x w-full h-[50px]"></div>
      <section
        id="how-to-buy"
        className="flex flex-col justify-center items-center w-full"
      >
        <div className="flex flex-col justify-start items-center bg-[#26b671] bg-[url('/pattern.png')] bg-[length:55px_55px] -mt-10 py-10 w-full">
          <img
            alt="OG Pepe coin"
            width="100"
            height="100"
            decoding="async"
            data-nimg="1"
            className="z-10 mt-6 w-24 hover:animate-spin"
            style={{ color: "transparent" }}
            src="./logo.png"
          />
          <div className="z-10 text-shadow-medium mt-2 mb-20 font-chango text-4xl text-center text-stroke-thin text-yellow-300 md:text-5xl leading-none">
            How to buy OGPepe
          </div>
          <div className="mb-20 px-4 max-w-7xl container">
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full font-mono">
              <div className="z-40 flex flex-col gap-2 border-2 bg-white box-card-shadow-2 p-8 border-black rounded-2xl -rotate-3 text-black">
                <img
                  alt="Wallet"
                  width="45"
                  height="45"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="./uniswap.png"
                />
                <div className="font-extrabold font-inter text-xl uppercase">
                  Visit{" "}
                  <a
                    className=" text-[#0096FF]"
                    href="https://app.uniswap.org/#/swap?outputCurrency=0x4dFae3690b93c47470b03036A17B23C1Be05127C/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Uniswap{" "}
                  </a>
                </div>
                <div className="font-inter text-normal"></div>
              </div>
              <div className="z-30 flex flex-col gap-2 border-2 bg-white box-card-shadow-2 p-8 border-black rounded-2xl rotate-3 text-black">
                <img
                  alt="Solana"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="./card-1.webp"
                />
                <div className="font-extrabold font-inter text-xl uppercase">
                  Connect your wallet.
                </div>
                <div className="font-inter text-normal">
                  Buy ETH and send it to your wallet
                </div>
              </div>
              <div className="z-20 flex flex-col gap-2 border-2 bg-white box-card-shadow-2 p-8 border-black rounded-2xl -rotate-3 text-black">
                <div className="flex items-center gap-6 w-full">
                  <img
                    alt="Jupiter-logo"
                    width="200"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    className="w-28 h-12"
                    style={{ color: "transparent" }}
                    src="./pair.png"
                  />
                </div>
                <div className="font-extrabold font-inter text-xl uppercase">
                  SWAP ETH for
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-inter text-normal">
                    Go to
                    <a
                      href="https://app.uniswap.org/#/swap?outputCurrency=0x4dFae3690b93c47470b03036A17B23C1Be05127C"
                      target="_blank"
                      className="font-inter text-blue-500 text-normal"
                    >
                      Swap
                    </a>
                    \
                  </div>
                  <div className="font-inter text-normal">
                    Connect your wallet, add OG PEPE token
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="z-20 relative bg-[url('/separator-3.png')] bg-[length:250px_50px] bg-repeat-x w-full h-[50px]"></div>
      <section
        id="app"
        className="flex flex-col justify-center items-center w-full"
      >
        <div className="flex flex-col justify-start items-center bg-[#fcfebf] -mt-10 py-10 w-full">
          <div className="z-10 text-shadow-medium mt-16 md:mb-10 px-2 font-chango text-4xl text-center text-stroke-thin text-yellow-300 md:text-5xl leading-none">
            Memes
          </div>
          <div className="flex flex-col gap-10 mt-10 pt-10 max-w-7xl overflow-hidden  text-black font-mono">
            <div className="flex md:flex-row flex-col items-center md:items-start gap-y-4 md:gap-y-0 md:gap-x-4 px-4">
              <div className="pl-12 w-5/6 md:w-1/3">
                <img
                  alt="Pic 1"
                  width="396"
                  height="447"
                  decoding="async"
                  data-nimg="1"
                  className="w-full box-card-shadow rounded-md w-full"
                  style={{ color: "transparent" }}
                  src="./img1.png"
                />
              </div>
              <div className="relative flex flex-col gap-4 border-2 bg-[#C9FFB6] box-card-shadow-2 px-8 py-10 p-8 border-black rounded-2xl w-3/4 md:w-2/3 rotate-3">
                <div className="top-1/3 -left-10 absolute bg-[url('/app/num1.png')] bg-contain bg-no-repeat w-16 h-full"></div>
                <h2><i className="fas fa-leaf token-icon"></i>Welcome to Wojak.Farm (WOJAK)</h2>
                <p>At Wojak.Farm, we pride ourselves on offering a robust ecosystem designed to empower our community. Here's what you need to know about WOJAK:</p>
                <ul>
                  <li><i className="fas fa-certificate"></i> <strong>Capped Supply:</strong> With a maximum supply of 11,000 WOJAK tokens, we ensure stability and reliability.</li>
                  <li><i className="fas fa-hand-holding-usd"></i> <strong>Staking Rewards:</strong> Stake your WOJAK tokens and unlock the potential to earn PEPE rewards, enriching your engagement within our ecosystem.</li>
                </ul>
              </div>
            </div>
            <div className="flex md:flex-row-reverse flex-col items-center md:items-start gap-y-4 md:gap-y-0 md:gap-x-4 px-4">
              <div className="relative pr-12 w-5/6 md:w-1/3">
                <div className="top-0 right-2 absolute bg-[url('/app/num2-bg.png')] bg-contain bg-no-repeat w-16 h-full"></div>
                <img
                  alt="Pic 2"
                  width="396"
                  height="447"
                  decoding="async"
                  data-nimg="1"
                  className="w-full box-card-shadow rounded-md w-full"
                  style={{ color: "transparent" }}
                  src="./img2.png"
                />
              </div>
              <div className="relative flex flex-col gap-4 border-2 bg-[#E1DEFE] box-card-shadow-2 px-8 py-10 p-8 border-black rounded-2xl w-3/4 md:w-2/3 -rotate-3">
                <div className="top-1/3 -right-10 absolute bg-[url('/app/num2.png')] bg-contain bg-no-repeat w-16 h-full"></div>
                <h2><i className="fab fa-pagelines token-icon"></i>Pepe (PEPE)</h2>
                <p>Experience the rewards and engagement of our ecosystem with PEPE:</p>
                <ul>
                  <li><i className="fas fa-coins"></i> <strong>User Incentives:</strong> PEPE incentivizes active participation within our community.</li>
                  <li><i className="fas fa-gift"></i> <strong>Reward Mechanism:</strong> Earn PEPE tokens by staking WOJAK and contributing ETH tax to CHAD.</li>
                  <li><i className="fas fa-calculator"></i> <strong>Tax Calculation:</strong> The Oracle facilitates tax calculation, ensuring transparency and accuracy.</li>
                  <li><i className="fas fa-cogs"></i> <strong>Future Development:</strong> While minting is currently inactive, we are working on implementing PEPE burn features to enhance the ecosystem's sustainability.</li>
                </ul>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center md:items-start gap-y-4 md:gap-y-0 md:gap-x-4 px-4">
              <div className="relative flex justify-center items-center bg-[url('/app/star3_1.png')] bg-[length:24px_24px] bg-no-repeat pr-12 w-5/6 md:w-1/4 h-full text-center align-center">
                <img
                  alt="Pic 2"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className="mt-4 md:mt-20 box-card-shadow rounded-md w-full"
                  style={{ color: "transparent" }}
                  src=".  /star3.png"
                />
              </div>
              <div className="relative flex flex-col gap-4 border-2 bg-[#FFE6B6] box-card-shadow-2 px-8 py-10 p-8 border-black rounded-2xl w-3/4 md:w-2/4 rotate-3">
                <div className="top-1/3 -left-10 absolute bg-[url('/app/num3.png')] bg-contain bg-no-repeat w-16 h-full"></div>
                <h2><i className="fas fa-dumbbell token-icon"></i>Chad</h2>
                <p>Discover the essential role played by CHAD within our ecosystem:</p>
                <ul>
                  <li><i className="fas fa-file-invoice-dollar"></i> <strong>Tax Collection:</strong> CHAD collects PEPE tax to maintain the sustainability and balance of our ecosystem.</li>
                  <li><i className="fas fa-hand-holding-usd"></i> <strong>ETH Rewards:</strong> Burn CHAD tokens to receive accumulated ETH rewards.</li>
                  <li><i className="fas fa-certificate"></i> <strong>Supply Cap:</strong> With a maximum supply of 182k, CHAD implements deflationary mechanisms to foster long-term value.</li>
                </ul>
              </div>
            </div>
            <div className="flex md:flex-row-reverse flex-col items-center md:items-start gap-y-4 md:gap-y-0 md:gap-x-4 mb-4 px-4">
              <div className="relative flex justify-center items-center pr-12 w-5/6 md:w-1/4 h-full text-center align-center">
                <img
                  alt="Pic 2"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  style={{ color: "transparent" }}
                  src=".  /star4.png"
                />
              </div>
              <div className="relative flex flex-col gap-4 border-2 bg-[#E1F4FF] box-card-shadow-2 px-8 py-10 p-8 border-black rounded-2xl w-3/4 md:w-2/4 -rotate-3">
                <div className="top-1/3 -right-10 absolute bg-[url('/app/num4.png')] bg-contain bg-no-repeat w-16 h-full"></div>
                <h2><i className="fas fa-leaf token-icon"></i>Welcome to Wojak.Farm Ecosystem</h2>
  <p>Explore the vibrant ecosystem of Wojak.Farm, where innovation meets community:</p>
  <ul>
    <li><i className="fas fa-certificate"></i> <strong>WOJAK Token:</strong> Our foundational token with a capped supply of 11,000, offering stability and staking rewards.</li>
    <li><i className="fab fa-pagelines"></i> <strong>PEPE Token:</strong> Incentivizing engagement and participation through rewards and tax contributions.</li>
    <li><i className="fas fa-dumbbell"></i> <strong>CHAD Token:</strong> The powerhouse ensuring economic equilibrium through tax collection and ETH rewards.</li>
  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="z-20 relative bg-[url('/separator-4.png')] bg-[length:250px_50px] bg-repeat-x w-full h-[50px]"></div>
      <section
        id="tokenomics"
        className="flex flex-col justify-center items-center w-full text-black font-mono"
      >
        <div className="flex flex-col justify-start items-center bg-[#ffe6ba] -mt-10 py-10 w-full">
          <div className="z-10 text-shadow-medium mt-16 px-2 font-chango text-4xl text-center text-stroke-thin text-yellow-300 md:text-5xl leading-none">
            Tokenomics
          </div>
          <div className="my-16 px-4 max-w-3xl container">
            <div className="relative grid grid-cols-2 md:grid-cols-4 bg-tokenomics-2 bg-contain bg-no-repeat bg-center w-full">
              <div className="absolute bg-tokenomics-1 bg-contain bg-no-repeat bg-center w-full h-full pointer-events-none"></div>
              <div className="flex flex-col items-center gap-4 mx-auto max-w-[120px]">
                <div className="border-2 bg-[#caffbb] box-card-shadow-2 p-4 border-black rounded-2xl">
                  <img
                    alt="no taxes"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="./card-1.svg"
                  />
                </div>
                <div className="font-extrabold font-inter text-center text-sm uppercase">
                  No Taxes
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 mx-auto max-w-[120px]">
                <div className="border-2 bg-[#e1defc] box-card-shadow-2 p-4 border-black rounded-2xl h-[120px]">
                  <img
                    alt="no taxes"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="./card-2.png"
                  />
                </div>
                <div className="font-extrabold font-inter text-center text-sm uppercase">
                  Token supply
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 mx-auto max-w-[120px]">
                <div className="border-2 bg-[#ffe6ba] box-card-shadow-2 p-4 border-black rounded-2xl">
                  <img
                    alt="no taxes"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="./card-3.svg"
                  />
                </div>
                <div className="font-extrabold font-inter text-center text-sm uppercase">
                  LP tokens are locked
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 mx-auto max-w-[120px]">
                <div className="border-2 bg-[#abdbf5] box-card-shadow-2 p-4 border-black rounded-2xl">
                  <img
                    alt="no taxes"
                    width="100"
                    height="100"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="./card-4.svg"
                  />
                </div>
                <div className="font-extrabold font-inter text-center text-sm uppercase">
                  Contract ownership is NOT renounced
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="z-20 relative bg-[url('/separator-5.png')] bg-[length:250px_50px] bg-repeat-x w-full h-[50px]"></div>
      <section
        id="roadmap"
        className="flex flex-col justify-center items-center w-full"
      >
        <div className="flex flex-col justify-start items-center bg-[#fcfeba] -mt-10 py-10 w-full">
          <div className="z-10 text-shadow-medium mt-10 mb-12 md:mb-20 px-2 font-chango text-4xl text-center text-stroke-thin text-yellow-300 md:text-5xl leading-none">
            Roadmap
          </div>
          <div className="gap-x-4 grid grid-cols-2 bg-[url('/bg.png')] bg-[length:200px_600px] bg-no-repeat bg-center mb-10 px-4 max-w-2xl container">
            <div className="bg-[url('/left.png')] flex col-span-2 bg-[length:350px_90px] bg-no-repeat bg-bottom pb-20">
              <div className="flex items-center gap-4 max-w-[430px] w-full border-2 bg-[#FFE6B6] box-card-shadow-2 p-4 border-black rounded-2xl leading-none">
                <img
                  alt="phase 1"
                  width="60"
                  height="60"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="./roadmap1.png"
                />
                <div className="flex flex-col gap-2 w-full">
                  <div className="font-extrabold font-inter text-center text-orange-500 text-xs uppercase">
                    Q4 2020
                  </div>
                  <div className="z-10 text-shadow font-chango text-2xl text-center text-stroke-thin text-yellow-500 leading-7">
                    Launch Phase
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('/right.png')] flex justify-end col-span-2 bg-[length:350px_90px] bg-no-repeat bg-bottom pb-20">
              <div className="flex flex-row items-center gap-4  max-w-[430px] w-full border-2 bg-[#FFE1F4] box-card-shadow-2 p-4 border-black rounded-2xl">
                <img
                  alt="phase 3"
                  width="60"
                  height="60"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="./roadmap2.png"
                />
                <div className="flex flex-col gap-4 w-full">
                  <div className="font-extrabold font-inter text-center text-orange-500 text-xs uppercase">
                    2021-2022
                  </div>
                  <div className="z-10 text-shadow font-chango text-2xl text-center text-pink-500 text-stroke-thin leading-7">
                    Hibernate Phase
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('/left.png')] flex col-span-2 bg-[length:350px_90px] bg-no-repeat bg-bottom pb-20">
              <div className="flex items-center max-w-[430px] w-full gap-4 border-2 bg-[#E1DEFE] box-card-shadow-2 p-4 border-black rounded-2xl leading-none">
                <img
                  alt="phase 3"
                  width="60"
                  height="60"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="./roadmap3.png"
                />
                <div className="flex flex-col gap-2 w-full">
                  <div className="font-extrabold font-inter text-center text-orange-500 text-xs uppercase">
                    Q2 2023
                  </div>
                  <div className="z-10 text-shadow font-chango text-xl text-center text-stroke-thin text-violet-500 leading-7">
                    Clone PEPE Launched and Reignited Interest
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('/right.png')] flex justify-end col-span-2 bg-[length:350px_90px] bg-no-repeat bg-bottom pb-20">
              <div className="flex flex-row items-center max-w-[430px] w-full gap-4 border-2 bg-[#AADBF7] box-card-shadow-2 p-4 border-black rounded-2xl">
                <img
                  alt="phase 4"
                  width="60"
                  height="60"
                  decoding="async"
                  data-nimg="1"
                  style={{ borderRadius: "10px", color: "transparent" }}
                  src="./roadmap4.png"
                />
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold font-inter text-center text-orange-500 text-xs uppercase">
                    Q4 2023
                  </div>
                  <div className="z-10 text-shadow font-chango text-xl text-center text-sky-500 text-stroke-thin leading-7">
                    Community Formed Spontaneously and Dev Comes Back
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('/left.png')] flex col-span-2 bg-[length:350px_90px] bg-no-repeat bg-bottom pb-20">
              <div className="flex items-center w-full max-w-[430px] gap-4 border-2 bg-[#FFD8DC] box-card-shadow-2 p-4 border-black rounded-2xl leading-none">
                <img
                  alt="phase 5"
                  width="60"
                  height="60"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="./roadmap5.png"
                />
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold font-inter text-center text-orange-500 text-xs uppercase">
                    Q1 2024
                  </div>
                  <div className="z-10 text-shadow font-chango text-[#FF4155] text-2xl text-center text-stroke-thin leading-7">
                    DEX Launch
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('/right.png')] flex justify-end col-span-2 bg-[length:350px_90px] bg-no-repeat bg-bottom pb-20">
              <div className="flex flex-row items-center max-w-[430px] w-full gap-4 border-2 bg-[#abaaf7] box-card-shadow-2 p-4 border-black rounded-2xl">
                <img
                  alt="phase 4"
                  width="60"
                  height="60"
                  decoding="async"
                  data-nimg="1"
                  style={{ borderRadius: "10px", color: "transparent" }}
                  src="./roadmap6.png"
                />
                <div className="flex flex-col gap-2 w-full items-center">
                  <div className="font-extrabold font-inter text-center text-orange-500 text-xs uppercase">
                    Q2 2024
                  </div>
                  <div className="z-10 text-shadow font-chango text-xl text-center text-white text-stroke-thin leading-7">
                    Chad Airdrop
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('/left.png')] flex col-span-2 bg-[length:350px_90px] bg-no-repeat bg-bottom pb-20">
              <div className="flex items-center w-full max-w-[430px] gap-4 border-2 bg-[#FFD8DC] box-card-shadow-2 p-4 border-black rounded-2xl leading-none">
                <img
                  alt="phase 5"
                  width="60"
                  height="60"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent", borderRadius: "10px" }}
                  src="./roadmap7.png"
                />
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold font-inter text-center text-orange-500 text-xs uppercase">
                    Q3 2024
                  </div>
                  <div className="z-10 text-shadow font-chango text-xl text-center text-blue-500 text-stroke-thin leading-7">
                    Wojak.farm Integration
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url('/right.png')] flex justify-end col-span-2 bg-[length:350px_90px] bg-no-repeat bg-bottom pb-20">
              <div className="flex flex-row items-center max-w-[430px] w-full gap-4 border-2 bg-[#abaaf7] box-card-shadow-2 p-4 border-black rounded-2xl">
                <img
                  alt="phase 4"
                  width="60"
                  height="60"
                  decoding="async"
                  data-nimg="1"
                  style={{ borderRadius: "10px", color: "transparent" }}
                  src="./roadmap8.png"
                />
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold font-inter text-center text-orange-500 text-xs uppercase">
                    Q4 2024
                  </div>
                  <div className="z-10 text-shadow font-chango text-[#FF4155] text-2xl text-center text-stroke-thin leading-7">
                    Audits, Partnerships, and Integrations
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center content-center col-span-2 w-full">
              <div className="flex items-center max-w[430px] w-full justify-center gap-4 border-2 bg-[#54B626] box-card-shadow-2 p-4 border-black rounded-2xl leading-none">
                <img
                  alt="phase 6"
                  width="120"
                  height="120"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="./img4.png"
                />
                <div className="flex flex-col items-center gap-5">
                  <div className="font-extrabold font-inter text-center text-white text-2xl uppercase">
                    2025
                  </div>
                  <div className="font-extrabold font-inter text-center text-white text-4xl uppercase">
                    Join Us!
                  </div>
                  {/* <div className="z-10 text-shadow font-chango text-white text-lg text-start leading-7 font-mono">
                  Our journey is just beginning. From revitalizing our website to expanding our Telegram with multi-lingual support, we&apos;re gearing up for an unforgettable DeFi summer. Stay tuned for updates on partnerships, audits, and the full re-ignition of our ecosystem.
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;

/*
<div className={styles.addressSection}>
<a href="https://etherscan.io/token/0x4dfae3690b93c47470b03036A17B23C1Be05127C"
    target="_blank" rel="noopener noreferrer"
    className={styles.addressLink}>
    0x4dFae3690b93c47470b03036A17B23C1Be05127C
</a>
</div>
<div className={styles.header}>

<div className={styles.logoAddress}>
<div className={styles.logoSection}>
    <Image
        src="/logo.png"
        alt="The Original Pepe Logo"
        width={64}
        height={64}
    />
</div>
<h1 className={styles.title}>The Original Pepe </h1>
</div>
</div>





<TimeSinceDeployment /> */
