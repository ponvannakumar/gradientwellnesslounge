import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// BorderTrail effect (inline, since no import alias)
type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: {
    repeat?: number;
    duration?: number;
    ease?: any;
  };
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

const BorderTrail: React.FC<BorderTrailProps> = ({ className = '', size = 60, transition, onAnimationComplete, style }) => {
  const defaultTransition = {
    repeat: Number.POSITIVE_INFINITY,
    duration: 5,
    ease: 'linear',
  };
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
      <motion.div
        className={`absolute aspect-square bg-gradient-to-l from-red-900/60 via-red-800 to-red-900/60 ${className}`}
        style={{
          width: size,
          height: size * 1.15,
          borderRadius: '50%',
          filter: 'blur(0.5px)',
          ...style,
        }}
        animate={{
          rotate: [0, 360],
          boxShadow: [
            '0 0 60px 20px rgba(127,29,29,0.8), 0 0 120px 40px rgba(127,29,29,0.5), 0 0 180px 80px rgba(127,29,29,0.3)',
            '0 0 120px 40px rgba(127,29,29,1), 0 0 180px 80px rgba(127,29,29,0.8), 0 0 240px 120px rgba(127,29,29,0.5)',
            '0 0 60px 20px rgba(127,29,29,0.8), 0 0 120px 40px rgba(127,29,29,0.5), 0 0 180px 80px rgba(127,29,29,0.3)'
          ]
        }}
        transition={transition || defaultTransition}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
};

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

interface AnimatedServicesGridProps {
  services: Service[];
}

import RunningPersonBackground from './RunningPersonBackground';

const AnimatedServicesGrid: React.FC<AnimatedServicesGridProps> = ({ services }) => {
  // const [stage, setStage] = useState<'hidden' | 'enter1' | 'enter2' | 'enter3' | 'enter4' | 'enter5' | 'enter6' | 'spin' | 'settle'>('hidden');
  const [stage, setStage] = useState<'hidden' | 'enter1' | 'enter2' | 'enter3' | 'enter4' | 'enter5' | 'enter6' | 'spin' | 'settle'>('settle');
  const [entryCount, setEntryCount] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  // Intersection observer to trigger animation
  React.useEffect(() => {
    let timeouts: number[] = [];
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntryCount((c) => c + 1);
        }
      },
      { threshold: 0.3 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  /*
  React.useEffect(() => {
    let timeouts: number[] = [];
    setStage('hidden');
    timeouts.push(setTimeout(() => setStage('enter1'), 200));
    timeouts.push(setTimeout(() => setStage('enter2'), 500));
    timeouts.push(setTimeout(() => setStage('enter3'), 800));
    timeouts.push(setTimeout(() => setStage('enter4'), 1100));
    timeouts.push(setTimeout(() => setStage('enter5'), 1400));
    timeouts.push(setTimeout(() => setStage('enter6'), 1700));
    timeouts.push(setTimeout(() => setStage('spin'), 2200));
    timeouts.push(setTimeout(() => setStage('settle'), 3300));
    return () => { timeouts.forEach(clearTimeout); };
  }, [entryCount]);
  */


  // Animation variants
  const cardVariants = [
    // First 3 cards (from right)
    {
      hidden: { opacity: 0, x: 200, rotateY: 0 },
      enter: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.6 } },
      spin: { opacity: 1, x: 0, rotateY: 360, transition: { duration: 1.2 } },
      settle: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.6 } },
    },
    // Last 3 cards (from left)
    {
      hidden: { opacity: 0, x: -200, rotateY: 0 },
      enter: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.6 } },
      spin: { opacity: 1, x: 0, rotateY: 360, transition: { duration: 1.2 } },
      settle: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.6 } },
    },
  ];

  return (
    <>
      <RunningPersonBackground />
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {services.map((service, idx) => {
          const isFirst3 = idx < 3;
          let animate = 'hidden';
          // Each card enters and stays visible after its entry
          if (stage === `enter${idx+1}`) animate = 'enter';
          else if (stage.startsWith('enter')) {
            const n = parseInt(stage.replace('enter',''));
            if (idx+1 <= n) animate = 'enter';
          }
          if (['spin','settle'].includes(stage)) animate = stage;
          return (
            <motion.div
              key={idx}
              initial="hidden"
              animate={animate}
              variants={isFirst3 ? cardVariants[0] : cardVariants[1]}
              style={{ perspective: 800, minHeight: 320, position: 'relative' }}
            >
              <div className="service-card text-center h-full relative overflow-hidden w-full max-w-sm mx-auto md:max-w-none">
                <BorderTrail
                  size={170}
                  style={{
                    boxShadow: '0 0 40px 10px rgba(127,29,29,0.9), 0 0 80px 20px rgba(127,29,29,0.7), 0 0 120px 30px rgba(127,29,29,0.5)'
                  }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: 'linear' }}
                  onAnimationComplete={() => {}}
                />
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}>
                    {React.createElement(service.icon, { size: 32, className: 'text-white' })}
                  </div>
                </div>
                <h3 className="gradient-text mb-4 px-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '1.1rem', lineHeight: '1.4rem', color: '#b91c1c', whiteSpace: 'normal', wordWrap: 'break-word' }}>{service.title}</h3>
                <p className="text-black leading-relaxed px-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: '1.1rem', lineHeight: '1.5rem', color: '#050505ff' }}>{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AnimatedServicesGrid;
