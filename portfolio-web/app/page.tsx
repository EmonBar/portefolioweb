"use client"

import { useState } from "react"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { AnimatedBackground } from "@/components/animated-background"
import { LanguageToggle } from "@/components/language-toggle"
import type { Language } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <>
      <AnimatedBackground />
      <LanguageToggle language={language} onLanguageChange={setLanguage} />
      <main className="relative z-10 min-h-screen">
        <Hero language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Contact language={language} />
      </main>
    </>
  )
}
