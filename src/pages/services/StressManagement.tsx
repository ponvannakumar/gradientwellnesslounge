import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../../components/FadeInSection';
import ParallaxBackground from '../../components/ParallaxBackground';

const StressManagement = () => {
  const stressServices = [
    {
      title: 'Mindfulness Training',
      description: 'Learn evidence-based mindfulness techniques to reduce stress and improve mental clarity.',
      benefits: ['Meditation instruction', 'Breathing techniques', 'Present moment awareness', 'Stress reduction strategies']
    },
    {
      title: 'Stress Assessment',
      description: 'Comprehensive evaluation of your stress levels and identification of key stressors in your life.',
      benefits: ['Stress level measurement', 'Trigger identification', 'Coping mechanism assessment', 'Personalized stress profile']
    },
    {
      title: 'Relaxation Therapy',
      description: 'Various relaxation techniques including progressive muscle relaxation and guided imagery.',
      benefits: ['Progressive muscle relaxation', 'Guided imagery sessions', 'Deep breathing exercises', 'Tension release techniques']
    },
    {
      title: 'Work-Life Balance Coaching',
      description: 'Strategies to create healthy boundaries and achieve better balance between work and personal life.',
      benefits: ['Time management skills', 'Boundary setting techniques', 'Priority management', 'Lifestyle optimization']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxBackground imageUrl="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg" />
      
      {/* Back Button */}
      <div className="fixed top-24 left-8 z-50">
        <Link to="/services" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
          <ArrowLeft size={20} />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center section-padding">
        <div className="container">
          <FadeInSection>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#b91c1c] via-[#8a1111] to-[#111111] flex items-center justify-center">
                <Brain size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
              Stress Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Master the art of stress management through proven techniques and personalized 
              coaching. Learn to transform stress into strength and achieve lasting mental wellness.
            </p>
            <Link to="/contact" className="gradient-button">
              Start Stress Management Program
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Stress Management Services */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Comprehensive Stress Management Program
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our certified wellness coaches provide evidence-based stress management 
                techniques to help you achieve mental clarity and emotional balance.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-16">
            {stressServices.map((service, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="service-card">
                      <h3 className="text-3xl font-bold gradient-text mb-6">{service.title}</h3>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-3">
                            <CheckCircle size={20} className="text-[#b91c1c] flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#b91c1c]/20 via-[#8a1111]/20 to-[#111111]/20 flex items-center justify-center border border-[#b91c1c]/20">
                      <Brain size={120} className="text-[#b91c1c] opacity-50" />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
                Program Benefits
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Reduced Anxiety</h3>
                  <p className="text-gray-300">Learn techniques to manage anxiety and worry effectively</p>
                </div>
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Better Sleep</h3>
                  <p className="text-gray-300">Improve sleep quality through stress reduction techniques</p>
                </div>
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Enhanced Focus</h3>
                  <p className="text-gray-300">Develop mental clarity and improved concentration</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Ready to Master Your Stress?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Take control of your stress and transform your mental wellness with 
                our comprehensive stress management program.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="gradient-button">
                  Start Your Journey
                </Link>
                <Link to="/services" className="gradient-button outline">
                  View All Services
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </motion.div>
  );
};

export default StressManagement;