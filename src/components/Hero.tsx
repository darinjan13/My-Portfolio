/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Magnetic from './ui/Magnetic';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute -bottom-1/4 left-1/4 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl text-center flex flex-col items-center relative z-10"
      >
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="mb-10 px-5 py-2 rounded-full border border-white/5 glass text-[10px] font-mono font-bold tracking-[0.3em] text-brand-primary uppercase flex items-center gap-3"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
          </div>
          ACTIVE SYSTEMS — STATUS_STABLE — v2.4.0
        </motion.div>

        <div className="overflow-hidden mb-8">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-6xl md:text-9xl lg:text-[10rem] tracking-tighter leading-[0.85] uppercase"
          >
            <span className="text-white block">Full-Stack</span>
            <span className="text-gradient italic block">Developer</span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed mb-12 font-medium"
        >
          Hi, I'm <span className="text-white">{PERSONAL_INFO.name}</span>. 
          I build <span className="text-brand-primary">high-performance</span> digital systems and <span className="text-brand-secondary">connected devices</span> for a software-driven future.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Magnetic>
            <a
              href="#contact"
              className="px-12 py-6 bg-brand-primary text-black rounded-full font-bold flex items-center gap-2 group transition-all uppercase tracking-widest text-xs shadow-2xl shadow-brand-primary/20 hover:scale-105 active:scale-95"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Magnetic>
          
          <a
            href="#projects"
            className="px-12 py-6 glass text-white rounded-full font-bold border border-white/10 hover:bg-white/5 transition-all uppercase tracking-widest text-xs hover:scale-105 active:scale-95"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/[0.03] hidden lg:block" />
    </section>
  );
}
