/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Cpu, Brain, Layout, Activity, Zap, ShieldCheck } from 'lucide-react';

const ECOSYSTEM_DATA = [
  {
    id: 'iot',
    title: 'The Edge (IoT)',
    icon: <Cpu className="w-8 h-8" />,
    description: 'Experimenting with hardware firmware and sensors for real-time monitoring and automation.',
    tech: ['ESP32', 'Arduino', 'C++', 'MQTT'],
    accent: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30'
  },
  {
    id: 'ai',
    title: 'The Brain (AI)',
    icon: <Brain className="w-8 h-8" />,
    description: 'Integrating intelligent features into apps using LLMs like Gemini and computer vision models.',
    tech: ['Gemini AI', 'Python', 'FastAPI', 'Node.js'],
    accent: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30'
  },
  {
    id: 'fullstack',
    title: 'The Bridge (Full-Stack)',
    icon: <Layout className="w-8 h-8" />,
    description: 'Crafting responsive web and mobile interfaces that tie the entire project ecosystem together.',
    tech: ['React', 'Next.js', 'Expo', 'Laravel'],
    accent: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30'
  }
];

export default function TechShowcase() {
  return (
    <section className="pt-12 pb-12 px-6 relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-[0.5em] mb-6"
            >
              BUILD ARCHITECTURE
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display font-bold text-3xl md:text-6xl lg:text-8xl tracking-tighter uppercase leading-[0.9]"
            >
              Hardware-Software <br />
              <span className="text-brand-primary italic">Convergence</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4 max-w-sm"
          >
            <div className="h-0.5 w-12 bg-brand-primary" />
            <p className="text-gray-400 text-lg font-medium leading-relaxed italic">
              "I translate complex requirements into elegant code that lives in both our screens and our spaces."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative">
          {ECOSYSTEM_DATA.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group relative p-10 rounded-[3rem] bg-surface-dark border border-white/5 overflow-hidden hover:border-brand-primary/30 transition-all duration-700 diagnostic-corners"
            >
              {/* Subtle Scanline Overlay on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-linear-to-b from-transparent via-brand-primary/[0.02] to-transparent animate-scanline" />
              
              {/* Card Content */}
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-[2rem] bg-white/[0.02] border border-white/5 flex items-center justify-center text-brand-primary mb-10 group-hover:bg-brand-primary/10 transition-all duration-500">
                  {item.icon}
                </div>

                <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-6 uppercase tracking-tight leading-none">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 mb-10 leading-relaxed font-medium">
                  {item.description}
                </p>

                <div className="space-y-4">
                  <div className="text-[10px] font-mono font-bold text-brand-primary/50 uppercase tracking-[0.2em]">Technology Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono font-bold text-white uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Edge Diagnostic Number */}
              <div className="absolute bottom-10 right-10 block font-mono text-[80px] font-bold text-white/[0.02] pointer-events-none group-hover:text-brand-primary/[0.05] transition-colors leading-none">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
