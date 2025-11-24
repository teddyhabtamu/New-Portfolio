import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="bg-secondary text-white py-24 md:py-32 px-6 md:px-12 rounded-t-3xl z-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* UPDATED: Dot color to bg-orange-500 */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-display font-bold mb-16 flex items-end gap-4">
            About Me <span className="w-3 h-3 rounded-full bg-orange-500 mb-2 animate-pulse"></span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Intro */}
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <p className="text-2xl md:text-4xl leading-tight font-light text-gray-200 mb-12">
                {/* UPDATED: Text colors to text-orange-400 */}
                I'm a frontend developer who loves building clean and easy-to-use websites. I work with <span className="text-orange-400">React</span>, <span className="text-orange-400">Tailwind</span> and <span className="text-orange-400">Node</span> to turn ideas into real websites.
              </p>
            </motion.div>

            {/* Divider / Spacer */}
            <div className="hidden lg:block lg:col-span-4"></div>

            {/* Details Grid */}
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-4 mb-4">My Approach</h3>
              <p className="text-gray-400 leading-relaxed">
                I enjoy learning new tools and finding smart ways to solve problems. I always try to make websites look great and work well.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-4 mb-4">Experience</h3>
              <p className="text-gray-400 leading-relaxed">
                I've worked on many projects, from small websites to bigger web apps. Working with other developers and designers has helped me grow a lot.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-4 mb-4">Always Learning</h3>
              <p className="text-gray-400 leading-relaxed">
                Tech is always changing, so I keep learning new things and stay updated. I also like sharing ideas with other developers.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;