import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-slate-950/40 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter italic text-center">Featured <span className="text-gradient">Work.</span></h2>
            <div className="flex gap-2">
                <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
                <div className="h-1 w-8 bg-teal-500 rounded-full"></div>
            </div>
        </div>

        <div className="relative overflow-hidden py-10 group">
            {/* Gradient Overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-scroll hover:pause-scroll w-max gap-8 px-4">
                {[...PROJECTS, ...PROJECTS].map((project, index) => (
                    <motion.div
                        key={`${project.id}-${index}`}
                        className="w-[350px] flex-shrink-0 group/card relative"
                    >
                        <Link to={`/project/${project.id}`}>
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[2rem] opacity-0 group-hover/card:opacity-20 blur transition-opacity duration-500"></div>
                            <div className="relative glass rounded-[2rem] p-8 border-white/5 h-full flex flex-col hover:border-emerald-500/30 transition-all duration-500 bg-slate-900/40">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400/70">{project.company}</span>
                                        <h3 className="text-2xl font-bold text-white group-hover/card:text-emerald-400 transition-colors">{project.title}</h3>
                                    </div>
                                    <div className={`w-14 h-14 rounded-2xl bg-white overflow-hidden flex items-center justify-center border border-white/10 group-hover/card:scale-110 transition-transform duration-500 transform-gpu p-2`}>
                                        {project.logo ? (
                                            <img src={project.logo} alt={project.title} className="w-full h-full object-contain" />
                                        ) : (
                                            <i className={`fas ${project.icon} text-slate-800 text-xl`}></i>
                                        )}
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[9px] font-mono font-bold uppercase bg-white/5 text-slate-300 px-3 py-1.5 rounded-lg border border-white/5 group-hover/card:border-emerald-500/30 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center text-emerald-400 text-xs font-bold uppercase tracking-widest gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                                    View Project <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
