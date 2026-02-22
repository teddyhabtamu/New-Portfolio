import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);
    try {
      await emailjs.send(
        process.env.VITE_EMAILJS_SERVICE_ID!,
        process.env.VITE_EMAILJS_TEMPLATE_ID!,
        { fullName: formData.fullName, email: formData.email, message: formData.message },
        process.env.VITE_EMAILJS_PUBLIC_KEY!
      );
      setAlert({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      setAlert({ type: 'error', message: 'Failed to send. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tewodros-habtamu-831754351', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/teddyhabtamu', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/TewodrosHa2669', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="bg-[#111111] text-white py-28 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs text-orange-400 uppercase tracking-[0.3em] font-medium mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
            Let's build something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              great together
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Avatar */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10">
                <img src="/images/profile.png" alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-semibold">Tewodros Habtamu</p>
                <p className="text-sm text-gray-500">Full Stack Developer</p>
              </div>
            </div>

            <p className="text-gray-400 text-base leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Contact info */}
            <div className="space-y-4 pt-2">
              {[
                { icon: Phone, label: '+251 948 004 309', href: 'tel:+251948004309' },
                { icon: Mail, label: 'tewodroshabtamu29@gmail.com', href: 'mailto:tewodroshabtamu29@gmail.com' },
                { icon: MapPin, label: 'Addis Ababa, Ethiopia', href: undefined },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-orange-500/30 group-hover:text-orange-400 transition-all duration-200 flex-shrink-0">
                    <Icon size={16} />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</a>
                  ) : (
                    <span className="text-sm text-gray-400">{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-orange-500/50 hover:text-orange-400 hover:bg-orange-500/8 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/3 rounded-3xl border border-white/8 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-orange-500/60 focus:bg-orange-500/5 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-orange-500/60 focus:bg-orange-500/5 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-orange-500/60 focus:bg-orange-500/5 transition-all duration-200 resize-none"
                  />
                </div>

                {alert && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium ${alert.type === 'success'
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                        : 'bg-red-500/10 border border-red-500/30 text-red-400'
                      }`}
                  >
                    {alert.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-4 rounded-xl font-semibold text-sm hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </motion.button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;