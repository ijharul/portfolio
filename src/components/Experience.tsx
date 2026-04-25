"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Star, Code, Cpu } from "lucide-react";

import SectionReveal from "./SectionReveal";

const experiences = [
  {
    title: "National Level Finalist",
    company: "Smart India Hackathon 2025",
    period: "2025",
    description: "Successfully reached the national finals of India's biggest hackathon, developing innovative solutions for real-world problems.",
    icon: <Award className="text-primary" />
  },
  {
    title: "Level 4 Contributor",
    company: "Hacktoberfest 2024",
    period: "2024",
    description: "Actively contributed to open-source repositories, completing over 4 major PRs in specialized web and AI projects.",
    icon: <Code className="text-secondary" />
  }
];

const achievements = [
  {
    title: "2nd Place - INTRA Hackathon",
    year: "2024",
    description: "Won second prize at the university level hackathon for building a scalable platform.",
    icon: <Star className="text-accent" />
  },
  {
    title: "165+ DSA Problems Solved",
    year: "Ongoing",
    description: "Consistent problem solver on LeetCode and HackerRank, focusing on advanced Data Structures and Algorithms.",
    icon: <Code className="text-emerald-400" />
  },
  {
    title: "NPTEL Certifications",
    year: "2023-2024",
    description: "Java (96%), DBMS (75%), and Software Engineering. Top performance in national academic assessments.",
    icon: <Award className="text-yellow-400" />
  },
  {
    title: "Oracle GenAI Professional",
    year: "2024",
    description: "Certified Generative AI Professional by Oracle, validating expertise in modern AI architectures.",
    icon: <Cpu className="text-purple-400" />
  }
];


export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience Timeline */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                <span className="text-gradient">Professional Journey</span>
              </h2>
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                {experiences.map((exp, i) => (
                  <motion.div 
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="relative pl-12 group"
                  >
                    <div className="absolute left-0 top-0 w-10 h-10 glass rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                      {exp.icon}
                    </div>
                    <div className="p-6 glass rounded-2xl group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-all">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">{exp.period}</span>
                      <h3 className="text-xl font-bold text-foreground mt-1">{exp.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-gray-400 font-medium mb-4">{exp.company}</p>
                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
                <span className="text-gradient">Key Achievements</span>
              </h2>
              <div className="grid gap-6">
                {achievements.map((ach, i) => (
                  <motion.div 
                    key={ach.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="p-6 glass rounded-2xl flex gap-6 hover:bg-black/5 dark:hover:bg-white/5 transition-all group"
                  >
                    <div className="p-4 bg-black/5 dark:bg-white/5 rounded-2xl group-hover:scale-110 transition-transform flex-shrink-0 h-fit">
                      {ach.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest">{ach.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{ach.title}</h3>
                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{ach.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Certification Badge Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-8 p-8 glass rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 text-center"
              >
                <div className="text-lg font-semibold text-foreground mb-2">Ready to contribute more!</div>
                <p className="text-slate-600 dark:text-gray-400 text-sm mb-6">Always looking for challenging opportunities to grow and learn.</p>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-primary text-white rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20"
                >
                  View Full CV
                </a>

              </motion.div>

            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
