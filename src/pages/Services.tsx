import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
 

const Services = () => {
  const services = [
    {
      // icon: Target,
      title: 'ADVANCED PHYSIOTHERAPY',
      imageUrl: '/physio2.jpg',
      link: '/services/advanced-physiotherapy',
      description: 'Lasting solutions for back pain, knee pain, arthritis, frozen shoulder, neck pain, & sports injuries through strength training finding the root cause. Unlike other Physiotherapy centres that rely only on IFT and Ultrasound for temporary relief, we follow a new approach. Where Pain meets Performance.',
      benefits: [
        'Individualized assessment & treatment plans',
        'Manual therapy and soft tissue techniques',
        'Progressive rehabilitation protocols',
        'Pain management strategies',
        'Return-to-sport planning'
      ],
      testimonial: '"The physiotherapy program helped me get back to full training faster than I expected." - A. Kumar'
    },
    {
      // icon: Activity,
      title: 'PERSONALISED TRAINING',
      imageUrl: '/pertrain1.jpg',
      link: '/services/personalised-training',
      description: 'Tailored one-on-one sessions designed to help you achieve your unique fitness goals. Whether its fat loss, muscle gain, or overall health, we create structured programs backed by science ensuring sustainable results, not quick fixes.',
      benefits: [
        'Bespoke workout plans',
        'Regular progress assessments',
        'Technique coaching',
        'Adaptive periodization',
        'Motivation & accountability'
      ],
      testimonial: '"The tailored program changed my performance and consistency." - M. Roberts'
    },
    {
      // icon: Target,
      title: 'SPORTS PERFORMANCE TRAINING',
      imageUrl: '/spotrain.jpg',
      link: '/services/sports-performance-training',
      description: 'Dedicated programs for young athletes, college players, and adult professionals to maximize strength, speed, agility, and endurance. We use physiotherapy-based screening, corrective drills, strength & conditioning, and injury-prevention strategies to build resilient, high-performing athletes.',
      benefits: [
        'Speed & power development',
        'Agility & change-of-direction',
        'Sport-specific strength programs',
        'Recovery & load management',
        'Performance testing'
      ],
      testimonial: '"I hit new personal bests after the sport-specific program." - R. Singh'
    },
    {
      // icon: Heart,
      title: 'SPORTS REHABILITATION',
      imageUrl: '/sporehab.jpg',
      link: '/services/sports-rehabilitation',
      description: 'Rehab and prevention programs for athletes and active individuals recovering from injuries such as ACL, ankle sprains, hamstring strains, rotator cuff & shoulder impingement, shin splints, plantar fasciitis & IT band syndrome Achilles tendinitis hip flexor strains, back pain related to sports.',
      benefits: [
        'Injury-specific rehab plans',
        'Progressive loading strategies',
        'Functional movement restoration',
        'Return-to-play protocols',
        'Integrated clinical and performance input'
      ],
      testimonial: '"Their rehab pipeline helped me return stronger than before." - S. Patel'
    },
    {
      // icon: Utensils,
      title: 'LIFESTYLE & NUTRITION',
      imageUrl: '/nut.jpg',
      link: '/services/lifestyle-nutrition',
      description: 'Personalized nutrition and lifestyle guidance for fat loss, strength building, and long-term health transformations.',
      benefits: [
        'Personalised meal plans',
        'Behaviour change coaching',
        'Metabolic health assessment',
        'Supplement guidance',
        'Long-term habit building'
      ],
      testimonial: '"The nutrition coaching finally made healthy eating sustainable." - L. Gomez'
    },
    {
      // icon: Target,
      title: 'STRENGTH AND CONDITIONING',
      imageUrl: '/strenght.jpg',
      link: '/services/strength-and-conditioning',
      description: 'Science-based training to build strength, endurance, and performance safely — suitable for all ages and fitness levels with one - one personalised training and programs.',
      benefits: [
        'Periodised strength plans',
        'Olympic & powerlifting foundations',
        'Accessory & injury-prevention work',
        'Monitoring & recovery strategies',
        'Performance nutrition alignment'
      ],
      testimonial: '"My strength gains were consistent and sustainable." - J. Park'
    },
    {
      // icon: Heart,
      title: 'GERIATRIC FITNESS TRAINING',
      imageUrl: '/genric1.jpg',
      link: '/services/geriatric-fitness-training',
      description: 'Specialized programs for seniors to improve balance, mobility, bone strength, and independence, while managing age-related conditions like arthritis and osteoporosis.',
      benefits: [
        'Balance & fall-prevention',
        'Functional strength training',
        'Mobility & flexibility routines',
        'Chronic condition support',
        'Lifestyle & independence coaching'
      ],
      testimonial: '"I feel stronger and more independent than before." - G. Fernandes'
    },
    {
      // icon: Utensils,
      title: 'METABOLIC HEALTH TRAINING',
      imageUrl: '/metabolic.jpg',
      link: '/services/metabolic-health-training',
      description: 'A holistic program designed to manage lifestyle conditions such as Diabetes, Thyroid, and PCOD/PCOS. We combine science backed exercise, functional training, nutrition, and lifestyle modifications to restore energy, regulate metabolism, balance hormones, and improve long-term health and reversing.',
      benefits: [
        'Metabolic profiling',
        'Tailored cardio & resistance programs',
        'Nutrition for metabolic health',
        'Lifestyle interventions',
        'Long-term metabolic monitoring'
      ],
      testimonial: '"My energy and metabolic markers improved dramatically." - A. Lee'
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
      <section className="min-h-screen flex items-center justify-center text-center section-padding">
        <div className="container">
          <FadeInSection>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
              Our Premium Services
            </h1>
            <p className="subtitle mb-12 max-w-4xl mx-auto leading-relaxed">
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
                <div className="service-card h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden bg-white" style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}>
                      {service.imageUrl ? (
                        <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                      ) : (
                        // <service.icon size={32} className="text-white" />
                        <div className="w-8 h-8 rounded-full bg-red-700" />
                      )}
                    </div>
                    <h2 className="services-title gradient-text">{service.title}</h2>
                  </div>
                  <p className="services-desc mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="key-benefits mb-4">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3 text-gray-300 services-benefit">
                          <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-[#8b0000]/10 to-[#111111]/10 rounded-lg p-6 border border-[#8b0000]/20">
                    <p className="text-gray-700 italic mb-2">"{service.testimonial.split('" - ')[0]}"</p>
                    <p className="font-medium" style={{ color: '#8b0000' }}>- {service.testimonial.split('" - ')[1]}</p>
                  </div>

                  <div className="mt-8">
                    <Link to={service.link} className="gradient-button w-full flex items-center justify-center gap-2">
                      Learn More About {service.title}
                      <ArrowRight size={20} />
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
                Ready to Start Your Wellness Journey?
              </h2>
              <p className="subtitle mb-12 max-w-2xl mx-auto">
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