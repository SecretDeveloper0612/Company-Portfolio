import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  { question: "Do you offer custom software development?", answer: "Yes, our primary service is tailored software solutions. We work closely with you to define requirements and build a product that fits your exact needs." },
  { question: "What is your pricing model?", answer: "We offer both project-based fixed pricing and time-and-materials models for ongoing support. Contact us for a detailed quote based on your requirements." },
  { question: "How long does a typical project take?", answer: "Timeline varies significantly by scope. A simple MVP might take 4-8 weeks, while enterprise platforms can take 6+ months. We provide detailed timelines during the planning phase." },
  { question: "Do you provide post-launch support?", answer: "Absolutely. We offer various maintenance packages to ensure your software remains secure, up-to-date, and performant after launch." },
  { question: "Is my data secure?", answer: "Security is our top priority. We follow industry best practices, including encryption at rest and in transit, regular security audits, and compliance with GDPR/CCPA regulations." },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pt-20 pb-24 bg-light dark:bg-dark min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold mb-4 text-dark dark:text-white">Frequently Asked Questions</h1>
          <p className="text-gray-600 dark:text-gray-400">Everything you need to know about our services and process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-dark dark:text-white">{faq.question}</span>
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};