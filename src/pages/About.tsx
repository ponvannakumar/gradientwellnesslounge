import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import StackingCardsGSAP from '../components/StackingCardsGSAP';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
// import Stack from '../components/Stack';

gsap.registerPlugin(ScrollTrigger);

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const experienceImageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && experienceImageRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: experienceImageRef.current,
          start: 'top center',
          end: 'bottom top',
          onLeave: () => gsap.to(experienceImageRef.current, { autoAlpha: 0 }),
          onEnterBack: () => gsap.to(experienceImageRef.current, { autoAlpha: 1 }),
          scrub: true,
        },
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    } else if (!isMobile && experienceImageRef.current) {
      // Ensure any mobile-specific scroll triggers are killed and the image is visible
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === experienceImageRef.current) {
          trigger.kill();
        }
      });
      gsap.set(experienceImageRef.current, { autoAlpha: 1 });
    }
  }, [isMobile]);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen"
      style={{ background: '#f6e5cf' }}
    >
      {/* Company Introduction Section */}
      <section className="pt-24 md:pt-32 pb-16 relative overflow-hidden" style={{ background: '#f6e5cf' }}>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex flex-col items-center mb-8">
                <img src="/logo.png" alt="Gradient Holistic Wellness Lounge" className="w-20 h-30 object-contain mb-2" />
                <h1
                  className="text-5xl md:text-6xl font-bold mb-2 about-title"
                  style={{
                    fontFamily: "'Copperplate Gothic Bold', 'Copperplate Gothic Light', Copperplate, fantasy",
                    color: '#000000',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  G R A D I E N T
                </h1>
                <h2
                  className="text-xl tracking-widest about-subtitle"
                  style={{
                    fontFamily: "'Times New Roman', serif",
                    color: '#000000',
                    whiteSpace: 'nowrap',
                    fontSize: isMobile ? '0.9rem' : '1.25rem',
                    letterSpacing: isMobile ? '0.15em' : '0.2em'
                  }}
                >
                  HOLISTIC WELLNESS LOUNGE
                </h2>
              </div>

              {/* Company Introduction Content */}
              <section className="container mx-auto py-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Column: Vision Text */}
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-4 text-red-700">OUR VISION</h3>
                    <p className="mb-4 vision-text">
                      At Gradient, we are setting a new benchmark in the way health, fitness, performance and pain management are experienced.
                    </p>
                    <p className="mb-4 vision-text">
                      No shortcuts, no one size fits-all routines. Gradient is built on science baked, evidence based and precision. Every program here is personalised, every session is purpose driven, and every transformation is sustainable.
                    </p>
                    <p className="vision-text">
                      Whether you’re recovering from chronic pain, an athlete chasing peak performance, or seeking a holistic approach to metabolic conditions, Gradient offers a one-stop solution: cutting-edge physiotherapy, strength & conditioning, and lifestyle coaching – all under one roof
                    </p>
                  </div>

                  {/* Right Column: Experience and Image Placeholder */}
                  <div className="text-center">
                    <img
                      ref={experienceImageRef}
                      src="/grad.jpg"
                      alt="The Gradient Difference"
                      className="experience-image"
                    />
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stacking Cards GSAP Feature Section */}
      <div className="about-stacking-cards">
        <StackingCardsGSAP />
      </div>
    </motion.div>
  );
};
export default About;
