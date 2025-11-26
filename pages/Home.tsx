import React from 'react';
import { Page } from '../types';
import { Hero } from '../components/Hero';
import { Layers, Zap, Shield, TrendingUp, ArrowRight, Code, Rocket, Search, Cpu, Globe, Anchor } from 'lucide-react';
import { motion } from 'framer-motion';
import { Testimonials } from '../components/Testimonials';

interface HomeProps {
  navigate: (page: Page) => void;
}

const features = [
  { icon: <Layers size={28} />, title: "Scalable Architecture", desc: "Built for growth with robust, cloud-native infrastructure." },
  { icon: <Zap size={28} />, title: "Lightning Fast", desc: "Optimized performance ensuring sub-second load times." },
  { icon: <Shield size={28} />, title: "Enterprise Security", desc: "Bank-grade encryption and security protocols as standard." },
  { icon: <TrendingUp size={28} />, title: "Analytics Ready", desc: "Deep insights and data visualization capabilities built-in." },
];

const partners = [
  "TechFlow", "InnovateX", "Vertex Global", "Omega Systems", "BlueSky", "Quantum", "Nebula", "CyberDyne"
];

const processSteps = [
  { icon: <Search size={32} />, title: "Discovery", desc: "We dive deep into your requirements and business goals." },
  { icon: <Code size={32} />, title: "Development", desc: "Agile sprints with regular updates and transparent progress." },
  { icon: <Rocket size={32} />, title: "Launch", desc: "Seamless deployment with dedicated post-launch support." },
];

const blogPosts = [
  { title: "The Future of AI in Manufacturing", category: "Insights", image: "https://picsum.photos/600/400?random=50", date: "Oct 24, 2023" },
  { title: "Scaling Cloud Infrastructure 101", category: "Tech", image: "https://picsum.photos/600/400?random=51", date: "Oct 18, 2023" },
  { title: "Design Principles for 2024", category: "Design", image: "https://picsum.photos/600/400?random=52", date: "Sep 30, 2023" },
];

export const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div className="w-full bg-light dark:bg-dark overflow-hidden">
      <Hero onNavigate={navigate} />

      {/* NEW SECTION: Partners Marquee */}
      <section className="py-10 border-y border-gray-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.02]">
        <div className="overflow-hidden relative w-full">
          <div className="flex w-[200%] animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-1 min-w-[200px] text-center">
                <span className="text-2xl font-bold text-gray-300 dark:text-gray-700 hover:text-primary transition-colors cursor-default uppercase tracking-widest">
                  {partner}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-light dark:from-dark to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-light dark:from-dark to-transparent z-10"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-dark dark:text-white">
                Engineered for <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                We combine design thinking with technical excellence to deliver products that stand out.
              </p>
            </div>
            <button onClick={() => navigate('products')} className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Features <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl glass-card bg-gradient-card border-t border-white/20 hover:border-primary/50 hover:bg-white/10 dark:hover:bg-white/5 transition-all group cursor-pointer hover:-translate-y-2 hover-glow"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark dark:text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Process */}
      <section className="py-24 bg-white dark:bg-black/20 relative">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
             <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Workflow</span>
             <h2 className="text-4xl font-heading font-bold mt-2 text-dark dark:text-white">From Concept to Reality</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent border-t-2 border-dashed border-gray-300 dark:border-gray-700 z-0"></div>

            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 mx-auto bg-white dark:bg-gray-900 rounded-full border-4 border-light dark:border-gray-800 flex items-center justify-center mb-6 shadow-xl relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-dark dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90"></div>
        <img src="https://picsum.photos/1920/1080?grayscale" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
             {[
               { label: "Active Users", value: "50K+", icon: <Globe size={20} /> },
               { label: "Countries", value: "30+", icon: <Anchor size={20} /> },
               { label: "Products", value: "15+", icon: <Cpu size={20} /> },
               { label: "Uptime", value: "99.9%", icon: <Zap size={20} /> }
             ].map((stat, idx) => (
               <div key={idx} className="px-4">
                 <div className="flex items-center justify-center gap-2 text-blue-300 mb-2">{stat.icon}</div>
                 <div className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">{stat.value}</div>
                 <div className="text-white/60 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* NEW SECTION: Blog/News */}
      <section className="py-24 bg-light dark:bg-dark">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Latest News</span>
              <h2 className="text-3xl font-heading font-bold text-dark dark:text-white mt-2">Insights & Updates</h2>
            </div>
            <button className="hidden md:flex text-sm font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">View All Articles</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-gray-400 text-xs mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm cursor-pointer group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[3rem] p-12 md:p-24 overflow-hidden text-center group">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-dark z-0"></div>
            <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white">
                Ready to transform <br/> your digital presence?
              </h2>
              <p className="mb-10 text-gray-300 text-xl leading-relaxed">
                Join hundreds of innovative companies building the future with NovaCorp today.
              </p>
              <button 
                onClick={() => navigate('contact')}
                className="px-10 py-5 bg-white text-dark rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};