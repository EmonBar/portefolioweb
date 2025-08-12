"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Wrench, Globe } from "lucide-react"
import { translations, type Language } from "@/lib/translations"

interface SkillsProps {
  language: Language
}

export function Skills({ language }: SkillsProps) {
  const t = translations[language].skills

  const skillCategories = [
    {
      title: t.programming,
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["C", "C++", "C#", "Java", "Python", "SQL"],
    },
    {
      title: t.mlDs,
      icon: <Database className="text-purple-400" size={24} />,
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
    },
    {
      title: t.tools,
      icon: <Wrench className="text-green-400" size={24} />,
      skills: ["Docker", "Git", "Jupyter Notebook", "REST APIs", "Unity"],
    },
    {
      title: t.languages,
      icon: <Globe className="text-orange-400" size={24} />,
      skills: [t.french, t.english, t.japanese, t.german],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-900/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-serif bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border-violet-500/30 bg-slate-800/80 backdrop-blur-sm hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm bg-violet-600/20 text-violet-300 border-violet-500/30 hover:bg-violet-600/30 hover:text-violet-200 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
