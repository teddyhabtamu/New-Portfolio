import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import Lenis from '@studio-freight/lenis';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Fallback skeleton or blank space for lazy loaded sections
const SectionFallback = () => <div className="min-h-[50vh] bg-[#080808]" />;

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
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </main>
  );
};

export default App;