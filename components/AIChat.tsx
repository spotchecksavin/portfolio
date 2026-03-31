
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Minus } from 'lucide-react';
import { askAiAboutSavin } from '../services/geminiService';

const SUGGESTIONS = [
  "Tell me about his AI projects",
  "What is his tech stack?",
  "Show impact metrics",
  "How to contact him?"
];

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hello! I'm Savin's portfolio assistant. I can tell you about his work in RPA, AI pipelines, or performance optimizations. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const handleSend = async (text: string = input) => {
    const msg = text.trim();
    if (!msg || loading) return;

    setMessages(prev => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setLoading(true);

    const aiResponse = await askAiAboutSavin(msg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || "I encountered a brief technical issue. Savin is likely optimizing my backend right now!" }]);
    setLoading(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-80 md:w-[400px] h-[550px] glass rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                     <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Savin AI Agent</h3>
                  <p className="text-[10px] text-blue-100 uppercase tracking-widest font-bold">Online & Ready</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white"
                  title="Minimize"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsVisible(false)} 
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white"
                  title="Close Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none shadow-md shadow-blue-500/20' 
                      : 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-gray-200 rounded-tl-none border border-slate-200 dark:border-white/10'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-3 rounded-2xl text-sm text-slate-500 dark:text-gray-400 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                    Analyzing context...
                  </div>
                </div>
              )}
            </div>

            {messages.length < 5 && !loading && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSend(s)}
                    className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-gray-400 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="p-4 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black/20 flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me about Savin's impact..."
                className="flex-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 transition-all"
              />
              <button 
                onClick={() => handleSend()}
                disabled={loading}
                className="bg-blue-600 p-2.5 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button 
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40 group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <MessageSquare className="w-8 h-8 text-white relative z-10" />
        </motion.button>
      )}
    </div>
  );
};

export default AIChat;
