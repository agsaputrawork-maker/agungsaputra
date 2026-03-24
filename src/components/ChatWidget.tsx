import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, RefreshCw, Loader2 } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Halo! 👋 Saya Agung AI. Ada yang bisa saya bantu terkait sistem atau layanan kami hari ini?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const API_URL = "https://script.google.com/macros/s/AKfycbwwtVFXxlDPhuaSwEWB29_9i28FXbzrzmB4otsQ3Bq_2uS2c5epD4LRfUXwJky3TNXY/exec";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMsg: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ message: userMsg.text }),
      });

      const data = await response.json();

      const aiMsg: Message = {
        id: Date.now() + 1,
        text: data.reply || data.text || "Maaf, saya sedang mengalami gangguan koneksi. Coba lagi nanti.", // Sesuaikan dengan key JSON return dari Apps Script Anda
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMsg]);

    } catch (error) {
      console.error("Error fetching AI:", error);
      const errorMsg: Message = {
        id: Date.now() + 1,
        text: "Maaf, terjadi kesalahan jaringan. Silakan coba lagi.",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleReset = () => {
    setMessages([{
      id: Date.now(),
      text: "Percakapan direset. Halo! Ada yang bisa saya bantu lagi?",
      sender: 'ai',
      timestamp: new Date()
    }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      

      <div 
        className={`
          mb-4 w-[90vw] sm:w-[380px] max-h-[600px] h-[75vh] sm:h-[500px]
          bg-space-900/95 backdrop-blur-xl border border-white/10 
          rounded-2xl shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)] overflow-hidden 
          transition-all duration-300 origin-bottom-right flex flex-col
          ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4 pointer-events-none'}
        `}
      >

        <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 p-4 border-b border-white/10 flex justify-between items-center backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                <Bot size={20} className="text-white" />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-space-900 rounded-full animate-pulse"></span>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm tracking-wide">Agung AI Agent</h3>
              <p className="text-[10px] text-cyan-200 opacity-80 flex items-center gap-1">
                <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                Powered by Gemini
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button 
                onClick={handleReset}
                title="Reset Chat"
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
                <RefreshCw size={16} />
            </button>
            <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
                <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >

              <div className={`
                w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold
                ${msg.sender === 'user' ? 'bg-slate-700 text-slate-300' : 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-white'}
              `}>
                {msg.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
              </div>

              <div className={`
                max-w-[80%] p-3 text-sm leading-relaxed shadow-sm
                ${msg.sender === 'user' 
                  ? 'bg-cyan-600 text-white rounded-2xl rounded-br-none' 
                  : 'bg-space-800 border border-white/5 text-slate-200 rounded-2xl rounded-bl-none'}
              `}>
                {msg.text}
                <div className={`text-[10px] mt-1 opacity-50 ${msg.sender === 'user' ? 'text-cyan-100 text-right' : 'text-slate-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-end gap-2">
               <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot size={12} className="text-white" />
               </div>
               <div className="bg-space-800 border border-white/5 p-3 rounded-2xl rounded-bl-none flex gap-1 items-center h-10">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-200"></span>
               </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-3 bg-space-950/50 border-t border-white/10 backdrop-blur-md">
          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Tulis pesan..."
              disabled={isTyping}
              className="w-full bg-space-900/50 text-white text-sm rounded-full pl-5 pr-12 py-3 border border-white/10 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className={`
                absolute right-2 p-2 rounded-full transition-all duration-300
                ${!inputValue.trim() || isTyping 
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
                  : 'bg-cyan-500 text-space-900 hover:bg-cyan-400 hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.4)]'}
              `}
            >
              {isTyping ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className="ml-0.5" />}
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-[10px] text-slate-600">
               AI dapat membuat kesalahan. Mohon verifikasi informasi penting.
            </p>
          </div>
        </form>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group flex items-center justify-center w-14 h-14 rounded-full 
          bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.4)]
          hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-500
          ${isOpen ? 'rotate-90 scale-90' : 'rotate-0 hover:-translate-y-1'}
        `}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} className="fill-current" />}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-space-900"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;