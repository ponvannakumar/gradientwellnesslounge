import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, MapPin, Heart } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
import ParallaxBackground from '../components/ParallaxBackground';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Lead Physiotherapist',
      credentials: 'DPT, MS Sports Medicine',
      description: 'Over 10 years of experience in rehabilitation and sports injury prevention.',
    },
    {
      name: 'Marcus Thompson',
      role: 'Head Personal Trainer',
      credentials: 'NASM-CPT, CSCS',
      description: 'Certified strength and conditioning specialist with expertise in functional training.',
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Nutrition Specialist',
      credentials: 'PhD Nutrition Science, RD',
      description: 'Registered dietitian specializing in performance nutrition and metabolic health.',
    },
    {
      name: 'James Wilson',
      role: 'Wellness Coach',
      credentials: 'NCHC, Mindfulness Instructor',
      description: 'Certified health coach focusing on stress management and lifestyle optimization.',
    },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '8+', label: 'Years Experience' },
    { icon: MapPin, value: '1', label: 'Premium Location' },
    { icon: Heart, value: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxBackground imageUrl="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center section-padding">
        <div className="container">
          <FadeInSection>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
              About Gradient Wellness
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We're dedicated to transforming lives through comprehensive wellness solutions 
              that address your physical, mental, and nutritional needs in a luxury environment.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                At Gradient Wellness Lounge, we believe that true wellness is achieved through 
                a holistic approach that integrates physical fitness, mental wellbeing, and 
                nutritional balance. Our mission is to provide you with the tools, knowledge, 
                and support needed to achieve your optimal health.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We combine cutting-edge techniques with personalized care to create 
                transformation programs that are sustainable, effective, and tailored 
                to your unique lifestyle and goals.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="service-card">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                      <stat.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Meet Our Expert Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our certified professionals bring together decades of experience 
                in fitness, nutrition, physiotherapy, and wellness coaching.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="service-card text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6 flex items-center justify-center">
                    <Users size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text mb-2">{member.name}</h3>
                  <p className="text-pink-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-400 mb-4">{member.credentials}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
                State-of-the-Art Facility
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Our premium facility features cutting-edge equipment, serene wellness spaces, 
                  and private consultation rooms designed to provide the ultimate wellness experience.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="service-card">
                    <h3 className="gradient-text mb-4">Fitness Center</h3>
                    <p className="text-gray-300">Advanced strength training and cardio equipment</p>
                  </div>
                  <div className="service-card">
                    <h3 className="gradient-text mb-4">Therapy Rooms</h3>
                    <p className="text-gray-300">Private spaces for physiotherapy and consultations</p>
                  </div>
                  <div className="service-card">
                    <h3 className="gradient-text mb-4">Wellness Studio</h3>
                    <p className="text-gray-300">Dedicated space for yoga, meditation, and group sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </motion.div>
  );
};

export default About;