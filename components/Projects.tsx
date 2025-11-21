import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Brainwave",
    subtitle: "AI Landing Page",
    description: "A front-end project where I contributed to building interactive user interfaces using React.js.",
    tags: ["#react", "#tailwind"],
    link: "https://github.com/teddyhabtamu/Brainwave",
    live: "https://brainwave-six-gamma.vercel.app/",
    image: "/images/brain.png"
  },
  {
    id: 2,
    title: "Nike Branding",
    subtitle: "E-commerce Concept",
    description: "A branding project for Nike, focusing on creating a visually compelling and responsive website design.",
    tags: ["#react", "#tailwind", "#javascript"],
    link: "https://github.com/teddyhabtamu/Nike-Shoes",
    live: "https://nike-shoes-steel.vercel.app/",
    image: "/images/nike.png"
  },
  {
    id: 3,
    title: "Fana Digital Library",
    subtitle: "Archive System",
    description: "Developed and deployed a digital library system for Fana Broadcasting Corporation, digitizing 100+ books.",
    tags: ["#react", "#nodejs", "#mongodb", "#express"],
    link: "https://github.com/teddyhabtamu/Fana-Digital-Library",
    live: "https://fana-digital-library-ojng.vercel.app/",
    image: "/images/fana.png"
  },
  {
    id: 4,
    title: "PeakPulse Fitness",
    subtitle: "Health Tracker",
    description: "A fitness tracking app that allows users to log and track workout activities and set goals.",
    tags: ["#react", "#redux", "#tailwind", "#SQL"],
    link: "https://github.com/teddyhabtamu/PeakPulse-Fitness-Tracker-",
    live: "https://peak-pulse-fitness-tracker-kb1c.vercel.app/",
    image: "/images/fit.png"
  },
  {
    id: 5,
    title: "Meme Generator",
    subtitle: "Interactive App",
    description: "A fun web app that allows users to create and share custom memes by uploading images and adding text.",
    tags: ["#react", "#css"],
    link: "https://github.com/teddyhabtamu/Meme-Generator-Web-App",
    live: "https://meme-generator-web-app-phi.vercel.app/",
    image: "/images/meme.png"
  }
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="bg-dark text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-12">Selected Work</h2>
        
        <div className="flex flex-col">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, paddingLeft: "1rem" }}
              className="group relative border-t border-white/10 py-12 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.live ? (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center gap-4 z-10 relative">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-3xl md:text-5xl font-display font-bold group-hover:text-gray-200 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-gray-500 text-sm md:text-base">{project.description}</span>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <a href={project.link} className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:underline" target="_blank" rel="noopener noreferrer">
                        source code <Github size={14} />
                      </a>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center gap-4 z-10 relative">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-3xl md:text-5xl font-display font-bold group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-gray-500 text-sm md:text-base">{project.description}</span>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:underline" target="_blank" rel="noopener noreferrer">
                      source code <Github size={14} />
                    </a>
                  </div>
                </div>
              )}

              {/* Hover Image Reveal (Desktop Only) */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0, opacity: 0, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="absolute hidden lg:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 w-[400px] h-[300px] rounded-xl overflow-hidden shadow-2xl"
                    style={{ left: '60%' }} 
                  >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
           <button className="px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 uppercase text-sm tracking-widest">
             More Work
           </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;