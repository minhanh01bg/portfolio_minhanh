"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cardItem, sectionContainer } from "@/lib/motion"
import { X, ZoomIn } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"


type EducationItem = {
  degree: string
  institution: string
  period: string
  focus: string
}



type CertificationItem = {
  title: string
  issuer: string
  description: string
  image?: string
  link?: string
}

const certifications: CertificationItem[] = [
  {
    title: "Algorithm & Data Structure",
    issuer: "Samsung",
    description: "Advanced graph theory, optimization, and large-scale problem solving.",
  },
  {
    title: "Ubuntu with WSL",
    issuer: "Canonical",
    description: "Official Ubuntu certification covering WSL setup, Linux tooling, and cross-platform developer environments.",
    image: "/certificates/Vu Minh Anh Ubuntu with WSL Certificate.png",
  },
  {
    title: "JavaScript Advanced",
    issuer: "F8",
    description: "Advanced JavaScript certification covering asynchronous programming, ES6+, DOM manipulation, and performance optimization.",
    image: "/certificates/Vu Minh Anh JavaScript Advanced Certificate.png",
    link: "/certificates/Vũ Minh Anh JavaScript Advanced Certificate.pdf",
  },
]

export default function Education() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const localizedEducation = t("education.items") as EducationItem[]
  const localizedCertifications = t("education.certificates") as CertificationItem[]

  const finalCerts = localizedCertifications.map((cert, idx) => ({
    ...cert,
    image: certifications[idx]?.image,
    link: certifications[idx]?.link
  }))

  return (
    <section id="education" className="w-full max-w-[72rem] mx-auto px-2 sm:px-4 lg:px-8 scroll-mt-24">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">{t("education.tag")}</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">{t("education.title")}</h2>
          <p className="text-base text-slate-500 dark:text-white/65 max-w-3xl">
            {t("education.description")}
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {localizedEducation.map((item) => (
            <motion.article
              key={item.degree}
              variants={cardItem}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] p-6 backdrop-blur"
            >
              <div className="flex items-center justify-between text-slate-500 dark:text-white/70">
                <span className="text-xs uppercase tracking-[0.3em]">{item.period}</span>
                <span className="text-xs rounded-full border border-slate-200 dark:border-white/20 px-3 py-1 text-slate-500 dark:text-white/60">{t("education.focusLabel")}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
              <p className="text-sm text-slate-500 dark:text-white/70">{item.institution}</p>
              <p className="mt-4 text-sm text-slate-500 dark:text-white/75">{item.focus}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {finalCerts.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardItem}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] p-6 backdrop-blur h-full"
            >
              <div className="flex flex-col gap-6 h-full">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">{t("education.certTag")}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        {t("education.viewPdf")}
                      </a>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white leading-tight">{cert.title}</h3>
                  <p className="text-slate-500 dark:text-white/60 text-xs italic">{cert.issuer}</p>
                  <p className="text-slate-500 dark:text-white/70 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                {cert.image && (
                  <button
                    onClick={() => setSelectedImage(cert.image!)}
                    className="group/btn relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/15 bg-black/10 dark:bg-black/40 aspect-[3/2] cursor-zoom-in w-full"
                  >
                    <Image
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      fill
                      className="object-cover transition-all duration-500 group-hover/btn:scale-105 group-hover/btn:opacity-90"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/btn:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                      <div className="bg-slate-100 dark:bg-white/20 p-2 rounded-full border border-slate-200 dark:border-white/20">
                        <ZoomIn className="w-5 h-5 text-slate-900 dark:text-white shadow-sm" />
                      </div>
                    </div>
                  </button>
                )}
                {!cert.image && (
                  <div className="flex items-center justify-center p-8 rounded-xl border border-dashed border-slate-200 dark:border-white/20 bg-slate-100 dark:bg-white/[0.02]">
                    <div className="text-center">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 mb-3 text-slate-500 dark:text-white/40">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-white/30 tracking-wider uppercase font-medium">{t("education.digitalCredentials")}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm cursor-zoom-out"
            >
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 transition-colors z-[10000]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-[90vw] h-[80vh] max-w-5xl max-h-[800px] overflow-hidden rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Certificate full view"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}

