'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Labs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const labs = {
    'ethical-hacking': [
      { title: 'Replay Attack', desc: 'Captured/modified HTTP traffic with tcpdump and netcat; developed Python script to restore system files' },
      { title: 'DNS Setup and Port Scan', desc: 'Enumerated DNS, added DNS records, hardened bind9, mapped services with nmap/lsof, OS fingerprinting' },
      { title: 'Metasploit Penetration Testing', desc: 'Exploited MS08-067 for remote shell, uploaded files via Meterpreter, tested Armitage automation' },
      { title: 'Command Injection Exploit', desc: 'Reproduced automated mass-account creation; implemented input sanitization in C' },
      { title: 'Metasploit Exploit Development', desc: 'Developed custom exploits, established remote shells, analyzed sessions with Wireshark and Ruby' },
      { title: 'ICTF\'07: Ruby & Metasploit', desc: 'Deployed grader, cloned VMs, mapped PHP flag flow, built Ruby pipeline for Base64 injection and auto-exfil' },
      { title: 'Sound of Music: Pentest', desc: 'Built one-command exploit: programmatic login, server-side include for flag.txt, proxied submission' },
      { title: 'C Pointers & GDB', desc: 'Built hex printer, fixed setvar for n=200, analyzed pointer addresses, stepped through bubble_sort in GDB' },
      { title: 'Assembly & GDB', desc: 'Implemented cat.cc with execve, analyzed static-linked ls assembly, extracted main() into shellcode-style char array' },
      { title: 'Stack Exploitation', desc: 'Mapped fib stack frame, crafted Perl payloads to crash at 0x41414141 and redirect control flow to greeting()' },
      { title: 'Buffer Overflow & Shellcode', desc: 'Recovered shellcode parameters in GDB, explained JMP/CALL, crafted Perl overflow, built exploit.cc payload' },
      { title: 'Remote Buffer Overflow', desc: 'Reproduced peercast3 exploit, analyzed linux/x86/shell_bind_tcp, traced execution at JMP ESP, documented syscalls' },
      { title: 'Heap Spray/Browser Exploits', desc: 'Reproduced browser crashes, proved shellcode control, installed mangleme, created Unicode-safe heap spray to pop calc.exe' },
      { title: 'Format String Exploitation', desc: 'Leaked return address via %p, used format-string writes to set global Canary, proposed PatchMe post-compile rewriter' },
    ],
    'cybersecurity': [
      { title: 'Game Hacking with OpenRA', desc: 'Modified source to reduce soldier cost to $1, patched Makefile with sed, automated fixes, debugged C# errors' },
      { title: 'Linux Command-Line Challenge', desc: 'Completed timed Linux training bot covering file navigation, permissions, and scripting in scored environment' },
      { title: 'Linux File Forensics', desc: 'Used md5sum, chmod, xxd, sed, grep for checksums, permissions, nested search, and file editing under pressure' },
      { title: 'Encrypted Messaging & Access Control', desc: 'Configured secure Linux mail with ygm, applied Base64/AES encryption, managed users, set permissions, deployed SUID programs' },
      { title: 'SSL Certificate Configuration', desc: 'Generated and signed CSRs with OpenSSL, deployed HTTPS certs to Apache, handled X.509 certs and secure transfers' },
      { title: 'Linux Process & Log Analysis', desc: 'Used ps, strace, grep, kill to identify/trace/terminate malicious processes, analyzed logs, used crontab automation' },
      { title: 'Secure Network Configuration', desc: 'Configured OpenSSH, troubleshot routing conflicts, fixed Netplan network interfaces, secured SFTP transfers' },
      { title: 'DNS Server Setup', desc: 'Installed and configured Bind9, modified zone records for domain resolution' },
      { title: 'LDAP Single Sign-On', desc: 'Set up LDAP server for centralized authentication, troubleshot service discovery, created user groups' },
      { title: 'NFS Deployment', desc: 'Set up NFS server for distributed file sharing, maintained permissions, integrated LDAP authentication' },
    ],
    'cpp-labs': [
      { title: 'String Patterning & BMI Calculation', desc: 'Built nameDiamond() for diamond pattern printing, developed BMI calculator with functions and modular code' },
      { title: 'Vector Filtering & Element Removal', desc: 'Implemented countInRange() for integers in range, built removeAll() with reverse iteration for in-place modification' },
      { title: 'Nearest Smaller Value via Stack', desc: 'Implemented nearest_smaller_to_right() using stack to find next smaller element' },
      { title: 'Vote Counting via HashMap', desc: 'Developed tallyVote() to track character frequencies with hashmap for fast lookup' },
      { title: 'Recursive Power & Decimal Printing', desc: 'Wrote myPow() for recursive exponentiation, created printDecimal() for fixed-length base-10 numbers' },
      { title: 'Unique Vector Permutations', desc: 'Implemented permute() to generate all unique permutations using recursion and sets' },
      { title: 'Word Search in 2D Grid', desc: 'Built exist() to check word existence in grid using DFS-style backtracking' },
      { title: 'Merge Two Sorted Linked Lists', desc: 'Created non-recursive function to merge sorted lists without auxiliary memory' },
      { title: 'Template List Concatenation', desc: 'Extended myLinkedList template by overloading + operator for list concatenation' },
      { title: 'Remove Duplicates in Sorted List', desc: 'Wrote deleteDuplicates() to remove all duplicates in single traversal' },
      { title: 'Second Minimum in Binary Tree', desc: 'Implemented findSecondMinimumValue() to find second smallest unique value in special binary tree' },
    ],
  };

  const allLabs = [
    ...labs['ethical-hacking'],
    ...labs['cybersecurity'],
    ...labs['cpp-labs'],
  ];

  const displayLabs = activeCategory === 'all' ? allLabs : labs[activeCategory as keyof typeof labs];

  const categories = [
    { id: 'all', label: 'ALL LABS', count: allLabs.length },
    { id: 'ethical-hacking', label: 'ETHICAL HACKING', count: labs['ethical-hacking'].length },
    { id: 'cybersecurity', label: 'CYBERSECURITY', count: labs['cybersecurity'].length },
    { id: 'cpp-labs', label: 'C++ LABS', count: labs['cpp-labs'].length },
  ];

  return (
    <section id="labs" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4 neon-text">
            &#60;LABS /&#62;
          </h2>
          <div className="w-32 h-1 mb-4" style={{ backgroundColor: 'var(--cyber-primary)' }} />
          <p className="text-lg font-mono mb-12" style={{ color: 'var(--cyber-primary)', opacity: 0.7 }}>
            Hands-on technical exercises and practical implementations
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 font-mono font-bold border-2 transition-all ${
                activeCategory === cat.id
                  ? 'neon-border'
                  : 'border-[var(--cyber-primary)]/30 hover:border-[var(--cyber-primary)]'
              }`}
              style={{
                backgroundColor: activeCategory === cat.id ? 'var(--cyber-primary)' : 'transparent',
                borderColor: activeCategory === cat.id ? 'var(--cyber-primary)' : undefined,
                color: activeCategory === cat.id ? 'var(--cyber-dark)' : 'var(--cyber-primary)',
              }}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </motion.div>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayLabs.slice(0, 20).map((lab, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="border p-4 hover:border-[var(--cyber-primary)] transition-all group"
              style={{ borderColor: 'var(--cyber-primary)', borderWidth: '1px', opacity: 0.3 }}
              whileHover={{ opacity: 1 }}
            >
              <h3
                className="text-sm font-mono font-bold mb-2 group-hover:text-[var(--cyber-primary-light)] transition-colors"
                style={{ color: 'var(--cyber-primary)' }}
              >
                {lab.title}
              </h3>
              <p className="text-xs font-mono leading-relaxed" style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}>
                {lab.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-block px-6 py-3 border-2 neon-border font-mono"
            style={{ borderColor: 'var(--cyber-primary)', color: 'var(--cyber-primary)' }}
          >
            <span className="font-bold">Showing {Math.min(20, displayLabs.length)}</span> of {displayLabs.length} labs
          </div>
        </motion.div>
      </div>
    </section>
  );
}
