import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
    const categories = ['Backend', 'Databases', 'DevOps', 'Tools'];
    
    const getCategoryIcon = (category: string) => {
        switch(category) {
            case 'Backend': return 'fa-shield-halved';
            case 'Databases': return 'fa-database';
            case 'DevOps': return 'fa-server';
            case 'Tools': return 'fa-microchip';
            default: return 'fa-code';
        }
    }

    const getCategoryLabel = (cat: string) => {
        if (cat === 'DevOps') return 'Server Ecosystem';
        if (cat === 'Backend') return 'Core Systems';
        return cat;
    }

    return (
        <section id="skills" className="py-32 relative overflow-hidden bg-[#09090b]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-black uppercase tracking-[0.4em] mb-6 shadow-2xl shadow-emerald-500/10"
                    >
                        Weaponry & Expertise
                    </motion.div>
                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter italic text-center leading-none">
                        Digital <span className="text-gradient">Arsenal.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-10 rounded-[3.5rem] border-white/5 relative overflow-hidden group hover:bg-slate-900/40 transition-all duration-700"
                        >
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/5 rounded-full blur-[100px] group-hover:bg-emerald-500/10 transition-colors"></div>
                            
                            <div className="flex items-center gap-6 mb-10 relative z-10">
                                <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-emerald-400 text-2xl border border-white/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                                    <i className={`fas ${getCategoryIcon(cat)}`}></i>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white tracking-tight">
                                        {getCategoryLabel(cat)}
                                    </h3>
                                    <div className="h-1 w-12 bg-emerald-500/50 rounded-full mt-1"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                                {SKILLS.filter(s => s.category === cat).map(skill => (
                                    <div 
                                        key={skill.name}
                                        className="flex flex-col gap-3 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all duration-500 group/item"
                                    >
                                        <i className={`${skill.icon} text-lg text-slate-500 group-hover/item:text-emerald-400 transition-colors duration-500`}></i>
                                        <span className="text-xs font-black uppercase tracking-widest text-slate-300 group-hover/item:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
