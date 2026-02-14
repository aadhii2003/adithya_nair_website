
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Experience'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
      scrolled ? 'py-4 glass' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <Logo className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-white font-black tracking-tighter leading-none">ADITHYA</span>
            <span className="text-[10px] text-cyan-400 font-bold tracking-[0.3em]">NAIR</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {link}
            </a>
          ))}
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2.5 bg-white text-slate-900 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors"
          >
            Contact
          </motion.a>
        </div>

        <button className="md:hidden text-white text-2xl">
          <i className="fas fa-bars-staggered"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
