
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
    <div className="fixed bottom-14 sm:bottom-5 right-3 sm:right-5 z-50 flex flex-col items-end gap-2 sm:gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[calc(100vw-1.5rem)] sm:w-72 md:w-[360px] h-[460px] sm:h-[500px] glass rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 sm:p-4 flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                    <Sparkles className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-400 border-2 border-indigo-600 rounded-full"></div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-xs sm:text-sm">Savin AI Agent</h3>
                  <p className="text-[8px] sm:text-[10px] text-blue-100 uppercase tracking-widest font-bold">Online & Ready</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 sm:p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white"
                  title="Minimize"
                >
                  <Minus className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 sm:p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white"
                  title="Close Assistant"
                >
                  <X className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 sm:p-3.5 space-y-3 scroll-smooth themed-soft">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-md shadow-blue-500/20'
                    : 'themed-panel text-content rounded-tl-none shadow-sm'
                    }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="themed-panel shadow-sm px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm themed-faint flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-content-faint rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-content-faint rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-content-faint rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                    Analyzing...
                  </div>
                </div>
              )}
            </div>

            {messages.length < 5 && !loading && (
              <div className="px-3 sm:px-3.5 pb-2 pt-2 themed-soft flex flex-col xss:flex-wrap gap-2">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(s)}
                    className="w-full text-[9px] sm:text-[10px] themed-panel hover:bg-blue-500/10 dark:hover:bg-white/10 hover:text-content text-content px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-colors whitespace-nowrap sm:whitespace-normal sm:flex-1 shadow-sm"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="p-3 sm:p-3.5 border-t themed-border themed-panel flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Savin..."
                className="flex-1 themed-soft border themed-border rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:border-blue-500/50 text-content placeholder:text-content-faint transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={loading}
                className="bg-blue-600 p-2 sm:p-2.5 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
              >
                <Send className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
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
          className="w-12 sm:w-14 h-12 sm:h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40 group overflow-hidden relative flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <MessageSquare className="w-6 sm:w-7 h-6 sm:h-7 text-white relative z-10" />
        </motion.button>
      )}
    </div>
  );
};

export default AIChat;
