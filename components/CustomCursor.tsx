import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor: React.FC = () => {
  const cursorSize = 22;

  // Raw mouse values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Much smoother spring physics
  const smoothX = useSpring(mouseX, { damping: 35, stiffness: 180 });
  const smoothY = useSpring(mouseY, { damping: 35, stiffness: 180 });

  // Scale spring for hover effect
  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, { damping: 25, stiffness: 250 });

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

      scale.set(isInteractive ? 3.2 : 1);
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
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white hidden md:block"
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
