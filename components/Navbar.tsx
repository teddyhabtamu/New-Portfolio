import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

interface NavbarProps {
  setBlurActive: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setBlurActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Initial state should be FALSE (we do NOT need light text) because the Hero section is light.
  const [needsLightText, setNeedsLightText] = useState(false);

  useEffect(() => {
    // --- Define Section Scroll Ranges (You MUST fine-tune these values on your live site) ---
    const RANGES_NEEDING_LIGHT_TEXT = [
      { start: 500, end: 2000 },   // 1. About & Skills (Dark)
      { start: 3500, end: 5000 },  // 2. Testimonials (Dark)
      { start: 5000, end: 99999 }  // 3. Contact (Dark)
    ];
    // ---------------------------------------------------------------------

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      const shouldBeLight = RANGES_NEEDING_LIGHT_TEXT.some(range => {
        return scrollY >= range.start && scrollY < range.end;
      });
      
      setNeedsLightText(shouldBeLight);
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
  
  // DYNAMIC CLASS: If needsLightText is TRUE (we're in a dark section), use white. 
  // Otherwise, use the dark/black color for the light background.
  const navTextColor = needsLightText ? 'text-white' : 'text-stone-950';

  return (
    // APPLIED DYNAMIC TEXT COLOR CLASS
    <nav className={`fixed top-0 w-full z-50 px-6 py-6 md:px-12 ${navTextColor} pointer-events-none transition-colors duration-300`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        <Magnetic className="pointer-events-auto">
          <a href="#" className="cursor-pointer relative z-10">
            {/* Logo remains visible */}
            <img src="/images/text.svg" alt="Tewodros" className="h-6 w-auto" />
          </a>
        </Magnetic>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 pointer-events-auto">
          {navItems.map((item) => (
            <Magnetic key={item.name}>
              <a href={item.href} className="text-sm font-medium relative group">
                {item.name}
                {/* UPDATED: Changed bg-current to bg-orange-500 */}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full`}></span>
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
            className="fixed inset-0 bg-stone-950/90 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden pointer-events-auto text-white"
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