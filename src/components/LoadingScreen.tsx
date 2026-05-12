import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const BOOT_SEQUENCE = [
  { text: "> INITIALIZING DARIN JAN PORTFOLIO...", delay: 0 },
  { text: "> LOADING FULL-STACK SYSTEMS...", delay: 100 },
  { text: "> SYNCING AI WORKFLOWS...", delay: 200 },
  { text: "> CONNECTING IOT INTERFACES...", delay: 300 },
  { text: "> PREPARING FEATURED PROJECTS...", delay: 400 },
  { text: "PORTFOLIO ONLINE", delay: 500, isFinal: true },
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
        }, 2200);
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-dark"
    >
      <div className="w-full max-w-2xl px-12">
        <div className="rounded-[2rem] border border-brand-primary/30 bg-surface-card/70 px-8 py-8 shadow-[0_0_40px_rgba(0,255,156,0.08)]">
          <div className="mb-10 flex items-center gap-4 border-b border-white/5 pb-6">
            <div className="h-4 w-4 rounded-full bg-red-500/30" />
            <div className="h-4 w-4 rounded-full bg-yellow-500/30" />
            <div className="h-4 w-4 rounded-full bg-brand-primary/60" />
          </div>

          <div className="min-h-[200px] space-y-2 font-mono text-xl">
            {displayedLines.map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={
                  idx === displayedLines.length - 1 && text === "SYSTEM ONLINE"
                    ? "text-2xl font-bold text-brand-primary"
                    : "text-gray-400"
                }
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
        </div>
      </div>
    </motion.div>
  );
}
