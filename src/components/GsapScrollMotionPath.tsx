import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const ScrollAnimation: React.FC = () => {
  const linesvgRef = useRef<SVGSVGElement>(null);
  const motionSVGRef = useRef<SVGGElement>(null);
  const glowingPointRef = useRef<SVGGElement>(null);
  const motionPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!linesvgRef.current || !motionSVGRef.current || !glowingPointRef.current || !motionPathRef.current) return;

    gsap.set(linesvgRef.current, { opacity: 1 });
    gsap.set(motionSVGRef.current, { scale: 0.7, autoAlpha: 1 });
    gsap.set(glowingPointRef.current, { transformOrigin: "50% 50%" });

    let rotateTo = gsap.quickTo(glowingPointRef.current, "rotation");
    let prevDirection = 0;

    gsap.to(motionSVGRef.current, {
      scrollTrigger: {
        trigger: motionPathRef.current,
        start: "top center",
        end: () => "+=" + motionPathRef.current!.getBoundingClientRect().height * 1.5,
        scrub: 0.5,
        markers: false,
        onUpdate: (self) => {
          if (prevDirection !== self.direction) {
            rotateTo(self.direction === 1 ? 0 : -180);
            prevDirection = self.direction;
          }

          let progress = self.progress;

          gsap.to("#text1", { opacity: progress > 0.10 && progress < 0.25 ? 1 : 0, duration: 0.3 });
          gsap.to("#text2", { opacity: progress > 0.25 && progress < 0.40 ? 1 : 0, duration: 0.3 });
          gsap.to("#text3", { opacity: progress > 0.40 && progress < 0.55 ? 1 : 0, duration: 0.3 });
          gsap.to("#text4", { opacity: progress > 0.55 && progress < 0.70 ? 1 : 0, duration: 0.3 });
          gsap.to("#text5", { opacity: progress > 0.70 && progress < 0.85 ? 1 : 0, duration: 0.3 });
          gsap.to("#text6", { opacity: progress >= 1 ? 1 : 0, duration: 0.3 });
        }
      },
      ease: pathEase(motionPathRef.current),
      immediateRender: true,
      motionPath: {
        path: motionPathRef.current,
        align: motionPathRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: 90,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  function pathEase(path: SVGPathElement, config: any = {}) {
    const linearEase = (p: number) => p; // Define linearEase at the beginning

    let axis = config.axis || "y",
      precision = config.precision || 1,
      rawPath = MotionPathPlugin.cacheRawPathMeasurements(
        MotionPathPlugin.getRawPath(path),
        Math.round(precision * 12)
      ),
      useX = axis === "x",
      start = rawPath[0][useX ? 0 : 1],
      end = rawPath[rawPath.length - 1][rawPath[rawPath.length - 1].length - (useX ? 2 : 1)],
      range = end - start;

    if (range === 0) {
      return linearEase; // Return early if range is 0
    }

    let l = Math.round(precision * 200),
      inc = 1 / l,
      positions = [0],
      a = [0],
      minIndex = 0,
      smooth = [0],
      minChange = (1 / l) * 0.6,
      smoothRange = config.smooth === true ? 7 : Math.round(config.smooth) || 0,
      fullSmoothRange = smoothRange * 2,
      getClosest = (p: number) => {
        while (positions[minIndex] <= p && minIndex++ < l) { }
        a.push((p - positions[minIndex - 1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc);
        smoothRange && a.length > smoothRange && (a[a.length - 1] - a[a.length - 2] < minChange) && smooth.push(a.length - smoothRange);
      },
      i = 1;

    for (; i < l; i++) {
      const positionOnPath = MotionPathPlugin.getPositionOnPath(rawPath, i / l)[axis as "x" | "y"];
      console.log("positionOnPath:", positionOnPath, "start:", start, "range:", range, "axis:", axis); // Added console log

      positions[i] = (positionOnPath - start) / range; // No need for range === 0 check here anymore
      console.log("positions[i]:", positions[i]); // Added console log
    }
    positions[l] = 1;
    for (i = 0; i < l; i++) {

      getClosest(i / l);
    }
    a.push(1);
    if (smoothRange) {
      smooth.push(l - fullSmoothRange + 1);
      smooth.forEach(i => {
        let start = a[i],
          j = Math.min(i + fullSmoothRange, l),
          inc = (a[j] - start) / (j - i),
          c = 1;
        i++;
        for (; i < j; i++) {
          a[i] = start + inc * c++;
        }
      });
    }
    l = a.length - 1;
    return (p: number) => {
      let i = p * l,
        s = a[i | 0];
      return i ? s + (a[Math.ceil(i)] - s) * (i % 1) : 0;
    }
  }

  return (
    <div style={{ margin: 0, padding: 0, background: '#f6e5cf' }}>
      <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        <svg
          ref={linesvgRef}
          id="linesvg"
          opacity="0"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 869 3002"
          xmlSpace="preserve"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <style type="text/css">
            {`.st0{fill:none;stroke:#800020;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .path-text{font-family:'Arial',sans-serif;font-size:24px;font-weight:bold;fill:#800020;opacity:0;}`}
          </style>
          <path
            ref={motionPathRef}
            id="motionPath"
            className="st0"
            d="M155.395,383.31 C152.773,390.548 145,570 210,660 360,750 620,710 640,860 660,1010 150,990 150,1140 150,1290 640,1270 640,1390 640,1560 190,1550 190,1690 190,1860 620,1840 620,1960 620,2060 230,2080 230,2080"
          />

          <text id="text1" className="path-text" x="80" y="660" textAnchor="end">Addressing Unmet needs</text>
          <text id="text2" className="path-text" x="720" y="860" textAnchor="start">Achieving Pain free living</text>
          <text id="text3" className="path-text" x="70" y="1140" textAnchor="end">Elevating Athleticism</text>
          <text id="text4" className="path-text" x="720" y="1390" textAnchor="start">Unlocking True Potential</text>
          <text id="text5" className="path-text" x="100" y="1690" textAnchor="end">Leading Pain to Performance</text>
          <text id="text6" className="path-text" x="330" y="2160" textAnchor="middle">Redefining Strength and Fitness</text>

          <g ref={motionSVGRef} id="motionSVG">
            <defs>
              <radialGradient id="glowGradient">
                <stop offset="0%" style={{ stopColor: '#ffff00', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#ffdd00', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#ffaa00', stopOpacity: 0 }} />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g ref={glowingPointRef} id="glowingPoint">
              <circle cx="41.5" cy="30" r="30" fill="url(#glowGradient)" filter="url(#glow)" opacity="0.6" />
              <circle cx="41.5" cy="30" r="18" fill="#ffff00" filter="url(#glow)" />
              <circle cx="41.5" cy="30" r="12" fill="#ffffaa" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ScrollAnimation;
