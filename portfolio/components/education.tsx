"use client"

import { Calendar, MapPin, GraduationCap, ExternalLink } from "lucide-react"
import Image from "next/image"
import { translations, type Language } from "@/lib/translations"

interface EducationProps {
  language: Language
}

export function Education({ language }: EducationProps) {
  const t = translations[language].education

  const education = [
    {
      degree: t.epita.title,
      school: "EPITA",
      location: t.epita.location,
      period: "2020–2025",
      specialization: t.epita.description,
      logo: "/logos/epita.png",
      current: true,
      website: "https://www.epita.fr/",
    },
    {
      degree: t.heriot.title,
      school: "Heriot-Watt University",
      location: t.heriot.location,
      period: "Jan–Jun 2022",
      specialization: t.heriot.description,
      logo: "/logos/heriotwatt.png",
      current: false,
      website: "https://www.hw.ac.uk/",
    },
    {
      degree: t.sit.title,
      school: "Shibaura Institute of Technology",
      location: t.sit.location,
      period: "Sep 2024–Jan 2025",
      specialization: t.sit.description,
      logo: "/logos/sit.png",
      current: false,
      website: "https://www.shibaura-it.ac.jp/en/",
    },
  ]

  return (
    <section id="education" className="py-20 bg-slate-800/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-serif bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-700/80 backdrop-blur-sm p-8 rounded-2xl border border-violet-500/30 relative hover:shadow-lg hover:border-violet-400/50 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {edu.current && (
                  <div className="absolute top-4 right-4 bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    Current
                  </div>
                )}
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-600/20 p-3 rounded-full">
                    <GraduationCap className="text-violet-400" size={24} />
                  </div>
                  <a
                    href={edu.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 relative flex-shrink-0 hover:scale-110 transition-transform duration-200 group"
                  >
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={`${edu.school} logo`}
                      fill
                      className="object-contain"
                    />
                    <ExternalLink className="absolute -top-1 -right-1 w-4 h-4 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-violet-400 font-medium mb-3 hover:text-violet-300 transition-colors inline-flex items-center gap-2"
                    >
                      {edu.school}
                      <ExternalLink size={16} />
                    </a>
                    <p className="text-slate-200 mb-4 leading-relaxed">{edu.specialization}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-slate-300">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
