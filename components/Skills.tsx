import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "HTML 5", "CSS 3", "JavaScript", "TypeScript", "React JS", 
  "Redux Toolkit", "Tailwind CSS", "Node JS", "MongoDB", 
  "Git", "Figma", "Docker"
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
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  // 1. UPDATED: Background hover tint to orange (R:249 G:115 B:22)
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                  // 2. UPDATED: Border hover to orange
                  // 3. ADDED: 'group' class to control the child text color
                  className="group p-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-center hover:border-orange-500/50 transition-colors cursor-default"
                >
                  {/* 4. ADDED: group-hover transition for text */}
                  <span className="font-medium text-gray-200 group-hover:text-orange-200 transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;