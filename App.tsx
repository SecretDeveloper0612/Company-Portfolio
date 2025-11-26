import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { ChatBot } from './components/ChatBot';
import { ScrollToTop } from './components/ScrollToTop';
import { Page } from './types';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={setCurrentPage} />;
      case 'products': return <Products />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'faq': return <FAQ />;
      case 'privacy': return <Privacy />;
      case 'terms': return <Terms />;
      default: return <Home navigate={setCurrentPage} />;
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center bg-white dark:bg-dark">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-primary"
          >
            NOVACORP
          </motion.h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentPage} />
      <ChatBot />
      <ScrollToTop />
    </div>
  );
}
