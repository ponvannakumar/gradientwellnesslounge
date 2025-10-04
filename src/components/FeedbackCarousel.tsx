import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Save, X } from 'lucide-react';

interface Feedback {
  name: string;
  description: string;
  rating: number;
  program?: string;
  image?: string;
}

interface FeedbackCarouselProps {
  feedbacks: Feedback[];
  autoPlay?: boolean;
  autoPlayInterval?: number; // ms
}

const FeedbackCarousel: React.FC<FeedbackCarouselProps> = ({ feedbacks, autoPlay = true, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editDescription, setEditDescription] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const mountedRef = useRef(true);

  const nextFeedback = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  }, [feedbacks.length]);

  const prevFeedback = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  }, [feedbacks.length]);

  const goToFeedback = (index: number) => {
    setCurrentIndex(index);
  };

  const startEdit = (index: number) => {
    setEditingIndex(index);
    setEditDescription(feedbacks[index].description);
  };

  const saveEdit = () => {
    // In a real app, this would update the data
    console.log('Saving edit:', editDescription);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditDescription('');
  };

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Autoplay effect
  useEffect(() => {
    if (!autoPlay || feedbacks.length <= 1) return;
    if (isPaused) return;
    // Clear any existing
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    intervalRef.current = window.setInterval(() => {
      if (!mountedRef.current) return;
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, autoPlayInterval);
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, feedbacks.length, isPaused]);

  // Pause on page hidden (visibility API)
  useEffect(() => {
    const onVisibility = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevFeedback();
      if (e.key === 'ArrowRight') nextFeedback();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [nextFeedback, prevFeedback]);

  if (feedbacks.length === 0) {
    return <div>No feedbacks available.</div>;
  }

  const currentFeedback = feedbacks[currentIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {/* Navigation Buttons */}
        <button
          onClick={prevFeedback}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform z-10"
          style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}
          aria-label="Previous feedback"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextFeedback}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform z-10"
          style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}
          aria-label="Next feedback"
        >
          <ChevronRight size={24} />
        </button>

        {/* Feedback Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.98 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="service-card text-center"
        >
          <div className="flex justify-center mb-6">
            {currentFeedback.image ? (
              <img
                src={currentFeedback.image}
                alt={currentFeedback.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                style={{ boxShadow: '0 10px 30px rgba(185,28,28,0.15)' }}
              />
            ) : (
              <Quote size={48} className="text-pink-400" />
            )}
          </div>

          {/* Rating */}
          <div className="flex justify-center mb-6">
            {[...Array(currentFeedback.rating)].map((_, i) => (
              <Star key={i} size={24} className="text-[#8b0000] fill-current" />
            ))}
          </div>

          {/* Description */}
          {editingIndex === currentIndex ? (
            <div className="mb-8">
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-900"
                rows={4}
              />
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={saveEdit}
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  <Save size={16} />
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <X size={16} />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="subtitle leading-relaxed mb-8 italic">
              "{currentFeedback.description}"
            </p>
          )}

          {/* Client Info */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              {currentFeedback.name}
            </h3>
            {currentFeedback.program && (
              <p className="font-medium" style={{ color: '#8b0000' }}>
                {currentFeedback.program}
              </p>
            )}
          </div>

          {/* Edit Button
          {editingIndex !== currentIndex && (
            <button
              onClick={() => startEdit(currentIndex)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-auto"
            >
              <Edit3 size={16} />
              Edit Description
            </button>
          )} */}
        </motion.div>

        {/* Dots Indicator with animated progress */}
        <div className="flex justify-center mt-12 gap-3 items-center">
          {feedbacks.map((_, index) => {
            const active = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => goToFeedback(index)}
                className={`rounded-full transition-all duration-400 flex items-center justify-center ${active ? 'w-9 h-3 rounded-full' : 'w-3 h-3'}`}
                style={active ? { background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%)' } : { background: '#d1d5db' }}
                aria-label={`Go to feedback ${index + 1}`}
              >
                {active && (
                  <motion.span
                    layoutId="dot"
                    className="block h-3"
                    style={{ width: '100%' }}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
