import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Heart, Zap, Shield, Target } from 'lucide-react';
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
      title: 'Integrated Performance Care',
      description: 'Not just another gym nor a physiotherapy clinic.',
      link: '/services/personal-training',
    },
    {
      icon: Heart,
      title: 'Personalized One-to-One Training',
      description: 'No noises, no crowd, no waiting for equipment. We purely provide 1-1 sessions.',
      link: '/services/stress-management',
    },
    {
      icon: Zap,
      title: 'Evidence-Based Athletic Systems',
      description: 'No random drills, no outdated training. Our science-backed systems build true athletic excellence and injury prevention.',
      link: '/services/nutrition',
    },
    {
      icon: Shield,
      title: 'Clinical-Grade Fat Loss Solutions',
      description: 'No muscle sacrifice, no fads, no energy crashes. Only science-backed fat loss solutions.',
      link: '/services/physiotherapy',
    },
    {
      icon: ArrowRight,
      title: 'Functional Longevity Programs',
      description: 'No limitations. No dependency. Our programs restore strength and independence in aging.',
      link: '/services/stress-management',
    },
    {
      icon: Heart,
      title: 'Comprehensive Health Partnership',
      description: 'No assumptions, no guesswork. Our expert professionals give you real solutions, who treat your health like their own.',
      link: '/services/holistic-healing',
    },
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
  className="text-4xl md:text-[3rem] font-bold gradient-text mb-8 leading-tight text-center relative z-20"
  style={{ whiteSpace: 'pre-line', fontFamily: "'Cormorant Garamond', serif", fontWeight: '700' }}
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Still struggling with pain?{'\n'}low energy or performance? failed gym results or health conditions?{'\n'}—Despite every doctor, trainer, diet, or treatment?
</motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl subtitle mb-6 max-w-4xl mx-auto leading-relaxed relative z-20"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience comprehensive wellness solutions including fitness training, 
                nutrition coaching, physiotherapy, and stress management in our premium facility.
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
                GRADIENT DIFFERENCE
              </h2>
              <p className="text-3xl subtitle max-w-[1200px] mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif", textAlign: 'justify', textAlignLast: 'center', fontWeight: 600, color: '#1a1919ff' }}>
               At Gradient Holistic Wellness Lounge, we go beyond physiotherapy, gyms, and diets. We are a comprehensive human pain management, performance and lifestyle transformation lounge—designed for professionals, executives, individuals and athletes who demand long-term results, precision, and exclusivity.
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
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Ready to Transform Your Life?
              </h2>
              <p className="text-xl subtitle mb-12 max-w-2xl mx-auto">
                Join our community of wellness enthusiasts and start your journey 
                towards optimal health and vitality today.
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