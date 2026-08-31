import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';
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
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        { fullName: formData.fullName, email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
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
    <section
      id="contact"
      className="relative bg-paper-deep dark:bg-ink-soft text-ink dark:text-paper px-6 md:px-10 py-24 md:py-36 border-t border-line dark:border-line-dark"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Massive CTA line */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="text-[12vw] md:text-[9vw] lg:text-[7.5rem] font-display font-semibold lowercase leading-[0.92] tracking-[-0.02em] mb-12"
        >
          let's<br /><em className="font-light italic opacity-80">build together</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base md:text-lg font-light italic opacity-70 leading-relaxed max-w-xl mb-16"
        >
          Have a project in mind, or just want to say hi? I'm always open to new ideas and collaborations.
        </motion.p>

        {/* Direct contact line — inline details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="border-t border-line dark:border-line-dark"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <a href="mailto:tewodroshabtamu29@gmail.com" className="group flex items-center justify-between gap-3 py-5 pr-4 border-b md:border-b-0 md:border-r border-line dark:border-line-dark">
              <div className="flex items-center gap-3">
                <Mail size={15} className="opacity-40 shrink-0" />
                <span className="text-sm group-hover:opacity-60 transition-opacity break-all">tewodroshabtamu29@gmail.com</span>
              </div>
              <ArrowUpRight size={14} className="opacity-30 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href="tel:+251948004309" className="group flex items-center justify-between gap-3 py-5 px-0 md:px-4 border-b md:border-b-0 md:border-r border-line dark:border-line-dark">
              <div className="flex items-center gap-3">
                <Phone size={15} className="opacity-40 shrink-0" />
                <span className="text-sm group-hover:opacity-60 transition-opacity">+251 948 004 309</span>
              </div>
              <ArrowUpRight size={14} className="opacity-30 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="flex items-center justify-between gap-3 py-5 pl-0 md:pl-4">
              <div className="flex items-center gap-3">
                <MapPin size={15} className="opacity-40 shrink-0" />
                <span className="text-sm opacity-70">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form — inline fields, no box */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1], delay: 0.18 }}
          onSubmit={handleSubmit}
          className="mt-14 md:mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
            <div className="flex items-baseline gap-4 border-b border-line dark:border-line-dark">
              <label htmlFor="fullName" className="font-mono text-xs opacity-40 shrink-0">
                name /
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border-0 pb-3 py-3 text-lg focus:outline-none placeholder:opacity-30"
              />
            </div>
            <div className="flex items-baseline gap-4 border-b border-line dark:border-line-dark">
              <label htmlFor="email" className="font-mono text-xs opacity-40 shrink-0">
                email /
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-0 pb-3 py-3 text-lg focus:outline-none placeholder:opacity-30"
              />
            </div>
          </div>

          <div className="flex items-baseline gap-4 border-b border-line dark:border-line-dark mt-8">
            <label htmlFor="message" className="font-mono text-xs opacity-40 shrink-0">
              message /
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-0 pb-3 py-3 text-lg focus:outline-none placeholder:opacity-30 resize-none"
            />
          </div>

          {alert && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-sm font-medium mt-6 ${alert.type === 'success'
                ? 'text-[#22C55E]'
                : 'text-[#EF4444]'
                }`}
            >
              {alert.message}
            </motion.p>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-2 text-base font-medium uppercase tracking-[0.1em] bg-ink text-paper dark:bg-paper dark:text-ink px-8 py-3.5 hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  sending
                </>
              ) : (
                <>
                  send message <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>

            {/* Socials */}
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 text-sm opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Icon size={16} strokeWidth={1.5} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
