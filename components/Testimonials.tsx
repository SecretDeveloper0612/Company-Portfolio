import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO",
    company: "TechFlow",
    content: "NovaCorp transformed our digital infrastructure. Their attention to detail and modern tech stack approach gave us the competitive edge we needed.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateX",
    content: "The user experience of the products they delivered is unmatched. Smooth, responsive, and incredibly fast. Highly recommended!",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder",
    company: "StartUp Inc",
    content: "Professional, timely, and innovative. The team at NovaCorp understood our vision perfectly and executed it flawlessly.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-light dark:bg-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark dark:text-white">Client Success Stories</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 text-primary/10">
            <Quote size={120} />
          </div>

          <div className="relative z-10 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-8">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name} 
                    className="w-20 h-20 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-lg object-cover"
                  />
                </div>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic font-light mb-8 leading-relaxed">
                  "{testimonials[current].content}"
                </p>
                <div>
                  <h4 className="font-bold text-lg text-dark dark:text-white">{testimonials[current].name}</h4>
                  <p className="text-primary text-sm font-medium">{testimonials[current].role} at {testimonials[current].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <ChevronLeft size={24} className="text-gray-600 dark:text-gray-300" />
            </button>
            <button onClick={next} className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <ChevronRight size={24} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};