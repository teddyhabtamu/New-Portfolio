import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types';
import { rise, fade, VIEW } from './motion';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Tewodros developed a seamless and efficient digital library system for our organization. His dedication and attention to detail significantly improved our accessibility.",
    author: "Muluken Fana",
    role: "IT Manager, Fana Broadcasting Corp"
  },
  {
    id: 2,
    quote: "His work on the PeakPulse Fitness Tracker was top-notch. The app was intuitive, responsive, and delivered exactly what we needed.",
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
  const item = testimonials[active];

  return (
    <section
      id="testimonials"
      className="bg-paper dark:bg-ink text-ink dark:text-paper px-6 md:px-10 py-24 md:py-32 border-t border-line dark:border-line-dark"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm">[04]</span>
          <span className="h-px flex-1 bg-line dark:bg-line-dark" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-50">words</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Featured — sticky quote */}
          <div className="md:sticky md:top-28 md:self-start">
            <motion.h2
              variants={rise()}
              initial="hidden"
              whileInView="show"
              viewport={VIEW}
              className="text-4xl md:text-6xl font-display font-semibold lowercase tracking-[-0.02em] mb-10"
            >
              good<br /><em className="font-light italic opacity-80">words</em>
            </motion.h2>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute -top-10 -left-4 font-display font-semibold text-[7rem] leading-none opacity-10 select-none"
                >
                  "
                </span>
                <p className="text-2xl md:text-3xl font-display font-light italic leading-relaxed mb-8">
                  {item.quote}
                </p>
                <footer>
                  <p className="font-display font-medium text-lg">{item.author}</p>
                  <p className="text-sm opacity-50 mt-0.5">{item.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {/* Selector */}
            <div className="flex gap-2 mt-10">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  aria-label={`Quote ${i + 1}`}
                  className={`h-1 transition-all duration-300 ${i === active ? 'w-10 bg-ink dark:bg-paper' : 'w-4 bg-line dark:bg-line-dark hover:bg-ink/40 dark:hover:bg-paper/40'}`}
                />
              ))}
            </div>
          </div>

          {/* Remaining quotes — compact list */}
          <div className="border-t border-line dark:border-line-dark">
            {testimonials
              .filter((_, i) => i !== active)
              .concat([item])
              .map((t, i) => (
                <motion.div
                  key={t.id}
                  variants={fade(i * 0.05)}
                  initial="hidden"
                  whileInView="show"
                  viewport={VIEW}
                  className="py-6 border-b border-line dark:border-line-dark"
                >
                  <p className="text-sm leading-relaxed opacity-70 mb-3">"{t.quote}"</p>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] opacity-60">
                    {t.author} <span className="opacity-40">— {t.role.split(',')[0]}</span>
                  </p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
