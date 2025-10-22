import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Book, Sparkles, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import ParallaxBackground from '../components/ParallaxBackground';
import FeedbackCarousel from '../components/FeedbackCarousel';
import './Experts.css';

const Experts = () => {
  const [isLoading, setIsLoading] = useState(false);
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
          name: 'HARISH ',
          description: 'After my ACL reconstruction, returning to the badminton court felt impossible. Training under Guru completely changed that. His structured strength & conditioning program made me functionally strong, stable, and ready to return to sport. Thanks to his guidance, I was back playing advanced-level badminton in just 6–7 months, completely pain-free. The focus on functional strength and movement efficiency accelerated my recovery and restored my confidence on court.',
          rating: 5,
          program: 'Sports Rehabilitation Program',
          image: '/harish.jpg'
        },
        {
          name: 'KAROL',
          description: 'I was facing issues with my liver function and had abnormal bilirubin levels. After meeting Guru and following his curated nutrition plan along with strength training, I experienced a remarkable change. My reports reversed, and I feel more energetic than ever before. What medicines couldn’t achieve, the right nutrition and workouts did. I’m truly grateful to Guru and Gradient for their guidance. I highly recommend this place to anyone looking for real, long-term solutions.',
          rating: 5,
          program: 'Lifestyle and Nutritional.',
          image: '/karol.jpg'
        },
        {
          name: 'YOHITH',
          description: 'As a sprinter, I often felt that my performance had plateaued, and I struggled to reach the goals I had set for myself. Despite putting in consistent effort, my timings and overall performance were not improving as I had hoped. After beginning training under Coach Guru, I experienced a remarkable transformation. Not only did my sprint times improve significantly, but my overall athletic performance elevated to a level I hadn’t thought possible. What sets Guru apart is his holistic approach—he not only provided tailored training programs but also guided me on proper recovery strategies, nutrition, and injury prevention. Thanks to his expertise, I now feel stronger, faster, and more confident on the track, and I am finally progressing toward my peak potential.',
          rating: 5,
          program: 'Sports Performance Training',
          image: '/yohith.jpg'
        },
         {
          name: 'KEERTHANA',
          description: 'I’ve been attending the gradient holistic online wellness classes, and I’m truly grateful for the guidance and support I’ve received. Over time, I’ve seen a huge improvement in my health—my PCOD parameters have reduced significantly, which has been such a positive change for me. The sessions are practical, motivating, and easy to follow, even from home. Thank you for making this smoother and achievable.',
          rating: 5,
          program: 'Metabolic Health Traning.',
          image: '/keethu.jpg'
        },
        {
          name: 'VENKAT',
          description: 'I was 84 kgs due to my unhealthy food and lifestyle habits. I was so depressed. I got to know about Guru, and after taking a consultation with him, I took a DEXA scan which showed 31% body fat. Working with him consistently, his training programs and his approach helped me regain the confidence I had lost, and everything was science-based. Every day felt like a new opportunity to learn. Today, my weight has reduced to 73 kgs and my body fat to 20%. I am truly grateful for this transformation. He has taught me how to live.',
          rating: 5,
          program: 'PERSONALISED TRANING',
          image: '/venkat.jpg'
        }
      ]
    },
    {
      name: 'Jamuna',
      image: '/guru.png',
      mobImage: '/Jam_mob.png',
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
          name: 'CATHERINE ',
          description: 'I am so grateful to my trainer Jamuna for helping me recover from severe back pain after my C-section. When I first started, even simple movements felt difficult, but with her guidance and specially designed exercises, I began to see steady improvement. She not only focused on strengthening my back and core but also made sure I felt comfortable and confident throughout the recovery process. Now I feel stronger, healthier, and free from the pain that once held me back. I truly appreciate her dedication and highly recommend her to anyone looking for safe and effective post-surgery recovery support.',
          rating: 5,
          program: 'Personal traning program',
          image: '/cathere.jpg'
        },
        {
          name: 'SRUTHI',
          description: 'I started training with Jamuna and she took care of my entire fitness journey. Her structured strength and functional training completely transformed my body and mindset. Jamuna’s support throughout my journey was incredible. Her patience, guidance, and constant encouragement gave me the confidence to push through tough days. With her help, I not only healed from back pain but also learned to move safely and efficiently, which made my entire fitness journey far more effective and sustainable.',
          rating: 5,
          program: 'Integrated Physiotherapy',
          image: '/sruthi.jpg'
        },
        {
          name: 'JAYA',
          description: 'I am Jaya, 78 years old . I was struggling with knee pain and I wasn’t able to walk, when i started to train with strength training programs I doubted my self a lot. But today i am able to climb up and down the stairs with weights. My balance, stability strength has been drastically improved. I feel myself more confident and stronger. I enjoy doing workouts and now i am pain free.',
          rating: 5,
          program: 'Geriatric Fitness Training',
          image: '/jaya.jpg'
        },
        {
          name: 'HARISH',
          description: 'Jamuna’s expertise as a sports physiotherapist was a game-changer for my ACL recovery. From day one, she provided a holistic, hands-on approach, focusing on rehabilitation exercises and functional progression. One of the highlights of my journey was that we never relied on physiotherapy modalities like IFT, yet my recovery was faster and more effective. Today, I move smarter, stronger, and with complete confidence on the court.',
          rating: 5,
          program: 'Sports Rehabilitation Program',
          image: '/harish.jpg'
        }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = async () => {
    setIsLoading(true);
    try {
      // Preload the next expert's images
      const nextIndex = (currentIndex + 1) % expertsData.length;
      const nextExpert = expertsData[nextIndex];
      await Promise.all([
        preloadImage(nextExpert.image),
        preloadImage(nextExpert.mobImage)
      ]);
      setCurrentIndex(nextIndex);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevious = async () => {
    setIsLoading(true);
    try {
      // Preload the previous expert's images
      const prevIndex = (currentIndex - 1 + expertsData.length) % expertsData.length;
      const prevExpert = expertsData[prevIndex];
      await Promise.all([
        preloadImage(prevExpert.image),
        preloadImage(prevExpert.mobImage)
      ]);
      setCurrentIndex(prevIndex);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to preload images
  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
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
            <div className="relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
                </div>
              )}
              <picture>
                <source media="(min-width: 768px)" srcSet={currentExpert.image} />
                <img
                  src={currentExpert.mobImage}
                  alt={currentExpert.name}
                  className="w-full h-[70vh] object-contain mx-auto md:w-[200%] md:h-[170%] md:object-cover md:-translate-x-1 md:-translate-y-10 md:min-h-[800px]"
                />
              </picture>
            </div>
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
