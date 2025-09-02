import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Image } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
 

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What makes Gradient Wellness Lounge different from other fitness centers?',
      answer: 'Our holistic approach sets us apart. We don\'t just focus on fitness - we integrate physical training, nutrition coaching, physiotherapy, and stress management into comprehensive wellness programs. Our certified team of specialists works together to create personalized plans that address your complete wellbeing, not just your fitness goals.'
    },
    {
      question: 'Do I need prior fitness experience to join your programs?',
      answer: 'Absolutely not! Our programs are designed for all fitness levels, from complete beginners to advanced athletes. We start with a comprehensive assessment to understand your current fitness level, health history, and goals. From there, we create a personalized program that progresses at your pace, ensuring you feel confident and safe throughout your journey.'
    },
    {
      question: 'How long does it typically take to see results?',
      answer: 'Results vary depending on individual goals and starting points, but most clients begin to notice improvements in energy levels and mood within the first 2-3 weeks. Physical changes typically become apparent after 4-6 weeks of consistent participation. However, we focus on sustainable, long-term transformation rather than quick fixes, so the most significant results develop over 3-6 months.'
    },
    {
      question: 'What credentials do your trainers and specialists have?',
      answer: 'All our team members are highly qualified professionals with relevant certifications and degrees. Our personal trainers hold certifications from NASM, ACSM, or similar organizations. Our physiotherapists have doctorate degrees (DPT) and are licensed practitioners. Our nutritionists are registered dietitians (RD) with advanced degrees in nutrition science. We also require continuing education to ensure our team stays current with the latest research and techniques.'
    },
    {
      question: 'Can I try a session before committing to a program?',
      answer: 'Yes! We offer complimentary consultation sessions where you can meet with our team, tour our facility, discuss your goals, and experience our approach firsthand. This allows you to make an informed decision about which program best fits your needs and ensures we\'re the right fit for your wellness journey.'
    },
    {
      question: 'Do you offer virtual or online coaching options?',
      answer: 'Yes, we provide virtual coaching options for clients who prefer remote guidance or need flexibility in their schedules. Our online services include virtual personal training sessions, nutrition consultations, and wellness coaching. We use advanced technology to ensure you receive the same personalized attention and expert guidance as our in-person clients.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const galleryPlaceholders = [
    'Modern Fitness Equipment',
    'Group Training Session',
    'Physiotherapy Room',
    'Nutrition Consultation Area',
    'Wellness Studio',
    'Recovery Lounge',
    'Personal Training Zone',
    'Meditation Space'
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
              FAQ & Gallery
            </h1>
            <p className="subtitle mb-12 max-w-4xl mx-auto leading-relaxed">
              Get answers to common questions and explore our state-of-the-art 
              wellness facility through our gallery.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Frequently Asked Questions
              </h2>
              <p className="subtitle max-w-3xl mx-auto">
                Find answers to the most common questions about our services, 
                programs, and approach to wellness.
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="faq-item">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="faq-question w-full text-left flex items-center justify-between"
                  >
                    <span>{faq.question}</span>
                    <div className="flex-shrink-0 ml-4">
                      {openIndex === index ? (
                        <Minus size={24} className="" style={{ color: '#8b0000' }} />
                      ) : (
                        <Plus size={24} className="" style={{ color: '#8b0000' }} />
                      )}
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Facility Gallery
              </h2>
              <p className="subtitle max-w-3xl mx-auto">
                Take a virtual tour of our premium wellness facility featuring 
                state-of-the-art equipment and serene spaces designed for your transformation.
              </p>
            </div>
          </FadeInSection>

          <div className="gallery-grid">
            {galleryPlaceholders.map((title, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="gallery-item group">
                  <div className="text-center">
                    <Image size={48} className="mx-auto mb-4 text-gray-500 transition-colors" />
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-gray-500 mt-2">Coming Soon</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold gradient-text mb-6">
                  Still Have Questions?
                </h2>
                <p className="subtitle leading-relaxed mb-8">
                  Our team is here to help you understand how our comprehensive 
                  wellness approach can benefit your unique situation. We believe 
                  in transparency and want you to feel completely informed about 
                  your wellness journey.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Complimentary consultation sessions available</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Personalized program recommendations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Facility tour and team introductions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Flexible scheduling options</p>
                  </div>
                </div>
                <motion.a
                  href="/contact"
                  className="gradient-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Our Team
                </motion.a>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="service-card">
                <h3 className="text-2xl font-bold gradient-text mb-6 text-center">
                  Quick Contact Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Phone</h4>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Email</h4>
                    <p className="text-gray-300">info@gradientwellness.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Address</h4>
                    <p className="text-gray-300">123 Wellness Street<br />Health City, HC 12345</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Hours</h4>
                    <p className="text-gray-300">Mon-Fri: 6:00 AM - 9:00 PM<br />Sat-Sun: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQ;