"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Database, Eye, Gamepad2, Terminal, Cpu, ExternalLink, Play, Lightbulb } from "lucide-react"
import { translations, type Language } from "@/lib/translations"

interface ProjectsProps {
  language: Language
}

export function Projects({ language }: ProjectsProps) {
  const t = translations[language].projects

  const projects = [
    {
      title: t.nlpMusic.title,
      description: t.nlpMusic.description,
      icon: <Brain className="text-violet-400" size={24} />,
      tags: ["NLP", "LSTM", "Word2Vec", "PyTorch", "Tokenisation"],
      category: "AI",
    },
    {
      title: t.shell42.title,
      description: t.shell42.description,
      icon: <Terminal className="text-cyan-400" size={24} />,
      tags: ["C", "Linux", "POSIX", "System Programming", "Memory Management"],
      category: "System",
    },
    {
      title: t.sudokuOcr.title,
      description: t.sudokuOcr.description,
      icon: <Eye className="text-blue-400" size={24} />,
      tags: ["OpenCV", "OCR", "C", "GTK", "Cairo", "Backtracking"],
      category: "Computer Vision",
    },
    {
      title: t.iotPipeline.title,
      description: t.iotPipeline.description,
      icon: <Database className="text-emerald-400" size={24} />,
      tags: ["Apache Kafka", "Apache Spark", "Real-time", "Scalability", "IoT"],
      category: "Data Engineering",
    },
    {
      title: t.recommender.title,
      description: t.recommender.description,
      icon: <Lightbulb className="text-amber-400" size={24} />,
      tags: ["SVD", "MovieLens", "IMDb", "Feature Engineering", "Recommendation"],
      category: "Machine Learning",
    },
    {
      title: t.insectoid.title,
      description: t.insectoid.description,
      icon: <Gamepad2 className="text-red-400" size={24} />,
      tags: ["Unity", "C#", "Game AI", "Team Project", "Collision Detection"],
      category: "Game Development",
      videoUrl: "https://www.youtube.com/watch?v=T1cV45VwkWU",
    },
    {
      title: t.melocas.title,
      description: t.melocas.description,
      icon: <Gamepad2 className="text-pink-400" size={24} />,
      tags: ["Game Design", "Unity", "Narrative", "Team Project"],
      category: "Game Development",
      videoUrl: "https://www.youtube.com/watch?v=G2UNdRAuGwg",
      websiteUrl: "https://emonsb.wixsite.com/code002",
    },
    {
      title: "Soulbet",
      description:
        language === "fr"
          ? "Jeu vidéo en cours de création avec mécaniques innovantes et système de gameplay unique."
          : "Video game currently in development with innovative mechanics and unique gameplay system.",
      icon: <Gamepad2 className="text-yellow-400" size={24} />,
      tags: ["Unity", "C#", "Game Development", language === "fr" ? "En cours" : "In Progress"],
      category: "Game Development",
    },
    {
      title: t.aiTexture.title,
      description: t.aiTexture.description,
      icon: <Eye className="text-purple-400" size={24} />,
      tags: ["Computer Vision", "Machine Learning", "OpenCV", "Python", "Supervised Learning"],
      category: "AI",
    },
    {
      title: t.microscopy.title,
      description: t.microscopy.description,
      icon: <Cpu className="text-green-400" size={24} />,
      tags: ["OpenCV", "NumPy", "Image Processing", "Classification", "Microscopy"],
      category: "AI",
    },
    {
      title: t.neuralNetwork.title,
      description: t.neuralNetwork.description,
      icon: <Brain className="text-indigo-400" size={24} />,
      tags: ["Deep Learning", "NumPy", "Python", "Neural Networks", "From Scratch"],
      category: "AI",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-900/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center font-serif bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg text-slate-300 mb-12 text-center max-w-2xl mx-auto">
            {language === "fr"
              ? "Une sélection de mes projets en Intelligence Artificielle, Data Science et développement logiciel"
              : "A selection of my projects in Artificial Intelligence, Data Science and software development"}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 border-violet-500/30 bg-slate-800/80 backdrop-blur-sm transform hover:-translate-y-2 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {project.icon}
                      <Badge
                        variant="secondary"
                        className="text-xs bg-violet-600/20 text-violet-300 border-violet-500/30"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      {project.videoUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-violet-400 hover:text-violet-300 hover:bg-violet-600/20"
                          onClick={() => window.open(project.videoUrl, "_blank")}
                        >
                          <Play size={16} />
                        </Button>
                      )}
                      {project.websiteUrl && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-violet-400 hover:text-violet-300 hover:bg-violet-600/20"
                          onClick={() => window.open(project.websiteUrl, "_blank")}
                        >
                          <ExternalLink size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs text-slate-300 border-violet-500/30 hover:bg-violet-600/20 hover:text-violet-300 transition-colors"
                      >
                        {tag}
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
