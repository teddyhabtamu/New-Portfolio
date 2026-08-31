import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { fade, rise } from './motion';

const resumeLink =
  "https://drive.google.com/uc?export=download&id=1u4SipPMfeJb215xjMps6x54R5FioCLum";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const Hero: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="relative min-h-screen flex flex-col justify-between bg-paper dark:bg-ink text-ink dark:text-paper px-6 md:px-10 pt-28 pb-10"
    >
      {/* Availability line */}
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          variants={fade(0.05)}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-60 mb-8"
        >
          <span className="w-2 h-2 bg-[#22C55E] inline-block" />
          available for work — addis ababa, et
        </motion.div>

        {/* Massive headline + portrait */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <h1 className="md:col-span-9 font-display font-semibold leading-[0.92] tracking-[-0.02em]">
            <motion.span
              variants={rise()}
              className="block text-[13vw] md:text-[9vw] lg:text-[7.5rem]"
            >
              Tewodros
            </motion.span>
            <motion.span
              variants={rise(0.08)}
              className="block text-[13vw] md:text-[9vw] lg:text-[7.5rem] opacity-30"
            >
              Habtamu
            </motion.span>
          </h1>

          {/* Portrait — substantial right column */}
          <motion.div
            variants={rise(0.16)}
            className="md:col-span-3 flex justify-end items-end"
          >
            <div className="relative w-40 md:w-full max-w-[15rem] border border-line dark:border-line-dark">
              <img
                src="/images/profile.png"
                alt="Tewodros Habtamu"
                fetchPriority="high"
                className="w-full aspect-[4/5] object-cover grayscale contrast-125"
              />
              <span className="absolute -bottom-2.5 left-0 right-0 h-px bg-ink/20 dark:bg-paper/20" />
              <span className="absolute -top-2.5 -left-2.5 w-2.5 h-2.5 bg-ink dark:bg-paper" />
              <span className="absolute -top-2.5 -right-2.5 w-2.5 h-2.5 bg-ink dark:bg-paper" />
            </div>
          </motion.div>
        </div>

        {/* Role + blurb row */}
        <motion.div
          variants={fade(0.24)}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-10"
        >
          <p className="md:col-span-3 text-sm uppercase tracking-[0.2em] opacity-60 leading-relaxed">
            Web Developer<br />&amp; <em className="not-italic opacity-70">Data Scientist</em>
          </p>
          <p className="md:col-span-5 md:col-start-5 text-base md:text-lg leading-relaxed max-w-md opacity-70 italic">
            I build fast, focused software for the web. Clean systems, honest interfaces, work that ships.
          </p>
        </motion.div>
      </div>

      {/* Bottom row: stats + CTAs */}
      <motion.div
        variants={fade(0.3)}
        className="max-w-[1400px] mx-auto w-full border-t border-line dark:border-line-dark pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <p className="font-mono text-xs md:text-sm opacity-70 leading-loose">
          3+ yrs experience · 15+ projects · 10+ clients
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em]"
          >
            view work
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href={resumeLink}
            download="Tewodros_Resume.pdf"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em]"
          >
            cv
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] bg-transparent border border-ink/20 dark:border-ink-soft/30 px-5 py-2.5 hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink transition-colors"
          >
            start a project <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

