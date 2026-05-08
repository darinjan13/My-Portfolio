/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import TechShowcase from './components/TechShowcase';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative selection:bg-brand-primary selection:text-black min-h-screen">
      <Background />
      {/* Custom Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left" 
        style={{ scaleX }} 
      />
      
      <Navbar />
      
      <div className="flex flex-col">
        <Hero />
        <AboutMe />
        <Projects />
        <Services />
        <TechShowcase />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}

