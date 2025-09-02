import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import ParallaxBackground from '../components/ParallaxBackground';

const Menu = () => {
  const programs = [
    {
      icon: Sparkles,
      title: 'Lifestyle Transformation',
      subtitle: 'Complete Wellness Program',
      description: 'A comprehensive approach to transforming your lifestyle through integrated wellness strategies.',
      features: [
        {
          name: 'Mindset Coaching',
          description: 'Transform limiting beliefs and develop a success-oriented mindset'
        },
        {
          name: 'Nutrition Optimization',
          description: 'Personalized meal plans and nutritional education for lasting results'
        },
        {
          name: 'Recovery & Restoration',
          description: 'Advanced recovery techniques including massage and stress management'
        },
        {
          name: 'Fitness Integration',
          description: 'Sustainable exercise routines that fit seamlessly into your lifestyle'
        }
      ]
    },
    {
      icon: Trophy,
      title: 'Athlete & Performance Training',
      subtitle: 'Elite Performance Program',
      description: 'Advanced training protocols designed for athletes and high-performers seeking peak physical condition.',
      features: [
        {
          name: 'Strength & Conditioning',
          description: 'Scientific approach to building functional strength and power'
        },
        {
          name: 'Recovery Therapies',
          description: 'Advanced recovery modalities including physiotherapy and massage'
        },
        {
          name: 'Performance Tracking',
          description: 'Data-driven monitoring of progress with cutting-edge assessment tools'
        },
        {
          name: 'Sport-Specific Training',
          description: 'Customized programs tailored to your specific sport or performance goals'
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxBackground imageUrl="https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center section-padding">
        <div className="container">
          <FadeInSection>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
              Wellness Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Choose from our carefully crafted wellness programs designed to meet your 
              unique goals and lifestyle. Each program combines multiple disciplines for 
              comprehensive transformation.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <FadeInSection key={index} delay={index * 300}>
                <div className="service-card">
                  <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                        <program.icon size={40} className="text-white" />
                      </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                      {program.title}
                    </h2>
                    <p className="text-xl text-pink-400 font-medium mb-6">
                      {program.subtitle}
                    </p>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-black bg-opacity-40 rounded-xl p-6 border border-pink-500/20">
                        <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <Link to="/services" className="gradient-button">
                      Learn More About Our Services
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Additional Wellness Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your wellness journey with our specialized services 
                designed to complement your core program.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <div className="service-card text-center">
                <h3 className="text-xl font-bold gradient-text mb-4">Nutrition Counseling</h3>
                <p className="text-gray-300 mb-6">
                  One-on-one sessions with our registered dietitians to optimize your nutrition strategy.
                </p>
                <Link to="/contact" className="text-pink-400 hover:text-pink-300 font-medium inline-flex items-center gap-2">
                  Book Session
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="service-card text-center">
                <h3 className="text-xl font-bold gradient-text mb-4">Stress Management</h3>
                <p className="text-gray-300 mb-6">
                  Learn effective techniques to manage stress and improve your mental wellbeing.
                </p>
                <Link to="/contact" className="text-pink-400 hover:text-pink-300 font-medium inline-flex items-center gap-2">
                  Book Session
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="service-card text-center">
                <h3 className="text-xl font-bold gradient-text mb-4">Group Classes</h3>
                <p className="text-gray-300 mb-6">
                  Join our group fitness and wellness classes for motivation and community support.
                </p>
                <Link to="/contact" className="text-pink-400 hover:text-pink-300 font-medium inline-flex items-center gap-2">
                  View Schedule
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Start Your Transformation Today
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Ready to commit to your wellness journey? Contact us to discuss 
                which program is the perfect fit for your goals and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="gradient-button">
                  Schedule Your Consultation
                </Link>
                <Link to="/testimonials" className="gradient-button outline">
                  Read Success Stories
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Menu;