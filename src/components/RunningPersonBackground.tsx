import React from 'react';
import { motion } from 'framer-motion';

const maroonColor = '#b91c1c'; // Premium maroon color used in the website

const runningPersonPath = "M10 30 L15 20 L20 30 L25 20 L30 30"; // Simplified running person path (can be replaced with SVG path for better detail)

const RunningPersonBackground: React.FC = () => {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: '15%',
        left: '-15%',
        zIndex: 0,
        filter: 'drop-shadow(0 0 3px rgba(185, 28, 28, 0.8))',
        opacity: 0.4,
        transformStyle: 'preserve-3d',
        perspective: 800,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
      initial={{ x: '-15%', rotateY: 0 }}
      animate={{
        x: ['-15%', '110%'],
        rotateY: [0, 360],
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 12,
          ease: 'linear',
        },
        rotateY: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 12,
          ease: 'linear',
        },
      }}
    >
      <circle cx="20" cy="20" r="18" stroke={maroonColor} strokeWidth="2" fill="none" />
      <motion.path
        d={runningPersonPath}
        stroke={maroonColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{ filter: 'drop-shadow(0 0 1.5px rgba(185, 28, 28, 0.9))' }}
      />
    </motion.svg>
  );
};

export default RunningPersonBackground;
