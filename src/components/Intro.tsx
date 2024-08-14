import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from "@/styles/DEX.module.css";
import Roadmap from './Roadmap';
import Disclaimer from './Disclaimer';
import HowToBuy from './HowToBuy';
import Ecosystem from './Ecosystem';
import Description from './Description';





// Main Intro component that puts everything together
const Intro: React.FC = () => {
    return (
        <div className={styles.container}>
            <Description />
            <Ecosystem />
            <Roadmap />
            <HowToBuy />
            <Disclaimer />
        </div>
    );
};

export default Intro;
