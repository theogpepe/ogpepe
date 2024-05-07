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
              className="top-28 left-16 md:-left-0 absolute w-3/6 md:w-[205px] h-[72px] hover:animate-shake"
            ></img>
          </div>
          <h1
            style={{ textShadow: "6px 5px 0 #000" }}
            className="z-10 text-shadow-medium -mt-2 md:-mt-12 mb-10 max-w-80 md:max-w-md font-chango text-4xl text-center text-stroke-thin text-yellow-300 md:text-5xl leading-none"
          >
            Unleashing the Titan of Memes
          </h1>
          <button className="hover:scale-125 border-2 bg-slate-200 hover:bg-slate-300 box-shadow text-shadow px-4 py-1 border-black rounded-md font-chango text-green-300 text-lg text-stroke-thin hover:text-green-500 whitespace-nowrap hover:animate-pulse duration-300 ease-in">
            Buy Now
          </button>
          <div className="flex flex-row gap-1 md:gap-4 mt-8">
            <a
              href="https://x.com/memeogpepecoin"
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
              href="https://ogpepe.io"
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
              href="https://t.me/memeogpepecoin"
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
              href="https://ogpepe.io/info"
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
          </div>
        </div>
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
          <div className="text-black text-xl leading-normal font-sans w-full max-w-[420px] md:max-w-[720px]">
            Welcome to , the home of the oldest and rarest Pepe tokens. With a
            circulating supply of just 37,321 tokens and a commitment to 0/0
            tax, no team wallets, or any sketchy shenanigans, stands as a beacon
            of transparency and community-driven success in the crypto world.
            Join us as we aim to flip the price of ETH and BTC, gaining
            international visibility and notoriety for our beloved brand.
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
                    href="https://app.uniswap.com/"
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
                      href="https://jup.ag/"
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
                <div className="font-extrabold font-inter text-xl">
                  MemeOGPepe: Unleashing the Power of Meme Coins on the Dynamic
                  Canvas
                </div>
                <div className="text-lg leading-normal">
                  The MEMEOGPEPE platform introduces a dynamic and interactive
                  advertising canvas, a sprawling 1250 by 800 pixel grid, where
                  the vibrant world of meme coins converges.
                </div>
                <div className="text-lg leading-normal">
                  This digital billboard serves as a unique stage for meme coins
                  to showcase themselves, each claiming their spot within this
                  pixelated expanse.
                </div>
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
                <div className="font-extrabold font-inter text-xl">
                  Unlocking Digital Real Estate: Staking OG PEPE Coins for Meme
                  Coin Advertising on MEMEOGPEPE
                </div>
                <div className="text-lg leading-normal">
                  To secure a piece of this digital real estate, meme coin
                  creators must engage with the MEMEOGPEPE ecosystem by staking
                  OG PEPE coins. This initial stake acts as a key, unlocking the
                  ability to rent space on the grid. From there, advertisers
                  have the flexibility to rent their pixel plots for any
                  duration, ranging from a single month to several months,
                  tailoring their campaign lengths to their needs and ambitions.
                </div>
              </div>
            </div>
            {/* <div className="flex md:flex-row flex-col items-center md:items-start gap-y-4 md:gap-y-0 md:gap-x-4 px-4">
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
                <div className="font-extrabold font-inter text-xl">
                  Active Engagement and Investment through OG PEPE Rent Payments
                </div>
                <div className="text-lg leading-normal">
                  This model encourages active participation and investment in
                  the MEMEOGPEPE community, as the rent paid in OG PEPE not only
                  fuels the ecosystem but also ensures that only the most
                  dedicated meme coins get the spotlight. Should an advertiser
                  decide to conclude their campaign, they can simply cease their
                  rental payments and unstake their OG PEPE, retrieving their
                  investment and making room for new entrants on the grid.
                </div>
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
                <div className="font-extrabold font-inter text-xl">
                  Where OG PEPE Sparks Creativity in a Dynamic Marketplace
                </div>
                <div className="text-lg leading-normal">
                  In essence, MEMEOGPEPE's grid stands as a bustling marketplace
                  of ideas and promotions, where the currency of creativity is
                  OG PEPE itself. It's a space that's both ever-changing and
                  dynamic, reflecting the pulse of the meme coin universe.
                </div>
              </div>
            </div> */}
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
                  LP tokens are burnt
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
                  Contract ownership is renounced
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
                    Q4 2021-2022
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
                  style={{ color: "transparent", borderRadius:"10px" }}
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

<div className={styles.mainContent}>

<div className={styles.socialContainer}>
<SocialLinks />
</div>
</div>



<TimeSinceDeployment /> */
