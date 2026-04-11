
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
                I'm Adithya Nair, a visionary <span className="text-white font-medium">Full Stack Python Architect</span>. I bridge the gap between complex backend logic and immersive frontend interfaces, crafting digital solutions that are not just functional, but architectural masterpieces.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                 Specializing in high-performance Python ecosystems, I design systems that scale. From real-time signaling to intricate database schemas, I build the core of modern web technology.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {[
                  { label: 'Experience', value: '1+ Year' },
                  { label: 'Cloud Focus', value: 'AWS/DO' },
                  { label: 'Arsenal', value: 'Python' },
                  { label: 'Architecture', value: 'Fullstack' }
                ].map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
