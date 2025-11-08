import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Image } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
import './FAQ.css';
 
const typography: { [key: string]: React.CSSProperties } = {
  title: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 700,
    fontSize: '2rem', // Default size, can be overridden by utility classes
    color: '#ffffff', // Default color
    textTransform: 'uppercase',
  },
  description: {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 500,
    fontSize: '1.6rem', // Default size
    color: '#000000ff', // Default color (text-gray-300)
  },
};

const FAQ = () => {
  const heroTitleStyle: React.CSSProperties = {
    ...typography.title,
    fontSize: '3.5rem',
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: ' What exactly is Gradient Holistic Wellness Lounge?',
      answer: 'Gradient is not a gym or a clinic — it’s a place where we help you get out of pain, move better, and build your body back stronger. We combine physiotherapy, strength training, and movement correction under one roof — so you don’t have to keep running between doctors and gyms anymore. Gradient bridges the gap between pain management, fitness, and overall well-being.'
    },
    {
      question: 'How is Gradient different from other fitness or physiotherapy centers?',
      answer: 'We get this question a lot. Most people do exercises or treatments without addressing the root cause — and the pain keeps coming back. At Gradient, we start with a detailed assessment, find what’s really causing your problem, and design a personalized plan that rebuilds you from the ground up.It’s not “pain relief” — it’s body transformation through science.'
    },
    {
      question: 'Who is Gradient designed for?',
      answer: 'Gradient is tailored for individuals who value quality and expertise — including: <br/>• Professionals facing lifestyle-related stiffness or fatigue <br/>• Clients recovering from injuries or chronic pain <br/>• Athletes aiming for peak performance <br/>• Adults over 40–50 looking to regain strength and mobility safely <br/>• Anyone ready to invest in their body’s longevity and overall well-being. <br/>• ⁠People who’ve tried multiple physios or gyms but still have pain <br/>• Working professionals with back, neck, or knee issues <br/>• Sports enthusiasts recovering from injuries <br/>• ⁠People seeking for healthy and sustainable fat-loss.'
    },
    {
      question: 'What happens in the first session?',
      answer: 'Your first session is all about understanding you. We do a full assessment and movement testing to look at your strength, flexibility, and lifestyle patterns — then explain what’s really going on in your body. You’ll walk out knowing exactly what needs to be done and how we’ll help you get there.'
    },
    {
      question: 'How long will it take to see results?',
      answer: 'It depends on your condition — but many clients start noticing changes in pain and movement within 2–3 sessions. Real, lasting results usually show up in 4–8 weeks when you stay consistent with your plan. We focus on long-term correction, not just temporary relief.'
    },
    {
      question: 'Are all sessions one-on-one?',
      answer: 'Yes. Every session is personalized and guided directly by a physiotherapist or a trained expert. We don’t crowd our floor. You’ll get full attention, clear feedback, and safe progression every time you train.'
    },
    {
      question: 'How can I start my journey with Gradient?',
      answer: 'You can book a consultation or trial session directly through our website or by visiting Gradient. We’ll assess your current condition, discuss your goals, and plan your personalized path — whether it’s recovery, performance, or lifestyle transformation.'
    },
    {
      question: 'I’m over 40 and have diabetes/arthritis. Is this safe for me?',
      answer: 'Absolutely. In fact, you’re exactly who we designed Gradient for. We specialize in safe, corrective movement and pain-free strength training — especially for adults who’ve been stuck in commercial gyms or basic therapy routines that don’t work long term. Our programs are joint-friendly, medically guided, and fully customized to your comfort and capacity.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const galleryImages = [
    { title: 'Modern Fitness Equipment', imageUrl: '/gym1.jpg' },
    { title: 'Group Training Session', imageUrl: '/gym2.jpg' },
    { title: 'Physiotherapy Room', imageUrl: '/gym3.jpg' },
    { title: 'Nutrition Consultation Area', imageUrl: '/gym4.jpg' },
    { title: 'Wellness Studio', imageUrl: '/gym5.jpg' },
    { title: 'Recovery Lounge', imageUrl: '/gym6.jpg' },
    { title: 'Personal Training Zone', imageUrl: '/gym7.jpg' },
    { title: 'Meditation Space', imageUrl: '/gym8.jpg' },
    { title: 'Meditation Space', imageUrl: '/gym9.jpg' },
    { title: 'Modern Fitness Equipment', imageUrl: '/gym10.jpg' },
    { title: 'Group Training Session', imageUrl: '/gym11.jpg' },
    { title: 'Physiotherapy Room', imageUrl: '/gym12.jpg' },
    { title: 'Nutrition Consultation Area', imageUrl: '/gym13.jpg' },
    { title: 'Wellness Studio', imageUrl: '/gym14.jpg' },
    { title: 'Recovery Lounge', imageUrl: '/gym15.jpg' },
    { title: 'Personal Training Zone', imageUrl: '/gym16.jpg' },
    { title: 'Meditation Space', imageUrl: '/gym17.jpg' },
    { title: 'Recovery Lounge', imageUrl: '/gym18.jpg' },
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
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8" style={heroTitleStyle}>
              FAQ & Gallery
            </h1>
            <p className="subtitle mb-12 max-w-4xl mx-auto leading-relaxed" style={typography.description}>
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
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" style={typography.title}>
                Frequently Asked Questions
              </h2>
              <p className="subtitle max-w-3xl mx-auto" style={typography.description}>
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
                      {faq.answer.includes('<br/>') ? (
                        faq.answer.split('<br/>').map((line, i) => (
                          <p key={i} className={i === 0 ? '' : 'bullet-point'}>
                            {line}
                          </p>
                        ))
                      ) : (
                        <p>{faq.answer}</p>
                      )}
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
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" style={typography.title}>
                Facility Gallery
              </h2>
              <p className="subtitle max-w-3xl mx-auto" style={typography.description}>
                Take a virtual tour of our premium wellness facility featuring 
                state-of-the-art equipment and serene spaces designed for your transformation.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((item, index) => (
              <div key={index} className="aspect-square">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              </div>
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
                <h2 className="text-4xl font-bold gradient-text mb-6" style={typography.title}>
                  Still Have Questions?
                </h2>
                <p className="subtitle leading-relaxed mb-8" style={typography.description}>
                  Our team is here to help you understand how our comprehensive 
                  wellness approach can benefit your unique situation. We believe 
                  in transparency and want you to feel completely informed about 
                  your wellness journey.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    {/* <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Complimentary consultation sessions available</p> */}
                  </div>
                  <div className="flex items-start gap-3">
                    {/* <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Personalized program recommendations</p> */}
                  </div>
                  <div className="flex items-start gap-3">
                    {/* <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Facility tour and team introductions</p> */}
                  </div>
                  <div className="flex items-start gap-3">
                    {/* <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Flexible scheduling options</p> */}
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
                <h3 className="text-2xl font-bold gradient-text mb-6 text-center" style={typography.title}>
                  Quick Contact Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-red mb-2">Phone</h4>
                    <p className="text-gray-300">95000 59260</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red mb-2">Email</h4>
                    <p className="text-gray-300">ceo@gradientlounge.com</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red mb-2">Address</h4>
                    <p className="text-gray-300">12th cross street , MIG 229100 Feet Rd , New ASTC Hudco ,Hosur,Tamil Nadu 635109.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-red mb-2">Hours</h4>
                    <p className="text-gray-300">Mon-Sat: 6:00 AM - 9:00 PM<br />Sun: Closed</p>
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
