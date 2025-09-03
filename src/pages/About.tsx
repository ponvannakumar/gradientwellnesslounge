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

interface Feedback {
  quote: string;
  rating: number; // 1 to 5
  results: string;
  reviewerName: string;
  reviewerTitle: string;
}

// Sample feedback data per person (same for both for now)
const feedbackSeed: Record<string, Feedback[]> = {
  'Sarah Mitchell': [
    {
      quote: "Sarah's guidance transformed my recovery journey.",
      rating: 5,
      results: 'Reduced pain by 70%',
      reviewerName: 'John D.',
      reviewerTitle: 'Athlete',
    },
    {
      quote: 'Professional and compassionate care throughout.',
      rating: 4,
      results: 'Improved mobility by 50%',
      reviewerName: 'Emily R.',
      reviewerTitle: 'Dancer',
    },
    {
      quote: 'Helped me regain strength and confidence.',
      rating: 5,
      results: 'Increased strength by 60%',
      reviewerName: 'Michael S.',
      reviewerTitle: 'Runner',
    },
    {
      quote: 'Highly recommend for injury rehabilitation.',
      rating: 5,
      results: 'Full recovery in 3 months',
      reviewerName: 'Anna K.',
      reviewerTitle: 'Yoga Instructor',
    },
  ],
  'Marcus Thompson': [
    {
      quote: 'Marcus pushed me to new limits safely.',
      rating: 5,
      results: 'Gained 10 lbs muscle',
      reviewerName: 'David L.',
      reviewerTitle: 'Bodybuilder',
    },
    {
      quote: 'Effective training plans tailored to me.',
      rating: 4,
      results: 'Lost 15 lbs fat',
      reviewerName: 'Samantha W.',
      reviewerTitle: 'Fitness Enthusiast',
    },
    {
      quote: 'Motivating and knowledgeable coach.',
      rating: 5,
      results: 'Improved endurance by 40%',
      reviewerName: 'Chris P.',
      reviewerTitle: 'Cyclist',
    },
    {
      quote: 'Helped me stay consistent and focused.',
      rating: 5,
      results: 'Completed first marathon',
      reviewerName: 'Laura M.',
      reviewerTitle: 'Runner',
    },
  ],
};

// FeedbackCard component
const FeedbackCard: React.FC<{ feedback: Feedback }> = ({ feedback }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      className={`w-5 h-5 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
    </svg>
  ));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto transition-transform duration-300 ease-in-out hover:scale-[1.03]">
      <p className="italic text-gray-700 mb-4 text-lg leading-relaxed">“{feedback.quote}”</p>
      <div className="flex items-center mb-2">{stars}</div>
      <p className="font-semibold text-red-700 mb-2 text-lg">{feedback.results}</p>
      <p className="font-medium text-base">{feedback.reviewerName}</p>
      <p className="text-sm text-gray-500">{feedback.reviewerTitle}</p>
    </div>
  );
};

// FeedbackCarousel component
const FeedbackCarousel: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((c) => (c - 1 + feedbacks.length) % feedbacks.length);
  const goNext = () => setCurrent((c) => (c + 1) % feedbacks.length);

  return (
    <div className="mt-8">
      <div className="relative max-w-lg mx-auto px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <FeedbackCard feedback={feedbacks[current]} />
          </motion.div>
        </AnimatePresence>

        {/* Left arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous feedback"
          className="absolute top-1/2 left-0 -translate-x-1/2 transform -translate-y-1/2 bg-red-700 text-white rounded-full p-2 hover:bg-red-800 focus:outline-none"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          aria-label="Next feedback"
          className="absolute top-1/2 right-0 translate-x-1/2 transform -translate-y-1/2 bg-red-700 text-white rounded-full p-2 hover:bg-red-800 focus:outline-none"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-4 gap-2">
        {feedbacks.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${i === current ? 'bg-red-700' : 'bg-gray-300'}`}
            aria-label={`Go to feedback ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
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
          <motion.div initial={{ y: 0 }} animate={{ y: [-130, 130] }} transition={{ duration: 3.0, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }} style={{ willChange: 'transform' }}>
            {colA.map((src, i) => (
              <motion.div key={`a-${i}`} className="mb-4 rounded-2xl overflow-hidden border bg-white max-w-[450px] mx-auto shadow-sm" style={columnStyles.card as any} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 160, damping: 18 }}>
                <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden">
                  <img src={src} alt="gallery" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 - opposite direction, slightly different speed */}
          <motion.div initial={{ y: 0 }} animate={{ y: [130, -130] }} transition={{ duration: 2.8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }} style={{ willChange: 'transform' }}>
            {colB.map((src, i) => (
              <motion.div key={`b-${i}`} className="mb-4 rounded-2xl overflow-hidden border bg-white max-w-[450px] mx-auto shadow-sm" style={columnStyles.card as any} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 160, damping: 18 }}>
                <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden">
                  <img src={src} alt="gallery" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 3 - slight offset, different speed */}
          <motion.div initial={{ y: 0 }} animate={{ y: [-130, 130] }} transition={{ duration: 3.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }} style={{ willChange: 'transform' }}>
            {colC.map((src, i) => (
              <motion.div key={`c-${i}`} className="mb-4 rounded-2xl overflow-hidden border bg-white max-w-[450px] mx-auto shadow-sm" style={columnStyles.card as any} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 160, damping: 18 }}>
                <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden">
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
              <div className="grid lg:grid-cols-1 gap-12 items-start">

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

                  {/* Feedback Carousel */}
                  <FeedbackCarousel feedbacks={feedbackSeed[current.name] || []} />
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