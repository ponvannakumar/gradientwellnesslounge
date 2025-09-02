import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from '../../components/FadeInSection';
import ParallaxBackground from '../../components/ParallaxBackground';

const Nutrition = () => {
  const nutritionServices = [
    {
      title: 'Personalized Meal Planning',
      description: 'Custom meal plans designed around your dietary preferences, lifestyle, and health goals.',
      benefits: ['Macro and micronutrient optimization', 'Dietary preference accommodation', 'Meal prep strategies', 'Recipe recommendations']
    },
    {
      title: 'Nutritional Counseling',
      description: 'One-on-one consultations with registered dietitians to address your specific nutritional needs.',
      benefits: ['Comprehensive dietary assessment', 'Behavior modification strategies', 'Goal setting and tracking', 'Ongoing support and guidance']
    },
    {
      title: 'Sports Nutrition',
      description: 'Specialized nutrition strategies for athletes and active individuals to optimize performance and recovery.',
      benefits: ['Pre and post-workout nutrition', 'Hydration strategies', 'Supplement recommendations', 'Competition day planning']
    },
    {
      title: 'Weight Management',
      description: 'Evidence-based approaches to healthy weight loss or gain through sustainable dietary changes.',
      benefits: ['Caloric needs assessment', 'Sustainable eating habits', 'Portion control education', 'Long-term maintenance strategies']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxBackground imageUrl="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" />
      
      {/* Back Button */}
      <div className="fixed top-24 left-8 z-50">
        <Link to="/services" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
          <ArrowLeft size={20} />
          Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center section-padding">
        <div className="container">
          <FadeInSection>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#b91c1c] via-[#8a1111] to-[#111111] flex items-center justify-center">
                <Utensils size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
              Nutrition & Diet
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your health through personalized nutrition guidance. Our registered 
              dietitians create sustainable meal plans and provide expert coaching to help 
              you achieve your wellness goals.
            </p>
            <Link to="/contact" className="gradient-button">
              Start Nutrition Coaching
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Nutrition Services */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Comprehensive Nutrition Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our registered dietitians provide evidence-based nutrition guidance 
                tailored to your individual needs and lifestyle.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-16">
            {nutritionServices.map((service, index) => (
              <FadeInSection key={index} delay={index * 200}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="service-card">
                      <h3 className="text-3xl font-bold gradient-text mb-6">{service.title}</h3>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-3">
                            <CheckCircle size={20} className="text-[#b91c1c] flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#b91c1c]/20 via-[#8a1111]/20 to-[#111111]/20 flex items-center justify-center border border-[#b91c1c]/20">
                      <Utensils size={120} className="text-[#b91c1c] opacity-50" />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Philosophy */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
                Our Nutrition Philosophy
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Sustainable</h3>
                  <p className="text-gray-300">Focus on long-term lifestyle changes rather than quick fixes</p>
                </div>
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Personalized</h3>
                  <p className="text-gray-300">Tailored nutrition plans based on your unique needs and preferences</p>
                </div>
                <div className="service-card">
                  <h3 className="text-xl font-bold gradient-text mb-4">Evidence-Based</h3>
                  <p className="text-gray-300">Recommendations based on the latest nutritional science</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Ready to Transform Your Nutrition?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Start your journey to better health with personalized nutrition guidance 
                from our expert registered dietitians.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="gradient-button">
                  Book Nutrition Consultation
                </Link>
                <Link to="/services" className="gradient-button outline">
                  View All Services
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Nutrition;