
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Helmet } from 'react-helmet-async';

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="relative z-0 min-h-screen bg-[#09090b] pt-44 pb-20">
      <Helmet>
        <title>{project.title} | Adithya Nair Projects</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-400 transition-colors mb-12 group">
          <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
          <span className="text-xs font-bold uppercase tracking-widest">Back to Home</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className={`w-24 h-24 rounded-3xl bg-white flex items-center justify-center p-4 shadow-2xl shadow-emerald-500/10 border border-white/10`}>
                {project.logo ? (
                    <img src={project.logo} alt={project.title} className="w-full h-full object-contain" />
                ) : (
                    <i className={`fas ${project.icon} text-slate-900 text-3xl`}></i>
                )}
              </div>
              <div>
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-4">
                  {project.title.split(' ')[0]} <br />
                  <span className="text-gradient">{project.title.split(' ').slice(1).join(' ')}</span>
                </h1>
                <p className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-sm ml-1">{project.company}</p>
              </div>
            </div>

            <p className="text-slate-400 text-xl leading-relaxed font-light">
              {project.longDescription || project.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-8">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl text-sm font-black uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20 group">
                  Launch Project <i className="fas fa-external-link-alt ml-2 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform"></i>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-sm font-black uppercase tracking-widest transition-all border border-white/10">
                  <i className="fab fa-github mr-2"></i> Repository
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8 lg:sticky lg:top-40"
          >
            {project.features && (
              <div className="glass p-12 rounded-[3rem] border-white/5 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-xl font-bold text-white uppercase tracking-[0.2em] border-b border-white/10 pb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
                  Core Features
                </h3>
                <ul className="space-y-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-5 text-slate-300 text-base leading-relaxed group">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-[10px] flex-shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <i className="fas fa-check"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <h3 className="text-xl font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
                  Project Impact
               </h3>
               <p className="text-slate-400 text-lg leading-relaxed italic font-light">
                 "Designed to solve complex communication needs with a focus on security, speed, and cross-platform accessibility."
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
