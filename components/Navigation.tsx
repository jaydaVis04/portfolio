'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import ResumeSelector from './ResumeSelector';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 14, 13, 0)', 'rgba(10, 14, 13, 0.95)']
  );

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--cyber-primary)]/20 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-display font-black"
            style={{ color: 'var(--cyber-primary-light)' }}
            whileHover={{ scale: 1.05 }}
          >
            &#60;JD /&#62;
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', 'Labs', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono hover:text-[var(--cyber-primary-light)] transition-colors relative group"
                style={{ color: 'var(--cyber-primary)' }}
              >
                {item}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'var(--cyber-primary-light)' }}
                />
              </a>
            ))}
            <ResumeSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            style={{ color: 'var(--cyber-primary)' }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 block transition-all"
                style={{ backgroundColor: 'var(--cyber-primary)' }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 block transition-all"
                style={{ backgroundColor: 'var(--cyber-primary)' }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 block transition-all"
                style={{ backgroundColor: 'var(--cyber-primary)' }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-cyber-dark border-t border-[var(--cyber-primary)]/20"
      >
        <div className="px-4 py-4 space-y-4">
          {['About', 'Experience', 'Labs', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block font-mono hover:text-[var(--cyber-primary-light)] transition-colors"
              style={{ color: 'var(--cyber-primary)' }}
            >
              {item}
            </a>
          ))}
          <div className="pt-2">
            <ResumeSelector />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
