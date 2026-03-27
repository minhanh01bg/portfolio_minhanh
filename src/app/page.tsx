"use client"

import { ProjectsIntro, ProjectsShowcase } from "@/components/Projects"
import { ContactIntro, ContactFormSlide } from "@/components/Contact"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Sidebar from "@/components/Sidebar"
import About from "@/components/About"
import { useCallback, useEffect, useMemo, useState, Suspense } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

const sections = [
  { id: "about", label: "About", slides: [About] },
  { id: "experience", label: "Experience", slides: [Experience] },
  { id: "education", label: "Education", slides: [Education] },
  { id: "projects", label: "Projects", slides: [ProjectsIntro, ProjectsShowcase] },
  { id: "contact", label: "Contact", slides: [ContactIntro, ContactFormSlide] },
]

function SectionWrapper({ children, sectionId }: { children: React.ReactNode; sectionId: string }) {
  return (
    <motion.div
      key={sectionId}
      className="absolute inset-0 w-full overflow-y-auto custom-scrollbar"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex min-h-full w-full items-start justify-center py-20 px-4 mt-8 sm:mt-0">
        <div className="w-full max-w-5xl mx-auto">{children}</div>
      </div>
    </motion.div>
  );
}

function HomeContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get initial tab from URL or default to first section
  const initialTab = searchParams.get("tab") || sections[0].id
  const [activeSection, setActiveSection] = useState<string>(initialTab)
  const [slideIndex, setSlideIndex] = useState(0)

  const activeConfig = useMemo(() => sections.find((section) => section.id === activeSection), [activeSection])
  const slides = activeConfig?.slides ?? []
  const ActiveSlide = slides[slideIndex] ?? slides[0]
  const hasPrevSlide = slideIndex > 0
  const hasNextSlide = slideIndex < slides.length - 1

  // Synchronize state with URL parameter on mount and when searchParams change
  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab && sections.some(s => s.id === tab)) {
      setActiveSection(tab)
    }
  }, [searchParams])

  useEffect(() => {
    setSlideIndex(0)
  }, [activeSection])

  const goToSlide = useCallback(
    (direction: "next" | "prev") => {
      if (direction === "next" && hasNextSlide) {
        setSlideIndex((prev) => prev + 1)
      } else if (direction === "prev" && hasPrevSlide) {
        setSlideIndex((prev) => prev - 1)
      }
    },
    [hasNextSlide, hasPrevSlide]
  )

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goToSlide("next")
      } else if (event.key === "ArrowLeft") {
        goToSlide("prev")
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [goToSlide])

  const handleSelectSection = (id: string) => {
    setActiveSection(id)
    setSlideIndex(0)
    // Update URL with the new tab
    const params = new URLSearchParams(searchParams.toString())
    params.set("tab", id)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="font-sans min-h-screen">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-2 sm:gap-6 min-h-screen">
        <Sidebar
          activeSection={activeSection}
          onSelect={handleSelectSection}
        />
        <main className="relative min-h-screen overflow-y-auto">
          <AnimatePresence mode="wait">
            <SectionWrapper key={`${activeSection}-${slideIndex}`} sectionId={`${activeSection}-${slideIndex}`}>
              {ActiveSlide ? <ActiveSlide /> : null}
            </SectionWrapper>
          </AnimatePresence>

          {slides.length > 1 && (
            <div className="pointer-events-none absolute bottom-6 right-4 flex items-center gap-3 text-white/70">
              <button
                type="button"
                onClick={() => goToSlide("prev")}
                disabled={!hasPrevSlide}
                className="pointer-events-auto rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] disabled:opacity-40"
              >
                Prev
              </button>
              <span className="text-sm">
                {slideIndex + 1}/{slides.length}
              </span>
              <button
                type="button"
                onClick={() => goToSlide("next")}
                disabled={!hasNextSlide}
                className="pointer-events-auto rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <HomeContent />
    </Suspense>
  )
}
