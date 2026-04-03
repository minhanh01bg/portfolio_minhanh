"use client"

import { motion, type Variants } from "framer-motion"
import { cardItem } from "@/lib/motion"
import { ExternalLink, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"


type Project = {
  title: string
  description: string
  tags: string[]
  impact: string
  href?: string
}

const projects: Project[] = [
  {
    title: "Enjoy reading",
    description: "",
    tags: ["FastAPI", "PostgreSQL", "AI Recommendation", "Chatbot"],
    impact: "",
  },
  {
    title: "AI Resume Parser",
    description: "LLM pipeline that ingests PDFs, structures candidate profiles, and ranks via bespoke evaluation loops.",
    tags: ["LangChain", "FastAPI", "Postgres", "RAG"],
    impact: "Cuts recruiter triage time by 70%.",
  },
  {
    title: "AI KC IoT",
    description: "Multimodal detection system for IoT attack surfaces including brute-force, port scanning, and DDoS vectors.",
    tags: ["PyTorch", "RNN/LSTM", "Anomaly detection", "SMOTE"],
    impact: "98.4% detection accuracy across 4 major attack classes.",
  },
  {
    title: "AI eKYC for Banking",
    description: "Face verification, OCR, and fraud heuristics deployed for onboarding journeys.",
    tags: ["OpenCV", "PyTorch", "Docker", "FastAPI"],
    impact: "Reduced manual review by 55%.",
  },
]

// Array partitions are now computed inside components based on context mapping.


const slideShell = "w-full max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8"

const slideVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      staggerChildren: 0.1,
    },
  },
}

export function ProjectsIntro() {
  const { t } = useLanguage()
  const allProjects = t("projects.items") as Project[]
  const firstGroup = allProjects.slice(0, 3).map((p, i) => ({
    ...p,
    tags: projects[i]?.tags || [],
    href: projects[i]?.href
  }))

  return (
    <motion.div className={slideShell} variants={slideVariant} initial="hidden" animate="visible">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-400 text-xs font-medium uppercase tracking-wider">
          {t("projects.tag")}
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{t("projects.title")}</h2>
        <p className="text-lg text-slate-500 dark:text-white/50 max-w-2xl leading-relaxed">
          {t("projects.description")}
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {firstGroup.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.div>
  )
}

export function ProjectsShowcase() {
  const { t } = useLanguage()
  const allProjects = t("projects.items") as Project[]
  const secondGroup = allProjects.slice(3).map((p, i) => ({
    ...p,
    tags: projects[i + 3]?.tags || [],
    href: projects[i + 3]?.href
  }))

  return (
    <motion.div className={slideShell} variants={slideVariant} initial="hidden" animate="visible">
      <header className="space-y-3">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight border-b border-slate-200 dark:border-white/5 pb-4">{t("projects.moreBuilds")}</h3>
      </header>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {secondGroup.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <p className="mt-10 text-sm text-slate-500 dark:text-white/40 italic">
        {t("projects.footer")}
      </p>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <div className="space-y-20">
      <ProjectsIntro />
      <ProjectsShowcase />
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={cardItem}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col h-full rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-100 dark:hover:bg-white/[0.04] shadow-xl overflow-hidden"
    >
      <div className="flex-1 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white transition-colors tracking-tight">
            {project.title}
          </h3>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <p className="text-sm text-slate-500 dark:text-white/50 leading-relaxed italic">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-white/30 group-hover:text-slate-500 dark:group-hover:text-white/50 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/5 flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        </div>
        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400/90 leading-tight">
          {project.impact}
        </p>
      </div>
    </motion.article>
  )
}
