"use client"

import { motion } from "framer-motion"
import { cardItem, fadeInUp, sectionContainer } from "@/lib/motion"
import { Code2, Layers, Cpu, Cloud, Sparkles, Terminal, Database, Globe, Box, Github } from "lucide-react"
import { cn } from "@/lib/utils"

const badges = [
  { label: "Ha Noi, Vietnam", icon: LocationIcon },
  { label: "Open to work", icon: StatusIcon },
  { label: "AI Engineer", icon: SparkIcon },
]

const pillars = [
  {
    title: "LLM Systems",
    desc: "Agentic workflows, RAG pipelines, and model fine-tuning for specialized domains.",
    icon: <Cpu className="w-5 h-5 text-blue-400" />
  },
  {
    title: "Data & MLOps",
    desc: "Robust infrastructure for data ingestion, processing, and scalable AI deployment.",
    icon: <Database className="w-5 h-5 text-emerald-400" />
  },
  {
    title: "Product Engineering",
    desc: "Crafting intuitive, motion-rich user experiences that bridge the gap between AI and human users.",
    icon: <Globe className="w-5 h-5 text-violet-400" />
  },
]

const metrics = [
  { label: "Projects shipped", value: "24+" },
  { label: "Latency gains", value: "-45%" },
  { label: "Automation hours", value: "1.2k" },
]

const skillCategories = [
  {
    title: "Core Languages",
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    skills: [
      { name: "Python", icon: <PythonIcon /> },
      { name: "TypeScript", icon: <TSIcon /> },
      { name: "JavaScript", icon: <JSIcon /> },
      { name: "SQL", icon: <SQLIcon /> },
      { name: "C/C++", icon: <CPPIcon /> },
    ]
  },
  {
    title: "App Frameworks",
    icon: <Layers className="w-5 h-5 text-emerald-400" />,
    skills: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextIcon /> },
      { name: "FastAPI", icon: <FastAPIIcon /> },
      { name: "Node.js", icon: <NodeIcon /> },
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
    ]
  },
  {
    title: "AI & Intelligence",
    icon: <Sparkles className="w-5 h-5 text-violet-400" />,
    skills: [
      { name: "LangChain", icon: <LangChainIcon /> },
      { name: "OpenAI", icon: <OpenAIIcon /> },
      { name: "PostgreSQL", icon: <PostgresIcon /> },
      { name: "MongoDB", icon: <MongoIcon /> },
      { name: "Vector DBs", icon: <Database className="w-4 h-4 text-rose-400" /> },
    ]
  },
  {
    title: "Infrastructure",
    icon: <Box className="w-5 h-5 text-blue-400" />,
    skills: [
      { name: "Docker", icon: <DockerIcon /> },
      { name: "AWS", icon: <AWSIcon /> },
      { name: "Git", icon: <GitIcon /> },
      { name: "CI/CD", icon: <Github className="w-4 h-4 text-white/70" /> },
    ]
  }
]

