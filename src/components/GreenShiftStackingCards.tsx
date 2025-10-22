import React, { useEffect, useRef } from 'react';
import './GreenShiftStackingCards.css';

const GreenShiftStackingCards: React.FC = () => {
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = [
      { element: cardRefs.current[0], inner: cardRefs.current[0]?.querySelector('.card-inner'), scale: { start: 0.85, end: 1 }, translateY: 0 },
      { element: cardRefs.current[1], inner: cardRefs.current[1]?.querySelector('.card-inner'), scale: { start: 0.88, end: 1 }, translateY: 0 },
      { element: cardRefs.current[2], inner: cardRefs.current[2]?.querySelector('.card-inner'), scale: { start: 0.91, end: 1 }, translateY: 0 },
      { element: cardRefs.current[3], inner: cardRefs.current[3]?.querySelector('.card-inner'), scale: { start: 0.94, end: 1 }, translateY: 0 },
    ];

    const timelineContainer = timelineContainerRef.current;
    if (!timelineContainer) return;

    const animationRange = 300;

    const updateCardAnimations = () => {
      const triggerStart = window.innerHeight / 2;
      const scrollY = window.scrollY;
      const containerTop = timelineContainer.offsetTop;

      cards.forEach((card) => {
        if (!card.element || !card.inner) return;

        const cardTop = card.element.offsetTop + containerTop;
        const triggerPoint = cardTop - triggerStart;
        const scrollProgress = scrollY - triggerPoint;
        let progress = Math.max(0, Math.min(1, scrollProgress / animationRange));

        const scale = card.scale.start + (card.scale.end - card.scale.start) * progress;
        const translateY = card.translateY + (0 - card.translateY) * progress;

        (card.inner as HTMLElement).style.transform = `scale(${scale}) translateY(${translateY}%)`;
      });
    };

    cards.forEach((card) => {
      if (card.inner) {
        (card.inner as HTMLElement).style.transform = `scale(${card.scale.start}) translateY(${card.translateY}%)`;
      }
    });

    window.addEventListener('scroll', updateCardAnimations);
    updateCardAnimations();

    return () => {
      window.removeEventListener('scroll', updateCardAnimations);
    };
  }, []);

  return (
    <div className="timeline-container" ref={timelineContainerRef}>
      <div className="card card-1" ref={(el) => (cardRefs.current[0] = el)}>
        <div className="card-inner">
          <h2 className="card-title">ADDRESSING UNMET NEEDS</h2>
          <p className="card-description">We recognize the universal frustration: wasted time on temporary fixes, conflicting advice, and the constant threat of physical limitations that compromise your success. This compilation of unmet needs—from the failure to achieve certainty in pain management and effective sports rehabilitation to the lack of systemic control over diabetes/PCOD and the inability to achieve sports performance enhancement—is unacceptable. Our vision is to eliminate this failure. We deliver the definitive, strategic solution that guarantees permanent functional autonomy, ensuring your physical legacy is as robust and successful as your professional one.</p>
        </div>
      </div>
      <div className="card card-2" ref={(el) => (cardRefs.current[1] = el)}>
        <div className="card-inner">
          <h2 className="card-title">ACHIEVING PAIN-FREE LIVING</h2>
          <p className="card-description">We understand the frustration of chronic pain—the belief that the discomfort is simply your "new normal" after cycling through generic, symptomatic treatments. This acceptance is the ultimate unmet need. Our protocol moves beyond modalities to guarantee functional restoration. We eliminate the pain cycle through precise Sports Rehabilitation and strategic Strength Training, ensuring you are not just treated, but optimized. The result is definitive: the physical autonomy to live, perform, and move without restriction.</p>
        </div>
      </div>
      <div className="card card-3" ref={(el) => (cardRefs.current[2] = el)}>
        <div className="card-inner">
          <h2 className="card-title">UNLOCKING TRUE POTENTIAL</h2>
          <p className="card-description">True potential isn't just a goal; it's a strategic necessity that should not be compromised by physical plateau or metabolic challenge. We eliminate these barriers by fusing precise, science-based strength and conditioning and elevated sports performance enhancement with expert nutrition services (including diabetes/PCOD reversal). We go beyond generic training to deliver measurable performance gains and guaranteed functional health, ensuring you reclaim and surpass your baseline capabilities to maximize your physical longevity.</p>
        </div>
      </div>
      <div className="card card-4" ref={(el) => (cardRefs.current[3] = el)}>
        <div className="card-inner">
          <h2 className="card-title">REDEFINING PAIN AND STRENGTH</h2>
          <p className="card-description">We redefine strength not as muscle mass, but as functional integrity—a resilient system built to support your success for life. Our protocols strategically integrate pain elimination and advanced sports rehabilitation with precision conditioning, turning former weaknesses into measurable competitive advantages. We ensure that the strength you build here becomes the unshakeable foundation of your physical legacy, allowing you to view every physical challenge not as a sentence, but as a roadmap to ultimate resilience and optimized athleticism.</p>
        </div>
      </div>
    </div>
  );
};

export default GreenShiftStackingCards;
