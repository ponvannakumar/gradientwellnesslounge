import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Zap, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
 

const Home = () => {
  const services = [
    {
      icon: Target,
      title: 'Fitness Training',
      description: 'Personalized workout plans designed to help you achieve your fitness goals with expert guidance.',
      link: '/services/personal-training',
    },
    {
      icon: Heart,
      title: 'Wellness Coaching',
      description: 'Holistic approach to mental and physical wellbeing through lifestyle optimization.',
      link: '/services/stress-management',
    },
    {
      icon: Zap,
      title: 'Nutrition Plans',
      description: 'Custom meal plans and nutrition guidance tailored to your dietary needs and goals.',
      link: '/services/nutrition',
    },
    {
      icon: Shield,
      title: 'Physiotherapy',
      description: 'Professional rehabilitation and injury prevention through specialized therapeutic techniques.',
      link: '/services/physiotherapy',
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
      <section className="min-h-screen flex items-center justify-center text-center section-padding">
        <div className="container">
          <FadeInSection>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold gradient-text mb-8 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Journey to Balanced<br />Health Starts Here
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl subtitle mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience comprehensive wellness solutions including fitness training, 
              nutrition coaching, physiotherapy, and stress management in our premium facility.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/services" className="gradient-button">
                Explore Services
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="gradient-button outline">
                Book Consultation
              </Link>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Premium Wellness Services
              </h2>
              <p className="text-xl subtitle max-w-3xl mx-auto">
                Discover our comprehensive range of services designed to transform 
                your health and wellbeing through expert guidance and cutting-edge techniques.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="service-card text-center h-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}>
                      <service.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="gradient-text mb-4">{service.title}</h3>
                  <p className="text-black font-bold leading-relaxed">{service.description}</p>
                  <div className="mt-6">
                    <Link to={service.link} className="text-[#8b0000] hover:text-[#a61b1b] font-medium inline-flex items-center gap-2 transition-colors">
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
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
