import React, { useEffect, useState } from 'react';
import { SwapWidget, Theme } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { MY_TOKEN_LIST } from '../utils/constants';
import styles from "@/styles/DEX.module.css";
import Image from 'next/image';

const TimeSinceDeployment = () => {
    const [timeSinceDeployment, setTimeSinceDeployment] = useState('');

    useEffect(() => {
        const deploymentTimestamp = 1602340728; // Replace with actual deployment timestamp
        const deploymentTime = new Date(deploymentTimestamp * 1000);

        const interval = setInterval(() => {
            const now = new Date();
            const timeDifference = now.getTime() - deploymentTime.getTime();

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
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

interface IntroProps {
    price: number;
    marketCap: number;
}

const Intro: React.FC<IntroProps> = ({ price, marketCap }) => {
    return (
        <div className={styles.container}>
            {/* Header with Title and Address */}
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
            {/* Main Content with Stats and Social Links */}
            <div className={styles.mainContent}>
                <div className={styles.stats}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Price:</span>
                        <span className={styles.keyInfo}>{formatCurrency(price.toString())}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Market Cap:</span>
                        <span className={styles.keyInfo}>{formatCurrency(marketCap.toString())}</span>
                    </div>
                </div>
                <div className={styles.socialContainer}>
                    <SocialLinks />
                </div>
            </div>


            {/* Timer at the Bottom */}
            <TimeSinceDeployment />
        </div>
    );
};





interface Pool {
    id: string;
    type: string;
    attributes: {
        base_token_price_usd: string;
        quote_token_price_usd: string;
        base_token_price_quote_token: string;
        quote_token_price_base_token: string;
        address: string;
        name: string;
        pool_created_at: string | null;
        fdv_usd: string;
        reserve_in_usd: string;
        volume_usd: {
            h1: string;
            h24: string;
        };
        price_change_percentage: {
            h1: string;
            h24: string;
        };
        // ... add more attributes as needed
    };
    relationships: {
        dex: {
            data: {
                id: string;
                type: string;
            };
        };
        // ... other relationships if needed
    };
    // ... add more fields as needed
}

interface PoolData {
    data: Pool[];
}

// Utility function to format currency values
function formatCurrency(value: string): string {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
        return 'N/A'; // Return 'N/A' if value is not a valid number
    }

    if (numValue < 1000) {
        return `$${numValue.toFixed(2)}`;
    } else if (numValue < 1000000) {
        return `$${(numValue / 1000).toFixed(1)}k`;
    } else {
        return `$${(numValue / 1000000).toFixed(2)}m`;
    }
}

// Utility function to calculate circulating value
function calculateCirculating(fdv: string | null | undefined): string {
    if (fdv === null || fdv === undefined) {
        return 'N/A';
    }

    const numFdv = parseFloat(fdv);
    if (isNaN(numFdv)) {
        return 'N/A';
    }

    // Subtract 20.3084% from FDV
    const circulatingValue = numFdv * (1 - 0.203084);
    return formatCurrency(circulatingValue.toString());
}




const PoolInfo: React.FC<{ pools: Pool[] }> = ({ pools }) => {
    const totalVolume = pools.reduce((acc, pool) => acc + parseFloat(pool.attributes.volume_usd.h24), 0);
    const totalReserve = pools.reduce((acc, pool) => acc + parseFloat(pool.attributes.reserve_in_usd), 0);
    const averageBasePrice = pools.reduce((acc, pool) => acc + parseFloat(pool.attributes.base_token_price_usd), 0) / pools.length;
    const averageFdvPrice = pools.reduce((acc, pool) => acc + parseFloat(pool.attributes.fdv_usd), 0) / pools.length;

    return (
        <div className={styles.wrapper}>
            <table className={styles.poolTable}>
                <thead>
                    <tr>
                        <th>Pool Name</th>
                        <th>PEPE Price</th>
                        <th>24h Vol</th>
                        <th>Liquidity</th>
                        <th>FDV</th>
                        <th>Circulating </th>
                        <th>24h (%)</th>
                        {/* Additional headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {pools.map((pool) => (
                        <tr key={pool.id}>
                            <td>
                                <a href={`https://etherscan.io/address/${pool.attributes.address}`} target="_blank" rel="noopener noreferrer">
                                {pool.attributes.name}
                                                                </a>
                            </td>
                            <td>{parseFloat(pool.attributes.base_token_price_usd).toFixed(2)} $</td>
                            <td>{formatCurrency(pool.attributes.volume_usd.h24)}</td>
                            <td>{formatCurrency(pool.attributes.reserve_in_usd)}</td>
                            <td>{formatCurrency(pool.attributes.fdv_usd)}</td>
                            <td>{calculateCirculating(pool.attributes.fdv_usd)}</td>

                            <td>{parseFloat(pool.attributes.price_change_percentage.h24).toFixed(2)}%</td>
                            {/* Additional columns as needed */}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Totals/Averages</td>
                        <td>{averageBasePrice.toFixed(2)} $</td>

                        <td>{formatCurrency(totalVolume.toString())}</td>
                        <td>{formatCurrency(totalReserve.toString())}</td>
                        <td>{formatCurrency(averageFdvPrice.toString())}</td>
                        <td>{calculateCirculating(averageFdvPrice.toString())}</td>

                        <td></td> {/* Adjust for remaining columns */}
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};



const DextChartV3 = () => {
    return (
        <div>
            <h2>V3 Chart</h2>
            <iframe
                id="dextools-widget-v3"
                title="DEXTools Trading Chart V3"
                width="500"
                height="400"
                src="https://www.dextools.io/widget-chart/es/ether/pe-light/0xa84181f223a042949e9040e42b44c50021802db6?theme=dark&chartType=1&chartResolution=30&drawingToolbars=false"
            ></iframe>
        </div>
    );
};

const DextChartV2 = () => {
    return (
        <div>
            <h2>V2 Chart</h2>
            <iframe
                id="dextools-widget-v2"
                title="DEXTools Trading Chart V2"
                width="500"
                height="400"
                src="https://www.dextools.io/widget-chart/es/ether/pe-light/0xaa9b647f42858f2db441f0aa75843a8e7fd5aff2?theme=dark&chartType=1&chartResolution=30&drawingToolbars=false"
            ></iframe>
        </div>
    );
};

const theme: Theme = {
    primary: '#fff', // A shade of green
    secondary: '#90EE90', // Light green
    interactive: '#20672C', // Lime green
    container: '#20672C', // Pale green
    module: '#66974C', // Honeydew (very light green)
    accent: '#3e8e41', // Medium sea green
    outline: '#8FBC8F', // Dark sea green
    dialog: '#20672C', // White remains the same
}




export const UniSwapper = () => {
    const pepe = "0x4dFae3690b93c47470b03036A17B23C1Be05127C";

    // Define your custom token list URI (or use a predefined one)
    const customTokenListUri = MY_TOKEN_LIST;

    const widgetConfig = {
        tokenList: customTokenListUri,

        // Other widget configuration options...
    };

    return (
        <div className="Uniswap">
            <SwapWidget theme={theme} {...widgetConfig} defaultOutputTokenAddress={pepe} />
        </div>
    );
}


const SocialLinks = () => {
    return (
        <div className={styles.socialContainer}>
            <div className={styles.row}>
                <a href="https://twitter.com/theogpepe2020" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/x-logo.png" alt="Twitter" className={styles.logoImage} />
                </a>
                <a href="https://t.me/OgPeperc20" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/telegram-logo.png" alt="Telegram" className={styles.logoImage} />
                </a>
                <a href="https://www.dextools.io/app/es/ether/pair-explorer/0xa84181f223a042949e9040e42b44c50021802db6" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/dextools-logo.png" alt="Dextools" className={styles.logoImage} />
                </a>
            </div>
            <div className={styles.row}>
                <a href="https://app.uniswap.org/#/swap?outputCurrency=0x4dFae3690b93c47470b03036A17B23C1Be05127C" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/uniswap-logo.png" alt="Uniswap" className={styles.logoImage} />
                </a>
                <a href="https://the-og-pepe.medium.com/" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/medium-logo.png" alt="Medium" className={styles.logoImage} />
                </a>
                <a href="https://github.com/theogpepe/" target="_blank" rel="noopener noreferrer">
                    <Image width={50} height={50} src="/socials/github-logo.png" alt="Medium" className={styles.logoImage} />
                </a>
            </div>
        </div>
    );
};

// In DEX component
export const DEX = () => {
    const [poolsData, setPoolsData] = useState([]);
    const [averageBasePrice, setAverageBasePrice] = useState(0);
    const [totalVolume, setTotalVolume] = useState(0);
    const [totalReserve, setTotalReserve] = useState(0);
    const [averageFdvPrice, setAverageFdvPrice] = useState(0);
    const [price, setPrice] = useState(0); // State for price
    const [marketCap, setMarketCap] = useState(0); // State for market cap

    useEffect(() => {
        // Fetch pools data
        fetch('https://api.geckoterminal.com/api/v2/networks/eth/pools/multi/0xA84181F223a042949e9040e42B44C50021802dB6%2C0xAA9b647f42858F2Db441F0AA75843A8E7fd5aFF2')
            .then(response => response.json())
            .then(data => {
                setPoolsData(data.data);
                // Assuming you get price and market cap data from the API response
                setPrice(data.data[0].attributes.base_token_price_usd); // Example, set actual path
                setMarketCap(data.data[0].attributes.fdv_usd); // Example, set actual path
            })
            .catch(error => console.error('Error fetching pool data:', error));
    }, []);




    return (
        <div>
            <Intro
            
                price={price}
                marketCap={marketCap}
            // ... and other props you need to pass
            />

            <div className={styles.chartSwapperContainer}>
                <div>
                    <h1>Pools</h1>
                    <PoolInfo pools={poolsData} />
                </div>
                <DextChartV2 />
                <DextChartV3 />
            </div>
        </div>
    );
};
export default DEX;
