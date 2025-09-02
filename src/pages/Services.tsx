import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Utensils, Activity, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import ParallaxBackground from '../components/ParallaxBackground';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Fitness Assessment',
      link: '/services/fitness-assessment',
      description: 'Comprehensive evaluation of your current fitness level, body composition, and movement patterns.',
      benefits: [
        'Body composition analysis',
        'Movement screening',
        'Cardiovascular assessment',
        'Strength and flexibility testing',
        'Personalized recommendations'
      ],
      testimonial: '"The assessment gave me clear insights into my fitness level and areas for improvement." - Jessica M.'
    },
    {
      icon: Activity,
      title: 'Personal Training',
      link: '/services/personal-training',
      description: 'One-on-one training sessions with certified personal trainers tailored to your specific goals.',
      benefits: [
        'Customized workout programs',
        'Proper form and technique coaching',
        'Progress tracking and adjustments',
        'Motivational support',
        'Injury prevention strategies'
      ],
      testimonial: '"My trainer helped me achieve results I never thought possible." - Michael R.'
    },
    {
      icon: Heart,
      title: 'Physiotherapy',
      link: '/services/physiotherapy',
      description: 'Professional rehabilitation services for injury recovery and prevention.',
      benefits: [
        'Injury rehabilitation',
        'Pain management techniques',
        'Movement restoration',
        'Postural correction',
        'Preventive care education'
      ],
      testimonial: '"The physiotherapy sessions completely resolved my back pain issues." - Sarah L.'
    },
    {
      icon: Utensils,
      title: 'Nutrition & Diet',
      link: '/services/nutrition',
      description: 'Personalized nutrition plans and dietary guidance for optimal health and performance.',
      benefits: [
        'Custom meal planning',
        'Nutritional counseling',
        'Supplement recommendations',
        'Dietary habit coaching',
        'Progress monitoring'
      ],
      testimonial: '"The nutrition plan transformed my energy levels and overall health." - David K.'
    },
    {
      icon: Brain,
      title: 'Stress Management',
      link: '/services/stress-management',
      description: 'Comprehensive stress reduction techniques and mindfulness coaching.',
      benefits: [
        'Stress assessment and analysis',
        'Mindfulness meditation training',
        'Breathing techniques',
        'Work-life balance strategies',
        'Relaxation therapy'
      ],
      testimonial: '"I learned invaluable techniques to manage my daily stress effectively." - Emma T.'
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
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center section-padding">
        <div className="container">
          <FadeInSection>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
              Our Premium Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of wellness services designed to transform 
              your health through expert guidance and personalized care.
            </p>
            <Link to="/contact" className="gradient-button">
              Book Your Consultation
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="service-card h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                          <service.icon size={32} className="text-white" />
                        </div>
                        <h2 className="text-3xl font-bold gradient-text">{service.title}</h2>
                      </div>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Key Benefits:</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-3 text-gray-300">
                              <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-black bg-opacity-30 rounded-lg p-6">
                        <p className="text-gray-300 italic mb-2">"{service.testimonial.split('" - ')[0]}"</p>
                        <p className="text-pink-400 font-medium">- {service.testimonial.split('" - ')[1]}</p>
                      </div>
                      
                      <div className="mt-8">
                        <Link to={service.link} className="gradient-button w-full flex items-center justify-center gap-2">
                          Learn More About {service.title}
                          <ArrowRight size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center border border-pink-500/20">
                      <service.icon size={120} className="text-pink-400 opacity-50" />
                    </div>
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
                Ready to Start Your Wellness Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Book a consultation today and let our expert team create a 
                personalized wellness plan tailored to your unique goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="gradient-button">
                  Schedule Consultation
                </Link>
                <Link to="/about" className="gradient-button outline">
                  Meet Our Team
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;