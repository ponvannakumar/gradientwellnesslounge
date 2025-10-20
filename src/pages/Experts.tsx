import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Book, Sparkles, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import ParallaxBackground from '../components/ParallaxBackground';
import FeedbackCarousel from '../components/FeedbackCarousel';
import './Experts.css';

const Experts = () => {
  const expertsData = [
    {
      name: 'Guru',
      image: '/guru.png',
      mobImage: '/Guru_mob.png',
      about: [
        'Guru epitomizes the convergence of elite athleticism, transformative coaching, and strategic leadership.',
        'From his early mastery of weightlifting to his role in Business leadership managing over 100+ trainers in various region, he has consistently shaped performance excellence at every level.',
        'His pursuit of athletic distinction led him to excel in the rare combination of 200m and 400m sprints, while also coaching football individuals and teams to reach peak potential.',
        'Over the past decade, Guru has pioneered evidence-based methodologies that restore athletes from injury, elevate performance, and ensure long-term athletic development and excellence.',
        'Combining precision strength training, advanced pain management, and scientifically curated nutrition, he empowers individuals to transcend limitations, reclaim energy, and unlock their ultimate potential—fusing the discipline of an athlete, the insight of a coach, and the vision of a strategist.'
      ],
      programs: [
        {
          icon: Book,
          title: 'EDUCATION',
          features: [
            {
              name: 'MASTER’S IN SPORTS MANAGEMENT',
              description: 'Comprehensive academic foundation in sports administration and performance optimization.'
            },
            {
              name: 'ADVANCED INTERNSHIP IN STRENGTH & CONDITIONING, PAIN MANAGEMENT, AND NUTRITION',
              description: '11-month immersive program under the mentorship of the Indian Cricket Team and RCB’s Fitness Coach, applying cutting-edge techniques in elite athlete performance.'
            },
            {
              name: 'AUSTRALIAN STRENGTH & CONDITIONING LEVEL 1 CERTIFICATION',
              description: 'Accredited training in modern strength and conditioning principles.'
            },
            {
              name: 'D-LICENSE IN FOOTBALL COACHING',
              description: 'Professional coaching certification emphasizing tactical, technical, and physical development'
            }
          ]
        },
        {
          icon: Trophy,
          title: 'ACHEIVEMENTS',
          features: [
            {
              name: '🏋🏽‍♂️ WEIGHTLIFTING',
              description: 'Silver medalist at Junior Nationals; Bronze medalist at Interuniversity Championships.'
            },
            {
              name: '🏅 ASIAN MASTER’S ATHLETIC CHAMPIONSHIPS',
              description: 'Silver medalist in 400m (55.16s); Bronze medalist in 200m (23.88s)'
            },
          ]
        }
      ],
      feedback: [
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
    },
    {
      name: 'Jamuna',
      image: '/guru.png', // Replace with Jamuna's image
      mobImage: '/Jam_mob.png', // Replace with Jamuna's mobile image
      about: [
        'Jamuna exemplifies the integration of clinical expertise, functional rehabilitation, and human-centered care.',
        'With extensive experience in the domains of physiotherapy and pain management, she has guided over a hundred individuals from chronic pain to confident, pain-free living.',
        'A distinguished member of the Indian Association of Physiotherapists, her mastery lies in delivering sustainable outcomes without dependence on ostentatious modalities.',
        'Renowned for her educational approach, she cultivates awareness, trust, and adherence in every client interaction.',
        'Specializing in musculoskeletal rehabilitation, sports injury management, and geriatric functional restoration, Jamuna’s methodology transcends symptomatic treatment—reinstating balance, movement efficiency, and holistic vitality.'
      ],
      programs: [
        {
          icon: Book,
          title: 'EDUCATION',
          features: [
            {
              name: 'BACHELOR OF PHYSIOTHERAPY(BPT)',
              description: 'Extensive training in musculoskeletal, neurological, and functional rehabilitation, establishing a robust clinical foundationn.'
            },
            {
              name: 'MEMBER, INDIAN ASSOCIATION OF PHYSIOTHERAPISTS (IAP)',
              description: 'Recognized as a qualified professional adhering to India’s highest standards in physiotherapy practice.'
            },
            {
              name: 'CERTIFIED TRIGGER POINT RELEASE THERAPIST',
              description: 'Proficient in releasing myofascial trigger points to alleviate chronic pain and restore optimal movement.'
            },
            {
              name: 'CERTIFIED IASTM PRACTITIONER',
              description: 'Expert in instrument-assisted soft tissue mobilization to treat scar tissue, adhesions, and musculoskeletal restrictions.'
            },
             {
              name: 'CERTIFIED TAPING THERAPIST',
              description: 'Expert in therapeutic taping for joint support, stability, and accelerated injury recovery.'
            },
            {
              name: 'CERTIFIED IN DRY NEEDLING AND CUPPING THERAPIST',
              description: 'Specialized in precision dry needling techniques for muscle relaxation, pain reduction, and functional improvement. Skilled in cupping therapy to enhance circulation, relieve muscular tension, and facilitate tissue healing.'
            },
            {
              name: 'CERTIFIED PERSONAL TRAINER – PRIMAL PATTERNS',
              description: 'Equipped to design performance-driven programs based on foundational human movement patterns.'
            },
            {
              name: 'CERTIFIED PRACTICAL APPLICATION IN STRENGTH & CONDITIONING – PRIMAL PATTERNS',
              description: 'Applies evidence-based, primal movement strategies to optimize functional performance, prevent injuries, and enhance mobility.'
            },
          ]
        },
        // {
        //   icon: Trophy,
        //   title: 'ACHEIVEMENTS',
        //   features: [
        //     {
        //       name: '🏋🏽‍♂️ WEIGHTLIFTING',
        //       description: 'Silver medalist at Junior Nationals; Bronze medalist at Interuniversity Championships.'
        //     },
        //     {
        //       name: '🏅 ASIAN MASTER’S ATHLETIC CHAMPIONSHIPS',
        //       description: 'Silver medalist in 400m (55.16s); Bronze medalist in 200m (23.88s)'
        //     },
        //   ]
        // }
      ],
      feedback: [
        {
          name: 'Alex Johnson',
          description: 'Working with Jamuna transformed my athletic performance completely. His expertise in strength and conditioning helped me achieve personal bests in both weightlifting and sprinting. The personalized training plan was exactly what I needed.',
          rating: 5,
          program: 'Elite Performance Training',
          image: '/public/aboutgrad.png'
        },
        {
          name: 'Sarah Chen',
          description: 'Jamuna\'s coaching methodology is revolutionary. He combines scientific precision with practical application. After months of training under his guidance, I not only improved my physical capabilities but also developed a deeper understanding of athletic performance.',
          rating: 5,
          program: 'Sports Performance Program',
          image: '/public/aboutguru.png'
        }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % expertsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + expertsData.length) % expertsData.length);
  };

  const currentExpert = expertsData[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="md:min-h-screen flex items-start md:items-center justify-center text-center py-0 md:py-36 m-0 overflow-visible md:overflow-hidden">
        <div className="container p-0 m-0 w-full h-full">
          <FadeInSection>
            <picture>
              <source media="(min-width: 768px)" srcSet={currentExpert.image} />
              <img
                src={currentExpert.mobImage}
                alt={currentExpert.name}
                className="w-full h-[70vh] object-contain mx-auto md:w-[200%] md:h-[170%] md:object-cover md:-translate-x-1 md:-translate-y-10 md:min-h-[800px]"
              />
            </picture>
          </FadeInSection>
        </div>
      </section>
      {/* About Section */}
      <section className="pt-0 pb-6 -mt-2 md:mt-0 md:py-20" style={{ backgroundColor: '#f6e5cf' }}>
        <div className="container mx-auto px-4">
          <h2 className="experts-about-title text-left">
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            <ul className="experts-about-list space-y-6">
              {currentExpert.about.slice(0, 3).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <ul className="experts-about-list-secondary space-y-6">
              {currentExpert.about.slice(3).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
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
            {currentExpert.programs.map((program, index) => (
              <FadeInSection key={index} delay={index * 300}>
                <div className="service-card">
                  <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                      <div className="experts-icon-wrapper">
                        <program.icon size={40} className="text-white" />
                      </div>
                    </div>
                    <h2 className="expert-program-title text-2xl md:text-3xl font-bold mb-4">
                      {program.title}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="expert-feature-card">
                        <h3 className="expert-feature-title text-lg md:text-xl font-semibold">
                          {feature.name}
                        </h3>
                        <p className="expert-feature-description leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
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
            <h2 className="expert-feedback-title text-4xl md:text-5xl font-bold mb-6">
              CLIENT SUCCESS STORIES
            </h2>
            <p className="expert-subtitle max-w-2xl mx-auto">
              Discover how our premium wellness programs have transformed lives and exceeded expectations.
            </p>
          </motion.div>

          <FeedbackCarousel feedbacks={currentExpert.feedback || []} />
        </div>
      </section>

      {/* Expert Navigation */}
      <section className="bg-black bg-opacity-10">
        <div className="container">
          <FadeInSection>
            <div className="expert-navigation-container">
              <button onClick={handlePrevious} className="expert-navigation-button">
                Previous Expert
              </button>
              <button onClick={handleNext} className="expert-navigation-button">
                Next Expert
              </button>
            </div>
          </FadeInSection>
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
