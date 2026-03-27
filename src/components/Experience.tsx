"use client"

import { motion } from "framer-motion"
import { cardItem, sectionContainer } from "@/lib/motion"
import { Code2, BadgeCheck } from "lucide-react"

type ExperienceProject = {
  name: string
  tech: string[]
  description: string
}

type ExperienceItem = {
  role: string
  company: string
  period: string
  summary: string
  projects: ExperienceProject[]
}

const timeline: ExperienceItem[] = [
  {
    role: "AI Developer / LLM Specialist",
    company: "Freelance & Open Source",
    period: "2023 — Present",
    summary: "Developing custom AI agents and RAG pipelines for diverse business use cases.",
    projects: [
      {
        name: "Enterprise RAG Assistant",
        tech: ["LangChain", "FastAPI", "PostgreSQL", "Next.js"],
        description: "Built a document-aware chatbot for internal knowledge management with sub-second latency."
      },
      {
        name: "Auto-UI Generator",
        tech: ["OpenAI API", "React", "Tailwind CSS"],
        description: "AI-driven tool that transforms text descriptions into production-ready React components."
      }
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Tech Startups (Project Based)",
    period: "2021 — 2023",
    summary: "Delivered scalable web architectures and performed data engineering tasks.",
    projects: [
      {
        name: "E-Commerce Analytics",
        tech: ["Node.js", "MongoDB", "Python", "D3.js"],
        description: "Developed a real-time sales dashboard tracking $50k+ in monthly transactions."
      }
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-[72rem] mx-auto px-2 sm:px-4 lg:px-8 scroll-mt-24">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Project-driven work history</h2>
          <p className="text-base text-white/65 max-w-3xl">
            I bridges the gap between complex AI logic and user-facing applications, delivering impact through measurable technical outcomes.
          </p>
        </header>

        <div className="mt-10 relative">
          <div className="absolute left-6 top-0 bottom-0 hidden sm:block w-px bg-gradient-to-b from-violet-400/40 via-white/10 to-transparent" />

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.article
                key={item.role + item.company}
                variants={cardItem}
                className="relative sm:pl-16"
              >
                <div className="hidden sm:block absolute left-6 top-3 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-400 to-emerald-300 shadow-[0_0_20px_rgba(99,102,241,0.6)]" />

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium">{item.period}</p>
                      <h3 className="text-2xl font-bold text-white mt-1">{item.role}</h3>
                      <p className="text-violet-400 text-sm font-medium mt-0.5">{item.company}</p>
                    </div>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/60 w-fit"
                    >
                      <BadgeCheck className="w-3.5 h-3.5" />
                      {idx === 0 ? "Current" : "Accomplished"}
                    </motion.span>
                  </div>

                  <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-2xl">{item.summary}</p>

                  {/* Projects Sub-section */}
                  <div className="mt-8 space-y-6 border-t border-white/5 pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Code2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">Key Projects</span>
                    </div>

                    <div className="grid gap-6">
                      {item.projects.map((project) => (
                        <div key={project.name} className="group/project">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                            <div>
                              <h4 className="text-lg font-semibold text-white group-hover/project:text-emerald-300 transition-colors">{project.name}</h4>
                              <p className="text-sm text-white/50 mt-1 leading-relaxed">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 sm:justify-end min-w-[200px]">
                              {project.tech.map((t) => (
                                <span key={t} className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-[9px] uppercase tracking-wider text-white/70">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

