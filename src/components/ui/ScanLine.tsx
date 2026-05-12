import { motion } from 'motion/react';

interface ScanLineProps {
  className?: string;
}

export default function ScanLine({ className = '' }: ScanLineProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        initial={{ top: '-100%' }}
        whileInView={{ top: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'linear' }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"
      />
    </div>
  );
}