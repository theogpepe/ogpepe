import React, { useEffect, useState } from 'react';
import '@uniswap/widgets/fonts.css';
import styles from "@/styles/DEX.module.css";
import Image from 'next/image';
import { ABIWOJAK } from '@/contracts/ABIS';
import { useContractRead } from 'wagmi';
import { formatUnits } from 'ethers';
import useGetTokenPrice from '@/utils/useGetTokenPrice';
import TokenPricesDisplay from '@/utils/TokenPricesDisplay';


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

interface TokenPrices {
    [key: string]: {
        usd: number;
    };
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
                        <th>Price</th>
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


    const chadAddress = '0x5C888fA2e6f9f0880321683D1eFA12e936fD5051';
    const chadredAddress = '0x68d009f251ff3a271477f77acb704c3b0f32a0c0';
    const chadtokenAddress = '0xb4577d084f289e696ddfac178c11663e573900f1';
    const chadcoinAddress = '0x6b89b97169a797d94f057f4a0b01e2ca303155e4';
    const wethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

    const chadPriceUsd = useGetTokenPrice(chadAddress);
    const chadredPriceUsd = useGetTokenPrice(chadredAddress);
    const chadtokenPriceUsd = useGetTokenPrice(chadtokenAddress);
    const chadcoinPriceUsd = useGetTokenPrice(chadcoinAddress);
    const wethPriceUsd = useGetTokenPrice(wethAddress);

    // Define total supply and value for each token
    const totalSupplyWeth = 3333333; // Total supply of WETH
    const chadValue = 1; // Value of CHAD in your currency
    const wethValue = 3333; // Value of WETH in your currency

    const [chadredBalance, setChadredBalance] = useState(0);
    const [chadtokenBalance, setChadtokenBalance] = useState(0);

    // Define state for storing token balances
    const [pair1Balances, setPair1Balances] = useState({ chad: 0, weth: 0 });
    const [pair2Balances, setPair2Balances] = useState({ chad: 0, chadred: 0 });
    const [pair3Balances, setPair3Balances] = useState({ chad: 0, chadtoken: 0 });

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

    const [lpAddresses, setLpAddresses] = useState([
        "0xcd81efdcd5ee3befbadcf46cef1b4c0bf7b40df0",
        "0xb49fc8db708db20337d211fd5c5be6a8f3f7a6d4",
        "0x87a7efae1661c0c0acd4b857186eb2b8ca5b89f1"
    ]);



    const [totalSupplyChad, setTotalSupplyChad] = useState(0);
    const [totalSupplyChadToken, setTotalSupplyChadToken] = useState(0);
    const [totalSupplyChadRed, setTotalSupplyChadRed] = useState(0);
    const [totalSupplyChadCoin, setTotalSupplyChadCoin] = useState(0);

    const [poolBalances, setPoolBalances] = useState<Record<string, number>>({});

    // Fetch total supply for CHAD
    const { data: totalSupplyChadData } = useContractRead({
        address: chadAddress,
        abi: ABIWOJAK,
        functionName: 'totalSupply',
    });

    useEffect(() => {
        if (totalSupplyChadData) {
            setTotalSupplyChad(parseFloat(formatUnits(totalSupplyChadData.toString(), 'ether')));
        }
    }, [totalSupplyChadData]);

    // Fetch total supply for CHAD
    const { data: totalSupplyChadTokenData } = useContractRead({
        address: chadtokenAddress,
        abi: ABIWOJAK,
        functionName: 'totalSupply',
    });

    useEffect(() => {
        if (totalSupplyChadTokenData) {
            setTotalSupplyChadToken(parseFloat(formatUnits(totalSupplyChadTokenData.toString(), 'ether')));
        }
    }, [totalSupplyChadTokenData]);

    // Fetch total supply for CHAD
    const { data: totalSupplyChadRedData } = useContractRead({
        address: chadredAddress,
        abi: ABIWOJAK,
        functionName: 'totalSupply',
    });

    useEffect(() => {
        if (totalSupplyChadRedData) {
            setTotalSupplyChadRed(parseFloat(formatUnits(totalSupplyChadRedData.toString(), 'ether')));
        }
    }, [totalSupplyChadRedData]);

    // Fetch total supply for CHAD
    const { data: totalSupplyChadCoinData } = useContractRead({
        address: chadcoinAddress,
        abi: ABIWOJAK,
        functionName: 'totalSupply',
    });

