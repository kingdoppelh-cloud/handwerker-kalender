'use client';

import { useState, useRef, useEffect } from 'react';

export default function HeroVideo() {
    const [isReady, setIsReady] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // If video is already buffered (e.g. from cache)
        if (video.readyState >= 3) {
            setIsReady(true);
            return;
        }

        const handleReady = () => setIsReady(true);
        video.addEventListener('canplaythrough', handleReady);
        return () => video.removeEventListener('canplaythrough', handleReady);
    }, []);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${isReady ? 'opacity-100' : 'opacity-0'}`}
        >
            <source src="/hero.mp4" type="video/mp4" />
        </video>
    );
}
