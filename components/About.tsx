import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "10+", label: "Satisfied Clients" },
  { value: "5", label: "Open Source Repos" },
];

const About: React.FC = () => {

  return (
    <section id="about" className="bg-[#111111] text-white py-28 md:py-36 px-6 md:px-12 rounded-t-[2.5rem] z-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="w-full">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
            className="text-xs text-orange-400 uppercase tracking-[0.3em] font-medium mb-5"
          >
            About Me
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight mb-14 max-w-4xl"
          >
            Turning ideas into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              digital reality
            </span>
          </motion.h2>

          {/* Two-column intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 pb-16 border-b border-white/8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
            >
              I'm a full-stack developer who loves building clean, fast, and intuitive web apps. I work with{" "}
              <span className="text-orange-400 font-medium">React</span>,{" "}
              <span className="text-orange-400 font-medium">Node.js</span>{" "}
              and{" "}
              <span className="text-orange-400 font-medium">Python</span>{" "}
              to turn ideas into real products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6 text-gray-400 text-base leading-relaxed"
            >
              <p>
                I enjoy solving complex problems with elegant solutions. Whether it's architecting a full-stack app or analysing a dataset, I bring the same energy and attention to detail.
              </p>
              <p>
                Currently based in <span className="text-white">Addis Ababa, Ethiopia</span>, I'm open to remote work and exciting collaborations worldwide.
              </p>
            </motion.div>
          </div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                className="group p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              >
                <p className="text-4xl font-display font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;