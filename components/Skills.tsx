import React from 'react';
import { motion } from 'framer-motion';
import {
    SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact,
    SiRedux, SiTailwindcss, SiNodedotjs, SiMongodb,
    SiPython, SiFigma, SiDocker, SiMysql
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Skill {
    name: string;
    icon: IconType;
    level: number;
    category: string;
}

const skills: Skill[] = [
    { name: "HTML 5", icon: SiHtml5, level: 95, category: "Frontend" },
    { name: "CSS 3", icon: SiCss, level: 90, category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, level: 92, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, level: 85, category: "Frontend" },
    { name: "React", icon: SiReact, level: 93, category: "Frontend" },
    { name: "Redux", icon: SiRedux, level: 80, category: "Frontend" },
    { name: "Tailwind", icon: SiTailwindcss, level: 95, category: "Frontend" },
    { name: "Node.js", icon: SiNodedotjs, level: 82, category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, level: 78, category: "Backend" },
    { name: "Python", icon: SiPython, level: 80, category: "Data" },
    { name: "Git", icon: FaGitAlt, level: 88, category: "Tools" },
    { name: "Figma", icon: SiFigma, level: 75, category: "Tools" },
    { name: "Docker", icon: SiDocker, level: 65, category: "Tools" },
    { name: "SQL", icon: SiMysql, level: 73, category: "Data" },
];

const categoryBadge: Record<string, string> = {
    Frontend: "text-blue-500  dark:text-blue-400  bg-blue-500/10  border-blue-500/20",
    Backend: "text-green-500 dark:text-green-400 bg-green-500/10 border-green-500/20",
    Data: "text-purple-500 dark:text-purple-400 bg-purple-500/10 border-purple-500/20",
    Tools: "text-orange-500 dark:text-orange-400 bg-orange-500/10 border-orange-500/20",
};

const Skills: React.FC = () => {
    return (
        <section className="dark:bg-[#080808] bg-[#F5F5F0] dark:text-white text-gray-900 py-24 px-6 md:px-12 dark:border-white/5 border-black/5 border-t transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs text-orange-400 uppercase tracking-[0.3em] font-medium mb-4">What I Work With</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white text-gray-900">My Skillset</h2>
                    </div>
                    <p className="dark:text-gray-500 text-gray-500 text-sm max-w-xs leading-relaxed">
                        A curated selection of technologies and tools I use to build world-class products.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
                                whileHover={{ y: -4, scale: 1.03 }}
                                className="group relative p-4 rounded-2xl dark:bg-white/4 bg-white dark:border-white/8 border-black/8 border flex flex-col items-center justify-center text-center gap-3 hover:border-orange-500/30 transition-all duration-300 cursor-default overflow-hidden shadow-sm dark:shadow-none"
                            >
                                {/* Subtle glow on hover */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 to-transparent" />

                                {/* Icon — neutral, scales to orange on hover */}
                                <div className="dark:text-gray-400 text-gray-400 group-hover:text-orange-500 transition-colors duration-300 relative z-10 flex items-center justify-center">
                                    <Icon size={28} />
                                </div>

                                <span className="text-xs font-semibold dark:text-gray-300 text-gray-600 group-hover:dark:text-white group-hover:text-gray-900 transition-colors leading-tight relative z-10">
                                    {skill.name}
                                </span>

                                {/* Category badge */}
                                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border relative z-10 ${categoryBadge[skill.category]}`}>
                                    {skill.category}
                                </span>

                                {/* Proficiency bar */}
                                <div className="w-full dark:bg-white/8 bg-black/8 rounded-full h-[3px] overflow-hidden relative z-10">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.04 + 0.3, duration: 0.8, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;