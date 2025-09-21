import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
 

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Jessica Martinez',
      program: 'Lifestyle Transformation',
      quote: 'Gradient Wellness Lounge completely transformed my approach to health and fitness. The personalized program addressed not just my physical needs, but my mental and emotional wellness too. I\'ve never felt more energized and confident in my life.',
      result: 'Lost 25 lbs, improved sleep quality, reduced stress levels significantly',
      rating: 5
    },
    {
      name: 'Michael Roberts',
      program: 'Personal Training & Nutrition',
      quote: 'The trainers here are exceptional. They created a workout plan that fit perfectly with my busy schedule and dietary restrictions. The nutrition coaching was a game-changer - I learned how to fuel my body properly for the first time.',
      result: 'Gained 15 lbs of muscle, increased energy levels, learned sustainable nutrition habits',
      rating: 5
    },
    {
      name: 'Sarah Thompson',
      program: 'Physiotherapy & Recovery',
      quote: 'After years of chronic back pain, I was skeptical that anything could help. The physiotherapy team at Gradient Wellness not only helped me recover but taught me how to prevent future injuries. I\'m pain-free for the first time in years.',
      result: 'Complete recovery from chronic back pain, improved mobility and posture',
      rating: 5
    },
    {
      name: 'David Chen',
      program: 'Athlete Performance Training',
      quote: 'As a competitive athlete, I needed specialized training that would take my performance to the next level. The performance program here is world-class. The combination of strength training, recovery, and nutrition optimization helped me achieve my personal best.',
      result: 'Improved athletic performance by 20%, faster recovery times, injury-free season',
      rating: 5
    },
    {
      name: 'Emma Williams',
      program: 'Stress Management & Wellness',
      quote: 'The stress management program saved my career and my sanity. I was burning out from work pressure, but the mindfulness techniques and lifestyle changes I learned here have made me more productive and happier than ever before.',
      result: 'Reduced stress levels, improved work-life balance, better sleep quality',
      rating: 5
    },
    {
      name: 'Carlos Rodriguez',
      program: 'Complete Wellness Program',
      quote: 'What sets Gradient Wellness apart is their holistic approach. They didn\'t just help me get fit - they helped me build a sustainable lifestyle. The team genuinely cares about your success and provides ongoing support every step of the way.',
      result: 'Complete lifestyle transformation, sustainable healthy habits, increased life satisfaction',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

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
              Client Success Stories
            </h1>
            <p className="subtitle mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how our comprehensive wellness programs have transformed 
              the lives of our clients. Real people, real results, real transformation.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Main Testimonial Carousel */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Navigation Buttons */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform z-10"
                  style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform z-10"
                  style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Testimonial Card */}
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="service-card text-center"
                >
                  <div className="flex justify-center mb-6">
                    <Quote size={48} className="text-pink-400" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={24} className="text-[#8b0000] fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="subtitle leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  {/* Result */}
                  <div className="bg-gradient-to-r from-[#8b0000]/10 to-[#111111]/10 rounded-lg p-6 mb-8 border border-[#8b0000]/20">
                    <h4 className="text-pink-400 font-semibold mb-2">Results Achieved:</h4>
                    <p className="text-gray-700">{testimonials[currentIndex].result}</p>
                  </div>
                  
                  {/* Client Info */}
                  <div>
                    <h3 className="text-2xl font-bold gradient-text mb-2">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="font-medium" style={{ color: '#8b0000' }}>
                      {testimonials[currentIndex].program}
                    </p>
                  </div>
                </motion.div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-12 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'scale-125'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      style={index === currentIndex ? { background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' } : undefined}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Additional Testimonials Grid */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
              More Success Stories
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="testimonial-card">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    "{testimonial.quote.slice(0, 120)}..."
                  </p>
                  
                  <div className="text-center">
                    <h4 className="font-bold gradient-text">{testimonial.name}</h4>
                    <p className="text-pink-400 text-sm">{testimonial.program}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-black bg-opacity-20">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Our Impact in Numbers
              </h2>
              <p className="subtitle max-w-3xl mx-auto">
                These numbers represent real transformations and successful wellness journeys.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <FadeInSection delay={100}>
              <div className="service-card">
                <h3 className="text-4xl font-bold gradient-text mb-2">500+</h3>
                <p className="text-gray-300">Lives Transformed</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="service-card">
                <h3 className="text-4xl font-bold gradient-text mb-2">95%</h3>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="service-card">
                <h3 className="text-4xl font-bold gradient-text mb-2">8+</h3>
                <p className="text-gray-300">Years of Excellence</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="service-card">
                <h3 className="text-4xl font-bold gradient-text mb-2">100%</h3>
                <p className="text-gray-300">Personalized Approach</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <FadeInSection>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="subtitle mb-12 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their lives 
                with our comprehensive wellness programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  className="gradient-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Transformation
                </motion.a>
                <motion.a
                  href="/services"
                  className="gradient-button outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Services
                </motion.a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;