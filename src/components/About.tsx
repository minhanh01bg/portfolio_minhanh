"use client"

import { motion } from "framer-motion"
import { cardItem, fadeInUp, sectionContainer } from "@/lib/motion"
import { Code2, Layers, Cpu, Cloud, Sparkles, Terminal, Database, Globe, Box, Github, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiReact,
  SiNextdotjs, SiFastapi, SiNodedotjs, SiTailwindcss, SiOpenai,
  SiPostgresql, SiMongodb, SiDocker, SiGit, SiLangchain, SiHuggingface,
  SiPytorch, SiVercel, SiLinux, SiNumpy, SiRedis, SiTensorflow
} from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { useLanguage } from "@/contexts/LanguageContext"

// badges array removed, handled in component

const skillCategories = [
  {
    title: "Core Languages",
    icon: <Terminal className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    skills: [
      { name: "Python", icon: <SiPython className="w-4 h-4 text-[#3776AB]" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
      { name: "C/C++", icon: <SiCplusplus className="w-4 h-4 text-[#00599C]" /> },
      { name: "SQL", icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" /> },
    ]
  },
  {
    title: "Frameworks & Libs",
    icon: <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    skills: [
      { name: "React", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-foreground dark:text-white" /> },
      { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-[#05998B]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4 text-[#339933]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" /> },
      { name: "NumPy / Pandas", icon: <SiNumpy className="w-4 h-4 text-[#013243]" /> },
    ]
  },
  {
    title: "AI & Data",
    icon: <Sparkles className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
    skills: [
      { name: "LangChain", icon: <SiLangchain className="w-4 h-4 text-[#121D33] dark:text-white" /> },
      { name: "LangGraph", icon: <SiLangchain className="w-4 h-4 text-[#121D33] dark:text-white" /> },
      { name: "OpenAI", icon: <SiOpenai className="w-4 h-4 text-foreground dark:text-white" /> },
      { name: "PyTorch", icon: <SiPytorch className="w-4 h-4 text-[#EE4C2C]" /> },
      { name: "TensorFlow", icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" /> },
      { name: "Hugging Face", icon: <SiHuggingface className="w-4 h-4 text-[#FFD21E]" /> },
      { name: "Unsloth", icon: <Zap className="w-4 h-4 text-blue-500" /> },
      { name: "Vector DBs", icon: <Database className="w-4 h-4 text-rose-600 dark:text-rose-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
      { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
    ]
  },
  {
    title: "Infrastructure",
    icon: <Box className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Docker", icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> },
      { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
      { name: "Linux", icon: <SiLinux className="w-4 h-4 text-[#FCC624]" /> },
      { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-foreground dark:text-white" /> },
      { name: "Git", icon: <SiGit className="w-4 h-4 text-[#F05032]" /> },
      { name: "CI/CD", icon: <Github className="w-4 h-4 text-foreground/70 dark:text-white/70" /> },
    ]
  }
]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="home" className="w-full max-w-[72rem] mx-auto px-2 sm:px-6 lg:px-8 py-12 scroll-mt-24">
      <motion.div variants={sectionContainer} initial="hidden" animate="visible" className="space-y-20">

        {/* Header Section */}
        <div className="space-y-12">
          <motion.div variants={fadeInUp(0)} className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-6 max-w-3xl">
              <h1 className="text-5xl sm:text-7xl font-bold leading-[1.05] text-foreground dark:text-white tracking-tight">
                {t("about.greeting")}
              </h1>
              <div className="flex flex-wrap items-center gap-6 pt-1">
                <span className="inline-flex items-center gap-2 text-[15px] sm:text-base text-foreground/60 dark:text-white/60 font-medium">
                  <LocationIcon />
                  {t("about.location")}
                </span>
                <span className="inline-flex items-center gap-2 text-[15px] sm:text-base text-foreground/60 dark:text-white/60 font-medium">
                  <StatusIcon />
                  {t("about.status")}
                </span>
              </div>
              <p className="text-lg sm:text-xl text-foreground/60 dark:text-white/50 leading-relaxed font-light max-w-2xl text-pretty">
                {t("about.description")}
              </p>
            </div>
          </motion.div>


        </div>

        {/* Redesigned Premium Skills Section */}
        <motion.div
          variants={fadeInUp(0.2)}
          className="space-y-12"
        >
          <div className="flex flex-col gap-3">
            <h3 className="flex items-center gap-3 text-4xl font-bold text-foreground dark:text-white tracking-tight">
              <Layers className="w-9 h-9 text-blue-600 dark:text-blue-500" />
              {t("about.skillsTitle")}
            </h3>
            <p className="text-foreground/50 dark:text-white/40 text-lg max-w-2xl font-light leading-relaxed">
              {t("about.skillsDescription")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={cardItem}
                className="group relative overflow-hidden rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-white/50 dark:bg-[#0a0b14]/50 p-10 backdrop-blur-xl hover:border-black/20 dark:hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-5 mb-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-xl dark:shadow-2xl group-hover:scale-110 transition-all duration-500">
                    {category.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-foreground/90 dark:text-white/90 tracking-tight">{category.title}</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 group/item cursor-default"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 group-hover/item:bg-black/[0.06] dark:group-hover/item:bg-white/[0.08] group-hover/item:border-black/10 dark:group-hover/item:border-white/15 group-hover/item:scale-105 transition-all duration-300 shadow-sm">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold text-foreground/60 dark:text-white/60 group-hover/item:text-foreground dark:group-hover/item:text-white transition-colors tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Code2 className="w-24 h-24 text-foreground dark:text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Removed custom brand icons in favor of react-icons

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-foreground/60 dark:text-white/60">
      <path d="M12 2C7 2 3 6 3 11c0 6 9 11 9 11s9-5 9-11c0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function StatusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#10B981] dark:text-[#34D399]">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-6" />
    </svg>
  )
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={cn("text-amber-600 dark:text-amber-300", className)}>
      <path d="M12 3v4M12 17v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M1 12h4M19 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
