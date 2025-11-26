import React, { useState } from 'react';
import { Product } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ShoppingBag, ArrowUpRight, Monitor, Wrench, Grid, Search } from 'lucide-react';

const products: Product[] = [
  {
    id: 1,
    title: "Nova Analytics",
    price: "$49/mo",
    shortDesc: "Real-time data tracking for enterprise.",
    fullDesc: "Nova Analytics is a comprehensive data intelligence platform designed for large-scale enterprises. Monitor user behavior, track sales funnels, and generate predictive reports using our AI-driven engine. Integrates seamlessly with your existing stack.",
    image: "https://picsum.photos/400/300?random=10",
    features: ["Real-time Dashboards", "AI Predictions", "Custom Reports", "Team Collaboration"],
    category: 'software'
  },
  {
    id: 2,
    title: "CloudSecure",
    price: "$99/mo",
    shortDesc: "Advanced cloud security shielding.",
    fullDesc: "Protect your digital assets with CloudSecure. Our automated threat detection system blocks malicious traffic before it reaches your servers. Includes DDoS protection, firewall management, and 24/7 security monitoring.",
    image: "https://picsum.photos/400/300?random=11",
    features: ["DDoS Protection", "WAF", "Bot Mitigation", "SSL Management"],
    category: 'software'
  },
  {
    id: 3,
    title: "DevStream",
    price: "$29/mo",
    shortDesc: "CI/CD pipeline automation tool.",
    fullDesc: "Accelerate your deployment cycles with DevStream. Automated testing, building, and deployment pipelines that scale with your team. Supports Docker, Kubernetes, and all major cloud providers out of the box.",
    image: "https://picsum.photos/400/300?random=12",
    features: ["Automated Deployments", "Container Registry", "Environment Management", "Rollback Support"],
    category: 'software'
  },
  {
    id: 4,
    title: "TeamSync",
    price: "$15/user",
    shortDesc: "Collaboration platform for remote teams.",
    fullDesc: "Bridge the gap between remote team members. TeamSync offers HD video conferencing, real-time document editing, and project management tools in one unified interface.",
    image: "https://picsum.photos/400/300?random=13",
    features: ["HD Video Calls", "Shared Whiteboard", "Task Management", "File Sharing"],
    category: 'software'
  },
  {
    id: 5,
    title: "MarketingFlow",
    price: "$79/mo",
    shortDesc: "Marketing automation and CRM.",
    fullDesc: "Streamline your marketing campaigns with flow-based automation. Segment audiences, send personalized emails, and track conversions all from a single dashboard.",
    image: "https://picsum.photos/400/300?random=14",
    features: ["Email Automation", "Lead Scoring", "Landing Page Builder", "A/B Testing"],
    category: 'software'
  },
  {
    id: 6,
    title: "FinanceAI",
    price: "$199/mo",
    shortDesc: "Automated financial forecasting.",
    fullDesc: "Take control of your finances with AI. FinanceAI connects to your bank accounts and accounting software to provide real-time cash flow analysis and future runway predictions.",
    image: "https://picsum.photos/400/300?random=15",
    features: ["Cash Flow Analysis", "Expense Categorization", "Tax Estimations", "Multi-currency Support"],
    category: 'software'
  },
  {
    id: 7,
    title: "Industrial Hardware Series",
    price: "Bulk Pricing",
    shortDesc: "Premium industrial grade hardware for global export.",
    fullDesc: "We are a premier exporter of industrial hardware tools serving global markets. Our heavy-duty product line includes precision power tools, hydraulic equipment, and essential hand tools engineered for reliability in the toughest environments. Perfect for large-scale construction projects and industrial manufacturing lines.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    features: ["Global Export Logistics", "ISO Certified Durability", "Bulk Order Discounts", "Lifetime Service Support"],
    category: 'hardware'
  },
  {
    id: 8,
    title: "Titanium Impact Drill X1",
    price: "$249.00",
    shortDesc: "Brushless 20V motor with titanium chuck.",
    fullDesc: "The Titanium Impact Drill X1 is engineered for professional contractors. Featuring a high-efficiency brushless motor that delivers 50% more runtime, a heavy-duty titanium chuck for superior bit retention, and an ergonomic grip for all-day use. Includes 2 batteries and a fast charger.",
    image: "https://images.unsplash.com/photo-1622072049187-5735db9d39e3?q=80&w=800&auto=format&fit=crop",
    features: ["Brushless Motor", "2000 in-lbs Torque", "2x 5Ah Batteries", "5-Year Warranty"],
    category: 'hardware'
  },
  {
    id: 9,
    title: "Hydraulic Floor Jack Pro",
    price: "Bulk Pricing",
    shortDesc: "3-Ton low profile rapid pump jack.",
    fullDesc: "Designed for automotive professionals and serious enthusiasts. This 3-ton heavy-duty steel floor jack features a dual piston rapid pump technology to reach max height in just 3.5 pumps. The low profile design fits under lowered vehicles easily.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
    features: ["3-Ton Capacity", "Dual Piston Pump", "Overload Protection", "Steel Construction"],
    category: 'hardware'
  },
  {
    id: 10,
    title: "Mechanic's Master Set",
    price: "$189.99",
    shortDesc: "200-piece chrome vanadium tool set.",
    fullDesc: "The ultimate collection for any workshop. This 200-piece set includes sockets, wrenches, hex keys, and drivers, all forged from high-quality chrome vanadium steel for maximum strength and corrosion resistance. Comes in a rugged, organized carry case.",
    image: "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=800&auto=format&fit=crop",
    features: ["200 Pieces", "Cr-V Steel", "72-Tooth Ratchets", "Lifetime Warranty"],
    category: 'hardware'
  }
];

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'software' | 'hardware'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' ? true : product.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = product.title.toLowerCase().includes(searchLower) || 
                          product.shortDesc.toLowerCase().includes(searchLower) ||
                          product.fullDesc.toLowerCase().includes(searchLower);
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-24 bg-light dark:bg-dark min-h-screen relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-dark dark:text-white">Our Products</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover our suite of digital solutions and professional hardware tools designed to elevate performance.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 group-hover:opacity-30 blur transition-opacity"></div>
                <div className="relative flex items-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full shadow-lg backdrop-blur-md">
                    <Search className="ml-4 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search for products..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full py-3 px-4 bg-transparent border-none focus:outline-none text-dark dark:text-white placeholder-gray-400"
                    />
                </div>
            </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
              activeCategory === 'all' 
                ? 'bg-dark dark:bg-white text-white dark:text-dark shadow-lg scale-105' 
                : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
            }`}
          >
            <Grid size={18} /> All Products
          </button>
          <button 
            onClick={() => setActiveCategory('software')}
            className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
              activeCategory === 'software' 
                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
                : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
            }`}
          >
            <Monitor size={18} /> Software Solutions
          </button>
          <button 
            onClick={() => setActiveCategory('hardware')}
            className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
              activeCategory === 'hardware' 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105' 
                : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
            }`}
          >
            <Wrench size={18} /> Hardware Tools
          </button>
        </div>

        {/* Product Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden glass-card bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/50 transition-colors duration-300 z-0 hover:z-20 hover:shadow-2xl dark:hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                {/* Holographic Border Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(45deg, transparent, rgba(0,102,255,0.1), transparent)' }}></div>
                
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                     <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md text-white shadow-lg ${
                         product.category === 'hardware' ? 'bg-orange-500/80' : 'bg-primary/80'
                     }`}>
                        {product.category}
                     </span>
                  </div>
                </div>
                
                <div className="p-8 relative">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-dark dark:text-white mb-1 group-hover:text-primary transition-colors">{product.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm h-10 line-clamp-2">{product.shortDesc}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100 dark:border-white/10">
                    <span className="text-xl font-bold text-dark dark:text-white">{product.price}</span>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="px-5 py-2 rounded-full bg-dark dark:bg-white text-white dark:text-dark font-semibold text-sm hover:bg-primary dark:hover:bg-gray-200 transition-colors shadow-lg"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-20">
                <p className="text-xl text-gray-500">No products found matching your search.</p>
            </div>
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`product-${selectedProduct.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white dark:bg-gray-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 border border-gray-200 dark:border-gray-700"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-black/10 dark:bg-white/10 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-colors z-20"
              >
                <X size={20} className="text-dark dark:text-white" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:hidden">
                    <h2 className="text-3xl font-bold text-white">{selectedProduct.title}</h2>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col h-full overflow-y-auto max-h-[60vh] md:max-h-full">
                <div className="hidden md:block mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
                        selectedProduct.category === 'hardware' ? 'bg-orange-500' : 'bg-primary'
                    }`}>
                        {selectedProduct.category}
                    </span>
                    <h2 className="text-3xl font-heading font-bold mt-2 text-dark dark:text-white">{selectedProduct.title}</h2>
                    <p className="text-2xl font-light text-primary mt-1">{selectedProduct.price}</p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h3 className="font-bold text-dark dark:text-white mb-2">Description</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProduct.fullDesc}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-dark dark:text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex gap-4">
                  <button className="flex-1 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                    {selectedProduct.category === 'hardware' || selectedProduct.price === 'Bulk Pricing' ? 'Request Quote' : 'Purchase Now'} <ArrowUpRight size={20} />
                  </button>
                  <button className="px-4 py-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <ShoppingBag size={20} className="text-dark dark:text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
