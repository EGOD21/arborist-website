"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ▼ update if you add/remove PNG slices */
const PARTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // tree_1.png … tree_N.png

export default function SideTreeChop() {
  const sliceRefs = useRef<(HTMLImageElement | null)[]>([]);

  useLayoutEffect(() => {
    sliceRefs.current = sliceRefs.current.slice(0, PARTS.length);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "0% top",
        end: "100% bottom",
        scrub: 2.5, // Much smoother scrub
        ease: "none",
      },
    });

    // Tree felling animation - sections fall and become horizontal
    PARTS.forEach((_, i) => {
      const delay = i * 1.2; // More spread for smoother progression
      
      // Phase 1: Initial tilt and separation (tree being cut)
      tl.to(
        sliceRefs.current[i],
        {
          rotation: 15 + i * 5,
          x: 20 + i * 10,
          y: i * 15,
          duration: 1.5, // Longer duration for smoothness
          ease: "power1.inOut", // Smoother easing
        },
        delay
      )
      // Phase 2: Major fall - becoming horizontal
      .to(
        sliceRefs.current[i],
        {
          rotation: 90,
          x: 100 + i * 40,
          y: 150 + i * 80,
          scale: 0.8,
          duration: 3, // Much longer for smooth fall
          ease: "power1.inOut", // Smoother gravity effect
        },
        delay + 1.5
      )
      // Phase 3: Final settling on ground
      .to(
        sliceRefs.current[i],
        {
          rotation: 90 + (Math.random() - 0.5) * 10,
          y: `+=${30 + Math.random() * 20}`,
          x: `+=${10 + Math.random() * 20}`,
          scale: 0.7,
          opacity: 0.3,
          duration: 1.5, // Longer settle time
          ease: "power1.out", // Gentler bounce
        },
        delay + 4.5
      )
      // Phase 4: Complete fade out
      .to(
        sliceRefs.current[i],
        {
          opacity: 0,
          duration: 1, // Slower fade
          ease: "power1.inOut",
        },
        delay + 6
      );
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      id="tree-parts-wrapper"
      className="
        fixed bottom-0
        flex flex-col items-end
        pointer-events-none
        z-[9999]
      "
      style={{
        height: "auto",
        width: "35vw",
        maxWidth: "520px",
        right: "-5%",
        transform: "translateY(10%)",
        gap: "0", // Remove any gaps
        lineHeight: "0", // Remove line height spacing
      }}
    >
      {PARTS.map((n, idx) => (
        <img
          key={n}
          ref={el => (sliceRefs.current[idx] = el)}
          src={`/tree_parts/tree_${n}.png?v=${Date.now()}`}
          alt={`tree slice ${n}`}
          style={{
            width: "100%",
            height: "8vh",
            display: "block",
            objectFit: "cover", // Cover instead of contain to eliminate gaps
            margin: "0",
            padding: "0",
            verticalAlign: "top", // Align to top to prevent baseline gaps
          }}
        />
      ))}
    </div>
  );
}
