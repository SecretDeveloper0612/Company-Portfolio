import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="pt-20 pb-24 bg-light dark:bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-heading font-bold text-dark dark:text-white mb-4">Let's Talk</h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Have a project in mind? Looking for a partnership? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-dark dark:text-white">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">hello@novacorp.com</p>
                  <p className="text-gray-600 dark:text-gray-400">support@novacorp.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-dark dark:text-white">Call Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-dark dark:text-white">Visit Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Innovation Blvd, Tech District<br/>San Francisco, CA 94107
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=123+Innovation+Blvd,+San+Francisco,+CA+94107" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary mt-2 transition-colors group"
                  >
                    View on Map <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden relative grayscale">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f7f1f81!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1602568897716!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                aria-hidden="false" 
                tabIndex={0}
                className="opacity-70 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-10 rounded-3xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-dark dark:text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-dark dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-dark dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={5}
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-dark dark:text-white"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all transform ${
                  status === 'success' ? 'bg-green-500' : 'bg-primary hover:bg-blue-700 hover:-translate-y-1'
                }`}
              >
                {status === 'submitting' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === 'success' ? (
                  "Message Sent!"
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};