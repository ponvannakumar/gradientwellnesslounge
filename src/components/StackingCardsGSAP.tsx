import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./StackingCardsGSAP.css";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: 1,
    title: "ADDRESSING UNMET NEEDS",
    desc: `We recognize the universal frustration: wasted time on temporary fixes, conflicting advice, and the constant threat of physical limitations that compromise your success. This compilation of unmet needs—from the failure to achieve certainty in pain management and effective sports rehabilitation to the lack of systemic control over diabetes/PCOD and the inability to achieve sports performance enhancement—is unacceptable. Our vision is to eliminate this failure. We deliver the definitive, strategic solution that guarantees permanent functional autonomy, ensuring your physical legacy is as robust and successful as your professional one.`,
    video: "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",
  },
  {
    number: 2,
    title: "ACHIEVING PAIN-FREE LIVING",
    desc: `We understand the frustration of chronic pain—the belief that the discomfort is simply your \"new normal\" after cycling through generic, symptomatic treatments. This acceptance is the ultimate unmet need. Our protocol moves beyond modalities to guarantee functional restoration. We eliminate the pain cycle through precise Sports Rehabilitation and strategic Strength Training, ensuring you are not just treated, but optimized. The result is definitive: the physical autonomy to live, perform, and move without restriction.`,
    video: "https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4",
  },
  {
    number: 3,
    title: "UNLOCKING TRUE POTENTIAL",
    desc: `True potential isn't just a goal; it's a strategic necessity that should not be compromised by physical plateau or metabolic challenge. We eliminate these barriers by fusing precise, science-based strength and conditioning and elevated sports performance enhancement with expert nutrition services (including diabetes/PCOD reversal). We go beyond generic training to deliver measurable performance gains and guaranteed functional health, ensuring you reclaim and surpass your baseline capabilities to maximize your physical longevity.`,
    video: "https://videos.pexels.com/video-files/4328514/4328514-uhd_2560_1440_30fps.mp4",
  },
  {
    number: 4,
    title: "REDEFINING PAIN AND STRENGTH",
    desc: `We redefine strength not as muscle mass, but as functional integrity—a resilient system built to support your success for life. Our protocols strategically integrate pain elimination and advanced sports rehabilitation with precision conditioning, turning former weaknesses into measurable competitive advantages. We ensure that the strength you build here becomes the unshakeable foundation of your physical legacy, allowing you to view every physical challenge not as a sentence, but as a roadmap to ultimate resilience and optimized athleticism.`,
    video: "https://videos.pexels.com/video-files/10178127/10178127-uhd_2560_1440_30fps.mp4",
  },
];

const StackingCardsGSAP: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const wrapper = section.querySelector(".wrapper");
    if (!wrapper) return;

    const items = wrapper.querySelectorAll<HTMLElement>(".item");
    if (items.length === 0) return;

    items.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { yPercent: 100 });
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: `+=${(items.length - 1) * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    if (isMobile) {
      items.forEach((item, index) => {
        const nextItem = items[index + 1];
        if (nextItem) {
          timeline.to(nextItem, { yPercent: 0 });
        }
      });
    } else {
      items.forEach((item, index) => {
        const nextItem = items[index + 1];
        if (nextItem) {
          timeline
            .to(item, {
              scale: 0.9,
              borderRadius: "10px",
            })
            .to(nextItem, { yPercent: 0 }, "<");
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      timeline.kill();
    };
  }, [isMobile]);

  return (
    <>
      <div className="scroll-section vertical-section section" ref={sectionRef}>
        <div className="wrapper">
          <div className="list">
            {cards.map((card) => (
              <div className="item" key={card.number}>
                <div className="item_content">
                  <h2 className="item_number">{card.number}</h2>
                  <h2 className="card-title-responsive">{card.title}</h2>
                  <p className="item_p card-desc-responsive">{card.desc}</p>
                </div>
                {!isMobile && (
                  <video
                    src={card.video}
                    autoPlay
                    muted
                    loop
                    className="item_media"
                  ></video>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="stacking-cards-bottom-gap"></div>
    </>
  );
};

export default StackingCardsGSAP;
