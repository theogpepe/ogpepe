import React from 'react';
import useGetTokenPrice from './useGetTokenPrice';

const TokenPricesDisplay = () => {
  const chadPriceUsd = useGetTokenPrice('0x5C888fA2e6f9f0880321683D1eFA12e936fD5051');
  const chadredPriceUsd = useGetTokenPrice('0x68d009f251ff3a271477f77acb704c3b0f32a0c0');
  const chadtokenPriceUsd = useGetTokenPrice('0xb4577d084f289e696ddfac178c11663e573900f1');
  const chadcoinPriceUsd = useGetTokenPrice('0x6b89b97169a797d94f057f4a0b01e2ca303155e4');
  const wethPriceUsd = useGetTokenPrice('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');

  return (
    <div>
      <h2>Token Prices</h2>
      <ul>
        <li>CHAD Price: {chadPriceUsd !== undefined ? `$${chadPriceUsd.toFixed(2)}` : 'Loading...'}</li>
        <li>CHADRED Price: {chadredPriceUsd !== undefined ? `$${chadredPriceUsd.toFixed(8)}` : 'Loading...'}</li>
        <li>CHADTOKEN Price: {chadtokenPriceUsd !== undefined ? `$${chadtokenPriceUsd.toFixed(8)}` : 'Loading...'}</li>
        <li>CHADCOIN Price: {chadcoinPriceUsd !== undefined ? `$${chadcoinPriceUsd.toFixed(8)}` : 'Loading...'}</li>
        <li>WETH Price: {wethPriceUsd !== undefined ? `$${wethPriceUsd.toFixed(2)}` : 'Loading...'}</li>
      </ul>
    </div>
  );
};

export default TokenPricesDisplay;