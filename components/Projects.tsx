
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-slate-950/40 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter italic">Featured <span className="text-gradient">Work.</span></h2>
            <div className="flex gap-2">
                <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
                <div className="h-1 w-8 bg-teal-500 rounded-full"></div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2rem] opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                    <div className="relative glass rounded-[2rem] p-8 border-white/5 h-full flex flex-col hover:border-emerald-500/30 transition-all duration-500">
                        <div className="flex justify-between items-start mb-6">
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400/70">{project.company}</span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                <i className="fas fa-rocket text-xl text-emerald-400"></i>
                            </div>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[9px] font-mono font-bold uppercase bg-white/5 text-slate-300 px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-emerald-500 transition-all">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="flex-1 h-10 rounded-full bg-white text-slate-900 font-bold text-xs uppercase tracking-widest flex items-center justify-center hover:bg-emerald-400 transition-all">
                                View Project
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
