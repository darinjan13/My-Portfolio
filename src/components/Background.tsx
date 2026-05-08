/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export default function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 bg-surface-dark overflow-hidden">
      {/* Interactive Spotlight */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${spotlightX.get()}px ${spotlightY.get()}px, rgba(0, 255, 156, 0.08), transparent 80%)`,
        }}
      />

      {/* Mesh Gradient Blobs */}
      <motion.div 
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-primary/10 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] -right-[5%] w-[40%] h-[40%] bg-brand-secondary/10 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{
          x: [0, 50, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] left-[20%] w-[60%] h-[50%] bg-brand-primary/5 rounded-full blur-[150px]"
      />

      {/* Technical Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '150px 150px'
        }}
      />

      {/* Noise/Grain Texture (Using utility classes now) */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-surface-dark/40" />
    </div>
  );
}
