import React from 'react';
import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';
 

const Services = () => {
  const services = [
    {
      title: 'ADVANCED PHYSIOTHERAPY',
      imageUrl: '/physio.jpg',
      description: 'Lasting solutions for back pain, knee pain, arthritis, frozen shoulder, neck pain, & sports injuries through strength training finding the root cause. Unlike other Physiotherapy centres that rely only on IFT and Ultrasound for temporary relief, we follow a new approach. Where Pain meets Performance.',
      benefits: [
        'Diagnose and treat the root cause of pain.',
        'Restore joint function and body mechanics.',
        'Personalized rehab programs for faster recovery.',
        'Advanced techniques for lasting pain relief beyond machines.',
        'Safe return to daily living functional activities .'
      ],
      // testimonial: '"The physiotherapy program helped me get back to full training faster than I expected." - A. Kumar'
    },
    {
      title: 'PERSONALISED TRAINING',
      imageUrl: '/pertrain.jpg',
      description: 'Tailored one-on-one sessions designed to help you achieve your unique fitness goals. Whether its fat loss, muscle gain, or overall health, we create structured programs backed by science ensuring sustainable results, not quick fixes.',
      benefits: [
        'Tailored fitness plans for your body and goals.',
        'Extensive Movement screening to optimize performance.',
        'Monitoring results to keep you on track.',
        'Evidence-based methods for measurable improvements.'
      ],
      // testimonial: '"The tailored program changed my performance and consistency." - M. Roberts'
    },
    {
      title: 'SPORTS PERFORMANCE TRAINING',
      imageUrl: '/spotrain.jpg',
      description: 'Dedicated programs for young athletes, college players, and adult professionals to maximize strength, speed, agility, and endurance. We use physiotherapy-based screening, corrective drills, strength & conditioning, and injury-prevention strategies to build resilient, high-performing athletes.',
      benefits: [
        'Scientific periodisation.',
        'Sport-specific drills for peak athletic skill',
        'Intelligent load management to prevent injuries.',
        'Conditioning programs that are sport specific.',
        'Data-driven tracking to monitor gains.'
      ],
      // testimonial: '"I hit new personal bests after the sport-specific program." - R. Singh'
    },
    {
      title: 'SPORTS REHABILITATION',
      imageUrl: '/sporehab.jpg',
      description: 'Rehab and prevention programs for athletes and active individuals recovering from injuries such as ACL, ankle sprains, hamstring strains, rotator cuff & shoulder impingement, shin splints, plantar fasciitis & IT band syndrome Achilles tendinitis hip flexor strains, back pain related to sports.',
      benefits: [
        'Structured recovery from injury to top performance.',
        'Correct biomechanical imbalances for efficiency.',
        'Targeted exercises to rebuild functional capacity.',
        'Prevent recurrence with expert guidance.',
        'Return to sport with confidence.'
      ],
      // testimonial: '"Their rehab pipeline helped me return stronger than before." - S. Patel'
    },
    {
      title: 'LIFESTYLE & NUTRITION',
      imageUrl: '/nut.jpg',
      description: 'Personalized nutrition and lifestyle guidance for fat loss, strength building, and long-term health transformations.',
      benefits: [
        'Personalized meal plans.',
        'Sustainable fat loss and lean mass strategies.',
        'Practical habits for daily wellness and metabolic health.',
        'Continuous tracking for long-term results.'
      ],
    //   testimonial: '"The nutrition coaching finally made healthy eating sustainable." - L. Gomez'
    },
    {
      title: 'STRENGTH AND CONDITIONING',
      imageUrl: '/strenght.jpg',
      description: 'Science-based training to build strength, endurance, and performance safely — suitable for all ages and fitness levels with one - one personalised training and programs.',
      benefits: [
        'Periodised strength plans',
        'Olympic & powerlifting foundations',
        'Accessory & injury-prevention work',
        'Monitoring & recovery strategies',
        'Performance nutrition alignment'
      ],
      // testimonial: '"My strength gains were consistent and sustainable." - J. Park'
    },
    {
      title: 'GERIATRIC FITNESS TRAINING',
      imageUrl: '/genric.jpg',
      description: 'Specialized programs for seniors to improve balance, mobility, bone strength, and independence, while managing age-related conditions like arthritis and osteoporosis.',
      benefits: [
        'Balance & fall-prevention',
        'Functional strength training',
        'Mobility & flexibility routines',
        'Chronic condition support',
        'Lifestyle & independence coaching'
      ],
      // testimonial: '"I feel stronger and more independent than before." - G. Fernandes'
    },
    {
      title: 'METABOLIC HEALTH TRAINING',
      imageUrl: '/metabolic.jpg',
      description: 'A holistic program designed to manage lifestyle conditions such as Diabetes, Thyroid, and PCOD/PCOS. We combine science backed exercise, functional training, nutrition, and lifestyle modifications to restore energy, regulate metabolism, balance hormones, and improve long-term health and reversing.',
      benefits: [
        'Metabolic profiling',
        'Tailored cardio & resistance programs',
        'Nutrition for metabolic health',
        'Lifestyle interventions',
        'Long-term metabolic monitoring'
      ],
      // testimonial: '"My energy and metabolic markers improved dramatically." - A. Lee'
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
                  <div className="flex flex-col items-center gap-4 mb-6 text-center md:flex-row md:items-center md:text-left">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden bg-white md:w-16 md:h-16" style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}>
                      {service.imageUrl ? (
                        <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                      ) : (
                        // <service.icon size={32} className="text-white" />
                        <div className="w-8 h-8 rounded-full bg-red-700" />
                      )}
                    </div>
                    <h2 className="services-title gradient-text text-center md:text-left w-full md:w-auto">{service.title}</h2>
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

                  {/* <div className="bg-gradient-to-r from-[#8b0000]/10 to-[#111111]/10 rounded-lg p-6 border border-[#8b0000]/20">
                    <p className="text-gray-700 italic mb-2">"{service.testimonial.split('" - ')[0]}"</p>
                    <p className="font-medium" style={{ color: '#8b0000' }}>- {service.testimonial.split('" - ')[1]}</p>
                  </div> */}
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
            </div>
          </FadeInSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
