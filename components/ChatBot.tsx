
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GeminiService } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Welcome! I'm Adithya's AI. How can I help you navigate his career today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const gemini = useRef(new GeminiService());

  const suggestions = [
    "Tell me about your projects",
    "What are your core skills?",
    "How can I contact you?",
    "Tell me about Ringme"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', text }]);
    setInputValue('');
    setIsLoading(true);

    const response = await gemini.current.generateResponse(text);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[2000] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-80 md:w-[400px] glass rounded-3xl shadow-2xl overflow-hidden border border-cyan-500/20 flex flex-col h-[550px]"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-primary flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <i className="fas fa-bolt text-lg"></i>
                </div>
                <div>
                  <div className="font-bold text-sm tracking-tight">Adithya AI</div>
                  <div className="flex items-center gap-1.5 text-[10px] opacity-80 uppercase tracking-widest font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Operational
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Chat Content */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar bg-slate-950/30"
            >
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg' 
                      : 'glass text-slate-200 rounded-tl-none border-white/10'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="glass p-4 rounded-2xl rounded-tl-none border border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-150"></div>
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length < 3 && !isLoading && (
              <div className="px-6 py-2 flex flex-wrap gap-2 bg-slate-950/30">
                {suggestions.map(s => (
                  <button 
                    key={s}
                    onClick={() => handleSendMessage(s)}
                    className="text-[10px] bg-white/5 hover:bg-white/10 text-cyan-400 px-3 py-1.5 rounded-full border border-white/5 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Footer Form */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} 
              className="p-6 border-t border-white/5 bg-slate-900/50"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-5 pr-14 py-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-2 w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
                >
                  <i className="fas fa-paper-plane text-sm"></i>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-gradient-primary rounded-2xl shadow-2xl shadow-cyan-500/30 flex items-center justify-center text-white text-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-brain'} relative z-10`}></i>
      </motion.button>
    </div>
  );
};

export default ChatBot;
