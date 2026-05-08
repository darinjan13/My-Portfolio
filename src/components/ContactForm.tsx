/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your environment variables.');
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full relative">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-12 rounded-[2rem] bg-brand-primary/[0.03] border border-brand-primary/20 flex flex-col items-center text-center gap-6 relative overflow-hidden diagnostic-corners"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,255,156,0.1),transparent_70%)]" />
            <div className="w-20 h-20 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary relative z-10">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold text-white tracking-tight mb-2 uppercase">Message Sent!</h3>
              <p className="text-gray-400 max-w-xs mx-auto text-sm leading-relaxed">
                Thank you for reaching out. I've received your message and will get back to you as soon as I can.
              </p>
            </div>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-4 px-8 py-3 rounded-full border border-white/10 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all relative z-10"
            >
              Send Another
            </button>
          </motion.div>
        ) : (
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between px-2">
                  <label className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-[0.3em]">Your Name</label>
                  <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Required</span>
                </div>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  placeholder="What should I call you?"
                  className="w-full px-6 py-5 rounded-2xl bg-white/[0.02] border border-white/5 text-white placeholder:text-gray-700 focus:outline-hidden focus:border-brand-primary/50 focus:bg-white/[0.04] transition-all font-sans text-sm tracking-wide"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between px-2">
                  <label className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-[0.3em]">Your Email</label>
                  <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Required</span>
                </div>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="Where should I reply?"
                  className="w-full px-6 py-5 rounded-2xl bg-white/[0.02] border border-white/5 text-white placeholder:text-gray-700 focus:outline-hidden focus:border-brand-primary/50 focus:bg-white/[0.04] transition-all font-sans text-sm tracking-wide"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between px-2">
                <label className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-[0.3em]">Subject</label>
              </div>
              <input 
                type="text" 
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full px-6 py-5 rounded-2xl bg-white/[0.02] border border-white/5 text-white placeholder:text-gray-700 focus:outline-hidden focus:border-brand-primary/50 focus:bg-white/[0.04] transition-all font-sans text-sm tracking-wide"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between px-2">
                <label className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-[0.3em]">Message</label>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/20 animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/20 animate-pulse delay-75" />
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/20 animate-pulse delay-150" />
                </div>
              </div>
              <textarea 
                name="message"
                required
                rows={5}
                placeholder="How can I help you? Feel free to share details about your project."
                className="w-full px-6 py-5 rounded-2xl bg-white/[0.02] border border-white/5 text-white placeholder:text-gray-700 focus:outline-hidden focus:border-brand-primary/50 focus:bg-white/[0.04] transition-all resize-none font-sans text-sm tracking-wide leading-relaxed"
              />
            </div>

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-red-500/5 border border-red-500/20 text-red-500 text-xs font-mono font-bold uppercase tracking-wider"
              >
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p>Error sending message: {errorMessage}</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative group overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-brand-primary group-hover:scale-105 transition-transform duration-500" />
              <div className="relative py-6 flex items-center justify-center gap-4 text-black font-black uppercase tracking-[0.3em] text-xs">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
            
            <div className="flex items-center justify-center text-[8px] font-mono font-bold text-gray-600 uppercase tracking-widest px-2 pt-2">
              <span className="text-brand-primary/30">Connect with me today</span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
