import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Book, Sparkles, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import ParallaxBackground from '../components/ParallaxBackground';
import FeedbackCarousel from '../components/FeedbackCarousel';

const Experts = () => {
  const programs = [
    {
      icon: Book,
      title: 'EDUCATION',
      // subtitle: 'Complete Wellness Program',
      // description: 'A comprehensive approach to transforming your lifestyle through integrated wellness strategies.',
      features: [
        {
          name: 'Master’s in Sports Management',
          description: 'Comprehensive academic foundation in sports administration and performance optimization.'
        },
        {
          name: 'Advanced Internship in Strength & Conditioning, Pain Management, and Nutrition',
          description: '11-month immersive program under the mentorship of the Indian Cricket Team and RCB’s Fitness Coach, applying cutting-edge techniques in elite athlete performance.'
        },
        {
          name: 'Australian Strength & Conditioning Level 1 Certification',
          description: 'Accredited training in modern strength and conditioning principles.'
        },
        {
          name: 'D-License in Football Coaching',
          description: 'Professional coaching certification emphasizing tactical, technical, and physical development'
        }
      ]
    },
    {
      icon: Trophy,
      title: 'ACHEIVEMENTS',
      // subtitle: 'Elite Performance Program',
      // description: 'Advanced training protocols designed for athletes and high-performers seeking peak physical condition.',
      features: [
        {
          name: 'Weightlifting',
          description: 'Silver medalist at Junior Nationals; Bronze medalist at Interuniversity Championships.'
        },
        {
          name: 'Asian Master’s Athletic Championships',
          description: 'Silver medalist in 400m (55.16s); Bronze medalist in 200m (23.88s)'
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

  const current = { name: 'Guru' };

  const feedbackSeed: Record<string, { name: string; description: string; rating: number; program: string; image?: string }[]> = {
    Guru: [
      {
        name: 'Alex Johnson',
        description: 'Working with Guru transformed my athletic performance completely. His expertise in strength and conditioning helped me achieve personal bests in both weightlifting and sprinting. The personalized training plan was exactly what I needed.',
        rating: 5,
        program: 'Elite Performance Training',
        image: '/public/aboutgrad.png'
      },
      {
        name: 'Sarah Chen',
        description: 'Guru\'s coaching methodology is revolutionary. He combines scientific precision with practical application. After months of training under his guidance, I not only improved my physical capabilities but also developed a deeper understanding of athletic performance.',
        rating: 5,
        program: 'Sports Performance Program',
        image: '/public/aboutguru.png'
      },
      {
        name: 'Michael Rodriguez',
        description: 'The mentorship I received from Guru was invaluable. His experience with elite athletes and his evidence-based approach to training helped me overcome chronic injuries and return to peak performance. Highly recommended.',
        rating: 5,
        program: 'Injury Recovery & Performance',
        image: '/public/grad.png'
      },
      {
        name: 'Sam Patel',
        description: 'I improved my strength and mobility quickly under Guru\'s coaching. He tailored exercises that worked around my old injuries and kept me motivated throughout.',
        rating: 5,
        program: 'Rehab & Strength',
        image: '/public/logo1.png'
      }
    ]
  };

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
      {/* About Section */}
      <section className="py-20" style={{ backgroundColor: '#f6e5cf' }}>
        <div className="container mx-auto px-4">
          <h2 
            className="text-left mb-11" 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 750, 
              fontSize: '2.5rem', 
              letterSpacing: '0.3em', 
              color: '#b91c1c',
              textTransform: 'uppercase'
            }}
          >
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            <ul 
              className="list-disc pl-5 space-y-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 900,
                fontSize: '1.45rem',
                lineHeight: '1.6',
                color: '#131212ff'
              }}
            >
              <li>Guru epitomizes the convergence of elite athleticism, transformative coaching, and strategic leadership.</li>
              <li>From his early mastery of weightlifting to his role in Business leadership managing over 100+ trainers in various region, he has consistently shaped performance excellence at every level.</li>
              <li>His pursuit of athletic distinction led him to excel in the rare combination of 200m and 400m sprints, while also coaching football individuals and teams to reach peak potential.</li>
            </ul>
            <ul 
              className="list-disc pl-5 space-y-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 800,
                fontSize: '1.38rem',
                lineHeight: '1.6',
                color: '#131111ff'
              }}
            >
              <li>Over the past decade, Guru has pioneered evidence-based methodologies that restore athletes from injury, elevate performance, and ensure long-term athletic development and excellence.</li>
              <li>Combining precision strength training, advanced pain management, and scientifically curated nutrition, he empowers individuals to transcend limitations, reclaim energy, and unlock their ultimate potential—fusing the discipline of an athlete, the insight of a coach, and the vision of a strategist.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Guru Parallax Section */}
    {/* Image side - Centered and Easily Customizable */}
                    {/* <div className="w-full flex justify-center items-center py-8">
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
                  </div> */}
          

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
                    <h2
                      className="expert-title text-2xl md:text-3xl font-bold mb-4"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 700,
                        fontSize: '1.8rem',
                        letterSpacing: '0.02em',
                        color: '#7f0f0f'
                      }}
                    >
                      {program.title}
                    </h2>

                    {/* <p
                      className="text-lg md:text-xl font-medium mb-6"
                      style={{ color: '#8b0000', fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {program.subtitle}
                    </p> */}

                    {/* <p
                      className="expert-description subtitle max-w-3xl mx-auto leading-relaxed"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.5rem',
                        color: '#0f1720',
                        fontWeight: 800
                      }}
                    >
                      {program.description}
                    </p> */}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-gradient-to-r from-[#8b0000]/10 to-[#111111]/10 rounded-xl p-6 border border-[#8b0000]/20">
                        <h3
                          className="feature-title text-lg md:text-xl font-semibold text-white mb-3"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 1000, color: '#b91c1c' }}
                        >
                          {feature.name}
                        </h3>
                        <p
                          className="feature-description subtitle leading-relaxed"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.40rem', color: '#0f1720' }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* <div className="text-center mt-12">
                    <Link to="/services" className="gradient-button">
                      EDUCATION
                      <ArrowRight size={20} />
                    </Link>
                  </div> */}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Carousel Section */}
      <section className="section-padding" style={{ background: ' #f6e5cf'  }}>
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold gradient-text mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 900,
                background: 'linear-gradient(90deg, #b91c1c 0%, #b91c1c 50%, #111111 50%, #111111 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              CLIENT SUCCESS STORIES
            </h2>
            <p className="services-desc subtitle max-w-2xl mx-auto">
              Discover how our premium wellness programs have transformed lives and exceeded expectations.
            </p>
          </motion.div>

          <FeedbackCarousel feedbacks={feedbackSeed[current.name] || []} />
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