import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Reduce parallax intensity for mobile
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Resume PDF FIXED download link
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1u4SipPMfeJb215xjMps6x54R5FioCLum";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    currentTarget.style.setProperty('--mouse-x', String(x));
    currentTarget.style.setProperty('--mouse-y', String(y));
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white text-dark pt-20 md:pt-32 pb-16 md:pb-20"
      onMouseMove={handleMouseMove}
    >
      {/* BG Effects (Already Orange) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/15 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300/10 rounded-full blur-[150px] pointer-events-none animate-pulse delay-500"></div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-12"
      >
        {/* TEXT SECTION (Already Orange) */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
              Hi, I'm Tewodros Habtamu
            </h2>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tighter mb-8">
              Web Developer <br />
              <span className="text-orange-500">
                & Data Scientist
              </span>
            </h1>

            <p className="max-w-md text-gray-600 text-lg leading-relaxed mb-6">
              My expertise lies in transforming design concepts into interactive web applications that leave a lasting impression. I believe in the power of aesthetics and usability.
            </p>

            {/* Resume Button (Already Orange) */}
            <a
              href={resumeLink}
              download="Tewodros_Resume.pdf"
              className="inline-block px-8 py-4 rounded-full bg-orange-500 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-orange-600 transition-all duration-300 border border-orange-400/30"
            >
              Download Resume
            </a>

            <div className="flex items-center gap-4 mt-4">
              <div className="h-[1px] w-12 bg-gray-400"></div>
              <span className="text-sm uppercase tracking-widest text-gray-600">
                Scroll Down
              </span>
            </div>
          </motion.div>
        </div>

        {/* IMAGE / 3D CARD */}
        <div className="order-1 md:order-2 flex justify-center items-center perspective-1000 group">
          <div
            className="relative w-full max-w-[400px] md:max-w-[450px] aspect-[4/5] transition-transform duration-100 ease-out preserve-3d"
            style={{
              transform:
                'rotateY(calc(var(--mouse-x, 0) * 20deg)) rotateX(calc(var(--mouse-y, 0) * -20deg))',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-gray-200 shadow-xl transform translate-z-0 bg-gray-100">
              <img
                src="/images/profile.png"
                alt="Tewodros Habtamu"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/5 opacity-60"></div>
            </div>

            {/* UPDATED: Bottom-Right Circle - changed blue to red/orange blend */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-300/50 backdrop-blur-xl rounded-full transform translate-z-[30px] border border-gray-200 animate-pulse"></div>
            
            {/* UPDATED: Top-Left Circle - changed purple to orange */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-300/40 backdrop-blur-xl rounded-full transform translate-z-[20px] border border-gray-100"></div>

            {/* UPDATED: Blur - changed blue to orange */}
            <div className="absolute inset-0 bg-orange-100 blur-[80px] opacity-20 -z-10 transform translate-z-[-50px]"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;