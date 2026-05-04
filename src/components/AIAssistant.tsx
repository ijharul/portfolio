"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Minus } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Ijharul's AI assistant. (Live AI features are currently under progress, but I can answer questions from my local knowledge base!) Ask me anything about his skills, projects, or experience!" }
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const localKnowledge = [
    {
      keywords: ["education", "college", "university", "study", "degree", "tmsl", "techno main"],
      answer: "Ijharul is pursuing a B.Tech in Computer Science and Engineering at Techno Main Salt Lake (TMSL), Kolkata (Batch 2023–2027)."
    },
    {
      keywords: ["skills", "tech", "stack", "languages", "programming", "mern", "react"],
      answer: "His core stack is MERN (MongoDB, Express, React, Node.js). He is also proficient in Next.js, Tailwind CSS, C++, Java, and AI integration using OpenAI APIs."
    },
    {
      keywords: ["projects", "work", "portfolio", "alumni", "password", "nexus", "devflow", "vaultx"],
      answer: "His top projects are: 1. Campus Nexus (Alumni Platform), 2. DevFlow AI (AI Developer Playground), and 3. VaultX (Secure Password Manager). You can see them in the Projects section!"
    },
    {
      keywords: ["achievements", "hackathon", "sih", "hacktoberfest", "national", "dsa", "leetcode", "sql", "problems"],
      answer: "He has solved 200+ DSA problems and 30+ SQL problems on LeetCode. He is also a National Level Finalist for SIH 2025 and a Level 4 contributor in Hacktoberfest 2024."
    },

    {
      keywords: ["contact", "email", "phone", "call", "hire", "reach", "location"],
      answer: "You can reach Ijharul at haqueijharul0786@gmail.com or call him at +91 76349 27980. He is based in Kolkata, India."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.toLowerCase();
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Artificial delay for realism
    await new Promise(resolve => setTimeout(resolve, 800));

    let foundAnswer = "";
    for (const item of localKnowledge) {
      if (item.keywords.some(keyword => userMsg.includes(keyword))) {
        foundAnswer = item.answer;
        break;
      }
    }

    if (!foundAnswer) {
      foundAnswer = "I'm not exactly sure about that. However, Ijharul would be happy to discuss it! You can contact him at haqueijharul0786@gmail.com or via the Contact section below.";
    }

    setMessages((prev) => [...prev, { role: "assistant", content: foundAnswer }]);
    setIsLoading(false);
  };


  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] glass rounded-3xl overflow-hidden flex flex-col shadow-2xl border-white/20"
          >
            {/* Header */}
            <div className="p-4 bg-primary/20 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-xl">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Portfolio Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <Minus size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`mt-1 p-1.5 rounded-lg ${msg.role === "user" ? "bg-secondary/20" : "bg-primary/20"}`}>
                      {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.role === "user" 
                         ? "bg-secondary text-white rounded-tr-none" 
                         : "bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground rounded-tl-none"
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[80%]">
                    <div className="mt-1 p-1.5 rounded-lg bg-primary/20">
                      <Bot size={14} className="text-primary" />
                    </div>
                    <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                      <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-gray-500 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <div className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, skills..."
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary rounded-xl hover:scale-105 transition-transform disabled:opacity-50 shadow-lg shadow-primary/20"
                >
                  <Send size={18} className="text-white" />
                </button>
              </div>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-primary rounded-full shadow-2xl flex items-center justify-center group relative"
      >
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#030014] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
        </div>
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-white" />}
      </motion.button>
    </div>
  );
}
