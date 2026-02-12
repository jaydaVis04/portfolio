'use client';

export default function Footer() {
  const navItems = ['About', 'Experience', 'Labs', 'Projects', 'Contact'];

  return (
    <footer
      className="relative py-12 px-4 border-t"
      style={{ borderColor: 'var(--cyber-primary)', opacity: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-display font-black mb-2"
              style={{ color: 'var(--cyber-primary-light)' }}
            >
              &lt;JD /&gt;
            </h3>

            <p
              className="font-mono text-sm"
              style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}
            >
              Building secure systems and breaking them (ethically)
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4
              className="font-display font-bold mb-4"
              style={{ color: 'var(--cyber-primary)' }}
            >
              NAVIGATE
            </h4>

            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block font-mono text-sm transition-colors"
                  style={{
                    color: 'var(--cyber-primary)',
                    opacity: 0.6,
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="font-display font-bold mb-4"
              style={{ color: 'var(--cyber-primary)' }}
            >
              CONNECT
            </h4>

            <div className="flex gap-4">
              
              {/* GitHub */}
              <a
                href="https://github.com/jaydaVis04"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: 'var(--cyber-primary)' }}
              >
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jaydyn-davis-51b31b288"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: 'var(--cyber-primary)' }}
              >
                LinkedIn
              </a>

              {/* Email */}
              <a
                href="mailto:jaydyndavis04@gmail.com"
                className="transition-colors"
                style={{ color: 'var(--cyber-primary)' }}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="pt-8 border-t"
          style={{ borderColor: 'var(--cyber-primary)', opacity: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <p
              className="font-mono text-sm"
              style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}
            >
              © 2026 Jaydyn Davis. All rights reserved.
            </p>

            <p
              className="font-mono text-xs"
              style={{ color: 'var(--cyber-primary)', opacity: 0.4 }}
            >
              Built with Next.js, TypeScript, Tailwind & Framer Motion
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
