import React from 'react';
import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';
import './Services.css';
 

const Services = () => {
  const heroTypography: { [key: string]: React.CSSProperties } = {
    title: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      color: '#ffffff',
    },
    description: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      fontSize: '1.6rem',
      color: '#060707ff',
    },
  };

  const services = [
    {
      title: 'INTEGRATED PHYSIOTHERAPY',
      imageUrl: '/physio.jpg',
      description: 'Lasting solutions for back pain, knee pain, arthritis, frozen shoulder, neck pain, & sports injuries through strength training finding the root cause. Unlike other Physiotherapy centres that rely only on IFT and Ultrasound for temporary relief, we follow a new approach. Where Pain meets Performance.',
      benefits: [
        'Diagnose and treat the root cause of pain.',
        'Restore joint function and body mechanics.',
        'Personalized rehab programs for faster recovery.',
        'Advanced techniques for lasting pain relief beyond machines.',
        'Safe return to daily living functional activities .'
      ],
      testimonial: '"I have recovered from back pain, a major milestone, thanks to consistent exercise and rehab - a gradual but worthwhile journey."',
      name: 'SRUTHI',
      avatarUrl: '/sruthi.jpg'
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
      testimonial: '"At Gradient, I had full 1-on-1 sessions with guidance on every exercise and a program customized to me—something I never experienced at my previous gym. Now, I’m noticeably stronger, and the results feel lasting."',
      name: 'VENKAT',
      avatarUrl: '/venkat.jpg'
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
      testimonial: '"As a sprinter, my performance was lagging ,i couldn’t reach my goal. After training under coach Guru, there was notable elevation in my performance and timing, he also guided me with proper recovery methodologies.."',
      name: 'YOHITH',
      avatarUrl: '/yohith.jpg'
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
      testimonial: '" After my ACL reconstruction, getting back to the court felt like a distant dream That changed completely when I started training under Guru. I was able to return to playing badminton within just 6-7 months, completely pain-free."',
      name: 'HARISH',
      avatarUrl: '/harish.jpg'
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
      testimonial: '"After following Guru’s nutrition and training plan at Gradient, my liver function and bilirubin levels completely normalized. I’ve regained my energy and vitality — something medicines couldn’t achieve. Truly grateful to Guru and Gradient for this life-changing transformation."',
      name: 'KAROL',
      avatarUrl: '/karol.jpg'
    },
    {
      title: 'STRENGTH AND CONDITIONING',
      imageUrl: '/strenght.jpg',
      description: 'Elevating performance with precision-tailored Strength & Conditioning, designed to build resilient strength, flawless movement, and lasting results. Every session combines science-backed training with expert guidance.',
      benefits: [
        'Builds functional foundation.',
        'Enhanced overall fitness.',
        'Biomechanical optimization.',
        'Recovery and Adaptation strategies.',
        
      ],
      testimonial: '"I joined Gradient’s Strength and Conditioning program to build overall strength and endurance. Within a few weeks, I started lifting heavier, feeling more stable, and performing daily activities with ease without getting injured. It’s been a powerful transformation"',
      name: 'SELVI',
      avatarUrl: '/selvi.jpg'
    },
    {
      title: 'GERIATRIC FITNESS TRAINING',
      imageUrl: '/genric.jpg',
      description: 'specialized, evidence-based approach designed to-recover from age-related muscle loss, osteoporosis, or joint stiffness. Older adults aiming to improve balance, posture, and fall resistance through structured programs.',
      benefits: [
        'Enhanced muscle strength & functional independance',
        'Combats sarcopenia',
        'Improved bone density & joint health',
        'Better balance & stability',
        'Long term vitality and quality of life'
      ],
      testimonial: '"’m 78 years old and once struggled with severe knee pain that made it difficult to walk on my own. After taking consistent sessions at Gradient, I can now walk independently, completely pain-free, and with renewed confidence."',
      name: 'JAYA',
      avatarUrl: '/jaya.jpg'
    },
    {
      title: 'METABOLIC HEALTH TRAINING',
      imageUrl: '/metabolic.jpg',
      description: 'scientifically structured program targeting metabolic dysfunction and hormonal imbalances, designed to restore energy, optimize body composition, and improve long-term health. Unlike generic fitness programs, it addresses underlying conditions like diabetes, thyroid disorders, and PCOD while enhancing metabolism, hormonal balance, and functional vitality.',
      benefits: [
        'Reduces insulin resistance & balance hormones',
        'Improves insulin sensitivity & stabilizes glucose levels',
        'Supports metabolic regulation & energy levels',
        'Stress & Cortisol management',
        
      ],
      testimonial: '"I am 19 yrs old and I’ve been attending the gradient holistic online wellness classes, and I’m truly grateful for the guidance and support I’ve received. Over time, I’ve seen a huge improvement in my health—my PCOD parameters have reduced significantly, which has been such a positive change for me.."',
      name: 'KEERTHANA',
      avatarUrl: '/keethu.jpg'
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
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8" style={heroTypography.title}>
              THE GRADIENT SERVICES
            </h1>
            <p className="subtitle mb-12 max-w-4xl mx-auto leading-relaxed" style={heroTypography.description}>
              Every service in gradient is curated to eliminate guesswork and deliver integrated performance, bespoke results and vitality.
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

                  {/* Desktop Testimonial Card */}
                  <div className="hidden md:flex bg-white bg-opacity-5 rounded-lg p-6 items-start space-x-4 border-4 border-maroon-500">
                    <div className="flex-shrink-0">
                      <img className="w-20 h-20 rounded-full border-2 border-red-700" src={service.avatarUrl} alt="Avatar" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <div className="bg-red-700 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center">
                          {service.name}
                        </div>
												<span className="md:flex hidden text-yellow-400 ml-2">
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                            <span className="text-2xl">★</span>
                          </span>
                      </div>
                      <p className="text-gray-300 italic">
                        {service.testimonial}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Testimonial Card */}
                  <div className="testimonial-card md:hidden bg-white bg-opacity-5 rounded-lg p-6 border-4 border-maroon-500">
                    <div className="flex justify-center">
                      <img className="w-20 h-20 rounded-full border-2 border-red-700" src={service.avatarUrl} alt="Avatar" />
                    </div>
                    <div className="text-center text-red text-sm font-bold">
                      {service.name}
                    </div>
                    <div className="flex justify-center text-yellow-400 my-4 md:hidden">
                      <span className="text-2xl">★</span>
                      <span className="text-2xl">★</span>
                      <span className="text-2xl">★</span>
                      <span className="text-2xl">★</span>
                      <span className="text-2xl">★</span>
                    </div>
                    <p className="text-gray-300 italic text-center mb-4">
                      {service.testimonial}
                    </p>
                   
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
              <h2 className="text-2xl md:text-5xl font-bold gradient-text mb-6" style={{ fontFamily: "'Playfair Display', serif" , fontStyle: 'italic'}}>
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
