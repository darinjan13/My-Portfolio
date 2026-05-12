/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, ChevronDown } from 'lucide-react';
import TextDecode from './ui/TextDecode';
import GlitchText from './ui/GlitchText';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pb-8 px-4 sm:px-6 overflow-hidden sm:mt-0">
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
        <div className="overflow-hidden mb-6 sm:mb-8">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-5xl sm:text-4xl md:text-7xl lg:text-9xl tracking-tighter leading-[0.85] uppercase"
          >
            <span className="text-white block"><TextDecode text="Full-Stack" /></span>
            <span className="text-gradient italic block pr-4 sm:pr-8"><TextDecode text="Developer" delay={200} /></span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 font-medium px-2"
        >
          Hi, I'm <span className="text-white">{PERSONAL_INFO.name}</span>. 
          I build <span className="text-brand-primary">high-performance</span> digital systems and <span className="text-brand-secondary">connected devices</span> for a software-driven future.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="px-8 sm:px-12 py-4 sm:py-6 bg-brand-primary text-black rounded-full font-bold flex items-center justify-center gap-2 group transition-all uppercase tracking-widest text-xs shadow-2xl shadow-brand-primary/20 active:scale-95"
          >
            <GlitchText>Start a Project</GlitchText>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#projects"
            className="px-8 sm:px-12 py-4 sm:py-6 glass text-white rounded-full font-bold border border-white/10 hover:bg-white/5 transition-all uppercase tracking-widest text-xs hover:scale-105 active:scale-95"
          >
            <GlitchText>View My Work</GlitchText>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
