import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

interface NavbarProps {
  setBlurActive: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setBlurActive }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    setBlurActive(newState); // activate blur on background
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 mix-blend-difference text-white pointer-events-none">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Magnetic className="pointer-events-auto">
          <a href="#" className="font-bold text-xl cursor-pointer">Tewodros</a>
        </Magnetic>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 pointer-events-auto">
          {navItems.map((item) => (
            <Magnetic key={item.name}>
              <a href={item.href} className="text-sm font-medium">
                {item.name}
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Mobile button */}
        <div className="md:hidden pointer-events-auto">
          <button onClick={handleToggle} className="p-2">
            {!isOpen ? <Menu size={28} /> : null}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/40 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden pointer-events-auto"
          >
            <button onClick={handleToggle} className="absolute top-8 right-8 p-2 text-white">
              <X size={32} />
            </button>

            <div className="flex flex-col text-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleToggle}
                  className="text-3xl font-light"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
