import React, { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  imageUrl?: string;
  className?: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  imageUrl = 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
  className = ''
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload the image to avoid initial flash
  useEffect(() => {
    let isCancelled = false;
    const img = new Image();
    img.decoding = 'async';
    // @ts-expect-error Non-standard but widely supported
    img.fetchPriority = 'high';
    img.onload = () => {
      if (!isCancelled) setIsLoaded(true);
    };
    img.src = imageUrl;
    return () => {
      isCancelled = true;
    };
  }, [imageUrl]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-fixed -z-10 transition-opacity duration-500 ${className}`}
      style={{
        // Fallback brand gradient while image loads (premium maroon to soft black)
        background: 'linear-gradient(90deg, #8B0000 0%, #a61b1b 60%, #1a1a1a 100%)',
        backgroundImage: isLoaded ? `url(${imageUrl})` : undefined,
        transform: `translateY(${offsetY * 0.5}px)`,
        filter: 'brightness(0.7)',
        willChange: 'transform',
        opacity: isLoaded ? 1 : 0.001,
      }}
    />
  );
};

export default ParallaxBackground;
