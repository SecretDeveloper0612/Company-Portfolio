import React, { useState } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, PlayCircle, Zap, X } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-60 dark:opacity-40"
        >
          {/* High-quality tech abstract video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-network-connection-background-3136-large.mp4" type="video/mp4" />
        </video>
        
        {/* Overlays for Readability */}
        {/* Light mode: darker white overlay to keep text dark readable but video visible */}
        <div className="absolute inset-0 bg-white/80 dark:bg-black/70 mix-blend-hard-light dark:mix-blend-multiply transition-colors duration-300"></div>
        {/* Base fade for consistency */}
        <div className="absolute inset-0 bg-light/50 dark:bg-dark/80 backdrop-blur-[2px]"></div>
        {/* Grid pattern on top */}
        <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-20 pointer-events-none"></div>
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
            className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
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
              onClick={() => setIsVideoOpen(true)}
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

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setIsVideoOpen(false)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1" 
                title="Demo Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};