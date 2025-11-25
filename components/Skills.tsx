import React from 'react';
import { motion } from 'framer-motion';
// 1. IMPORT NECESSARY ICONS FROM LUCIDE-REACT
import { 
    Code, Type, GitBranch, Database, Server, Component, Palette, LayoutGrid, Layers, Cloud, HardHat 
} from 'lucide-react';

// Map each skill to a specific Lucide icon component
const skillMap = [
    { name: "HTML 5", icon: LayoutGrid },
    { name: "CSS 3", icon: Palette },
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Type },
    { name: "React JS", icon: Component },
    { name: "Redux Toolkit", icon: Layers }, // Representing state management layers
    { name: "Tailwind CSS", icon: Palette }, // Focus on styling/design
    { name: "Node JS", icon: Server }, // Representing backend server
    { name: "MongoDB", icon: Database }, // Representing database
    { name: "Git", icon: GitBranch }, // Representing version control
    { name: "Figma", icon: LayoutGrid }, // Representing design tool layout
    { name: "Docker", icon: Cloud }, // Representing containerization/cloud
];

const Skills: React.FC = () => {
  return (
    <section className="bg-dark text-white py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-medium text-gray-400 sticky top-32">My Skillset</h3>
          </div>
          
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillMap.map((skill, index) => {
                const Icon = skill.icon; // Dynamically assign the icon component
                return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                  className="group p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center hover:border-orange-500/50 transition-colors cursor-default space-y-3"
                >
                    {/* ADDED ICON */}
                    <Icon 
                        size={32} 
                        className="text-gray-400 group-hover:text-orange-500 transition-colors"
                    />
                    
                  <span className="font-medium text-gray-200 group-hover:text-orange-200 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;