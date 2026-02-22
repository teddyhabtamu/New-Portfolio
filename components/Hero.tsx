import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1u4SipPMfeJb215xjMps6x54R5FioCLum";

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Done" },
    { value: "10+", label: "Happy Clients" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080808] text-white pt-20 pb-10"
    >
      {/* Layered ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-orange-500/8 blur-[130px] rounded-full" />
        {/* Subtle left glow */}
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-orange-600/5 blur-[100px] rounded-full" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12"
      >
        {/* LEFT: Text Content */}
        <div className="order-2 lg:order-1 flex flex-col gap-6">

          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 w-fit"
          >
            <Sparkles size={13} className="text-orange-400" />
            <span className="text-xs font-medium text-orange-300 tracking-widest uppercase">Available for work</span>
          </motion.div>

          {/* Name + Title */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          >
            <p className="text-gray-400 text-lg font-display font-medium mb-3">
              Hi, I'm Tewodros Habtamu
            </p>
            <h1 className="font-display font-bold leading-[1.05] tracking-tight text-white">
              <span className="text-5xl md:text-6xl lg:text-7xl block">Web Developer</span>
              <span className="text-5xl md:text-6xl lg:text-7xl block mt-1">
                & {" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">
                    Data Scientist
                  </span>
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md font-sans"
          >
            I transform design concepts into fast, interactive web experiences that leave lasting impressions. Passionate about aesthetics, performance, and clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.33 }}
            className="flex flex-wrap gap-4 items-center pt-2"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-500 text-white text-sm font-semibold overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-[1.03]"
            >
              View My Work
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href={resumeLink}
              download="Tewodros_Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white text-sm font-semibold backdrop-blur-sm hover:border-orange-500/60 hover:bg-white/5 transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-8 pt-4 border-t border-white/8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-display font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Profile Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
          className="order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[380px] mx-auto">
            {/* Glow ring behind card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 to-transparent blur-2xl scale-110" />

            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4]">
              <img
                src="/images/profile.png"
                alt="Tewodros Habtamu"
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating status badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-5 left-6 flex items-center gap-3 bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-gray-200">Open to opportunities</span>
            </motion.div>

            {/* Floating tech badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 bg-orange-500 rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <p className="text-xs font-bold text-white">React · Node · Python</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;