"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Message sent successfully!");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setIsSending(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 glass rounded-3xl space-y-8">
                <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest">Email Me</p>
                      <p className="text-foreground font-medium">haqueijharul0786@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-secondary/20 transition-colors">
                      <MapPin size={24} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest">Location</p>
                      <p className="text-foreground font-medium">Kolkata, West Bengal, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-accent/20 transition-colors">
                      <Phone size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest">Phone</p>
                      <p className="text-foreground font-medium">+91 76349 27980</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-black/10 dark:border-white/10">
                  <p className="text-sm font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-4 text-center">Social Profiles</p>
                  <div className="flex items-center justify-center gap-4">
                    <a href="https://github.com/ijharul" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl text-foreground hover:text-primary transition-all hover:scale-110">
                      <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ijharul-haque-896394300/" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl text-foreground hover:text-secondary transition-all hover:scale-110">
                      <Linkedin size={24} />
                    </a>
                    <a href="mailto:haqueijharul0786@gmail.com" className="p-4 glass rounded-2xl text-foreground hover:text-accent transition-all hover:scale-110">
                      <Mail size={24} />
                    </a>
                  </div>

                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 glass rounded-3xl space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-500 dark:text-gray-400 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-500 dark:text-gray-400 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-secondary transition-colors text-foreground"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-500 dark:text-gray-400 ml-1">Subject</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent transition-colors text-foreground"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-500 dark:text-gray-400 ml-1">Your Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell me more about your project..."
                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl py-4 px-6 focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isSending}
                  className="w-full group relative py-4 bg-primary rounded-2xl font-bold overflow-hidden transition-all flex items-center justify-center gap-2 text-white shadow-lg shadow-primary/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSending ? "Sending Message..." : "Send Message"} 
                    {!isSending && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </SectionReveal>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-black/10 dark:border-white/10 text-center">
          <p className="text-slate-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-foreground font-medium">Ijharul Haque</span>. All rights reserved.
          </p>
          <div className="mt-4 text-[10px] uppercase tracking-widest text-slate-400 dark:text-gray-600 font-bold">
            Built with Next.js, Tailwind & Framer Motion
          </div>
        </div>

      </div>
    </section>
  );
}
