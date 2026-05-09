import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Tewodros developed a seamless and efficient digital library system for our organization. His dedication and attention to detail significantly improved our accessibility.",
    author: "Muluken Fana",
    role: "IT Manager, Fana Broadcasting Corp"
  },
  {
    id: 2,
    quote: "His work on the PeakPulse Fitness Tracker was top-notch. The app was intuitive, responsive, and delivered exactly what we needed. Tewodros is reliable and talented.",
    author: "Haile Melekot",
    role: "Product Advisor & Lecturer, AAiT"
  },
  {
    id: 3,
    quote: "Working with Tewodros on the Brainwave project was a pleasure. His front-end skills and creative input made a huge difference in the user experience.",
    author: "Shyam Bhagwat",
    role: "UI/UX Lead, Brainwave Inc."
  },
  {
    id: 4,
    quote: "Tewodros brought our Nike branding concept to life with clean code and smooth design execution. He's not just a developer—he's a creative partner.",
    author: "Adrian",
    role: "Creative Director"
  }
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const item = testimonials[active];

  return (
    <section id="testimonials" className="dark:bg-[#080808] bg-[#F5F5F0] dark:text-white text-gray-900 py-28 px-6 md:px-12 overflow-hidden dark:border-white/5 border-black/5 border-t transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs text-orange-400 uppercase tracking-[0.3em] font-medium mb-4">Social Proof</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white text-gray-900">What Clients Say</h2>
          </div>
          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full dark:border-white/10 border-black/10 border flex items-center justify-center dark:text-gray-400 text-gray-500 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm dark:text-gray-500 text-gray-400 font-mono">
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full dark:border-white/10 border-black/10 border flex items-center justify-center dark:text-gray-400 text-gray-500 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Featured testimonial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl dark:border-white/8 border-black/8 border dark:bg-white/3 bg-black/2 p-10 md:p-14 mb-6"
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent rounded-full" />

            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* Quote */}
                <Quote size={36} className="text-orange-500/30 mb-4" />
                <p className="text-xl md:text-2xl dark:text-gray-200 text-gray-700 leading-relaxed font-light italic mb-8">
                  "{item.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-lg font-bold text-white shadow-lg">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white text-gray-900 text-base">{item.author}</p>
                    <p className="text-sm dark:text-gray-500 text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${i === active ? 'w-6 h-2 bg-orange-500' : 'w-2 h-2 dark:bg-white/20 bg-black/20 dark:hover:bg-white/40 hover:bg-black/40'}`}
            />
          ))}
        </div>

        {/* Grid of all testimonials (smaller, below) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 ${i === active
                ? 'border-orange-500/40 bg-orange-500/5'
                : 'dark:border-white/6 border-black/6 dark:bg-white/2 bg-black/2 dark:hover:border-white/15 hover:border-black/15'
                }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-sm font-bold text-white">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold dark:text-white text-gray-900 leading-tight">{t.author}</p>
                  <p className="text-[11px] dark:text-gray-500 text-gray-500">{t.role.split(',')[0]}</p>
                </div>
              </div>
              <p className="text-xs dark:text-gray-400 text-gray-500 line-clamp-2 leading-relaxed">"{t.quote}"</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;