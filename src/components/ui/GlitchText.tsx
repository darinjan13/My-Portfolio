import React, { useState } from 'react';
import { motion } from 'motion/react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? { x: [0, -2, 2, -1, 1, 0] } : { x: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {isHovered && (
        <>
          <motion.span
            className="absolute inset-0 text-brand-primary opacity-50"
            animate={{ 
              clipPath: ['inset(0 0 0 0)', 'inset(2px 0 2px 0)', 'inset(0 0 0 0)'] 
            }}
            transition={{ duration: 0.15, repeat: 2 }}
            style={{ 
              mixBlendMode: 'screen',
              transform: 'translateX(-2px)'
            }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-brand-secondary opacity-50"
            animate={{ 
              clipPath: ['inset(0 0 0 0)', 'inset(-2px 0 -2px 0)', 'inset(0 0 0 0)'] 
            }}
            transition={{ duration: 0.15, repeat: 2 }}
            style={{ 
              mixBlendMode: 'screen',
              transform: 'translateX(2px)'
            }}
          >
            {children}
          </motion.span>
        </>
      )}
    </motion.span>
  );
}