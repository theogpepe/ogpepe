import { useState } from 'react';
import styles from "@/styles/VideoGallery.module.css";

type Video = {
    src: string;
    title: string;
    thumbnail: string;
};

const videos = [
    {
        src: '/videos/pepecryptokings.mp4',
        title: [
            'Crypto Kings',
            '@iambroots & @ianheinischmma',
            '01 / 04 / 2024'
        ],
        thumbnail: '/images/thumb2.jpg'
    },
    {
        src: '/videos/majorlivestream99.mp4',
        title: ['Major Livestream Ep. 99',
            '@VCAdam_eth',
            '09 / 17 / 2024'
        ],
        thumbnail: '/images/thumb3.png'
    },
];


const VideoGallery: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);

    const openModal = (videoSrc: string) => {
        setCurrentVideo(videoSrc);
        setIsOpen(true);
    };

    const closeModal = () => {
        setCurrentVideo(null);
        setIsOpen(false);
    };

    return (
        <div className={styles.gallery}>
            <div className={styles.description}>
                <h1>Featured on:</h1>
            </div>
            <div className={styles.thumbnailGrid}>
                {videos.map((video, index) => (
                    <div key={index} className={styles.thumbnail} onClick={() => openModal(video.src)}>
                        <img src={video.thumbnail} alt={video.title.join(' ')} />
                        <p>
                            {video.title.map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </div>
                ))}

            </div>

            {isOpen && currentVideo && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <video controls autoPlay>
                            <source src={currentVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button className={styles.closeBtn} onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoGallery;
