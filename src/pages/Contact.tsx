import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Wellness Street', 'Health City, HC 12345'],
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567'],
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@gradientwellness.com'],
      link: 'mailto:info@gradientwellness.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 6:00 AM - 9:00 PM', 'Sat-Sun: 8:00 AM - 6:00 PM'],
      link: null
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
              Get In Touch
            </h1>
            <p className="subtitle mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to start your wellness journey? Contact our expert team today 
              for a complimentary consultation and discover how we can help you 
              achieve your health goals.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Contact Information
              </h2>
              <p className="subtitle max-w-3xl mx-auto">
                Multiple ways to connect with our wellness experts. 
                Choose what works best for you.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="service-card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}>
                      <info.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold gradient-text mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300">
                        {info.link && detailIndex === 0 ? (
                          <a 
                            href={info.link} 
                            className="transition-colors"
                            style={{ color: '#8b0000' }}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeInSection>
              <div>
                <h2 className="text-4xl font-bold gradient-text mb-6">
                  Send Us a Message
                </h2>
                <p className="subtitle mb-8">
                  Fill out the form below and we'll get back to you within 24 hours 
                  to discuss your wellness goals and schedule your consultation.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                      placeholder="Tell us about your wellness goals, any specific needs, or questions you have..."
                      rows={5}
                    />
                  </div>

                  <button
                    type="submit"
                    className="gradient-button w-full"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeInSection>

            {/* Map & Additional Info */}
            <FadeInSection delay={300}>
              <div>
                <h2 className="text-4xl font-bold gradient-text mb-6">
                  Visit Our Location
                </h2>
                <p className="subtitle mb-8">
                  Located in the heart of Health City, our premium facility 
                  is easily accessible with ample parking and public transportation options.
                </p>

                {/* Embedded Map Placeholder */}
                <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center mb-8 border border-gray-700">
                  <div className="text-center">
                    <MapPin size={48} className="text-pink-400 mx-auto mb-4" />
                    <p className="text-gray-300">Interactive Map</p>
                    <p className="text-gray-500 text-sm">Google Maps Integration</p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="service-card">
                  <h3 className="text-2xl font-bold gradient-text mb-6">
                    What to Expect
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">Complimentary 30-minute consultation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">Comprehensive fitness and wellness assessment</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">Personalized program recommendations</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">Tour of our state-of-the-art facilities</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">Meet our expert wellness team</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Emergency Contact & Final CTA */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Ready to Transform Your Life?
              </h2>
              <p className="subtitle mb-8 max-w-2xl mx-auto">
                Don't wait to start your wellness journey. Our team is ready to help 
                you achieve your health and fitness goals with personalized care and expert guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a href="tel:+15551234567" className="gradient-button">
                  Call Now: (555) 123-4567
                </a>
                <a href="/services" className="gradient-button outline">
                  Explore Our Services
                </a>
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-2">
                  For urgent wellness consultations or immediate assistance
                </p>
                <a 
                  href="tel:+15551234567" 
                  className="text-pink-400 hover:text-pink-300 font-medium"
                >
                  Call us directly at (555) 123-4567
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;