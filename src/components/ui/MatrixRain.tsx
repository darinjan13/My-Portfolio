import { useEffect, useRef } from 'react';

const NAME = "DARINJANSORIANO";

interface MatrixRainProps {
  opacity?: number;
}

export default function MatrixRain({ opacity = 1 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let intervalId: NodeJS.Timeout;
    let drops: number[] = [];
    let columnChars: string[] = [];
    let columnTrails: string[][] = [];
    const fontSize = 16;
    const trailCount = 15;
    const fontFace = '14px monospace';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.font = fontFace;
      const columnCount = Math.floor(canvas.width / fontSize) + 50;
      drops = [];
      for (let i = 0; i < columnCount; i++) {
        drops[i] = -Math.floor(Math.random() * 100) - Math.floor(Math.random() * 50);
      }
      columnChars = Array(columnCount).fill(null).map(() => NAME[Math.floor(Math.random() * NAME.length)]);
      columnTrails = Array(columnCount).fill(null).map(() => 
        Array(trailCount).fill(null).map(() => NAME[Math.floor(Math.random() * NAME.length)])
      );
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontFace;
      
      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        for (let t = 0; t < trailCount; t++) {
          const trailY = y - (t * fontSize);
          if (trailY > 0 && trailY < canvas.height) {
            // Each trail character can change randomly too
            if (Math.random() > 0.9) {
              columnTrails[i][t] = NAME[Math.floor(Math.random() * NAME.length)];
            }
            const alpha = 1 - (t / trailCount);
            ctx.fillStyle = `rgba(120, 255, 120, ${Math.max(alpha * 0.95, 0.08)})`;
            ctx.fillText(columnTrails[i][t], x, trailY);
          }
        }

        ctx.shadowColor = '#7CFF7C';
        ctx.shadowBlur = 12;
        ctx.fillStyle = '#C8FFC8';
        ctx.fillText(columnChars[i], x, y);
        ctx.shadowBlur = 0;

        // Only shift trail when leading changes
        if (Math.random() > 0.97) {
          columnChars[i] = NAME[Math.floor(Math.random() * NAME.length)];
          for (let t = trailCount - 1; t > 0; t--) {
            columnTrails[i][t] = columnTrails[i][t - 1];
          }
          columnTrails[i][0] = columnChars[i];
        }

        if (y > canvas.height) {
          drops[i] = -Math.floor(Math.random() * 100) - 50;
          columnChars[i] = NAME[Math.floor(Math.random() * NAME.length)];
          columnTrails[i] = Array(trailCount).fill(null).map(() => NAME[Math.floor(Math.random() * NAME.length)]);
        }
        drops[i] += 1;
      }
    };

    resize();
    window.addEventListener('resize', resize);
    intervalId = setInterval(draw, 80);

    return () => {
      window.removeEventListener('resize', resize);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ opacity }}
    />
  );
}
