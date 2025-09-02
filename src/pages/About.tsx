import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
import ParallaxBackground from '../components/ParallaxBackground';

interface PersonProfile {
  name: string;
  title: string;
  bio: string[];
  image: string;
  heroHeadline: string;
  gallery: string[];
}

const peopleSeed: PersonProfile[] = [
  {
    name: 'Sarah Mitchell',
    title: 'Lead Physiotherapist',
    bio: [
      'Dedicated to holistic recovery and performance optimization.',
      'Specializes in injury rehabilitation and movement restoration.',
    ],
    image: 'https://images.pexels.com/photos/5328034/pexels-photo-5328034.jpeg',
    heroHeadline: 'Awaken Your Mind, Body & Spirit with Us',
    gallery: [
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
      'https://images.pexels.com/photos/1218483/pexels-photo-1218483.jpeg',
      'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg',
      'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg',
      'https://images.pexels.com/photos/374703/pexels-photo-374703.jpeg',
      'https://images.pexels.com/photos/247005/pexels-photo-247005.jpeg'
    ],
  },
  {
    name: 'Marcus Thompson',
    title: 'Head Personal Trainer',
    bio: [
      'Coaches high-impact, sustainable training programs.',
      'Believes in data-driven progress and form-first technique.',
    ],
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    heroHeadline: 'We Don’t Just Heal. We Empower.',
    gallery: [
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
      'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg',
      'https://images.pexels.com/photos/1218483/pexels-photo-1218483.jpeg',
      'https://images.pexels.com/photos/374703/pexels-photo-374703.jpeg',
      'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg',
      'https://images.pexels.com/photos/247005/pexels-photo-247005.jpeg'
    ],
  },
];

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.5 } },
};

// Reusable components
const HeroSection: React.FC<{ person: PersonProfile }> = ({ person }) => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium" style={{ color: '#8b0000' }}>{`I’m ${person.name}`}</span>
              <span className="text-sm">→</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold gradient-text mb-6">{person.heroHeadline}</h1>
            <p className="subtitle mb-8 max-w-xl">
              Reflections, practices, and stories about presence, compassion, and joyful living. I write to help you slow down, notice, and reconnect with what matters most.
            </p>
            <button className="gradient-button inline-flex items-center gap-2">
              Let’s talk
            </button>
          </motion.div>

          {/* Right: Image with play overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg border" style={{ borderColor: 'rgba(185,28,28,0.25)' }}>
              <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <button
              className="absolute inset-0 m-auto w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg"
              style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}
              aria-label="Play"
            >
              ▶
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MasonryGrid: React.FC<{ person: PersonProfile }> = ({ person }) => {
  // Split images into three columns for a Pinterest-style layout
  const colA: string[] = [];
  const colB: string[] = [];
  const colC: string[] = [];
  person.gallery.forEach((src, i) => {
    if (i % 3 === 0) colA.push(src);
    else if (i % 3 === 1) colB.push(src);
    else colC.push(src);
  });

  const columnStyles = {
    card: {
      borderColor: 'rgba(185,28,28,0.15)'
    } as React.CSSProperties,
  };

  return (
    <section className="section-padding" style={{ background: '#efe9dc' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Column 1 - faster up/down */}
          <motion.div initial={{ y: 0 }} animate={{ y: [-110, 110] }} transition={{ duration: 4.2, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }} style={{ willChange: 'transform' }}>
            {colA.map((src, i) => (
              <motion.div key={`a-${i}`} className="mb-4 rounded-2xl overflow-hidden border bg-white max-w-[450px] mx-auto shadow-sm" style={columnStyles.card as any} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 160, damping: 18 }}>
                <div className="w-full aspect-[3/4]">
                  <img src={src} alt="gallery" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 - opposite direction, slightly different speed */}
          <motion.div initial={{ y: 0 }} animate={{ y: [110, -110] }} transition={{ duration: 4.0, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }} style={{ willChange: 'transform' }}>
            {colB.map((src, i) => (
              <motion.div key={`b-${i}`} className="mb-4 rounded-2xl overflow-hidden border bg-white max-w-[450px] mx-auto shadow-sm" style={columnStyles.card as any} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 160, damping: 18 }}>
                <div className="w-full aspect-[3/4]">
                  <img src={src} alt="gallery" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 3 - slight offset, different speed */}
          <motion.div initial={{ y: 0 }} animate={{ y: [-110, 110] }} transition={{ duration: 4.6, repeat: Infinity, repeatType: 'mirror', ease: 'linear' }} style={{ willChange: 'transform' }}>
            {colC.map((src, i) => (
              <motion.div key={`c-${i}`} className="mb-4 rounded-2xl overflow-hidden border bg-white max-w-[450px] mx-auto shadow-sm" style={columnStyles.card as any} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 160, damping: 18 }}>
                <div className="w-full aspect-[3/4]">
                  <img src={src} alt="gallery" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const people = useMemo(() => peopleSeed, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const current = people[currentIndex];

  const goPrev = () => setCurrentIndex((i) => (i - 1 + people.length) % people.length);
  const goNext = () => setCurrentIndex((i) => (i + 1) % people.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40; // swipe threshold
    if (delta > threshold) {
      goPrev();
    } else if (delta < -threshold) {
      goNext();
    }
    touchStartX.current = null;
  };

  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={pageVariants}>
      <ParallaxBackground imageUrl="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg" />
      <HeroSection person={current} />
      <MasonryGrid person={current} />

      {/* Profile Switcher */}
      <section className="section-padding" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div key={current.name} variants={pageVariants} initial="initial" animate="enter" exit="exit">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div>
                  <div className="rounded-3xl overflow-hidden border" style={{ borderColor: 'rgba(185,28,28,0.25)' }}>
                    <div className="aspect-[4/5] w-full bg-gray-800" style={{ backgroundImage: `url(${current.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}>
                    <span className="text-white text-xl font-bold">GW</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-2">{current.name}</h2>
                  <p className="text-[#8b0000] font-semibold mb-6">{current.title}</p>

                  <div className="space-y-4">
                    {current.bio.map((p, idx) => (
                      <p key={idx} className="subtitle">{p}</p>
                    ))}
                  </div>

                  {/* Accents like in reference: quote/card */}
                  <div className="mt-8 bg-gradient-to-r from-[#b91c1c]/10 via-[#8a1111]/10 to-[#111111]/10 rounded-xl p-6 border" style={{ borderColor: 'rgba(185,28,28,0.2)' }}>
                    <p className="text-gray-700 italic">“Replace this with your story, philosophy, or headline quote.”</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next / Prev */}
          <div className="mt-12 flex items-center justify-between">
            <button onClick={goPrev} className="gradient-button outline inline-flex items-center gap-2">
              <ArrowLeft size={18} />
              Previous
            </button>
            <div className="flex gap-2">
              {people.map((_, i) => (
                <span key={i} className={`w-2.5 h-2.5 rounded-full ${i === currentIndex ? '' : 'bg-gray-500'}`} style={i === currentIndex ? { background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' } : undefined} />
              ))}
            </div>
            <button onClick={goNext} className="gradient-button inline-flex items-center gap-2">
              Next
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;