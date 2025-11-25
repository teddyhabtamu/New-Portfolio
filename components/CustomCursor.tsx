import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor: React.FC = () => {
  const cursorSize = 22;

  // Raw mouse values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 1. TWEAKED: Increased damping and decreased stiffness for more lag/smoothness
  const smoothX = useSpring(mouseX, { damping: 45, stiffness: 120 }); 
  const smoothY = useSpring(mouseY, { damping: 45, stiffness: 120 });

  // Scale spring for hover effect
  // 2. TWEAKED: Decreased damping for a slightly snappier scale transition
  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, { damping: 20, stiffness: 250 }); 

  useEffect(() => {
    let ticking = false;

    // rAF throttled pointer move
    const handleMove = (e: PointerEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          mouseX.set(e.clientX - cursorSize / 2);
          mouseY.set(e.clientY - cursorSize / 2);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleHover = (e: Event) => {
      const target = e.target as HTMLElement;

      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.classList.contains("cursor-pointer");

      // Maintain scale change for interactive elements
      scale.set(isInteractive ? 3.5 : 1); 
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY, scale]);

  return (
    <motion.div
      // 3. TWEAKED: Added slight opacity (bg-gray-800/80) to the cursor for a lighter visual feel
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-gray-800/80 hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        scale: scaleSpring,
        width: cursorSize,
        height: cursorSize,
      }}
    />
  );
};

export default CustomCursor;