import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = ({ 
  count = 10, 
  color = '#f10909ff', 
  size = 4, 
  opacity = 0.5,
  duration = 6,
  className = '' 
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            opacity: opacity,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [opacity, opacity * 2, opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: duration + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
