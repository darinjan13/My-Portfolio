/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';

const SKILLS_CATEGORIES = [
  {
    name: "Full-Stack & Cloud",
    skills: ["TypeScript", "React", "Node.js", "PHP", "Laravel", "Python", "MySQL / Postgres", "Supabase / Firebase"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "AI & Mobile",
    skills: ["Gemini AI", "NLP", "React Native", "Expo", "Computer Vision", "Vite", "Axios"],
    color: "from-brand-primary/20 to-emerald-500/20"
  },
  {
    name: "IoT & Systems",
    skills: ["C++", "Arduino", "ESP32", "MQTT", "Tauri", "Rust", "Hardware Integration"],
    color: "from-orange-500/20 to-red-500/20"
  }
];

export default function Skills() {
  const marqueeItems = [...Array(12)].map((_, i) => (
    <span
      key={i}
      className="mx-8 text-6xl md:text-8xl font-display font-black text-white/20 uppercase tracking-tighter italic"
    >
      {PERSONAL_INFO.name.split(' ')[0]}
    </span>
  ));

  return (
    <section id="skills" className="min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-2xl md:text-5xl mb-6 tracking-tight uppercase">
            TECHNICAL <span className="text-brand-primary italic">ARSENAL</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            A diverse set of technologies utilized to build efficient, scalable, and intelligent applications across different domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: i * 0.1
                  }
                }
              }}
              className="group p-8 rounded-3xl bg-surface-card border border-surface-border relative overflow-hidden"
            >
              <h3 className="font-display font-bold text-xl mb-8 tracking-wide uppercase text-gray-300">
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-surface-dark border border-surface-border text-sm font-medium text-gray-400 group-hover:text-white group-hover:border-white/20 transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Marquee/Line effect */}
      <div className="mt-20 border-y border-surface-border">
        <div className="marquee-fade overflow-hidden py-10">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {marqueeItems}
            {marqueeItems}
          </div>
        </div>
      </div>
    </section>
  );
}
