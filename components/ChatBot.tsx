import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI, Chat } from "@google/genai";

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'Hello! I am Nova, your AI assistant. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatSession, setChatSession] = useState<Chat | null>(null);

  useEffect(() => {
    // Initialize Chat Session with Gemini
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: "You are Nova, a helpful, professional, and futuristic AI assistant for NovaCorp. NovaCorp is a premium technology company offering enterprise software solutions (like Nova Analytics, CloudSecure, DevStream) and industrial hardware tools (Titanium Drills, Hydraulic Jacks). Your tone should be modern, concise, and polite. Keep answers brief and relevant to the company's portfolio. Do not invent facts.",
      }
    });
    setChatSession(chat);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSession) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessage({ message: userMsg.text });
      const responseText = result.text || "I'm having trouble connecting right now.";
      
      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: responseText 
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: "Sorry, I encountered an error. Please try again later." 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${
            isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-primary hover:shadow-[0_0_20px_rgba(0,102,255,0.5)]'
        }`}
      >
        <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="text-white" size={24} />
                </motion.div>
            ) : (
                <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <MessageCircle className="text-white" size={28} />
                </motion.div>
            )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[380px] h-[500px] max-h-[80vh] z-[60] glass-card bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/20 dark:border-gray-700"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <Sparkles size={18} className="text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-dark dark:text-white text-sm">Nova AI</h3>
                    <p className="text-[10px] text-green-500 flex items-center gap-1 font-medium uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Online
                    </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-dark dark:hover:text-white transition-colors p-1">
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-br-none'
                        : 'bg-white dark:bg-white/10 text-dark dark:text-gray-200 rounded-bl-none border border-gray-100 dark:border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-white/10 p-4 rounded-2xl rounded-bl-none flex items-center gap-2 border border-gray-100 dark:border-white/5 shadow-sm">
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me about NovaCorp..."
                  className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 text-dark dark:text-white placeholder-gray-400 text-sm shadow-inner transition-all"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shadow-primary/20"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};