    useEffect(() => {
        if (totalSupplyChadCoinData) {
            setTotalSupplyChadCoin(parseFloat(formatUnits(totalSupplyChadCoinData.toString(), 'ether')));
        }
    }, [totalSupplyChadCoinData]);

    // Function to get balance for LP1
    const { data: getLP1 } = useContractRead({
        address: chadAddress,
        abi: ABIWOJAK,
        functionName: 'balanceOf',
        args: [lpAddresses[0]],
    });

    // Function to get balance for LP2
    const { data: getLP2 } = useContractRead({
        address: chadAddress,
        abi: ABIWOJAK,
        functionName: 'balanceOf',
        args: [lpAddresses[1]],
    });

    // Function to get balance for LP3
    const { data: getLP3 } = useContractRead({
        address: chadAddress,
        abi: ABIWOJAK,
        functionName: 'balanceOf',
        args: [lpAddresses[2]],
    });

    // Function to get balance for LP4
    const { data: getLP4 } = useContractRead({
        address: chadAddress,
        abi: ABIWOJAK,
        functionName: 'balanceOf',
        args: [lpAddresses[3]],
    });

    // Function to get balance for LP4
    const { data: getLP5 } = useContractRead({
        address: chadredAddress,
        abi: ABIWOJAK,
        functionName: 'balanceOf',
        args: [lpAddresses[1]],
    });

    // Function to get balance for LP4
    const { data: getLP6 } = useContractRead({
        address: chadtokenAddress,
        abi: ABIWOJAK,
        functionName: 'balanceOf',
        args: [lpAddresses[2]],
    });

    // Function to get balance for LP4
    const { data: getLP7 } = useContractRead({
        address: wethAddress,
        abi: ABIWOJAK,
        functionName: 'balanceOf',
        args: [lpAddresses[0]],
    });

    // Update pool balances when data is fetched
    useEffect(() => {
        if (getLP1) setPoolBalances(balances => ({ ...balances, pool1: parseFloat(formatUnits(getLP1.toString(), 'ether')) }));
        if (getLP2) setPoolBalances(balances => ({ ...balances, pool2: parseFloat(formatUnits(getLP2.toString(), 'ether')) }));
        if (getLP3) setPoolBalances(balances => ({ ...balances, pool3: parseFloat(formatUnits(getLP3.toString(), 'ether')) }));
        if (getLP4) setPoolBalances(balances => ({ ...balances, pool4: parseFloat(formatUnits(getLP4.toString(), 'ether')) }));
        if (getLP5) setPoolBalances(balances => ({ ...balances, pool5: parseFloat(formatUnits(getLP5.toString(), 'ether')) }));
        if (getLP6) setPoolBalances(balances => ({ ...balances, pool6: parseFloat(formatUnits(getLP6.toString(), 'ether')) }));
        if (getLP7) setPoolBalances(balances => ({ ...balances, pool7: parseFloat(formatUnits(getLP7.toString(), 'ether')) }));
    }, [getLP1, getLP2, getLP3, getLP4, getLP5, getLP6, getLP7]);

    // Update state when data is fetched
    useEffect(() => {
        if (getLP1) setPair1Balances(balances => ({ ...balances, chad: parseFloat(formatUnits(getLP1.toString(), 'ether')) }));
        if (getLP7) setPair1Balances(balances => ({ ...balances, weth: parseFloat(formatUnits(getLP7.toString(), 'ether')) }));
        if (getLP2) setPair2Balances(balances => ({ ...balances, chad: parseFloat(formatUnits(getLP2.toString(), 'ether')) }));
        if (getLP5) setPair2Balances(balances => ({ ...balances, chadred: parseFloat(formatUnits(getLP5.toString(), 'ether')) }));
        if (getLP3) setPair3Balances(balances => ({ ...balances, chad: parseFloat(formatUnits(getLP3.toString(), 'ether')) }));
        if (getLP6) setPair3Balances(balances => ({ ...balances, chadtoken: parseFloat(formatUnits(getLP6.toString(), 'ether')) }));
    }, [getLP1, getLP2, getLP3, getLP4, getLP5, getLP6, getLP7]);

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

    // State for storing token prices
    const [tokenPrices, setTokenPrices] = useState<TokenPrices>({});

