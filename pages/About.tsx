import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../types';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team: TeamMember[] = [
  { id: 1, name: "Alexander Wright", role: "CEO & Founder", image: "https://picsum.photos/200/200?random=20" },
  { id: 2, name: "Sophia Li", role: "Head of Design", image: "https://picsum.photos/200/200?random=21" },
  { id: 3, name: "Marcus Johnson", role: "Lead Engineer", image: "https://picsum.photos/200/200?random=22" },
  { id: 4, name: "Emma Davis", role: "Marketing Director", image: "https://picsum.photos/200/200?random=23" },
];

const timeline = [
  { year: "2018", title: "Inception", desc: "NovaCorp was founded in a small garage with a vision to revolutionize SaaS." },
  { year: "2019", title: "First Launch", desc: "Launched our flagship product Nova Analytics, gaining 1000 users in week one." },
  { year: "2021", title: "Global Expansion", desc: "Opened offices in London and Tokyo. Reached 1M+ active users." },
  { year: "2023", title: "Future Tech", desc: "Started R&D on AI-driven cloud security solutions." },
];

export const About = () => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      {/* Header */}
      <section className="pt-20 pb-12 bg-white dark:bg-gray-900/50">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 text-dark dark:text-white"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-primary">NovaCorp</span>
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are a team of dreamers, builders, and creators dedicated to shaping the digital landscape through innovation and design.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-dark dark:text-white">Our Journey</h2>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-[45%]"></div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10 shrink-0 border-4 border-light dark:border-dark">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-[45%] glass-card p-6 rounded-xl hover:bg-white/50 dark:hover:bg-white/10 transition-colors">
                  <span className="text-primary font-bold text-lg">{item.year}</span>
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-dark dark:text-white">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div 
                key={member.id}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="rounded-2xl overflow-hidden aspect-square mb-4 shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-dark dark:text-white">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="text-gray-400 hover:text-primary"><Twitter size={18} /></a>
                    <a href="#" className="text-gray-400 hover:text-primary"><Linkedin size={18} /></a>
                    <a href="#" className="text-gray-400 hover:text-primary"><Github size={18} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};