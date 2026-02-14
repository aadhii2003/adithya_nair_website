
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-slate-950/40 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Selected <span className="text-gradient">Artifacts.</span>
            </h2>
            <p className="text-slate-400 max-w-lg text-lg">
              A collection of digital solutions built with precision, focus, and modern performance in mind.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
            <div className="h-1 w-8 bg-indigo-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-[2rem] opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
              
              <div className="relative glass rounded-[2rem] overflow-hidden border-white/5 h-full flex flex-col p-8 card-glow transition-all duration-500">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl text-white mb-8 shadow-lg`}>
                  <i className={`fas ${project.icon}`}></i>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/70">{project.company}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-4 font-light">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono font-bold uppercase bg-white/5 text-slate-300 px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyan-500 transition-all">
                    <i className="fas fa-external-link-alt text-sm"></i>
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
