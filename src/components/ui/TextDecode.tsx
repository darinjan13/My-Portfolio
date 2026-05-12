import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

interface TextDecodeProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextDecode({ text, className = '', delay = 0 }: TextDecodeProps) {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const originalText = text;
    let iterations = 0;
    const maxIterations = 10;
    
    const startAnimation = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(
          originalText
            .split('')
            .map((char, index) => {
              if (index < iterations) {
                return originalText[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );
        
        if (iterations >= originalText.length) {
          clearInterval(interval);
          setDisplayed(originalText);
        }
        
        iterations += 1/3;
      }, 30);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => {
      clearTimeout(startAnimation);
    };
  }, [text, delay]);
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayed || text}
    </motion.span>
  );
}