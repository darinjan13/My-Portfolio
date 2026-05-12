import React from 'react';
import { motion } from 'motion/react';

interface BorderDrawProps {
  children: React.ReactNode;
  className?: string;
}

export default function BorderDraw({ children, className = '' }: BorderDrawProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ scaleX: 0, scaleY: 0 }}
        whileInView={{ scaleX: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute inset-0 border border-brand-primary/30 rounded-3xl pointer-events-none"
        style={{ transformOrigin: 'center' }}
      />
      {children}
    </div>
  );
}