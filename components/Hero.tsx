'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [floatingCubes, setFloatingCubes] = useState<Array<{
    id: number;
    size: number;
    left: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    setIsLoaded(true);
    // Generate cubes only on client to avoid hydration mismatch
    setFloatingCubes(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        size: Math.random() * 60 + 20,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
      }))
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Cubes Background - Hidden on Mobile */}
      {floatingCubes.length > 0 && (
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {floatingCubes.map((cube) => (
            <motion.div
              key={cube.id}
              className="absolute border"
              style={{
                width: cube.size,
                height: cube.size,
                left: `${cube.left}%`,
                top: `${(cube.id * 7) % 100}%`,
                transform: 'rotate(45deg)',
                borderColor: 'var(--cyber-primary)',
                opacity: 0.2,
              }}
              animate={{
                y: [0, -100, 0],
                rotate: [45, 135, 45],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: cube.duration,
                delay: cube.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
      >
        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-9xl font-display font-black mb-4 relative"
        >
          <span className="glitch neon-text" data-text="JAYDYN">
            JAYDYN
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-display font-black mb-8"
          style={{ color: 'var(--cyber-primary-light)' }}
        >
          DAVIS
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-4 mb-12">
          <p className="text-xl md:text-2xl font-mono" style={{ color: 'var(--cyber-primary)', opacity: 0.8 }}>
            Computer Science & Cybersecurity Student
          </p>
          <p className="text-lg font-mono" style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}>
            Minor in Finance • Hofstra University
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
            <span style={{ color: 'var(--cyber-primary-light)' }}>
              &#91; SOFTWARE ENGINEERING &#93;
            </span>
            <span style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}>|</span>
            <span style={{ color: 'var(--cyber-primary-light)' }}>
              &#91; OFFENSIVE SECURITY &#93;
            </span>
            <span style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}>|</span>
            <span style={{ color: 'var(--cyber-primary-light)' }}>
              &#91; DEFENSIVE SECURITY &#93;
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-transparent border-2 font-mono font-bold hover:bg-[var(--cyber-primary)] hover:text-cyber-dark transition-all duration-300 neon-border relative overflow-hidden"
            style={{ borderColor: 'var(--cyber-primary)', color: 'var(--cyber-primary)' }}
          >
            <span className="relative z-10">VIEW PROJECTS</span>
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 border-2 font-mono font-bold hover:bg-transparent transition-all duration-300 relative overflow-hidden"
            style={{
              backgroundColor: 'var(--cyber-primary)',
              borderColor: 'var(--cyber-primary)',
              color: 'var(--cyber-dark)',
            }}
          >
            <span className="relative z-10">CONTACT ME</span>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center gap-6"
        >
          <a
            href="https://github.com/jaydaVis04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--cyber-primary-light)] transition-colors"
            style={{ color: 'var(--cyber-primary)' }}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jaydyn-davis-51b31b288"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--cyber-primary-light)] transition-colors"
            style={{ color: 'var(--cyber-primary)' }}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
        </a>
      </motion.div>
    </motion.div>
  </section>
  );
}
