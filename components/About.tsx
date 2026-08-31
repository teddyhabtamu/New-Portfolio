import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fade, rise, VIEW } from './motion';

const stats = [
  { value: "3+", label: "years experience" },
  { value: "15+", label: "projects delivered" },
  { value: "10+", label: "satisfied clients" },
  { value: "5", label: "open source repos" },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-paper-deep dark:bg-ink-soft text-ink dark:text-paper px-6 md:px-10 py-24 md:py-36 border-t border-line dark:border-line-dark overflow-hidden"
    >
      {/* Decorative oversized wordmark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-6 left-1/2 -translate-x-1/2 font-display font-semibold lowercase text-[26vw] md:text-[22vw] leading-none whitespace-nowrap opacity-[0.04]"
      >
        about
      </span>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Number + small label */}
        <motion.div
          variants={fade()}
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
          className="flex items-center gap-4 mb-10"
        >
          <span className="font-mono text-sm">[01]</span>
          <span className="h-px flex-1 bg-line dark:bg-line-dark" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-50">profile</span>
        </motion.div>

        {/* Big statement + image, horizontal */}
        <div className="grid grid-cols-12 gap-6 items-end mb-20">
          <div className="col-span-12 lg:col-span-8">
            <motion.h2
              variants={rise()}
              initial="hidden"
              whileInView="show"
              viewport={VIEW}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold lowercase leading-[1.02] tracking-[-0.02em]"
            >
              turning ideas<br />
              into <em className="font-display font-light italic opacity-80">working</em> software
            </motion.h2>
          </div>
          <motion.div
            variants={rise(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEW}
            className="col-span-8 col-start-3 lg:col-span-3 lg:col-start-10"
          >
            <div className="border border-line dark:border-line-dark">
              <img
                src="/images/profile.png"
                alt="Tewodros Habtamu"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover grayscale contrast-125"
              />
            </div>
            <p className="font-mono text-[11px] mt-2 opacity-40 uppercase tracking-[0.15em]">
              addis ababa, et
            </p>
          </motion.div>
        </div>

        {/* Stat strip — horizontal notches */}
        <motion.div
          variants={fade(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
          className="grid grid-cols-2 md:grid-cols-4 border border-line dark:border-line-dark mb-16"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group relative p-6 md:p-8 hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink transition-colors ${i % 2 === 1 ? 'border-l border-line dark:border-line-dark' : ''
                } ${i > 1 ? 'border-t md:border-t-0 md:border-l border-line dark:border-line-dark' : ''}`}
            >
              <p className="text-5xl md:text-6xl font-display font-semibold mb-2">{stat.value}</p>
              <p className="text-xs opacity-60 uppercase tracking-[0.15em]">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Two-col narrative, wider left emphasis */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 md:col-start-1">
            <p className="text-base md:text-lg leading-relaxed opacity-80 mb-6">
              I enjoy solving complex problems with simple systems — whether architecting a full-stack application or digging into a dataset, the same attention to detail applies.
            </p>
            <p className="text-base md:text-lg leading-relaxed opacity-80">
              Currently based in Addis Ababa, and open to remote work and collaborations worldwide.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex items-start justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] opacity-70 hover:opacity-100 transition-opacity"
            >
              the work <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
