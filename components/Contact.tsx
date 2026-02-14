
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white">Get In <br /><span className="text-gradient">Touch.</span></h2>
              <p className="text-slate-400 text-lg max-w-md">
                Have a project idea or just want to chat? Send me a message and let's build something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: 'fa-envelope', label: 'Email', value: 'adithyanair2002324@gmail.com', href: 'mailto:adithyanair2002324@gmail.com' },
                { icon: 'fa-phone', label: 'Phone', value: '+91 9074997569', href: 'tel:+919074997569' },
                { icon: 'fa-map-marker-alt', label: 'Location', value: 'Alappuzha, Kerala, India', href: null }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-400 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl border-white/5">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-semibold text-lg hover:text-blue-400 transition-colors">{item.value}</a>
                    ) : (
                      <span className="text-white font-semibold text-lg">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {['fa-github', 'fa-linkedin', 'fa-twitter', 'fa-instagram'].map(icon => (
                <a key={icon} href="#" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all border-white/5">
                  <i className={`fab ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-10 rounded-[2.5rem] border-white/5 shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-[80px]"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                <input type="text" className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea rows={5} className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-primary py-5 rounded-2xl text-white font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-600/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
