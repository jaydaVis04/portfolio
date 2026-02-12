'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/jaydaVis04/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(() => {});
  }, []);

  const featured = [
    { title: 'Phishing Analysis Pipeline', desc: 'Automated phishing detection using AI, threat intelligence, and VM sandbox', tech: ['Python', 'Multipass', 'VirusTotal'], link: 'https://github.com/jaydaVis04', type: 'Security' },
    { title: 'SecPipe', desc: 'Security telemetry pipeline with MITRE ATT&CK detection rules', tech: ['Python', 'SQLite', 'MITRE ATT&CK'], link: 'https://github.com/jaydaVis04', type: 'Security' },
    { title: 'jLedger', desc: 'Personal finance platform with JWT refresh tokens and RBAC', tech: ['TypeScript', 'Node.js', 'PostgreSQL'], link: 'https://github.com/jaydaVis04', type: 'Full-Stack' },
  ];

  return (
    <section id="projects" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4 neon-text"></h2>
          <div className="w-32 h-1 mb-12" style={{ backgroundColor: 'var(--cyber-primary)' }} />
        </motion.div>

        <h3 className="text-3xl font-display font-bold mb-8" style={{ color: 'var(--cyber-primary-light)' }}>FEATURED WORK</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featured.map((p, i) => (
            <motion.a key={i} href={p.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }} className="border p-6 neon-border hover:border-[var(--cyber-primary)] hover:scale-105 transition-all group" style={{ borderColor: 'var(--cyber-primary)', opacity: 0.3 }}>
              <div className="flex justify-between mb-4">
                <h4 className="text-xl font-display font-bold group-hover:text-gradient" style={{ color: 'var(--cyber-primary-light)' }}>{p.title}</h4>
                <span className="px-2 py-1 border text-xs font-mono" style={{ borderColor: 'var(--cyber-primary)', color: 'var(--cyber-primary)' }}>{p.type}</span>
              </div>
              <p className="font-mono text-sm mb-4" style={{ color: 'var(--cyber-primary)', opacity: 0.8 }}>{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">{p.tech.map(t => <span key={t} className="px-2 py-1 border text-xs font-mono" style={{ borderColor: 'var(--cyber-primary)', opacity: 0.3, color: 'var(--cyber-primary)' }}>{t}</span>)}</div>
              <div className="flex items-center font-mono text-sm" style={{ color: 'var(--cyber-primary-light)' }}>View Project <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-display font-bold" style={{ color: 'var(--cyber-primary-light)' }}>GITHUB ACTIVITY</h3>
          <a href="https://github.com/jaydaVis04" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono transition-colors" style={{ color: 'var(--cyber-primary)' }}><span>View All</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {repos.slice(0, 6).map((repo: any, i) => (
            <motion.a key={i} href={repo.html_url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="border p-6 neon-border hover:border-[var(--cyber-primary)] transition-all" style={{ borderColor: 'var(--cyber-primary)', opacity: 0.3 }}>
              <h4 className="text-lg font-mono font-bold mb-3" style={{ color: 'var(--cyber-primary)' }}>{repo.name}</h4>
              <p className="font-mono text-sm mb-4 line-clamp-2" style={{ color: 'var(--cyber-primary)', opacity: 0.7 }}>{repo.description || 'No description'}</p>
              <div className="flex items-center justify-between text-xs font-mono">
                {repo.language && <span style={{ color: 'var(--cyber-primary)', opacity: 0.8 }}>{repo.language}</span>}
                <div className="flex gap-3" style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}><span>★ {repo.stargazers_count}</span><span>⑂ {repo.forks_count}</span></div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
