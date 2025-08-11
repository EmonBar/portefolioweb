"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageToggleProps {
  language: "en" | "fr"
  onLanguageChange: (lang: "en" | "fr") => void
}

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={() => onLanguageChange(language === "en" ? "fr" : "en")}
        variant="outline"
        size="sm"
        className="bg-slate-800/80 backdrop-blur-sm border-violet-500/50 text-white hover:bg-violet-600/20 hover:border-violet-400"
      >
        <Globe className="mr-2" size={16} />
        {language === "en" ? "FR" : "EN"}
      </Button>
    </div>
  )
}
