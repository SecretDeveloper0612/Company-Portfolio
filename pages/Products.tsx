import React, { useState } from 'react';
import { Product } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ShoppingBag, ArrowUpRight, Wrench, Grid, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const products: Product[] = [
  {
    id: 1,
    title: "Industrial Hardware Series",
    price: "Bulk Pricing",
    shortDesc: "Premium industrial grade hardware for global export.",
    fullDesc: "We are a premier exporter of industrial hardware tools serving global markets. Our heavy-duty product line includes precision power tools, hydraulic equipment, and essential hand tools engineered for reliability in the toughest environments. Perfect for large-scale construction projects and industrial manufacturing lines.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531297461136-82lw9z197119?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Global Export Logistics", "ISO Certified Durability", "Bulk Order Discounts", "Lifetime Service Support"],
    category: 'hardware'
  },
  {
    id: 2,
    title: "Titanium Impact Drill X1",
    price: "$249.00",
    shortDesc: "Brushless 20V motor with titanium chuck.",
    fullDesc: "The Titanium Impact Drill X1 is engineered for professional contractors. Featuring a high-efficiency brushless motor that delivers 50% more runtime, a heavy-duty titanium chuck for superior bit retention, and an ergonomic grip for all-day use. Includes 2 batteries and a fast charger.",
    image: "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1517524951667-839446d5c645?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Brushless Motor", "2000 in-lbs Torque", "2x 5Ah Batteries", "5-Year Warranty"],
    category: 'hardware'
  },
  {
    id: 3,
    title: "Hydraulic Floor Jack Pro",
    price: "Bulk Pricing",
    shortDesc: "3-Ton low profile rapid pump jack.",
    fullDesc: "Designed for automotive professionals and serious enthusiasts. This 3-ton heavy-duty steel floor jack features a dual piston rapid pump technology to reach max height in just 3.5 pumps. The low profile design fits under lowered vehicles easily.",
    image: "https://images.unsplash.com/photo-1486262715619-01b8c245a352?q=80&w=800&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1486262715619-01b8c245a352?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1530046339160-71153320c0b6?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["3-Ton Capacity", "Dual Piston Pump", "Overload Protection", "Steel Construction"],
    category: 'hardware'
  },
  {
    id: 4,
    title: "Mechanic's Master Set",
    price: "$189.99",
    shortDesc: "200-piece chrome vanadium tool set.",
    fullDesc: "The ultimate collection for any workshop. This 200-piece set includes sockets, wrenches, hex keys, and drivers, all forged from high-quality chrome vanadium steel for maximum strength and corrosion resistance. Comes in a rugged, organized carry case.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["200 Pieces", "Cr-V Steel", "72-Tooth Ratchets", "Lifetime Warranty"],
    category: 'hardware'
  },
  {
    id: 5,
    title: "Pro-Series Angle Grinder",
    price: "$129.99",
    shortDesc: "High-torque 11 Amp motor for heavy duty grinding.",
    fullDesc: "Built for industrial environments, this angle grinder features a dust-ejection system to protect the motor, a paddle switch for safety, and tool-free guard adjustment. Perfect for metal working and masonry cutting.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    images: [
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563294317-0985559c5d15?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["11 Amp Motor", "11,000 RPM", "Dust Ejection System", "Vibration Control Handle"],
    category: 'hardware'
  },
  {
    id: 6,
    title: "Laser Distance Measure",
    price: "$89.50",
    shortDesc: "High-precision digital measuring up to 165ft.",
    fullDesc: "Ditch the tape measure. Our Laser Distance Measure provides accuracy within 1/16 inch at distances up to 165 feet. Features a backlit color display, Bluetooth connectivity for data export, and rugged IP54 dust/water resistance.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["165ft Range", "Bluetooth Connectivity", "IP54 Rated", "Backlit Display"],
    category: 'hardware'
  },
  {
    id: 7,
    title: "Pneumatic Impact Wrench",
    price: "$159.00",
    shortDesc: "1/2-inch air impact gun for automotive repair.",
    fullDesc: "Delivering a massive 1200 ft-lbs of nut-busting torque, this pneumatic impact wrench is a beast in the auto shop. Lightweight composite body reduces fatigue while the twin-hammer mechanism ensures consistent power delivery.",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["1200 ft-lbs Torque", "Twin Hammer Mechanism", "Composite Body", "Adjustable Power"],
    category: 'hardware'
  },
  {
    id: 8,
    title: "Cordless Circular Saw",
    price: "$199.99",
    shortDesc: "7-1/4 inch saw with 60 degree bevel capacity.",
    fullDesc: "Cut the cord without sacrificing power. This 20V Max circular saw rips through 2x material with ease. Features an electric brake, LED cut line guide, and magnesium shoe for durability. Ideal for framing and general construction.",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6dd2a?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544724569-5f546fd6dd2a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["5800 RPM", "Electric Brake", "LED Guide", "Magnesium Shoe"],
    category: 'hardware'
  },
  {
    id: 9,
    title: "Heavy-Duty Bench Vise",
    price: "$145.00",
    shortDesc: "6-inch swivel base vise with anvil.",
    fullDesc: "The foundation of any workbench. This 6-inch bench vise is cast from 30,000 PSI gray iron. It features a 360-degree swivel base, large anvil work surface, and replaceable hardened steel jaws. A must-have for fabrication and assembly.",
    image: "https://images.unsplash.com/photo-1616353329119-c4ddf4b2ce6b?q=80&w=800&auto=format&fit=crop", 
    images: [
      "https://images.unsplash.com/photo-1616353329119-c4ddf4b2ce6b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["30,000 PSI Iron", "360° Swivel Base", "Hardened Jaws", "Large Anvil"],
    category: 'hardware'
  },
  {
    id: 10,
    title: "Digital Multimeter Pro",
    price: "$75.00",
    shortDesc: "True RMS multimeter for electricians.",
    fullDesc: "Troubleshoot electrical issues safely and accurately. This True RMS digital multimeter measures voltage, current, resistance, capacitance, and temperature. Safety rated CAT III 1000V / CAT IV 600V with a rugged rubber holster.",
    image: "https://images.unsplash.com/photo-1581093458791-9f302e6d862e?q=80&w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581093458791-9f302e6d862e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["True RMS", "Auto-Ranging", "Temp Probe Included", "CAT IV 600V Safety"],
    category: 'hardware'
  }
];

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'hardware'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProducts = products.filter(product => {
    // Since we only have hardware now, 'all' and 'hardware' effectively show the same, 
    // but we keep the logic flexible for future categories.
    const matchesCategory = activeCategory === 'all' ? true : product.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = product.title.toLowerCase().includes(searchLower) || 
                          product.shortDesc.toLowerCase().includes(searchLower) ||
                          product.fullDesc.toLowerCase().includes(searchLower);
    
    return matchesCategory && matchesSearch;
  });

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const nextImage = (e: React.MouseEvent, total: number) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % total);
  };

  const prevImage = (e: React.MouseEvent, total: number) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="pt-24 pb-24 bg-light dark:bg-dark min-h-screen relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-dark dark:text-white">Our Products</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover our premium range of professional hardware tools and industrial equipment designed for performance and durability.
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
                        placeholder="Search tools and equipment..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full py-3 px-4 bg-transparent border-none focus:outline-none text-dark dark:text-white placeholder-gray-400"
                    />
                </div>
            </div>
        </div>

        {/* Filters - Simplified for Hardware Only Focus */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
              activeCategory === 'all' 
                ? 'bg-dark dark:bg-white text-white dark:text-dark shadow-lg scale-105' 
                : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
            }`}
          >
            <Grid size={18} /> All Tools
          </button>
          <button 
            onClick={() => setActiveCategory('hardware')}
            className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
              activeCategory === 'hardware' 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105' 
                : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
            }`}
          >
            <Wrench size={18} /> Hardware Only
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
                     <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md text-white shadow-lg bg-orange-500/80">
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
                      onClick={() => openModal(product)}
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
              onClick={closeModal}
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
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/10 dark:bg-white/10 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-colors z-20"
              >
                <X size={20} className="text-dark dark:text-white" />
              </button>

              {/* Image Carousel Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative group bg-gray-100 dark:bg-black/50 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={currentImageIndex}
                        src={selectedProduct.images ? selectedProduct.images[currentImageIndex] : selectedProduct.image} 
                        alt={selectedProduct.title} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>
                
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                    <>
                        <button 
                            onClick={(e) => prevImage(e, selectedProduct.images!.length)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={(e) => nextImage(e, selectedProduct.images!.length)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0"
                        >
                            <ChevronRight size={24} />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {selectedProduct.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:hidden pointer-events-none">
                    <h2 className="text-3xl font-bold text-white">{selectedProduct.title}</h2>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col h-full overflow-y-auto max-h-[60vh] md:max-h-full">
                <div className="hidden md:block mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-orange-500">
                        {selectedProduct.category}
                    </span>
                    <h2 className="text-3xl font-heading font-bold mt-2 text-dark dark:text-white">{selectedProduct.title}</h2>
                    <p className="text-2xl font-light text-primary mt-1">{selectedProduct.price}</p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h3 className="font-bold text-dark dark:text-white mb-2">Description</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {selectedProduct.fullDesc}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-dark dark:text-white mb-2">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10 flex gap-4">
                  <button className="flex-1 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                    {selectedProduct.price === "Bulk Pricing" ? "Request Quote" : "Add to Cart"} <ShoppingBag size={18} />
                  </button>
                  <button className="px-4 py-3 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 text-dark dark:text-white transition-colors">
                    <ArrowUpRight size={20} />
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