import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';

const navItems = [
  { name: 'about', href: '#about', n: '01' },
  { name: 'work', href: '#work', n: '02' },
  { name: 'words', href: '#testimonials', n: '03' },
  { name: 'contact', href: '#contact', n: '04' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-paper/90 dark:bg-ink/90 backdrop-blur-sm border-b border-line dark:border-line-dark'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-sm font-display font-semibold uppercase tracking-[0.2em]">
            Tewodros<span className="opacity-40">[.]</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center gap-1.5 text-sm text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper transition-colors"
              >
                <span className="font-mono text-[10px] opacity-50">{item.n}</span>
                <span className="border-b border-transparent group-hover:border-current transition-colors">
                  {item.name}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun size={17} strokeWidth={1.5} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon size={17} strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] bg-ink text-paper dark:bg-paper dark:text-ink px-5 py-2 hover:opacity-80 transition-opacity"
            >
              hire me <ArrowUpRight size={14} />
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="md:hidden w-9 h-9 flex items-center justify-center text-ink/70 dark:text-paper/70"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-paper dark:bg-ink flex flex-col justify-between p-8 md:hidden"
          >
            <div className="flex flex-col gap-2 mt-20">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="py-4 text-4xl font-display font-medium lowercase border-b border-line dark:border-line-dark flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="font-mono text-sm opacity-40">{item.n}</span>
                </motion.a>
              ))}
            </div>
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="inline-flex items-center justify-center gap-2 text-lg font-medium bg-ink text-paper dark:bg-paper dark:text-ink py-4 hover:opacity-80 transition-opacity"
            >
              hire me <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
