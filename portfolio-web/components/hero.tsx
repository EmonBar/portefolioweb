"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { translations, type Language } from "@/lib/translations"

interface HeroProps {
  language: Language
}

export function Hero({ language }: HeroProps) {
  const t = translations[language].hero

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-serif">
              Emon Barberis
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">{t.title}</p>
            <p className="text-lg md:text-xl text-violet-400 mb-8 font-medium">{t.subtitle}</p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">{t.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-200">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200 shadow-lg shadow-violet-500/25"
            >
              {t.viewProjects}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:border-violet-400 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200"
            >
              {t.contactMe}
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up animation-delay-400">
            <a
              href="mailto:emon.sb@hotmail.com"
              className="text-slate-400 hover:text-violet-400 transition-all duration-200 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/emonbarberis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-violet-400 transition-all duration-200 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-violet-400 transition-all duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("experience")}
            className="animate-bounce text-slate-400 hover:text-violet-400 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
