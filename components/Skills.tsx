
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SKILLS } from '../constants';

const SkillCard = ({ title, icon, color, children, className = "" }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative glass rounded-[2rem] p-6 border-white/5 transition-colors group overflow-hidden h-full ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${color} text-xl border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
            <i className={`fas ${icon}`}></i>
          </div>
          <h3 className="text-xl font-black text-white tracking-tight uppercase italic">{title}</h3>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className={`absolute -top-24 -right-24 w-64 h-64 opacity-10 blur-[100px] rounded-full transition-colors duration-500 ${color.replace('text-', 'bg-')}`}></div>
      
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </motion.div>
  );
};

const SkillItem = ({ name, icon }: { name: string; icon: string }) => (
  <motion.div 
    whileHover={{ x: 3 }}
    className="flex flex-col gap-1.5 w-full"
  >
    <div className="flex items-center justify-between group/item">
      <div className="flex items-center gap-2.5">
        <i className={`${icon} text-slate-500 group-hover:text-cyan-400 text-sm transition-colors w-4 text-center`}></i>
        <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">{name}</span>
      </div>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className={`h-1 w-2.5 rounded-full ${i <= 3 ? 'bg-cyan-500/40 shadow-[0_0_5px_rgba(34,211,238,0.3)]' : 'bg-white/5'}`}></div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#010409]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-cyan-500/[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Capabilities
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Digital <span className="text-gradient">Arsenal.</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl font-light">
            Expertise across the full stack, optimized for scalability and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Backend */}
          <SkillCard 
            title="Backend" 
            icon="fa-code" 
            color="text-cyan-400" 
          >
            <div className="space-y-4">
              {SKILLS.filter(s => s.category === 'Backend').map(skill => (
                <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
              <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Core Focus</span>
                <div className="flex gap-1.5">
                   <i className="fa-brands fa-python text-cyan-500 text-xs"></i>
                   <i className="fa-solid fa-bolt text-cyan-400 text-xs"></i>
                </div>
              </div>
            </div>
          </SkillCard>

          {/* Frontend */}
          <SkillCard 
            title="Frontend" 
            icon="fa-layer-group" 
            color="text-blue-400" 
          >
            <div className="space-y-4">
              {SKILLS.filter(s => s.category === 'Frontend').map(skill => (
                <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </SkillCard>

          {/* Data */}
          <SkillCard 
            title="Data" 
            icon="fa-database" 
            color="text-indigo-400" 
          >
            <div className="space-y-4">
              {SKILLS.filter(s => s.category === 'Databases').map(skill => (
                <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </SkillCard>

          {/* DevOps */}
          <SkillCard 
            title="DevOps" 
            icon="fa-cloud" 
            color="text-purple-400" 
          >
            <div className="grid grid-cols-1 gap-4">
              {SKILLS.filter(s => s.category === 'DevOps').map(skill => (
                <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </SkillCard>

          {/* Tools */}
          <SkillCard 
            title="Tools" 
            icon="fa-tools" 
            color="text-emerald-400" 
          >
            <div className="space-y-4">
              {SKILLS.filter(s => s.category === 'Tools').map(skill => (
                <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </SkillCard>

          {/* Languages */}
          <SkillCard 
            title="Communication" 
            icon="fa-language" 
            color="text-orange-400" 
          >
            <div className="space-y-6 flex flex-col justify-center h-full pb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-300">English</span>
                <span className="text-[10px] font-bold text-orange-400/70 uppercase">Professional</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-300">Malayalam</span>
                <span className="text-[10px] font-bold text-orange-400/70 uppercase">Native</span>
              </div>
            </div>
          </SkillCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
