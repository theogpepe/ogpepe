import React from 'react';
import styles from "@/styles/DEX.module.css";
import Disclaimer from './Disclaimer';
import HowToBuy from './HowToBuy';
import Description from './Description';
import VideoGallery from './VideoGallery';

const Intro: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.componentSpacing}>
                <Description />
            </div>
            <div className={styles.componentSpacing}>
                <HowToBuy />
            </div>
            <div className={styles.componentSpacing}>
                <VideoGallery />
            </div>
            <div className={styles.componentSpacing}>
                <Disclaimer />
            </div>
        </div>
    );
};

export default Intro;
