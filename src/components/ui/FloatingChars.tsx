import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const CHARS = ['{', '}', '<', '>', '/', '\\', '[', ']', '=', '+', '-', '*', '_', '|'];

interface Particle {
  id: number;
  x: number;
  y: number;
  char: string;
  duration: number;
  delay: number;
}

interface FloatingCharsProps {
  count?: number;
}

export default function FloatingChars({ count = 20 }: FloatingCharsProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      char: CHARS[Math.floor(Math.random() * CHARS.length)],
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [count]);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-[10px] font-mono text-brand-primary/10"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          animate={{
            y: [0, -100, -200],
            x: [0, 20, -20, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {particle.char}
        </motion.div>
      ))}
    </div>
  );
}