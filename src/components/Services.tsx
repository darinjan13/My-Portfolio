/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Monitor, Cpu, Smartphone, Rocket, ChevronRight } from 'lucide-react';
import ScanLine from './ui/ScanLine';
import GlitchText from './ui/GlitchText';


const SERVICES = [
  {
    title: "Web App Development",
    description: "Building fast, SEO-friendly, and responsive web applications using modern frameworks like React and Next.js.",
    icon: <Monitor className="w-6 h-6" />,
    features: ["Performance Optimized", "Admin Dashboards", "REST/GraphQL APIs"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Mobile Solutions",
    description: "Crafting cross-platform mobile experiences for iOS and Android using React Native and Expo.",
    icon: <Smartphone className="w-6 h-6" />,
    features: ["Native Performance", "User-Centric UX", "Offline Support"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "AI & Automation",
    description: "Integrating intelligent features from Large Language Models (LLMs) to automate and enhance your workflows.",
    icon: <Rocket className="w-6 h-6" />,
    features: ["NLP Integration", "Custom Chatbots", "AI-Driven Insights"],
    color: "from-brand-primary/20 to-emerald-500/20"
  },
  {
    title: "IoT Prototypes",
    description: "Designing end-to-end hardware-software systems for monitoring and real-time data control.",
    icon: <Cpu className="w-6 h-6" />,
    features: ["Microcontroller Firmware", "Sensor Integration", "Real-time Dashboards"],
    color: "from-orange-500/20 to-red-500/20"
  }
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen px-6 pt-32 pb-20 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.4em] mb-4"
          >
            Capabilities
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-2xl md:text-5xl tracking-tighter uppercase mb-6"
          >
            How I can <span className="text-brand-primary italic">help you</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Turning complex technical requirements into elegant, high-performance digital solutions that drive results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SERVICES.map((service, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="tech-border p-5 md:p-6 rounded-3xl bg-surface-card group h-full flex flex-col justify-between min-h-[220px] overflow-hidden"
              >
                <ScanLine />
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className={`p-4 rounded-2xl bg-linear-to-br ${service.color} text-brand-primary shrink-0 w-fit`}>
                    {service.icon}
                  </div>
                  
                  <div className="flex-1">
                    <GlitchText>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                        {service.title}
                      </h3>
                    </GlitchText>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs font-mono font-bold text-white/40">
                          <div className="w-1 h-1 rounded-full bg-brand-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-brand-primary flex flex-col md:flex-row items-center justify-between gap-8 text-surface-dark overflow-hidden relative"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 bg-noise pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-xl md:text-4xl font-display font-bold tracking-tight uppercase leading-none mb-4">
              Have a project <br className="hidden md:block" /> in mind?
            </h3>
            <p className="text-surface-dark/80 font-medium max-w-md">
              Whether you're looking for a prototype or a full-scale application, I'm here to help you build it right.
            </p>
          </div>

          <a 
            href="#contact"
            className="relative z-10 w-full md:w-auto px-10 py-5 bg-surface-dark text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-2xl text-center"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