export default function About() {
  return (
    <section id="about" className="w-full max-w-[72rem] mx-auto px-2 sm:px-6 lg:px-8 py-12 scroll-mt-24">
      <motion.div variants={sectionContainer} initial="hidden" animate="visible" className="space-y-20">

        {/* Header Section */}
        <div className="space-y-12">
          <motion.div variants={fadeInUp(0)} className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-6 max-w-3xl">
              <h1 className="text-5xl sm:text-7xl font-bold leading-[1.05] text-white tracking-tight">
                {"Hi, I'm Vũ Minh Anh"}
              </h1>
              <p className="text-lg sm:text-xl text-white/50 leading-relaxed font-light max-w-2xl text-pretty">
                I specialize in building intelligent systems that prioritize performance and user experience.
                From complex RAG architectures to polished interfaces, I deliver end-to-end AI solutions.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {badges.map(({ label, icon: Icon }) => (
                  <span key={label} className="inline-flex items-center gap-2.5 rounded-2xl bg-white/[0.03] px-5 py-2.5 text-sm text-white/80 border border-white/5 backdrop-blur-md hover:bg-white/[0.06] hover:border-white/10 transition-all cursor-default">
                    <Icon />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              variants={cardItem}
              className="relative w-full lg:w-80 group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-emerald-600/20 rounded-3xl blur-2xl group-hover:opacity-100 transition duration-1000 opacity-60"></div>
              <div className="relative rounded-3xl border border-white/10 bg-[#0a0b14]/80 p-8 backdrop-blur-2xl shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <StatusIcon />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                    Active
                  </span>
                </div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Status</p>
                <p className="text-white text-2xl font-bold mt-2">Available for projects</p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between py-3">
                    <span className="text-white/40 text-sm">Engagement</span>
                    <span className="text-white/90 text-sm font-semibold tracking-wide">4-8 Weeks</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-white/5">
                    <span className="text-white/40 text-sm">Location</span>
                    <span className="text-white/90 text-sm font-semibold tracking-wide">GMT +7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Metrics Section */}
          <motion.div
            variants={fadeInUp(0.1)}
            className="grid gap-6 sm:grid-cols-3"
          >
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={cardItem}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] hover:border-white/10"
              >
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-white tracking-tighter">{metric.value}</div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40 mt-3 font-bold">{metric.label}</p>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                  <SparkIcon className="w-32 h-32" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pillars / Specializations Section */}
        <motion.div
          variants={fadeInUp(0.15)}
          className="space-y-10"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-500/80">Specialization</h2>
            <h3 className="text-3xl font-bold text-white tracking-tight">Focused Expertise</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={cardItem}
                className="group relative rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-8 transition-all hover:border-white/20"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{pillar.title}</h4>
                <p className="text-white/50 text-base leading-relaxed font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Redesigned Premium Skills Section */}
        <motion.div
          variants={fadeInUp(0.2)}
          className="space-y-12"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500/80">Stack</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight">Skills & Technologies</h3>
            <p className="text-white/40 text-lg max-w-2xl font-light leading-relaxed">
              A comprehensive toolkit for building modern applications, with deep expertise in
              AI orchestration and full-stack development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={cardItem}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0b14]/50 p-10 backdrop-blur-xl hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-5 mb-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-white/5 border border-white/10 shadow-2xl group-hover:scale-110 transition-all duration-500">
                    {category.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white/90 tracking-tight">{category.title}</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 group/item cursor-default"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 group-hover/item:bg-white/[0.08] group-hover/item:border-white/15 group-hover/item:scale-105 transition-all duration-300 shadow-sm">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold text-white/60 group-hover/item:text-white transition-colors tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Code2 className="w-24 h-24 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Icons Helpers (Custom SVG brand icons)

function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3776AB]">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.31.01.23v1.51l-.02.2-.08.14-.14.13-.23.11-.34.07-.4.04-1.2.02-1.34.01-1.12.01-1 .01-.84.01-.65.02-.45.03-.3.05-.18.08-.12.13-.08.2-.04.3v2.81l.01.21.03.18.06.15.1.12.14.07.21.05.28.02h3.1l.3.01.25.03.21.05.18.08.14.12.08.16.03.22.01.27v1.15l-.01.24-.05.21-.09.18-.13.13-.19.09-.27.05-.38.03-1.46.02-1.75.03-2.39.03-2.12.03-1.49.03-1.02.03-.75.03-.54.04-.33.06-.2.1-.13.15-.09.23-.04.35v1.4l.01.47.05.35.09.26.13.18.21.12.28.06.4.02h2.2l.4.01.31.03.24.05.18.08.13.12.08.16.03.21.01.28v1.15l-.01.24-.05.21-.09.18-.13.13-.19.09-.27.05-.38.03-1.46.02-1.75.03-2.39.03-2.12.03-1.49.03-1.02.03-.75.03-.54.04-.33.06-.2.1-.13.15-.09.23-.04.35v1.4l.01.4.03.3.06.24.09.18.13.13.19.08.27.05.38.03h2.3l.4.01.31.02.24.05.18.08.13.11.08.16.03.21.01.28v1.5l-.01.2-.04.14-.08.13-.14.11-.23.09-.34.05-.4.02-1.2.02-1.34.01h-2.1l-.81-.01-.63-.02-.45-.03-.31-.05-.18-.08-.12-.12-.08-.2-.04-.3v-2.8l.01-.21.03-.18.06-.15.1-.12.14-.07.21-.05.28-.02h1.6l.3-.01.25-.03.21-.05.18-.08.14-.12.08-.16.03-.22.01-.27v-1.1l-.01-.24-.05-.21-.09-.18-.13-.13-.19-.09-.27-.05-.38-.03-1.4-.02-1.7-.03-2.3-.03-2.1-.03-1.4-.03-1-.03-.7-.03-.5-.04-.3-.06-.2-.1-.13-.15-.09-.23-.04-.35v-1.4l.01-.4.03-.3.06-.24.09-.18.13-.13.19-.08.27-.05.38-.03h2.3l.4-.01.31-.02.24-.05.18-.08.13-.11.08.16.03.21.01.28v-1.5l-.01-.2-.04-.14-.08-.13-.14-.11-.23-.09-.34-.05-.4.02-1.2.02-1.3-.01h-2.1l-.8-.01-.6-.02-.4-.03-.3-.05-.1-.08-.1-.1-.0-.2-.0-.3v-.8l.0-.2.0-.1.0-.1.1-.1.1-.0.2-.0.2-.0h.6l.3-.0.2-.0.2-.0.1-.0.1-.1.0-.1.0-.2.0-.2v-1.1l-.0-.2-.0-.2-.0-.1-.1-.1-.1-.0-.2-.0-.3-.0-1.4-.0-1.7-.0-2.3-.0-2.1-.0-1.4-.0-1-.0-.7-.0-.5-.0-.3-.0-.2-.1-.1-.1-.0-.2-.0-.3V2.8l.0-.4.0-.3.0-.2.0-.1.1-.1.1-.0.2-.0.3-.0h2.3l.4-.0.3-.0.2-.0.1-.0.1-.0.0-.1.0-.2.0-.2v-1.5l-.0-.2-.0-.1-.0-.1-.1-.1-.2-.0-.3-.0-.4-.0-1.2-.0-1.3-.0z" />
    </svg>
  )
}

function TSIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3178C6]">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.246 4.01 4.01 0 0 0-.7-.075c-.615 0-1.05.149-1.302.447-.252.298-.379.726-.379 1.284V24h-2.73V9.863h2.72v1.254c.05-.445.22-.814.512-1.107.292-.293.684-.46 1.189-.46zm-8.887.031c.903 0 1.767.161 2.593.484V12.5c-.851-.415-1.708-.623-2.571-.623-.62 0-1.11.13-1.47.391-.36.259-.54.619-.54 1.078 0 .322.074.584.221.786.147.202.398.396.752.581.354.186.852.395 1.493.628.719.261 1.307.545 1.764.852.457.307.781.7.973 1.18.192.48.288 1.077.288 1.79 0 .76-.145 1.411-.433 1.954a3.865 3.865 0 0 1-1.252 1.408c-.546.362-1.233.543-2.063.543-1.073 0-2.015-.165-2.827-.495v-2.304c1.02.503 2.02.754 3.003.754.677 0 1.198-.135 1.562-.405.364-.27.546-.66.546-1.17a1.41 1.41 0 0 0-.256-.814 2.11 2.11 0 0 0-.84-.633c-.39-.188-.957-.406-1.704-.653-.664-.22-1.18-.456-1.547-.706-.367-.25-.662-.573-.885-.97-.223-.396-.335-.898-.335-1.506 0-.756.166-1.393.498-1.912a3.54 3.54 0 0 1 1.455-1.311c.638-.328 1.442-.492 2.411-.492z" />
    </svg>
  )
}

function JSIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F7DF1E]">
      <path d="M0 0h24v24H0V0zm22.034 18.254c.028-.437-.056-.831-.252-1.18-.196-.349-.496-.644-.897-.887-.4-.242-1.054-.509-2.222-.841-1.168-.332-1.897-.58-2.617-.92-.72-.34-1.21-.77-1.47-1.29-.26-.52-.39-1.155-.39-1.905 0-.75.145-1.392.435-1.927.29-.535.727-.96 1.307-1.275a5.55 5.55 0 0 1 2.31-.472c.86 0 1.631.144 2.31.42 1.314.532 1.944 1.42 1.944 2.129 0 .422-.34.764-.764.764h-1.631a.342.342 0 0 1-.341-.341c-.056-.708-.476-1.092-1.26-1.092-.784 0-1.45.244-1.45.894 0 .65.518.887 1.554 1.137 1.036.25 1.836.561 2.392.93a4.67 4.67 0 0 1 1.575 1.583c.36.65.54 1.436.54 2.355 0 .919-.2 1.705-.6 2.355-.4.65-1.085 1.188-2.055 1.614-.97.426-2.181.639-3.633.639-1.442 0-2.6-.213-3.473-.639-.873-.426-1.408-1.077-1.605-1.954a.342.342 0 0 1 .34-.342h1.614a.76.76 0 0 1 .753.764c.28.622.756 1.036 1.411 1.03h.001c.655 0 1.341-.242 1.341-.89 0-.648-.518-.885-1.554-1.135-1.036-.25-1.836-.56-2.392-.926z" />
    </svg>
  )
}

