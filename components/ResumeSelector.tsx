'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';

export default function ResumeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredResume, setHoveredResume] = useState<string | null>(null);
  const { setTheme } = useTheme();

  const resumes = [
    {
      id: 'software',
      title: 'Software Engineering',
      file: '/Jaydyn_Davis_Software_Egineering_Resume.pdf',
      theme: 'green' as const,
      icon: '💻',
      description: 'Full-stack development & system design',
    },
    {
      id: 'blue-team',
      title: 'Blue Team / Defense',
      file: '/Jaydyn_Davis_BLUE_TEAM_Resume.pdf',
      theme: 'blue' as const,
      icon: '🛡️',
      description: 'SOC operations & threat detection',
    },
    {
      id: 'red-team',
      title: 'Red Team / Offense',
      file: '/Jaydyn_Davis_RED_TEAM_Resume.pdf',
      theme: 'red' as const,
      icon: '⚔️',
      description: 'Penetration testing & exploit development',
    },
  ];

  const handleHover = (resumeId: string, theme: 'green' | 'blue' | 'red') => {
    setHoveredResume(resumeId);
    setTheme(theme);
  };

  const handleLeave = () => {
    setHoveredResume(null);
    setTheme('green'); // Reset to default
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 border-2 border-[var(--cyber-primary)] text-[var(--cyber-primary)] font-mono font-bold hover:bg-[var(--cyber-primary)] hover:text-cyber-dark transition-all duration-300 neon-border"
      >
        <span className="flex items-center gap-2">
          📄 Resumes
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 z-50 min-w-[300px]"
            onMouseLeave={handleLeave}
          >
            <div className="bg-cyber-dark border-2 border-[var(--cyber-primary)] neon-border p-2">
              {resumes.map((resume, index) => (
                <motion.a
                  key={resume.id}
                  href={resume.file}
                  download
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => handleHover(resume.id, resume.theme)}
                  className={`block p-4 mb-2 last:mb-0 border border-[var(--cyber-primary)]/30 hover:border-[var(--cyber-primary)] transition-all group ${
                    hoveredResume === resume.id ? 'bg-[var(--cyber-primary)]/10' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{resume.icon}</span>
                    <div className="flex-1">
                      <div className="font-mono font-bold text-[var(--cyber-primary)] group-hover:text-[var(--cyber-primary-light)] transition-colors">
                        {resume.title}
                      </div>
                      <div className="text-sm text-[var(--cyber-primary)]/60 font-mono mt-1">
                        {resume.description}
                      </div>
                      <div className="text-xs text-[var(--cyber-primary)]/40 font-mono mt-2">
                        Click to download • Hover to preview theme
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
