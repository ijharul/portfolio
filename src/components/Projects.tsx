"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Sparkles, ArrowRight } from "lucide-react";

import Image from "next/image";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    title: "Campus Nexus",
    description: "A comprehensive Alumni Association Platform with real-time chat, AI-powered interactions, and secure donation modules.",
    tech: ["MERN", "Socket.io", "OpenAI", "GenAI"],
    image: "/campus-nexus.png",
    github: "https://github.com/ijharul/Campus-Nexus",
    demo: "https://campus-nexus-ten.vercel.app/login",
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "DevFlow AI",
    description: "An AI-powered developer playground for system design generation, DevOps automation, and intelligent debugging.",
    tech: ["React", "Node.js", "Groq AI", "DevOps"],
    image: "/devflow-ai.png",
    github: "https://github.com/ijharul/Devflow-AI",
    demo: "https://devflow-ai-rust.vercel.app",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "VaultX",
    description: "A professional-grade password manager featuring zero-knowledge encryption, AES-256 security, and breach detection.",
    tech: ["React", "Node.js", "MongoDB", "Security"],
    image: "/vaultx.png",
    github: "https://github.com/ijharul/VaultX",
    demo: "https://passop-flame.vercel.app/",
    color: "from-emerald-500 to-teal-600"
  }
];


const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-full glass rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col transition-all duration-500"
    >
      {/* Project Image Section */}
      <div className="relative h-60 w-full overflow-hidden shrink-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-30 transition-opacity z-10`} />
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        {/* Subtle overlay for light mode readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20" />
      </div>

      {/* Content Section */}
      <div className="p-7 flex flex-col flex-grow bg-white/[0.02] dark:bg-black/20">
        <div className="flex-grow space-y-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map(t => (
              <span key={t} className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-gray-400 border border-black/5 dark:border-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-8">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 glass rounded-2xl text-sm font-bold hover:bg-white/10 transition-all border border-white/5"
          >
            <Github size={18} /> Code
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary rounded-2xl text-sm font-bold text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 transition-all"
          >
            <ExternalLink size={18} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              <span className="text-gradient">Featured Work</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mb-8" />
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl text-lg">
              Showcasing projects built with a focus on security, scalability, and modern user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <a 
              href="https://github.com/ijharul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 glass rounded-[2rem] font-bold hover:bg-black/5 dark:hover:bg-white/10 transition-all group shadow-xl shadow-black/5 dark:shadow-white/5"
            >
              <Github size={22} className="group-hover:rotate-12 transition-transform" />
              <span className="text-foreground">View All Projects on GitHub</span>
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform text-primary" />
            </a>
          </motion.div>

        </SectionReveal>
      </div>
    </section>
  );
}
