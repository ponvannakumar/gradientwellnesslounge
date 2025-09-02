import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../../components/FadeInSection';
import ParallaxBackground from '../../components/ParallaxBackground';

const PersonalTraining = () => {
  const trainingPrograms = [
    {
      title: 'Strength Training',
      description: 'Build lean muscle mass and increase functional strength with progressive resistance training protocols.',
      benefits: ['Progressive overload programming', 'Compound movement focus', 'Injury prevention techniques', 'Strength tracking and progression']
    },
    {
      title: 'Functional Fitness',
      description: 'Improve your ability to perform daily activities with exercises that mimic real-world movements.',
      benefits: ['Movement pattern training', 'Core stability development', 'Balance and coordination', 'Mobility enhancement']
    },
    {
      title: 'Weight Loss Training',
      description: 'Efficient fat-burning workouts combining strength training and metabolic conditioning.',
      benefits: ['High-intensity interval training', 'Metabolic circuit training', 'Body composition improvement', 'Sustainable lifestyle habits']
    },
    {
      title: 'Athletic Performance',
      description: 'Sport-specific training to enhance athletic performance and competitive edge.',
      benefits: ['Sport-specific movements', 'Power and agility training', 'Performance testing', 'Competition preparation']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxBackground imageUrl="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" />
      
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
                <Activity size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
              Personal Training
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience one-on-one training with our certified personal trainers. 
              Get customized workouts, proper form coaching, and the motivation 
              you need to achieve your fitness goals.
            </p>
            <Link to="/contact" className="gradient-button">
              Start Training Today
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Personalized Training Programs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our certified trainers create customized workout programs tailored 
                to your specific goals, fitness level, and preferences.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-16">
            {trainingPrograms.map((program, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="service-card">
                      <h3 className="text-3xl font-bold gradient-text mb-6">{program.title}</h3>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="space-y-3">
                        {program.benefits.map((benefit, benefitIndex) => (
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
                      <Activity size={120} className="text-[#b91c1c] opacity-50" />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
                Our Training Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Assessment</h3>
                  <p className="text-gray-300">Comprehensive evaluation of your current fitness level and goals</p>
                </div>
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Customization</h3>
                  <p className="text-gray-300">Personalized workout plans designed specifically for you</p>
                </div>
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Progression</h3>
                  <p className="text-gray-300">Continuous monitoring and adjustment of your program</p>
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
                Ready to Transform Your Fitness?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Start your personal training journey with our expert trainers and 
                achieve results you never thought possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="gradient-button">
                  Book Training Session
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

export default PersonalTraining;