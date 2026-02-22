import React from 'react';
import { Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/in/tewodros-habtamu-831754351' },
    { name: 'Github', icon: Github, link: 'https://github.com/teddyhabtamu' },
    { name: 'Twitter', icon: Twitter, link: 'https://x.com/TewodrosHa2669' },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#080808] text-white pt-16 pb-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Top CTA section */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 pb-12 border-b border-white/8 mb-10">
          <div className="text-center md:text-left">
            <p className="text-xs text-orange-400 uppercase tracking-[0.3em] font-medium mb-3">Available for work</p>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white/10 tracking-tighter select-none">
              Tewodros
            </h2>
          </div>

          <a
            href="#contact"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300"
          >
            Start a Project
            <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-200" />
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo + copyright */}
          <div className="flex items-center gap-4">
            <img src="/images/text.svg" alt="Logo" className="h-5 w-auto brightness-0 invert opacity-40" />
            <span className="text-gray-600 text-xs">© {currentYear} Tewodros Habtamu. All rights reserved.</span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="text-xs text-gray-500 hover:text-white transition-colors">
                {l.name}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {socials.map(({ name, icon: Icon, link }) => (
              <Magnetic key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-200"
                >
                  <Icon size={15} strokeWidth={1.8} />
                </a>
              </Magnetic>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;