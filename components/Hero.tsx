
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Logo from './Logo';

const Hero: React.FC = () => {
  // Explicitly typing variants to fix transition compatibility errors with index signatures
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Using a tuple for ease to match the expected Easing type exactly [number, number, number, number]
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -60, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px]"
        />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left space-y-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyan-500/20 text-cyan-400 text-xs font-black tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            Python Fullstack Developer
          </motion.div>
          
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              <motion.span variants={wordVariants} className="block">Design.</motion.span>
              <motion.span variants={wordVariants} className="block text-gradient">Develop.</motion.span>
              <motion.span variants={wordVariants} className="block">Deploy.</motion.span>
            </h1>
          </div>
          
          <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Crafting scalable architectures and immersive interfaces. I turn complex logic into <span className="text-white font-medium border-b border-cyan-500/30">seamless digital reality</span>.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-primary text-white font-extrabold rounded-2xl transition-all shadow-2xl shadow-cyan-500/30 flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              <span className="relative z-10">Explore Portfolio</span>
              <i className="fas fa-chevron-right group-hover:translate-x-1 transition-transform relative z-10"></i>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', scale: 1.05 }}
              className="px-10 py-5 glass text-white font-bold rounded-2xl transition-all border border-white/10 flex items-center justify-center gap-3"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.5 }}
          className="flex justify-center items-center relative"
        >
          <div className="relative w-80 h-80 md:w-[550px] md:h-[550px] flex items-center justify-center">
            {/* Spinning Rings with varying speeds and directions */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[1px] border-dashed border-cyan-500/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 border-[1px] border-indigo-500/10 rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-24 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-2xl"
            />
            
            {/* Main Visual: stylized logo */}
            <Logo className="w-56 h-56 md:w-96 md:h-96 relative z-10 drop-shadow-[0_0_50px_rgba(34,211,238,0.2)]" />
            
            {/* Floating Tech Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 glass px-5 py-2.5 rounded-2xl text-cyan-400 font-mono text-sm border-cyan-500/30 shadow-2xl backdrop-blur-xl"
            >
              <i className="fa-brands fa-python mr-2"></i>
              Python
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-4 glass px-5 py-2.5 rounded-2xl text-indigo-400 font-mono text-sm border-indigo-500/30 shadow-2xl backdrop-blur-xl"
            >
              <i className="fa-solid fa-bolt mr-2"></i>
              FastAPI
            </motion.div>
            <motion.div 
              animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-10 w-2 h-2 bg-cyan-500 rounded-full blur-[2px]"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-slate-800 rounded-full flex justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-cyan-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
