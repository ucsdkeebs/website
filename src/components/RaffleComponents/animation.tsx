import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface AnimationRendererProps {
    onAnimate: () => void;
    staticSrc: StaticImageData;
    gifSrc: StaticImageData;
    animationDuration: number;
    isButtonDisabled: boolean;
    setIsButtonDisabled: (disabled: boolean) => void;
}

function AnimationRenderer({ onAnimate, staticSrc, gifSrc, animationDuration, isButtonDisabled, setIsButtonDisabled}: AnimationRendererProps) {
    const [imageSrc, setImageSrc] = useState(staticSrc);
    const timeoutsRef = useRef([]);

    // Cleanup on unmount, gets rid of pending timeouts
    useEffect(() => {
        return () => {
            timeoutsRef.current.forEach(clearTimeout);
        };
    }, []);

    const handleImageClick = () => {
        // checks to see if the button has been clicked to prevent double clicking
        if (isButtonDisabled) return;
        // disables the button on click
        setIsButtonDisabled(true);
        console.log('Starting spin animation');
        setImageSrc(gifSrc); // Switch from static img to the GIF


        
        setTimeout(() =>  onAnimate(), 800);
        // Set a timeout to switch back to the static image after the GIF's duration
        setTimeout(() => setImageSrc(staticSrc), animationDuration);
        setTimeout(() => setIsButtonDisabled(false), animationDuration + 1000); //adds 1000 just to have a small buffer for api to update      
    };

    return (
        <Image
          id="animation_frame"
            src={imageSrc}
            alt="Animation"
            onClick={handleImageClick}
            style={{ cursor: !isButtonDisabled ? 'pointer':'not-allowed' }}
        />
    );
}

export default AnimationRenderer;