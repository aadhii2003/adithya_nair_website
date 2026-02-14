
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-sm font-bold">AN</span>
            <span className="text-slate-400 font-medium">© 2025 Adithya Nair</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm text-slate-500 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-sm text-slate-500 hover:text-white transition-colors">Work</a>
            <a href="#contact" className="text-sm text-slate-500 hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span className="text-xs uppercase tracking-widest font-bold">Follow</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-github"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
