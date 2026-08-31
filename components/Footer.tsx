import React from 'react';
import { Linkedin, Github, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/in/tewodros-habtamu-831754351' },
    { name: 'Github', icon: Github, link: 'https://github.com/teddyhabtamu' },
    { name: 'Twitter', icon: Twitter, link: 'https://x.com/TewodrosHa2669' },
  ];

  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'work', href: '#work' },
    { name: 'words', href: '#testimonials' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-paper dark:bg-ink text-ink dark:text-paper px-6 md:px-10 pt-16 md:pt-24 pb-8 border-t border-line dark:border-line-dark overflow-hidden">
      {/* Giant closing wordmark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-2 left-1/2 -translate-x-1/2 font-display font-semibold lowercase text-[22vw] md:text-[16vw] leading-none whitespace-nowrap opacity-[0.05]"
      >
        Tewodros
      </span>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Closing CTA */}
        <p className="text-lg md:text-2xl font-light italic opacity-70 mb-14">
          Thanks for stopping by — let's build something sharp.
        </p>

        {/* Bottom bar */}
        <div className="border-t border-line dark:border-line-dark pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name + copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="text-sm font-display font-semibold uppercase tracking-[0.2em]">
              Tewodros<span className="opacity-40">[.]</span>
            </a>
            <p className="font-mono text-xs opacity-40">
              © {currentYear} — built with restraint
            </p>
          </div>

          {/* Nav links — always visible */}
          <nav className="flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="text-sm opacity-60 hover:opacity-100 transition-opacity lowercase">
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Socials */}
            <div className="flex gap-4">
              {socials.map(({ name, icon: Icon, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Icon size={17} strokeWidth={1.5} />
                </a>
              ))}
            </div>

            {/* Back to top */}
            <a
              href="#"
              aria-label="Back to top"
              className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity border-l border-line dark:border-line-dark pl-4"
            >
              top <ArrowUp size={13} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
