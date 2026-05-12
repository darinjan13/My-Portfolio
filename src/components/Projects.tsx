/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Cpu, AlertCircle, CheckCircle2, X, Globe } from 'lucide-react';
import ScanLine from './ui/ScanLine';
import GlitchText from './ui/GlitchText';


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="pt-6 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-2xl md:text-5xl mb-6 tracking-tight">
              FEATURED <span className="text-gray-500 italic">PROJECTS</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              A collection of work ranging from AI-powered tracking systems for daily operations to complex IoT energy management dashboards.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              TAP TO EXPLORE DETAILS
            </span>
          </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch"
        >
          {PROJECTS.map((project) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { 
                    opacity: 1, 
                    y: 0, 
                    transition: {
                      duration: 0.8,
                      ease: [0.21, 0.45, 0.32, 0.9]
                    }
                  }
                }}
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col p-5 md:p-6 rounded-3xl bg-surface-card tech-border transition-all duration-500 cursor-pointer overflow-hidden min-h-[240px]"
              >
                <ScanLine />
                <div className="flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-dark border border-surface-border flex items-center justify-center text-brand-primary shrink-0">
                      {project.icon}
                    </div>
                    <div className="text-gray-500">
                      <Github className="w-4 h-4" />
                    </div>
                  </div>

                  <GlitchText>
                    <h3 className="font-display font-bold text-lg md:text-xl mb-2 tracking-tight">
                      {project.title}
                    </h3>
                  </GlitchText>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-2 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-surface-dark border border-surface-border text-[9px] font-mono text-gray-500 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-primary uppercase tracking-widest">
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>

                    {project.liveLink ? (
                      <span className="text-[10px] font-mono text-brand-primary uppercase">Live</span>
                    ) : (
                      <span className="text-[10px] font-mono text-transparent">Live</span>
                    )}
                  </div>
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  damping: 25,
                  stiffness: 200,
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.9, 
                y: 20,
                transition: { duration: 0.2 }
              }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-surface-card tech-border rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-4 border-b border-white/5 flex items-center justify-between shrink-0 bg-surface-card/50 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-dark border border-surface-border flex items-center justify-center text-brand-primary">
                    {selectedProject.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all z-20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto custom-scrollbar flex-1">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-surface-dark border border-surface-border text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-xl text-gray-300 leading-relaxed mb-12">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xs font-mono text-brand-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                          <Cpu className="w-4 h-4" />
                          Technologies Involved
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.details.technologies.map(tech => (
                            <span key={tech} className="text-xs font-medium text-gray-100 bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 rounded-lg">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                        <h4 className="text-xs font-mono text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          The Challenge
                        </h4>
                        <p className="text-gray-400 leading-relaxed italic">
                          "{selectedProject.details.challenges}"
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
                        <h4 className="text-xs font-mono text-green-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          The Solution
                        </h4>
                        <p className="text-gray-200 leading-relaxed">
                          {selectedProject.details.solutions}
                        </p>
                      </div>
                    </div>

                    <div className="bg-surface-dark/50 border border-surface-border rounded-3xl p-8 flex flex-col h-fit">
                      <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-surface-border pb-4">RESOURCES & LINKS</h4>
                      <div className="space-y-4">
                        {/* Live Link Primary Action */}
                        {'liveLink' in selectedProject && (selectedProject as any).liveLink && (
                          <a 
                            href={(selectedProject as any).liveLink}
                            target="_blank"
                            rel="no-referrer"
                            className="flex items-center justify-between p-5 rounded-2xl bg-brand-primary text-black transition-all group/live shadow-xl"
                          >
                            <div className="flex items-center gap-3">
                              <Globe className="w-5 h-5" />
                              <span className="font-bold text-lg">Live Demo</span>
                            </div>
                            <ExternalLink className="w-5 h-5 opacity-50 group-hover/live:opacity-100" />
                          </a>
                        )}

                        <div className="grid grid-cols-1 gap-3">
                          {'links' in selectedProject ? (
                            (selectedProject as any).links?.map((linkObj: any) => (
                              <a 
                                key={linkObj.url}
                                href={linkObj.url}
                                target="_blank"
                                rel="no-referrer"
                                className="flex items-center justify-between p-4 rounded-xl bg-surface-card border border-surface-border hover:border-brand-primary transition-all group/link"
                              >
                                <div className="flex items-center gap-3">
                                  {linkObj.url.includes('github.com') ? (
                                    <Github className="w-5 h-5 text-gray-400 group-hover/link:text-brand-primary" />
                                  ) : (
                                    <Globe className="w-5 h-5 text-gray-400 group-hover/link:text-brand-primary" />
                                  )}
                                  <span className="font-medium text-white">{linkObj.name}</span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-600 group-hover/link:text-brand-primary" />
                              </a>
                            ))
                          ) : (
                            <>
                              <a 
                                href={selectedProject.link}
                                target="_blank"
                                rel="no-referrer"
                                className="flex items-center justify-between p-4 rounded-xl bg-surface-card border border-surface-border hover:border-brand-primary transition-all group/link"
                              >
                                <div className="flex items-center gap-3">
                                  {selectedProject.link.includes('github.com') ? (
                                    <Github className="w-5 h-5 text-gray-400 group-hover/link:text-brand-primary" />
                                  ) : (
                                    <Globe className="w-5 h-5 text-gray-400 group-hover/link:text-brand-primary" />
                                  )}
                                  <span className="font-medium text-white">
                                    {selectedProject.link.includes('github.com') ? 'Source Code' : 'Project Link'}
                                  </span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-gray-600 group-hover/link:text-brand-primary" />
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
