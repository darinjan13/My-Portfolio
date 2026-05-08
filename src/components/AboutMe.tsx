/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import Terminal from './Terminal';

export default function AboutMe() {
  return (
    <section id="about" className="pt-12 pb-6 px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group border border-white/5">
              <img 
                src={`/profile_picture.png?v=${Date.now()}`} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-dark via-transparent to-transparent opacity-80" />
            </div>

            {/* Diagnostic Marks */}
            <div className="absolute -top-6 -left-6 font-mono text-[10px] text-brand-primary/20 flex flex-col items-start gap-1">
              <span>TRK_ID: 99x_SORIANO</span>
              <span>LENS: OPTIC_Z</span>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-brand-primary/30" />
                <h4 className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-[0.5em]">System_Profile</h4>
              </div>
              <h2 className="font-display font-bold text-5xl md:text-8xl mb-10 tracking-tighter uppercase leading-[0.9]">
                Software <br />
                <span className="text-gradient italic">Craftsmanship</span>
              </h2>
              
              <div className="space-y-8 text-gray-400 text-lg leading-relaxed max-w-2xl font-medium">
                <p>
                  {PERSONAL_INFO.bio}
                </p>
                <div className="p-6 border-l border-brand-primary/20 bg-white/[0.01] italic text-gray-500 text-base">
                  "{PERSONAL_INFO.detailedBio}"
                </div>
              </div>
            </motion.div>

            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">Local_Terminal_Output</span>
                <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest font-bold animate-pulse">Running</span>
              </div>
              <div className="diagnostic-corners">
                <Terminal />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
