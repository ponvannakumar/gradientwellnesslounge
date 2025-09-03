import React from 'react';
import { motion } from 'framer-motion';
import { Target, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../../components/FadeInSection';
import ParallaxBackground from '../../components/ParallaxBackground';

const FitnessAssessment = () => {
  const assessmentComponents = [
    {
      title: 'Body Composition Analysis',
      description: 'Advanced DEXA scan technology to measure body fat percentage, muscle mass, and bone density with medical-grade precision.',
      benefits: ['Accurate body fat measurement', 'Muscle mass distribution', 'Bone density assessment', 'Visceral fat analysis']
    },
    {
      title: 'Movement Screening',
      description: 'Comprehensive evaluation of your movement patterns to identify imbalances and potential injury risks.',
      benefits: ['Posture analysis', 'Joint mobility testing', 'Muscle imbalance detection', 'Movement quality assessment']
    },
    {
      title: 'Cardiovascular Assessment',
      description: 'Complete evaluation of your heart health and aerobic capacity using state-of-the-art monitoring equipment.',
      benefits: ['VO2 max testing', 'Heart rate variability', 'Blood pressure monitoring', 'Recovery rate analysis']
    },
    {
      title: 'Strength & Flexibility Testing',
      description: 'Detailed assessment of your current strength levels and flexibility across all major muscle groups.',
      benefits: ['Baseline strength measurements', 'Flexibility range testing', 'Core stability evaluation', 'Functional movement assessment']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxBackground imageUrl="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg" />
      
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
                <Target size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
              Fitness Assessment
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get a comprehensive evaluation of your current fitness level with our advanced 
              assessment protocols. Our detailed analysis provides the foundation for your 
              personalized wellness journey.
            </p>
            <Link to="/contact" className="gradient-button">
              Book Your Assessment
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Assessment Components */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Comprehensive Assessment Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our fitness assessment combines cutting-edge technology with expert analysis 
                to provide you with detailed insights into your current health status.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assessmentComponents.map((component, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="service-card">
                  <h3 className="text-3xl font-bold gradient-text mb-6">{component.title}</h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {component.description}
                  </p>
                  <div className="space-y-3">
                    {component.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-[#b91c1c] flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
                What to Expect
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Duration</h3>
                  <p className="text-gray-300">90-120 minutes comprehensive evaluation</p>
                </div>
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Results</h3>
                  <p className="text-gray-300">Detailed report with personalized recommendations</p>
                </div>
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Follow-up</h3>
                  <p className="text-gray-300">Consultation to discuss findings and next steps</p>
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
                Ready to Discover Your Baseline?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Take the first step towards your wellness transformation with our 
                comprehensive fitness assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="gradient-button">
                  Schedule Assessment
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

export default FitnessAssessment;