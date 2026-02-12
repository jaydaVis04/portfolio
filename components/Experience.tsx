'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

type WorkExperience = {
  kind: 'work';
  title: string;
  company: string;
  period: string;
  desc: string;
};

type ProjectExperience = {
  kind: 'project';
  title: string;
  type: string;
  desc: string;
  tech: string[];
};

type Experiences = {
  work: WorkExperience[];
  projects: ProjectExperience[];
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences: Experiences = {
    work: [
      {
        kind: 'work',
        title: 'STEM Teacher',
        company: 'Snapology',
        period: 'Jan 2024 - Present',
        desc: 'Lead STEM instruction for 100+ students using LEGO robotics',
      },
      {
        kind: 'work',
        title: 'Floater',
        company: 'Sid Jacobson JCC',
        period: 'Sep 2025 - Present',
        desc: 'Assisted teachers and supervised small groups for smooth classroom operations',
      },
      {
        kind: 'work',
        title: 'Coding Coach',
        company: 'The Coder School',
        period: 'Mar 2023 - Nov 2023',
        desc: 'Mentored 100+ students in Python & Scratch through project-based learning',
      },
      {
        kind: 'work',
        title: 'Customer Service Associate',
        company: 'Floor & Decor',
        period: 'Sep 2023 - Dec 2023',
        desc: 'Assisted customers with purchases, maintained organized areas, handled cash drawer',
      },
      {
        kind: 'work',
        title: 'Service Champion',
        company: 'Taco Bell',
        period: 'Sep 2020 - Dec 2022',
        desc: 'Served 150-300+ guests per shift across counter, drive-thru, and mobile orders',
      },
    ],
    projects: [
      {
        kind: 'project',
        title: 'Phishing Analysis Pipeline',
        type: 'Rodman Project',
        desc: 'Built automated phishing detection using AI classifier, threat intelligence, and VM sandbox analysis',
        tech: ['Python', 'Multipass', 'TLS', 'VirusTotal'],
      },
      {
        kind: 'project',
        title: 'SecPipe',
        type: 'Security Project',
        desc: 'Python telemetry pipeline with MITRE ATT&CK mapped detections and multi-format export',
        tech: ['Python', 'SQLite', 'GitHub Actions'],
      },
      {
        kind: 'project',
        title: 'jLedger',
        type: 'Full-Stack',
        desc: 'Personal finance platform with JWT refresh tokens, RBAC, and append-only ledger model',
        tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
      },
    ],
  };

  type TabKey = keyof Experiences;

  const [activeTab, setActiveTab] = useState<TabKey>('work');

  const tabs: { id: TabKey; label: string; icon: string }[] = [
    { id: 'work', label: 'WORK EXPERIENCE', icon: '💼' },
    { id: 'projects', label: 'PROJECTS', icon: '🚀' },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 px-4"
      style={{ backgroundColor: 'rgba(0,255,65,0.02)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4 neon-text">
            EXPERIENCE
          </h2>
          <div
            className="w-32 h-1 mb-12"
            style={{ backgroundColor: 'var(--cyber-primary)' }}
          />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-6 py-3 font-mono font-bold border-2 transition-all"
              style={{
                backgroundColor:
                  activeTab === tab.id
                    ? 'var(--cyber-primary)'
                    : 'transparent',
                borderColor: 'var(--cyber-primary)',
                color:
                  activeTab === tab.id
                    ? 'var(--cyber-dark)'
                    : 'var(--cyber-primary)',
              }}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences[activeTab].map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border p-6 neon-border transition-all"
              style={{
                borderColor: 'var(--cyber-primary)',
                opacity: 0.3,
              }}
            >
              <h3
                className="text-xl font-display font-bold mb-2"
                style={{ color: 'var(--cyber-primary-light)' }}
              >
                {exp.title}
              </h3>

              {exp.kind === 'work' && (
                <p
                  className="font-mono text-sm mb-2"
                  style={{ color: 'var(--cyber-primary)', opacity: 0.8 }}
                >
                  {exp.company} • {exp.period}
                </p>
              )}

              {exp.kind === 'project' && (
                <>
                  <span
                    className="inline-block px-2 py-1 border text-xs font-mono mb-2"
                    style={{
                      borderColor: 'var(--cyber-primary)',
                      color: 'var(--cyber-primary)',
                    }}
                  >
                    {exp.type}
                  </span>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 border text-xs font-mono"
                        style={{
                          borderColor: 'var(--cyber-primary)',
                          opacity: 0.3,
                          color: 'var(--cyber-primary)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <p
                className="font-mono text-sm"
                style={{ color: 'var(--cyber-primary)', opacity: 0.8 }}
              >
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
