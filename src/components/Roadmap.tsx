import React from 'react';
import Image from 'next/image';
import styles from "@/styles/Roadmap.module.css";

// Define the types for the Milestone component props
interface MilestoneProps {
    imgSrc: string;
    title: string;
    description: string;
}

// Single Milestone Component
const Milestone: React.FC<MilestoneProps> = ({ imgSrc, title, description }) => {
    return (
        <div className={styles.milestone}>
            <div className={styles.milestoneImage}>
                <Image src={imgSrc} alt={title} width={64} height={64} />
            </div>
            <div className={styles.milestoneContent}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

// Roadmap Component
const Roadmap: React.FC = () => {
    return (
        <div className={styles.roadmapContainer}>
            <h2 className={styles.roadmapTitle}>Roadmap</h2>
            <div className={styles.roadmap}>
                <Milestone
                    imgSrc="/images/roadmap-icons/launch.png"
                    title="Launch"
                    description="Q4 2020"
                />
                <Milestone
                    imgSrc="/images/roadmap-icons/hibernate.png"
                    title="Hibernate"
                    description="2021-2022"
                />
                <Milestone
                    imgSrc="/images/roadmap-icons/clone-pepe.png"
                    title="Famous Pepe Appears and Reignites Interest"
                    description="Q3 2023"
                />
                <Milestone
                    imgSrc="/images/roadmap-icons/cto.png"
                    title="CTO - Community Takes Over"
                    description="Q4 2023"
                />
                <Milestone
                    imgSrc="/images/roadmap-icons/pepex.png"
                    title="Dev joins CTO + PepeX Launch"
                    description="Q1 2024"
                />
                <Milestone
                    imgSrc="/images/roadmap-icons/chad.png"
                    title="Chad Ecosystem Design"
                    description="Q2 2024"
                />
                <Milestone
                    imgSrc="/images/roadmap-icons/wojak.png"
                    title="Wojak.farm Ecosystem"
                    description="Q3 2024"
                />
                <Milestone
                    imgSrc="/images/roadmap-icons/full-integration.png"
                    title="Establish Tokenomics Through Community Debate and Vote"
                    description="Q4 2024"
                />
                <Milestone
                    imgSrc="/images/roadmap-icons/moon.png"
                    title="Full Ecosystem Integration"
                    description="2025"
                />
            </div>
        </div>
    );
};

export default Roadmap;
