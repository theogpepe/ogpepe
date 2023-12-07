import React, { useEffect, useState } from 'react';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { MY_TOKEN_LIST } from '../utils/constants';
import styles from "@/styles/DEX.module.css";



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
					<div className={styles.container}>
        <table className={styles.poolTable}>
            <thead>
                <tr>
                    <th>Pool Name</th>
                    <th>Pool Address (Etherscan Link)</th>
                    <th>PEPE Price</th>
                    <th>24h Vol</th>
                    <th>Liquidity</th>
                    <th>FDV</th>
                    <th>Circulating </th>
                    <th>24h Price Change (%)</th>
                    <th>Pool Type (V2/V3)</th>
                    {/* Additional headers as needed */}
                </tr>
            </thead>
            <tbody>
                {pools.map((pool) => (
                    <tr key={pool.id}>
                        <td>{pool.attributes.name}</td>
                        <td>
                            <a href={`https://etherscan.io/address/${pool.attributes.address}`} target="_blank" rel="noopener noreferrer">
                                {pool.attributes.address}
                            </a>
                        </td>
                        <td>{parseFloat(pool.attributes.base_token_price_usd).toFixed(2)} $</td>
                        <td>{formatCurrency(pool.attributes.volume_usd.h24)}</td>
        <td>{formatCurrency(pool.attributes.reserve_in_usd)}</td>
        <td>{formatCurrency(pool.attributes.fdv_usd)}</td>
        <td>{calculateCirculating(pool.attributes.fdv_usd)}</td>

                        <td>{parseFloat(pool.attributes.price_change_percentage.h24).toFixed(2)}%</td>
                        <td>{pool.relationships.dex.data.id === 'uniswap_v3' ? 'V3' : 'V2'}</td>
                        {/* Additional columns as needed */}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Totals/Averages</td>
                    <td></td> {/* Adjust colspan as per the number of columns */}
                    <td>{averageBasePrice.toFixed(2)} $</td>

                    <td>{formatCurrency(totalVolume.toString())}</td>
    <td>{formatCurrency(totalReserve.toString())}</td>
    <td>{formatCurrency(averageFdvPrice.toString())}</td>
    <td>{calculateCirculating(averageFdvPrice.toString())}</td>

    <td></td> {/* Adjust for remaining columns */}
    <td></td> {/* Adjust for remaining columns */}
                </tr>
            </tfoot>
        </table>
        </div></div>
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
            <SwapWidget {...widgetConfig} defaultOutputTokenAddress={pepe} />
        </div>
    );
}

export const DEX = () => {
    const [poolsData, setPoolsData] = useState([]);

    useEffect(() => {
        // Fetch pools data
        fetch('https://api.geckoterminal.com/api/v2/networks/eth/pools/multi/0xA84181F223a042949e9040e42B44C50021802dB6%2C0xAA9b647f42858F2Db441F0AA75843A8E7fd5aFF2')
            .then(response => response.json())
            .then(data => setPoolsData(data.data))
            .catch(error => console.error('Error fetching pool data:', error));
    }, []);

    return (
        <div className={styles.dexContainer}>
            <h2 className={styles.dexHeading}>Pepe DEX</h2>
            <div className={styles.chartSwapperContainer}>
                <div>
                    <h1>Pools</h1>
                    <PoolInfo pools={poolsData} />
                </div>
                <DextChartV2 />
                <DextChartV3 />
                <UniSwapper />
            </div>
        </div>
    );
};
export default DEX;
