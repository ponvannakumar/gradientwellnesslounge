import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../../components/FadeInSection';
import ParallaxBackground from '../../components/ParallaxBackground';

const Physiotherapy = () => {
  const therapyServices = [
    {
      title: 'Injury Rehabilitation',
      description: 'Comprehensive recovery programs for sports injuries, workplace injuries, and post-surgical rehabilitation.',
      benefits: ['Evidence-based treatment protocols', 'Progressive exercise therapy', 'Manual therapy techniques', 'Return-to-activity planning']
    },
    {
      title: 'Pain Management',
      description: 'Advanced techniques to reduce chronic pain and improve quality of life through targeted interventions.',
      benefits: ['Chronic pain assessment', 'Therapeutic modalities', 'Movement re-education', 'Pain coping strategies']
    },
    {
      title: 'Movement Restoration',
      description: 'Restore optimal movement patterns and functional capacity through specialized therapeutic exercises.',
      benefits: ['Biomechanical analysis', 'Movement pattern correction', 'Functional exercise prescription', 'Performance optimization']
    },
    {
      title: 'Preventive Care',
      description: 'Proactive approach to prevent injuries and maintain optimal physical health through education and exercise.',
      benefits: ['Injury risk assessment', 'Preventive exercise programs', 'Ergonomic education', 'Lifestyle modification guidance']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxBackground imageUrl="https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg" />
      
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
                <Heart size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
              Physiotherapy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Professional rehabilitation services for injury recovery, pain management, 
              and movement optimization. Our licensed physiotherapists use evidence-based 
              treatments to restore your optimal function.
            </p>
            <Link to="/contact" className="gradient-button">
              Book Physiotherapy Session
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Therapy Services */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Comprehensive Physiotherapy Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our licensed physiotherapists provide specialized care using the latest 
                evidence-based techniques and state-of-the-art equipment.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-16">
            {therapyServices.map((service, index) => (
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
                      <Heart size={120} className="text-[#b91c1c] opacity-50" />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
                Our Treatment Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">1. Assessment</h3>
                  <p className="text-gray-300">Comprehensive evaluation of your condition and movement patterns</p>
                </div>
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">2. Diagnosis</h3>
                  <p className="text-gray-300">Identify the root cause of your pain or dysfunction</p>
                </div>
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">3. Treatment</h3>
                  <p className="text-gray-300">Personalized treatment plan with hands-on therapy</p>
                </div>
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">4. Recovery</h3>
                  <p className="text-gray-300">Progressive rehabilitation and prevention strategies</p>
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
                Ready to Start Your Recovery?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Don't let pain or injury hold you back. Our expert physiotherapists 
                are here to help you recover and prevent future problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="gradient-button">
                  Schedule Consultation
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

export default Physiotherapy;