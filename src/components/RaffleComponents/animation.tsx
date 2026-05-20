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
    const isAnimating = useRef(false);

    // Cleanup on unmount, gets rid of pending timeouts
    useEffect(() => {
        return () => {
            timeoutsRef.current.forEach(clearTimeout);
        };
    }, []);

    const handleImageLoad = () => {
        if (!isAnimating.current) return;
        isAnimating.current = false;

        const t1 = setTimeout(() => onAnimate(), 0); // starts immediately after GIF loads
        const t2 = setTimeout(() => setImageSrc(staticSrc), animationDuration);
        const t3 = setTimeout(() => setIsButtonDisabled(false), animationDuration + 1000);
        timeoutsRef.current.push(t1, t2, t3);
    };

    const handleImageClick = () => {
        if (isButtonDisabled) return;
        setIsButtonDisabled(true);
        isAnimating.current = true; 
        setImageSrc(gifSrc); 
    };

    return (
        <Image
          id="animation_frame"
            src={imageSrc}
            alt="Animation"
            onClick={handleImageClick}
            onLoad={handleImageLoad}
            style={{ cursor: !isButtonDisabled ? 'pointer':'not-allowed' }}
        />
    );
}

export default AnimationRenderer;