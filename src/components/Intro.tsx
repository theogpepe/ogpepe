import React from 'react';
import styles from "@/styles/DEX.module.css";
import Roadmap from './Roadmap';
import Disclaimer from './Disclaimer';
import HowToBuy from './HowToBuy';
import Ecosystem from './Ecosystem';
import Description from './Description';

const Intro: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.componentSpacing}>
                <Description />
            </div>
            <div className={styles.componentSpacing}>
                <Ecosystem />
            </div>
            <div className={styles.componentSpacing}>
                <Roadmap />
            </div>
            <div className={styles.componentSpacing}>
                <HowToBuy />
            </div>
            <div className={styles.componentSpacing}>
                <Disclaimer />
            </div>
        </div>
    );
};

export default Intro;
