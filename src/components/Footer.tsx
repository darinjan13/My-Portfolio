/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Mail, ArrowUpRight } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative pt-6 pb-10 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">
          {/* Top Left: Heading */}
          <div className="lg:col-span-5 order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-6xl mb-8 tracking-tighter uppercase leading-[0.9]">
                LET'S BUILD <br />
                <span className="text-brand-primary italic">SOMETHING</span> <br />
                <span className="relative">
                  GREAT
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-2 left-0 right-0 h-2 bg-brand-primary/20 origin-left"
                  />
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-0 max-w-sm leading-relaxed">
                Open for collaborations in AI integration, Full-Stack development, and IoT solutions. Let's turn your vision into reality.
              </p>
            </motion.div>
          </div>

          {/* Top Right / Middle Mobile: Contact Form */}
          <div className="lg:col-span-7 lg:row-span-2 order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative bg-white/[0.01]"
            >
              <div className="absolute top-8 left-8 w-12 h-12 rounded-full bg-brand-primary/5 blur-xl" />
              <ContactForm />
            </motion.div>
          </div>

          {/* Bottom Left / Bottom Mobile: Links */}
          <div className="lg:col-span-5 order-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <h4 className="text-[10px] font-mono text-brand-primary uppercase tracking-[0.3em] mb-4 font-bold">NAVIGATION</h4>
                <nav className="flex flex-col gap-2">
                  {['Projects', 'Skills', 'Experience'].map((item) => (
                    <a 
                      key={item} 
                      href={`#${item.toLowerCase()}`} 
                      className="text-sm font-medium text-gray-400 hover:text-white transition-all hover:translate-x-1"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-brand-primary uppercase tracking-[0.3em] mb-4 font-bold">SOCIALS</h4>
                <div className="flex flex-col gap-2">
                  {SOCIAL_LINKS.map(link => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      target="_blank"
                      rel="no-referrer"
                      className="text-sm font-medium text-gray-400 hover:text-white transition-all hover:translate-x-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface-card border border-white/5 flex items-center justify-center font-display font-bold text-brand-primary italic">
              D
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">
                &copy; {currentYear} {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">
                All Rights Reserved
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8 text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">
            <span className="hover:text-brand-primary transition-colors cursor-default">Frontend</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span className="hover:text-brand-primary transition-colors cursor-default">Backend</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span className="hover:text-brand-primary transition-colors cursor-default">AI</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span className="hover:text-brand-primary transition-colors cursor-default">IoT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
