import { useEffect, useState } from 'react';

type ApiResponse = {
  data: {
    id: string;
    type: string;
    attributes: {
      token_prices: {
        [key: string]: string;
      };
    };
  };
};

const geckoTerminalApiBaseUrl = 'https://api.geckoterminal.com/api/v2/simple/networks/eth/token_price/';

const useGetTokenPrice = (tokenAddress: string | undefined) => {
  const [price, setPrice] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      if (!tokenAddress) return; // Ensure tokenAddress is defined

      try {
        const api = `${geckoTerminalApiBaseUrl}${tokenAddress.toLowerCase()}`;
        const response = await fetch(api);
        const res: ApiResponse = await response.json();

        // Extract token price from response based on tokenAddress
        const tokenPrice = res?.data?.attributes?.token_prices?.[tokenAddress.toLowerCase()];

        if (tokenPrice) {
          const parsedPrice = parseFloat(tokenPrice);
          setPrice(parsedPrice);
        } else {
          console.error(`Token price not found for address: ${tokenAddress}`);
        }
      } catch (error) {
        console.error('Unable to fetch token price data:', error);
      }
    };

    fetchData();
  }, [tokenAddress]); // Trigger fetch whenever tokenAddress changes

  return price; // Returns the token price as a number or undefined
};

export default useGetTokenPrice;
