import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

interface NavbarProps {
  setBlurActive: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setBlurActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    setBlurActive(newState);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 md:px-12 pointer-events-none transition-all duration-500`}>
      <div className={`max-w-7xl mx-auto mt-4 flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 pointer-events-auto
        ${scrolled
          ? 'bg-black/70 backdrop-blur-xl border border-white/8 shadow-2xl'
          : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Magnetic className="pointer-events-auto">
          <a href="#" className="cursor-pointer relative z-10 group">
            <img src="/images/text.svg" alt="Tewodros" className="h-6 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity" />
          </a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 pointer-events-auto">
          {navItems.map((item) => (
            <Magnetic key={item.name}>
              <a
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 rounded-xl group"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-orange-500 group-hover:w-4/5 transition-all duration-300" />
              </a>
            </Magnetic>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300"
          >
            Hire Me
          </a>
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              {!isOpen ? <Menu size={20} /> : null}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden pointer-events-auto"
          >
            <button
              onClick={handleToggle}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col text-center gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={handleToggle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-4xl font-display font-bold text-white/80 hover:text-white hover:text-orange-400 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={handleToggle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.07 }}
                className="mt-4 inline-flex justify-center items-center px-8 py-3 rounded-full bg-orange-500 text-white text-lg font-semibold"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;