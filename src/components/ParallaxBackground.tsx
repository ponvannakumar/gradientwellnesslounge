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

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-fixed -z-10 ${className}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        transform: `translateY(${offsetY * 0.5}px)`,
        filter: 'brightness(0.7)',
      }}
    />
  );
};

export default ParallaxBackground;
