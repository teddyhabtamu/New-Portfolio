import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Magnetic from './Magnetic';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/in/tewodros-habtamu-831754351' },
    { name: 'Github', icon: Github, link: 'https://github.com/teddyhabtamu' },
    { name: 'Twitter', icon: Twitter, link: 'https://x.com/TewodrosHa2669' },
  ];

  return (
    <footer className="bg-secondary text-white pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-10 mb-10">
          
          <div className="mb-10 md:mb-0">
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter opacity-20">
              Tewodros
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socials.map(({ name, icon: Icon, link }) => (
              <Magnetic key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  // UPDATED: Hover state to use orange brand color
                  className="w-12 h-12 rounded-full border border-white/20 
                             flex items-center justify-center 
                             hover:bg-orange-500 hover:border-orange-500 hover:text-white 
                             transition-colors duration-300"
                >
                  <Icon size={20} strokeWidth={1.8} />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p className="mb-2 md:mb-0">&copy; {currentYear} Tewodros Habtamu.</p>
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;