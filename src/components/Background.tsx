/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const [scanLineY, setScanLineY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLineY(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-surface-dark overflow-hidden">
      {/* Interactive Spotlight */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(800px circle at ${spotlightX.get()}px ${spotlightY.get()}px, rgba(0, 255, 156, 0.06), transparent 60%)`,
        }}
      />

      {/* Secondary spotlight - brand secondary color */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(500px circle at ${useTransform(spotlightX, v => v + 200).get()}px ${useTransform(spotlightY, v => v + 100).get()}px, rgba(0, 200, 255, 0.04), transparent 50%)`,
        }}
      />

      {/* Animated Gradient Blobs - More Dynamic */}
      <motion.div 
        animate={{
          x: [0, 150, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[15%] -left-[15%] w-[60%] h-[60%] bg-brand-primary/15 rounded-full blur-[150px]"
      />
      <motion.div 
        animate={{
          x: [0, -100, 0],
          y: [0, 120, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[10%] -right-[10%] w-[45%] h-[45%] bg-brand-secondary/12 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{
          x: [0, 80, 0],
          y: [0, -150, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-[15%] left-[10%] w-[70%] h-[60%] bg-brand-primary/8 rounded-full blur-[180px]"
      />
      {/* Additional accent blob */}
      <motion.div 
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-purple-500/8 rounded-full blur-[100px]"
      />

      {/* Scanning Grid Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-[1px] bg-brand-primary/30"
            animate={{ top: `${(scanLineY + i * 12) % 100}%` }}
            transition={{ duration: 0, repeatDelay: 0 }}
          />
        ))}
      </div>

      {/* Technical Grid Pattern - More detailed */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px'
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Animated floating geometric shapes - hidden for cleaner look */}

      {/* Radial gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(0, 255, 156, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 200, 255, 0.03) 0%, transparent 40%)
          `
        }}
      />
      
      {/* Noise/Grain Texture */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" />
      
      {/* Stronger Vignette */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-surface-dark/50" />
    </div>
  );
}
