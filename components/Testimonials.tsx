import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Tewodros developed a seamless and efficient digital library system for our organization. His dedication and attention to detail significantly improved our accessibility.",
    author: "Muluken Fana",
    role: "IT Manager, Fana Broadcasting Corp"
  },
  {
    id: 2,
    quote: "His work on the PeakPulse Fitness Tracker was top-notch. The app was intuitive, responsive, and delivered exactly what we needed. Tewodros is reliable and talented.",
    author: "Haile Melekot",
    role: "Product Advisor & Lecturer, AAiT"
  },
  {
    id: 3,
    quote: "Working with Tewodros on the Brainwave project was a pleasure. His front-end skills and creative input made a huge difference in the user experience.",
    author: "Shyam Bhagwat",
    role: "UI/UX Lead, Brainwave Inc."
  },
  {
    id: 4,
    quote: "Tewodros brought our Nike branding concept to life with clean code and smooth design execution. He’s not just a developer—he’s a creative partner.",
    author: "Adrian",
    role: "Creative Director"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-secondary text-white py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">Testimonials.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 md:p-12 rounded-2xl relative border border-white/5 hover:border-white/10 transition-colors"
            >
              <Quote className="text-blue-500 mb-6 opacity-50" size={40} />
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-sm font-bold">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{item.author}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;