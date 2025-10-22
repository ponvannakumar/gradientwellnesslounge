import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import './StackCard.css'; // Import the CSS file

// Define a type for our card configuration object
interface CardConfig {
  element: React.RefObject<HTMLDivElement | null>;
  inner: React.RefObject<HTMLDivElement | null>;
  scale: { start: number; end: number };

  translateY: number;
}

const StackingCardsPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 1. Create refs for all the DOM elements we need to interact with
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const inner1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const inner2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const inner3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const inner4Ref = useRef<HTMLDivElement>(null);

  // 2. Memoize the cards array to prevent re-creation on every render
  // It now uses the refs instead of getElementById
  const cards: CardConfig[] = useMemo(() => [
    { 
      element: card1Ref, 
      inner: inner1Ref,
      scale: { start: 0.85, end: 1 }, 
      translateY: 0 
    },
    { 
      element: card2Ref, 
      inner: inner2Ref,
      scale: { start: 0.88, end: 1 }, 
      translateY: 0
    },
    { 
      element: card3Ref, 
      inner: inner3Ref,
      scale: { start: 0.91, end: 1 }, 
      translateY: 0
    },
    { 
      element: card4Ref, 
      inner: inner4Ref,
      scale: { start: 0.94, end: 1 }, 
      translateY: 0
    },
  ], []); // Empty dependency array means this is created only once

  // 3. Wrap the animation function in useCallback for performance
  const updateCardAnimations = useCallback(() => {
    if (isMobile) {
      // Simplified animation for mobile devices
      cards.forEach((card) => {
        if (!card.element.current) return;
        const rect = card.element.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          card.element.current.classList.add('active');
        } else {
          card.element.current.classList.remove('active');
        }
      });
      return;
    }

    if (!timelineContainerRef.current) return;
    
    const vh = window.innerHeight;
    const scrolled = window.scrollY;

    cards.forEach((card) => {
      if (!card.element.current || !card.inner.current) return;

      const rect = card.element.current.getBoundingClientRect();
      const centerY = rect.top + (rect.height / 2);
      const distanceFromCenter = Math.abs(centerY - (vh / 2));
      const viewportThreshold = vh * 0.7;

      // Calculate progress based on card position relative to viewport center
      const progress = Math.max(0, 1 - (distanceFromCenter / viewportThreshold));
      
      // Calculate scale and translateY based on progress
      const scale = card.scale.start + ((card.scale.end - card.scale.start) * progress);
      const translateY = card.translateY * (1 - progress);

      // Apply the transform with easing
      card.inner.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      
      // Update active state
      if (progress > 0.7) {
        card.element.current.classList.add('active');
      } else {
        card.element.current.classList.remove('active');
      }
    });

    // Ensure the container ref is connected
    if (!timelineContainerRef.current) return;

    const scrollY = window.scrollY;
    const containerTop = timelineContainerRef.current.offsetTop;

    // Define triggerStart and animationRange for scroll-based animation
    const triggerStart = 100; // Adjust this value as needed for when the animation should start
    const animationRange = 300; // Adjust this value for how much scroll is needed for full animation

    cards.forEach((card) => {
      // Ensure the card's refs are connected
      if (!card.element.current || !card.inner.current) return;

      const cardTop = card.element.current.offsetTop + containerTop;
      const triggerPoint = cardTop - triggerStart;
      const scrollProgress = scrollY - triggerPoint;
      
      let progress = Math.max(0, Math.min(1, scrollProgress / animationRange));

      const scale = card.scale.start + (card.scale.end - card.scale.start) * progress;
      const translateY = card.translateY + (0 - card.translateY) * progress;

      // Apply transform using the .current property of the ref
      card.inner.current.style.transform = `scale(${scale}) translateY(${translateY}%)`;
    });
  }, [cards, isMobile]); // Dependency array for useCallback

  useEffect(() => {
    // Set initial transforms
    cards.forEach((card) => {
      if (card.inner.current) {
        card.inner.current.style.transform = `scale(${card.scale.start}) translateY(${card.translateY}px)`;
      }
    });

    // Create a throttled scroll handler
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateCardAnimations();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial update
    updateCardAnimations();

    // Add scroll listener
    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('resize', scrollHandler, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', scrollHandler);
    };
  }, [cards, updateCardAnimations]);

  // 5. Return the JSX (converted from your HTML)
  return (
    <>
      <div className="hero">
        <div>
          <h1>Scroll Down</h1>
          <p>Experience the stacking card animation</p>
        </div>
      </div>

      <div className="timeline-container" ref={timelineContainerRef}>
        <div className="card card-1" id="card1" ref={card1Ref}>
          <div className="card-inner" id="inner1" ref={inner1Ref}>
            <h2 className="card-title">ADDRESSING UNMET NEEDS</h2>
            <p className="card-description">
              We recognize the universal frustration: wasted time on temporary fixes, conflicting advice, and the constant threat of physical limitations that compromise your success. This compilation of unmet needs—from the failure to achieve certainty in pain management and effective sports rehabilitation to the lack of systemic control over diabetes/PCOD and the inability to achieve sports performance enhancement—is unacceptable. Our vision is to eliminate this failure. We deliver the definitive, strategic solution that guarantees permanent functional autonomy, ensuring your physical legacy is as robust and successful as your professional one.
            </p>
          </div>
        </div>

        <div className="card card-2" id="card2" ref={card2Ref}>
          <div className="card-inner" id="inner2" ref={inner2Ref}>
            <h2 className="card-title">ACHIEVING PAIN-FREE LIVING</h2>
            <p className="card-description">
              We understand the frustration of chronic pain—the belief that the discomfort is simply your "new normal" after cycling through generic, symptomatic treatments. This acceptance is the ultimate unmet need. Our protocol moves beyond modalities to guarantee functional restoration. We eliminate the pain cycle through precise Sports Rehabilitation and strategic Strength Training, ensuring you are not just treated, but optimized. The result is definitive: the physical autonomy to live, perform, and move without restriction.
            </p>
          </div>
        </div>

        <div className="card card-3" id="card3" ref={card3Ref}>
          <div className="card-inner" id="inner3" ref={inner3Ref}>
            <h2 className="card-title">UNLOCKING TRUE POTENTIAL</h2>
            <p className="card-description">
              True potential isn't just a goal; it's a strategic necessity that should not be compromised by physical plateau or metabolic challenge. We eliminate these barriers by fusing precise, science-based strength and conditioning and elevated sports performance enhancement with expert nutrition services (including diabetes/PCOD reversal). We go beyond generic training to deliver measurable performance gains and guaranteed functional health, ensuring you reclaim and surpass your baseline capabilities to maximize your physical longevity.
            </p>
          </div>
        </div>

        <div className="card card-4" id="card4" ref={card4Ref}>
          <div className="card-inner" id="inner4" ref={inner4Ref}>
            <h2 className="card-title">REDEFINING PAIN AND STRENGTH</h2>
            <p className="card-description">
              We redefine strength not as muscle mass, but as functional integrity—a resilient system built to support your success for life. Our protocols strategically integrate pain elimination and advanced sports rehabilitation with precision conditioning, turning former weaknesses into measurable competitive advantages. We ensure that the strength you build here becomes the unshakeable foundation of your physical legacy, allowing you to view every physical challenge not as a sentence, but as a roadmap to ultimate resilience and optimized athleticism.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <h2>The End</h2>
      </div> */}
    </>
  );
};

export default StackingCardsPage;
