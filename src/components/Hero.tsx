"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="text-gradient min-h-[1.5em] inline-block">
      {currentText}
      <span className="animate-pulse ml-1 border-r-2 border-primary"></span>
    </span>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[180px]" />
      </div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-purple-400 font-medium tracking-widest uppercase mb-4"
            >
              Welcome to my world
            </motion.h2>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-foreground">Ijharul Haque</span>
              <br />
              <TypewriterText texts={["Full Stack Developer", "AI Enthusiast", "UI/UX Designer"]} />
            </h1>

            
            <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0">
              I build high-performance, visually stunning web applications with a focus on modern user experiences and cutting-edge technology.
            </p>


            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#projects" className="group relative px-8 py-4 bg-primary rounded-full font-semibold overflow-hidden transition-all hover:pr-12 shadow-lg shadow-primary/20">
                <span className="relative z-10 flex items-center gap-2 text-white">
                  View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              
              <a href="#contact" className="px-8 py-4 glass rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center gap-2 text-foreground">
                Contact Me
              </a>

              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border border-primary/30 rounded-full font-semibold hover:bg-primary/10 transition-colors flex items-center gap-2 text-primary"
              >
                <Download size={20} />
                Download CV
              </a>


              
              <div className="flex items-center gap-4 ml-2 lg:ml-6">
                <a href="https://github.com/ijharul" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-foreground hover:text-primary transition-all hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ijharul-haque-896394300/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full text-foreground hover:text-secondary transition-all hover:scale-110">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 glass p-2 animate-glow">
              <div className="w-full h-full rounded-full overflow-hidden relative">

                <Image 
                  src="/ijharul-profile.png" 
                  alt="Ijharul Haque" 
                  fill 
                  className="object-cover"
                />


              </div>
            </div>
            
            {/* Decorative Rings */}
            <div className="absolute inset-0 -z-10 animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full border border-dashed border-primary/30 rounded-full" />
            </div>
            <div className="absolute -inset-4 -z-10">
              <div className="w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