function SQLIcon() {
  return <Database className="w-4 h-4 text-blue-400/80" />
}

function CPPIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#00599C]">
      <path d="M22.01 13.06l-2.05 3.52c-.59 1.01-1.04 1.35-1.86 1.35H7.9c-.83 0-1.28-.34-1.87-1.35l-2.05-3.52c-.22-.38-.34-.81-.34-1.25s.12-.87.34-1.25l2.05-3.52c.59-1.01 1.04-1.35 1.87-1.35H18.1c.82 0 1.27.34 1.86 1.35l2.05 3.52c.22.38.34.81.34 1.25s-.12.87-.34 1.25zM12 9.5c-2.3 0-4 1.7-4 4s1.7 4 4 4 4-1.7 4-4-1.7-4-4-4z" />
    </svg>
  )
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#61DAFB]">
      <path d="M24 12c0 1.1-.8 2-1.9 2.5-4.2 2-9.4 3-12.1 3-2.7 0-7.9-1-12.1-3C.8 14 0 13.1 0 12c0-1.1.8-2 1.9-2.5 4.2-2 9.4-3 12.1-3 2.7 0 7.9 1 12.1 3 1.1.5 1.9 1.4 1.9 2.5zm-12 1.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5z" />
    </svg>
  )
}

function NextIcon() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.127 17.653l-5.698-7.391V17h-1.35V7h1.15l5.525 7.163V7h1.35v10.653h-.977z" /></svg>
}

function ExpressIcon() {
  return <Globe className="w-4 h-4 text-white/50" />
}

function FastAPIIcon() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#05998B]"><path d="M12 0L9.4 1.3V5h5.1V1.3L12 0zM12 24l2.6-1.3V19h-5.1v3.7L12 24zM5 12l1.3-2.6H8.7v5.1H6.3L5 12zM19 12l-1.3 2.6H15.3v-5.1h2.4L19 12z" /></svg>
}

function NodeIcon() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#339933]"><path d="M12 3.5l6.5 3.8v7.4l-6.5 3.8-6.5-3.8V7.3L12 3.5zM12 0L2 5.8v12.4L12 24l10-5.8V5.8L12 0z" /></svg>
}

function TailwindIcon() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#06B6D4]"><path d="M12 6.5C12 6.5 10 3.5 6 3.5C2 3.5 0 6.5 0 6.5L12 20.5L24 6.5C24 6.5 22 3.5 18 3.5C14 3.5 12 6.5 12 6.5Z" /></svg>
}

function PostgresIcon() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#336791]"><path d="M12 0c-4.4 0-8 3.6-8 8 0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm0 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" /></svg>
}

function MongoIcon() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#47A248]"><path d="M12 0C8.7 0 6 2.7 6 6c0 1.8.8 3.4 2.1 4.5-.4.4-.8.9-1.1 1.5C6.4 13.1 6 14.5 6 16c0 4.4 6 8 6 8s6-3.6 6-8c0-1.5-.4-2.9-1-4-.3-.6-.7-1.1-1.1-1.5 1.3-1.1 2.1-2.7 2.1-4.5 0-3.3-2.7-6-6-6zm0 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" /></svg>
}

function LangChainIcon() {
  return <Terminal className="w-4 h-4 text-emerald-300" />
}

function OpenAIIcon() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white/80"><path d="M22.28 11.02c.07-.3.12-.61.12-.93 0-2.31-1.87-4.18-4.18-4.18-.83 0-1.6.24-2.25.66-.58-.87-1.55-1.44-2.65-1.44-1.4 0-2.58.9-2.99 2.14-.49-.24-1.04-.37-1.63-.37-2.31 0-4.18 1.87-4.18 4.18 0 .42.06.82.18 1.2a4.17 4.17 0 0 0-2.34 3.73c0 2.31 1.87 4.18 4.18 4.18.8 0 1.55-.22 2.18-.6.58.84 1.52 1.39 2.6 1.39 1.25 0 2.33-.74 2.83-1.81.42.22.9.34 1.41.34 2.31 0 4.18-1.87 4.18-4.18 0-.58-.12-1.12-.34-1.62zm-7.63-2.43c.18-.09.38-.14.6-.14a1.2 1.2 0 0 1 1.2 1.2c0 .22-.05.42-.14.6L12 12l2.65-1.41z" /></svg>
}

