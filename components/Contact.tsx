'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:jaydyndavis04@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${formState.message}`;
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: 'Email',
      value: 'jaydyndavis04@gmail.com',
      link: 'mailto:jaydyndavis04@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: 'GitHub',
      value: 'jaydaVis04',
      link: 'https://github.com/jaydaVis04',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'Jaydyn Davis',
      link: 'https://www.linkedin.com/in/jaydyn-davis-51b31b288',
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 px-4" style={{ backgroundColor: 'rgba(0, 255, 65, 0.02)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4 neon-text">
            &#60;CONTACT /&#62;
          </h2>
          <div className="w-32 h-1 mb-12" style={{ backgroundColor: 'var(--cyber-primary)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-display font-bold mb-6" style={{ color: 'var(--cyber-primary-light)' }}>
              GET IN TOUCH
            </h3>
            <p className="font-mono mb-8 leading-relaxed" style={{ color: 'var(--cyber-primary)', opacity: 0.8 }}>
              I'm currently seeking internship opportunities in cybersecurity and software engineering.
              Feel free to reach out if you'd like to connect!
            </p>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 border neon-border hover:border-[var(--cyber-primary)]/60 transition-all group"
                  style={{ borderColor: 'var(--cyber-primary)', borderWidth: '1px', opacity: 0.3 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="group-hover:scale-110 transition-transform" style={{ color: 'var(--cyber-primary-light)' }}>
                    {method.icon}
                  </div>
                  <div>
                    <p className="font-mono text-sm" style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}>
                      {method.label}
                    </p>
                    <p className="font-mono font-bold" style={{ color: 'var(--cyber-primary)' }}>
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-6 border neon-border"
              style={{ borderColor: 'var(--cyber-primary)', borderWidth: '1px', opacity: 0.3 }}
            >
              <h4 className="font-display font-bold mb-3" style={{ color: 'var(--cyber-primary-light)' }}>
                AVAILABILITY
              </h4>
              <p className="font-mono" style={{ color: 'var(--cyber-primary)', opacity: 0.8 }}>
                Open to internships and opportunities
              </p>
              <p className="font-mono text-sm mt-2" style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}>
                Remote, hybrid, or on-site positions
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-display font-bold mb-6" style={{ color: 'var(--cyber-primary-light)' }}>
              SEND A MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono mb-2" style={{ color: 'var(--cyber-primary)' }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border font-mono focus:outline-none neon-border transition-all"
                  style={{
                    borderColor: 'var(--cyber-primary)',
                    borderWidth: '1px',
                    opacity: 0.3,
                    color: 'var(--cyber-primary)',
                  }}
                  placeholder="John Doe"
                  onFocus={(e) => (e.target.style.opacity = '1')}
                  onBlur={(e) => (e.target.style.opacity = '0.3')}
                />
              </div>

              <div>
                <label className="block font-mono mb-2" style={{ color: 'var(--cyber-primary)' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border font-mono focus:outline-none neon-border transition-all"
                  style={{
                    borderColor: 'var(--cyber-primary)',
                    borderWidth: '1px',
                    opacity: 0.3,
                    color: 'var(--cyber-primary)',
                  }}
                  placeholder="john@example.com"
                  onFocus={(e) => (e.target.style.opacity = '1')}
                  onBlur={(e) => (e.target.style.opacity = '0.3')}
                />
              </div>

              <div>
                <label className="block font-mono mb-2" style={{ color: 'var(--cyber-primary)' }}>
                  Message
                </label>
                <textarea
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border font-mono focus:outline-none neon-border transition-all resize-none"
                  style={{
                    borderColor: 'var(--cyber-primary)',
                    borderWidth: '1px',
                    opacity: 0.3,
                    color: 'var(--cyber-primary)',
                  }}
                  placeholder="Your message here..."
                  onFocus={(e) => (e.target.style.opacity = '1')}
                  onBlur={(e) => (e.target.style.opacity = '0.3')}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 font-mono font-bold border-2 transition-all duration-300 group relative overflow-hidden hover:bg-transparent"
                style={{
                  backgroundColor: 'var(--cyber-primary)',
                  borderColor: 'var(--cyber-primary)',
                  color: 'var(--cyber-dark)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--cyber-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--cyber-primary)';
                  e.currentTarget.style.color = 'var(--cyber-dark)';
                }}
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
