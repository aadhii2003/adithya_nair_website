
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { label: 'Year Experience', value: '1' },
    { label: 'Projects Deployed', value: '10+' },
    { label: 'Tech Stack', value: '15+' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
                  The <span className="text-gradient">Developer.</span>
                </h2>
                <div className="h-1 w-12 bg-cyan-500 rounded-full"></div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                I am a Junior Python Full Stack Developer with a Bachelor’s in Computer Applications and 1 year of hands-on experience building and deploying web applications.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Passionate about solving real-world problems, learning continuously, and creating clean, user-friendly digital experiences.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-3xl font-black text-white">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h3 className="text-xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">Education</h3>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="text-cyan-500 font-mono text-sm pt-1">2021-24</div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Bachelor of Computer Application</h4>
                    <p className="text-slate-500 text-sm">ILM College of Arts and Science, Methala</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="text-indigo-500 font-mono text-sm pt-1">2024</div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Python Full Stack Course</h4>
                    <p className="text-slate-500 text-sm">Luminar Techno Lab, Kakkanad</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