function DockerIcon() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#2496ED]"><path d="M13.962 8.104h-2.11V5.996h2.11v2.108zM11.233 8.104h-2.11V5.996h2.11v2.108zm0-2.604h-2.11V3.392h2.11v2.108zm2.729 2.604h-2.11V5.996h2.11v2.108zm0-2.604h-2.11V3.392h2.11v2.108zm2.729 2.604h-2.11V5.996h2.11v2.108zm2.73 0h-2.11V5.996h2.11v2.108zm0-2.604h-2.11V3.392h2.11v2.108zm2.73 2.604h-2.11V5.996h2.11v2.108zM0 9.278v.913c.029.028.114.116.143.145.228.145.257.261.286.377.257.696.551 1.45.899 2.116.899 1.768 2.058 3.16 3.655 4.174 1.884 1.189 4.145 1.769 6.276 1.769 1.13L11.26 18c3.044 0 5.682-1.072 7.74-3.13 1.884-1.854 2.898-4.261 2.898-7.391V7.072h-1.623c-.22.58-.696 1.072-1.246 1.391-.667.377-1.45.58-2.261.58-1.74 0-3.334-.841-4.232-2.232l-.232-.348h-1.45v2.116h-2.11V6.492h-2.11v2.116h-2.11V6.492h-2.11v2.116H4.232V6.492h-2.11v2.116H0z" /></svg>
}

function AWSIcon() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF9900]"><path d="M14.07 14.28c-.4-.14-.7-.28-.9-.4-.1-.1-.1-.2 0-.3.1-.1.2-.1.4 0 .3.1.6.2.9.3.5.2 1.1.3 1.6.3.8 0 1.5-.3 1.5-.9 0-.5-.3-.7-.9-.9-.4-.1-1-.3-1.6-.4-.8-.2-1.7-.5-2.2-.8-.6-.4-.9-.9-.9-1.6 0-.8.4-1.5 1.1-2 .9-.6 2.1-.9 3.5-.9.6 0 1.2.1 1.8.2.5.1.9.2 1.3.3.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2-.2-.1-.5-.2-.9-.3-.5-.2-1.1-.3-1.7-.3-.8 0-1.4.2-1.4.7 0 .4.3.6.8.8.4.1 1 .2 1.4.3 1 .2 1.9.4 2.5.8.6.4.9 1 .9 1.8 0 .8-.5 1.6-1.3 2.1-.9.6-2.2.9-3.8.9-.7 0-1.4-.1-2.1-.2zM6.9 10.43c.1-.1.2-.1.3 0l.4.3c.1.1.1.2 0 .3l-2.4 3.7c-.1.1-.2.1-.3 0l-1.6-1.1c-.1-.1-.1-.2 0-.3.1-.1.2-.1.3 0 .1.1.3.2.5.3.3.2.5.4.8.6l1.7-2.6V8.13c0-.1.1-.2.2-.2h1.4c.1 0 .2.1.2.2v4.8l2.2-3.4c.1-.1.2-.1.3 0l2.1 1.4c.1.1.1.2 0 .3l-4 6.2c-.1.1-.2.1-.3 0l-.4-.3c-.1-.1-.1-.2 0-.3l.7-1.1H5.1l-.8 1.2c-.1.1-.2.1-.3 0l-.4-.3c-.1-.1-.1-.2 0-.3l3.3-5.2z" /></svg>
}

function GitIcon() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F05032]"><path d="M23.546 10.93L13.067.452a1.493 1.493 0 0 0-2.11 0l-2.63 2.63l2.843 2.843c.31-.104.664-.159 1.027-.159c1.496 0 2.709 1.213 2.709 2.709c0 .363-.055.717-.159 1.027l2.843 2.843c1.474-.473 2.709-1.213 2.709-2.709c0-1.173-.553-2.186-1.442-2.71zm-9.352 1.606c0 .363-.055.717-.159 1.027l-2.843-2.843c.104-.31.159-.664.159-1.027c0-1.496-1.213-2.709-2.709-2.709c-.363 0-.717.055-1.027.159L4.35 4.35a1.493 1.493 0 0 0 0 2.11l10.479 10.479a1.493 1.493 0 0 0 2.11 0l2.63-2.63l-2.843-2.843c-.31.104-.664.159-1.027.159c-1.496 0-2.709-1.213-2.709-2.709z" /></svg>
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-violet-300">
      <path d="M12 2C7 2 3 6 3 11c0 6 9 11 9 11s9-5 9-11c0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function StatusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
      <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={cn("text-amber-300", className)}>
      <path d="M12 3v4M12 17v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M1 12h4M19 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
