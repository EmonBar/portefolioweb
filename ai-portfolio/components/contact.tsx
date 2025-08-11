"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { translations, type Language } from "@/lib/translations"

interface ContactProps {
  language: Language
}

export function Contact({ language }: ContactProps) {
  const t = translations[language].contact

  return (
    <section id="contact" className="py-20 bg-slate-900/95 backdrop-blur-sm text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center font-serif bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-slate-300 mb-12 text-center max-w-2xl mx-auto">{t.description}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/80 backdrop-blur-sm border-violet-500/30 hover:border-violet-400/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-white">{t.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 hover:text-violet-400 transition-colors">
                  <Mail className="text-violet-400" size={20} />
                  <span className="text-slate-300">emon.sb@hotmail.com</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-violet-400 transition-colors">
                  <Phone className="text-violet-400" size={20} />
                  <span className="text-slate-300">+33 7 82 22 25 34</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-violet-400 transition-colors">
                  <MapPin className="text-violet-400" size={20} />
                  <span className="text-slate-300">{t.location}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 backdrop-blur-sm border-violet-500/30 hover:border-violet-400/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-white">{t.socialNetworks}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/emon-barberis-675198267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-300 hover:text-violet-400 transition-all duration-200 transform hover:translate-x-2"
                >
                  <Linkedin className="text-violet-400" size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/EmonBar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-300 hover:text-violet-400 transition-all duration-200 transform hover:translate-x-2"
                >
                  <Github className="text-violet-400" size={20} />
                  <span>GitHub</span>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-200"
              onClick={() => (window.location.href = "mailto:emon.sb@hotmail.com")}
            >
              <Mail className="mr-2" size={20} />
              {t.sendEmail}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
