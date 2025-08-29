"use client"

import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { translations, type Language } from "@/lib/translations"

interface ExperienceProps {
  language: Language
}

export function Experience({ language }: ExperienceProps) {
  const t = translations[language].experience

  const experiences = [
    {
      title: t.alten.title,
      company: t.alten.company,
      location: t.alten.location,
      period: `Mar 2025–Sep 2025`,
      // chemin relatif pour basePath
      logo: "logos/alten.png",
      description: t.alten.description,
    },
    {
      title: t.bandai.title,
      company: t.bandai.company,
      location: t.bandai.location,
      period: "Aug 2023–Jan 2024",
      // chemin relatif pour basePath
      logo: "logos/bandai-namco.png",
      description: t.bandai.description,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-serif bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-violet-500/30 hover:shadow-xl hover:border-violet-400/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 relative flex-shrink-0 ${
                        exp.company === "Bandai Namco Europe" ? "bg-white rounded-lg p-1" : ""
                      }`}
                    >
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                      <p className="text-lg text-violet-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end mt-4 md:mt-0">
                    <div className="flex items-center text-slate-300 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-200 flex items-start">
                      <span className="text-violet-400 mr-3 mt-2 font-bold">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              <
