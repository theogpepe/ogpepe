import React from 'react';
import { SwapWidget } from '@uniswap/widgets';
import '@uniswap/widgets/fonts.css';
import { MY_TOKEN_LIST } from '../utils/constants';
import styles from "@/styles/DEX.module.css";


const DextChartV3 = () => {
    return (
        <div>
            <h2>V3 Chart</h2>
            <iframe
                id="dextools-widget-v3"
                title="DEXTools Trading Chart V3"
                width="500"
                height="400"
                src="https://www.dextools.io/widget-chart/es/ether/pe-light/0xa84181f223a042949e9040e42b44c50021802db6?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
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
                src="https://www.dextools.io/widget-chart/es/ether/pe-light/0xaa9b647f42858f2db441f0aa75843a8e7fd5aff2?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
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
    return (
        <div className={styles.chartSwapperContainer}>
            <h2>Pepe DEX</h2>
            <DextChartV2 />
            <DextChartV3 />
            <UniSwapper />
        </div>
    );
};

export default DEX;
