import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
import { API_ENDPOINTS } from '../config/api';

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
    fontSize: '1.5rem', // Default size
    color: '#000000ff', // Default color (text-gray-300)
  },
};

const Contact = () => {
  const heroTitleStyle: React.CSSProperties = {
    ...typography.title,
    fontSize: '3.5rem',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError('');
    
    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['12th cross street , MIG 229100 Feet Rd , New ASTC Hudco , Hosur,Tamil Nadu 635109'],
      link: 'https://maps.app.goo.gl/sLv6S92xRnKwx69Z7'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['95000 59260'],
      link: 'tel:+9195000 59260'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['ceo@gradientlounge.com'],
      link: 'mailto:ceo@gradientlounge.com'
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
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8" style={heroTitleStyle}>
              Get In Touch
            </h1>
            <p className="subtitle mb-12 max-w-4xl mx-auto leading-relaxed" style={typography.description}>
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
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" style={typography.title}>
                Contact Information
              </h2>
              <p className="subtitle max-w-3xl mx-auto" style={typography.description}>
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
                  <h3 className="text-xl font-bold gradient-text mb-4" style={typography.title}>{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-300" style={typography.description}>
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
                <h2 className="text-4xl font-bold gradient-text mb-6" style={typography.title}>
                  Send Us a Message
                </h2>
                <p className="subtitle mb-8" style={typography.description}>
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

                   {submitError && (
                     <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mb-4">
                       <p className="text-red-400 text-sm">{submitError}</p>
                     </div>
                   )}

                   <button
                     type="submit"
                     className="gradient-button w-full"
                     disabled={isSubmitted || isLoading}
                   >
                     {isSubmitted ? (
                       <>
                         <CheckCircle size={20} />
                         Message Sent!
                       </>
                     ) : isLoading ? (
                       <>
                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                         Sending...
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
                <h2 className="text-4xl font-bold gradient-text mb-6" style={typography.title}>
                  Visit Our Location
                </h2>
                <p className="subtitle mb-8" style={typography.description}>
                  Located in the heart of Health City, our premium facility 
                  is easily accessible with ample parking and public transportation options.
                </p>

                {/* Google Maps Embed - Clickable */}
                <a 
                  href="https://maps.app.goo.gl/sLv6S92xRnKwx69Z7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative group cursor-pointer mb-8"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6246891234567!2d77.81010731483!3d12.730384819083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae71fbc097b0f3%3A0xe99b84b43cd4af0a!2sGradient%20Holistic%20Wellness%20Lounge!5e0!3m2!1sen!2sin!4v1730678901234!5m2!1sen!2sin"
                    className="aspect-video w-full rounded-xl border border-gray-700 pointer-events-none"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gradient Holistic Wellness Lounge Location"
                  ></iframe>
                  {/* Overlay to indicate clickability */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all rounded-xl flex items-center justify-center">
                    <div className="bg-black bg-opacity-70 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium flex items-center gap-2">
                        <MapPin size={16} />
                        Click to open in Google Maps
                      </p>
                    </div>
                  </div>
                </a>

                {/* Additional Information */}
                {/* <div className="service-card">
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
                </div> */}
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
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" style={typography.title}>
                Ready to Transform Your Life?
              </h2>
              <p className="subtitle mb-8 max-w-2xl mx-auto" style={typography.description}>
                Don't wait to start your wellness journey. Our team is ready to help 
                you achieve your health and fitness goals with personalized care and expert guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a href="tel:+15551234567" className="gradient-button">
                  Call Now: 95000 59260
                </a>
                <a href="/services" className="gradient-button outline">
                  Explore Our Services
                </a>
              </div>

              <div className="text-center">
                <p className="text-black-400 mb-2">
                  For urgent wellness consultations or immediate assistance
                </p>
                <a 
                  href="tel:+9195000 59260" 
                  className="text-red-600 hover:text-red-300 font-medium"
                >
                  Call us directly at 95000 59260
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
