import React from 'react';
import { motion } from 'framer-motion';
import { rise, fade, VIEW } from './motion';

interface Skill {
  name: string;
  level: number;
  cat: 'frontend' | 'backend' | 'data' | 'tools';
}

const skills: Skill[] = [
  { name: "React", level: 93, cat: "frontend" },
  { name: "TypeScript", level: 85, cat: "frontend" },
  { name: "JavaScript", level: 92, cat: "frontend" },
  { name: "Tailwind CSS", level: 95, cat: "frontend" },
  { name: "Redux", level: 80, cat: "frontend" },
  { name: "HTML / CSS", level: 95, cat: "frontend" },
  { name: "Node.js", level: 82, cat: "backend" },
  { name: "Python", level: 80, cat: "backend" },
  { name: "MongoDB", level: 78, cat: "backend" },
  { name: "SQL", level: 73, cat: "backend" },
  { name: "Data Analysis", level: 78, cat: "data" },
  { name: "Git", level: 88, cat: "tools" },
  { name: "Docker", level: 65, cat: "tools" },
  { name: "Figma", level: 75, cat: "tools" },
];

const categories: { key: Skill['cat']; label: string; note: string }[] = [
  { key: 'frontend', label: 'frontend', note: 'interface & experience' },
  { key: 'backend', label: 'backend', note: 'logic & data' },
  { key: 'data', label: 'data', note: 'insight & analysis' },
  { key: 'tools', label: 'tooling', note: 'workflow & craft' },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-paper dark:bg-ink text-ink dark:text-paper px-6 md:px-10 py-24 md:py-32 border-t border-line dark:border-line-dark"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header row */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-sm">[02]</span>
          <span className="h-px flex-1 bg-line dark:bg-line-dark" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-50">stack</span>
        </div>

        <motion.h2
          variants={rise()}
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
          className="text-4xl md:text-6xl font-display font-semibold lowercase tracking-[-0.02em] mb-16"
        >
          what I <em className="font-light italic opacity-80">reach for</em>
        </motion.h2>

        {/* Category columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-line-dark border border-line dark:border-line-dark">
          {categories.map((cat, ci) => {
            const items = skills.filter(s => s.cat === cat.key);
            return (
              <motion.div
                key={cat.key}
                variants={rise(ci * 0.06)}
                initial="hidden"
                whileInView="show"
                viewport={VIEW}
                className="bg-paper dark:bg-ink p-6 flex flex-col"
              >
                <div className="mb-6 pb-4 border-b border-line dark:border-line-dark">
                  <p className="font-display text-2xl font-medium lowercase mb-1">{cat.label}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] opacity-40">{cat.note}</p>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  {items.map(skill => (
                    <div key={skill.name} className="group">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs opacity-40">{skill.level}</span>
                      </div>
                      <div className="h-px w-full bg-line dark:bg-line-dark">
                        <div
                          className="h-px bg-ink dark:bg-paper"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee strip */}
        <motion.div
          variants={fade(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
          className="mt-16 overflow-hidden border-t border-b border-line dark:border-line-dark py-4"
        >
          <div className="flex whitespace-nowrap animate-marquee gap-10 w-max">
            {[...Array(2)].map((_, dup) => (
              <React.Fragment key={dup}>
                {skills.map(s => (
                  <span key={s.name + dup} className="font-display text-lg font-medium lowercase opacity-50 inline-flex items-center gap-10">
                    {s.name}
                    <span className="font-mono text-xs opacity-30">·</span>
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