    const tokenAddresses = [
        '0x5C888fA2e6f9f0880321683D1eFA12e936fD5051', // CHAD
        '0x68d009f251ff3a271477f77acb704c3b0f32a0c0', // CHADRED
        '0xb4577d084f289e696ddfac178c11663e573900f1', // CHADTOKEN
        '0x6b89b97169a797d94f057f4a0b01e2ca303155e4', // CHADCOIN
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'  // WETH
    ];

    useEffect(() => {
        fetch(`https://api.geckoterminal.com/api/v2/simple/networks/eth/token_price/0x5C888fA2e6f9f0880321683D1eFA12e936fD5051%2C0x68d009f251ff3a271477f77acb704c3b0f32a0c0%2C0xb4577d084f289e696ddfac178c11663e573900f1%2C0x6b89b97169a797d94f057f4a0b01e2ca303155e4%2C0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2`)
            .then(response => response.json())
            .then(data => {
                setTokenPrices(data);
            })
            .catch(error => console.error('Error fetching token prices:', error));
    }, []);


    return (
        <div style={{ paddingTop: '128px', padding: '20px' }}>
            <div style={{ maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
                <h1>Uniswap Chad Pools</h1>
                <div style={{ marginTop: '128px', backgroundColor: '#000', borderRadius: '12px', }}>
                    <h2>🌐 Chad&apos;s Bold Mission: Powering the Chad Ecosystem 🚀</h2>
                    <p><strong>Chad&apos;s Roots:</strong> Originally, Chad was the guardian against PEPE inflation, incentivizing the ETH/PEPE liquidity pool. His role was crucial in maintaining balance in the WOJAK-PEPE-CHAD ecosystem.</p>
                    <p><strong>Change in the Crypto Landscape:</strong> With PEPE ceasing to mint, Chad&apos;s initial role lost its purpose. This pivotal change marked a new chapter for Chad.</p>
                    <p><strong>Redefining Chad:</strong> Seizing the moment, Chad also paused minting, marking his transition to a fixed-supply token. This was more than an economic shift; it was the start of Chad&apos;s journey towards independence and self-identity.</p>
                    <p><strong>The Mission:</strong> Chad&apos;s journey has evolved into a grand mission, one that transcends its initial role. The aim is audacious yet clear – to transform Chad into an influential force that acts as an index for other Chad tokens, guiding them towards collective success.</p>
                    <p><strong>Uniting the Chads:</strong> By integrating Chad into liquidity pools with at least four other Chad tokens, we&apos;re not just creating trading opportunities – we&apos;re building an interconnected network. Each LP pool becomes a link in a larger chain, binding the Chad tokens in a shared destiny.</p>
                    <p><strong>Acting as an Index:</strong> In this new role, Chad becomes more than just a token; it&apos;s a benchmark, a measure of the health and vibrancy of the entire Chad ecosystem. As Chad goes, so do the others – its performance reflects and influences the collective.</p>
                    <p><strong>Strength in Unity:</strong> This strategy is a game-changer. When Chad pairs with other Chads in these LP pools, it enhances the liquidity and stability of the entire network. It&apos;s a mutual uplift, where the rise of one Chad contributes to the ascent of all.</p>
                    <p><strong>Fueling the Ecosystem:</strong> Chad&apos;s presence across multiple pools ensures a diverse and robust ecosystem. It becomes a pivotal piece in the puzzle, connecting different tokens and their communities. This network effect can amplify growth, attract more participation, and increase visibility across the board.</p>
                    <p><strong>A Beacon for All Chads:</strong> Chad&apos;s journey is now emblematic of innovation and unity in the crypto world. Its mission goes beyond mere transactions; it&apos;s about forging a path where every Chad token can thrive and prosper, supported by a foundation of shared success and collaborative growth.</p>
                    <p><strong>Chad&apos;s Mission:</strong> Chad&apos;s mission is to be the cornerstone of a thriving ecosystem, where its influence and integration across multiple liquidity pools uplift the entire network of Chad tokens.</p>
                </div>

                <br></br>
                <div className={styles.addressSection}>
                    <a href="https://etherscan.io/token/0x5c888fa2e6f9f0880321683d1efa12e936fd5051"
                        target="_blank" rel="noopener noreferrer"
                        className={styles.addressLink}>
                        0x5c888fa2e6f9f0880321683d1efa12e936fd5051
                    </a>
                </div>
                <br></br>
                <h1>Top Chads On Ethereum</h1>
                <br></br>

                <PoolInfo pools={poolsData} />
            </div>
            <div className={styles.wrapper}>
                <h1>OG Chad Index Pairs Stats</h1>
                <table className={styles.poolTable}>
                    <thead>
                        <tr>
                            <th>Pair</th>
                            <th>Token</th>
                            <th>Balance</th>
                            <th>% of Total Supply</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Pair 1: CHAD/WETH */}
                        <tr>
                            <td colSpan={5}><hr /></td> {/* Row with horizontal line */}
                        </tr>
                        <tr>
                            <td>Pair 1: CHAD/WETH</td>
                            <td><Image width={32} height={32} src="/images/token/chad.png" alt="CHAD Logo" style={{ width: '32px' }} />CHAD</td>
                            <td>{pair1Balances.chad}</td>
                            <td>{((pair1Balances.chad / totalSupplyChad) * 100).toFixed(2)}%</td>
                            <td>{chadPriceUsd !== undefined ? `$${(pair1Balances.chad * chadPriceUsd).toFixed(2)}` : 'Loading...'}</td>
                        </tr>
                        <tr>
                            <td>Pair 1: CHAD/WETH</td>
                            <td><Image width={32} height={32} src="/images/token/weth.png" alt="WETH Logo" style={{ width: '32px' }} />WETH</td>
                            <td>{pair1Balances.weth}</td>
                            <td>{((pair1Balances.weth / totalSupplyWeth) * 100).toFixed(2)}%</td>
                            <td>{wethPriceUsd !== undefined ? `$${(pair1Balances.weth * wethPriceUsd).toFixed(2)}` : 'Loading...'}</td>
                        </tr>
                        <tr>
                            <td colSpan={5}><hr /></td> {/* Row with horizontal line */}
                        </tr>

                        {/* Pair 2: CHAD/CHADRED */}
                        <tr>
                            <td>Pair 2: CHAD/CHADRED</td>
                            <td><Image width={32} height={32} src="/images/token/chad.png" alt="CHAD Logo" style={{ width: '32px' }} />CHAD</td>
                            <td>{pair2Balances.chad}</td>
                            <td>{((pair2Balances.chad / totalSupplyChad) * 100).toFixed(2)}%</td>
                            <td>{chadPriceUsd !== undefined ? `$${(pair2Balances.chad * chadPriceUsd).toFixed(2)}` : 'Loading...'}</td>
                        </tr>
                        <tr>
                            <td>Pair 2: CHAD/CHADRED</td>
                            <td><Image width={32} height={32} src="/images/token/chadred.png" alt="CHAD Red Logo" style={{ width: '32px' }} />CHAD (Red)</td>
                            <td>{pair2Balances.chadred}</td>
                            <td>{((pair2Balances.chadred / 33600000000) * 100).toFixed(2)}%</td>
                            <td>{chadredPriceUsd !== undefined ? `$${(pair2Balances.chadred * chadredPriceUsd).toFixed(2)}` : 'Loading...'}</td>
                        </tr>
                        <tr>
                            <td colSpan={5}><hr /></td> {/* Row with horizontal line */}
                        </tr>

                        {/* Pair 3: CHAD/CHADTOKEN */}
                        <tr>
                            <td>Pair 3: CHAD/CHADTOKEN</td>
                            <td><Image width={32} height={32} src="/images/token/chad.png" alt="CHAD Logo" style={{ width: '32px' }} />CHAD</td>
                            <td>{pair3Balances.chad}</td>
                            <td>{((pair3Balances.chad / totalSupplyChad) * 100).toFixed(2)}%</td>
                            <td>{chadPriceUsd !== undefined ? `$${(pair3Balances.chad * chadPriceUsd).toFixed(2)}` : 'Loading...'}</td>
                        </tr>
                        <tr>
                            <td>Pair 3: CHAD/CHADTOKEN</td>
                            <td><Image width={32} height={32} src="/images/token/chadtoken.png" alt="CHAD Token Logo" style={{ width: '32px' }} />CHAD (Token)</td>
                            <td>{pair3Balances.chadtoken}</td>
                            <td>{((pair3Balances.chadtoken / totalSupplyChadToken) * 100).toFixed(2)}%</td>
                            <td>{chadtokenPriceUsd !== undefined ? `$${(pair3Balances.chadtoken * chadtokenPriceUsd).toFixed(2)}` : 'Loading...'}</td>
                        </tr>
                        <tr>
                            <td colSpan={5}><hr /></td> {/* Row with horizontal line */}
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );

};
export default Chad;


