import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, User, Zap, Target, Utensils, Dumbbell, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import AnimatedServicesGrid from '../components/AnimatedServicesGrid';

const Home = () => {
  const scrollTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollTextRef.current) {
      const element = scrollTextRef.current;
      const width = element.scrollWidth / 2; // half width because text is duplicated
      gsap.to(element, {
        x: -width,
        duration: 40,
        repeat: -1,
        ease: 'linear',
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % width)
        }
      });
    }
  }, []);

  const services = [
    {
      icon: Target,
      title: 'NOT A USUAL GYM. NOT A CLINIC',
      description: 'A Precision driven ecosystem for pain management and fitness.',
      link: '/services/personal-training',
    },
    {
      icon: User,
      title: 'NO NOISES. NO CROWDS',

      description: 'One-One session with undivided attention in a peaceful ambience.',
      link: '/services/stress-management',
    },
    {
      icon: Zap,
      title: 'NO OUT-DATED TRAINING',
      description: 'Backed by Science for Sports Performance & Athleticism.',
      link: '/services/nutrition',
    },
    {
      icon: Utensils,
      title: 'NO MUSCLE SACRIFICE',

      description: 'Fat-loss solutions that are Evidence based & Sustainable.',
      link: '/services/physiotherapy',
    },
    {
      icon: Dumbbell,
      title: 'NO RANDOM OR GUESSWORK.',
      description: 'Every program is curated, based on assessment & clients goal.',
      link: '/services/stress-management',
    },
    {
      icon: Activity,
      title: 'NO LIMITS. NO DEPENDENCY',
      description: 'Programs that help you to restore strength & move without limits.',
      link: '/services/holistic-healing',
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center section-padding relative">
        <div className="container relative z-10">
          <FadeInSection>
            <div className="relative">
              {/* Scrolling Background Text */}
{/* <div
  ref={scrollTextRef}
  className="absolute top-0 left-0 whitespace-nowrap select-none pointer-events-none"
  style={{
    fontSize: '60vw',
    fontWeight: 900,
    color: 'rgba(0,0,0,0.07)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    userSelect: 'none',
    whiteSpace: 'nowrap',
  }}
>
  GRADIENT HOLISTIC WELLNESS LOUNGE • GRADIENT HOLISTIC WELLNESS LOUNGE • GRADIENT HOLISTIC WELLNESS LOUNGE • GRADIENT HOLISTIC WELLNESS LOUNGE •
</div> */}
<motion.h1
  className="text-2xl md:text-[3rem] font-bold gradient-text mb-8 leading-tight text-center relative z-20"
  style={{ fontFamily: "'Georgia Pro SemiBold', serif", fontWeight: '700', lineHeight: 1.2 }}
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <span style={{ textTransform: 'uppercase', display: 'block' }}>A NEW PARADIGM IN</span>
  <span style={{ fontStyle: 'italic', textTransform: 'uppercase', display: 'block' }}>FITNESS AND PAIN MANAGEMENT</span>
</motion.h1>
<motion.p 
  className="text-2xl md:text-3xl subtitle mb-6 max-w-4xl mx-auto leading-relaxed relative z-20"
  style={{ /* fontFamily: "'Cormorant Garamond', serif", */ fontFamily: "'Georgia Pro SemiBold', serif", fontWeight: 600 }}
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  {/* Experience comprehensive wellness solutions including fitness training, 
  nutrition coaching, physiotherapy, and stress management in our premium facility. */}
  G R A D I E N T - A Wellness Experience like <span style={{ color: '#b91c1c' }}>Never</span> Before!
</motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/contact" className="gradient-button outline">
                 Experience The Gradient Difference
                </Link>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                THE GRADIENT DIFFERENCE
              </h2>
              <p className="text-xl md:text-2xl subtitle max-w-[1200px] mx-auto leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", textAlign: 'justify', textAlignLast: 'center', fontWeight: 600, color: '#1a1919ff', lineHeight: 1.1 }}>
               {/* At Gradient Holistic Wellness Lounge, we go beyond physiotherapy, gyms, and diets. We are a <span className="gradient-text" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>comprehensive human pain management, performance and lifestyle transformation</span> lounge—designed for professionals, executives, individuals and athletes who demand long-term results, precision, and exclusivity. */}
              An elite space offering a holistic blend of pain-free living, peak performance, and lasting lifestyle transformation — all under one roof. We seamlessly set ourselves apart through precision, personalization, and science.
              </p>
              
            </div>
          </FadeInSection>

          <AnimatedServicesGrid services={services} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="text-center">
              <h2 className="text-4xl md:text-4xl font-bold gradient-text mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Why Settle For Temporary Fixes? When You Can Get A Permanent Solution!
              </h2>
              <p className="text-xl subtitle mb-12 max-w-2xl mx-auto">
                {/* Join our community of wellness enthusiasts and start your journey 
                towards optimal health and vitality today. */}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="gradient-button">
                  Start Your Journey
                  <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="gradient-button outline">
                  Learn About Us
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;