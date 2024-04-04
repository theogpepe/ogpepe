import React, { useEffect, useState } from 'react';
import '@uniswap/widgets/fonts.css';
import styles from "@/styles/DEX.module.css";
import Image from 'next/image';


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
    logoUrl1: string; // URL for the first token's logo
    logoUrl2: string; // URL for the second token's logo
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
                        <th>24h (%)</th>
                        {/* Additional headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {pools.map((pool) => (
                        <tr key={pool.id}>
                            <td>
                                {/* render logos and other data */}
                                <Image width={32} height={32} src={pool.logoUrl1} alt="Logo 1" style={{ width: '32px' }} />
                                <Image width={32} height={32} src={pool.logoUrl2} alt="Logo 2" style={{ width: '32px' }} />
                                <a href={`https://etherscan.io/address/${pool.attributes.address}`} target="_blank" rel="noopener noreferrer">
                                    {pool.attributes.name}
                                </a>
                            </td>
                            <td>{parseFloat(pool.attributes.base_token_price_usd).toFixed(8)} $</td>
                            <td>{formatCurrency(pool.attributes.volume_usd.h24)}</td>
                            <td>{formatCurrency(pool.attributes.reserve_in_usd)}</td>
                            <td>{formatCurrency(pool.attributes.fdv_usd)}</td>

                            <td>{parseFloat(pool.attributes.price_change_percentage.h24).toFixed(2)}%</td>
                            {/* Additional columns as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// In DEX component
export const Chad = () => {
    const [poolsData, setPoolsData] = useState([]);
    const [averageBasePrice, setAverageBasePrice] = useState(0);
    const [totalVolume, setTotalVolume] = useState(0);
    const [totalReserve, setTotalReserve] = useState(0);
    const [averageFdvPrice, setAverageFdvPrice] = useState(0);
    const [price, setPrice] = useState(0); // State for price
    const [marketCap, setMarketCap] = useState(0); // State for market cap


    const [poolAddresses, setPoolAddresses] = useState([
        {
            address: "0xcd81efdcd5ee3befbadcf46cef1b4c0bf7b40df0",
            logoUrl1: "/images/token/chad.png",
            logoUrl2: "/images/token/weth.png"
        },
        {
            address: "0x8ccbf3c7b89fded9b7b7b27aade12821d6af43b8",
            logoUrl1: "/images/token/chadred.png",
            logoUrl2: "/images/token/weth.png"
        },
        {
            address: "0xf256a36b03ff5375a2c9b6861d31005efd2b2f8f",
            logoUrl1: "/images/token/chadtoken.png",
            logoUrl2: "/images/token/weth.png"
        },
        {
            address: "0x2db388d12c56fa6bd81b101aa6ec8542e315ec5c",
            logoUrl1: "/images/token/chadcoin.png",
            logoUrl2: "/images/token/weth.png"
        },]);


    useEffect(() => {
        const addressParam = poolAddresses.map(pool => pool.address).join('%2C');
        fetch(`https://api.geckoterminal.com/api/v2/networks/eth/pools/multi/${addressParam}`)
            .then(response => response.json())
            .then(data => {
                const updatedData = data.data.map((poolData: { id: string; }) => {
                    // Extract the address from the poolData.id by removing the 'eth_' prefix
                    const extractedAddress = poolData.id.replace('eth_', '');

                    // Find the corresponding pool address object
                    const addressObj = poolAddresses.find(pa => pa.address === extractedAddress);

                    return {
                        ...poolData,
                        logoUrl1: addressObj?.logoUrl1,
                        logoUrl2: addressObj?.logoUrl2
                    };
                });
                setPoolsData(updatedData);
                console.log("Updated Pools Data:", updatedData);
            })
            .catch(error => console.error('Error fetching pool data:', error));
    }, [poolAddresses]);








    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.chartSwapperContainer}>
                <div>
                <h1>Uniswap Chad Pools</h1>
                <h2>Stay tuned for more info about the revival of the OG Chad from 2020, coming to take over all other Chads!</h2>
                    <PoolInfo pools={poolsData} />
                </div>
            </div>

        </div>
    );
};
export default Chad;
