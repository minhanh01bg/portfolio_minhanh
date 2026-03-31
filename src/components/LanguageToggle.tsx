"use client"

import { Languages } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect, useState } from "react"

export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    setLang(lang === "en" ? "vi" : "en")
  }

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition opacity-0",
          "border-black/10 bg-black/5 text-[--foreground]/80",
          "dark:border-white/20 dark:bg-white/10 dark:text-white/90",
          className
        )}
      >
        <Languages className="h-3.5 w-3.5" />
        <span>EN</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={lang === "en" ? "Translate to Vietnamese" : "Translate to English"}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70",
        "border-black/10 bg-black/5 text-[--foreground]/80 hover:bg-black/10",
        "dark:border-white/20 dark:bg-white/10 dark:text-white/90 dark:hover:bg-white/15",
        className
      )}
    >
      <Languages className="h-3.5 w-3.5" />
      <span>{lang === "en" ? "EN" : "VI"}</span>
    </button>
  )
}
