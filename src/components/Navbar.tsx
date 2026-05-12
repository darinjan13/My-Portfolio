/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(item => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) return;

    const aboutSection = document.querySelector('#about');
    const updateActiveSection = () => {
      if (aboutSection instanceof HTMLElement && aboutSection.getBoundingClientRect().top > 160) {
        setActiveSection('');
        return;
      }

      const active = sections
        .map(section => ({
          id: section.id,
          distance: Math.abs(section.getBoundingClientRect().top - 120),
        }))
        .sort((a, b) => a.distance - b.distance)[0];

      setActiveSection(active?.id ?? '');
    };

    const observer = new IntersectionObserver(
      updateActiveSection,
      {
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach(section => observer.observe(section));
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-12 py-4 lg:py-6 transition-all duration-500">
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 ${
        scrolled 
          ? 'glass rounded-full px-6 lg:px-8 py-2.5 lg:py-3 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/10' 
          : 'bg-transparent px-6 lg:px-8 py-4 border-transparent'
      }`}>
        <motion.a 
          href="#"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-4 group"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
              <span className="font-display font-black text-brand-primary italic text-xl relative z-10 leading-none">D</span>
              <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {/* diagnostic dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_10px_#00FF9C]" />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="font-display font-black text-sm tracking-[0.3em] text-white uppercase leading-none">
              Darin Jan
            </span>
            <span className="font-mono text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none">
              Node_v2.0
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-2">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
                className={`relative px-5 py-2 text-xs font-mono font-bold uppercase tracking-[0.2em] transition-all group/nav rounded-full focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-primary/60 ${
                  activeSection === item.href.slice(1)
                    ? 'text-brand-primary'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className={`absolute inset-0 rounded-full transition-transform duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'scale-100 bg-brand-primary/10 border border-brand-primary/20'
                      : 'scale-0 bg-white/[0.03] group-hover/nav:scale-100'
                  }`}
                />
              </motion.a>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-6 pl-10 border-l border-white/10"
          >
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank" 
                rel="no-referrer"
                className="text-gray-500 hover:text-brand-primary transition-all scale-90 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="lg:hidden absolute top-16 left-4 right-4 bg-surface-dark/98 backdrop-blur-3xl rounded-[2rem] p-6 flex flex-col gap-1 border border-white/10 shadow-2xl"
          >
            {navItems.map((item, i) => (
              <motion.a 
                key={item.name} 
                href={item.href} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
                aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
                className={`text-xs font-mono font-bold p-4 rounded-2xl uppercase tracking-[0.2em] transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-primary/60 ${
                  activeSection === item.href.slice(1)
                    ? 'text-brand-primary bg-brand-primary/10 border border-brand-primary/20'
                    : 'text-gray-400 hover:text-brand-primary hover:bg-brand-primary/5 border border-transparent'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex justify-center gap-8 pt-6 mt-4 border-t border-white/5">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="no-referrer" className="text-gray-500 hover:text-brand-primary transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
