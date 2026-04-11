import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${scrolled ? 'py-4 glass' : 'py-8 bg-[#09090b]/80 backdrop-blur-lg border-b border-white/5'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-white font-black tracking-tighter leading-none">ADITHYA</span>
            <span className="text-[10px] text-emerald-400 font-bold tracking-[0.3em]">NAIR</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${location.pathname === link.path
                  ? 'text-emerald-400'
                  : 'text-slate-400 hover:text-emerald-400'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-white text-slate-900 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-colors inline-block"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        <button className="md:hidden text-white text-2xl">
          <i className="fas fa-bars-staggered"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
