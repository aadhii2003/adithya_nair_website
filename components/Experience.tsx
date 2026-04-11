import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden bg-[#09090b]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <div className="space-y-6 max-w-2xl text-center md:text-left mx-auto md:mx-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            Professional Record
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                            Career <span className="text-gradient">Timeline.</span>
                        </h2>
                    </div>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/50 via-teal-500/20 to-transparent hidden sm:block"></div>

                    <div className="space-y-20">
                        {EXPERIENCES.map((exp, idx) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Center Circle */}
                                <div className="absolute left-[39px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#09090b] border-4 border-emerald-500 z-20 shadow-[0_0_15px_rgba(16,185,129,0.5)] hidden sm:block"></div>

                                {/* Content Card */}
                                <div className="md:w-1/2 w-full">
                                    <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/5 hover:border-emerald-500/30 transition-all duration-500 group relative overflow-hidden">
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
                                        
                                        <div className="flex flex-col space-y-4 relative z-10">
                                            <div className="flex items-start justify-between">
                                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 text-xl border border-white/10">
                                                    <i className="fas fa-briefcase"></i>
                                                </div>
                                                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                                                    {exp.duration}
                                                </span>
                                            </div>
                                            
                                            <div>
                                                <h3 className="text-2xl font-black text-white leading-tight">{exp.role}</h3>
                                                <h4 className="text-emerald-500 text-sm font-bold tracking-widest uppercase mt-1 italic">{exp.company}</h4>
                                            </div>

                                            <p className="text-slate-400 text-sm leading-relaxed font-light">
                                                {exp.description}
                                            </p>

                                            {exp.responsibilities && (
                                                <ul className="space-y-2 mt-2">
                                                    {exp.responsibilities.map((task, i) => (
                                                        <li key={i} className="flex gap-3 text-xs text-slate-500">
                                                            <span className="text-emerald-500 mt-1">•</span>
                                                            {task}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
