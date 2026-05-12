/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import TechShowcase from './components/TechShowcase';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import FloatingChars from './components/ui/FloatingChars';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative selection:bg-brand-primary selection:text-black min-h-screen"
        >
          <Background />
          <FloatingChars count={15} />
          
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}