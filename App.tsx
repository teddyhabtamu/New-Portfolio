import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Lenis from '@studio-freight/lenis';

const App: React.FC = () => {

  useEffect(() => {
    // Initialize Smooth Scroll with custom options
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Standard easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const [blurActive, setBlurActive] = useState(false);

  return (
    <main className="bg-[#080808] min-h-screen w-full cursor-none selection:bg-orange-500/30 selection:text-orange-100">
      <CustomCursor />
      <Navbar setBlurActive={setBlurActive} />
      <div className={blurActive ? "blur-xl transition-all duration-300" : "transition-all duration-300"}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;