
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
                <div className="relative aspect-square rounded-3xl overflow-hidden glass border-white/10">
                  <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center">
                    <i className="fas fa-user-astronaut text-8xl text-emerald-400 opacity-20 group-hover:scale-110 transition-transform duration-500"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                  The <span className="text-gradient">Architect.</span>
                </h2>
                <div className="h-1 w-12 bg-emerald-500 rounded-full mx-auto md:mx-0"></div>
              </div>

              <p className="text-slate-400 text-lg leading-relaxed font-light">
                I'm Adithya Nair, a passionate <span className="text-white font-medium">Full Stack Python Developer</span> based in Kerala. With a strong foundation in modern web technologies, I specialize in building highly scalable, maintainable, and visually stunning digital experiences.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                {[
                  { label: 'Experience', value: '1+ Year' },
                  { label: 'Projects', value: '15+' },
                  { label: 'Availability', value: 'Immediate' },
                  { label: 'Role', value: 'Fullstack' }
                ].map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h3 className="text-xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">Education</h3>
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="space-y-1">
                  <h4 className="text-white font-bold">BCA Graduate</h4>
                  <p className="text-slate-500 text-xs">PVM College of Arts and Science</p>
                  <div className="text-emerald-500 font-mono text-sm pt-1">2021-24</div>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 flex-shrink-0"><i className="fas fa-briefcase"></i></div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold">Python Full Stack Intern</h4>
                  <p className="text-slate-500 text-xs">Luminar Techno Lab</p>
                  <div className="text-teal-500 font-mono text-sm pt-1">2024</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
