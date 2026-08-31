import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { fade, rise, VIEW } from './motion';

const projects: Project[] = [
  {
    id: 7,
    title: "Smart Study",
    subtitle: "AI Study App",
    description: "An AI-powered studying platform that helps students learn effectively with personalized content and interactive features.",
    tags: ["React", "Next.js", "Tailwind", "AI", "Backend", "Telebirr"],
    link: "https://github.com/teddyhabtamu/Smart-Study",
    live: "https://ethio-smart-study.vercel.app",
    image: "/images/smartStudy.png"
  },
  {
    id: 2,
    title: "Brainwave",
    subtitle: "AI Landing Page",
    description: "Interactive user interfaces for an AI SaaS product, built with React.js.",
    tags: ["React", "Tailwind"],
    link: "https://github.com/teddyhabtamu/Brainwave",
    live: "https://brainwave-six-gamma.vercel.app/",
    image: "/images/brain.png"
  },
  {
    id: 1,
    title: "Altech Valve Management",
    subtitle: "Enterprise Web App",
    description: "Responsive UI screens and improved user experience built with React and Tailwind.",
    tags: ["React", "Tailwind", "Frontend"],
    link: "https://github.com/amplitudeventures/avms-frontend",
    live: "http://16.16.143.17/login",
    image: "/images/altech.png"
  },
  {
    id: 8,
    title: "Agar Ride",
    subtitle: "Ride-Sharing Commute App",
    description: "A ride-sharing platform connecting commuters in Addis Ababa to share rides and split costs by up to 75%.",
    tags: ["React", "Vite", "Tailwind", "Backend", "Telebirr"],
    link: "https://github.com/teddyhabtamu/agar",
    live: "https://agar-ride.vercel.app",
    image: "/images/agar.png"
  },
  {
    id: 9,
    title: "Dunder Studio",
    subtitle: "Creative Agency Website",
    description: "A modern landing page for a creative studio with smooth animations and clean typography.",
    tags: ["React", "Vite", "Tailwind"],
    link: "https://github.com/teddyhabtamu/dunder-studio",
    live: "https://dunder-studio.vercel.app",
    image: "/images/dunder.png"
  },
  {
    id: 10,
    title: "Laguz Logistics",
    subtitle: "Logistics & Shipping",
    description: "A premium logistics company website with SEO-optimized service pages.",
    tags: ["React", "Vite", "Tailwind", "SEO"],
    link: "https://github.com/teddyhabtamu/Laguz",
    live: "https://laguz-sand.vercel.app",
    image: "/images/laguz.png"
  },
  {
    id: 3,
    title: "Nike Branding",
    subtitle: "E-commerce Concept",
    description: "A visually compelling and responsive website design with smooth animations.",
    tags: ["React", "Tailwind", "JavaScript"],
    link: "https://github.com/teddyhabtamu/Nike-Shoes",
    live: "https://nike-shoes-steel.vercel.app/",
    image: "/images/nike.png"
  },
  {
    id: 6,
    title: "Kiya Gym",
    subtitle: "Fitness Website",
    description: "A premium fitness center website with modern design and amenity showcasing.",
    tags: ["React", "Tailwind", "Vite", "Frontend"],
    link: "https://github.com/teddyhabtamu/Kiya-Gym",
    live: "https://kiya-gym.vercel.app",
    image: "/images/kiya-gym.png"
  },
  {
    id: 4,
    title: "Fana Digital Library",
    subtitle: "Archive System",
    description: "A digital library system for Fana Broadcasting Corporation, digitizing 100+ books.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/teddyhabtamu/Fana-Digital-Library",
    live: "https://fana-digital-library-ojng.vercel.app/",
    image: "/images/fana.png"
  },
  {
    id: 5,
    title: "PeakPulse Fitness",
    subtitle: "Health Tracker",
    description: "A fitness tracking app to log workouts, track progress, and set health goals.",
    tags: ["React", "Redux", "Tailwind", "SQL"],
    link: "https://github.com/teddyhabtamu/PeakPulse-Fitness-Tracker-",
    live: "https://peak-pulse-fitness-tracker-kb1c.vercel.app/",
    image: "/images/fit.png"
  }
];

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const LIMIT = 4;
  const displayed = showAll ? projects : projects.slice(0, LIMIT);

  return (
    <section
      id="work"
      className="bg-paper-deep dark:bg-ink-soft text-ink dark:text-paper px-6 md:px-10 py-24 md:py-32 border-t border-line dark:border-line-dark"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-sm">[03]</span>
          <span className="h-px flex-1 bg-line dark:bg-line-dark" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-50">portolio</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.h2
            variants={rise()}
            initial="hidden"
            whileInView="show"
            viewport={VIEW}
            className="text-4xl md:text-6xl font-display font-semibold lowercase tracking-[-0.02em]"
          >
            selected work
          </motion.h2>
          <motion.p
            variants={fade(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEW}
            className="text-sm opacity-50 max-w-xs leading-relaxed md:text-right"
          >
            A few highlights — web apps, landing pages, and systems shipped in the last few years.
          </motion.p>
        </div>

        {/* Featured first project */}
        {displayed.length > 0 && (
          <motion.a
            key={'feat' + displayed[0].id}
            href={displayed[0].live || displayed[0].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="group block relative mb-16 md:mb-24"
          >
            <span
              aria-hidden
              className="pointer-events-none select-none block font-display font-semibold text-7xl md:text-8xl leading-none text-ink/15 dark:text-paper/15 mb-2"
            >
              01
            </span>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 overflow-hidden relative">
                <img
                  src={displayed[0].image}
                  alt={displayed[0].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                />
              </div>
              <div className="md:col-span-5">
                <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-50 mb-3">
                  {displayed[0].subtitle}
                </p>
                <h3 className="text-3xl md:text-4xl font-display font-semibold lowercase leading-tight mb-4">
                  {displayed[0].title}
                </h3>
                <p className="text-base opacity-70 leading-relaxed mb-5 max-w-md">
                  {displayed[0].description}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6">
                  {displayed[0].tags.map(tag => (
                    <span key={tag} className="text-xs uppercase tracking-wider opacity-40">{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.1em] border border-ink/20 dark:border-ink-soft/30 px-5 py-2.5 group-hover:bg-ink group-hover:text-paper dark:group-hover:bg-paper dark:group-hover:text-ink transition-colors">
                  view case <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </motion.a>
        )}

        {/* Remaining projects — 2-col grid with big indices */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-20">
          <AnimatePresence>
            {displayed.slice(1).map((project, i) => (
              <motion.a
                key={project.id}
                href={project.live || project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1], delay: i * 0.05 }}
                className={`group block ${i === displayed.slice(1).length - 1 && displayed.slice(1).length % 2 === 1 ? 'lg:col-span-2' : ''}`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none select-none block font-display font-semibold text-7xl md:text-8xl leading-none text-ink/15 dark:text-paper/15 mb-2"
                >
                  {String(i + 2).padStart(2, '0')}
                </span>
                <div className="overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-display font-medium lowercase leading-tight group-hover:underline underline-offset-4">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={16} className="opacity-40 shrink-0" />
                </div>
                <p className="text-xs uppercase tracking-[0.15em] opacity-40 mb-3">{project.subtitle}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {project.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="text-[11px] uppercase tracking-wider opacity-40">{tag}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more */}
        {projects.length > LIMIT && (
          <div className="mt-24 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] hover:opacity-60 transition-opacity"
            >
              {showAll ? 'show less' : 'view all projects'}
              <ArrowUpRight size={14} className={`transition-transform ${showAll ? 'rotate-180' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
