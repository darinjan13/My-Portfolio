/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code2, Cpu, Globe, Rocket, Github, Linkedin, Mail, Twitter, Music, Film, Lock, HeartPulse } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Darin Jan Soriano",
  role: "Full-Stack Developer & AI Specialist",
  bio: "A results-driven Full-Stack Developer with a passion for building smart systems that connect AI models, IoT projects, and clean user interfaces. I specialize in turning complex ideas into performant, user-friendly digital experiences.",
  detailedBio: "My journey in tech is driven by a restless curiosity for how things work. Whether it's setting up IoT devices for smart monitoring or experimenting with Large Language Models, I approach every project with a focus on security, precision, and clean code. Based in the Philippines, I love collaborating on tools that make a real difference in how we interact with technology.",
  github: "https://github.com/darinjan13",
  email: "darinjan13@gmail.com",
  skills: [
    "TypeScript", "React", "Node.js", "PHP", "Laravel", "MySQL", "PostgreSQL", "Python", "FastAPI", "React Native", "Expo", "IoT", "ESP32", "Arduino", "Tailwind CSS", "Next.js", "Supabase", "Firebase", "Gemini AI"
  ]
};

export const PROJECTS = [
  {
    title: "LifeSights (AI Headcount)",
    description: "An AI-driven workforce management platform for automated headcount tracking and attendance analysis. Features advanced data visualization and AI-powered reporting for large-scale enterprise workbooks.",
    id: "daily-headcount-ai",
    icon: <Globe className="w-6 h-6" />,
    link: "https://github.com/darinjan13/daily-headcount-ai",
    liveLink: "https://headcount-ai.netlify.app/",
    links: [
      { name: "Frontend", url: "https://github.com/darinjan13/daily-headcount-ai" },
      { name: "Backend", url: "https://github.com/darinjan13/daily-headcount-ai-backend" }
    ],
    tags: ["AI", "FastAPI", "React", "Firebase"],
    details: {
      technologies: ["React", "FastAPI", "Python", "Gemini AI", "Firebase", "Tailwind CSS"],
      challenges: "Developing a system capable of processing and analyzing massive workforce workbooks with multi-level headers and inconsistent data formats.",
      solutions: "Engineered a flexible parsing engine with background AI analysis and used Firestore for real-time state synchronization across admin dashboards."
    }
  },
  {
    title: "WisEnergy Managed IoT",
    description: "A massive Full-Stack ecosystem for intelligent power monitoring and device management. Features a React-based user frontend, professional administrative dashboard, scalable backend, and custom-engineered IoT firmware with OTA capabilities.",
    id: "wisenergy-iot",
    icon: <Cpu className="w-6 h-6" />,
    link: "https://github.com/darinjan13/WisEnergy",
    links: [
      { name: "Frontend", url: "https://github.com/darinjan13/WisEnergy" },
      { name: "Backend", url: "https://github.com/darinjan13/WisEnergy-Backend" },
      { name: "IoT Firmware", url: "https://github.com/darinjan13/WisEnergy-IOT" },
      { name: "Admin Dashboard", url: "https://github.com/darinjan13/WisEnergyAdmin" }
    ],
    tags: ["Full-Stack", "IoT", "React", "Firebase", "OTA"],
    details: {
      technologies: ["React", "Node.js", "Express", "Firebase", "ESP32", "Arduino", "MQTT", "MySQL", "C++"],
      challenges: "Synchronizing real-time power telemetry across four distinct platforms while maintaining secure Over-The-Air (OTA) update safety.",
      solutions: "Engineered a centralized Firebase real-time bridge for state synchronization and implemented a robust ESP32 partition scheme for fail-safe OTA updates."
    }
  },
  {
    title: "Lifewood Data Hub",
    description: "The world's leading provider of AI-powered data solutions. A full-scale platform featuring AI candidate screening and automated data workflows.",
    id: "lifewood-platform",
    icon: <Rocket className="w-6 h-6" />,
    link: "https://github.com/darinjan13/Lifewood",
    liveLink: "https://lifewood-eight.vercel.app",
    links: [
      { name: "Frontend", url: "https://github.com/darinjan13/Lifewood" },
      { name: "Backend", url: "https://github.com/darinjan13/lifewood-backend" }
    ],
    tags: ["NestJS", "AI CV Scoring", "React", "Supabase"],
    details: {
      technologies: ["NestJS", "React", "Supabase", "Gemini AI", "Resend", "Tailwind CSS"],
      challenges: "Automatically extracting and scoring relevant skills from diverse, unformatted CV documents accurately.",
      solutions: "Integrated Gemini AI for semantic document parsing and implemented a custom scoring algorithm based on job requirements."
    }
  },
  {
    title: "MindWatch",
    description: "A mental health monitoring mobile application built with Expo and React Native. Designed to help users track emotional well-being and access support resources.",
    id: "mindwatch-app",
    icon: <HeartPulse className="w-6 h-6" />,
    link: "https://github.com/darinjan13/MindWatch",
    tags: ["Mobile", "Expo", "React Native"],
    details: {
      technologies: ["React Native", "Expo", "JavaScript", "Mobile UI Design"],
      challenges: "Developing a smooth mobile experience that prioritizes user privacy and emotional comfort.",
      solutions: "Leveraged Expo's high-level components for rapid prototyping and implemented a clean, calming UI theme."
    }
  },
  {
    title: "Lifewood AI ChatBot",
    description: "Intelligent conversational agent for the Lifewood ecosystem. Features advanced NLP for handling corporate inquiries and automated support workflows.",
    id: "lifewood-chatbot",
    icon: <Rocket className="w-6 h-6" />,
    link: "https://github.com/darinjan13/Lifewood-ChatBot",
    liveLink: "https://lifewood-chat-bot.vercel.app",
    tags: ["AI Studio", "React", "Gemini AI"],
    details: {
      technologies: ["React", "Gemini Pro API", "Vite", "Tailwind CSS"],
      challenges: "Ensuring context-aware responses while maintaining high performance during peak conversational traffic.",
      solutions: "Used state-managed conversation history and optimized prompt engineering for consistent corporate personality."
    }
  },
  {
    title: "Darin Music Player",
    description: "A cross-platform desktop and web music player built with React and Tauri. Features high-performance audio processing and a sleek, customizable UI.",
    id: "music-player",
    icon: <Music className="w-6 h-6" />,
    link: "https://github.com/darinjan13/Darin-Music-Player",
    tags: ["Tauri", "React", "Rust", "Desktop App"],
    details: {
      technologies: ["React", "Tauri", "Rust", "Web Audio API", "Lucide Icons"],
      challenges: "Building a bridge between JS-based UI and Rust backend for low-latency audio stream manipulation.",
      solutions: "Utilized Tauri's IPC for efficient command handling and Rust's audio libraries for core playback logic."
    }
  },
  {
    title: "MovieHub",
    description: "A feature-rich movie discovery platform with real-time API integrations.",
    id: "moviehub",
    icon: <Film className="w-6 h-6" />,
    link: "https://github.com/darinjan13/MovieHub",
    liveLink: "https://moviehub-darin.vercel.app",
    tags: ["API", "React", "Search"],
    details: {
      technologies: ["React", "TMDB API", "Axios", "Framer Motion"],
      challenges: "Creating a seamless searching and filtering experience with rapid UI updates from external data sources.",
      solutions: "Implemented debounced searches and optimistic UI updates to enhance perceived user experience."
    }
  },
  {
    title: "Netflix Clone",
    description: "Modern landing page and UI clone of the popular streaming platform.",
    id: "netflix-clone",
    icon: <Code2 className="w-6 h-6" />,
    link: "https://github.com/darinjan13/new-netflix-clone",
    liveLink: "https://darinjan13.netlify.app",
    tags: ["CSS", "Frontend", "UI/UX"],
    details: {
      technologies: ["React", "Firebase Auth", "Tailwind CSS"],
      challenges: "Replicating complex UI interactions and video preview behaviors with high visual fidelity.",
      solutions: "Carefully matched brand design tokens and used custom hooks for responsive media element handling."
    }
  }
];

export const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/darinjan13", icon: <Github className="w-5 h-5" /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/darin-jan-soriano-53355218b", icon: <Linkedin className="w-5 h-5" /> },
  { name: "Mail", href: "mailto:darinjan13@gmail.com", icon: <Mail className="w-5 h-5" /> }
];
