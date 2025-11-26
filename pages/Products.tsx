import React, { useState } from 'react';
import { Product } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ShoppingBag, ArrowUpRight, Monitor, Wrench, Grid } from 'lucide-react';

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
    image: "https://picsum.photos/400/300?random=16",
    features: ["Global Export Logistics", "ISO Certified Durability", "Bulk Order Discounts", "Lifetime Service Support"],
    category: 'hardware'
  },
  {
    id: 8,
    title: "Titanium Impact Drill X1",
    price: "$249.00",
    shortDesc: "Brushless 20V motor with titanium chuck.",
    fullDesc: "The Titanium Impact Drill X1 is engineered for professional contractors. Featuring a high-efficiency brushless motor that delivers 50% more runtime, a heavy-duty titanium chuck for superior bit retention, and an ergonomic grip for all-day use. Includes 2 batteries and a fast charger.",
    image: "https://picsum.photos/400/300?random=17",
    features: ["Brushless Motor", "2000 in-lbs Torque", "2x 5Ah Batteries", "5-Year Warranty"],
    category: 'hardware'
  },
  {
    id: 9,
    title: "Hydraulic Floor Jack Pro",
    price: "Bulk Pricing",
    shortDesc: "3-Ton low profile rapid pump jack.",
    fullDesc: "Designed for automotive professionals and serious enthusiasts. This 3-ton heavy-duty steel floor jack features a dual piston rapid pump technology to reach max height in just 3.5 pumps. The low profile design fits under lowered vehicles easily.",
    image: "https://picsum.photos/400/300?random=18",
    features: ["3-Ton Capacity", "Dual Piston Pump", "Overload Protection", "Steel Construction"],
    category: 'hardware'
  },
  {
    id: 10,
    title: "Mechanic's Master Set",
    price: "$189.99",
    shortDesc: "200-piece chrome vanadium tool set.",
    fullDesc: "The ultimate collection for any workshop. This 200-piece set includes sockets, wrenches, hex keys, and drivers, all forged from high-quality chrome vanadium steel for maximum strength and corrosion resistance. Comes in a rugged, organized carry case.",
    image: "https://picsum.photos/400/300?random=19",
    features: ["200 Pieces", "Cr-V Steel", "72-Tooth Ratchets", "Lifetime Warranty"],
    category: 'hardware'
  }
];

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'software' | 'hardware'>('all');

  const filteredProducts = products.filter(product => 
    activeCategory === 'all' ? true : product.category === activeCategory
  );

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

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-2 p-1 bg-white dark:bg-white/5 rounded-full border border-gray-200 dark:border-white/10 backdrop-blur-sm">
            {[
              { id: 'all', label: 'All Products', icon: <Grid size={18} /> },
              { id: 'software', label: 'Software', icon: <Monitor size={18} /> },
              { id: 'hardware', label: 'Hardware', icon: <Wrench size={18} /> }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 font-bold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-gray-500 hover:text-dark dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="group relative rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.15)] flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-60"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </div>

                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors">{product.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2 flex-grow">{product.shortDesc}</p>
                  
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-4 rounded-xl bg-gray-50 dark:bg-white/5 text-dark dark:text-white font-bold flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all mt-auto"
                  >
                    View Details <ArrowUpRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative bg-white dark:bg-[#111] rounded-[2rem] overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl grid md:grid-cols-2 border border-white/10"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 bg-black/10 dark:bg-white/10 rounded-full z-20 hover:bg-red-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="h-72 md:h-auto relative group">
                 <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 <div className="absolute bottom-8 left-8 text-white md:hidden">
                    <h2 className="text-3xl font-bold">{selectedProduct.title}</h2>
                 </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded text-white ${selectedProduct.category === 'hardware' ? 'bg-orange-500' : 'bg-blue-500'}`}>
                    {selectedProduct.category}
                  </span>
                </div>
                <h2 className="text-4xl font-heading font-bold text-dark dark:text-white mb-2 hidden md:block">{selectedProduct.title}</h2>
                <div className="inline-block self-start px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-lg mb-6">
                    {selectedProduct.price}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  {selectedProduct.fullDesc}
                </p>

                <div className="mb-10 p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
                  <h4 className="font-bold text-dark dark:text-white mb-4 uppercase text-xs tracking-widest text-opacity-70">Key Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                        <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs shadow-lg shadow-green-500/30">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex gap-4">
                  <button className="flex-1 py-4 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/30 text-lg">
                    <ShoppingBag size={20} /> 
                    {selectedProduct.price.includes('Custom') || selectedProduct.price.includes('Bulk') ? 'Request Quote' : 'Purchase Now'}
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