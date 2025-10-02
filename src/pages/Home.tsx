import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, User, Zap, Target, Coffee, Dumbbell, Activity } from 'lucide-react';
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
        icon: Coffee,
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
      <section
        className="min-h-screen flex items-start relative"
        style={{ paddingTop: '175px', paddingBottom: 0 }}
      >
        {/* High-quality background image layer */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1)',
            opacity: 1
          }}
          aria-hidden
        />
        {/* overlays removed to show the background image clearly */}

        <div className="container relative z-10">
          <FadeInSection>
            <div className="relative max-w-4xl">
              {/* Scrolling Background Text (kept off for this design) */}
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
  className="text-[2.75rem] md:text-[4rem] font-bold mb-3 leading-tight text-left relative z-20"
  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.05, color: '#111111' }}
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <span style={{ textTransform: 'none', letterSpacing: '0.01em', display: 'block', fontFamily: "'Playfair Display', serif", fontWeight: 400, marginBottom: '0.1em' }}>A New Paradigm In</span>
  <span
    style={{
      fontFamily: "'Playfair Display', serif",
      fontStyle: 'italic',
      textTransform: 'none',
      display: 'block',
      letterSpacing: '0.01em',
      color: '#111111',
      marginBottom: '0.6em'
    }}
  >
    Fitness & Pain Management
  </span>
</motion.h1>
              <motion.p 
                className="text-2xl md:text-2xl leading-relaxed relative z-20 text-left"
                style={{ fontFamily: "'Adobe Caslon Pro', 'Adobe Caslon', 'Caslon', 'Big Caslon', 'Georgia', serif", fontWeight: 600, color: '#222222', marginBottom: '2.5rem' }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span style={{ letterSpacing: '0.10em' }}>G R A D I E N T</span>
                <span> - A Wellness Experience like </span>
                <span style={{ color: '#b91c1c', fontWeight: 700 }}>Never</span>
                <span> Before!</span>
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-start items-center relative z-20"
                style={{ marginTop: '1.25rem' }}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
              >
                <Link to="/contact" className="gradient-button btn-md">
                 Experience The Gradient Difference
                 
                </Link>
              </motion.div>
            </div>
          </FadeInSection>
        </div>

        {/* Decorative wave at the bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[220px] overflow-hidden" aria-hidden>
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#b91c1c" fillOpacity="0.15" d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,85.3C672,64,768,64,864,85.3C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            <path fill="#b91c1c" fillOpacity="0.08" d="M0,224L60,224C120,224,240,224,360,213.3C480,203,600,181,720,165.3C840,149,960,139,1080,149.3C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" style={{ paddingTop: '6rem' }}>
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
              <h2 className="text-4xl md:text-4xl font-bold gradient-text mb-6" style={{ fontFamily: "'Playfair Display', serif" , fontStyle: 'italic' }}>
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