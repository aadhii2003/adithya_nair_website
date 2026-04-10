import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-[#09090b]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-6">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-sm font-bold text-white">AN</span>
                        <p className="text-slate-500 text-xs font-bold tracking-widest uppercase italic">
                            © 2025 Adithya Nair. Built with <span className="text-emerald-400">Emerald Engine</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link to="/about" className="text-sm text-slate-500 hover:text-white transition-colors">About</Link>
                        <Link to="/projects" className="text-sm text-slate-500 hover:text-white transition-colors">Work</Link>
                        <Link to="/contact" className="text-sm text-slate-500 hover:text-white transition-colors">Contact</Link>
                    </div>

                    <div className="flex gap-6 text-slate-500 text-lg">
                        <a href="https://github.com/aadhii2003" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors"><i className="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/adithyanair" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
