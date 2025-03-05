import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // Track hover state

  const handleMouseEnterInteractive = () => setIsHovering(true);
  const handleMouseLeaveInteractive = () => setIsHovering(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };

    const handleMouseLeave = () => setCursorVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseout', handleMouseLeave);

    document.querySelectorAll('button, a, input, textarea').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseout', handleMouseLeave);
      document.querySelectorAll('button, a, input, textarea').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);


  // Don't render on touch devices
  const isTouchDevice = window.matchMedia("(hover: none)").matches;
  if (isTouchDevice) return null;


  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          opacity: cursorVisible ? 1 : 0,
          scale: cursorVisible ? 1 : 0.01, // Prevent Safari rendering issues
        }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="cursor-outline"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          borderColor: isHovering ? 'rgb(0, 95, 247)' : 'rgba(59, 130, 246, 0.5)',
          borderWidth: isHovering ? 2.25 : 2,
        }}
        animate={{
          opacity: cursorVisible ? 1 : 0,
          scale: cursorVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, delay: 0.05 }}
      />
    </>
  );
};

export default CustomCursor;