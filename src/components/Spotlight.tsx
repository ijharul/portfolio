"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 500 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 opacity-50"
      style={{
        background: useTransform(
          [springX, springY],
          ([x, y]) => `radial-gradient(600px at ${x}px ${y}px, rgba(124, 58, 237, 0.15), transparent 80%)`
        ),
      }}
    />
  );
}

