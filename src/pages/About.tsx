import React, { useMemo, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { Star, Sparkles, Crown, Zap, ArrowLeft, ArrowRight } from 'lucide-react';
import './About.css';

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
    name: 'Guru Prasad K P',
    title: 'Lead Physiotherapist',
    bio: [
      'Dedicated to holistic recovery and performance optimization.',
      'Specializes in injury rehabilitation and movement restoration.',
    ],
  image: '/gradienthomeee.png',
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
  // {
  //   name: 'Jamuna R',
  //   title: 'Head Personal Trainer',
  //   bio: [
  //     'Coaches high-impact, sustainable training programs.',
  //     'Believes in data-driven progress and form-first technique.',
  //   ],
  //   image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
  //   heroHeadline: 'We Not Just Heal. We Empower.',
  //   gallery: [
  //     'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
  //     'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg',
  //     'https://images.pexels.com/photos/1218483/pexels-photo-1218483.jpeg',
  //     'https://images.pexels.com/photos/374703/pexels-photo-374703.jpeg',
  //     'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg',
  //     'https://images.pexels.com/photos/247005/pexels-photo-247005.jpeg'
  //   ],
  // },
];

import { easeOut, cubicBezier } from "framer-motion";

// Premium animation variants
const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 60, 
    rotateX: -25, 
    scale: 0.8,
    filter: 'blur(20px) brightness(0.4)',
  },
  enter: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    scale: 1,
    filter: 'blur(0px) brightness(1)',
    transition: { 
      duration: 1.2, 
      ease: cubicBezier(0.16, 1, 0.3, 1),
      staggerChildren: 0.1
    } 
  },
  exit: { 
    opacity: 0, 
    y: -40, 
    rotateX: 25, 
    scale: 0.9,
    filter: 'blur(15px) brightness(0.6)',
    transition: { 
      duration: 0.8, 
      ease: cubicBezier(0.87, 0, 0.13, 1) 
    } 
  },
};

const glassCardVariants = {
  initial: { 
    opacity: 0, 
    y: 40,
    rotateY: -15,
    scale: 0.9
  },
  animate: { 
    opacity: 1, 
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    }
  },
  hover: {
    y: -10,
    rotateY: 5,
    rotateX: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: easeOut
    }
  }
};

interface Feedback {
  quote: string;
  rating: number;
  results: string;
  reviewerName: string;
  reviewerTitle: string;
}

const feedbackSeed: Record<string, Feedback[]> = {
  'Guru Prasad K P': [
    {
      quote: "Guru Prasad K P's guidance transformed my recovery journey.",
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
  // 'Jamuna R': [
  //   {
  //     quote: 'Jamuna pushed me to new limits safely.',
  //     rating: 5,
  //     results: 'Gained 10 lbs muscle',
  //     reviewerName: 'David L.',
  //     reviewerTitle: 'Bodybuilder',
  //   },
  //   {
  //     quote: 'Effective training plans tailored to me.',
  //     rating: 4,
  //     results: 'Lost 15 lbs fat',
  //     reviewerName: 'Samantha W.',
  //     reviewerTitle: 'Fitness Enthusiast',
  //   },
  //   {
  //     quote: 'Motivating and knowledgeable coach.',
  //     rating: 5,
  //     results: 'Improved endurance by 40%',
  //     reviewerName: 'Chris P.',
  //     reviewerTitle: 'Cyclist',
  //   },
  //   {
  //     quote: 'Helped me stay consistent and focused.',
  //     rating: 5,
  //     results: 'Completed first marathon',
  //     reviewerName: 'Laura M.',
  //     reviewerTitle: 'Runner',
  //   },
  // ],
};

// Premium Glassmorphism Card - Updated with your color scheme
const GlassmorphismCard: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  variant?: 'default' | 'premium' | 'luxury';
}> = ({ children, className = '', variant = 'default' }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'luxury':
        return {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(220, 38, 38, 0.2)',
          boxShadow: '0 25px 60px rgba(220, 38, 38, 0.2)',
        };
      case 'premium':
        return {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(220, 38, 38, 0.2)',
          boxShadow: '0 20px 40px rgba(220, 38, 38, 0.15)',
        };
      default:
        return {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(220, 38, 38, 0.2)',
          boxShadow: '0 15px 30px rgba(220, 38, 38, 0.1)',
        };
    }
  };

  return (
    <motion.div
      className={`rounded-3xl overflow-hidden ${className}`}
      style={{
        ...getVariantStyles(),
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) }}
    >
      {children}
    </motion.div>
  );
};

