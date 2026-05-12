import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const BOOT_SEQUENCE = [
  { text: "> INITIALIZING KERNEL...", delay: 0 },
  { text: "> LOADING NEURAL INTERFACE...", delay: 100 },
  { text: "> CALIBRATING DISPLAY MODULES...", delay: 200 },
  { text: "> MOUNTING VIRTUAL FILESYSTEM...", delay: 300 },
  { text: "> CONNECTING TO GRID...", delay: 400 },
  { text: "SYSTEM ONLINE", delay: 500, isFinal: true },
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeLine = () => {
      if (lineIndex >= BOOT_SEQUENCE.length) return;

      const line = BOOT_SEQUENCE[lineIndex];

      if (line.isFinal) {
        setDisplayedLines(prev => [...prev, line.text]);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 500);
        }, 400);
        return;
      }

      if (charIndex === 0) {
        setCurrentLine("");
      }

      if (charIndex < line.text.length) {
        setCurrentLine(line.text.slice(0, charIndex + 1));
        charIndex++;
        timeoutId = setTimeout(typeLine, 15 + Math.random() * 10);
      } else {
        setDisplayedLines(prev => [...prev, line.text]);
        setCurrentLine("");
        charIndex = 0;
        lineIndex++;
        timeoutId = setTimeout(typeLine, 50 + Math.random() * 50);
      }
    };

    setTimeout(typeLine, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-[100] bg-surface-dark flex items-center justify-center"
    >
      <div className="w-full max-w-2xl px-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-4 h-4 rounded-full bg-red-500/30" />
          <div className="w-4 h-4 rounded-full bg-yellow-500/30" />
          <div className="w-4 h-4 rounded-full bg-brand-primary/60" />
        </div>
        
        <div className="font-mono text-xl space-y-2 min-h-[200px]">
          {displayedLines.map((text, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={idx === displayedLines.length - 1 && text === "SYSTEM ONLINE" 
                ? "text-brand-primary font-bold text-2xl" 
                : "text-gray-400"}
            >
              {text}
            </motion.div>
          ))}
          
          {currentLine && (
            <div className="text-brand-primary">
              {currentLine}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.3, repeat: Infinity }}
              >
                █
              </motion.span>
            </div>
          )}
        </div>

        <div className="mt-8 h-0.5 bg-brand-primary/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-brand-primary"
            initial={{ width: "0%" }}
            animate={{ width: isComplete ? "100%" : `${(displayedLines.length / (BOOT_SEQUENCE.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}