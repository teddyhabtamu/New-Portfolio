import React, { useState } from 'react';
import { motion } from 'framer-motion';
// IMPORTED 'Phone'
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
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
        'service_7htvmpg',
        'template_7kgwbbw',
        {
          fullName: formData.fullName,
          email: formData.email,
          message: formData.message,
        },
        'AGD0_3afrklercDPQ'
      );
      setAlert({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setAlert({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-dark text-white py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="w-full md:w-1/3 space-y-8">
             {/* IMAGE FIX: Changed object-cover to object-contain to prevent clipping */}
             <div className="relative w-20 h-20 rounded-full bg-orange-600/20 flex items-center justify-center mb-8 overflow-hidden">
               <img 
                 src="/images/profile.png" 
                 alt="Avatar" 
                 className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
               />
             </div>
             <h2 className="text-5xl md:text-6xl font-bold font-display">Let's work <br /> together</h2>
             
             <div className="space-y-4 pt-8">
                 {/* ADDED PHONE NUMBER */}
                 <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <Phone size={20} />
                  <a href="tel:+251948004309">+251 948 004 309</a>
                </div>
                {/* EXISTING EMAIL */}
                <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <Mail size={20} />
                  <a href="mailto:tewodroshabtamu29@gmail.com">tewodroshabtamu29@gmail.com</a>
                </div>
                {/* EXISTING LOCATION */}
                <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                  <MapPin size={20} />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
             </div>
          </div>

          <div className="w-full md:w-2/3">
             <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="relative group">
                   <label htmlFor="fullName" className="text-sm text-gray-500 uppercase tracking-wider mb-2 block">01. Your Name</label>
                   <input 
                     type="text" 
                     id="fullName"
                     name="fullName"
                     placeholder="What's your good name?" 
                     value={formData.fullName}
                     onChange={handleChange}
                     className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-600"
                   />
                </div>

                <div className="relative group">
                   <label htmlFor="email" className="text-sm text-gray-500 uppercase tracking-wider mb-2 block">02. Your Email</label>
                   <input 
                     type="email" 
                     id="email"
                     name="email"
                     placeholder="What's your email address?" 
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-600"
                   />
                </div>

                <div className="relative group">
                   <label htmlFor="message" className="text-sm text-gray-500 uppercase tracking-wider mb-2 block">03. Your Message</label>
                   <textarea 
                     id="message"
                     name="message"
                     rows={4}
                     placeholder="What you want to say?" 
                     value={formData.message}
                     onChange={handleChange}
                     className="w-full bg-transparent border-b border-gray-700 py-4 text-xl focus:outline-none focus:border-orange-500 transition-colors placeholder:text-gray-600 resize-none"
                   />
                </div>

                {alert && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`px-4 py-3 rounded-md text-white ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
                  >
                    {alert.message}
                  </motion.div>
                )}

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full md:w-auto bg-white text-black px-12 py-6 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'} <Send size={20} />
                </motion.button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;