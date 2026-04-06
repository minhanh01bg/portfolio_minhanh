"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cardItem, sectionContainer } from "@/lib/motion"
import {
  Code2,
  BadgeCheck,
  Calendar,
  MapPin,
  Clock,
  Monitor,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Briefcase
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

type ExperienceProject = {
  name: string
  tech: string[]
  description: string
  responsibilities?: string[]
  href?: string
}

type ExperienceItem = {
  role: string
  company: string
  companyLogo?: string
  period: string
  location?: string
  workType?: string
  employmentType?: string
  summary: string
  projects: ExperienceProject[]
}

const timeline: ExperienceItem[] = [
  {
    role: "AI/ML Engineer",
    company: "Physcode",
    companyLogo: "/physcode-logo.webp",
    period: "Sep 2024 — Present",
    location: "Hanoi, Vietnam",
    workType: "Onsite",
    employmentType: "Full-time",
    summary: "Focused on AI-driven solutions and robust backend architectures for high-scale platforms.",
    projects: [
      {
        name: "Agentic AI Chatbot Platform",
        description: "High-scale multi-tenant AI platform featuring voice-to-voice interaction, agentic RAG workflows, and high-precision hybrid search architectures.",
        tech: ["Python", "FastAPI", "LangGraph", "LangChain", "OpenAI Whisper", "Streaming TTS", "Qdrant (Hybrid)", "BM25", "RRF Fusion", "LLMListwiseRerank", "LangSmith", "MongoDB", "WebSocket", "Asyncio, Docker"],
        href: "https://chatboz.com",
        responsibilities: [
          "Orchestrated advanced agentic RAG workflows using LangGraph to implement state-machine logic for rewriting, retrieving, and evidence-based generation",
          "Implemented a rigorous retrieval quality gate using Pydantic structured output and citation thresholds to prevent hallucinations and enforce information integrity",
          "Built a sophisticated hybrid search engine in Qdrant combining Dense and BM25 sparse embeddings with RRF fusion, contextual compression, and listwise reranking",
          "Developed a low-latency intent routing system using cosine similarity and MongoDB embedding caches, bypassing LLM calls for routing to maximize speed and cost-efficiency",
          "Enhanced system reliability with stage-level timeouts, circuit breakers, and comprehensive observability through LangSmith tracing and shadow traffic analysis"
        ]
      },
      {
        name: "Mosyne AI",
        description: "Diffusion-based assistant for creative teams involving text-to-image generation (including Flux), mask-driven inpainting, background removal/replacement, and upscaling with blend compositing.",
        tech: ["Python", "Stable Diffusion", "FLUX.1 dev", "Runpod", "ComfyUI", "FastAPI", "OpenCV", "Pillow", "NumPy", "aiohttp", "AWS S3", "MongoDB", "LangChain, Docker"],
        href: "https://mosyne.ai/",
        responsibilities: [
          "Developed end-to-end image generation and editing features: text-to-image, background removal/replacement, and mask-driven remove/fill inpainting workflows",
          "Optimized diffusion execution by orchestrating serverless Runpod jobs (ComfyUI workflow payloads) and implementing unified async status polling",
          "Built reliable image preprocessing and editing data flow: EXIF transpose, resize/letterbox + zoom-crop framing, polygon/base64 masks, and compositing/blending",
          "Implemented prompt enhancement and templating using LangChain and OpenAI to improve generation quality and batch consistency across pipelines"
        ]
      },
      {
        name: "Eduprompt",
        description: "AI learning platform helping students master prompt engineering for image generation through quantitative feedback, embedding similarity scoring, and LLM-guided pedagogical suggestions.",
        tech: ["Python", "FastAPI", "LangChain", "OpenAI", "RunPod", "Pydantic v2", "PIL", "NumPy", "MongoDB", "JWT", "AWS S3", "Docker"],
        responsibilities: [
          "Designed and implemented the primary grading engine using embedding similarity between student generations and teacher reference models",
          "Orchestrated complex inference pipelines involving image processing (PIL), base64 encoding, and vision-to-captioning via RunPod APIs",
          "Integrated LLMs to generate pedagogical feedback, delivering specific, actionable suggestions for prompt improvement and technical growth",
          "Designed structured API contracts with Pydantic and built secure JWT authentication layers with MongoDB token management",
          "Developed standardized scoring algorithms using NumPy and implemented robust error-handling for large-scale inference failovers"
        ]
      }
    ],
  },
  {
    role: "Fullstack Web & AI Developer",
    company: "Freelance & Open Source",
    period: "2023 — 2024",
    location: "Remote",
    workType: "Remote",
    employmentType: "Freelance",
    summary: "Developing custom AI agents, RAG pipelines, and fullstack web applications for diverse business use cases.",
    projects: [
      {
        name: "Discipline QR — Educational Conduct Management",
        tech: ["Next.js", "QR Code Engine", "LangChain", "FastAPI", "PostgreSQL"],
        description: "A specialized student discipline management system enabling instantaneous conduct evaluation via QR scanning, transparent audit logging, and an integrated AI assistant for real-time inquiries.",
        href: "https://disciplineqrhht.com/",
        responsibilities: [
          "Developed high-speed QR scanning module for rapid recording of student conduct infractions and point awards",
          "Implemented a transparent audit logging system to ensure data integrity and traceability for school administrators and parents",
          "Built an AI virtual assistant to handle policy inquiries and system troubleshooting, reducing organizational friction",
          "Designed a mobile-optimized dashboard for on-the-go management by teachers and staff"
        ]
      },
      {
        name: "Enterprise RAG Assistant",
        tech: ["LangChain", "FastAPI", "PostgreSQL", "Next.js"],
        description: "Built a document-aware chatbot for internal knowledge management with sub-second latency.",
        responsibilities: [
          "Implemented vector search and semantic retrieval",
          "Optimized prompt templates for accuracy"
        ]
      }
    ],
  },
]

export default function Experience() {
  const { t } = useLanguage()

  const localizedTimeline = (t("experience.items") as ExperienceItem[]).map((item, idx) => ({
    ...item,
    companyLogo: timeline[idx]?.companyLogo,
    projects: item.projects.map((proj: ExperienceProject, pIdx: number) => ({
      ...proj,
      tech: timeline[idx]?.projects[pIdx]?.tech || [],
      href: timeline[idx]?.projects[pIdx]?.href
    }))
  }))

  return (
    <section id="experience" className="w-full max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-400 text-xs font-medium uppercase tracking-wider">
            {t("experience.tag")}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{t("experience.title")}</h2>
          <p className="text-lg text-slate-500 dark:text-white/50 max-w-2xl leading-relaxed">
            {t("experience.description")}
          </p>
        </header>

        <div className="space-y-16">
          {localizedTimeline.map((item, idx) => (
            <ExperienceCard key={item.company + item.role} item={item} isFirst={idx === 0} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function ExperienceCard({ item, isFirst }: { item: ExperienceItem; isFirst: boolean }) {
  return (
    <motion.article
      variants={cardItem}
      className={`group relative ${isFirst ? 'opacity-100' : 'opacity-90 hover:opacity-100'} transition-opacity duration-300`}
    >
      <div className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] p-8 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-slate-200 dark:hover:border-white/20 hover:bg-slate-100 dark:hover:bg-white/[0.04] shadow-2xl">
        {/* Company Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/5">
          <div className="flex items-start gap-5">
            <div className="relative h-16 w-16 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden shadow-inner shrink-0 group-hover:border-emerald-500/30 transition-colors">
              {item.companyLogo ? (
                <Image src={item.companyLogo} alt={item.company} fill className="object-contain" />
              ) : (
                <Briefcase className="w-8 h-8 text-slate-500 dark:text-white/20 group-hover:text-slate-400/50 transition-colors" />
              )}
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{item.company}</h3>
              <p className="text-xl font-semibold text-slate-500 dark:text-white/80">{item.role}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-white/40 font-medium">
              <Calendar className="w-4 h-4 text-slate-500 dark:text-white/30" />
              <span>{item.period}</span>
            </div>
            {item.location && (
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-white/40 font-medium">
                <MapPin className="w-4 h-4 text-slate-500 dark:text-white/30" />
                <span>{item.location}</span>
              </div>
            )}
            {item.employmentType && (
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-white/40 font-medium">
                <Clock className="w-4 h-4 text-slate-500 dark:text-white/30" />
                <span>{item.employmentType}</span>
              </div>
            )}
            {item.workType && (
              <div className="flex items-center gap-2 text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/40 font-semibold uppercase tracking-wider">
                <Monitor className="w-3.5 h-3.5 text-slate-500 dark:text-white/30 mr-1.5" />
                {item.workType}
              </div>
            )}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-10 space-y-12">
          {item.projects.map((project) => (
            <ProjectEntry key={project.name} project={project} />
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function ProjectEntry({ project }: { project: ExperienceProject }) {
  const { t } = useLanguage()
  const [showRes, setShowRes] = useState(false)

  return (
    <div className="relative group/project border-l-2 border-slate-200 dark:border-white/5 pl-8 ml-1 transition-colors hover:border-slate-500/20">
      <div className="flex flex-col gap-5">
        {/* Project Title Row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500 rotate-45 shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
            <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover/project:text-slate-900 dark:project:text-white transition-colors tracking-tight">
              {project.name}
            </h4>
          </div>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white uppercase tracking-widest transition-colors duration-300"
            >
              <span>{t("experience.viewProject")}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <p className="text-base text-slate-500 dark:text-white/50 leading-relaxed max-w-4xl">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white/80 transition-colors uppercase tracking-[0.2em]">
            <Code2 className="w-4 h-4" />
            <span>{t("experience.technologies")}</span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {project.tech.map((t) => (
              <span key={t} className="text-sm text-slate-500 dark:text-white/30 font-medium hover:text-slate-500 dark:hover:text-white/60 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        {project.responsibilities && (
          <div className="space-y-4 pt-2">
            <button
              onClick={() => setShowRes(!showRes)}
              className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white/60 group/btn transition-colors hover:text-slate-600 dark:hover:text-white"
            >
              {showRes ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              <span className="uppercase tracking-widest">{showRes ? t("experience.hideRes") : t("experience.showRes")}</span>
            </button>

            <AnimatePresence initial={false}>
              {showRes && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <BadgeCheck className="w-4 h-4 text-slate-900 dark:text-white/60" />
                    <span className="text-[10px] font-bold text-slate-900 dark:text-white/40 uppercase tracking-[0.2em]">{t("experience.keyRes")}</span>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                    {project.responsibilities.map((resp, i) => (
                      <li key={i} className="relative text-sm text-slate-500 dark:text-white/40 leading-relaxed pl-5 transition-colors hover:text-slate-900 dark:hover:text-white">
                        <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-emerald-500/30" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}
