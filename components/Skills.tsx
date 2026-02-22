import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: "HTML 5", emoji: "🌐", level: 95, category: "Frontend" },
    { name: "CSS 3", emoji: "🎨", level: 90, category: "Frontend" },
    { name: "JavaScript", emoji: "⚡", level: 92, category: "Frontend" },
    { name: "TypeScript", emoji: "🔷", level: 85, category: "Frontend" },
    { name: "React JS", emoji: "⚛️", level: 93, category: "Frontend" },
    { name: "Redux", emoji: "🔄", level: 80, category: "Frontend" },
    { name: "Tailwind CSS", emoji: "💨", level: 95, category: "Frontend" },
    { name: "Node JS", emoji: "🟢", level: 82, category: "Backend" },
    { name: "MongoDB", emoji: "🍃", level: 78, category: "Backend" },
    { name: "Python", emoji: "🐍", level: 80, category: "Data" },
    { name: "Git", emoji: "🌿", level: 88, category: "Tools" },
    { name: "Figma", emoji: "✏️", level: 75, category: "Tools" },
    { name: "Docker", emoji: "🐳", level: 65, category: "Tools" },
    { name: "SQL", emoji: "🗄️", level: 73, category: "Data" },
];

const categoryColors: Record<string, string> = {
    Frontend: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    Backend: "text-green-400 bg-green-500/10 border-green-500/20",
    Data: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    Tools: "text-orange-400 bg-orange-500/10 border-orange-500/20",
};

const Skills: React.FC = () => {
    return (
        <section className="bg-[#080808] text-white py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs text-orange-400 uppercase tracking-[0.3em] font-medium mb-4">What I Work With</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">My Skillset</h2>
                    </div>
                    <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                        A curated selection of technologies and tools I use to build world-class products.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
                            whileHover={{ y: -4, scale: 1.03 }}
                            className="group relative p-4 rounded-2xl bg-white/4 border border-white/8 flex flex-col items-center justify-center text-center gap-3 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300 cursor-default overflow-hidden"
                        >
                            {/* Subtle glow on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/5 to-transparent" />

                            <span className="text-2xl">{skill.emoji}</span>
                            <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors leading-tight">
                                {skill.name}
                            </span>

                            {/* Category badge */}
                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[skill.category]}`}>
                                {skill.category}
                            </span>

                            {/* Proficiency bar */}
                            <div className="w-full bg-white/8 rounded-full h-[3px] overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.04 + 0.3, duration: 0.8, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;