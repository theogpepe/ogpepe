import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/TimeSinceDeployment.module.css'; // Update path as needed

// Component for displaying the time since deployment
const TimeSinceDeployment: React.FC = () => {
    const [timeSinceDeployment, setTimeSinceDeployment] = useState<string>('');

    useEffect(() => {
        const deploymentTimestamp = 1602340728; // Replace with actual deployment timestamp
        const deploymentTime = new Date(deploymentTimestamp * 1000);

        const interval = setInterval(() => {
            const now = new Date();
            const timeDifference = now.getTime() - deploymentTime.getTime();

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setTimeSinceDeployment(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.timerInfo}>
            <p className={styles.timer}>
                <Image 
                    width={50} 
                    height={50} 
                    src="/images/clock.png" 
                    alt="Clock" 
                    className={styles.logoImage} 
                />
                Age: {timeSinceDeployment}
            </p>
        </div>
    );
};

export default TimeSinceDeployment;