// Premium Feedback Card with your color scheme
const FeedbackCard: React.FC<{ feedback: Feedback }> = ({ feedback }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: i * 0.1, duration: 0.3 }}
    >
      <Star
        className={`w-6 h-6 ${i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    </motion.div>
  ));

  return (
    <GlassmorphismCard variant="luxury" className="p-8 max-w-md mx-auto group">
      <div className="relative">
        {/* Floating decorative elements - Updated colors */}
        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
            boxShadow: '0 8px 25px rgba(220, 38, 38, 0.4)',
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Sparkles className="w-4 h-4 text-white m-2" />
        </motion.div>

        <motion.p 
          className="italic mb-6 text-lg leading-relaxed font-medium"
          style={{ color: '#4b5563' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          "{feedback.quote}"
        </motion.p>
        
        <div className="flex items-center mb-4 gap-1">{stars}</div>
        
        <motion.div
          className="text-white px-4 py-2 rounded-full text-center mb-4 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            animate={{ x: [-100, 300] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="font-semibold text-lg relative z-10">{feedback.results}</p>
        </motion.div>
        
        <p className="font-medium text-base" style={{ color: '#171717' }}>{feedback.reviewerName}</p>
        <p className="text-sm" style={{ color: '#4b5563' }}>{feedback.reviewerTitle}</p>
      </div>
    </GlassmorphismCard>
  );
};

// Enhanced Feedback Carousel with your color scheme
const FeedbackCarousel: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((c) => (c - 1 + feedbacks.length) % feedbacks.length);
  const goNext = () => setCurrent((c) => (c + 1) % feedbacks.length);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-12 relative">
      <div className="relative max-w-2xl mx-auto px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ 
              opacity: 0, 
              x: 100, 
              rotateY: 45,
              scale: 0.8
            }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotateY: 0,
              scale: 1
            }}
            exit={{ 
              opacity: 0, 
              x: -100, 
              rotateY: -45,
              scale: 0.8
            }}
            transition={{ 
              duration: 0.8, 
              ease: cubicBezier(0.16, 1, 0.3, 1)
            }}
            style={{ perspective: '1000px' }}
          >
            <FeedbackCard feedback={feedbacks[current]} />
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Navigation Buttons - Updated colors */}
        {/* <motion.button
          onClick={goPrev}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white group overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
            boxShadow: '0 15px 40px rgba(220, 38, 38, 0.4)',
          }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: '0 20px 50px rgba(220, 38, 38, 0.5)' 
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
            animate={{ x: [-50, 50] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <ArrowLeft size={20} className="relative z-10" />
        </motion.button> */}

        {/* <motion.button
          onClick={goNext}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white group overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
            boxShadow: '0 15px 40px rgba(220, 38, 38, 0.4)',
          }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: '0 20px 50px rgba(220, 38, 38, 0.5)' 
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
            animate={{ x: [-50, 50] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <ArrowRight size={20} className="relative z-10" />
        </motion.button> */}
      </div>

      {/* Enhanced Progress Indicators - Updated colors */}
      <div className="flex justify-center mt-8 gap-3">
        {feedbacks.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative overflow-hidden rounded-full ${
              i === current ? 'w-12 h-4' : 'w-4 h-4'
            }`}
            style={{
              background: i === current 
                ? 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
                : 'rgba(156,163,175,0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            layout
            transition={{ duration: 0.3 }}
          >
            {i === current && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                animate={{ x: [-20, 40] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

// Premium Hero Section with your color scheme
const HeroSection: React.FC<{ person: PersonProfile }> = ({ person }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="pt-24 md:pt-32 pb-16 relative overflow-hidden" style={{ background: '#fdf8f3' }}>
      {/* Animated Background Elements - Updated colors */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)',
            y: y1
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: 360
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #b91c1c 0%, transparent 70%)',
            y: y2
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: -360
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
        />
      </div>

      <motion.div className="container relative z-10" style={{ opacity }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Section */}
          <motion.div 
            variants={{
              initial: { opacity: 0, x: -60, rotateY: -15 },
              animate: { opacity: 1, x: 0, rotateY: 0 }
            }}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, ease: cubicBezier(0.16, 1, 0.3, 1) }}
            className="relative"
          >
            {/* Premium Badge - Updated colors */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(220, 38, 38, 0.3)',
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            >
              <Crown className="w-4 h-4" style={{ color: '#dc2626' }} />
              <span style={{ color: '#dc2626' }}>Premium Wellness Expert</span>
            </motion.div>

            <div className="flex items-center gap-3 mb-6">
              <motion.span 
                className="text-2xl font-bold"
                style={{ 
                  fontFamily: 'Merriweather, serif',
                  color: '#dc2626'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                I'm {person.name}
              </motion.span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-6 h-6" style={{ color: '#dc2626' }} />
              </motion.div>
            </div>

            {/* Split gradient heading matching your CSS */}
            <motion.h1 
              className="text-6xl md:text-7xl font-black mb-8 leading-tight"
              style={{
                fontFamily: 'Merriweather, serif',
                background: 'linear-gradient(90deg, #b91c1c 0%, #b91c1c 50%, #111111 50%, #111111 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {person.heroHeadline}
            </motion.h1>

            <motion.p 
              className="subtitle mb-10 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Reflections, practices, and stories about presence, compassion, and joyful living. I write to help you slow down, notice, and reconnect with what matters most.
            </motion.p>

            {/* Updated button with your styles */}
            <motion.button
              className="gradient-button inline-flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <span>Let's Transform Together</span>
              <Sparkles className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            variants={{
              initial: { opacity: 0, x: 60, rotateY: 15, scale: 0.8 },
              animate: { opacity: 1, x: 0, rotateY: 0, scale: 1 }
            }}
            initial="initial"
            animate="animate"
            transition={{ duration: 1.2, ease: cubicBezier(0.16, 1, 0.3, 1) }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden group"
              whileHover={{ 
                rotateY: 5, 
                rotateX: -5, 
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
              style={{
                transformStyle: 'preserve-3d',
                border: '1px solid rgba(220, 38, 38, 0.25)',
                boxShadow: '0 25px 60px rgba(220, 38, 38, 0.2)',
              }}
            >
              <motion.img 
                src={person.image} 
                alt={person.name} 
                className="w-full h-[600px] object-contain bg-white"
                style={{ backgroundColor: '#fff' }}
                initial={{ scale: 1.05, rotate: -1 }}
                animate={{ 
                  scale: [1.05, 1.08, 1.05], 
                  rotate: [-1, 1, -1],
                  boxShadow: [
                    '0 25px 60px rgba(220, 38, 38, 0.18)',
                    '0 35px 80px rgba(220, 38, 38, 0.22)',
                    '0 25px 60px rgba(220, 38, 38, 0.18)'
                  ]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Premium Masonry Grid matching your background
const MasonryGrid: React.FC<{ person: PersonProfile }> = ({ person }) => {
  const descriptionsGuru = [
    `Dedicated to holistic recovery and performance optimization. Specializes in injury rehabilitation and movement restoration. Our approach integrates advanced therapeutic techniques, ongoing assessment, and personalized care plans. We believe in empowering clients to take charge of their recovery journey, providing education and support every step of the way. Whether you're overcoming an injury or striving for peak performance, our team is committed to helping you achieve sustainable results and long-term wellness.`,
    `Coaches high-impact, sustainable training programs. Believes in data-driven progress and form-first technique. Our training philosophy centers on building strong foundations, preventing injuries, and maximizing results through tailored exercise regimens. We utilize the latest research and technology to track progress, adjust plans, and motivate clients. From beginners to elite athletes, our coaching adapts to individual needs, ensuring every session is purposeful and effective.`,
    `Reflections, practices, and stories about presence, compassion, and joyful living. I write to help you slow down, notice, and reconnect with what matters most. Our holistic approach includes mindfulness, stress management, and lifestyle optimization, supporting mental and emotional health alongside physical fitness. We encourage clients to cultivate self-awareness, resilience, and joy in their daily lives.`,
    `We empower you with personalized coaching and holistic wellness strategies to awaken your mind, body, and spirit. Our programs combine nutrition, movement, recovery, and mindset training to create lasting transformation. We partner with you to set meaningful goals, celebrate progress, and overcome challenges. Every journey is unique, and we honor your individual path to wellness.`
  ];

  const descriptionsJamuna = [
    `Expert in sports nutrition and metabolic health. Focuses on optimizing dietary habits for athletes and active individuals. Provides evidence-based guidance on meal planning, supplementation, and recovery strategies. Passionate about helping clients achieve peak energy levels and long-term health through sustainable nutrition practices.`,
    `Specializes in yoga, meditation, and stress reduction techniques. Offers group and private sessions tailored to all experience levels. Emphasizes the importance of breathwork, mindfulness, and holistic self-care. Dedicated to creating a supportive environment for personal growth and emotional well-being.`,
    `Advocate for community wellness initiatives and outreach programs. Organizes workshops, seminars, and events to promote healthy living and social connection. Collaborates with local organizations to expand access to wellness resources. Believes in the power of collective action to improve public health.`,
    `Combines expertise in physical therapy and coaching to deliver integrated care. Utilizes movement assessments, corrective exercises, and motivational interviewing to support client goals. Strives to empower individuals to overcome barriers and achieve lasting transformation.`
  ];

  let descriptions = descriptionsGuru;
  if (person && person.name === 'Jamuna R') {
    descriptions = descriptionsJamuna;
  }

  return (
    <div>
      <div className="container relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {descriptions.map((desc, idx) => (
            <motion.div 
              key={idx} 
              variants={glassCardVariants}
              whileHover="hover"
              className="group"
            >
              <GlassmorphismCard
                variant="premium"
                className="p-10 min-h-[400px] flex items-center relative overflow-hidden"
              >
                {/* Decorative corner elements - Updated colors */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    className="w-8 h-8 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                      opacity: 0.6,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                </div>

                <motion.p 
                  className="text-lg leading-relaxed font-medium relative z-10"
                  style={{ 
                    color: '#4b5563',
                    fontFamily: 'Open Sans, sans-serif'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {desc}
                </motion.p>

                {/* Hover effect overlay - Updated colors */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(185, 28, 28, 0.1) 100%)',
                  }}
                />
              </GlassmorphismCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
const About = () => {
  const people = useMemo(() => peopleSeed, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const current = people[currentIndex];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const goPrev = () => {
    setCurrentIndex((i) => (i - 1 + people.length) % people.length);
    scrollToTop();
  };

  const goNext = () => {
    setCurrentIndex((i) => (i + 1) % people.length);
    scrollToTop();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;
    if (delta > threshold) {
      goPrev();
    } else if (delta < -threshold) {
      goNext();
    }
    touchStartX.current = null;
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen"
      style={{ background: '#f6e5cf' }}
    >
      <div>
        {/* Company Introduction Section */}
        <section className="pt-24 md:pt-32 pb-16 relative overflow-hidden" style={{ background: '#f6e5cf' }}>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Premium Brand Badge */}
                {/*
    <motion.div
      className="mb-8 w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden group mx-auto"
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid rgba(220, 38, 38, 0.3)',
        boxShadow: '0 15px 40px rgba(220, 38, 38, 0.1)',
      }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        boxShadow: '0 20px 50px rgba(220, 38, 38, 0.2)'
      }}
    >
      <img
        src="/logo.png"
        alt="Gradient Holistic Wellness Lounge"
        className="w-12 h-12 object-contain relative z-10"
      />
    </motion.div>
    */}

                {/* Company Title */}
                {/*
    <motion.h1
      className="text-5xl md:text-6xl font-bold gradient-text mb-8 leading-tight text-center"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        whiteSpace: 'normal',
        lineHeight: 1.1,
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <span style={{ display: 'block', letterSpacing: '0.03em', fontFamily: "'Copperplate Gothic Bold', 'Copperplate Gothic Light', Copperplate, fantasy" }}>G R A D I E N T</span>
      <span style={{ display: 'block', fontSize: '0.4em' }}>HOLISTIC WELLNESS LOUNGE</span>
    </motion.h1>
    */}

                <motion.div
                  className="flex flex-col items-center mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <img
                    src="/logo.png"
                    alt="Gradient Holistic Wellness Lounge"
                    className="w-20 h-30 object-contain mb-2" />
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
                </motion.div>

                {/* Company Introduction Section */}
                <section>
                  <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Content side */}
                    {/* <div className="md:w-1/2 text-center md:text-left">
                      <h2 className="text-4xl font-bold mb-6 text-gray-900">OUR VISION</h2>
                      <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
                        At Gradient, we are setting a new benchmark in the way health, fitness, performance and pain management are experienced.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0 mt-4">
                        No shortcuts, no one size fits-all routines. Gradient is built on science baked, evidence based and precision. Every program here is personalised, every session is purpose driven, and every transformation is sustainable.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0 mt-4">
                        Whether you're recovering from chronic pain, an athlete chasing peak performance, or seeking a holistic approach to metabolic conditions, Gradient offers a one-stop solution: cutting-edge physiotherapy, strength & conditioning, and lifestyle coaching – all under one roof
                      </p>
                    </div> */}
                    {/* Image side - Centered and Easily Customizable */}
                    <div className="w-full flex justify-center items-center py-8">
                    <motion.div
                      className="relative rounded-lg overflow-hidden group"
                      style={{ width: '200%', maxWidth: '1400px', maxHeight: '1400px', perspective: '1400px' }}
                      whileHover={{
                        rotateY: 5,
                        rotateX: -5,
                        scale: 1.02,
                        transition: { duration: 0.4 }
                      }}
                    >
                      <motion.img
                        src="/aboutgrad.png"
                        alt="Gradient Holistic Wellness Lounge"
                        className="w-full h-auto object-contain bg-white"
                        style={{ backgroundColor: '#fff' }}
                        initial={{ scale: 1.05, rotate: -1 }}
                        animate={{
                          scale: [1.05, 1.08, 1.05],
                          rotate: [-1, 1, -1],
                          boxShadow: [
                            '0 25px 60px rgba(220, 38, 38, 0.18)',
                            '0 35px 80px rgba(220, 38, 38, 0.22)',
                            '0 25px 60px rgba(220, 38, 38, 0.18)'
                          ]
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </motion.div>
                    </div>
                  </div>
                </section>
              </motion.div>

              {/* Mission Statement */}
              {/* <motion.div
      className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <h3
        className="text-2xl font-bold mb-4 gradient-text"
        style={{
          fontFamily: "'Cormorant Garamond', serif"
        }}
      >
        Our Mission
      </h3>
      <p className="text-lg leading-relaxed" style={{ color: '#4b5563' }}>
        To empower individuals to achieve holistic wellness through comprehensive, personalized care
        that nurtures physical health, mental clarity, and spiritual growth. We are committed to
        creating a supportive community where transformation and healing flourish.
      </p>
    </motion.div> */}
            </div>
          </div>
        </section>
      </div>

      <HeroSection person={current} />

      {/* Enhanced Profile Switcher */}
      <section
    className="pt-16 pb-24 relative"
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
  >
    <div className="container">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <div className="grid lg:grid-cols-1 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Premium Brand Badge - Updated colors */}
              <motion.div
                className="mb-8 w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                  boxShadow: '0 15px 40px rgba(220, 38, 38, 0.4)',
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: '0 20px 50px rgba(220, 38, 38, 0.5)'
                }}
              >
                <span className="text-white text-2xl font-bold relative z-10">GW</span>
              </motion.div>

              {/* Split gradient heading */}
              <motion.h2
                className="text-5xl md:text-6xl font-black mb-4 leading-tight"
                style={{
                  fontFamily: 'Merriweather, serif',
                  background: 'linear-gradient(90deg, #b91c1c 0%, #b91c1c 50%, #111111 50%, #111111 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {current.name}
              </motion.h2>

              <motion.p
                className="font-bold text-xl mb-8"
                style={{
                  color: '#dc2626',
                  fontFamily: 'Merriweather, serif'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {current.title}
              </motion.p>

              <div className="space-y-6 mb-10">
                {current.bio.map((p, idx) => (
                  <motion.p
                    key={idx}
                    className="subtitle"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.2, duration: 0.8 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* Premium Quote Card - Updated styling */}
              <GlassmorphismCard variant="luxury" className="p-8">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <motion.div
                    className="absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Crown className="w-4 h-4 text-white" />
                  </motion.div>

                  <blockquote className="italic text-lg font-medium leading-relaxed pl-6" style={{ color: '#4b5563' }}>
                    "Replace this with your story, philosophy, or headline quote."
                  </blockquote>
                </motion.div>
              </GlassmorphismCard>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </section>

      <MasonryGrid person={current} />

      {/* Enhanced Feedback Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom right, #f9fafb, #f3f4f6)' }}>
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-5xl font-black mb-6"
              style={{
                fontFamily: 'Merriweather, serif',
                background: 'linear-gradient(90deg, #b91c1c 0%, #b91c1c 50%, #111111 50%, #111111 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Client Success Stories
            </h2>
            <p className="subtitle max-w-2xl mx-auto">
              Discover how our premium wellness programs have transformed lives and exceeded expectations.
            </p>
          </motion.div>

          <FeedbackCarousel feedbacks={feedbackSeed[current.name] || []} />
        </div>
      </section>

      {/* Premium Navigation - Updated colors */}
      <section 
        className="section-padding" 
        style={{ background: 'linear-gradient(to right, #111827, #000000, #111827)' }}
        onTouchStart={onTouchStart} 
        onTouchEnd={onTouchEnd}
      >
        <div className="container">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/*
            <motion.button
              onClick={goPrev}
              className="gradient-button outline flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft size={20} />
              <span>Previous Expert</span>
            </motion.button>
            */}

            <div className="flex gap-4">
              {people.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-16 h-4' : 'w-4 h-4'
                  }`}
                  style={{
                    background: i === currentIndex 
                      ? 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
                      : 'rgba(255,255,255,0.3)',
                  }}
                  whileHover={{ scale: 1.2 }}
                  layout
                />
              ))}
            </div>

            {/*
            <motion.button
              onClick={goNext}
              className="gradient-button flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Next Expert</span>
              <ArrowRight size={20} />
            </motion.button>
            */}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
