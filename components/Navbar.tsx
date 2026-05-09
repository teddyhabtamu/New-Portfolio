import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import { useTheme } from './ThemeContext';

interface NavbarProps {
  setBlurActive: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setBlurActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    <nav className={`fixed top-0 w-full z-50 px-4 md:px-12 pointer-events-none transition-all duration-500`}>
      <div className={`max-w-7xl mx-auto mt-4 flex justify-between items-center px-4 sm:px-6 py-3 rounded-2xl transition-all duration-500 pointer-events-auto
        ${scrolled
          ? 'dark:bg-black/70 bg-white/80 backdrop-blur-xl dark:border-white/8 border-black/10 border shadow-2xl'
          : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Magnetic className="pointer-events-auto">
          <a href="#" className="cursor-pointer relative z-10 group">
            <img
              src="/images/text.svg"
              alt="Tewodros"
              className="h-4 sm:h-5 md:h-6 w-auto brightness-0 dark:invert invert-0 group-hover:opacity-80 transition-opacity"
            />
          </a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 pointer-events-auto">
          {navItems.map((item) => (
            <Magnetic key={item.name}>
              <a
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium dark:text-gray-300 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors duration-200 rounded-xl group"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-orange-500 group-hover:w-4/5 transition-all duration-300" />
              </a>
            </Magnetic>
          ))}
        </div>

        {/* CTA + Theme Toggle + Mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border dark:text-gray-300 text-gray-600 dark:hover:bg-white/10 hover:bg-black/10 transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300"
          >
            Hire Me
          </a>
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="w-10 h-10 flex items-center justify-center rounded-xl dark:bg-white/5 bg-black/5 dark:border-white/10 border-black/10 border dark:text-white text-gray-800 dark:hover:bg-white/10 hover:bg-black/10 transition-colors"
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
            className="fixed inset-0 dark:bg-black/95 bg-white/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden pointer-events-auto"
          >
            <button
              onClick={handleToggle}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl dark:bg-white/10 bg-black/10 dark:text-white text-gray-800"
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
                  className="text-4xl font-display font-bold dark:text-white/80 text-gray-800 dark:hover:text-orange-400 hover:text-orange-500 transition-colors"
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