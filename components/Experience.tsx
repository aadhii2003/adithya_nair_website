
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Work Experience</h2>
          <div className="h-1.5 w-20 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Connector */}
              {idx !== EXPERIENCES.length - 1 && (
                <div className="absolute top-20 left-8 bottom-[-40px] w-1 bg-slate-800 hidden md:block"></div>
              )}
              
              <div className="glass p-8 md:p-12 rounded-[2rem] border-white/5 flex flex-col md:flex-row gap-8 hover:bg-slate-900/40 transition-all">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/20">
                    <i className="fas fa-briefcase"></i>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm font-mono font-bold text-blue-400 bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20">{exp.duration}</span>
                  </div>
                  <div className="text-lg text-slate-300 font-semibold">{exp.company}</div>
                  <p className="text-slate-400 leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
