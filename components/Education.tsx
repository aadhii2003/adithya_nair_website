import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
    return (
        <section id="education" className="py-32 relative overflow-hidden bg-[#09090b]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                    >
                        Foundation
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic text-center leading-none">
                        The <span className="text-gradient">Blueprint.</span>
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative">
                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-emerald-500/[0.02] pointer-events-none"></div>

                    {EDUCATION.map((edu, idx) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="glass p-10 rounded-[3rem] border-white/5 relative overflow-hidden flex flex-col items-center text-center hover:border-emerald-500/30 transition-all duration-700">
                                {/* Gradient Orb */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-colors"></div>
                                
                                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-emerald-400 text-3xl mb-10 border border-white/10 group-hover:scale-110 transition-transform duration-700 shadow-2xl">
                                    <i className={`fas ${edu.icon}`}></i>
                                </div>

                                <div className="space-y-6 relative z-10">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500/80 bg-emerald-500/5 px-4 py-2 rounded-full border border-emerald-500/10">
                                            {edu.duration}
                                        </span>
                                        <h3 className="text-3xl font-black text-white leading-tight pt-4">
                                            {edu.degree}
                                        </h3>
                                        <h4 className="text-slate-400 font-bold italic tracking-wide">
                                            {edu.institution}
                                        </h4>
                                    </div>
                                    
                                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto font-light">
                                        {edu.description}
                                    </p>
                                </div>

                                {/* Abstract Lines */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
