"use client";

import { motion } from "framer-motion";
import { 
  Cpu, 
  Layout, 
  Server, 
  GraduationCap
} from "lucide-react";
import SectionReveal from "./SectionReveal";


const skills = [
  {
    category: "Frontend",
    icon: <Layout className="text-blue-400" />,
    items: ["React.js", "Next.js", "Tailwind CSS", "Redux", "HTML", "CSS"]
  },
  {
    category: "Backend & DB",
    icon: <Server className="text-purple-400" />,
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "SQL", "Auth (JWT/OAuth)"]
  },
  {
    category: "AI & DevOps",
    icon: <Cpu className="text-emerald-400" />,
    items: ["OpenAI API", "Groq AI", "Prompt Engineering", "Docker", "CI/CD", "Vercel/Render"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionReveal>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-16"
          >
            {/* Left Side: Bio */}
            <div className="lg:w-1/2">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4">
                  <span className="text-gradient">About Me</span>
                  <div className="h-1 w-24 bg-primary rounded-full hidden md:block" />
                </h2>
                
                <div className="space-y-6 text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                  <p>
                    I am an <span className="text-foreground font-medium">SDE-focused Full Stack Developer</span> and a <span className="text-primary font-semibold">B.Tech CSE student</span> at <span className="text-primary font-semibold">Techno Main Salt Lake</span> (2023–2027).
                  </p>
                  <p>
                    My expertise lies in building scalable <span className="text-foreground">MERN-based applications</span> with advanced security (OAuth, JWT) and real-time features. I have a strong foundation in <span className="text-primary">DSA (200+ solved)</span> and <span className="text-secondary">AI Integration</span>.
                  </p>
                  <p>
                    I thrive on designing distributed client-server architectures and integrating <span className="text-foreground">Generative AI (LLMs)</span> to enhance user workflows. My focus is on building production-ready, scalable, and user-centric systems.
                  </p>
                </div>

                {/* Education Card */}
                <motion.div 
                  variants={itemVariants}
                  className="mt-10 p-6 glass rounded-2xl flex items-start gap-5 group hover:border-primary/50 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">B.Tech in Computer Science</h3>
                    <p className="text-slate-500 dark:text-gray-400">Techno Main Salt Lake (TMSL) • 2023 — 2027</p>
                    <div className="mt-3 flex gap-2">
                      <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs text-slate-600 dark:text-gray-300">CSE</span>
                      <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs text-slate-600 dark:text-gray-300">AI Enthusiast</span>
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            </div>


            {/* Right Side: Skills */}
            <div className="lg:w-1/2">
              <div className="grid gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    variants={itemVariants}
                    className="p-8 glass rounded-2xl hover:bg-white/5 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                        {skill.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {skill.items.map((item) => (
                        <span 
                          key={item}
                          className="px-4 py-2 bg-black/5 dark:bg-white/5 rounded-lg border border-black/10 dark:border-white/10 text-sm text-slate-600 dark:text-gray-300 hover:border-primary/50 hover:text-foreground transition-all cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Stats / Quick Info */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 grid grid-cols-2 gap-6"
              >
                <div className="p-6 glass rounded-2xl text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">200+</div>
                  <div className="text-sm text-slate-500 dark:text-gray-500 uppercase tracking-widest">DSA Solved</div>
                </div>
                <div className="p-6 glass rounded-2xl text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">MERN</div>
                  <div className="text-sm text-slate-500 dark:text-gray-500 uppercase tracking-widest">Primary Stack</div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}

