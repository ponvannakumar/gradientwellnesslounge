import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Book, Sparkles, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import ParallaxBackground from '../components/ParallaxBackground';

const Experts = () => {
  const programs = [
    {
      icon: Book,
      title: 'EDUCATION',
      subtitle: 'Complete Wellness Program',
      description: 'A comprehensive approach to transforming your lifestyle through integrated wellness strategies.',
      features: [
        {
          name: 'Master’s in Sports Management',
          description: 'Comprehensive academic foundation in sports administration and performance optimization.'
        },
        {
          name: 'Advanced Internship in Strength & Conditioning, Pain Management, and Nutrition',
          description: 'Personalized meal plans and nutritional education for lasting results'
        },
        {
          name: 'Australian Strength & Conditioning Level 1 Certification',
          description: 'Accredited training in modern strength and conditioning principles.'
        },
        {
          name: 'D-License in Football Coaching',
          description: 'Professional coaching certification emphasizing tactical, technical, and physical development'
        }
      ]
    },
    {
      icon: Trophy,
      title: 'ACHEIVEMENTS',
      subtitle: 'Elite Performance Program',
      description: 'Advanced training protocols designed for athletes and high-performers seeking peak physical condition.',
      features: [
        {
          name: 'Weightlifting',
          description: 'Silver medalist at Junior Nationals; Bronze medalist at Interuniversity Championships.'
        },
        {
          name: 'Asian Master’s Athletic Championships',
          description: 'Silver medalist in 400m (55.16s); Bronze medalist in 200m (23.88s)'
        },
        // {
        //   name: 'Performance Tracking',
        //   description: 'Data-driven monitoring of progress with cutting-edge assessment tools'
        // },
        // {
        //   name: 'Sport-Specific Training',
        //   description: 'Customized programs tailored to your specific sport or performance goals'
        // }
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
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center section-padding p-0 m-0 overflow-hidden">
        <div className="container p-0 m-0 w-full h-full">
          <FadeInSection>
            <img
              src="/guru.png"
              alt="Guru"
              className="w-[200%] h-[170%] object-cover -translate-x-1 -translate-y-10"
              style={{ minHeight: '800px' }}
            />
          </FadeInSection>
        </div>
      </section>

      {/* About Guru Parallax Section */}
    {/* Image side - Centered and Easily Customizable */}
                    <div className="w-full flex justify-center items-center py-8">
                  <motion.div
                    className="relative rounded-lg overflow-hidden group"
                    style={{ width: '170%', maxWidth: '1200px', maxHeight: '1200px', perspective: '1200px' }}
                    // whileHover={{
                  
                    //   scale: 1.02,
                    //   transition: { duration: 0.4 }
                    // }}
                  >
                      <motion.img
                        src="/aboutguru.png"
                        alt="Gradient Holistic Wellness Lounge"
                        className="w-full h-auto object-contain bg-white"
                        style={{ backgroundColor: '#fff' }}
                        // initial={{ scale: 1.05, rotate: -1 }}
                        // animate={{
                        //   scale: [1.05, 1.08, 1.05],
                        //   rotate: [-1, 1, -1],
                        //   boxShadow: [
                        //     '0 25px 60px rgba(220, 38, 38, 0.18)',
                        //     '0 35px 80px rgba(220, 38, 38, 0.22)',
                        //     '0 25px 60px rgba(220, 38, 38, 0.18)'
                        //   ]
                        // }}
                        // transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </motion.div>
                  </div>
          

      {/* Programs Section */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <FadeInSection key={index} delay={index * 300}>
                <div className="service-card">
                  <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}>
                        <program.icon size={40} className="text-white" />
                      </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                      {program.title}
                    </h2>
                    <p className="text-xl font-medium mb-6" style={{ color: '#8b0000' }}>
                      {program.subtitle}
                    </p>
                    <p className="subtitle max-w-3xl mx-auto leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-gradient-to-r from-[#8b0000]/10 to-[#111111]/10 rounded-xl p-6 border border-[#8b0000]/20">
                        <h3 className="text-xl font-bold text-white mb-3">{feature.name}</h3>
                        <p className="subtitle leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <Link to="/services" className="gradient-button">
                      EDUCATION
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
                ACHEVIEMENTS
              </h2>
              <p className="subtitle max-w-3xl mx-auto">
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
              <p className="subtitle mb-12 max-w-2xl mx-auto">
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

export default Experts;
