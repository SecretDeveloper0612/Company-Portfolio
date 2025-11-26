import React from 'react';
import { Page } from '../types';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Zap } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-light dark:bg-dark z-0">
        <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20 pointer-events-none"></div>
        {/* Animated Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/30 dark:bg-primary/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/30 dark:bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-primary/20 backdrop-blur-md shadow-lg shadow-primary/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">Next Gen Platform 2.0</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-heading font-extrabold leading-[1.1] mb-8 text-dark dark:text-white tracking-tight"
          >
            Build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-glow">
              Impossible.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We engineer digital experiences that redefine industries. From AI-driven analytics to industrial hardware, we build the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <button 
              onClick={() => onNavigate('products')}
              className="group px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-bold shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all flex items-center gap-3 text-lg"
            >
              Start Building <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 text-dark dark:text-white border border-gray-200 dark:border-white/10 rounded-full font-bold backdrop-blur-sm transition-all flex items-center gap-3 text-lg"
            >
              <PlayCircle size={20} /> Watch Demo
            </button>
          </motion.div>
        </div>

        {/* 3D Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-5xl mx-auto"
          style={{ perspective: '1000px' }}
        >
          <div className="relative z-10 rounded-xl overflow-hidden glass-card p-2 md:p-4 shadow-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/20">
            <div className="rounded-lg overflow-hidden bg-dark aspect-[16/9] relative group">
              <img 
                src="https://picsum.photos/1600/900?grayscale" 
                alt="Dashboard Interface" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                 <div className="grid grid-cols-3 gap-8 w-full">
                    <div className="glass p-4 rounded-lg border-l-4 border-primary">
                        <p className="text-gray-400 text-xs uppercase mb-1">System Status</p>
                        <p className="text-white font-bold flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Operational</p>
                    </div>
                    <div className="glass p-4 rounded-lg border-l-4 border-secondary">
                        <p className="text-gray-400 text-xs uppercase mb-1">Total Users</p>
                        <p className="text-white font-bold">1.2M+</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 z-20 hidden md:block"
          >
            <div className="glass-card p-4 rounded-2xl flex items-center gap-4 border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white shadow-lg">
                <Zap size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Performance</p>
                <p className="text-xl font-bold text-dark dark:text-white">99.9%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};