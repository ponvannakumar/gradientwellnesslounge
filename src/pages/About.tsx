import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import GreenShiftStackingCards from '../components/GreenShiftStackingCards';

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const About: React.FC = () => {
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
                    letterSpacing: '0.2em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  HOLISTIC WELLNESS LOUNGE
                </h2>
              </div>

              {/* Company Introduction Content */}
              <section>
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full flex justify-center items-center py-8">
                    <motion.div
                      className="relative rounded-lg overflow-hidden group"
                      style={{ width: '200%', maxWidth: '1400px', maxHeight: '1400px', perspective: '1400px' }}
                      whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02, transition: { duration: 0.4 } }}
                    >
                      <motion.img
                        src="/aboutgrad.png"
                        alt="Gradient Holistic Wellness Lounge"
                        className="w-full h-auto object-contain bg-white"
                        style={{ backgroundColor: '#fff' }}
                        initial={{ scale: 1.02, rotate: -0.5 }}
                        animate={{ scale: [1.02, 1.04, 1.02], rotate: [-0.5, 0.5, -0.5] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </motion.div>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GreenShift Stacking Card Animation Section */}
      <GreenShiftStackingCards />
    </motion.div>
  );
};

export default About;
