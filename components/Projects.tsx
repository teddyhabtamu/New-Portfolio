import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Altech Valve Management System",
    subtitle: "Enterprise Web App",
    description: "A front-end project where I worked on building responsive UI screens and improving the overall user experience using React and Tailwind.",
    tags: ["React", "Tailwind", "Frontend"],
    link: "https://github.com/amplitudeventures/avms-frontend",
    live: "http://16.16.143.17/login",
    image: "/images/altech.png"
  },
  {
    id: 2,
    title: "Brainwave",
    subtitle: "AI Landing Page",
    description: "A front-end project where I contributed to building interactive user interfaces using React.js for an AI SaaS product.",
    tags: ["React", "Tailwind"],
    link: "https://github.com/teddyhabtamu/Brainwave",
    live: "https://brainwave-six-gamma.vercel.app/",
    image: "/images/brain.png"
  },
  {
    id: 3,
    title: "Nike Branding",
    subtitle: "E-commerce Concept",
    description: "A branding project for Nike, focusing on creating a visually compelling and responsive website design with smooth animations.",
    tags: ["React", "Tailwind", "JavaScript"],
    link: "https://github.com/teddyhabtamu/Nike-Shoes",
    live: "https://nike-shoes-steel.vercel.app/",
    image: "/images/nike.png"
  },
  {
    id: 4,
    title: "Fana Digital Library",
    subtitle: "Archive System",
    description: "Developed and deployed a digital library system for Fana Broadcasting Corporation, digitizing 100+ books.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/teddyhabtamu/Fana-Digital-Library",
    live: "https://fana-digital-library-ojng.vercel.app/",
    image: "/images/fana.png"
  },
  {
    id: 5,
    title: "PeakPulse Fitness",
    subtitle: "Health Tracker",
    description: "A fitness tracking app allowing users to log workouts, track progress, and set personal health goals with analytics.",
    tags: ["React", "Redux", "Tailwind", "SQL"],
    link: "https://github.com/teddyhabtamu/PeakPulse-Fitness-Tracker-",
    live: "https://peak-pulse-fitness-tracker-kb1c.vercel.app/",
    image: "/images/fit.png"
  },
  {
    id: 6,
    title: "Meme Generator",
    subtitle: "Interactive App",
    description: "A fun web app that allows users to create and share custom memes by uploading images and adding text overlays.",
    tags: ["React", "CSS"],
    link: "https://github.com/teddyhabtamu/Meme-Generator-Web-App",
    live: "https://meme-generator-web-app-phi.vercel.app/",
    image: "/images/meme.png"
  }
];

const tagColors: Record<string, string> = {
  React: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Tailwind: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
  MongoDB: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Express: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  JavaScript: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Redux: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  SQL: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Frontend: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  CSS: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

const getTagColor = (tag: string) =>
  tagColors[tag] || "bg-white/5 text-gray-400 border-white/10";

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const LIMIT = 4;
  const displayed = showAll ? projects : projects.slice(0, LIMIT);

  return (
    <section id="work" className="bg-[#111111] text-white py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs text-orange-400 uppercase tracking-[0.3em] font-medium mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Selected Work</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            A collection of my best projects spanning web apps, landing pages, and full-stack systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayed.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl border border-white/8 overflow-hidden bg-white/3 hover:border-orange-500/25 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/10 to-transparent" />

                {/* Action buttons on hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-200"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-200"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{project.subtitle}</p>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-orange-100 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:border-orange-500 hover:text-orange-400 transition-all group/btn"
                    >
                      <ArrowUpRight size={16} className="group-hover/btn:rotate-45 transition-transform duration-200" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more */}
        {projects.length > LIMIT && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-gray-300 text-sm font-semibold hover:border-orange-500/50 hover:text-white hover:bg-orange-500/8 transition-all duration-300"
            >
              {showAll ? 'Show Less' : 'View More Projects'}
              <ArrowUpRight size={15} className={`transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:rotate-45'}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;