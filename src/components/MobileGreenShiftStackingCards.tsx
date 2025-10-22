import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './GreenShiftStackingCards.css';
import './GreenShiftStackingCards.mobile.css';

gsap.registerPlugin(ScrollTrigger);

const MobileGreenShiftStackingCards: React.FC = () => {
  const component = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLElement[];

      // Set the initial state for all cards except the first one
      cards.forEach((card, index) => {
        if (index > 0) {
          gsap.set(card, { scale: 1 });
        }
      });

      // Create a ScrollTrigger for each card to animate it as the next one comes into view
      cards.forEach((card, index) => {
        // We don't animate the last card, as there's nothing to reveal after it
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];

        gsap.to(card, {
          scale: 0.9,
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: nextCard,
            start: "top bottom-=150", // Start animating when the next card is 150px from the bottom
            end: "top center", // Fully animate by the time it reaches the center
            scrub: true,
            invalidateOnRefresh: true, // Recalculate on resize
          },
        });
      });
    }, component);

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <div className="timeline-container" ref={component}>
      <div className="card card-1" ref={(el) => (cardsRef.current[0] = el)}>
        <div className="card-inner">
          <h2 className="card-title">ADDRESSING UNMET NEEDS</h2>
          <p className="card-description">We recognize the universal frustration: wasted time on temporary fixes, conflicting advice, and the constant threat of physical limitations that compromise your success...</p>
        </div>
      </div>
      <div className="card card-2" ref={(el) => (cardsRef.current[1] = el)}>
        <div className="card-inner">
          <h2 className="card-title">ACHIEVING PAIN-FREE LIVING</h2>
          <p className="card-description">We understand the frustration of chronic pain—the belief that the discomfort is simply your "new normal" after cycling through generic, symptomatic treatments...</p>
        </div>
      </div>
      <div className="card card-3" ref={(el) => (cardsRef.current[2] = el)}>
        <div className="card-inner">
          <h2 className="card-title">UNLOCKING TRUE POTENTIAL</h2>
          <p className="card-description">True potential isn't just a goal; it's a strategic necessity that should not be compromised by physical plateau or metabolic challenge...</p>
        </div>
      </div>
      <div className="card card-4" ref={(el) => (cardsRef.current[3] = el)}>
        <div className="card-inner">
          <h2 className="card-title">REDEFINING PAIN AND STRENGTH</h2>
          <p className="card-description">We redefine strength not as muscle mass, but as functional integrity—a resilient system built to support your success for life...</p>
        </div>
      </div>
    </div>
  );
};

export default MobileGreenShiftStackingCards;
