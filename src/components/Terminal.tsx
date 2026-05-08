/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';

const COMMANDS = {
  about: "Darin Jan Soriano — A Full-Stack Developer passionate about IoT, AI, and building technical solutions that matter.",
  tech: "React, Next.js, Node.js, PHP, Laravel, React Native, ESP32, Arduino, Gemini AI, Python.",
  status: "Available for new projects. Currently exploring hardware-software integrations.",
  location: "Cebu, Philippines.",
  contact: "darinjan13@gmail.com",
  help: "Available commands: about, tech, status, location, contact, help, clear"
};

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'cmd' | 'resp'; text: string }[]>([
    { type: 'resp', text: 'Welcome to Darin_Terminal v1.0.0' },
    { type: 'resp', text: 'Type "help" to see available commands.' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    const newHistory = [...history, { type: 'cmd' as const, text: `$ ${cmd}` }];

    if (cmd === 'clear') {
      setHistory([]);
    } else if (cmd in COMMANDS) {
      newHistory.push({ type: 'resp', text: COMMANDS[cmd as keyof typeof COMMANDS] });
      setHistory(newHistory);
    } else {
      newHistory.push({ type: 'resp', text: `Command not found: ${cmd}. Type "help" for options.` });
      setHistory(newHistory);
    }

    setInput('');
  };

  return (
    <div className="w-full font-mono text-sm bg-[#050505] rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-linear-to-b from-transparent via-brand-primary/[0.02] to-transparent animate-scanline" />
      <div className="absolute inset-0 pointer-events-none z-10 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,156,0.1),transparent_70%)]" />

      <div className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 border-b border-white/5 relative z-20">
        <div className="flex gap-1.5 font-bold">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/50" />
        </div>
        <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest ml-4 font-bold">
          <TerminalIcon className="w-3 h-3 text-brand-primary" />
          bash — system_status.sh — 80×24
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="p-6 h-[280px] overflow-y-auto custom-scrollbar flex flex-col gap-2 relative z-20"
      >
        {history.map((line, i) => (
          <div 
            key={i} 
            className={`leading-relaxed ${line.type === 'cmd' ? 'text-brand-primary font-bold' : 'text-gray-400'}`}
          >
            {line.text}
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex gap-2 text-brand-primary group">
          <span className="font-bold opacity-70 cursor-default">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-gray-200 placeholder:text-brand-primary/20"
            spellCheck="false"
            placeholder="Type a command..."
          />
        </form>
      </div>
    </div>
  );
}
