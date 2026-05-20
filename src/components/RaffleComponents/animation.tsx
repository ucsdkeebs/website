import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface AnimationRendererProps {
    onAnimate: () => void;
    staticSrc: string;
    gifSrc: string;
    animationDuration: number;
    isButtonDisabled: boolean;
    setIsButtonDisabled: (disabled: boolean) => void;
}

function AnimationRenderer({ onAnimate, staticSrc, gifSrc, animationDuration, isButtonDisabled, setIsButtonDisabled}: AnimationRendererProps) {
    const [imageSrc, setImageSrc] = useState(staticSrc);
    const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => {
        return () => {
            timeoutsRef.current.forEach(clearTimeout);
        };
    }, []);

    const handleImageClick = () => {
        if (isButtonDisabled) return;
        setIsButtonDisabled(true);
        
        // Step 1 — switch to GIF immediately
        setImageSrc(gifSrc);

        // Step 2 — wait for GIF to actually render, then start the raffle
        // requestAnimationFrame ensures the GIF src change has been painted
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const t1 = setTimeout(() => onAnimate(), 0);
                const t2 = setTimeout(() => setImageSrc(staticSrc), animationDuration);
                const t3 = setTimeout(() => setIsButtonDisabled(false), animationDuration + 1000);
                timeoutsRef.current.push(t1, t2, t3);
            });
        });
    };

    return (
        <img
          id="animation_frame"
          src={imageSrc}
          alt="Animation"
          onClick={handleImageClick}
          style={{ cursor: !isButtonDisabled ? 'pointer' : 'not-allowed' }}
        />
    );
}

export default AnimationRenderer;